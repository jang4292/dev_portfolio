import android.app.Activity
import android.util.Log
import androidx.credentials.CredentialManager
import androidx.credentials.CustomCredential
import androidx.credentials.GetCredentialRequest
import androidx.credentials.GetCredentialResponse
import com.google.android.libraries.identity.googleid.GetGoogleIdOption
import com.google.android.libraries.identity.googleid.GoogleIdTokenCredential

class GoogleSignInUseCase(
  private val activity: Activity,
  private val webClientId: String, // Web application client id (server client id)
) {
  private val credentialManager = CredentialManager.create(activity)

//  suspend fun signIn(): String? {
//    // 1) 우선: 이전에 로그인했던 계정만 보여주기(선호 UX)
//    val token = runCatching { requestIdToken(filterAuthorizedOnly = true) }.getOrNull()
//    if (token != null) return token
//    // 2) fallback: 기기 내 구글 계정 전체 노출
//    Log.d("TEST" , " ***  signIN runCatching")
//    return runCatching { requestIdToken(filterAuthorizedOnly = false) }.getOrNull()
//  }

  suspend fun signIn(): String {
    runCatching { return requestIdToken(filterAuthorizedOnly = true) }
      .onFailure { Log.w("Auth", "authorizedOnly=true failed", it) }

    runCatching { return requestIdToken(filterAuthorizedOnly = false) }
      .onFailure { Log.w("Auth", "authorizedOnly=false failed", it) }
      .getOrThrow()

    error("unreachable")
  }

  private suspend fun requestIdToken(filterAuthorizedOnly: Boolean): String {
    val googleIdOption = GetGoogleIdOption.Builder()
      // "Your server's client ID, not your Android client ID."
      .setServerClientId(webClientId)
      .setFilterByAuthorizedAccounts(filterAuthorizedOnly)
      // 자동 선택(조건 충족 시 자동 로그인)
//      .setAutoSelectEnabled(true)
      .setAutoSelectEnabled(false)
      .build()

    val request = GetCredentialRequest.Builder()
      .addCredentialOption(googleIdOption)
      .build()

    val result: GetCredentialResponse = credentialManager.getCredential(
      request = request,
      context = activity
    )

    val credential = result.credential
    if (credential is CustomCredential &&
      credential.type == GoogleIdTokenCredential.TYPE_GOOGLE_ID_TOKEN_CREDENTIAL
    ) {
      val googleCred = GoogleIdTokenCredential.createFrom(credential.data)
      return googleCred.idToken
    }

    error("Unexpected credential type: ${credential::class.java.name}")
  }
}
