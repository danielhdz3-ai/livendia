/** Referencia pública para avisos de cumplimiento normativo (vivienda / alquiler). */
export type ViviendaDecretoRef = {
  id: string;
  /** Ej. Real Decreto-ley 29/2026 */
  label: string;
  /** Fecha del acuerdo del Consejo de Ministros */
  approvedOn: string;
  /** Fecha de publicación en el BOE, si aplica */
  boePublishedOn?: string;
  /** Entrada en vigor (texto corto para UI) */
  effectiveFrom: string;
  summary: string;
  boeUrl?: string;
};

export const VIVIENDA_DECRETOS_ACTUALIZACION_2026: readonly ViviendaDecretoRef[] = [
  {
    id: "rdl-29-2026",
    label: "Real Decreto-ley 29/2026",
    approvedOn: "6 de octubre de 2026",
    boePublishedOn: "7 de octubre de 2026",
    effectiveFrom: "8 de octubre de 2026",
    summary:
      "Protección de la función social de la vivienda y ampliación de la oferta de vivienda asequible.",
    boeUrl: "https://www.boe.es/buscar/act.php?id=BOE-A-2026-20823",
  },
  {
    id: "rdl-28-2026",
    label: "Real Decreto-ley 28/2026",
    approvedOn: "6 de octubre de 2026",
    boePublishedOn: "7 de octubre de 2026",
    effectiveFrom: "15 de noviembre de 2026 (previsto, tras convalidación)",
    summary:
      "Estabilidad de los contratos de arrendamiento de vivienda habitual: prórrogas, preaviso e indemnización.",
    boeUrl: "https://www.boe.es/buscar/act.php?id=BOE-A-2026-20822",
  },
] as const;

export const HOME_DECRETOS_BANNER_LEAD =
  "Todos los contratos Livendia se redactan y revisan conforme a la normativa estatal de vivienda y alquiler vigente, incluidos los últimos reales decretos-ley.";
