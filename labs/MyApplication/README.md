# MyApplication – Android WebView (Jetpack Compose)

[한국어 버전 → README.kr.md](README.kr.md)

## Overview

An Android application that renders a full-screen WebView with an **iOS-compatible JavaScript bridge**.

The bridge follows the `window.webkit.messageHandlers` pattern used by iOS WKWebView, so a single JavaScript codebase communicates identically with both platforms.

---

## Architecture

```
com.yhjang.myapplication
├── MainActivity.kt                      # Compose entry point
├── domain/
│   └── model/
│       └── BridgeMessage.kt             # Domain model
├── core/
│   └── bridge/
│       └── NativeBridge.kt              # @JavascriptInterface + iOS-shim script
└── presentation/
    ├── screen/
    │   └── WebViewScreen.kt             # Compose UI
    ├── viewmodel/
    │   └── WebViewViewModel.kt          # MVVM state management
    └── theme/
        └── Theme.kt                     # Material3 theme
```

**Clean Architecture layers:**
- **Domain** – pure data models, no Android/Compose dependencies
- **Core** – platform-specific infrastructure (bridge)
- **Presentation** – Compose UI + ViewModel (MVVM)

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
| Language | Kotlin 2.0.21 |
| UI | Jetpack Compose (BOM 2025.02.00) |
| Architecture | MVVM + Clean Architecture |
| State | `StateFlow` / `collectAsStateWithLifecycle` |
| Navigation | Navigation Compose 2.9.0 |
| Min SDK | 24 (Android 7.0) |
| Target SDK | 36 |

---

## Getting Started

```bash
# Open in Android Studio and sync Gradle
# Then run on an emulator or device
./gradlew assembleDebug
```

---

## Bug History

| Date | Bug | Fix |
|------|-----|-----|
| 2026-02-21 | Missing INTERNET permission | Added to `AndroidManifest.xml` |
| 2026-02-21 | XML View-based layout incompatible with modern Compose architecture | Migrated to Jetpack Compose |
| 2026-02-21 | Android bridge used `window.Android.*` (incompatible with iOS JS) | Replaced with iOS-compatible `window.webkit.messageHandlers.bridge` shim |
