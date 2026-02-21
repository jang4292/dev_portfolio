/**
 * Type definitions for the WebView ↔ Native bridge message protocol.
 *
 * The same JSON structure is used on both iOS (WKWebView) and Android (via the
 * injected webkit shim) so that a single JavaScript codebase handles all platforms.
 *
 * WebView ↔ 네이티브 브릿지 메시지 프로토콜의 타입 정의.
 *
 * iOS (WKWebView) 및 Android (webkit 심 주입)에서 동일한 JSON 구조를 사용하여
 * 단일 JavaScript 코드베이스로 모든 플랫폼을 처리합니다.
 */

/**
 * Message payload sent from JavaScript to the native layer.
 * JavaScript에서 네이티브 레이어로 전송되는 메시지 페이로드.
 *
 * @example
 * ```js
 * window.webkit.messageHandlers.bridge.postMessage(
 *   JSON.stringify({ action: 'openCamera', payload: { quality: 'high' } })
 * );
 * ```
 */
export interface BridgeMessage {
  /** Command identifier (커맨드 식별자) */
  action: string;
  /** Arbitrary data accompanying the action (액션에 첨부된 임의 데이터) */
  payload?: Record<string, unknown>;
}

/**
 * Parses a raw JSON string from the WebView into a typed [BridgeMessage].
 * Returns `null` if the string is not valid JSON or is missing the required `action` field.
 *
 * WebView에서 전달된 원시 JSON 문자열을 타입이 지정된 [BridgeMessage]로 파싱합니다.
 * 유효하지 않은 JSON이거나 필수 `action` 필드가 없으면 `null`을 반환합니다.
 */
export function parseBridgeMessage(raw: string): BridgeMessage | null {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (
      typeof parsed === 'object' &&
      parsed !== null &&
      'action' in parsed &&
      typeof (parsed as Record<string, unknown>)['action'] === 'string'
    ) {
      return parsed as BridgeMessage;
    }
    return null;
  } catch {
    return null;
  }
}
