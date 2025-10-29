package com.yhjang.blackjackai_test

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Context
import android.os.Build
import android.os.Bundle
import android.view.View
import android.view.ViewGroup
import android.view.WindowManager
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import androidx.activity.OnBackPressedCallback
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
//import com.example.webviewfull.databinding.ActivityMainBinding
import com.yhjang.blackjackai_test.databinding.ActivityMainBinding
import org.json.JSONObject


class MainActivity : AppCompatActivity() {

  private lateinit var binding: ActivityMainBinding

  // === 모드 스위치 ===
  private val USE_IMMERSIVE = true          // true면 진짜 몰입형(시스템 바 숨김)
  private val APPLY_SAFE_PADDING = true      // true면 시스템 인셋만큼 padding 적용(겹침 방지)

  //  private val START_URL = "https://example.com" // ← 표시할 URL
  private val START_URL =
//    "http://192.168.0.8:7456/web-mobile/web-mobile/index.html"
    "https://blackjack-web-mobile.s3.ap-northeast-2.amazonaws.com/index.html" // ← 표시할 URL

  @SuppressLint("SetJavaScriptEnabled")
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    binding = ActivityMainBinding.inflate(layoutInflater)
    setContentView(binding.root)

    // 1) Edge-to-Edge: 시스템 바 영역까지 컨텐트 확장
    WindowCompat.setDecorFitsSystemWindows(window, false)

    // (API 28+) 노치 영역도 사용
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
      window.attributes.layoutInDisplayCutoutMode =
        WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES
    }

    // 2) 상태바/내비바 아이콘 밝기(배경색에 맞춰 조정: true=검은 아이콘, false=흰 아이콘)
    val controller = WindowInsetsControllerCompat(window, window.decorView)
    controller.isAppearanceLightStatusBars = true   // 밝은 배경이면 true
    controller.isAppearanceLightNavigationBars = true

    // 3) (선택) 시스템 인셋만큼 루트에 패딩 적용 → 컨텐츠가 가려지지 않게
    if (APPLY_SAFE_PADDING && !USE_IMMERSIVE) {
      ViewCompat.setOnApplyWindowInsetsListener(binding.root) { v, insets ->
        val sb = insets.getInsets(WindowInsetsCompat.Type.systemBars())
        v.setPadding(sb.left, sb.top, sb.right, sb.bottom)
        WindowInsetsCompat.CONSUMED
      }
    }

    // 4) 진짜 몰입형 모드(시스템 바 숨김) 옵션
    if (USE_IMMERSIVE) enableImmersive(controller)

    // 디버그에서만 웹뷰 디버깅 허용 (chrome://inspect)
    WebView.setWebContentsDebuggingEnabled(true)

    binding.webView.addJavascriptInterface(
      LegacyJsInterface(binding.webView, this),
      "AndroidBridge"
    )

    with(binding.webView) {
      settings.javaScriptEnabled = true
      settings.domStorageEnabled = true
      settings.databaseEnabled = true
      settings.useWideViewPort = true
      settings.loadWithOverviewMode = true
      settings.cacheMode = WebSettings.LOAD_DEFAULT
      // (필요 시) HTTP/HTTPS 혼합 컨텐츠 허용:
      // settings.mixedContentMode = WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE

      webViewClient = object : WebViewClient() {
        // 기본 동작: 모든 링크를 WebView 내부에서 열기
        override fun shouldOverrideUrlLoading(view: WebView?, url: String?): Boolean {
          return false
        }
      }
      webChromeClient = WebChromeClient()


      // 시작 URL 로드
      val urlFromIntent = intent?.data?.toString()
      loadUrl(urlFromIntent ?: START_URL)

    }


    // 하드웨어 뒤로가기: WebView 히스토리가 있으면 goBack()
    // 뒤로가기: WebView 히스토리가 있으면 goBack()
    onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
      override fun handleOnBackPressed() {
        if (binding.webView.canGoBack()) binding.webView.goBack()
        else finish()
      }
    })
  }

  private fun enableImmersive(controller: WindowInsetsControllerCompat) {
    controller.systemBarsBehavior =
      WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
    controller.hide(WindowInsetsCompat.Type.systemBars())

    // 포커스 되돌아오면 다시 숨기기 (일부 기기에서 자동 복원됨)
    window.decorView.setOnSystemUiVisibilityChangeListener { visibility ->
      val barsVisible = (visibility and View.SYSTEM_UI_FLAG_FULLSCREEN) == 0
      if (barsVisible) controller.hide(WindowInsetsCompat.Type.systemBars())
    }
  }

  override fun onPause() {
    binding.webView.onPause()
    super.onPause()
  }

  override fun onResume() {
    super.onResume()
    binding.webView.onResume()
  }

  override fun onDestroy() {
    // 메모리 릭 방지
    (binding.root as? ViewGroup)?.removeView(binding.webView)
    binding.webView.removeAllViews()
    binding.webView.destroy()
    super.onDestroy()
  }
}

class LegacyJsInterface(private val webView: WebView, private val context: Context) {

  @JavascriptInterface
  fun postMessage(json: String) {
    try {
      val obj = JSONObject(json)
      when (obj.optString("type")) {
        "purchase" -> {
          // 구매 처리 후 결과를 JS 콜백으로 전달
          val pCode = obj.optString("sku")
          Toast.makeText(context, pCode, Toast.LENGTH_SHORT).show()
          val result = """{"type":"purchaseResult","ok":true}"""
          webView.post {
            webView.evaluateJavascript(
              "window.onNativeMessage && window.onNativeMessage($result);",
              null
            )
          }
        }
      }
    } catch (_: Exception) { /* no-op */
    }
  }
}

