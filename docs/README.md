# 프로젝트 문서와 정적 배포 자료

전체 작업 문서의 진입점은 [독립형 HTML 문서 사이트](./html/index.html)입니다.

| 위치 | 내용 |
|---|---|
| [html/index.html](./html/index.html) | 프로젝트 11개, API·WebView 브리지, 구현 상태·실행 안내 |
| [html/examples.html](./html/examples.html) | HTML 예제 16개, 정적 데모 3개, 보존된 Playground |
| [html/history.html](./html/history.html) | 공개 브랜치·태그 기준 전체 커밋 이력 |
| [html/worklog.html](./html/worklog.html) | 브랜치 조사·보존·통합 보고서와 후속 계획 |
| [html/README.md](./html/README.md) | 폴더 독립 배포·갱신·검증 방법 |

## 배포 단위

외부 웹서버로 옮길 때는 **html 폴더 전체만 복사**하면 됩니다. 사이트 관련 문서·이미지·스타일·스크립트·이력·정적 데모·관리 도구는 모두 해당 폴더 안에 있습니다. 상위 docs나 소스 앱은 열람·정적 제공에 필요하지 않습니다.

현재 GitHub Pages 설정은 자동 변경하지 않습니다. 로컬 문서 생성과 운영 사이트 반영은 별도 작업입니다.

## 기존 자료와 호환 경로

기존 URL과 작업 보존을 위해 아래 원본은 유지합니다.

| 기존 위치 | 역할 / 독립 사이트와의 관계 |
|---|---|
| [index.html](./index.html), [about.html](./about.html) | 기존 포트폴리오. 독립 사본은 html/demos/portfolio |
| [blog/](./blog/), [portfolio/](./portfolio/) | 기존 블로그·쇼케이스. 독립 사본은 html/demos/portfolio 내부 |
| [cc-blackjack/](./cc-blackjack/) | Cocos 빌드 원본. 독립 사본은 html/demos/cc-blackjack |
| [web-frontend-vite/](./web-frontend-vite/) | Vite 빌드 원본. 상대 경로로 보완한 독립 사본은 html/demos/web-frontend-vite |
| [webview-bridge/](./webview-bridge/) | 기존 한국어·영어 가이드. 핵심 흐름은 독립 사이트 프로젝트·브리지 설명에 요약 |
| [old/](./old/) | 기존 보관 자료. 삭제·이동하지 않으며 중복 전체 트리를 다시 패키징하지 않음 |
| [html/playground.html](./html/playground.html) | 기존 html/index.html 첫 화면 보존 |

파일 출처·복사 결과는 [데모 manifest](./html/demos/manifest.json), 기능별 한계와 계획은 [정리 보고서](./html/worklog.html)에 기록합니다.
