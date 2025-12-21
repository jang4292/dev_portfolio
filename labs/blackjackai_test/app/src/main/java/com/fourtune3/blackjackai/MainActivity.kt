package com.fourtune3.blackjackai

import SocialLinkBridge
import android.annotation.SuppressLint
import android.content.Context
import android.os.Bundle
import android.util.Log
import android.view.View
import android.view.ViewGroup
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import androidx.activity.OnBackPressedCallback
import androidx.appcompat.app.AppCompatActivity
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import com.fourtune3.blackjackai.databinding.ActivityMainBinding
import org.json.JSONObject


class MainActivity : AppCompatActivity() {

  private lateinit var binding: ActivityMainBinding

  private val START_URL = BuildConfig.BASE_URL;

  @SuppressLint("SetJavaScriptEnabled")
  override fun onCreate(savedInstanceState: Bundle?) {
    installSplashScreen()
    super.onCreate(savedInstanceState)

    binding = ActivityMainBinding.inflate(layoutInflater)
    setContentView(binding.root)

    val overlay = findViewById<View>(R.id.launchOverlay)
    // 1) Edge-to-Edge: 시스템 바 영역까지 컨텐트 확장
    WindowCompat.setDecorFitsSystemWindows(window, false)

    // 2) 상태바/내비바 아이콘 밝기(배경색에 맞춰 조정: true=검은 아이콘, false=흰 아이콘)
    val controller = WindowInsetsControllerCompat(window, window.decorView)
    controller.isAppearanceLightStatusBars = true   // 밝은 배경이면 true
    controller.isAppearanceLightNavigationBars = true

    // 4) 진짜 몰입형 모드(시스템 바 숨김) 옵션
    enableImmersive(controller)

    // 디버그에서만 웹뷰 디버깅 허용 (chrome://inspect)
    WebView.setWebContentsDebuggingEnabled(true)

//    binding.webView.addJavascriptInterface(
//      LegacyJsInterface(binding.webView, this),
//      "AndroidBridge"
//    )

    binding.webView.addJavascriptInterface(SocialLinkBridge(this), "socialLinkBridge")

    binding.webView.addJavascriptInterface(Bridge {
      Log.d("Test", "addJavascriptInterface / Bridge ")
      overlay.animate().alpha(0f).setDuration(180).withEndAction {
        runOnUiThread {
          overlay.visibility = View.GONE
        }
        Log.d("Test", "Animation done / visibility GONE")
      }.start()
    }, "Native")

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

//  private fun openFanPageUrl(urlString: String) {
//    val uri = Uri.parse(urlString)
//
//    // ACTION_VIEW 인텐트 생성
//    val intent = Intent(Intent.ACTION_VIEW, uri)
//
//    // 처리 가능한 앱 있는지 체크 (브라우저)
//    val packageManager = this.packageManager
//    if (intent.resolveActivity(packageManager) != null) {
//      startActivity(intent)
//    } else {
//      // 브라우저 없음 등 에러 처리
//      Log.e("GameWebViewActivity", "No activity to handle VIEW intent: $urlString")
//    }
//  }

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

class Bridge(private val onWebBootstrapped: () -> Unit) {
  @android.webkit.JavascriptInterface
  fun webBootstrapped() = onWebBootstrapped()
}
