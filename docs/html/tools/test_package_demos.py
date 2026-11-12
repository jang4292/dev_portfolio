import hashlib
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

import package_demos


class DemoPackagingTests(unittest.TestCase):
    def test_copies_have_portable_links_without_modifying_sources(self):
        with tempfile.TemporaryDirectory() as directory:
            repo = Path(directory)
            docs = repo / "docs"
            files = {
                "index.html": '<a href="https://jang4292.github.io/dev_portfolio/web-frontend-vite/">Vite</a><a href="html/index.html">Docs</a>',
                "about.html": "<h1>About</h1>",
                "style.css": "body {}",
                "script.js": "console.log('demo');",
                "blog/index.html": '<link href="style.css"><a href="about.html">About</a><script src="script.js"></script>',
                "portfolio/index.html": "<h1>Portfolio</h1>",
                "cc-blackjack/index.html": "<h1>Game</h1>",
                "web-frontend-vite/index.html": '<script src="/dev_portfolio/web-frontend-vite/assets/app.js"></script>',
                "web-frontend-vite/assets/app.js": "console.log('app');",
            }
            for name, text in files.items():
                source = docs / name
                source.parent.mkdir(parents=True, exist_ok=True)
                source.write_text(text, encoding="utf-8")
            site = docs / "html"
            with patch.object(package_demos, "SITE", site):
                package_demos.package(repo)
            blog = (site / "demos/portfolio/blog/index.html").read_text(encoding="utf-8")
            self.assertIn('href="../style.css"', blog)
            self.assertIn('href="../about.html"', blog)
            self.assertIn('src="../script.js"', blog)
            self.assertIn(
                'href="../web-frontend-vite/"',
                (site / "demos/portfolio/index.html").read_text(encoding="utf-8"),
            )
            self.assertIn(
                'href="../../index.html"',
                (site / "demos/portfolio/index.html").read_text(encoding="utf-8"),
            )
            self.assertIn(
                'src="./assets/app.js"',
                (site / "demos/web-frontend-vite/index.html").read_text(encoding="utf-8"),
            )
            for name, text in files.items():
                self.assertEqual(text, (docs / name).read_text(encoding="utf-8"))
            manifest = json.loads((site / "demos/manifest.json").read_text(encoding="utf-8"))
            for item in manifest:
                data = (site / item["destination"]).read_bytes()
                self.assertEqual(item["sha256"], hashlib.sha256(data).hexdigest())

    def test_lfs_objects_are_verified_before_copying(self):
        with tempfile.TemporaryDirectory() as directory:
            repo = Path(directory)
            data = b"hydrated public demo"
            digest = hashlib.sha256(data).hexdigest()
            pointer = repo / "image.png"
            pointer.write_text(
                f"version https://git-lfs.github.com/spec/v1\noid sha256:{digest}\nsize {len(data)}\n",
                encoding="ascii",
            )
            storage = repo / "objects"
            blob = storage / digest[:2] / digest[2:4] / digest
            blob.parent.mkdir(parents=True)
            blob.write_bytes(data)
            with patch.object(package_demos.subprocess, "check_output", return_value=f"LocalMediaDir={storage}\n"):
                self.assertEqual(data, package_demos.public_bytes(pointer, repo))
                blob.write_bytes(b"corrupted")
                with self.assertRaisesRegex(ValueError, "verification failed"):
                    package_demos.public_bytes(pointer, repo)


if __name__ == "__main__":
    unittest.main()
