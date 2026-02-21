/**
 * Application-wide configuration constants.
 * 애플리케이션 전역 설정 상수.
 */

/**
 * The URL loaded by the WebView on startup.
 * WebView 시작 시 로드되는 URL.
 *
 * TODO: Replace with the actual target URL (실제 대상 URL로 교체하세요)
 */
export const WEBVIEW_TARGET_URL = 'https://www.naver.com';

/**
 * Name of the bridge handler registered on the native side.
 * Mirrors the iOS WKWebView handler name so that the JS call site is identical.
 *
 * 네이티브 측에 등록된 브릿지 핸들러 이름.
 * iOS WKWebView 핸들러 이름을 그대로 사용하여 JS 호출 코드가 동일합니다.
 */
export const BRIDGE_HANDLER_NAME = 'bridge';
