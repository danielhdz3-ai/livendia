/**
 * Contrato temporada · distritos Barcelona
 *
 * Regla Livendia (landings con hero en 2 columnas):
 * - Hero / encabezado → imagen **vertical** (retrato, object-cover en columna alta).
 * - Pasos (`VentaSinAgenciaPasoAPasoSection`) → imagen **apaisada** (aspect 4:3).
 *
 * No usar fotos de ciudad apaisadas (p. ej. `/images/zonas barcelona/*.jpg`) ni gestora6–10 en hero.
 */

/** Apaisadas — solo módulos paso a paso. */
export const TEMPORADA_BCN_STEP_IMAGES = {
  llamada: "/images/pexels-tima-miroshnichenko-5439472.jpg",
  contratar: "/images/pexels-silverkblack-23496450.jpg",
  documentacion: "/images/pexels-silverkblack-36729677.jpg",
  redaccion: "/images/pexels-tima-miroshnichenko-5439443.jpg",
  firma: "/images/pexels-tima-miroshnichenko-5439380.jpg",
} as const;

/** Retratos / verticales — hero encabezado por distrito. */
const HERO_BY_SLUG: Record<string, string> = {
  "barcelona-eixample": "/images/pexels-mikhail-nilov-8297043.jpg",
  "barcelona-gracia": "/images/pexels-artempodrez-6779344.jpg",
  "barcelona-poblenou": "/images/pexels-anna-belousova-130658517-10325487.jpg",
  "barcelona-sants-montjuic": "/images/pexels-kampus-8463139.jpg",
  "barcelona-sarria-sant-gervasi": "/images/pexels-yankrukov-7693740.jpg",
};

export const TEMPORADA_HERO_VERTICAL_FALLBACK = "/images/pexels-yankrukov-7693717.jpg";

export function getTemporadaBcnBarrioHeroImage(slug: string): string {
  return HERO_BY_SLUG[slug] ?? TEMPORADA_HERO_VERTICAL_FALLBACK;
}
