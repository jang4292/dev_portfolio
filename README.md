# dev_portfolio

다양한 포트폴리오 및 개인 학습 내용 저장소

---

## 📂 디렉토리 구조 및 역할

| 디렉토리 | 역할 |
|---|---|
| `services/` | 실무형 서비스 (배포·테스트 대상, pnpm 모노레포) |
| `services-backend/` | 독립 백엔드 서비스 (모노레포 외부) |
| `docs/` | 정적 빌드 산출물 (GitHub Pages 배포용) |
| `playground/` | 학습용 미니 앱 / 작동하는 데모 |
| `labs/` | 학습·이론 검증 실습 (배포 X) |
| `experiments/` | 기술 가설 검증 / PoC (불안정·폐기 전제) |

---

## 🌿 브랜치 목록 및 설명

| 브랜치 | 설명 |
|---|---|
| `main` | 기본 통합 브랜치 (protected) |
| `develop` | 개발 통합 브랜치 |
| `feature/android_kotlin` | Android Kotlin 기능 개발 |
| `feature/rn_handsbook` | React Native 핸즈북 실습 |
| `ci/docs-web-frontend-vite` | Vite 프론트엔드 빌드 → docs 배포 CI |
| `github-pages` | GitHub Pages 정적 배포 브랜치 |
| `copilot/update-readme-and-report` | README 업데이트 및 보고서 작성 (현재 브랜치) |
| `copilot/review-webview-bug-fixes` | WebView 버그 수정 리뷰 |

---

## 🗂️ services/ — 실무형 서비스 (pnpm 모노레포)

`pnpm-workspace.yaml`에 의해 `services/*` 전체가 하나의 워크스페이스로 관리됩니다.

### backend-nestjs-fastify

- **기술 스택**: NestJS 11 · Fastify · TypeScript 5 · class-validator
- **포트**: `3000` (환경변수 `PORT`로 변경 가능)
- **보안**: `helmet`, `compression`, `CORS` 활성화
- **엔드포인트**:

  | 메서드 | 경로 | 설명 |
  |---|---|---|
  | GET | `/` | "Hello World!" 반환 |
  | GET | `/lists` | 전체 리스트 반환 (stub) |
  | GET | `/user` | 유저 데이터 반환 (stub) |

- **주요 파일**:
  - `src/main.ts` — Fastify 어댑터, 글로벌 파이프·미들웨어 설정
  - `src/app.module.ts` — AppModule (AppController, ListController, UserController 등록)
  - `src/app.service.ts` — getHello() 서비스
  - `src/list/list.controller.ts` — `/lists` GET
  - `src/list/user.controller.ts` — `/user` GET

### dotnet-server

- **기술 스택**: .NET 8 Minimal API · Swagger/OpenAPI
- **포트**: `5000` (HTTP), `7000` (HTTPS)
- **엔드포인트**:

  | 메서드 | 경로 | 설명 |
  |---|---|---|
  | GET | `/weatherforecast` | 5일치 날씨 예보 (랜덤 데이터) |
  | GET | `/ping` | `{ pong: <UTC timestamp> }` |

- **주요 파일**:
  - `Program.cs` — 앱 진입점, Swagger 설정, 라우트 정의

### python-fastapi

- **기술 스택**: FastAPI · Python
- **엔드포인트**:

  | 메서드 | 경로 | 설명 |
  |---|---|---|
  | GET | `/` | `{"Hello": "World"}` |

- **주요 파일**:
  - `app/main.py` — FastAPI 앱 및 루트 라우트

### rn-expo-webview

- **기술 스택**: Expo 53 · React Native 0.79 · React 19 · TypeScript 5 · react-native-webview
- **동작**: `https://naver.com` (TODO: 대상 URL 변경 필요)을 WebView로 렌더링
- **지원 플랫폼**: Android · iOS · Web
- **주요 파일**:
  - `App.tsx` — SafeAreaView + WebView 메인 컴포넌트

### web-frontend-vite

- **기술 스택**: Vite 7 · React 19 · React Router 7 · TypeScript 5 · SWC
- **현황**: 초기 카운터 앱 + React Router 추가 예정
- **주요 파일**:
  - `src/App.tsx` — 카운터 UI 컴포넌트
  - `src/main.tsx` — 앱 진입점
  - `vite.config.ts` — @vitejs/plugin-react-swc 설정

### web-frontend-react

- **현황**: 비어 있음 (`.gitkeep` 플레이스홀더) — 향후 구현 예정

---

## 🗂️ services-backend/ — 독립 백엔드 서비스

### express-musics

- **기술 스택**: Express 5 · TypeScript 5 · ts-node-dev · cors · morgan
- **포트**: `3000` (환경변수 `PORT`로 변경 가능)
- **엔드포인트**:

  | 메서드 | 경로 | 설명 |
  |---|---|---|
  | GET | `/api/` | Hello 컨트롤러 |
  | POST | `/tracks/upload` | 트랙 업로드 (body 로그 후 `{trackId: 0}` 반환) |

- **주요 파일**:
  - `src/server.ts` — 서버 진입점 (포트 리슨)
  - `src/app.ts` — Express 앱, cors·morgan·라우터 등록
  - `src/routes/index.ts` — `/api` 라우트
  - `src/modules/tracks/tracks.routes.ts` — `/tracks/upload` POST

---

## 🗂️ docs/ — GitHub Pages 정적 배포

| 항목 | 설명 |
|---|---|
| `index.html` | 메인 포트폴리오 랜딩 페이지 |
| `about.html` | 소개 페이지 |
| `style.css` / `script.js` | 전역 스타일·스크립트 |
| `portfolio/` | 포트폴리오 쇼케이스 |
| `blog/` | 블로그 콘텐츠 |
| `cc-blackjack/` | Cocos Creator 블랙잭 게임 (컴파일 산출물) |
| `web-frontend-vite/` | Vite 프론트엔드 빌드 산출물 |

---

## 🗂️ playground/ — 학습용 데모

### rn_expo_calculator

- **기술 스택**: Expo 53 · React Native 0.79 · React 19 (JavaScript, TypeScript 미사용)
- **동작**: 기본 계산기 레이아웃 (Button 컴포넌트 학습용)
- **주요 파일**:
  - `src/App.js` — 메인 화면 (Text + Button)
  - `src/components/Button.js` — 버튼 컴포넌트 (stub)

---

## 🗂️ labs/ & experiments/

| 디렉토리 | 내용 |
|---|---|
| `labs/` | 이론 검증·기초 실습 전용 (배포 X, README만 존재) |
| `experiments/` | PoC·기술 가설 검증 (불안정·임시 코드, README만 존재) |

---

## 🛠️ 루트 공통 설정

| 파일 | 역할 |
|---|---|
| `package.json` | 루트 npm 워크스페이스 정의 및 공통 스크립트 |
| `pnpm-workspace.yaml` | pnpm 워크스페이스 (`services/*`) |
| `eslint.config.mjs` | ESLint flat config (TS, React Hooks, Import 플러그인) |
| `.prettierrc` | Prettier 코드 포맷 설정 |
| `.editorconfig` | 에디터 공통 설정 |

### 주요 루트 스크립트

```bash
pnpm lint           # 전체 ESLint 검사
pnpm lint:fix       # ESLint 자동 수정
pnpm format         # Prettier 포맷 적용
pnpm format:check   # Prettier 포맷 검사
pnpm test           # Jest (테스트 없을 시 pass)
pnpm ws:dev:rnwebview  # services/rn-expo-webview 개발 서버 실행
```

---

## ⚙️ Getting Started

```bash
git clone https://github.com/jang4292/dev_portfolio.git
cd dev_portfolio
pnpm install
```

각 서비스별 실행:

```bash
# NestJS + Fastify
cd services/backend-nestjs-fastify && pnpm start:dev

# .NET 8
cd services/dotnet-server && dotnet run

# FastAPI
cd services/python-fastapi && uvicorn app.main:app --reload

# React Native WebView
cd services/rn-expo-webview && pnpm start

# Vite React
cd services/web-frontend-vite && pnpm dev

# Express Musics
cd services-backend/express-musics && pnpm dev
```
