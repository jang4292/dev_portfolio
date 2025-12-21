import android.app.Activity
import android.util.Log
import android.webkit.JavascriptInterface
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.compose.runtime.rememberCoroutineScope
import androidx.credentials.exceptions.GetCredentialException
import androidx.lifecycle.lifecycleScope
import kotlinx.coroutines.launch

class NativeBridge(private val activity: ComponentActivity) {
//  val scope = rememberCoroutineScope()

  @JavascriptInterface
  fun googleLogin() {
    activity.runOnUiThread {
      Toast.makeText(activity, "googleLogin", Toast.LENGTH_SHORT).show()
    }

    activity.lifecycleScope.launch {

//    }

//    scope.launch {
      try {
        val idToken = GoogleSignInUseCase(
          activity = activity,
          webClientId = "934546197138-7h9e8te9kkn5e9i02hmdpua411mhjt97.apps.googleusercontent.com"
        ).signIn()

        // ✅ idToken을 백엔드로 전송해서 검증 후 세션 발급 권장
        Log.d("Auth", "idToken length=${idToken?.length}")
      } catch (e: GetCredentialException) {
        // 사용자가 취소/계정 없음/기타 오류 모두 여기로 옴
        Log.w("Auth", "Google sign-in failed", e)
      }
    }
  }
}
