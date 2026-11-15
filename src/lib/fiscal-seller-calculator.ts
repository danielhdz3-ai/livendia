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
  /** Si se indica valor catastral total, % suelo = suelo/total (como el Excel). */
  cadastralTotalValue?: number;
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

  const soilShare =
    input.cadastralTotalValue && input.cadastralTotalValue > 0
      ? input.cadastralSoilValue / input.cadastralTotalValue
      : Math.min(100, Math.max(0, input.cadastralSoilPercent)) / 100;
  const increment = input.salePrice - input.acquisitionPrice;
  const real = increment > 0 ? increment * soilShare * tipo : 0;

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
    } else if (input.reinvestmentAmount && input.reinvestmentAmount > 0) {
      const amountObtainedOwner =
        input.amountObtained != null && input.amountObtained > 0
          ? input.amountObtained * share
          : (input.salePrice - input.mortgageBalance) * share;
      const reinvestOwner = input.reinvestmentAmount * share;
      const ratio = amountObtainedOwner > 0 ? Math.min(1, reinvestOwner / amountObtainedOwner) : 0;
      exemptAmount = round2(totalGain * share * ratio);
      grossGain = round2(totalGain * share - exemptAmount);
      assumptions.push(
        `Reinversión orientativa: ${formatEur(reinvestOwner)} sobre cantidad obtenida ${formatEur(amountObtainedOwner)} → exención parcial ${(ratio * 100).toFixed(0)} %.`,
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

export type FiscalSellerValidationIssue = { field: string; message: string };

/** Validaciones panel gestor — sin exposición pública. */
export function validateFiscalSellerInput(input: FiscalSellerCalcInput): FiscalSellerValidationIssue[] {
  const issues: FiscalSellerValidationIssue[] = [];
  const pct = input.owners.reduce((s, o) => s + o.percent, 0);
  if (Math.abs(pct - 100) > 0.01) {
    issues.push({ field: "owners", message: `Los % en escritura suman ${pct} %; deben sumar 100 %.` });
  }
  if (input.acquisitionDate && input.escrituraDate && input.acquisitionDate >= input.escrituraDate) {
    issues.push({ field: "escrituraDate", message: "La fecha de escritura debe ser posterior a la adquisición." });
  }
  if (input.cadastralTotalValue && input.cadastralSoilValue > input.cadastralTotalValue) {
    issues.push({
      field: "cadastralSoilValue",
      message: "El valor catastral del suelo no puede superar el valor catastral total.",
    });
  }
  const soilShare = input.cadastralSoilPercent / 100;
  if (!input.cadastralTotalValue && soilShare > 1) {
    issues.push({ field: "cadastralSoilPercent", message: "El % de suelo en catastro no puede superar 100 %." });
  }
  return issues;
}

/** Caso ficticio hoja Datos + Resumen de calculadora_fiscal_vendedor.xlsx */
export const FISCAL_SELLER_EXCEL_FIXTURE: FiscalSellerCalcInput = {
  municipalityId: "barcelona",
  escrituraDate: "2026-12-15",
  acquisitionDate: "2009-03-15",
  salePrice: 320_000,
  acquisitionPrice: 180_000,
  saleCosts: 3_500,
  acquisitionCosts: 16_000,
  improvements: 0,
  amortization: 0,
  cadastralSoilValue: 40_000,
  cadastralTotalValue: 70_000,
  cadastralSoilPercent: (40_000 / 70_000) * 100,
  mortgageBalance: 90_000,
  owners: [
    { name: "Titular A (ejemplo)", percent: 50, age65OrOver: false, habitualHome: true },
    { name: "Titular B (ejemplo)", percent: 50, age65OrOver: false, habitualHome: true },
  ],
  reinvestmentAmount: 0,
  otherSavingsIncome: 0,
};