/**
 * Contrato temporada · distritos Barcelona
 *
 * Assets propios en `/public/images/contrato-temporada-bcn/` (verticales hero, apaisados pasos).
 * Regla: hero = 3:4 retrato; pasos = 4:3 (`VentaSinAgenciaPasoAPasoSection`).
 */

const BASE = "/images/contrato-temporada-bcn";

/** Apaisadas — módulos paso a paso (misma secuencia en los 5 distritos). */
export const TEMPORADA_BCN_STEP_IMAGES = {
  llamada: `${BASE}/temporada-bcn-paso-1-llamada.jpg`,
  contratar: `${BASE}/temporada-bcn-paso-2-contratar.jpg`,
  documentacion: `${BASE}/temporada-bcn-paso-3-documentacion.jpg`,
  redaccion: `${BASE}/temporada-bcn-paso-4-redaccion.jpg`,
  firma: `${BASE}/temporada-bcn-paso-5-firma.jpg`,
} as const;

/** Retratos verticales — hero por distrito. */
const HERO_BY_SLUG: Record<string, string> = {
  "barcelona-eixample": `${BASE}/temporada-bcn-hero-eixample.jpg`,
  "barcelona-gracia": `${BASE}/temporada-bcn-hero-gracia.jpg`,
  "barcelona-poblenou": `${BASE}/temporada-bcn-hero-poblenou.jpg`,
  "barcelona-sants-montjuic": `${BASE}/temporada-bcn-hero-sants.jpg`,
  "barcelona-sarria-sant-gervasi": `${BASE}/temporada-bcn-hero-sarria.jpg`,
};

export const TEMPORADA_HERO_VERTICAL_FALLBACK = `${BASE}/temporada-bcn-hero-gracia.jpg`;

export function getTemporadaBcnBarrioHeroImage(slug: string): string {
  return HERO_BY_SLUG[slug] ?? TEMPORADA_HERO_VERTICAL_FALLBACK;
}
