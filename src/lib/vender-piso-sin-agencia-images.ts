/**
 * Vender sin agencia (Barcelona / AMB): hero vertical + 6 pasos apaisados.
 */

import { pickUniqueLandingImages } from "@/lib/pick-unique-landing-images";
import {
  SIN_AGENCIA_HERO_VERTICAL_FALLBACK,
  SIN_AGENCIA_HERO_VERTICAL_POOL,
  SIN_AGENCIA_STEP_IMAGE_POOL,
} from "@/lib/sin-agencia-paso-a-paso-image-pools";
import { VENDER_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS } from "@/lib/vender-piso-sin-agencia-bcn-metro-cities";

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
  const picked = pickUniqueLandingImages(
    `vender-sin-agencia:steps:${seedSlug}`,
    6,
    SIN_AGENCIA_STEP_IMAGE_POOL,
  );
  return picked as unknown as readonly [string, string, string, string, string, string];
}

export function getVenderPisoSinAgenciaHeroImage(slug: string): string {
  const seedSlug = metroSlugIndex(slug) >= 0 ? slug : "barcelona";
  const [hero] = pickUniqueLandingImages(
    `vender-sin-agencia:hero:${seedSlug}`,
    1,
    SIN_AGENCIA_HERO_VERTICAL_POOL,
  );
  return hero ?? SIN_AGENCIA_HERO_VERTICAL_FALLBACK;
}
