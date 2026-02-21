// Top-level build file where you can add configuration options common to all sub-projects/modules.
plugins {
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.kotlin.android) apply false
    // Compose compiler plugin – must be declared here so sub-modules can alias it
    // Compose 컴파일러 플러그인 – 서브 모듈에서 별칭 사용이 가능하도록 여기서 선언
    alias(libs.plugins.kotlin.compose) apply false
}
