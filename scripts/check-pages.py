import re
import sys

for f in sys.argv[1:]:
    html = open(f, encoding="utf-8", errors="ignore").read()
    t = re.search(r"<title>(.*?)</title>", html, re.S)
    d = re.search(r'name="description" content="(.*?)"', html, re.S)
    h1 = re.search(r"<h1[^>]*>(.*?)</h1>", html, re.S)
    print("===", f)
    print("TITLE:", t.group(1) if t else None)
    print("DESC:", (d.group(1)[:200] if d else None))
    print("H1:", re.sub(r"<[^>]+>", "", h1.group(1))[:150] if h1 else None)
    print()
