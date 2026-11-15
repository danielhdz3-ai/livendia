import type { FiscalSellerCalcInput, FiscalSellerCalcResult } from "@/lib/fiscal-seller-calculator";
import { FISCAL_SELLER_DISCLAIMER } from "@/lib/fiscal-seller-disclaimer";
import { getMunicipalityRate } from "@/lib/fiscal-seller-tax-config";

type MemoriaRenderOptions = {
  /** Oculta coeficientes numéricos no verificados en canales públicos. */
  publicExample?: boolean;
  watermark?: string;
};

export function renderFiscalMemoriaDocumentHtml(
  input: FiscalSellerCalcInput,
  result: FiscalSellerCalcResult,
  options: MemoriaRenderOptions = {},
): string {
  const municipality = getMunicipalityRate(input.municipalityId).label;
  const pendingCoef = result.plusvalia.verification === "pending_boe";
  const coefLine =
    options.publicExample && pendingCoef
      ? "Coeficiente según tabla vigente a la fecha de escritura (pendiente verificación BOE/ordenanza)."
      : `Coeficiente ${result.plusvalia.coefficient} (${result.plusvalia.tenureYears} años de tenencia).`;

  const ownerRows = result.owners
    .map(
      (o) => `<tr>
      <td>${escapeHtml(o.name)} (${o.percent}%)</td>
      <td>${formatMoney(o.grossGain)}</td>
      <td>${formatMoney(o.exemptAmount)}</td>
      <td>${formatMoney(o.taxableGain)}</td>
      <td>${formatMoney(o.irpfEstimate)}</td>
    </tr>`,
    )
    .join("");

  const watermark = options.watermark ?? options.publicExample ? "Ejemplo con datos ficticios — Livendia" : "";

  const liquidAtDeed = input.salePrice - input.mortgageBalance - input.saleCosts - result.plusvalia.payable;

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <title>${watermark ? "Ejemplo · " : ""}Memoria tributaria orientativa — Livendia</title>
  <style>
    @page { margin: 1.5cm; }
    body{font-family:system-ui,-apple-system,sans-serif;color:#1e293b;max-width:720px;margin:0 auto;line-height:1.55;padding:1.5rem 1rem 3rem;position:relative}
    .wm{position:fixed;top:40%;left:50%;transform:translate(-50%,-50%) rotate(-24deg);font-size:2rem;font-weight:800;color:rgba(26,79,191,.08);pointer-events:none;white-space:nowrap;z-index:0}
    main{position:relative;z-index:1}
    header{border-bottom:3px solid #1a4fbf;padding-bottom:1rem;margin-bottom:1.5rem}
    h1{font-size:1.35rem;margin:0;color:#1a4fbf}
    h2{font-size:1.05rem;margin:1.5rem 0 .5rem;color:#0f172a}
    .badge{display:inline-block;background:#ecfdf5;color:#047857;font-size:.7rem;font-weight:700;padding:.25rem .6rem;border-radius:999px;margin-bottom:.5rem}
    table{width:100%;border-collapse:collapse;margin:.75rem 0;font-size:.85rem}
    th,td{border:1px solid #cbd5e1;padding:.45rem .5rem;text-align:left;vertical-align:top}
    th{background:#eff6ff}
    .disclaimer{font-size:.78rem;color:#64748b;background:#f8fafc;padding:1rem;border-radius:8px;margin-top:2rem;border:1px solid #e2e8f0}
    .net{font-size:1.35rem;font-weight:800;color:#1a4fbf}
    .muted{font-size:.85rem;color:#64748b}
    ul{padding-left:1.2rem;margin:.4rem 0}
    li{margin:.25rem 0}
    @media print { .no-print { display: none; } }
  </style>
</head>
<body>
  ${watermark ? `<div class="wm" aria-hidden="true">${escapeHtml(watermark)}</div>` : ""}
  <main>
  <header>
    ${options.publicExample ? `<p class="badge">${escapeHtml(watermark)}</p>` : ""}
    <p style="margin:0;font-size:.75rem;text-transform:uppercase;letter-spacing:.05em;color:#06b6d4">Livendia · Consulta fiscal vendedor</p>
    <h1>Memoria tributaria orientativa</h1>
    <p class="muted">${escapeHtml(municipality)} · Escritura prevista ${escapeHtml(input.escrituraDate)}</p>
  </header>

  <h2>1. Resumen</h2>
  <p>Líquido en escritura (antes IRPF): <strong>${formatMoney(liquidAtDeed)}</strong></p>
  <p class="net">Líquido neto orientativo (tras plusvalía e IRPF estimado): ${formatMoney(result.netApprox)}</p>
  <p class="muted">Precio venta ${formatMoney(input.salePrice)} − hipoteca ${formatMoney(input.mortgageBalance)} − gastos − plusvalía − IRPF.</p>

  <h2>2. Datos de la operación</h2>
  <ul>
    <li>Compra: ${escapeHtml(input.acquisitionDate)} · ${formatMoney(input.acquisitionPrice)} + gastos adquisición ${formatMoney(input.acquisitionCosts)}</li>
    <li>Venta acordada: ${formatMoney(input.salePrice)} · Gastos venta ${formatMoney(input.saleCosts)}</li>
    <li>Valor catastral del suelo: ${formatMoney(input.cadastralSoilValue)} (${input.cadastralSoilPercent} % del valor catastral)</li>
    <li>Mejoras documentadas: ${formatMoney(input.improvements)}</li>
  </ul>

  <h2>3. Plusvalía municipal (IIVTNU)</h2>
  <ul>
    <li>Método objetivo: <strong>${formatMoney(result.plusvalia.methodObjective)}</strong> — ${escapeHtml(coefLine)}</li>
    <li>Método real: <strong>${formatMoney(result.plusvalia.methodReal)}</strong></li>
    <li>Aplicación: <strong>${formatMoney(result.plusvalia.payable)}</strong> (la menor cuando procede; cero si no hay incremento real).</li>
  </ul>
  ${pendingCoef ? "<p class=\"muted\"><em>Tipo municipal y tablas de coeficientes pendientes de confirmación oficial antes de liquidar.</em></p>" : ""}

  <h2>4. IRPF por titular</h2>
  <table>
    <thead><tr><th>Titular</th><th>Ganancia bruta</th><th>Exención orient.</th><th>Base</th><th>IRPF est.</th></tr></thead>
    <tbody>${ownerRows}</tbody>
  </table>
  <p>Total IRPF orientativo: <strong>${formatMoney(result.totalIrpf)}</strong></p>

  <h2>5. Escenarios</h2>
  <ul>
    <li>Vivienda habitual: revisado según datos aportados (empadronamiento / uso).</li>
    <li>Mayores de 65 años: exención solo si se acreditan requisitos legales.</li>
    <li>Reinversión: importe reinvertido / obtenido — exención proporcional si aplica.</li>
  </ul>

  <h2>6. Fecha de escritura</h2>
  <p class="muted">Se comparan regímenes según si la escritura es anterior o posterior a la entrada en vigor de los nuevos coeficientes del método objetivo. Sin tablas publicadas hasta verificación BOE/ayuntamiento.</p>

  <h2>7. Plazos orientativos tras la venta</h2>
  <ul>
    <li>Plusvalía: autoliquidación en el ayuntamiento tras la escritura (plazo breve según municipio).</li>
    <li>IRPF: en la declaración de la renta del año de la transmisión.</li>
  </ul>

  <h2>8. Documentación y aviso legal</h2>
  <p class="muted">Basada en contrato de arras, escritura o nota simple, IBI/catastro e ITP/IVA de compra aportados.</p>
  <div class="disclaimer">
    <strong>Memoria de orientación y simulación</strong> basada en los datos y documentos aportados. No constituye asesoramiento fiscal vinculante ni sustituye la liquidación oficial.<br/><br/>
    ${escapeHtml(FISCAL_SELLER_DISCLAIMER)}
  </div>
  </main>
</body>
</html>`;
}

function formatMoney(n: number): string {
  return `${n.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}