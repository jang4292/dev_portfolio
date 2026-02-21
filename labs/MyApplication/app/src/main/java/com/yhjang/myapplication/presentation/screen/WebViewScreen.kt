package com.yhjang.myapplication.presentation.screen

import android.annotation.SuppressLint
import android.graphics.Bitmap
import android.webkit.WebChromeClient
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.compose.BackHandler
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.viewinterop.AndroidView
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import com.yhjang.myapplication.core.bridge.NativeBridge
import com.yhjang.myapplication.presentation.viewmodel.WebViewViewModel

/**
 * Composable screen that renders a full-screen [WebView] with:
 *  - An iOS-compatible JavaScript bridge (window.webkit.messageHandlers.bridge)
 *  - Loading progress indicator
 *  - Error handling
 *  - Hardware back-button navigation inside the WebView
 *
 * WebView를 전체 화면으로 렌더링하는 Composable 화면:
 *  - iOS 호환 JavaScript 브릿지 (window.webkit.messageHandlers.bridge)
 *  - 로딩 진행률 표시기
 *  - 오류 처리
 *  - WebView 내부 하드웨어 뒤로가기 버튼 내비게이션
 *
 * @param url         The URL to load (로드할 URL)
 * @param modifier    Optional [Modifier] applied to the root [Box] (루트 [Box]에 적용되는 선택적 [Modifier])
 * @param viewModel   Injected ViewModel (주입된 ViewModel)
 */
@SuppressLint("SetJavaScriptEnabled")
@Composable
fun WebViewScreen(
    url: String,
    modifier: Modifier = Modifier,
    viewModel: WebViewViewModel = viewModel()
) {
    // ─── State ─────────────────────────────────────────────────────────────────
    val isLoading by viewModel.isLoading.collectAsStateWithLifecycle()
    val progress by viewModel.loadingProgress.collectAsStateWithLifecycle()
    val errorMessage by viewModel.errorMessage.collectAsStateWithLifecycle()

    // Keep a reference to the WebView so BackHandler can call goBack()
    // BackHandler에서 goBack()을 호출할 수 있도록 WebView 참조 유지
    var webViewRef by remember { mutableStateOf<WebView?>(null) }

    // ─── Back navigation inside WebView ───────────────────────────────────────
    BackHandler(enabled = webViewRef?.canGoBack() == true) {
        webViewRef?.goBack()
    }

    Box(modifier = modifier.fillMaxSize()) {
        // ── WebView ────────────────────────────────────────────────────────────
        AndroidView(
            modifier = Modifier.fillMaxSize(),
            factory = { context ->
                WebView(context).apply {
                    webViewRef = this

                    // ── Settings ────────────────────────────────────────────
                    settings.apply {
                        javaScriptEnabled = true       // required for bridge / 브릿지에 필수
                        domStorageEnabled = true
                        allowFileAccess = false
                        mixedContentMode =
                            android.webkit.WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE
                    }

                    // ── iOS-compatible bridge setup ──────────────────────────
                    // Register the native Java object under INTERFACE_NAME so that
                    // the injected JS shim can delegate calls to it.
                    //
                    // JS 심(shim)이 호출을 위임할 수 있도록 INTERFACE_NAME으로
                    // 네이티브 Java 객체를 등록합니다.
                    addJavascriptInterface(
                        NativeBridge { message -> viewModel.onBridgeMessage(message) },
                        NativeBridge.INTERFACE_NAME
                    )

                    // ── WebViewClient ────────────────────────────────────────
                    webViewClient = object : WebViewClient() {

                        override fun onPageStarted(
                            view: WebView,
                            url: String?,
                            favicon: Bitmap?
                        ) {
                            super.onPageStarted(view, url, favicon)
                            viewModel.onPageStarted()
                        }

                        override fun onPageFinished(view: WebView, url: String?) {
                            super.onPageFinished(view, url)
                            viewModel.onPageFinished()

                            // Inject the iOS-compatible shim after every page load so that
                            // single-page-app navigations also receive the bridge.
                            //
                            // SPA 내비게이션에서도 브릿지를 사용할 수 있도록
                            // 매 페이지 로드 후 iOS 호환 심을 주입합니다.
                            view.evaluateJavascript(NativeBridge.BRIDGE_INIT_SCRIPT, null)
                        }

                        @Suppress("OVERRIDE_DEPRECATION")
                        override fun onReceivedError(
                            view: WebView,
                            errorCode: Int,
                            description: String?,
                            failingUrl: String?
                        ) {
                            super.onReceivedError(view, errorCode, description, failingUrl)
                            viewModel.onError(description ?: "Unknown error")
                        }

                        override fun onReceivedError(
                            view: WebView,
                            request: WebResourceRequest,
                            error: WebResourceError
                        ) {
                            super.onReceivedError(view, request, error)
                            // Only report errors for the main frame to avoid noisy sub-resource errors
                            // 서브 리소스 오류 노이즈를 방지하기 위해 메인 프레임 오류만 보고합니다
                            if (request.isForMainFrame) {
                                viewModel.onError(error.description.toString())
                            }
                        }
                    }

                    // ── WebChromeClient ──────────────────────────────────────
                    webChromeClient = object : WebChromeClient() {
                        override fun onProgressChanged(view: WebView, newProgress: Int) {
                            super.onProgressChanged(view, newProgress)
                            viewModel.onProgressChanged(newProgress)
                        }
                    }

                    loadUrl(url)
                }
            }
        )

        // ── Loading progress bar ───────────────────────────────────────────────
        if (isLoading && progress in 1..99) {
            LinearProgressIndicator(
                progress = { progress / 100f },
                modifier = Modifier
                    .fillMaxWidth()
                    .align(Alignment.TopCenter)
            )
        }

        // ── Full-screen spinner for initial load ───────────────────────────────
        if (isLoading && progress == 0) {
            CircularProgressIndicator(modifier = Modifier.align(Alignment.Center))
        }

        // ── Error message overlay ──────────────────────────────────────────────
        if (errorMessage != null) {
            Text(
                text = "Error: $errorMessage",
                modifier = Modifier.align(Alignment.Center)
            )
        }
    }
}
