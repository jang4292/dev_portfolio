"""Copy public static demos without changing the existing deployment paths."""

import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess


SITE = Path(__file__).resolve().parents[1]


def public_bytes(path, repo):
    data = path.read_bytes()
    if not data.startswith(b"version https://git-lfs.github.com/spec/v1"):
        return data
    pointer = data.decode("ascii").replace("\r\n", "\n")
    oid = re.search(r"^oid sha256:([a-f0-9]{64})$", pointer, re.MULTILINE)
    size = re.search(r"^size (\d+)$", pointer, re.MULTILINE)
    if not pointer.startswith("version https://git-lfs.github.com/spec/v1\n") or not oid or not size:
        raise ValueError(f"Invalid Git LFS pointer: {path}")
    environment = subprocess.check_output(
        ["git", "-C", str(repo), "lfs", "env"], encoding="utf-8"
    )
    storage = next(
        line.removeprefix("LocalMediaDir=")
        for line in environment.splitlines()
        if line.startswith("LocalMediaDir=")
    )
    digest = oid.group(1)
    data = (Path(storage) / digest[:2] / digest[2:4] / digest).read_bytes()
    if len(data) != int(size.group(1)) or hashlib.sha256(data).hexdigest() != digest:
        raise ValueError(f"Git LFS content verification failed: {path}")
    return data


def package(repo):
    docs = repo / "docs"
    groups = {
        "cc-blackjack": sorted((docs / "cc-blackjack").rglob("*")),
        "web-frontend-vite": sorted((docs / "web-frontend-vite").rglob("*")),
        "portfolio": [
            docs / name for name in ("index.html", "about.html", "style.css", "script.js")
        ] + sorted((docs / "blog").rglob("*")) + sorted((docs / "portfolio").rglob("*")),
    }
    manifest = []
    for group, paths in groups.items():
        base = docs if group == "portfolio" else docs / group
        if not base.is_dir():
            raise FileNotFoundError(f"Static demo source is missing: {base}")
        for source in paths:
            if source.is_symlink():
                raise ValueError(f"Refusing a linked demo file: {source}")
            if not source.is_file():
                continue
            relative = source.relative_to(base)
            target = SITE / "demos" / group / relative
            data = public_bytes(source, repo)
            if group == "web-frontend-vite" and source.suffix in {".html", ".js", ".css"}:
                data = data.replace(b"/dev_portfolio/web-frontend-vite/", b"./")
            if group == "portfolio" and source.suffix == ".html":
                vite = SITE / "demos" / "web-frontend-vite"
                href = os.path.relpath(vite, target.parent).replace(os.sep, "/") + "/"
                data = data.replace(
                    b"https://jang4292.github.io/dev_portfolio/web-frontend-vite/",
                    href.encode("utf-8"),
                )
                portal = os.path.relpath(SITE / "index.html", target.parent).replace(os.sep, "/")
                data = data.replace(b'href="html/index.html"', f'href="{portal}"'.encode("utf-8"))
                if source.parent != docs:
                    for name, attribute in (
                        ("style.css", "href"), ("about.html", "href"), ("script.js", "src")
                    ):
                        local = os.path.relpath(
                            SITE / "demos" / "portfolio" / name, target.parent
                        ).replace(os.sep, "/")
                        data = data.replace(
                            f'{attribute}="{name}"'.encode("utf-8"),
                            f'{attribute}="{local}"'.encode("utf-8"),
                        )
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(data)
            manifest.append({
                "source": source.relative_to(repo).as_posix(),
                "destination": target.relative_to(SITE).as_posix(),
                "sha256": hashlib.sha256(data).hexdigest(),
            })
    output = SITE / "demos" / "manifest.json"
    output.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Packaged {len(manifest)} public demo files. Original docs paths were not changed.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--repo", type=Path, default=SITE.parent.parent)
    package(parser.parse_args().repo.resolve())
