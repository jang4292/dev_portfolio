# 실행과 운영

## 로컬 웹 앱

Node.js 24.22.3 이상인 24.x를 사용합니다. 프로젝트 `.nvmrc`에는 검증 기준인 24.22.3이 기록되어 있습니다. 프로젝트 폴더에서 다음 명령을 실행합니다.

```sh
npm ci
npm run start
```

브라우저에서 `http://127.0.0.1:4173`을 엽니다. 로컬 서버를 실행한 터미널은 테스트 중 열어 두세요. `PORT` 환경 변수로 포트를 변경할 수 있습니다. 소스를 변경했다면 서버를 재시작하거나 `npm run build`로 다시 빌드한 뒤 새로고침합니다.

`web/index.html`을 직접 열면 브라우저의 `file://` 모듈 제한과 빌드 전 라이브러리 경로 때문에 앱이 실행되지 않습니다. 학습 가이드 `docs/html/index.html`은 직접 열 수 있습니다.

## CLI 변환

```sh
node scripts/xlsx-to-json2.mjs input/data.xlsx '--sheet=Q&A' --rulesetId=BJ_6D_S17_DAS_NS --out=output/strategy-new.json
node scripts/xlsx-to-offers.mjs input/data.xlsx --sheet=offers --rulesetId=BJ_6D_S17_DAS_NS --out=output/offers-new.json
```

셸에서 `&`가 특수 문자로 해석되는 환경에서는 `--sheet=Q&A` 전체를 따옴표로 감싸세요. 전략은 시트를 지정하지 않으면 두 번째 시트를, 오퍼는 첫 번째 시트를 사용합니다. 출력 파일을 지정하지 않으면 현재 디렉터리에 각각 `strategy.json`, `offers.json`을 만듭니다.

오퍼는 `--format=auto`, `--format=table`, `--format=row`, `--range=1`, `--defaultUpcard=A`, `--allow-duplicate=variants` 등을 지원합니다. `variants`는 같은 키의 서로 다른 조건을 유지하며, 같은 키·조건·선택값이 반복되면 안전한 출력 검증에서 오류가 납니다. 표 형식과 행 형식은 기본 결정 시점 처리 방식이 다르므로 결과를 검토하세요.

## 정적 배포

`npm run build`로 만든 `dist/` 전체를 정적 웹서버에 배포합니다. 앱은 자체 로그인과 업무 서버 반영 API를 제공하지 않습니다. 업무 환경의 접근 제어, HTTPS, 배포·복구 절차는 기존 서버에 맞게 구성해야 합니다.

## 참고 데이터와 문제 해결

제공된 `input/data.xlsx`는 최종 원본으로 확정되지 않았습니다. `Q&A`에서 생성한 결과는 기존 `basic_strategy.json`보다 20개 키가 적습니다. `Q&A (2)`는 자동 병합되지 않습니다. `Legend`의 Late Surrender와 예시 JSON의 `NS` ID 차이는 담당자가 확인해야 합니다.

파일이 열리지 않으면 시트와 필수 열을 확인합니다. 중복 열 이름과 정수가 아닌 우선순위는 오류이며, 편집기의 `검증 오류` 항목은 상세 이유를 수정해야 내보낼 수 있습니다. 라이브러리 설치에는 SheetJS 공식 배포 주소에 대한 네트워크 접근이 필요합니다.
