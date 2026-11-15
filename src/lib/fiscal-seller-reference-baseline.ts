import { computeFiscalSellerEstimate, FISCAL_SELLER_EXCEL_FIXTURE } from "@/lib/fiscal-seller-calculator";

/**
 * Salida actual del motor con el fixture de referencia — baseline de regresión en CI.
 * No sustituye la validación contra calculadora_fiscal_vendedor.xlsx (ver docs/fiscal-seller-calculadora-gestor.md).
 */
const baseline = computeFiscalSellerEstimate(FISCAL_SELLER_EXCEL_FIXTURE);

export const FISCAL_SELLER_MOTOR_BASELINE = {
  plusvaliaPayable: baseline.plusvalia.payable,
  totalIrpf: baseline.totalIrpf,
  netApprox: baseline.netApprox,
} as const;

/** Objetivo del brief de producto / Excel citado en documentación — contrastar manualmente. */
export const FISCAL_SELLER_PRODUCT_SPEC_TARGET = {
  plusvaliaPayable: 1320,
  totalIrpf: 25_171.4,
  netApprox: 200_008.6,
} as const;