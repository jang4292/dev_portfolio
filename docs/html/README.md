# 독립형 프로젝트 문서 사이트

진입점: [index.html](./index.html)

## 포함 내용

- [프로젝트 문서](./index.html): 소스 프로젝트 11개, API·브리지, 구현 범위·실행 안내.
- [예제와 데모](./examples.html): 기존 HTML 예제 16개와 정적 데모 3개.
- [기존 첫 화면](./playground.html): 원본 HTML/CSS Playground 보존.
- [전체 작업 이력](./history.html): 공개 브랜치·태그 도달 커밋 전체와 [JSON](./history/commits.json).
- [정리 보고서](./worklog.html): 브랜치 조사·보존·통합 경과 및 후속 계획.
- [데모 출처 목록](./demos/manifest.json): 원본 경로·복사 결과 SHA-256.

## 폴더만 복사하여 배포

1. **이 폴더 전체**를 웹서버의 문서 루트 또는 원하는 하위 디렉터리에 복사합니다.
2. `index.html`을 엽니다. 외부 CDN·문서 API·서버 템플릿·npm 빌드 없이 제공됩니다.
3. HTML, CSS, JS, SVG, JSON, 게임 이미지·오디오·WASM 등 파일 확장자를 정상 제공하는 정적 서버가 필요합니다. `.wasm`은 `application/wasm`, JavaScript는 적절한 JavaScript MIME으로 제공합니다.
4. 폴더 내 상대 경로를 유지합니다. 모든 요청을 홈페이지로 보내는 SPA rewrite를 적용하지 않습니다.

로컬 미리보기(이 폴더에서):

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

`http://127.0.0.1:8080/` 접속. 문서는 파일을 직접 열어도 읽을 수 있고 JavaScript가 꺼져도 본문·전체 이력이 표시됩니다. 검색은 JavaScript 사용 시 활성화됩니다. Vite ES module·Cocos/WASM 데모는 HTTP(S)가 필요합니다.

Python은 미리보기·관리 도구용이며 배포 서버에 필수는 아닙니다. 원본 저장소는 문서 열람 시 필요 없습니다. GitHub·외부 홈페이지·학습 자료 링크는 선택적인 온라인 참고 자료입니다. 네이티브 앱·외부 인증·게임 백엔드 연동은 정적 패키지만으로 제공되지 않습니다.

Cocos 데모는 로컬 자산으로 로비가 렌더링되는 것을 확인했지만, 기존 게임 코드가 외부 개발 백엔드 연결을 시도합니다. 해당 서버의 가용성을 보장하거나 오프라인 서버 기능을 추가하지 않았습니다. 상세 결과는 [검증 기록](./worklog.html#validation)을 확인하세요.

## 저장소에서 갱신

Python 3.10 이상, Git과 원본 저장소가 필요합니다. 저장소 루트에서:

```powershell
python .\docs\html\tools\package_demos.py
python .\docs\html\tools\export_history.py
python -m unittest discover -s .\docs\html\tools -p "test_*.py"
python .\docs\html\tools\check_site.py
```

- 데모 패키징은 원본 배포 경로를 수정하지 않고 사본을 갱신합니다. LFS 포인터는 로컬 LFS 객체의 크기·SHA-256 확인 후 실제 파일로 복원하며 객체가 없으면 실패합니다.
- Vite 사본의 기존 사이트 prefix는 상대 경로로, 포트폴리오의 기존 Vite 주소는 패키지 내부 데모로 바꿉니다.
- 데모 원본에서 제거된 파일이 있다면 manifest와 대상 폴더를 대조하고 해당 파일만 명시적으로 정리한 후 검증합니다. 도구가 폴더 전체를 자동 삭제하지는 않습니다.
- 이력 도구는 로컬 브랜치·원격 추적 브랜치·태그를 기준으로 정적 HTML과 JSON을 갱신합니다. 최신 원격 상태가 필요하면 먼저 승인된 저장소 동기화를 수행합니다.
- stash·agent 체크포인트, 작성자 이름·이메일, 커밋 본문·diff는 내보내지 않습니다. 내보내기 전 커밋 제목의 공개 적합성도 검토합니다.
- 프로젝트 카드·설명·상단 집계·보고서는 소스 및 이력 스냅샷에 맞춰 함께 갱신합니다.
- 검사 도구는 HTML 링크·프래그먼트·CSS 자산·외부 런타임 자산·폴더 이탈·LFS 포인터를 검사합니다. JavaScript 내부 동적 요청, 네이티브 기능, 외부 서버, 모든 게임 시나리오를 검증하는 도구는 아닙니다.
- 갱신 후 **html 폴더만** 별도 위치로 복사해 루트/하위 경로에서 문서와 데모를 다시 확인합니다.

## 보존·공개 범위

기존 첫 페이지는 `playground.html`에, 16개 예제는 각 폴더에 유지합니다. 누락된 hero 이미지 참조는 직접 작성한 로컬 SVG로 보완했습니다. 상위 docs의 기존 사이트·아카이브·배포 산출물은 삭제하지 않습니다.

이 폴더에는 원본 앱의 비공개 백업, stash diff, 로컬 릴리스, 인증 설정을 복제하지 않습니다. 기존 공개 정적 데모 클라이언트 코드는 포함됩니다. Git 이력 JSON은 백업 bundle이 아니므로 원본 Git 복원용으로 사용하지 않습니다.
