package com.yhjang.myapplication

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.safeDrawingPadding
import androidx.compose.ui.Modifier
import com.yhjang.myapplication.presentation.screen.WebViewScreen
import com.yhjang.myapplication.presentation.theme.MyApplicationTheme

/**
 * Application entry point using Jetpack Compose.
 *
 * Responsibilities / 역할:
 *  - Enables edge-to-edge display (엣지 투 엣지 디스플레이 활성화)
 *  - Sets the Compose content (Compose 콘텐츠 설정)
 *  - Delegates all UI logic to [WebViewScreen] (모든 UI 로직을 [WebViewScreen]에 위임)
 *
 * Clean Architecture note:
 *  MainActivity is intentionally kept thin; it is the Presentation layer entry point only.
 *  클린 아키텍처 노트:
 *  MainActivity는 의도적으로 얇게 유지됩니다; 프레젠테이션 레이어 진입점에만 해당합니다.
 */
class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Edge-to-edge display mode (엣지 투 엣지 디스플레이 모드)
        enableEdgeToEdge()

        setContent {
            MyApplicationTheme {
                WebViewScreen(
                    url = TARGET_URL,
                    modifier = Modifier
                        .fillMaxSize()
                        .safeDrawingPadding()
                )
            }
        }
    }

    companion object {
        // TODO: Replace with the actual target URL (실제 대상 URL로 교체하세요)
        private const val TARGET_URL = "https://www.naver.com"
    }
}
