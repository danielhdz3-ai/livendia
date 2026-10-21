/**
 * Cuenta bancaria para cobros por transferencia (cuotas admin, etc.).
 * Override: NEXT_PUBLIC_LIVENDIA_BANK_IBAN
 */
import { BUSINESS_NAME } from "@/lib/business-nap";

const DEFAULT_IBAN = "ES27 2080 0835 0830 4005 6074";

export function getLivendiaBankIbanDisplay(): string {
  const raw = process.env.NEXT_PUBLIC_LIVENDIA_BANK_IBAN?.trim();
  if (!raw) return DEFAULT_IBAN;
  const compact = raw.replace(/\s/g, "").toUpperCase();
  if (compact.startsWith("ES") && compact.length >= 24) {
    return compact.replace(/(.{4})/g, "$1 ").trim();
  }
  return raw;
}

export function getLivendiaBankIbanCopyValue(): string {
  return getLivendiaBankIbanDisplay().replace(/\s/g, "");
}

export function getLivendiaBankTransferBeneficiary(): string {
  return process.env.NEXT_PUBLIC_LIVENDIA_BANK_BENEFICIARY?.trim() || BUSINESS_NAME;
}

export const LIVENDIA_BANK_TRANSFER_HINT =
  "Indica en el concepto tu nombre y el número de factura (p. ej. Factura 003/2026).";
