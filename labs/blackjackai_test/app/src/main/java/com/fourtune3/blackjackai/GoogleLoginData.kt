import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

//@Serializable
//data class GoogleLoginRequest(
//  val cmd: String,
//  @SerialName("data") val data:{
//    val token: String
//  }
////  val provider: String = "google",
////  @SerialName("token") val idToken: String
////  val token: String
//)

@Serializable
data class GoogleLoginRequest(
  val cmd: String = "auth_google",
  val data: GoogleLoginData
)

@Serializable
data class GoogleLoginData(
  @SerialName("token") val idToken: String
)




@Serializable
data class GoogleLoginResponse(
//  val sessionId: String,
//  val userId: String? = null
  val pCode: String
)
