import openpyxl
from pathlib import Path
import io, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

PERF = Path(r"C:\Users\Daniel HDZ\Desktop\clara\https___livendia.com_-Performance-on-Search-2026-10-26.xlsx")
COV = Path(r"C:\Users\Daniel HDZ\Desktop\clara\https___livendia.com_-Coverage-2026-10-26.xlsx")


def sheet_rows(path, sheet_name):
    wb = openpyxl.load_workbook(path, read_only=True, data_only=True)
    ws = wb[sheet_name]
    rows = list(ws.iter_rows(values_only=True))
    wb.close()
    return rows


def main():
    chart = sheet_rows(PERF, "Gráfico")
    total_clicks = sum(float(r[1] or 0) for r in chart[1:] if r and r[0])
    total_impr = sum(float(r[2] or 0) for r in chart[1:] if r and r[0])
    print("=== RESUMEN 6 MESES (Performance) ===")
    print(f"Filas gráfico: {len(chart)-1}")
    print(f"Clics totales: {int(total_clicks)}")
    print(f"Impresiones totales: {int(total_impr)}")
    print(f"CTR global: {total_clicks/total_impr*100:.2f}%" if total_impr else "N/A")
    print()

    # últimos 30 días vs anteriores (chart rows have date in col0)
    dated = [r for r in chart[1:] if r and r[0]]
    dated_sorted = sorted(dated, key=lambda r: r[0])
    last30 = dated_sorted[-30:]
    prev30 = dated_sorted[-60:-30] if len(dated_sorted) >= 60 else []
    c30 = sum(float(r[1] or 0) for r in last30)
    i30 = sum(float(r[2] or 0) for r in last30)
    print(f"Últimos 30 días: {int(c30)} clics / {int(i30)} impresiones")
    if prev30:
        cp = sum(float(r[1] or 0) for r in prev30)
        ip = sum(float(r[2] or 0) for r in prev30)
        print(f"30 días previos:  {int(cp)} clics / {int(ip)} impresiones")
        if ip:
            print(f"Variación impresiones: {(i30-ip)/ip*100:+.1f}%")
        if cp:
            print(f"Variación clics: {(c30-cp)/cp*100:+.1f}%")
    print(f"Rango fechas: {dated_sorted[0][0]} -> {dated_sorted[-1][0]}")
    print()

    queries = sheet_rows(PERF, "Consultas")[1:]
    q_data = []
    for r in queries:
        if not r or not r[0]:
            continue
        q_data.append({
            "q": str(r[0]),
            "clicks": float(r[1] or 0),
            "impr": float(r[2] or 0),
            "ctr": float(r[3] or 0),
            "pos": float(r[4] or 999),
        })

    print(f"Total consultas únicas: {len(q_data)}")
    print()
    print("=== TOP 25 CONSULTAS POR CLICS ===")
    for x in sorted(q_data, key=lambda x: -x["clicks"])[:25]:
        print(f"  {int(x['clicks']):3d} clics | {int(x['impr']):5d} impr | CTR {x['ctr']*100:5.2f}% | pos {x['pos']:5.1f} | {x['q'][:70]}")
    print()

    print("=== TOP 25 CONSULTAS POR IMPRESIONES ===")
    for x in sorted(q_data, key=lambda x: -x["impr"])[:25]:
        print(f"  {int(x['impr']):5d} impr | {int(x['clicks']):3d} clics | CTR {x['ctr']*100:5.2f}% | pos {x['pos']:5.1f} | {x['q'][:70]}")
    print()

    print("=== OPORTUNIDADES: pos 4-20, 0 clics, impr>=10 (quick wins SEO) ===")
    opps = [x for x in q_data if x["clicks"] == 0 and x["impr"] >= 10 and 4 <= x["pos"] <= 20]
    for x in sorted(opps, key=lambda x: -x["impr"])[:30]:
        print(f"  {int(x['impr']):5d} impr | pos {x['pos']:5.1f} | {x['q'][:70]}")
    print()

    print("=== CONSULTAS DE MARCA (livendia) ===")
    brand = [x for x in q_data if "livendia" in x["q"].lower()]
    b_impr = sum(x["impr"] for x in brand)
    b_clicks = sum(x["clicks"] for x in brand)
    print(f"Total marca: {int(b_clicks)} clics / {int(b_impr)} impr ({len(brand)} queries)")
    non_brand_impr = total_impr - b_impr
    non_brand_clicks = total_clicks - b_clicks
    print(f"Total NO marca: {int(non_brand_clicks)} clics / {int(non_brand_impr)} impr")
    print()

    print("=== KEYWORDS NEGOCIO (impresiones / clics) ===")
    keywords = ["arras", "gestor", "gestoria", "gestoría", "alquiler", "vender", "sin agencia",
                "sin comision", "sin comisión", "contrato", "lau", "inquilino", "inmobiliaria",
                "administracion de fincas", "temporada", "habitacion", "notificacion fehaciente",
                "burofax", "desahucio", "renovacion"]
    for kw in keywords:
        subset = [x for x in q_data if kw.lower() in x["q"].lower()]
        impr = sum(x["impr"] for x in subset)
        clicks = sum(x["clicks"] for x in subset)
        avgpos = sum(x["pos"]*x["impr"] for x in subset)/impr if impr else 0
        print(f"  '{kw}': {int(clicks)} clics / {int(impr)} impr ({len(subset)} queries) pos media {avgpos:.1f}")
    print()

    # Pages
    pages = sheet_rows(PERF, "Páginas")[1:]
    p_data = []
    for r in pages:
        if not r or not r[0]:
            continue
        p_data.append({
            "url": str(r[0]),
            "clicks": float(r[1] or 0),
            "impr": float(r[2] or 0),
            "ctr": float(r[3] or 0),
            "pos": float(r[4] or 999),
        })

    print(f"Total páginas con datos: {len(p_data)}")
    print()
    print("=== TOP 20 PÁGINAS POR CLICS ===")
    for x in sorted(p_data, key=lambda x: -x["clicks"])[:20]:
        path = x["url"].replace("https://livendia.com", "")
        print(f"  {int(x['clicks']):3d} clics | {int(x['impr']):5d} impr | CTR {x['ctr']*100:5.2f}% | pos {x['pos']:5.1f} | {path[:65]}")
    print()

    print("=== TOP 25 PÁGINAS POR IMPRESIONES ===")
    for x in sorted(p_data, key=lambda x: -x["impr"])[:25]:
        path = x["url"].replace("https://livendia.com", "")
        print(f"  {int(x['impr']):5d} impr | {int(x['clicks']):3d} clics | CTR {x['ctr']*100:5.2f}% | pos {x['pos']:5.1f} | {path[:65]}")
    print()

    print("=== PÁGINAS CON MUCHAS IMPRESIONES Y CTR BAJÍSIMO (<1%, impr>=50) ===")
    bad = [x for x in p_data if x["impr"] >= 50 and x["ctr"] < 0.01]
    for x in sorted(bad, key=lambda x: -x["impr"])[:25]:
        path = x["url"].replace("https://livendia.com", "")
        print(f"  {int(x['impr']):5d} impr | {int(x['clicks']):3d} clics | pos {x['pos']:5.1f} | {path[:65]}")
    print()

    print("=== PÁGINAS BUENA POSICIÓN (pos<=15) PERO 0 CLICS ===")
    bad2 = [x for x in p_data if x["pos"] <= 15 and x["clicks"] == 0 and x["impr"] >= 5]
    for x in sorted(bad2, key=lambda x: -x["impr"])[:25]:
        path = x["url"].replace("https://livendia.com", "")
        print(f"  {int(x['impr']):5d} impr | pos {x['pos']:5.1f} | {path[:65]}")
    print()

    # Devices
    dev = sheet_rows(PERF, "Dispositivos")[1:]
    print("=== DISPOSITIVOS ===")
    for r in dev:
        if r and r[0]:
            print(f"  {r[0]}: {int(r[1] or 0)} clics / {int(r[2] or 0)} impr / CTR {float(r[3] or 0)*100:.2f}% / pos {float(r[4] or 0):.1f}")
    print()

    # Countries
    countries = sheet_rows(PERF, "Países")[1:]
    print("=== TOP 10 PAÍSES ===")
    c_data = [r for r in countries if r and r[0]]
    for r in sorted(c_data, key=lambda r: -(float(r[2] or 0)))[:10]:
        print(f"  {r[0]}: {int(r[1] or 0)} clics / {int(r[2] or 0)} impr")
    print()

    # Coverage
    cov_chart = sheet_rows(COV, "Gráfico")
    last = cov_chart[-1]
    print("=== COBERTURA (último día del gráfico) ===")
    print(f"  Fecha: {last[0]}")
    header_cov = cov_chart[0]
    print(f"  Header: {header_cov}")
    print(f"  Fila: {last}")
    print()

    crit = sheet_rows(COV, "Problemas críticos")[1:]
    print("=== PROBLEMAS CRÍTICOS COBERTURA ===")
    for r in crit:
        if r and r[0]:
            print(f"  {r}")
    print()

    noncrit = sheet_rows(COV, "Problemas no críticos")[1:]
    print("=== PROBLEMAS NO CRÍTICOS COBERTURA ===")
    for r in noncrit:
        if r and r[0]:
            print(f"  {r}")


if __name__ == "__main__":
    main()
