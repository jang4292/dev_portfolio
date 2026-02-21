# WebView 브릿지 – iOS 호환 패턴

## 개요

이 문서는 이 프로젝트의 모든 플랫폼에서 사용되는 **WebView 브릿지** 패턴을 설명합니다.
목표는 iOS와 Android 양쪽에서 **단일 JavaScript 코드베이스**로 네이티브 코드와 동일하게 통신하는 것입니다.

---

## 왜 iOS 호환 방식인가?

iOS에서는 `WKWebView`가 네이티브로 다음을 노출합니다:

```js
window.webkit.messageHandlers.<핸들러이름>.postMessage(data);
```

Android에서 전통적인 방식은 `window.Android`라는 `@JavascriptInterface` 객체를 추가하는데, 이 경우 플랫폼마다 다른 JavaScript 호출 코드가 필요합니다.

Android에서도 동일한 `window.webkit.messageHandlers` 네임스페이스를 생성하는 **JavaScript 심(shim)을 주입**함으로써, 두 플랫폼이 단일하고 통일된 JavaScript API를 공유할 수 있습니다.

---

## 아키텍처

```
┌─────────────────────────────────────────────────────────────────┐
│  웹 페이지 (JavaScript)                                          │
│                                                                 │
│  window.webkit.messageHandlers.bridge.postMessage(             │
│    JSON.stringify({ action: 'xxx', payload: { ... } })         │
│  );                                                             │
└──────────────────────────┬──────────────────────────────────────┘
                           │
          ┌────────────────┴─────────────────┐
          │                                  │
          ▼                                  ▼
┌─────────────────┐                ┌──────────────────────────┐
│  iOS            │                │  Android / React Native   │
│  WKWebView      │                │                          │
│  (네이티브)      │                │  주입된 JS 심:            │
│                 │                │  window.webkit =         │
│  WKScriptMsg    │                │    { messageHandlers: {  │
│  Handler        │                │      bridge: {           │
│                 │                │        postMessage: fn   │
│                 │                │      }                   │
│                 │                │    }                     │
│                 │                │  }                       │
│                 │                │                          │
│                 │                │  fn → _androidBridge     │
│                 │                │      .postMessage(str)   │
│                 │                │  (또는 ReactNativeWebView) │
└─────────────────┘                └──────────────────────────┘
```

---

## 메시지 프로토콜

모든 메시지는 단순한 JSON 봉투(envelope)를 사용합니다:

```ts
interface BridgeMessage {
  action: string;                      // 커맨드 식별자
  payload?: Record<string, unknown>;   // 선택적 데이터
}
```

### 예시 – 웹 → 네이티브

```js
window.webkit.messageHandlers.bridge.postMessage(
  JSON.stringify({
    action: 'openCamera',
    payload: { quality: 'high' }
  })
);
```

### 예시 – 네이티브 → 웹 (React Native)

```ts
webViewRef.current?.injectJavaScript(`
  window.dispatchEvent(new MessageEvent('nativeBridgeMessage', {
    data: JSON.stringify({ action: 'cameraResult', payload: { uri: '...' } })
  }));
  true;
`);
```

---

## 플랫폼별 구현

### React Native (`services/rn-expo-webview`)

| 파일 | 역할 |
|------|------|
| `src/bridge/BridgeMessage.ts` | 타입 정의 + 파서 |
| `src/bridge/bridgeHandler.ts` | JS 심 스크립트 (`BRIDGE_INIT_SCRIPT`) |
| `src/hooks/useWebViewBridge.ts` | 브릿지 로직을 캡슐화하는 훅 |
| `src/screens/WebViewScreen.tsx` | 브릿지가 연결된 전체 화면 WebView |

심은 `injectedJavaScriptBeforeContentLoaded`를 통해 주입되어 페이지 스크립트가 실행되기 전에 사용 가능합니다.

### Android (`labs/MyApplication`)

| 파일 | 역할 |
|------|------|
| `domain/model/BridgeMessage.kt` | 도메인 데이터 모델 |
| `core/bridge/NativeBridge.kt` | `@JavascriptInterface` + `BRIDGE_INIT_SCRIPT` |
| `presentation/viewmodel/WebViewViewModel.kt` | 상태 + 이벤트 처리 (MVVM) |
| `presentation/screen/WebViewScreen.kt` | WebView가 있는 Compose 화면 |

`@JavascriptInterface` 객체는 `_androidBridge`로 등록됩니다. 매 페이지 로드 후 `NativeBridge.BRIDGE_INIT_SCRIPT`가 실행되어 `window.webkit.messageHandlers.bridge.postMessage` → `_androidBridge.postMessage`로 연결합니다.

---

## RN WebView에 적용된 버그 수정

| 문제 | 수정 |
|------|------|
| 로딩 인디케이터 없음 | `startInLoadingState` + `renderLoading` 추가 |
| 처리되지 않은 오류 | 상태 기반 오류 오버레이가 있는 `onError` 추가 |
| 브릿지 미주입 | iOS 호환 심을 포함한 `injectedJavaScriptBeforeContentLoaded` 추가 |
| `onLoadStart`/`onLoadEnd` 생명주기 없음 | 로딩 상태 관리 핸들러 추가 |
| App 컴포넌트에 URL 하드코딩 | `src/constants/config.ts`로 추출 |

---

## 클린 아키텍처

두 구현 모두 레이어드 아키텍처를 따릅니다:

```
프레젠테이션  ←──  도메인  ←──  데이터 / 코어
   (UI)          (모델)        (브릿지)
```

- **도메인** – 순수 데이터 모델 (`BridgeMessage`)
- **코어 / 브릿지** – 플랫폼 브릿지 구현
- **프레젠테이션** – ViewModel, 훅, 화면 (UI)

---

## 변경 이력

| 날짜 | 변경 내용 |
|------|----------|
| 2026-02-21 | Android + RN 초기 iOS 호환 브릿지 구현 |
| 2026-02-21 | Android 앱을 XML/View에서 Jetpack Compose로 마이그레이션 |
| 2026-02-21 | RN Expo WebView를 클린 아키텍처로 리팩토링 (화면, 훅, 브릿지) |
