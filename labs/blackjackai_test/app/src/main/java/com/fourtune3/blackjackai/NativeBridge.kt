import android.util.Log
import android.webkit.JavascriptInterface
import androidx.activity.ComponentActivity
import androidx.lifecycle.ProcessLifecycleOwner
import androidx.lifecycle.lifecycleScope
import kotlinx.coroutines.launch
import org.json.JSONObject

class NativeBridge(
  private val activity: ComponentActivity,
  private val auth: OkHttpAuthApi,
  private val webView: android.webkit.WebView, // 결과를 웹에 넘길거면 필요
) {

  //  @RequiresApi(Build.VERSION_CODES.O)
  @JavascriptInterface
  fun googleLogin() {
//    activity.lifecycleScope.launch {
    ProcessLifecycleOwner.get().lifecycleScope.launch {

      try {
        val idToken = GoogleSignInUseCase(
          activity = activity,
          webClientId = "561189981692-3lpfcg71slt9ga26tmugotq8ej9ah78h.apps.googleusercontent.com"
        ).signIn()

        // ✅ 서버로 전송해서 세션 발급
        when (val r = auth.loginWithGoogle(idToken)) {
          is ApiResult.Ok -> {
            Log.d("Test", "r.value.pCode : " + r.value.data);
            val sessionId = r.value.data.pCode

            // 예: WebView localStorage에 넣고 이벤트 쏘기
            sendSessionToWeb(sessionId)
          }

          is ApiResult.HttpError -> {
            notifyWebError("HTTP_${r.code}", r.body ?: "")
          }

          is ApiResult.NetworkError -> {
            notifyWebError("NETWORK", r.e.message ?: "unknown")
          }
        }

      } catch (e: androidx.credentials.exceptions.GetCredentialException) {
        notifyWebError("CREDENTIAL", e.message ?: "cancelled")
      }
    }
  }

//  private fun sendSessionToWeb(pCode: String) {
//    val safe = pCode.replace("'", "\\'")
//    val js = """
//      (function(){
//        localStorage.setItem('googleAuthPCode', '$safe');
//        window.dispatchEvent(new CustomEvent('nativeSessionReady', { detail: { sessionId: '$safe' }}));
//      })();
//    """.trimIndent()
//
//    webView.post { webView.evaluateJavascript(js, null) }
//  }


  private fun sendSessionToWeb(pCode: String) {
    // JS 문자열로 안전하게 감싸기 (따옴표/역슬래시/개행 등 포함 처리)
    val pCodeJs = JSONObject.quote(pCode) // 결과는 "...." 형태의 JS string literal

    val js = """
    (function(){
      try {
        var pCode = $pCodeJs;

        console.log(" test1 " );

        // 1) 저장(필요한 경우만). 저장 후 사용하면 웹에서 즉시 삭제 권장.
        localStorage.setItem('googleAuthPCode', pCode);

        console.log(" test2 " , pCode );
        // 2) 이벤트 발행
        window.dispatchEvent(new CustomEvent('nativeSessionReady', {
          detail: { sessionId: pCode }
        }));


      } catch (e) {
        console.error('[nativeSessionReady] inject failed', e);
      }
    })();
  """.trimIndent()


    // 3) (선택) 네이티브로 ACK 보내기 위한 훅이 있으면 호출
//    if (window.NativeAck && typeof window.NativeAck.onSessionInjected === 'function') {
//      window.NativeAck.onSessionInjected(pCode);
//    }


    webView.post {
      if (!webView.isAttachedToWindow) {
        Log.d("Test", " webView.isAttachedToWindow : false")
        return@post
      }

      Log.d("Test", " webView.isAttachedToWindow : true")
      webView.evaluateJavascript(js, null)
    }
  }

  private fun notifyWebError(code: String, message: String) {
    val m = message.replace("'", "\\'")
    val js = """
      (function(){
        window.dispatchEvent(new CustomEvent('nativeLoginError', { detail: { code: '$code', message: '$m' }}));
      })();
    """.trimIndent()

    webView.post { webView.evaluateJavascript(js, null) }
  }
}
