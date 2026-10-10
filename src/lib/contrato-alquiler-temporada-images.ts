/**
 * Imágenes landings locales contrato alquiler temporada.
 * Hero = vertical; pasos = apaisado (ver `contrato-alquiler-temporada-bcn-images.ts`).
 */

import {
  getTemporadaBcnBarrioHeroImage,
  TEMPORADA_HERO_VERTICAL_FALLBACK,
} from "@/lib/contrato-alquiler-temporada-bcn-images";
import { TEMPORADA_BCN_BARRIO_PUBLISHED_SLUGS } from "@/lib/contrato-alquiler-temporada-bcn-barrios";

/** Sustitutos verticales para slugs que tenían foto de ciudad apaisada en differentiation. */
const TEMPORADA_LOCAL_HERO_VERTICAL: Record<string, string> = {
  barcelona: "/images/pexels-yankrukov-7693717.jpg",
  madrid: "/images/pexels-mikhail-nilov-8297355.jpg",
  valencia: "/images/pexels-yankrukov-7693743.jpg",
  sevilla: "/images/pexels-mikhail-nilov-8296981.jpg",
  malaga: "/images/pexels-artempodrez-6779333.jpg",
  zaragoza: "/images/pexels-kampus-8171201.jpg",
  asturias: "/images/pexels-dantemunozphoto-16346704.jpg",
  mallorca: "/images/pexels-dimkidama-15675799.jpg",
};

const LEGACY_HORIZONTAL_HERO = new Set([
  "/images/barcelona.jpg",
  "/images/barcelona2.jpg",
  "/images/madrid1.jpg",
  "/images/valencia.jpg",
  "/images/sevilla.jpg",
  "/images/malaga.jpg",
  "/images/zaragoza.jpg",
  "/images/oviedo.jpg",
  "/images/contratos5.jpg",
  "/images/gestoria3.jpg",
]);

export function getContratoAlquilerTemporadaLocalHeroImage(
  slug: string,
  configuredHero?: string,
): string {
  if ((TEMPORADA_BCN_BARRIO_PUBLISHED_SLUGS as readonly string[]).includes(slug)) {
    return getTemporadaBcnBarrioHeroImage(slug);
  }
  const vertical = TEMPORADA_LOCAL_HERO_VERTICAL[slug];
  if (vertical) return vertical;
  if (configuredHero && !LEGACY_HORIZONTAL_HERO.has(configuredHero)) {
    return configuredHero;
  }
  return TEMPORADA_HERO_VERTICAL_FALLBACK;
}
