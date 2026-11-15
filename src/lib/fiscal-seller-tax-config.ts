/**
 * Parámetros tributarios editables (municipio, vigencia).
 * Los coeficientes Barcelona / RDL 29-2026 están marcados como pendientes de verificación BOE.
 */

export type FiscalConfigVerification = "verified" | "pending_boe";

export type MunicipalTaxRate = {
  municipalityId: string;
  label: string;
  tipoPlusvaliaPercent: number;
  verification: FiscalConfigVerification;
  notes?: string;
};

/** Tabla coeficientes método objetivo por años completos de tenencia (máx. 20). */
export type TenureCoefficientRow = {
  minYears: number;
  maxYears: number;
  coefficient: number;
};

export type TenureCoefficientSchedule = {
  id: string;
  label: string;
  appliesWhenEscrituraBefore: string; // ISO date inclusive end, or start for "from"
  appliesWhenEscrituraFrom?: string;
  verification: FiscalConfigVerification;
  coefficientsByYear: number[]; // index = años completos (0..20)
};

export type IrpfSavingsBracket = {
  upTo: number;
  rate: number;
};

export const MUNICIPAL_TAX_RATES: MunicipalTaxRate[] = [
  {
    municipalityId: "barcelona",
    label: "Barcelona",
    tipoPlusvaliaPercent: 30,
    verification: "pending_boe",
    notes: "Tipo orientativo 30 %. Confirmar ordenanza fiscal vigente antes de publicar cifras como definitivas.",
  },
  {
    municipalityId: "badalona",
    label: "Badalona",
    tipoPlusvaliaPercent: 30,
    verification: "pending_boe",
  },
  {
    municipalityId: "other",
    label: "Otro municipio (tipo por defecto)",
    tipoPlusvaliaPercent: 30,
    verification: "pending_boe",
    notes: "Sustituir por tabla municipal cuando el gestor confirme el tipo.",
  },
];

/**
 * Barcelona — tabla calculadora_fiscal_vendedor.xlsx (hoja Parametros).
 * pending_boe: contrastar ordenanza / BOE antes de memorias definitivas.
 */
const COEF_BARCELONA_HASTA_2026_11_30: number[] = [
  0.05, 0.15, 0.14, 0.14, 0.16, 0.18, 0.19, 0.2, 0.19, 0.15, 0.12, 0.1, 0.09, 0.09, 0.09, 0.09, 0.1, 0.13, 0.17, 0.23,
  0.4,
];

const COEF_BARCELONA_DESDE_2026_12_01: number[] = [
  0.05, 0.15, 0.14, 0.14, 0.16, 0.18, 0.19, 0.2, 0.19, 0.15, 0.12, 0.1, 0.09, 0.09, 0.09, 0.09, 0.1, 0.11, 0.13, 0.2,
  0.3,
];

export const TENURE_COEFFICIENT_SCHEDULES: TenureCoefficientSchedule[] = [
  {
    id: "hasta-2026-11-30",
    label: "Escritura hasta 30-nov-2026",
    appliesWhenEscrituraBefore: "2026-11-30",
    verification: "pending_boe",
    coefficientsByYear: COEF_BARCELONA_HASTA_2026_11_30,
  },
  {
    id: "desde-2026-12-01",
    label: "Escritura desde 1-dic-2026",
    appliesWhenEscrituraFrom: "2026-12-01",
    appliesWhenEscrituraBefore: "2099-12-31",
    verification: "pending_boe",
    coefficientsByYear: COEF_BARCELONA_DESDE_2026_12_01,
  },
];

/** Escala del ahorro IRPF 2026 (España). */
export const IRPF_SAVINGS_BRACKETS_2026: IrpfSavingsBracket[] = [
  { upTo: 6_000, rate: 0.19 },
  { upTo: 50_000, rate: 0.21 },
  { upTo: 200_000, rate: 0.23 },
  { upTo: 300_000, rate: 0.27 },
  { upTo: Number.POSITIVE_INFINITY, rate: 0.3 },
];

export function getMunicipalityRate(municipalityId: string): MunicipalTaxRate {
  return MUNICIPAL_TAX_RATES.find((m) => m.municipalityId === municipalityId) ?? MUNICIPAL_TAX_RATES[2]!;
}

export function resolveTenureSchedule(escrituraDateIso: string): TenureCoefficientSchedule {
  const d = escrituraDateIso.slice(0, 10);
  if (d >= "2026-12-01") {
    return TENURE_COEFFICIENT_SCHEDULES.find((s) => s.id === "desde-2026-12-01")!;
  }
  return TENURE_COEFFICIENT_SCHEDULES.find((s) => s.id === "hasta-2026-11-30")!;
}

export function tenureCoefficientForYears(
  schedule: TenureCoefficientSchedule,
  fullYears: number,
): number {
  const y = Math.min(Math.max(0, Math.floor(fullYears)), 20);
  return schedule.coefficientsByYear[y] ?? schedule.coefficientsByYear[20] ?? 0;
}