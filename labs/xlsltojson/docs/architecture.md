# 구조와 데이터 흐름

## 두 가지 실행 경로

웹 편집기와 Node CLI는 모두 `web/conversion.mjs`의 변환 함수를 사용합니다. 브라우저는 사용자가 선택한 파일을 메모리에서 읽고, CLI는 로컬 파일을 읽어 결과를 씁니다. 어떤 경로도 업무 서버를 직접 갱신하지 않습니다.

```text
Excel → 시트 선택 → 공통 변환 → 문서 검증 → JSON
JSON  → 구조 검사 → 작업 공간 → 편집·검토 → JSON
```

## 주요 구성 요소

- `web/index.html`, `app.mjs`, `style.css`: 화면, 파일 선택과 사용자 상호작용
- `web/conversion.mjs`: 전략·오퍼 변환, 문서 검증과 기준 문서 비교
- `web/workspace.mjs`: 항목 상태, 추가·삭제·복구와 Ruleset 전체 변경
- `web/ruleset.mjs`: Ruleset ID 직접 입력과 선택형 구성
- `scripts/xlsx-to-json2.mjs`, `scripts/xlsx-to-offers.mjs`: 공통 변환을 호출하는 CLI
- `scripts/build-web.mjs`, `scripts/serve-web.mjs`: 정적 앱 빌드와 로컬 미리보기
- `tests/`: 변환, 편집 상태, UI와 가이드 검증

`scripts/xlsx-to-json.mjs`는 JSON을 저장하지 않는 초기 디버그 도구입니다. 새 변환 작업은 전략용 `xlsx-to-json2.mjs` 또는 오퍼용 `xlsx-to-offers.mjs`를 사용합니다.

## 빌드와 배포 단위

`npm run build`는 `dist/`에 웹 앱과 로컬 SheetJS 라이브러리, 예시 JSON을 복사합니다. `docs/html/`은 이 앱과 별개의 학습 사이트이며 앱을 실행하거나 빌드할 필요가 없습니다.

## 작업 상태의 수명

편집 중인 서비스 데이터와 검토 상태는 브라우저 메모리에 있습니다. 서비스 JSON을 내려받는 것과 검토 파일을 내려받는 것은 별도 동작입니다. 새 작업으로 교체하거나 페이지를 닫기 전에 저장되지 않은 변경을 확인합니다.
