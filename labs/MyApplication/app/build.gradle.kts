plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    // Compose compiler plugin (required for Kotlin 2.x / Kotlin 2.x에서 Compose 컴파일러 플러그인 필수)
    alias(libs.plugins.kotlin.compose)
}

android {
    namespace = "com.yhjang.myapplication"
    compileSdk = 36

    defaultConfig {
        applicationId = "com.yhjang.myapplication"
        minSdk = 24
        targetSdk = 36
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
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
    // Enable Jetpack Compose (Jetpack Compose 활성화)
    buildFeatures {
        compose = true
    }
}

dependencies {
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.appcompat)
    implementation(libs.material)
    implementation(libs.androidx.activity)
    implementation(libs.androidx.constraintlayout)

    // Jetpack Compose BOM (Compose 라이브러리 버전 통합 관리)
    val composeBom = platform(libs.androidx.compose.bom)
    implementation(composeBom)
    androidTestImplementation(composeBom)

    // Core Compose UI
    implementation(libs.androidx.compose.ui)
    implementation(libs.androidx.compose.ui.tooling.preview)
    implementation(libs.androidx.compose.material3)

    // Activity Compose – setContent entry point (setContent 진입점)
    implementation(libs.androidx.activity.compose)

    // ViewModel + Compose integration (ViewModel + Compose 통합)
    implementation(libs.androidx.lifecycle.viewmodel.compose)

    // collectAsStateWithLifecycle (collectAsStateWithLifecycle 확장)
    implementation(libs.androidx.lifecycle.runtime.compose)

    // Navigation Compose (화면 간 내비게이션)
    implementation(libs.androidx.navigation.compose)

    // Debug tooling for Compose (Compose 디버그 툴링)
    debugImplementation(libs.androidx.compose.ui.tooling)

    testImplementation(libs.junit)
    androidTestImplementation(libs.androidx.junit)
    androidTestImplementation(libs.androidx.espresso.core)
}
