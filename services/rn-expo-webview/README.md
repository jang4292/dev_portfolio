# rn-expo-webview – React Native Expo WebView

[한국어 버전 → README.kr.md](README.kr.md)

## Overview

A React Native (Expo) application that renders a full-screen WebView with an **iOS-compatible JavaScript bridge**.
The bridge follows the `window.webkit.messageHandlers` pattern used by iOS WKWebView so that a single JavaScript codebase communicates identically with both iOS and Android.

---

## Architecture

```
services/rn-expo-webview
├── App.tsx                        # Root component (thin entry point)
├── src/
│   ├── constants/
│   │   └── config.ts              # App-wide constants (target URL, bridge name)
│   ├── bridge/
│   │   ├── BridgeMessage.ts       # Type definitions + parser
│   │   └── bridgeHandler.ts       # iOS-compatible JS shim script
│   ├── hooks/
│   │   └── useWebViewBridge.ts    # Bridge logic hook
│   └── screens/
│       └── WebViewScreen.tsx      # Full-screen WebView screen
```

**Clean Architecture layers:**
- **Constants / Config** – environment-specific values
- **Bridge** – platform bridge types and shim
- **Hooks** – reusable bridge logic
- **Screens** – composable UI

---

## WebView Bridge

JavaScript call (same on iOS and Android):

```js
window.webkit.messageHandlers.bridge.postMessage(
  JSON.stringify({ action: 'someAction', payload: { key: 'value' } })
);
```

See [`docs/webview-bridge/README.en.md`](../../docs/webview-bridge/README.en.md) for full documentation.

---

## Tech Stack

| Component | Library/Version |
|-----------|----------------|
| Framework | Expo ~53.0 |
| Language | TypeScript ~5.8 |
| UI | React Native 0.79 |
| WebView | react-native-webview 13.x |

---

## Getting Started

```bash
cd services/rn-expo-webview
pnpm install
pnpm dev          # Start Expo Dev Server
pnpm dev:android  # Launch on Android emulator
pnpm dev:ios      # Launch on iOS simulator
```

---

## Bug Fixes Applied

| Issue | Fix |
|-------|-----|
| No loading indicator | Added `startInLoadingState` + `renderLoading` |
| Unhandled errors | Added `onError` with error overlay |
| Bridge not injected | Added `injectedJavaScriptBeforeContentLoaded` (iOS-compatible shim) |
| No lifecycle callbacks | Added `onLoadStart`/`onLoadEnd` handlers |
| Hardcoded URL in App.tsx | Extracted to `src/constants/config.ts` |
| No WebView bridge | Implemented `useWebViewBridge` hook + `WebViewScreen` |

---

## Bug History

| Date | Bug | Fix |
|------|-----|-----|
| 2026-02-21 | WebView had no bridge | Implemented iOS-compatible bridge via injected JS shim |
| 2026-02-21 | No loading UX | Added spinner + progress state |
| 2026-02-21 | All logic in App.tsx | Refactored to clean architecture (screens, hooks, bridge) |
