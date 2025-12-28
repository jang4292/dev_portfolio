import kotlinx.serialization.EncodeDefault
import kotlinx.serialization.ExperimentalSerializationApi
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
//@kotlinx.serialization.Serializable
data class GoogleLoginRequest
//@OptIn(ExperimentalSerializationApi::class)
constructor(
//  @EncodeDefault(EncodeDefault.Mode.ALWAYS)
  val cmd: String,
  val data: GoogleLoginData
)

@Serializable
//@kotlinx.serialization.Serializable
data class GoogleLoginData(
//  @SerialName("token") val idToken: String
  @kotlinx.serialization.SerialName("token") val idToken: String
)




@Serializable
data class GoogleLoginResponse(
  val cmd:String,
  val success: UInt,
  val data:GoogleLoginResponeData
//  val sessionId: String,
//  val userId: String? = null
//  val pCode: String
)

@Serializable
data class GoogleLoginResponeData(
  val pCode:String
)
