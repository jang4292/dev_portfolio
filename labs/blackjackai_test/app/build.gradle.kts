plugins {
  alias(libs.plugins.android.application)
  alias(libs.plugins.kotlin.android)
  alias(libs.plugins.kotlin.compose)
}

android {
  namespace = "com.fourtune3.blackjackai"
  compileSdk = 36

  defaultConfig {
    applicationId = "com.fourtune3.blackjackai"
    minSdk = 24
    targetSdk = 36
    versionCode = 1
    versionName = "1.0"

    testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"

//    buildConfigField("String", "BASE_URL", "\"http://172.30.1.38:7456/web-mobile/web-mobile/index.html\"") // 기본 URL
//    buildConfigField("String", "BASE_URL", "\"http://172.30.1.38:7456\"") // 기본 URL
    buildConfigField("String", "BASE_URL", "\"http://192.168.0.11:7456\"") // 기본 URL
  }

  buildTypes {
    debug {
      buildConfigField("boolean", "WEBVIEW_DEBUGGABLE", "true")
    }
    release {
      isMinifyEnabled = false
      buildConfigField("boolean", "WEBVIEW_DEBUGGABLE", "false")
      proguardFiles(
        getDefaultProguardFile("proguard-android-optimize.txt"),
        "proguard-rules.pro"
      )
    }
  }
  compileOptions {
    sourceCompatibility = JavaVersion.VERSION_11
    targetCompatibility = JavaVersion.VERSION_11
  }
  kotlinOptions {
    jvmTarget = "11"
  }
  buildFeatures {
    compose = true
    buildConfig = true
    viewBinding = true
  }
}

dependencies {

//  implementation("androidx.webkit:webkit:<latest>") // WebMessageListener, document-start
//  implementation("com.google.android.gms:play-services-auth:<latest>") // Google Login
//  implementation("com.android.billingclient:billing-ktx:<latest>") // IAP

  implementation("androidx.core:core-ktx:1.13.1")
  implementation("androidx.appcompat:appcompat:1.7.1")
  implementation("com.google.android.material:material:1.12.0")

  implementation("androidx.core:core-splashscreen:1.2.0")

  implementation("androidx.credentials:credentials:1.3.0")
  implementation("androidx.credentials:credentials-play-services-auth:1.3.0")
  implementation("com.google.android.libraries.identity.googleid:googleid:1.1.1")

//  implementation(libs.kotlin.libs.kotlinx.coroutines.android)

  implementation(libs.androidx.core.ktx)
  implementation(libs.androidx.lifecycle.runtime.ktx)
  implementation(libs.androidx.activity.compose)
  implementation(platform(libs.androidx.compose.bom))
  implementation(libs.androidx.compose.ui)
  implementation(libs.androidx.compose.ui.graphics)
  implementation(libs.androidx.compose.ui.tooling.preview)
  implementation(libs.androidx.compose.material3)
  testImplementation(libs.junit)
  androidTestImplementation(libs.androidx.junit)
  androidTestImplementation(libs.androidx.espresso.core)
  androidTestImplementation(platform(libs.androidx.compose.bom))
  androidTestImplementation(libs.androidx.compose.ui.test.junit4)
  debugImplementation(libs.androidx.compose.ui.tooling)
  debugImplementation(libs.androidx.compose.ui.test.manifest)
}
