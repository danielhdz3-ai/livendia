import type { FiscalSellerCalcResult } from "@/lib/fiscal-seller-calculator";
import { FISCAL_SELLER_DISCLAIMER } from "@/lib/fiscal-seller-disclaimer";

export function renderFiscalMemoriaHtml(result: FiscalSellerCalcResult, meta: { municipality: string; escrituraDate: string }): string {
  const ownerRows = result.owners
    .map(
      (o) => `<tr>
      <td>${escapeHtml(o.name)} (${o.percent}%)</td>
      <td>${o.grossGain.toFixed(2)} €</td>
      <td>${o.exemptAmount.toFixed(2)} €</td>
      <td>${o.taxableGain.toFixed(2)} €</td>
      <td>${o.irpfEstimate.toFixed(2)} €</td>
    </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <title>Memoria tributaria orientativa — Livendia</title>
  <style>
    body{font-family:system-ui,sans-serif;color:#1e293b;max-width:720px;margin:2rem auto;line-height:1.5;padding:0 1rem}
  header{border-bottom:3px solid #1a4fbf;padding-bottom:1rem;margin-bottom:1.5rem}
    h1{font-size:1.35rem;margin:0;color:#1a4fbf}
    table{width:100%;border-collapse:collapse;margin:1rem 0;font-size:.9rem}
    th,td{border:1px solid #cbd5e1;padding:.5rem;text-align:left}
    th{background:#eff6ff}
    .disclaimer{font-size:.8rem;color:#64748b;background:#f8fafc;padding:1rem;border-radius:8px;margin-top:2rem}
    .net{font-size:1.25rem;font-weight:700;color:#1a4fbf}
  </style>
</head>
<body>
  <header>
    <p style="margin:0;font-size:.75rem;text-transform:uppercase;letter-spacing:.05em;color:#06b6d4">Livendia · Consulta fiscal vendedor</p>
    <h1>Memoria tributaria orientativa</h1>
    <p style="margin:.25rem 0 0;font-size:.9rem">${escapeHtml(meta.municipality)} · Escritura prevista ${escapeHtml(meta.escrituraDate)}</p>
  </header>

  <h2>Plusvalía municipal (IIVTNU)</h2>
  <ul>
    <li>Método objetivo: <strong>${result.plusvalia.methodObjective.toFixed(2)} €</strong> (coef. ${result.plusvalia.coefficient}, ${result.plusvalia.tenureYears} años, tipo ${result.plusvalia.tipoPercent} %)</li>
    <li>Método real: <strong>${result.plusvalia.methodReal.toFixed(2)} €</strong></li>
    <li><strong>A pagar (orientativo): ${result.plusvalia.payable.toFixed(2)} €</strong></li>
  </ul>
  ${result.plusvalia.verification === "pending_boe" ? "<p><em>Coeficientes y tipo municipal pendientes de verificación BOE/ordenanza.</em></p>" : ""}

  <h2>IRPF (ganancia patrimonial) por titular</h2>
  <table>
    <thead><tr><th>Titular</th><th>Ganancia bruta</th><th>Exención orient.</th><th>Base</th><th>IRPF est.</th></tr></thead>
    <tbody>${ownerRows}</tbody>
  </table>
  <p>Total IRPF orientativo: <strong>${result.totalIrpf.toFixed(2)} €</strong></p>

  <h2>Líquido aproximado</h2>
  <p class="net">${result.netApprox.toFixed(2)} €</p>
  <p style="font-size:.85rem">Precio venta − hipoteca − gastos venta − plusvalía − IRPF estimado.</p>

  <h2>Hipótesis</h2>
  <ul>${[...result.assumptions, ...result.owners.flatMap((o) => o.assumptions)].map((a) => `<li>${escapeHtml(a)}</li>`).join("")}</ul>

  <div class="disclaimer"><strong>Disclaimer.</strong> ${escapeHtml(FISCAL_SELLER_DISCLAIMER)}</div>
</body>
</html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}