/**
 * Contrato temporada · distritos Barcelona
 *
 * ENCABEZADO (hero): fotos verticales locales en `public/images/zonas barcelona/`.
 * PASOS: apaisadas 4:3 en `VentaSinAgenciaPasoAPasoSection` (otro archivo).
 */

import { metroBarcelonaZoneImage } from "@/lib/administracion-alquiler-metro-zone-images";
import { getLocalCityCardImage } from "@/lib/local-city-card-images";

/** Apaisadas — solo módulos paso a paso. */
export const TEMPORADA_BCN_STEP_IMAGES = {
  llamada: "/images/pexels-tima-miroshnichenko-5439472.jpg",
  contratar: "/images/pexels-silverkblack-23496450.jpg",
  documentacion: "/images/pexels-silverkblack-36729677.jpg",
  redaccion: "/images/pexels-tima-miroshnichenko-5439443.jpg",
  firma: "/images/pexels-tima-miroshnichenko-5439380.jpg",
} as const;

export const TEMPORADA_HERO_VERTICAL_FALLBACK = metroBarcelonaZoneImage("barcelona2.jpg");

/** Hero encabezado — misma foto vertical de zona que tarjetas locales cuando existe. */
export function getTemporadaBcnBarrioHeroImage(slug: string): string {
  const card = getLocalCityCardImage(slug);
  if (card.includes("/zonas barcelona/")) {
    return card;
  }
  return TEMPORADA_HERO_VERTICAL_FALLBACK;
}
