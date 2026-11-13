# 개발 가이드 — 환경 구축부터 코드 읽기까지

Rust를 처음 설치하는 사람을 기준으로 작성했습니다.

## 1. Rust 설치

### macOS / Linux

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

설치 후 **새 터미널을 열고** 확인합니다.

```bash
rustc --version   # 컴파일러
cargo --version   # 빌드·패키지 도구
```

### Windows

[rustup.rs](https://rustup.rs)에서 `rustup-init.exe`를 내려받아 실행합니다.
설치 중 "Visual Studio C++ Build Tools"가 필요하다는 안내가 나오면 함께 설치합니다.

### 설치되는 도구

| 도구 | 역할 |
|---|---|
| `rustup` | Rust 버전·구성 요소 관리자 |
| `rustc` | 컴파일러 (직접 쓸 일은 거의 없음) |
| `cargo` | 빌드, 실행, 테스트, 의존성 관리를 모두 담당. **대부분 이것만 사용** |

## 2. 프로젝트 실행

```bash
cd playground/rust_stopwatch
cargo run
```

- 처음에는 의존성 다운로드와 컴파일로 수 분이 걸릴 수 있습니다.
- 두 번째부터는 변경된 부분만 다시 컴파일하므로 빠릅니다.
- Linux에서 빌드 오류가 나면 그래픽 개발 패키지가 필요할 수 있습니다.
  (Ubuntu 예: `sudo apt install libxkbcommon-dev libgtk-3-dev`)

### 자주 쓰는 Cargo 명령

```bash
cargo run            # 빌드 후 실행
cargo test           # 단위 테스트 실행
cargo fmt            # 코드 자동 정렬
cargo fmt --check    # 정렬 상태만 검사
cargo clippy         # 정적 분석 (더 나은 코드 제안)
cargo build --release  # 최적화된 실행파일 생성 (target/release/)
```

## 3. 코드 읽는 순서

초보자는 아래 순서로 읽는 것을 권합니다.

### ① `Cargo.toml` — 프로젝트 정의

```toml
[package]
name = "rust_stopwatch"   # 프로젝트 이름
edition = "2021"          # 사용하는 Rust 문법 세대

[dependencies]
eframe = "0.31.1"         # 외부 라이브러리(크레이트)
```

### ② `src/stopwatch.rs` — 순수 로직 (UI 없음)

가장 먼저 읽을 파일입니다. Rust 핵심 개념이 모두 들어 있습니다.

| 코드 | 개념 |
|---|---|
| `struct Stopwatch { ... }` | 구조체 — 관련 데이터 묶기 |
| `#[derive(Default)]` | 초기값 자동 생성 |
| `impl Stopwatch { ... }` | 메서드 정의 |
| `&self` / `&mut self` | 읽기 빌림 / 쓰기 빌림 |
| `Option<Instant>` | "값이 있을 수도, 없을 수도" — null 대신 사용 |
| `if let Some(x) = ...take()` | Option에서 값을 꺼내며 None으로 비우기 |
| `match` | 경우의 수를 빠짐없이 처리 |
| `#[cfg(test)] mod tests` | 같은 파일 안의 단위 테스트 |

### ③ `src/main.rs` — GUI 계층

| 코드 | 개념 |
|---|---|
| `mod stopwatch;` | 다른 파일(모듈) 불러오기 |
| `impl eframe::App for StopwatchApp` | 트레이트 구현 — "이 타입은 앱이다" |
| `update(&mut self, ctx, ...)` | 매 프레임 호출되어 화면을 그림 (즉시 모드 GUI) |
| `ui.button("...").clicked()` | 버튼을 그리고 클릭 여부를 동시에 반환 |
| `request_repaint_after(...)` | 측정 중일 때만 재갱신 예약 (CPU 절약) |
| `format!("{hours:02}...")` | 문자열 포매팅 — `02`는 두 자리 0 채움 |

## 4. 동작 원리 요약

```text
[Start] ──▶ started_at = Some(지금)
[Pause] ──▶ accumulated += 지금 − started_at;  started_at = None
[Resume]──▶ started_at = Some(지금)            (정지했던 시간은 자연히 제외)
[Reset] ──▶ accumulated = 0;  started_at = None

표시 시간 = accumulated + (측정 중이면 지금 − started_at, 아니면 0)
```

프레임마다 "조금씩 더하는" 방식이 아니라 **매번 실제 경과 시간을 다시 계산**하므로
프레임이 밀려도 시간이 틀어지지 않습니다.

## 5. 수정해 보기 (연습 과제)

1. **쉬움**: 창 크기, 글자 크기(`size(40.0)`) 바꿔 보기
2. **보통**: Lap 버튼을 추가하고 `Vec<Duration>`에 기록해 목록으로 표시하기
3. **도전**: 한글 글꼴(`ctx.set_fonts`)을 등록하고 버튼을 한국어로 바꾸기

수정 후에는 항상 아래로 확인합니다.

```bash
cargo fmt && cargo test && cargo run
```

## 6. 막혔을 때

- 컴파일 오류 메시지를 그대로 읽으세요. Rust 컴파일러는 **원인과 해결 방법을 함께** 알려 줍니다.
- `rustc --explain E0502`처럼 오류 코드를 설명받을 수 있습니다.
- 공식 입문서: [The Rust Programming Language (한국어판)](https://doc.rust-kr.org/)
- egui 예제 모음: [egui demo](https://www.egui.rs/)
