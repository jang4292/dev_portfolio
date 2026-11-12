"""Export public branch/tag history, excluding stash and agent checkpoint refs."""

import argparse
from datetime import datetime, timezone
from html import escape
import json
from pathlib import Path
import subprocess


SITE = Path(__file__).resolve().parents[1]


def git(repo, *args):
    return subprocess.check_output(
        ["git", "-C", str(repo), *args], encoding="utf-8"
    ).strip()


def export(repo):
    raw = git(
        repo, "log", "--branches", "--remotes", "--tags", "--date-order",
        "--format=%H%x00%cI%x00%P%x00%s%x00",
    )
    fields = raw.split("\0")
    commits = []
    for offset in range(0, len(fields) - 1, 4):
        sha, date, parents, subject = fields[offset:offset + 4]
        commits.append({
            "sha": sha.strip(), "date": date, "parents": parents.split(), "subject": subject
        })
    expected = int(git(repo, "rev-list", "--count", "--branches", "--remotes", "--tags"))
    if len(commits) != expected or len({item["sha"] for item in commits}) != expected:
        raise ValueError("Commit export is incomplete or contains duplicate SHAs.")
    snapshot = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "head": git(repo, "rev-parse", "HEAD"),
        "scope": "refs/heads, refs/remotes, refs/tags; excludes stash and refs/agents",
        "count": expected,
        "commits": commits,
    }
    output = SITE / "history"
    output.mkdir(exist_ok=True)
    (output / "commits.json").write_text(
        json.dumps(snapshot, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    entries = []
    for item in commits:
        subject = escape(item["subject"])
        sha = item["sha"]
        parent_text = " · ".join(item["parents"]) or "최초 커밋"
        badge = "병합" if len(item["parents"]) > 1 else "작업"
        entries.append(
            f'<li class="commit" data-search="{escape(sha + " " + item["date"] + " " + item["subject"], quote=True)}">'
            f'<div><time datetime="{item["date"]}">{item["date"][:10]}</time>'
            f'<span class="badge">{badge}</span></div><h2>{subject}</h2>'
            f'<details><summary><code>{sha[:7]}</code> 커밋 정보</summary>'
            f'<p class="break"><code>{sha}</code></p><p class="break">부모: {escape(parent_text)}</p>'
            f'<a href="https://github.com/jang4292/dev_portfolio/commit/{sha}" rel="noreferrer">GitHub 원문 (온라인)</a>'
            f'</details></li>'
        )
    page = f"""<!doctype html>
<html lang="ko">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="프로젝트 전체 공개 브랜치의 중복 없는 Git 커밋 기록">
<title>작업 이력 · dev_portfolio</title><link rel="icon" href="assets/mark.svg" type="image/svg+xml">
<link rel="stylesheet" href="assets/portal.css"><script src="assets/portal.js" defer></script></head>
<body><a class="skip" href="#main">본문으로 이동</a>
<header class="masthead"><a class="brand" href="index.html">dev<span>_</span>portfolio <small>WORKBOOK</small></a>
<nav aria-label="문서 메뉴"><a href="index.html">프로젝트 문서</a><a href="examples.html">예제와 데모</a>
<a href="history.html" aria-current="page">전체 작업 이력</a><a href="worklog.html">정리 보고서</a></nav></header>
<main id="main" class="page"><div class="eyebrow">CHANGELOG / SNAPSHOT</div><h1>작업을 남기고,<br>맥락을 연결합니다.</h1>
<p class="lead">일반 브랜치·원격 추적 브랜치·태그에서 도달 가능한 <strong>{expected}개</strong> 커밋입니다.
같은 변경이라도 rebase로 SHA가 달라진 기록은 구분합니다.</p>
<div class="notice">기준 HEAD: <code>{snapshot["head"]}</code><br>
stash, agent 체크포인트, 작성자 이름·이메일, 커밋 본문과 diff는 내보내지 않습니다.
로컬 스냅샷이며 이후 원격 변경을 실시간으로 반영하지 않습니다.</div>
<p><a class="button secondary" href="history/commits.json" download>전체 기록 JSON 다운로드</a></p>
<section data-filter-list><div class="filterbar" hidden data-filter-controls>
<label for="history-search">이력 검색<input id="history-search" type="search" data-filter-input placeholder="커밋 제목, 날짜, SHA" autocomplete="off"></label>
<button type="button" class="button secondary" data-filter-clear>초기화</button>
<p data-filter-count role="status" aria-live="polite"></p></div>
<p data-filter-empty hidden>일치하는 작업 이력이 없습니다. 검색어를 바꾸거나 초기화하세요.</p>
<ol class="commit-list">{"".join(entries)}</ol></section>
<footer class="footer">기록은 구현 근거이며 동작 검증 결과가 아닙니다. <a href="index.html#verification">검증 범위 확인</a></footer>
</main></body></html>
"""
    (SITE / "history.html").write_text(page, encoding="utf-8")
    print(f"Exported {expected} unique public-history commits; no private refs or author data.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--repo", type=Path, default=SITE.parent.parent)
    export(parser.parse_args().repo.resolve())
