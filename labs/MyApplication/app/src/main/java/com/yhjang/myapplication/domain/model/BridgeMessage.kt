package com.yhjang.myapplication.domain.model

/**
 * Represents a message exchanged between the WebView (JavaScript) and the native layer.
 * This model follows the same structure used in the iOS WKWebView bridge so that
 * a single JavaScript codebase can communicate with both platforms identically.
 *
 * WebView(JavaScript)와 네이티브 레이어 간에 교환되는 메시지를 나타냅니다.
 * iOS WKWebView 브릿지와 동일한 구조를 사용하여
 * 단일 JavaScript 코드베이스가 두 플랫폼과 동일하게 통신할 수 있습니다.
 *
 * @param action  The command name sent from JavaScript (JavaScript에서 전송된 커맨드 이름)
 * @param payload Arbitrary key-value data attached to the action (액션에 첨부된 임의의 키-값 데이터)
 */
data class BridgeMessage(
    val action: String,
    val payload: Map<String, Any?> = emptyMap()
)
