interface AuthApi {
  suspend fun loginWithGoogle(idToken: String): ApiResult<GoogleLoginResponse>
}

//import okhttp3.*
//import okhttp3.MediaType.Companion.toMediaType
//import okhttp3.RequestBody.Companion.toRequestBody
//import java.util.concurrent.TimeUnit
//
//class AuthApi(
//  private val baseUrl: String,
//  private val client: OkHttpClient = OkHttpClient.Builder()
//    .connectTimeout(10, TimeUnit.SECONDS)
//    .readTimeout(15, TimeUnit.SECONDS)
//    .writeTimeout(15, TimeUnit.SECONDS)
//    .build()
//) {
//  private val json = "application/json; charset=utf-8".toMediaType()
//
//  fun post(
//    bodyJson: String, // Gson/Moshi/ kotlinx.serialization 등으로 만든 JSON
//    onSuccess: (responseBody: String, setCookieHeader: String?) -> Unit,
//    onError: (code: Int?, message: String) -> Unit
//  ) {
////    bodyJson: String, // Gson/Moshi/ kotlinx.serialization 등으로 만든 JSON
//    val req = Request.Builder()
//      .url("$baseUrl/googleAuth")
//      .post(bodyJson.toRequestBody(json))
//      .header("Accept", "application/json")
//      .build()
//
//    client.newCall(req).enqueue(object : Callback {
//      override fun onFailure(call: Call, e: java.io.IOException) {
//        onError(null, "NETWORK_FAILURE: ${e.message}")
//      }
//
//      override fun onResponse(call: Call, response: Response) {
//        response.use {
//          val text = it.body?.string().orEmpty()
//          if (!it.isSuccessful) {
//            onError(it.code, "HTTP_${it.code}: $text")
//            return
//          }
//          // A안(쿠키 세션)인 경우 Set-Cookie 확인
//          val setCookie = it.headers["Set-Cookie"]
//          onSuccess(text, setCookie)
//        }
//      }
//    })
//  }
//
//  fun exchangeGoogleIdToken(
//    bodyJson: String, // Gson/Moshi/ kotlinx.serialization 등으로 만든 JSON
//    onSuccess: (responseBody: String, setCookieHeader: String?) -> Unit,
//    onError: (code: Int?, message: String) -> Unit
//  ) {
//    val req = Request.Builder()
//      .url("$baseUrl/v1/auth/google/native")
//      .post(bodyJson.toRequestBody(json))
//      .header("Accept", "application/json")
//      .build()
//
//    client.newCall(req).enqueue(object : Callback {
//      override fun onFailure(call: Call, e: java.io.IOException) {
//        onError(null, "NETWORK_FAILURE: ${e.message}")
//      }
//
//      override fun onResponse(call: Call, response: Response) {
//        response.use {
//          val text = it.body?.string().orEmpty()
//          if (!it.isSuccessful) {
//            onError(it.code, "HTTP_${it.code}: $text")
//            return
//          }
//          // A안(쿠키 세션)인 경우 Set-Cookie 확인
//          val setCookie = it.headers["Set-Cookie"]
//          onSuccess(text, setCookie)
//        }
//      }
//    })
//  }
//}
