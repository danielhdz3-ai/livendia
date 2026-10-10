/**
 * Contrato temporada · distritos Barcelona
 *
 * ENCABEZADO (hero): fotos verticales locales en `public/images/zonas barcelona/`.
 * PASOS: apaisadas 4:3 en `VentaSinAgenciaPasoAPasoSection` (otro archivo).
 */

import { metroBarcelonaZoneImage } from "@/lib/administracion-alquiler-metro-zone-images";
import { getLocalCityCardImage } from "@/lib/local-city-card-images";

/**
 * Pasos: mezcla contratos · gestoría · gestor · parejas (apaisadas preferible).
 * Se muestran con object-contain — no recortar cabezas.
 */
export const TEMPORADA_BCN_STEP_IMAGES = {
  llamada: "/images/pexels-silverkblack-36766677.jpg",
  contratar: "/images/comercial1.jpg",
  documentacion: "/images/amigas.jpg",
  redaccion: "/images/gestoria20.jpg",
  firma: "/images/contratos7.jpg",
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
