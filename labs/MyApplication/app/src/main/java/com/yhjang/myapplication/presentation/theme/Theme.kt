package com.yhjang.myapplication.presentation.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable

// Light color scheme – customise tokens as needed
// 라이트 컬러 스킴 – 필요에 따라 토큰 커스터마이즈
private val LightColors = lightColorScheme()

// Dark color scheme – customise tokens as needed
// 다크 컬러 스킴 – 필요에 따라 토큰 커스터마이즈
private val DarkColors = darkColorScheme()

/**
 * App-wide Material3 theme.
 * 앱 전체 Material3 테마.
 *
 * @param darkTheme Whether to use the dark colour scheme (다크 컬러 스킴 사용 여부)
 * @param content   Composable content to be themed (테마가 적용될 Composable 콘텐츠)
 */
@Composable
fun MyApplicationTheme(
    darkTheme: Boolean = false,
    content: @Composable () -> Unit
) {
    val colorScheme = if (darkTheme) DarkColors else LightColors

    MaterialTheme(
        colorScheme = colorScheme,
        content = content
    )
}
