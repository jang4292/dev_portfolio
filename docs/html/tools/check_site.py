"""Check that the static website can be copied without its parent directories."""

import argparse
from html.parser import HTMLParser
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.links = []

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if attrs.get("id"):
            self.ids.add(attrs["id"])
        for name in ("href", "src", "poster"):
            if attrs.get(name):
                resource = name != "href" or tag == "link"
                self.links.append((attrs[name], resource))


def check_site(root):
    root = root.resolve()
    errors = []
    pages = {}
    for path in root.rglob("*.html"):
        page = Page()
        page.feed(path.read_text(encoding="utf-8-sig"))
        pages[path.resolve()] = page

    def check_link(source, value, resource):
        url = urlsplit(value)
        if url.scheme or url.netloc:
            if resource and url.scheme != "data":
                errors.append(f"{source.relative_to(root)}: remote resource {value}")
            return
        if value == "#" or not value:
            return
        if url.path.startswith(("/", "\\")):
            errors.append(f"{source.relative_to(root)}: absolute site path {value}")
            return
        target = (source.parent / unquote(url.path)).resolve() if url.path else source
        if not target.is_relative_to(root):
            errors.append(f"{source.relative_to(root)}: escapes html folder {value}")
            return
        if target.is_dir():
            target /= "index.html"
        if not target.is_file():
            errors.append(f"{source.relative_to(root)}: missing {value}")
        elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
            errors.append(f"{source.relative_to(root)}: missing fragment {value}")

    for source, page in pages.items():
        for value, resource in page.links:
            check_link(source, value, resource)
    for source in root.rglob("*.css"):
        text = source.read_text(encoding="utf-8-sig")
        for match in re.finditer(r"url\(\s*[\"']?([^\"')]+)", text):
            check_link(source, match.group(1).strip(), True)
        for match in re.finditer(r"@import\s+[\"']([^\"']+)", text):
            check_link(source, match.group(1), True)
    for path in root.rglob("*"):
        if path.is_file():
            with path.open("rb") as stream:
                if stream.read(80).startswith(b"version https://git-lfs.github.com/spec/v1"):
                    errors.append(f"{path.relative_to(root)}: unhydrated Git LFS pointer")
    return errors


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("root", nargs="?", type=Path, default=Path(__file__).resolve().parents[1])
    arguments = parser.parse_args()
    problems = check_site(arguments.root)
    if problems:
        raise SystemExit("\n".join(problems))
    print("PASS: Local links, fragments, CSS resources and LFS content stay inside html.")
