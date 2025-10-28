package com.yhjang.blackjackai_test

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.ViewGroup
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.OnBackPressedCallback
import androidx.appcompat.app.AppCompatActivity
//import com.example.webviewfull.databinding.ActivityMainBinding
import com.yhjang.blackjackai_test.databinding.ActivityMainBinding



class MainActivity : AppCompatActivity() {

  private lateinit var binding: ActivityMainBinding
//  private val START_URL = "https://example.com" // ← 표시할 URL
  private val START_URL = "https://blackjack-web-mobile.s3.ap-northeast-2.amazonaws.com/index.html" // ← 표시할 URL

  @SuppressLint("SetJavaScriptEnabled")
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    binding = ActivityMainBinding.inflate(layoutInflater)
    setContentView(binding.root)

    // 디버그에서만 웹뷰 디버깅 허용 (chrome://inspect)
    WebView.setWebContentsDebuggingEnabled(true)

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
    onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
      override fun handleOnBackPressed() {
        if (binding.webView.canGoBack()) binding.webView.goBack()
        else finish()
      }
    })
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
