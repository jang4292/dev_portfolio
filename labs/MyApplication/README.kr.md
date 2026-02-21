# MyApplication – Android WebView (Jetpack Compose)

[English Version → README.md](README.md)

## 개요

**iOS 호환 JavaScript 브릿지**를 갖춘 전체 화면 WebView를 렌더링하는 Android 애플리케이션입니다.

브릿지는 iOS WKWebView가 사용하는 `window.webkit.messageHandlers` 패턴을 따르므로, 단일 JavaScript 코드베이스로 두 플랫폼 모두와 동일하게 통신합니다.

---

## 아키텍처

```
com.yhjang.myapplication
├── MainActivity.kt                      # Compose 진입점
├── domain/
│   └── model/
│       └── BridgeMessage.kt             # 도메인 모델
├── core/
│   └── bridge/
│       └── NativeBridge.kt              # @JavascriptInterface + iOS 심 스크립트
└── presentation/
    ├── screen/
    │   └── WebViewScreen.kt             # Compose UI
    ├── viewmodel/
    │   └── WebViewViewModel.kt          # MVVM 상태 관리
    └── theme/
        └── Theme.kt                     # Material3 테마
```

**클린 아키텍처 레이어:**
- **도메인** – 순수 데이터 모델, Android/Compose 의존성 없음
- **코어** – 플랫폼 특화 인프라 (브릿지)
- **프레젠테이션** – Compose UI + ViewModel (MVVM)

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
| 언어 | Kotlin 2.0.21 |
| UI | Jetpack Compose (BOM 2025.02.00) |
| 아키텍처 | MVVM + 클린 아키텍처 |
| 상태 | `StateFlow` / `collectAsStateWithLifecycle` |
| 내비게이션 | Navigation Compose 2.9.0 |
| 최소 SDK | 24 (Android 7.0) |
| 타겟 SDK | 36 |

---

## 시작하기

```bash
# Android Studio에서 열고 Gradle 동기화
# 에뮬레이터 또는 기기에서 실행
./gradlew assembleDebug
```

---

## 버그 이력

| 날짜 | 버그 | 수정 |
|------|------|------|
| 2026-02-21 | INTERNET 권한 누락 | `AndroidManifest.xml`에 추가 |
| 2026-02-21 | XML View 기반 레이아웃이 현대적 Compose 아키텍처와 호환되지 않음 | Jetpack Compose로 마이그레이션 |
| 2026-02-21 | Android 브릿지가 `window.Android.*` 사용 (iOS JS와 호환되지 않음) | iOS 호환 `window.webkit.messageHandlers.bridge` 심으로 교체 |
