# 입력과 JSON 구조

## 엑셀 입력

전략 시트는 `PlayerHandType`, `PlayerHand`, `DealerUpcard`, `Action` 또는 `ActionCode`, `Answer`, `Reason`을 사용합니다. `decisionWindow`, `priority`, `rulesetId`는 선택 사항입니다. 열 이름의 대소문자, 공백, 밑줄은 구분하지 않지만 정규화 후 중복된 열은 오류로 처리합니다.

오퍼 표 형식은 `offerType`, `choice`, `answer`, `reason`을 사용합니다. 선택값 열이 비어 있고 `Action`에 값이 있으면 `Action`을 사용합니다. 헤더 없는 행 형식은 보험·이븐머니, 선택값, 답변, 이유 순서로 찾습니다. 형식, 첫 행 오프셋과 중복 처리 방법을 선택할 수 있습니다.

엑셀의 행별 `rulesetId`가 있으면 화면 또는 CLI에서 입력한 기본 ID보다 우선합니다. 빈 우선순위는 0이며 다른 값은 안전한 정수여야 합니다. 시트의 수식을 새로 계산하지 않으므로 최신 계산 결과가 저장된 파일을 사용하세요.

## 공통 JSON

최상위 필드는 `version`, `rulesetId`, `sheet`, `count`, `items`입니다. `count`는 행 수가 아니라 `items` 키 수입니다. 각 키의 `variants`에는 조건별 항목이 들어갑니다. 문구 이외의 추가 필드는 가능한 한 그대로 보존합니다.

```json
{
  "version": "2026-11-13",
  "rulesetId": "BJ_6D_S17_DAS_NS",
  "sheet": "Q&A",
  "count": 1,
  "items": {
    "BJ_6D_S17_DAS_NS::HARD:16::D:10": {
      "variants": [{
        "when": {}, "priority": 0,
        "playerHandType": "HARD", "playerHand": 16,
        "dealerUpcard": "10", "actionCode": "H",
        "answer": "Hit", "reason": "Example"
      }]
    }
  }
}
```

## 전략과 오퍼의 차이

전략 키는 `Ruleset::손패유형:손패값::D:딜러카드`입니다. `HARD`와 `SOFT` 손패값은 숫자이며 `PAIR`는 `A` 또는 `2`부터 `10`까지의 문자열입니다. 행동 코드는 `H`, `S`, `D`, `P`, `R` 중 하나입니다.

오퍼 키는 `Ruleset::OFFER:오퍼유형::D:딜러카드`입니다. 오퍼 유형은 `INSURANCE` 또는 `EVEN_MONEY`, 선택값은 `Y` 또는 `N`입니다. `when.playerState`는 `ANY` 또는 `BLACKJACK`일 수 있습니다. `decisionWindow`는 `initial` 또는 `not_initial`입니다.

## 검증과 복구

구조를 읽을 수 있지만 값이 누락되거나 키가 맞지 않는 JSON은 편집기에 불러와 오류 배지와 상세 이유를 확인할 수 있습니다. 필수 문구, 카드·행동 값, 키 일치와 중복 조건을 수정해야 서비스 JSON을 내보낼 수 있습니다. 객체가 아닌 variant처럼 안전하게 편집할 수 없는 구조는 가져오지 않습니다.

같은 키의 같은 조건이 반복되면 검증 오류입니다. 오퍼는 선택값도 조건 구분에 사용합니다. 검토 파일은 키와 조건을 기준으로 상태를 연결하며 구분할 수 없는 중복 항목에는 자동 적용하지 않습니다.
