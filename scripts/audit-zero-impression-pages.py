import io
import sys
import xml.etree.ElementTree as ET
from collections import Counter
from pathlib import Path

import openpyxl

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

PERF = Path(r"C:\Users\Daniel HDZ\Desktop\clara\https___livendia.com_-Performance-on-Search-2026-10-26.xlsx")
SITEMAP = ".tmp-sitemap-d.xml"
NS = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}


def sitemap_urls():
    tree = ET.parse(SITEMAP)
    return [el.text.strip() for el in tree.getroot().findall(".//s:loc", NS)]


def pages_with_impressions():
    wb = openpyxl.load_workbook(PERF, read_only=True, data_only=True)
    ws = wb["Páginas"]
    rows = list(ws.iter_rows(values_only=True))[1:]
    wb.close()
    return {str(r[0]) for r in rows if r and r[0]}


def family(path: str) -> str:
    parts = [p for p in path.split("/") if p]
    if not parts:
        return "/"
    if len(parts) == 1:
        return parts[0]
    return "/".join(parts[:2])


def main():
    all_urls = sitemap_urls()
    with_impr = pages_with_impressions()
    zero = [u for u in all_urls if u not in with_impr]

    print(f"Total sitemap: {len(all_urls)}")
    print(f"Con alguna impresion (6 meses): {len(with_impr & set(all_urls))}")
    print(f"CERO impresiones en 6 meses: {len(zero)}")
    print()

    fam_counter = Counter()
    fam_total = Counter()
    for u in all_urls:
        path = u.replace("https://livendia.com", "")
        fam_total[family(path)] += 1
    for u in zero:
        path = u.replace("https://livendia.com", "")
        fam_counter[family(path)] += 1

    print("=== FAMILIAS CON MAS PAGINAS DE 0 IMPRESIONES (6 MESES) ===")
    print(f"{'zero':>5} / {'total':<6} familia")
    for fam, cnt in sorted(fam_counter.items(), key=lambda x: -x[1]):
        total = fam_total[fam]
        pct = cnt / total * 100 if total else 0
        print(f"{cnt:5d} / {total:<6} {fam}  ({pct:.0f}% de la familia)")


if __name__ == "__main__":
    main()
