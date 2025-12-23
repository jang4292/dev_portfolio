import kotlinx.coroutines.suspendCancellableCoroutine
import okhttp3.*
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException
import java.util.concurrent.TimeUnit
import kotlin.coroutines.resume

object Http {
  private val client = OkHttpClient.Builder()
    .connectTimeout(10, TimeUnit.SECONDS)
    .readTimeout(15, TimeUnit.SECONDS)
    .writeTimeout(15, TimeUnit.SECONDS)
    .build()

  private val JSON = "application/json; charset=utf-8".toMediaType()

  suspend fun postJson(
    url: String,
    jsonBody: String,
    headers: Map<String, String> = emptyMap()
  ): ApiResult<String> = suspendCancellableCoroutine { cont ->
    val body = jsonBody.toRequestBody(JSON)

    val reqBuilder = Request.Builder()
      .url(url)
      .post(body)
      .header("Content-Type", "application/json")

    headers.forEach { (k, v) -> reqBuilder.header(k, v) }

    val call = client.newCall(reqBuilder.build())

    cont.invokeOnCancellation { call.cancel() }

    call.enqueue(object : Callback {
      override fun onFailure(call: Call, e: IOException) {
        if (cont.isCancelled) return
        cont.resume(ApiResult.NetworkError(e))
      }

      override fun onResponse(call: Call, response: Response) {
        response.use {
          val code = it.code
          val respText = it.body?.string()
          if (code in 200..299 && respText != null) {
            cont.resume(ApiResult.Ok(respText, code))
          } else {
            cont.resume(ApiResult.HttpError(code, respText))
          }
        }
      }
    })
  }
}
