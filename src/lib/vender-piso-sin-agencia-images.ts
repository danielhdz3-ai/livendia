/**
 * Vender sin agencia (Barcelona / AMB): hero + 6 pasos únicos por slug.
 */

import { gestoriaLandingImagePoolFiltered } from "@/lib/gestoria-landing-image-pool";
import { pickUniqueLandingImages } from "@/lib/pick-unique-landing-images";
import { VENDER_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS } from "@/lib/vender-piso-sin-agencia-bcn-metro-cities";

const POOL = gestoriaLandingImagePoolFiltered();

function metroSlugIndex(slug: string): number {
  const i = (VENDER_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS as readonly string[]).indexOf(slug);
  return i >= 0 ? i : -1;
}

export function isVenderBcnMetroSlugForImages(slug: string): boolean {
  return metroSlugIndex(slug) >= 0;
}

export function getVenderPisoSinAgenciaStepImages(
  slug: string,
): readonly [string, string, string, string, string, string] {
  const seedSlug = metroSlugIndex(slug) >= 0 ? slug : "barcelona";
  const picked = pickUniqueLandingImages(`vender-sin-agencia:steps:${seedSlug}`, 6, POOL);
  return picked as unknown as readonly [string, string, string, string, string, string];
}

export function getVenderPisoSinAgenciaHeroImage(slug: string): string {
  const seedSlug = metroSlugIndex(slug) >= 0 ? slug : "barcelona";
  const steps = getVenderPisoSinAgenciaStepImages(seedSlug);
  const [hero] = pickUniqueLandingImages(`vender-sin-agencia:hero:${seedSlug}`, 1, POOL, steps);
  return hero;
}
