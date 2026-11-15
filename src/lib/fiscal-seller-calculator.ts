import {
  getMunicipalityRate,
  IRPF_SAVINGS_BRACKETS_2026,
  resolveTenureSchedule,
  tenureCoefficientForYears,
  type FiscalConfigVerification,
} from "@/lib/fiscal-seller-tax-config";

export type FiscalSellerCalcInput = {
  municipalityId: string;
  escrituraDate: string; // YYYY-MM-DD
  acquisitionDate: string;
  salePrice: number;
  acquisitionPrice: number;
  saleCosts: number;
  acquisitionCosts: number;
  improvements: number;
  amortization: number;
  cadastralSoilValue: number;
  cadastralSoilPercent: number; // 0-100
  mortgageBalance: number;
  otherSaleCosts?: number;
  owners: { name: string; percent: number; age65OrOver?: boolean; habitualHome?: boolean }[];
  reinvestmentAmount?: number;
  amountObtained?: number;
  otherSavingsIncome?: number;
};

export type PlusvaliaBreakdown = {
  methodObjective: number;
  methodReal: number;
  payable: number;
  coefficient: number;
  tipoPercent: number;
  tenureYears: number;
  scheduleId: string;
  verification: FiscalConfigVerification;
};

export type OwnerIrpfBreakdown = {
  name: string;
  percent: number;
  grossGain: number;
  exemptAmount: number;
  taxableGain: number;
  irpfEstimate: number;
  assumptions: string[];
};

export type FiscalSellerCalcResult = {
  plusvalia: PlusvaliaBreakdown;
  owners: OwnerIrpfBreakdown[];
  totalIrpf: number;
  netApprox: number;
  assumptions: string[];
};

function yearsBetween(startIso: string, endIso: string): number {
  const start = new Date(startIso.slice(0, 10));
  const end = new Date(endIso.slice(0, 10));
  const ms = end.getTime() - start.getTime();
  return Math.max(0, Math.floor(ms / (365.25 * 24 * 60 * 60 * 1000)));
}

export function computePlusvalia(input: FiscalSellerCalcInput): PlusvaliaBreakdown {
  const tenureYears = yearsBetween(input.acquisitionDate, input.escrituraDate);
  const schedule = resolveTenureSchedule(input.escrituraDate);
  const coefficient = tenureCoefficientForYears(schedule, tenureYears);
  const municipality = getMunicipalityRate(input.municipalityId);
  const tipo = municipality.tipoPlusvaliaPercent / 100;
  const soil = input.cadastralSoilValue;

  const objective = soil * coefficient * tipo;

  const soilShare = Math.min(100, Math.max(0, input.cadastralSoilPercent)) / 100;
  const increment = (input.salePrice - input.acquisitionPrice) * soilShare;
  const real = increment > 0 ? increment * tipo : 0;

  const payable = increment > 0 ? Math.min(objective, real) : 0;

  return {
    methodObjective: round2(objective),
    methodReal: round2(real),
    payable: round2(Math.max(0, payable)),
    coefficient,
    tipoPercent: municipality.tipoPlusvaliaPercent,
    tenureYears,
    scheduleId: schedule.id,
    verification: schedule.verification,
  };
}

export function computeIrpfSavingsTax(taxable: number, otherSavings = 0): number {
  const totalBase = Math.max(0, taxable + otherSavings);
  let remaining = totalBase;
  let tax = 0;
  let prevCap = 0;

  for (const bracket of IRPF_SAVINGS_BRACKETS_2026) {
    const slice = Math.min(remaining, bracket.upTo - prevCap);
    if (slice <= 0) break;
    tax += slice * bracket.rate;
    remaining -= slice;
    prevCap = bracket.upTo;
    if (remaining <= 0) break;
  }

  if (otherSavings > 0 && totalBase > 0) {
    const proportion = taxable / totalBase;
    return round2(tax * proportion);
  }
  return round2(tax);
}

export function computeFiscalSellerEstimate(input: FiscalSellerCalcInput): FiscalSellerCalcResult {
  const plusvalia = computePlusvalia(input);

  const transmissionNet =
    input.salePrice - input.saleCosts - plusvalia.payable - (input.otherSaleCosts ?? 0);
  const acquisitionValue =
    input.acquisitionPrice + input.acquisitionCosts + input.improvements - input.amortization;
  const totalGain = Math.max(0, transmissionNet - acquisitionValue);

  const owners: OwnerIrpfBreakdown[] = [];
  let totalIrpf = 0;

  for (const owner of input.owners) {
    const share = owner.percent / 100;
    let grossGain = round2(totalGain * share);
    let exemptAmount = 0;
    const assumptions: string[] = [
      `Participación ${owner.percent} % sobre ganancia patrimonial bruta ${formatEur(totalGain)}.`,
    ];

    if (owner.age65OrOver && owner.habitualHome) {
      exemptAmount = grossGain;
      grossGain = 0;
      assumptions.push("Escenario: exención orientativa por titular ≥65 años con vivienda habitual (sujeto a acreditación).");
    } else if (input.reinvestmentAmount && input.amountObtained && input.amountObtained > 0) {
      const ratio = Math.min(1, input.reinvestmentAmount / input.amountObtained);
      exemptAmount = round2(totalGain * share * ratio);
      grossGain = round2(totalGain * share - exemptAmount);
      assumptions.push(
        `Reinversión orientativa: ${formatEur(input.reinvestmentAmount)} sobre ${formatEur(input.amountObtained)} → exención parcial ${(ratio * 100).toFixed(0)} %.`,
      );
    }

    const taxableGain = grossGain;
    const irpfEstimate = computeIrpfSavingsTax(taxableGain, (input.otherSavingsIncome ?? 0) * share);
    totalIrpf += irpfEstimate;

    owners.push({
      name: owner.name,
      percent: owner.percent,
      grossGain: round2(totalGain * share),
      exemptAmount,
      taxableGain,
      irpfEstimate,
      assumptions,
    });
  }

  const netApprox =
    input.salePrice -
    input.mortgageBalance -
    input.saleCosts -
    plusvalia.payable -
    totalIrpf -
    (input.otherSaleCosts ?? 0);

  return {
    plusvalia,
    owners,
    totalIrpf: round2(totalIrpf),
    netApprox: round2(netApprox),
    assumptions: [
      `Plusvalía: método objetivo ${formatEur(plusvalia.methodObjective)}, real ${formatEur(plusvalia.methodReal)}, a pagar ${formatEur(plusvalia.payable)}.`,
      `Coeficiente ${plusvalia.coefficient} (${plusvalia.scheduleId}), ${plusvalia.tenureYears} años de tenencia.`,
      `Tipo municipal ${plusvalia.tipoPercent} % (${input.municipalityId}).`,
    ],
  };
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

function formatEur(n: number): string {
  return `${n.toFixed(2).replace(".", ",")} €`;
}

/** Caso de referencia (sustituir expected al contrastar calculadora_fiscal_vendedor.xlsx). */
export const FISCAL_SELLER_EXCEL_FIXTURE: FiscalSellerCalcInput = {
  municipalityId: "barcelona",
  escrituraDate: "2026-11-15",
  acquisitionDate: "2016-03-01",
  salePrice: 285_000,
  acquisitionPrice: 165_000,
  saleCosts: 2_500,
  acquisitionCosts: 18_500,
  improvements: 12_000,
  amortization: 0,
  cadastralSoilValue: 52_800,
  cadastralSoilPercent: 58,
  mortgageBalance: 42_000,
  owners: [
    { name: "Titular A", percent: 60, age65OrOver: false, habitualHome: true },
    { name: "Titular B", percent: 40, age65OrOver: false, habitualHome: true },
  ],
  reinvestmentAmount: 0,
  amountObtained: 285_000,
  otherSavingsIncome: 0,
};