/**
 * Comprar sin agencia (AMB): hero + 5 pasos únicos por slug, sin repetir en la misma landing.
 */

import type { ComprarPisoSinAgenciaBcnMetroSlug } from "@/lib/comprar-piso-sin-agencia-bcn-metro-cities";
import { COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS } from "@/lib/comprar-piso-sin-agencia-bcn-metro-cities";
import { gestoriaLandingImagePoolFiltered } from "@/lib/gestoria-landing-image-pool";
import { pickUniqueLandingImages } from "@/lib/pick-unique-landing-images";

const POOL = gestoriaLandingImagePoolFiltered();

function metroSlugIndex(slug: string): number {
  const i = (COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS as readonly string[]).indexOf(slug);
  return i >= 0 ? i : 0;
}

export function getComprarPisoSinAgenciaStepImages(
  slug: string,
): readonly [string, string, string, string, string] {
  const picked = pickUniqueLandingImages(`comprar-sin-agencia:steps:${slug}`, 5, POOL);
  return picked as unknown as readonly [string, string, string, string, string];
}

export function getComprarPisoSinAgenciaHeroImage(slug: string): string {
  const steps = getComprarPisoSinAgenciaStepImages(slug);
  const [hero] = pickUniqueLandingImages(`comprar-sin-agencia:hero:${slug}`, 1, POOL, steps);
  return hero;
}

export function isComprarBcnMetroSlugForImages(
  slug: string,
): slug is ComprarPisoSinAgenciaBcnMetroSlug {
  return metroSlugIndex(slug) >= 0;
}
