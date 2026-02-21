import { useCallback, useRef } from 'react';
import { WebView } from 'react-native-webview';
import type { WebViewMessageEvent } from 'react-native-webview/lib/WebViewTypes';

import { BridgeMessage, parseBridgeMessage } from '@/bridge/BridgeMessage';
import { BRIDGE_INIT_SCRIPT } from '@/bridge/bridgeHandler';

/**
 * React hook that encapsulates all WebView bridge logic.
 *
 * Provides:
 *  - `webViewRef`       – Ref to pass to the `<WebView>` component
 *  - `injectedScript`   – JavaScript shim to inject on page load (iOS-compatible bridge)
 *  - `onMessage`        – Handler for `<WebView onMessage>` events
 *  - `postMessageToWeb` – Helper to send a message *to* the WebView page
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * 모든 WebView 브릿지 로직을 캡슐화하는 React 훅.
 *
 * 제공 항목:
 *  - `webViewRef`       – `<WebView>` 컴포넌트에 전달할 Ref
 *  - `injectedScript`   – 페이지 로드 시 주입할 JavaScript 심 (iOS 호환 브릿지)
 *  - `onMessage`        – `<WebView onMessage>` 이벤트 핸들러
 *  - `postMessageToWeb` – WebView 페이지로 메시지를 *보내는* 헬퍼
 *
 * @param onBridgeMessage  Callback invoked for every valid [BridgeMessage] received
 *                         수신된 각 유효한 [BridgeMessage]에 대해 호출되는 콜백
 */
export function useWebViewBridge(
  onBridgeMessage: (message: BridgeMessage) => void
) {
  // Keep a stable ref to the WebView instance for postMessageToWeb
  // postMessageToWeb을 위해 WebView 인스턴스에 대한 안정적인 ref 유지
  const webViewRef = useRef<WebView>(null);

  /**
   * Handles raw messages from the WebView, parses them, and delegates valid
   * ones to the consumer callback.
   *
   * WebView에서 원시 메시지를 처리하고, 파싱 후 유효한 메시지를 소비자 콜백에 위임합니다.
   */
  const onMessage = useCallback(
    (event: WebViewMessageEvent) => {
      const raw = event.nativeEvent.data;
      const message = parseBridgeMessage(raw);
      if (message) {
        onBridgeMessage(message);
      } else {
        console.warn('[Bridge] Received unparseable message:', raw);
      }
    },
    [onBridgeMessage]
  );

  /**
   * Sends a [BridgeMessage] *to* the loaded web page by evaluating JavaScript.
   * Call this to push data from native to the web layer.
   *
   * JavaScript 실행을 통해 로드된 웹 페이지로 [BridgeMessage]를 *전송*합니다.
   * 네이티브에서 웹 레이어로 데이터를 푸시할 때 호출합니다.
   *
   * @param message Message to deliver (전달할 메시지)
   */
  const postMessageToWeb = useCallback((message: BridgeMessage) => {
    const js = `
      (function() {
        try {
          var event = new MessageEvent('nativeBridgeMessage', {
            data: ${JSON.stringify(JSON.stringify(message))}
          });
          window.dispatchEvent(event);
        } catch(e) { console.warn('[Bridge] postMessageToWeb error', e); }
      })();
      true;
    `;
    webViewRef.current?.injectJavaScript(js);
  }, []);

  return {
    webViewRef,
    /** iOS-compatible JS shim – pass to WebView's `injectedJavaScriptBeforeContentLoaded` */
    injectedScript: BRIDGE_INIT_SCRIPT,
    onMessage,
    postMessageToWeb
  };
}
