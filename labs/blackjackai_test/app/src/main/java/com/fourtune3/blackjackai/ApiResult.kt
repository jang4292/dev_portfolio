sealed class ApiResult<out T> {
  data class Ok<T>(val value: T, val code: Int) : ApiResult<T>()
  data class HttpError(val code: Int, val body: String?) : ApiResult<Nothing>()
  data class NetworkError(val e: Throwable) : ApiResult<Nothing>()
}
//sealed class ApiResult<out T> {
//  data class Ok<T>(val value: T, val code: Int) : ApiResult<T>()
//  data class HttpError(val code: Int, val body: String?) : ApiResult<Nothing>()
//  data class NetworkError(val e: Throwable) : ApiResult<Nothing>()
//}
