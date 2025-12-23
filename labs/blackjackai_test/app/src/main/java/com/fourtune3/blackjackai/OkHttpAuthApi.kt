import kotlinx.coroutines.suspendCancellableCoroutine
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import okhttp3.*
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException
import java.util.concurrent.TimeUnit
import kotlin.coroutines.resume

class OkHttpAuthApi(
  private val baseUrl: String,
  private val client: OkHttpClient = OkHttpClient.Builder()

//    .connectTimeout(10, TimeUnit.SECONDS)
//    .readTimeout(15, TimeUnit.SECONDS)
//    .writeTimeout(15, TimeUnit.SECONDS)
    .connectTimeout(10, TimeUnit.SECONDS)
    .writeTimeout(20, TimeUnit.SECONDS)
    .readTimeout(60, TimeUnit.SECONDS)
    .callTimeout(70, TimeUnit.SECONDS)
    .build(),
  private val json: Json = Json { ignoreUnknownKeys = true }
) : AuthApi {

  private val JSON = "application/json; charset=utf-8".toMediaType()

  override suspend fun loginWithGoogle(idToken: String): ApiResult<GoogleLoginResponse> =
    suspendCancellableCoroutine { cont ->

//      val payload = GoogleLoginRequest(idToken = idToken)
      val payload = GoogleLoginRequest(
//        cmd = "google_login",
        cmd = "auth_google",
        data = GoogleLoginData(idToken = idToken)
      )

      val body = json.encodeToString(payload).toRequestBody(JSON)


      val request = Request.Builder()
//        .url("$baseUrl/auth/google")
//      https://dev.4tune3.com:41618/googleAuth
        .url("$baseUrl/googleAuth")
        .post(body)
        .header("Content-Type", "application/json")
        .build()

      val call = client.newCall(request)
      cont.invokeOnCancellation { call.cancel() }

      call.enqueue(object : Callback {
        override fun onFailure(call: Call, e: IOException) {
          if (call.isCanceled()) return
          if (cont.isCancelled) return
          cont.resume(ApiResult.NetworkError(e))
        }

        override fun onResponse(call: Call, response: Response) {
          response.use {
            val code = it.code
            val text = it.body?.string()

            if (code in 200..299 && !text.isNullOrBlank()) {
              try {
                val parsed: GoogleLoginResponse = json.decodeFromString(text)
                cont.resume(ApiResult.Ok(parsed, code))
              } catch (e: Exception) {
                cont.resume(ApiResult.NetworkError(e)) // 파싱 실패
              }
            } else {
              cont.resume(ApiResult.HttpError(code, text))
            }
          }
        }
      })
    }
}
