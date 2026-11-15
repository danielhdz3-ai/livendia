import { CONSULTA_FISCAL_VENDEDOR_SLUG } from "@/lib/catalog.public";

export type FiscalSellerIntake = {
  municipality: string;
  escrituraDate: string;
  ownerCount: number;
  ownerShares: { percent: number }[];
  habitualHome: boolean;
  anyOwner65Plus: boolean;
  plansReinvest: boolean;
  fiscalResidentSpain: boolean;
  complexCase?: boolean;
  nonResident?: boolean;
  notes?: string;
};

export function isConsultaFiscalSlug(slug: string | null | undefined): boolean {
  return slug === CONSULTA_FISCAL_VENDEDOR_SLUG;
}

export function validateFiscalSellerIntake(raw: unknown): { ok: true; data: FiscalSellerIntake } | { ok: false; error: string } {
  if (!raw || typeof raw !== "object") return { ok: false, error: "Datos del caso inválidos." };
  const o = raw as Record<string, unknown>;
  const municipality = typeof o.municipality === "string" ? o.municipality.trim() : "";
  if (!municipality) return { ok: false, error: "Indica el municipio del inmueble." };

  const escrituraDate = typeof o.escrituraDate === "string" ? o.escrituraDate.slice(0, 10) : "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(escrituraDate)) {
    return { ok: false, error: "Indica la fecha prevista de escritura." };
  }

  const ownerCount = typeof o.ownerCount === "number" ? o.ownerCount : Number(o.ownerCount);
  if (!Number.isFinite(ownerCount) || ownerCount < 1 || ownerCount > 8) {
    return { ok: false, error: "Número de titulares no válido (1–8)." };
  }

  const ownerShares = Array.isArray(o.ownerShares)
    ? o.ownerShares.map((s) => ({
        percent: typeof (s as { percent?: number }).percent === "number" ? (s as { percent: number }).percent : 0,
      }))
    : [];
  if (ownerShares.length < ownerCount) {
    return { ok: false, error: "Indica el % de cada titular en escritura." };
  }
  const sum = ownerShares.slice(0, ownerCount).reduce((a, s) => a + s.percent, 0);
  if (Math.abs(sum - 100) > 0.5) {
    return { ok: false, error: "Los porcentajes de los titulares deben sumar 100 %." };
  }

  return {
    ok: true,
    data: {
      municipality,
      escrituraDate,
      ownerCount,
      ownerShares: ownerShares.slice(0, ownerCount),
      habitualHome: Boolean(o.habitualHome),
      anyOwner65Plus: Boolean(o.anyOwner65Plus),
      plansReinvest: Boolean(o.plansReinvest),
      fiscalResidentSpain: o.fiscalResidentSpain !== false,
      complexCase: Boolean(o.complexCase),
      nonResident: Boolean(o.nonResident),
      notes: typeof o.notes === "string" ? o.notes.trim().slice(0, 2000) : undefined,
    },
  };
}

export function resolveConsultaFiscalPriceCents(intake: FiscalSellerIntake): number | null {
  if (intake.nonResident) return null;
  if (intake.complexCase) return 24_500;
  if (intake.ownerCount <= 2) return 19_500;
  return 19_500 + (intake.ownerCount - 2) * 4_500;
}