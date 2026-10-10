/**
 * Contrato temporada · distritos Barcelona
 *
 * ENCABEZADO (hero): solo imágenes **verticales / retrato** — nunca apaisadas ni planos cenital.
 * PASOS: apaisadas 4:3 en `VentaSinAgenciaPasoAPasoSection` (otro archivo).
 */

/** Apaisadas — solo módulos paso a paso. */
export const TEMPORADA_BCN_STEP_IMAGES = {
  llamada: "/images/pexels-tima-miroshnichenko-5439472.jpg",
  contratar: "/images/pexels-silverkblack-23496450.jpg",
  documentacion: "/images/pexels-silverkblack-36729677.jpg",
  redaccion: "/images/pexels-tima-miroshnichenko-5439443.jpg",
  firma: "/images/pexels-tima-miroshnichenko-5439380.jpg",
} as const;

/** Verticales verificadas — columna derecha del encabezado. */
const HERO_BY_SLUG: Record<string, string> = {
  "barcelona-gracia": "/images/chicavertical.png",
  "barcelona-eixample": "/images/gestora8.jpg",
  "barcelona-poblenou": "/images/pexels-rdne-9034770.jpg",
  "barcelona-sants-montjuic": "/images/pexels-yankrukov-7693740.jpg",
  "barcelona-sarria-sant-gervasi": "/images/pexels-yankrukov-7693717.jpg",
};

export const TEMPORADA_HERO_VERTICAL_FALLBACK = "/images/chicavertical.png";

export function getTemporadaBcnBarrioHeroImage(slug: string): string {
  return HERO_BY_SLUG[slug] ?? TEMPORADA_HERO_VERTICAL_FALLBACK;
}
