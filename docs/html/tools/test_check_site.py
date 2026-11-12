import tempfile
import unittest
from pathlib import Path

from check_site import check_site


class PortableSiteTests(unittest.TestCase):
    def check_fixture(self, markup, extra=None):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / "index.html").write_text(markup, encoding="utf-8")
            for name, content in (extra or {}).items():
                (root / name).write_text(content, encoding="utf-8")
            return check_site(root)

    def test_local_fragments_and_optional_online_links(self):
        self.assertEqual([], self.check_fixture(
            '<h1 id="main">문서</h1><a href="#main">이동</a>'
            '<a href="https://example.com">온라인 참고</a>'
        ))

    def test_parent_escape_and_absolute_paths_are_rejected(self):
        errors = self.check_fixture('<a href="../README.md">원문</a><img src="/logo.svg">')
        self.assertEqual(2, len(errors))

    def test_remote_runtime_assets_and_missing_fragments_are_rejected(self):
        errors = self.check_fixture('<script src="https://example.com/app.js"></script><a href="#missing">이동</a>')
        self.assertEqual(2, len(errors))

    def test_css_dependencies_and_lfs_pointers_are_checked(self):
        errors = self.check_fixture('<link rel="stylesheet" href="site.css">', {
            "site.css": 'body { background: url("missing.png"); }',
            "image.png": "version https://git-lfs.github.com/spec/v1\noid sha256:example\n",
        })
        self.assertEqual(2, len(errors))


if __name__ == "__main__":
    unittest.main()
