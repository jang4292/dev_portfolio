import React, { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import type {
  WebViewErrorEvent,
  WebViewMessageEvent,
  WebViewNavigationEvent,
} from 'react-native-webview/lib/WebViewTypes';

import { BridgeMessage } from '@/bridge/BridgeMessage';
import { useWebViewBridge } from '@/hooks/useWebViewBridge';
import { WEBVIEW_TARGET_URL } from '@/constants/config';

// ─────────────────────────────────────────────────────────────────────────────
// Props
// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  /**
   * URL to load. Defaults to [WEBVIEW_TARGET_URL] when omitted.
   * 로드할 URL. 생략 시 [WEBVIEW_TARGET_URL]이 기본값입니다.
   */
  url?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Full-screen WebView screen with:
 *  - iOS-compatible JavaScript bridge (window.webkit.messageHandlers.bridge)
 *  - Loading indicator
 *  - Error handling and retry capability
 *
 * 전체 화면 WebView 스크린:
 *  - iOS 호환 JavaScript 브릿지 (window.webkit.messageHandlers.bridge)
 *  - 로딩 인디케이터
 *  - 오류 처리 및 재시도 기능
 */
export default function WebViewScreen({ url = WEBVIEW_TARGET_URL }: Props) {
  // ─── State ──────────────────────────────────────────────────────────────────
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // ─── Bridge hook ────────────────────────────────────────────────────────────
  /**
   * Handle messages arriving from the web page via the bridge.
   * 브릿지를 통해 웹 페이지에서 도착하는 메시지를 처리합니다.
   */
  const handleBridgeMessage = useCallback((message: BridgeMessage) => {
    console.log('[Bridge] Received:', message);
    // TODO: dispatch specific actions based on message.action
    // TODO: message.action에 따라 특정 액션 디스패치
  }, []);

  const { webViewRef, injectedScript, onMessage } = useWebViewBridge(handleBridgeMessage);

  // ─── WebView event handlers ──────────────────────────────────────────────────

  const handleLoadStart = useCallback((_e: WebViewNavigationEvent) => {
    setIsLoading(true);
    setErrorMessage(null);
  }, []);

  const handleLoadEnd = useCallback((_e: WebViewNavigationEvent | WebViewErrorEvent) => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback((e: WebViewErrorEvent) => {
    setIsLoading(false);
    setErrorMessage(e.nativeEvent.description ?? 'Unknown error');
  }, []);

  // ─── Render ──────────────────────────────────────────────────────────────────
  return (
    <View style={styles.container}>
      {/* ── WebView ─────────────────────────────────────────────────────────── */}
      <WebView
        ref={webViewRef}
        style={styles.webView}
        source={{ uri: url }}
        // Allow all origins – restrict in production (프로덕션에서는 허용 출처를 제한하세요)
        originWhitelist={['*']}
        // Required for the bridge and most web apps (브릿지 및 대부분의 웹앱에 필수)
        javaScriptEnabled
        domStorageEnabled
        // Inline media playback without requiring user gesture (사용자 제스처 없이 인라인 미디어 재생)
        allowsInlineMediaPlayback
        // Prevent popup windows from opening new activities (팝업 창이 새 액티비티를 여는 것 방지)
        setSupportMultipleWindows={false}
        // Allow http content inside https pages for development builds
        // 개발 빌드에서 https 페이지 내 http 콘텐츠 허용
        mixedContentMode="always"
        // Show a spinner while the very first byte loads (첫 바이트 로드 중 스피너 표시)
        startInLoadingState
        renderLoading={() => (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" />
          </View>
        )}
        // iOS-compatible bridge shim injected before page content
        // 페이지 콘텐츠 전에 주입되는 iOS 호환 브릿지 심
        injectedJavaScriptBeforeContentLoaded={injectedScript}
        onMessage={onMessage as (e: WebViewMessageEvent) => void}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
      />

      {/* ── Progress overlay ────────────────────────────────────────────────── */}
      {isLoading && (
        <View style={styles.loadingOverlay} pointerEvents="none">
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}

      {/* ── Error overlay ───────────────────────────────────────────────────── */}
      {errorMessage !== null && (
        <View style={styles.errorOverlay}>
          <Text style={styles.errorText}>Error: {errorMessage}</Text>
        </View>
      )}
    </View>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Styles
// ─────────────────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  errorOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 24,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

