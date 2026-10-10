/**
 * Contrato temporada · distritos Barcelona
 *
 * - Hero → retrato vertical (personas / consulta), nunca planos cenital ni paisaje apaisado.
 * - Pasos → apaisado 4:3 (reunión, contratos, gestoría).
 */

/** Apaisadas — módulos paso a paso (misma línea que compra sin agencia). */
export const TEMPORADA_BCN_STEP_IMAGES = {
  llamada: "/images/pexels-tima-miroshnichenko-5439472.jpg",
  contratar: "/images/contratodealquiler.jpg",
  documentacion: "/images/contratos2.jpg",
  redaccion: "/images/contratodearras.jpg",
  firma: "/images/gestoria3.jpg",
} as const;

/** Retratos verticales — una por distrito (sin repetir artempodrez 6779344: apaisada/contabilidad). */
const HERO_BY_SLUG: Record<string, string> = {
  "barcelona-eixample": "/images/pexels-mikhail-nilov-8297043.jpg",
  "barcelona-gracia": "/images/chicavertical.png",
  "barcelona-poblenou": "/images/pexels-mikhail-nilov-8296981.jpg",
  "barcelona-sants-montjuic": "/images/pexels-kampus-8171201.jpg",
  "barcelona-sarria-sant-gervasi": "/images/pexels-yankrukov-7698744.jpg",
};

export const TEMPORADA_HERO_VERTICAL_FALLBACK = "/images/pexels-yankrukov-7693717.jpg";

export function getTemporadaBcnBarrioHeroImage(slug: string): string {
  return HERO_BY_SLUG[slug] ?? TEMPORADA_HERO_VERTICAL_FALLBACK;
}
