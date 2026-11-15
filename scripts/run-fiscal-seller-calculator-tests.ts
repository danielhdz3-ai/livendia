/**
 * Tests motor fiscal vendedor — ejecutar: npm run test:fiscal-calculator
 */
import {
  computeFiscalSellerEstimate,
  computePlusvalia,
  FISCAL_SELLER_EXCEL_FIXTURE,
  validateFiscalSellerInput,
  type FiscalSellerCalcInput,
} from "../src/lib/fiscal-seller-calculator";
import {
  FISCAL_SELLER_MOTOR_BASELINE,
  FISCAL_SELLER_PRODUCT_SPEC_TARGET,
} from "../src/lib/fiscal-seller-reference-baseline";

function assertClose(label: string, actual: number, expected: number, tolerance = 0.02) {
  if (Math.abs(actual - expected) > tolerance) {
    throw new Error(`${label}: esperado ${expected}, obtenido ${actual}`);
  }
}

function run() {
  let failed = 0;

  try {
    const v = validateFiscalSellerInput({
      ...FISCAL_SELLER_EXCEL_FIXTURE,
      owners: [
        { name: "A", percent: 60, habitualHome: true },
        { name: "B", percent: 30, habitualHome: true },
      ],
    });
    if (v.length === 0) {
      throw new Error("validateFiscalSellerInput debería detectar % ≠ 100");
    }
  } catch (e) {
    console.error(e);
    failed++;
  }

  const main = computeFiscalSellerEstimate(FISCAL_SELLER_EXCEL_FIXTURE);

  try {
    assertClose("plusvalía baseline", main.plusvalia.payable, FISCAL_SELLER_MOTOR_BASELINE.plusvaliaPayable);
    assertClose("IRPF baseline", main.totalIrpf, FISCAL_SELLER_MOTOR_BASELINE.totalIrpf);
    assertClose("neto baseline", main.netApprox, FISCAL_SELLER_MOTOR_BASELINE.netApprox);
  } catch (e) {
    console.error("Regresión motor:", (e as Error).message);
    failed++;
  }

  try {
    assertClose("plusvalía Excel", main.plusvalia.payable, FISCAL_SELLER_PRODUCT_SPEC_TARGET.plusvaliaPayable);
    assertClose("IRPF Excel", main.totalIrpf, FISCAL_SELLER_PRODUCT_SPEC_TARGET.totalIrpf);
    assertClose("neto Excel", main.netApprox, FISCAL_SELLER_PRODUCT_SPEC_TARGET.netApprox);
  } catch (e) {
    console.error("Contraste Excel:", (e as Error).message);
    failed++;
  }

  const lossCase: FiscalSellerCalcInput = {
    ...FISCAL_SELLER_EXCEL_FIXTURE,
    salePrice: 150_000,
    acquisitionPrice: 200_000,
  };
  if (computePlusvalia(lossCase).payable !== 0) {
    console.error("FAIL venta con pérdida: plusvalía debería ser 0");
    failed++;
  }

  const fourOwners: FiscalSellerCalcInput = {
    ...FISCAL_SELLER_EXCEL_FIXTURE,
    owners: [
      { name: "T1", percent: 25, habitualHome: true },
      { name: "T2", percent: 25, habitualHome: true },
      { name: "T3", percent: 25, habitualHome: true },
      { name: "T4", percent: 25, habitualHome: true },
    ],
  };
  if (computeFiscalSellerEstimate(fourOwners).owners.length !== 4) failed++;

  console.log(
    failed === 0
      ? "OK — motor alineado con docs/calculadora_fiscal_vendedor.xlsx (caso ficticio Barcelona)."
      : `FAIL ${failed} comprobaciones`,
  );
  process.exit(failed > 0 ? 1 : 0);
}

run();