# WebView Bridge – iOS-Compatible Pattern

## Overview

This document describes the **WebView bridge** pattern used across all platforms in this project.
The goal is to have a **single JavaScript codebase** that communicates with native code identically on both iOS and Android.

---

## Why iOS-Compatible?

On iOS, `WKWebView` natively exposes:

```js
window.webkit.messageHandlers.<handlerName>.postMessage(data);
```

On Android, the traditional approach adds a `@JavascriptInterface` object named `window.Android`, which requires different JavaScript call sites for each platform.

By **injecting a JavaScript shim** on Android that creates the same `window.webkit.messageHandlers` namespace, both platforms share a single, unified JavaScript API.

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│  Web Page (JavaScript)                                          │
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
│  (native)       │                │  Injected JS shim:       │
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
│                 │                │  (or ReactNativeWebView) │
└─────────────────┘                └──────────────────────────┘
```

---

## Message Protocol

All messages use a simple JSON envelope:

```ts
interface BridgeMessage {
  action: string;                      // Command identifier
  payload?: Record<string, unknown>;   // Optional data
}
```

### Example – Web → Native

```js
window.webkit.messageHandlers.bridge.postMessage(
  JSON.stringify({
    action: 'openCamera',
    payload: { quality: 'high' }
  })
);
```

### Example – Native → Web (React Native)

```ts
webViewRef.current?.injectJavaScript(`
  window.dispatchEvent(new MessageEvent('nativeBridgeMessage', {
    data: JSON.stringify({ action: 'cameraResult', payload: { uri: '...' } })
  }));
  true;
`);
```

---

## Platform Implementations

### React Native (`services/rn-expo-webview`)

| File | Role |
|------|------|
| `src/bridge/BridgeMessage.ts` | Type definitions + parser |
| `src/bridge/bridgeHandler.ts` | JS shim script (`BRIDGE_INIT_SCRIPT`) |
| `src/hooks/useWebViewBridge.ts` | Hook encapsulating bridge logic |
| `src/screens/WebViewScreen.tsx` | Full-screen WebView with bridge wired up |

The shim is injected via `injectedJavaScriptBeforeContentLoaded` to ensure it is available before any page script runs.

### Android (`labs/MyApplication`)

| File | Role |
|------|------|
| `domain/model/BridgeMessage.kt` | Domain data model |
| `core/bridge/NativeBridge.kt` | `@JavascriptInterface` + `BRIDGE_INIT_SCRIPT` |
| `presentation/viewmodel/WebViewViewModel.kt` | State + event handling (MVVM) |
| `presentation/screen/WebViewScreen.kt` | Compose screen with WebView |

The `@JavascriptInterface` object is registered as `_androidBridge`. After every page load, `NativeBridge.BRIDGE_INIT_SCRIPT` is evaluated to wire `window.webkit.messageHandlers.bridge.postMessage` → `_androidBridge.postMessage`.

---

## Bug Fixes Applied to RN WebView

| Issue | Fix |
|-------|-----|
| No loading indicator | Added `startInLoadingState` + `renderLoading` |
| Unhandled errors | Added `onError` with state-driven error overlay |
| Bridge not injected | Added `injectedJavaScriptBeforeContentLoaded` with iOS-compatible shim |
| No `onLoadStart`/`onLoadEnd` lifecycle | Added handlers with loading state management |
| Hardcoded URL in App component | Extracted to `src/constants/config.ts` |

---

## Clean Architecture

Both implementations follow a layered architecture:

```
Presentation  ←──  Domain  ←──  Data / Core
   (UI)           (Models)       (Bridge)
```

- **Domain** – plain data models (`BridgeMessage`)
- **Core / Bridge** – platform bridge implementation
- **Presentation** – ViewModels, Hooks, Screens (UI)

---

## Changelog

| Date | Change |
|------|--------|
| 2026-02-21 | Initial iOS-compatible bridge implementation for Android + RN |
| 2026-02-21 | Migrated Android app from XML/View to Jetpack Compose |
| 2026-02-21 | Refactored RN Expo WebView into clean architecture (screens, hooks, bridge) |
