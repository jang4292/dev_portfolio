# rn-expo-webview – React Native Expo WebView

[English Version → README.md](README.md)

## 개요

**iOS 호환 JavaScript 브릿지**를 갖춘 전체 화면 WebView를 렌더링하는 React Native (Expo) 애플리케이션입니다.
브릿지는 iOS WKWebView가 사용하는 `window.webkit.messageHandlers` 패턴을 따르므로, 단일 JavaScript 코드베이스로 iOS와 Android 모두와 동일하게 통신합니다.

---

## 아키텍처

```
services/rn-expo-webview
├── App.tsx                        # 루트 컴포넌트 (얇은 진입점)
├── src/
│   ├── constants/
│   │   └── config.ts              # 앱 전역 상수 (타겟 URL, 브릿지 이름)
│   ├── bridge/
│   │   ├── BridgeMessage.ts       # 타입 정의 + 파서
│   │   └── bridgeHandler.ts       # iOS 호환 JS 심 스크립트
│   ├── hooks/
│   │   └── useWebViewBridge.ts    # 브릿지 로직 훅
│   └── screens/
│       └── WebViewScreen.tsx      # 전체 화면 WebView 스크린
```

**클린 아키텍처 레이어:**
- **상수 / 설정** – 환경별 값
- **브릿지** – 플랫폼 브릿지 타입 및 심
- **훅** – 재사용 가능한 브릿지 로직
- **화면** – 합성 가능한 UI

---

## WebView 브릿지

JavaScript 호출 (iOS와 Android 동일):

```js
window.webkit.messageHandlers.bridge.postMessage(
  JSON.stringify({ action: 'someAction', payload: { key: 'value' } })
);
```

전체 문서는 [`docs/webview-bridge/README.kr.md`](../../docs/webview-bridge/README.kr.md)를 참조하세요.

---

## 기술 스택

| 구성 요소 | 라이브러리/버전 |
|----------|--------------|
| 프레임워크 | Expo ~53.0 |
| 언어 | TypeScript ~5.8 |
| UI | React Native 0.79 |
| WebView | react-native-webview 13.x |

---

## 시작하기

```bash
cd services/rn-expo-webview
pnpm install
pnpm dev          # Expo Dev Server 시작
pnpm dev:android  # Android 에뮬레이터에서 실행
pnpm dev:ios      # iOS 시뮬레이터에서 실행
```

---

## 적용된 버그 수정

| 문제 | 수정 |
|------|------|
| 로딩 인디케이터 없음 | `startInLoadingState` + `renderLoading` 추가 |
| 처리되지 않은 오류 | 오류 오버레이가 있는 `onError` 추가 |
| 브릿지 미주입 | `injectedJavaScriptBeforeContentLoaded` (iOS 호환 심) 추가 |
| 생명주기 콜백 없음 | `onLoadStart`/`onLoadEnd` 핸들러 추가 |
| App.tsx에 URL 하드코딩 | `src/constants/config.ts`로 추출 |
| WebView 브릿지 없음 | `useWebViewBridge` 훅 + `WebViewScreen` 구현 |

---

## 버그 이력

| 날짜 | 버그 | 수정 |
|------|------|------|
| 2026-02-21 | WebView에 브릿지 없음 | 주입된 JS 심을 통한 iOS 호환 브릿지 구현 |
| 2026-02-21 | 로딩 UX 없음 | 스피너 + 진행 상태 추가 |
| 2026-02-21 | App.tsx에 모든 로직 집중 | 클린 아키텍처로 리팩토링 (화면, 훅, 브릿지) |
