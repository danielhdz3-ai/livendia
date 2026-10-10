/**
 * Comprar sin agencia (AMB): hero vertical + 5 pasos apaisados (gestoría / contratos).
 */

import type { ComprarPisoSinAgenciaBcnMetroSlug } from "@/lib/comprar-piso-sin-agencia-bcn-metro-cities";
import { COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS } from "@/lib/comprar-piso-sin-agencia-bcn-metro-cities";
import { pickUniqueLandingImages } from "@/lib/pick-unique-landing-images";
import {
  SIN_AGENCIA_HERO_VERTICAL_FALLBACK,
  SIN_AGENCIA_HERO_VERTICAL_POOL,
  SIN_AGENCIA_STEP_IMAGE_POOL,
} from "@/lib/sin-agencia-paso-a-paso-image-pools";

function metroSlugIndex(slug: string): number {
  const i = (COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS as readonly string[]).indexOf(slug);
  return i >= 0 ? i : 0;
}

export function getComprarPisoSinAgenciaStepImages(
  slug: string,
): readonly [string, string, string, string, string] {
  const picked = pickUniqueLandingImages(
    `comprar-sin-agencia:steps:${slug}`,
    5,
    SIN_AGENCIA_STEP_IMAGE_POOL,
  );
  return picked as unknown as readonly [string, string, string, string, string];
}

export function getComprarPisoSinAgenciaHeroImage(slug: string): string {
  const [hero] = pickUniqueLandingImages(
    `comprar-sin-agencia:hero:${slug}`,
    1,
    SIN_AGENCIA_HERO_VERTICAL_POOL,
  );
  return hero ?? SIN_AGENCIA_HERO_VERTICAL_FALLBACK;
}

export function isComprarBcnMetroSlugForImages(
  slug: string,
): slug is ComprarPisoSinAgenciaBcnMetroSlug {
  return metroSlugIndex(slug) >= 0;
}
