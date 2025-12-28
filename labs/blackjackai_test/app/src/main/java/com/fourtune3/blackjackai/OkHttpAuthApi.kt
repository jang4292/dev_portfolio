import android.os.SystemClock
import android.util.Log
import kotlinx.coroutines.CancellationException
//import androidx.media3.common.util.SystemClock
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.currentCoroutineContext
import kotlinx.coroutines.suspendCancellableCoroutine
import kotlinx.coroutines.withContext
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import okhttp3.*
import okhttp3.HttpUrl.Companion.toHttpUrl
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException
import java.net.Inet4Address
import java.net.InetAddress
import java.util.UUID
import java.util.concurrent.TimeUnit
import kotlin.coroutines.resume


//class PreferIpv4Dns : Dns {
//  override fun lookup(hostname: String): List<InetAddress> {
//    val all = Dns.SYSTEM.lookup(hostname)
//    val v4 = all.filterIsInstance<Inet4Address>()
//    val v6 = all - v4.toSet()
//    // IPv4 우선
//    return v4 + v6
//  }
//}

//class TimingEventListener : EventListener() {
//  private fun t() = SystemClock.elapsedRealtime()
//  private fun log(call: Call, msg: String) {
//    Log.d("OkHttpTiming", "${t()} ${call.request().url} $msg")
//  }
//
//  override fun callStart(call: Call) = log(call, "callStart")
//  override fun dnsStart(call: Call, domainName: String) = log(call, "dnsStart $domainName")
//  override fun dnsEnd(call: Call, domainName: String, inetAddressList: List<InetAddress>) =
//    log(call, "dnsEnd $domainName addrs=${inetAddressList.joinToString { it.hostAddress ?: "?" }}")
//
//  override fun connectStart(
//    call: Call,
//    inetSocketAddress: java.net.InetSocketAddress,
//    proxy: java.net.Proxy
//  ) =
//    log(call, "connectStart $inetSocketAddress proxy=$proxy")
//
//  override fun secureConnectStart(call: Call) = log(call, "secureConnectStart")
//  override fun secureConnectEnd(call: Call, handshake: Handshake?) = log(call, "secureConnectEnd")
//
//  override fun requestHeadersEnd(call: Call, request: Request) = log(call, "requestHeadersEnd")
//  override fun requestBodyEnd(call: Call, byteCount: Long) =
//    log(call, "requestBodyEnd bytes=$byteCount")
//
//  override fun responseHeadersStart(call: Call) = log(call, "responseHeadersStart")
//  override fun responseHeadersEnd(call: Call, response: Response) =
//    log(call, "responseHeadersEnd code=${response.code}")
//
//  override fun callFailed(call: Call, ioe: IOException) =
//    log(call, "callFailed ${ioe.javaClass.simpleName}: ${ioe.message}")
//}

class OkHttpAuthApi(
  private val baseUrl: String,
  private val client: OkHttpClient = OkHttpClient.Builder()
//    .dns(PreferIpv4Dns()) // ★ IPv4 우선 (진단/해결용)
//    .protocols(listOf(Protocol.HTTP_1_1)) // HTTP/2 변수 제거
//    .eventListener(TimingEventListener()) // ★ 어디서 멈추는지 확정
    .connectTimeout(10, TimeUnit.SECONDS)
    .writeTimeout(20, TimeUnit.SECONDS)
    .readTimeout(30, TimeUnit.SECONDS)
    .callTimeout(35, TimeUnit.SECONDS)
    .retryOnConnectionFailure(false) // 인증/세션은 자동 retry 비권장
    .build()

  /*  private val client: OkHttpClient = OkHttpClient.Builder()

  //    .connectTimeout(10, TimeUnit.SECONDS)
  //    .readTimeout(15, TimeUnit.SECONDS)
  //    .writeTimeout(15, TimeUnit.SECONDS)
      .connectTimeout(10, TimeUnit.SECONDS)
      .writeTimeout(20, TimeUnit.SECONDS)
  //    .readTimeout(60, TimeUnit.SECONDS)
      .readTimeout(120, TimeUnit.SECONDS)
  //    .callTimeout(70, TimeUnit.SECONDS)
      .retryOnConnectionFailure(false)
      .build(),*/,
  @OptIn(kotlinx.serialization.ExperimentalSerializationApi::class)
  private val json: Json = Json {
    encodeDefaults = true
    ignoreUnknownKeys = true
  }
) : AuthApi {

  //  private val JSON = "application/json; charset=utf-8".toMediaType()
  private val mediaJson = "application/json; charset=utf-8".toMediaType()

  private val base = baseUrl.toHttpUrl()

  override suspend fun loginWithGoogle(idToken: String): ApiResult<GoogleLoginResponse> =
    withContext(Dispatchers.IO) {

      val requestId = UUID.randomUUID().toString()

      val payload = GoogleLoginRequest(
        cmd = "auth_google",
        data = GoogleLoginData(idToken = idToken)
      )

      val jsonString = json.encodeToString(payload)
      Log.d("AuthApi", "POST /googleAuth json=$jsonString")

      val body = jsonString.toRequestBody(mediaJson)

      val url = base.newBuilder()
        .addPathSegment("googleAuth")
        .build()

      val request = Request.Builder()
        .url(url)
        .post(body)
        .header("Content-Type", "application/json")
        .header("Accept", "application/json")
        .header("X-Request-Id", requestId) // 서버 로그와 매칭용
        .build()

      val call = client.newCall(request)

      // 코루틴 취소 시 콜도 취소
      val job = currentCoroutineContext()[Job]
      job?.invokeOnCompletion { if (it is CancellationException) call.cancel() }

      val start = System.currentTimeMillis()

      try {
        call.execute().use { resp ->
          val elapsed = System.currentTimeMillis() - start
          val code = resp.code
          val text = resp.body?.string()

          Log.d("AuthApi", "code=$code body=${text?.take(200)}")

          Log.i("AuthApi", "resp code=$code elapsed=${elapsed}ms reqId=$requestId")

          if (code in 200..299 && !text.isNullOrBlank()) {
            Log.d("AuthApi" , " return  API Result")
            return@withContext try {
              val parsed: GoogleLoginResponse = json.decodeFromString(text)
              ApiResult.Ok(parsed, code)
            } catch (e: Exception) {
              ApiResult.NetworkError(e) // 파싱 실패
            }
          } else {
            ApiResult.HttpError(code, text)
          }
        }
      } catch (e: IOException) {
        val elapsed = System.currentTimeMillis() - start
        android.util.Log.e(
          "AuthApi",
          "iofail elapsed=${elapsed}ms reqId=$requestId ex=${e.javaClass.simpleName} msg=${e.message}",
          e
        )
        ApiResult.NetworkError(e)
      }
    }
  /*override suspend fun loginWithGoogle(idToken: String): ApiResult<GoogleLoginResponse> =
    suspendCancellableCoroutine { cont ->

//      val payload = GoogleLoginRequest(idToken = idToken)
      val payload = GoogleLoginRequest(
//        cmd = "google_login",
        cmd = "auth_google",
        data = GoogleLoginData(idToken = idToken)
      )

      Log.d("TEST", payload.toString())
      val body = json.encodeToString(payload).toRequestBody(JSON)


//        .url("$baseUrl/auth/google")

      val request = Request.Builder()
//      https://dev.4tune3.com:41618/googleAuth
        .url("$baseUrl/googleAuth")
        .post(body)
        .build()
//        .header("Content-Type", "application/json")

      val call = client.newCall(request)
//      cont.invokeOnCancellation { call.cancel() }

      val startMs = android.os.SystemClock.elapsedRealtime()

      cont.invokeOnCancellation {
        android.util.Log.w(
          "AuthApi",
          "Coroutine cancelled. elapsed=${android.os.SystemClock.elapsedRealtime() - startMs}ms"
        )
        call.cancel()
      }


      call.enqueue(object : Callback {
//        override fun onFailure(call: Call, e: IOException) {
//          if (call.isCanceled()) return
//          if (cont.isCancelled) return
//          cont.resume(ApiResult.NetworkError(e))
//        }

        override fun onFailure(call: Call, e: IOException) {
          val elapsed = android.os.SystemClock.elapsedRealtime() - startMs
          android.util.Log.e(
            "AuthApi",
            "onFailure elapsed=${elapsed}ms canceled=${call.isCanceled()} contCancelled=${cont.isCancelled} ex=${e::class.java.name} msg=${e.message}",
            e
          )

          if (call.isCanceled() || cont.isCancelled) return
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
    }*/
}
