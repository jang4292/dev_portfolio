package com.yhjang.myapplication.core.bridge

import android.webkit.JavascriptInterface
import com.yhjang.myapplication.domain.model.BridgeMessage
import org.json.JSONException
import org.json.JSONObject

/**
 * Native bridge exposed to JavaScript inside the WebView.
 *
 * The bridge is intentionally designed to mirror the iOS WKWebView bridge API so that
 * the same JavaScript code works on both platforms without any changes:
 *
 *   iOS   → window.webkit.messageHandlers.bridge.postMessage(data)
 *   Android → window.webkit.messageHandlers.bridge.postMessage(data)  ← identical call
 *
 * On Android the `window.webkit.messageHandlers.bridge` object is created by injecting
 * a small JavaScript shim (see [BRIDGE_INIT_SCRIPT]) that delegates to this Java object
 * via [JavascriptInterface].
 *
 * ───────────────────────────────────────────────────────────────────────────────────────
 * 이 브릿지는 iOS WKWebView 브릿지 API를 그대로 따르도록 설계되어
 * 동일한 JavaScript 코드가 변경 없이 양 플랫폼에서 동작합니다:
 *
 *   iOS    → window.webkit.messageHandlers.bridge.postMessage(data)
 *   Android → window.webkit.messageHandlers.bridge.postMessage(data)  ← 동일한 호출
 *
 * Android에서는 [BRIDGE_INIT_SCRIPT]를 통해 `window.webkit.messageHandlers.bridge`
 * 객체를 주입하고, 이 객체가 [JavascriptInterface]를 통해 이 Java 객체로 위임합니다.
 *
 * @param onMessage Callback invoked on the main thread when a message arrives
 *                  (메시지 수신 시 메인 스레드에서 호출되는 콜백)
 */
class NativeBridge(private val onMessage: (BridgeMessage) -> Unit) {

    /**
     * Called by JavaScript:
     *   window.webkit.messageHandlers.bridge.postMessage(jsonString)
     *
     * JavaScript에서 호출:
     *   window.webkit.messageHandlers.bridge.postMessage(jsonString)
     *
     * @param message JSON string with at least an "action" key
     *                최소한 "action" 키를 포함하는 JSON 문자열
     */
    @JavascriptInterface
    fun postMessage(message: String) {
        val bridgeMessage = parseMessage(message) ?: return
        onMessage(bridgeMessage)
    }

    // ─── private ───────────────────────────────────────────────────────────────

    /**
     * Parses the raw JSON string from JavaScript into a [BridgeMessage].
     * Returns null and logs a warning if the JSON is malformed or missing required keys.
     *
     * JavaScript에서 전달된 JSON 문자열을 [BridgeMessage]로 파싱합니다.
     * JSON이 잘못되었거나 필수 키가 없으면 null을 반환하고 경고를 기록합니다.
     */
    private fun parseMessage(raw: String): BridgeMessage? {
        return try {
            val json = JSONObject(raw)
            val action = json.optString("action").takeIf { it.isNotBlank() } ?: return null
            val payloadJson = json.optJSONObject("payload")
            val payload = mutableMapOf<String, Any?>()
            payloadJson?.keys()?.forEach { key -> payload[key] = payloadJson.get(key) }
            BridgeMessage(action = action, payload = payload)
        } catch (e: JSONException) {
            android.util.Log.w(TAG, "Failed to parse bridge message: $raw", e)
            null
        }
    }

    companion object {
        private const val TAG = "NativeBridge"

        /**
         * The JavaScript object name registered via [android.webkit.WebView.addJavascriptInterface].
         * This name must not clash with existing global JavaScript names.
         *
         * [android.webkit.WebView.addJavascriptInterface]로 등록되는 JavaScript 객체 이름.
         * 기존 전역 JavaScript 이름과 충돌하지 않아야 합니다.
         */
        const val INTERFACE_NAME = "_androidBridge"

        /**
         * JavaScript shim injected after the page loads to create the
         * `window.webkit.messageHandlers.bridge` namespace that mirrors the iOS API.
         *
         * 페이지 로드 후 주입되는 JavaScript 심(shim).
         * iOS API와 동일한 `window.webkit.messageHandlers.bridge` 네임스페이스를 생성합니다.
         *
         * Usage from JavaScript / JavaScript 사용 예:
         * ```js
         * window.webkit.messageHandlers.bridge.postMessage(
         *   JSON.stringify({ action: 'someAction', payload: { key: 'value' } })
         * );
         * ```
         */
        val BRIDGE_INIT_SCRIPT: String = """
            (function() {
                if (window.$INTERFACE_NAME) {
                    window.webkit = window.webkit || {};
                    window.webkit.messageHandlers = window.webkit.messageHandlers || {};
                    window.webkit.messageHandlers.bridge = {
                        postMessage: function(msg) {
                            var str = (typeof msg === 'string') ? msg : JSON.stringify(msg);
                            window.$INTERFACE_NAME.postMessage(str);
                        }
                    };
                }
            })();
        """.trimIndent()
    }
}
