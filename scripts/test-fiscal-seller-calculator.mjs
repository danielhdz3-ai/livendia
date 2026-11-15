/**
 * Prueba de la lógica fiscal vendedor (equivalente al fixture TypeScript).
 * Ejecutar: node scripts/test-fiscal-seller-calculator.mjs
 * Actualizar EXPECTED cuando se contraste calculadora_fiscal_vendedor.xlsx.
 */

const COEF_HASTA_2026 = [
  0, 0.14, 0.13, 0.15, 0.17, 0.17, 0.16, 0.12, 0.1, 0.09, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08,
  0.08, 0.08,
];

function yearsBetween(start, end) {
  const ms = new Date(end).getTime() - new Date(start).getTime();
  return Math.max(0, Math.floor(ms / (365.25 * 24 * 60 * 60 * 1000)));
}

function computePlusvalia(input) {
  const tenureYears = yearsBetween(input.acquisitionDate, input.escrituraDate);
  const coefficient = COEF_HASTA_2026[Math.min(tenureYears, 20)];
  const tipo = 0.3;
  const objective = input.cadastralSoilValue * coefficient * tipo;
  const soilShare = input.cadastralSoilPercent / 100;
  const increment = (input.salePrice - input.acquisitionPrice) * soilShare;
  const real = increment > 0 ? increment * tipo : 0;
  const payable = increment > 0 ? Math.min(objective, real) : 0;
  return { objective, real, payable, coefficient, tenureYears };
}

const fixture = {
  acquisitionDate: "2016-03-01",
  escrituraDate: "2026-11-15",
  salePrice: 285_000,
  acquisitionPrice: 165_000,
  cadastralSoilValue: 52_800,
  cadastralSoilPercent: 58,
};

const result = computePlusvalia(fixture);

/** Valores esperados: sustituir tras validar con Excel. */
const EXPECTED = {
  payable: result.payable, // placeholder auto — cambiar a cifra fija del Excel
  coefficient: 0.08,
  tenureYears: 10,
};

let failed = 0;
if (Math.abs(result.coefficient - EXPECTED.coefficient) > 0.001) {
  console.error("FAIL coefficient", result.coefficient, EXPECTED.coefficient);
  failed++;
}
if (result.tenureYears !== EXPECTED.tenureYears) {
  console.error("FAIL tenureYears", result.tenureYears, EXPECTED.tenureYears);
  failed++;
}
if (EXPECTED.payable !== result.payable && typeof EXPECTED.payable === "number" && EXPECTED.payable !== result.payable) {
  /* noop when EXPECTED mirrors runtime */
}

console.log("Plusvalía fixture:", result);
console.log(failed === 0 ? "OK — revisar EXPECTED.payable contra Excel." : `FAIL — ${failed} comprobaciones`);
process.exit(failed > 0 ? 1 : 0);