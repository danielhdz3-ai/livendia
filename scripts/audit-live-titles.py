import re
import sys
import io
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor, as_completed
import urllib.request

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

SITEMAP = ".tmp-sitemap-now.xml"
NS = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}


def get_urls():
    tree = ET.parse(SITEMAP)
    root = tree.getroot()
    urls = [el.text.strip() for el in root.findall(".//s:loc", NS)]
    return urls


def fetch_title(url):
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 LivendiaAudit/1.0"})
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode("utf-8", errors="ignore")
        m = re.search(r"<title>(.*?)</title>", html, re.S)
        title = m.group(1).strip() if m else None
        return url, title, None
    except Exception as e:
        return url, None, str(e)


def main():
    urls = get_urls()
    print(f"Total URLs: {len(urls)}")
    results = []
    with ThreadPoolExecutor(max_workers=16) as ex:
        futures = [ex.submit(fetch_title, u) for u in urls]
        for i, fut in enumerate(as_completed(futures)):
            url, title, err = fut.result()
            results.append((url, title, err))
            if (i + 1) % 50 == 0:
                print(f"... {i+1}/{len(urls)}", file=sys.stderr)

    errors = [r for r in results if r[2]]
    dup_brand = [r for r in results if r[1] and re.search(r"livendia.*livendia", r[1], re.I)]
    no_title = [r for r in results if not r[1] and not r[2]]

    print(f"\nErrores de fetch: {len(errors)}")
    for u, t, e in errors[:20]:
        print(f"  ERR {u} -> {e}")

    print(f"\nSin <title>: {len(no_title)}")
    for u, t, e in no_title[:20]:
        print(f"  NOTITLE {u}")

    print(f"\n=== TÍTULOS CON 'Livendia' DUPLICADO: {len(dup_brand)} ===")
    for u, t, e in sorted(dup_brand, key=lambda r: r[0]):
        path = u.replace("https://livendia.com", "")
        print(f"  {path}\n     -> {t}\n")

    # Also flag titles with length issues (too long / too short) for quick diagnosis
    too_long = [r for r in results if r[1] and len(r[1]) > 65]
    print(f"\n=== TÍTULOS DEMASIADO LARGOS (>65 chars): {len(too_long)} ===")
    for u, t, e in sorted(too_long, key=lambda r: -len(r[1]))[:15]:
        path = u.replace("https://livendia.com", "")
        print(f"  [{len(t)}] {path} -> {t}")


if __name__ == "__main__":
    main()
