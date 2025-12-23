import android.os.Build
import kotlinx.serialization.encodeToString

import android.util.Log
import android.webkit.JavascriptInterface
import androidx.activity.ComponentActivity
import androidx.annotation.RequiresApi
import androidx.credentials.exceptions.GetCredentialException
import androidx.lifecycle.ProcessLifecycleOwner
import androidx.lifecycle.lifecycleScope
import kotlinx.coroutines.launch
import kotlinx.serialization.json.Json

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
            Log.d("Test", "r.value.pCode : " + r.value.pCode);
//            val sessionId = r.value.sessionId
//
//            // 예: WebView localStorage에 넣고 이벤트 쏘기
//            sendSessionToWeb(sessionId)
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

  private fun sendSessionToWeb(sessionId: String) {
    val safe = sessionId.replace("'", "\\'")
    val js = """
      (function(){
        localStorage.setItem('sessionId', '$safe');
        window.dispatchEvent(new CustomEvent('nativeSessionReady', { detail: { sessionId: '$safe' }}));
      })();
    """.trimIndent()

    webView.post { webView.evaluateJavascript(js, null) }
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
