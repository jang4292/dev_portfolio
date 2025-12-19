import android.app.Activity
import android.content.ActivityNotFoundException
import android.content.Intent
import android.util.Log
import android.webkit.JavascriptInterface
import androidx.core.net.toUri

class SocialLinkBridge(private val activity: Activity) {

  // JS에서 직접 URL을 넘기는 경우: { url: 'https://...' }
  @JavascriptInterface
  fun openFanPageUrl(url: String) {
    try {
      Log.d("SocialLinkBridge", "openFanPageURL : $url")
      val uri = url.toUri()
      val intent = Intent(Intent.ACTION_VIEW, uri).apply {
        addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
      }


      Log.d("SocialLinkBridge", "startActivity with $uri")
      activity.startActivity(intent)

//      val pm = activity.packageManager
//      if (intent.resolveActivity(pm) != null) {
//        Log.d("SocialLinkBridge", "activity start Activity ")
//        activity.startActivity(intent)
//      } else {
//        Log.e("SocialLinkBridge", "No browser to handle url: $url")
//      }
//      val url
    } catch (e: ActivityNotFoundException) {
      Log.e("SocialLinkBridge", "ActivityNotFoundException Failed to open url: $url", e)
    } catch (e: Exception) {
      Log.e("SocialLinkBridge", "Failed to open url: $url", e)
    }
  }

  // 만약 iOS처럼 kind 기반으로 쓰고 싶다면 추가:
  @JavascriptInterface
  fun openFanPage(kind: String) {
    val url = when (kind) {
      "facebook" -> "https://www.facebook.com/YourFanPageId"
      "instagram" -> "https://www.instagram.com/your_account_id/"
      else -> "https://www.facebook.com/YourFanPageId"
    }
    openFanPageUrl(url)
  }
}
