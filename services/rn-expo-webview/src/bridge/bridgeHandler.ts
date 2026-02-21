import { BRIDGE_HANDLER_NAME } from '@/constants/config';

/**
 * JavaScript shim injected into every page loaded by the WebView.
 *
 * The shim creates `window.webkit.messageHandlers.<handlerName>` so that
 * the same JS call works on **both** iOS and Android without modification:
 *
 *   iOS    → handled natively by WKWebView
 *   Android → delegated to `window.ReactNativeWebView.postMessage`
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WebView가 로드하는 모든 페이지에 주입되는 JavaScript 심.
 *
 * 심은 `window.webkit.messageHandlers.<handlerName>`을 생성하여
 * 동일한 JS 호출이 수정 없이 iOS와 Android 양쪽에서 동작합니다:
 *
 *   iOS    → WKWebView가 네이티브로 처리
 *   Android → `window.ReactNativeWebView.postMessage`로 위임
 *
 * JavaScript usage / JavaScript 사용 예:
 * ```js
 * window.webkit.messageHandlers.bridge.postMessage(
 *   JSON.stringify({ action: 'someAction', payload: { key: 'value' } })
 * );
 * ```
 */
export const BRIDGE_INIT_SCRIPT = `
(function() {
  try {
    if (window.ReactNativeWebView) {
      window.webkit = window.webkit || {};
      window.webkit.messageHandlers = window.webkit.messageHandlers || {};
      window.webkit.messageHandlers['${BRIDGE_HANDLER_NAME}'] = {
        postMessage: function(msg) {
          var str = (typeof msg === 'string') ? msg : JSON.stringify(msg);
          window.ReactNativeWebView.postMessage(str);
        }
      };
    }
  } catch(e) {
    console.warn('[Bridge] init failed:', e);
  }
  true; // required by Android evaluateJavascript / Android evaluateJavascript 필수 반환값
})();
`;
