/**
 * Comprar sin agencia (AMB): hero vertical por slug; pasos apaisados rotados (no repetir entre landings vecinas).
 */

import type { ComprarPisoSinAgenciaBcnMetroSlug } from "@/lib/comprar-piso-sin-agencia-bcn-metro-cities";
import { COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS } from "@/lib/comprar-piso-sin-agencia-bcn-metro-cities";

const HERO_BY_SLUG: Record<string, string> = {
  "barcelona-les-corts": "/images/pexels-yankrukov-7693740.jpg",
  "hospitalet-de-llobregat": "/images/pexels-shkrabaanthony-5816284.jpg",
  "barcelona-horta-guinardo": "/images/pexels-dantemunozphoto-16346704.jpg",
  "barcelona-sant-marti": "/images/pexels-kampus-8463139.jpg",
  "barcelona-sant-andreu": "/images/pexels-kampus-8171201.jpg",
  "barcelona-eixample": "/images/pexels-yankrukov-7693717.jpg",
  "barcelona-gracia": "/images/pexels-mikhail-nilov-8297043.jpg",
  "barcelona-sants-montjuic": "/images/pexels-artempodrez-6779344.jpg",
  badalona: "/images/gestora9.jpg",
  sabadell: "/images/gestora5.jpg",
  "barcelona-sarria-sant-gervasi": "/images/gestora10.jpg",
  "barcelona-nou-barris": "/images/pexels-cristian-rojas-10041249.jpg",
  "barcelona-ciutat-vella": "/images/pexels-dimkidama-15675799.jpg",
  terrassa: "/images/gestora6.jpg",
  "cornella-de-llobregat": "/images/pexels-artempodrez-6779333.jpg",
  "sant-cugat-del-valles": "/images/gestora7.jpg",
  "esplugues-de-llobregat": "/images/pexels-anna-belousova-130658517-10325487.jpg",
  castelldefels: "/images/gestora8.jpg",
  gava: "/images/pexels-yankrukov-7693743.jpg",
  "sant-adria-de-besos": "/images/pexels-mikhail-nilov-8296981.jpg",
  "sant-boi-de-llobregat": "/images/pexels-yankrukov-7698744.jpg",
  "sant-joan-despi": "/images/modelo3.jpg",
  "mollet-del-valles": "/images/modelo4.jpg",
  "barcelona-poblenou": "/images/pexels-tima-miroshnichenko-5439472.jpg",
  "barcelona-born": "/images/pexels-yankrukov-7693161.jpg",
};

const HERO_FALLBACK = "/images/modelo2.jpg";

const STEP_IMAGE_POOL = [
  "/images/pexels-pavel-danilyuk-5520284.jpg",
  "/images/pexels-pavel-danilyuk-5520289.jpg",
  "/images/pexels-pavel-danilyuk-5520299.jpg",
  "/images/pexels-khwanchai-12885860.jpg",
  "/images/pexels-silverkblack-23496450.jpg",
  "/images/pexels-silverkblack-36729677.jpg",
  "/images/pexels-silverkblack-36733331.jpg",
  "/images/pexels-silverkblack-36765714.jpg",
  "/images/pexels-tima-miroshnichenko-5439443.jpg",
  "/images/pexels-tima-miroshnichenko-5439380.jpg",
  "/images/contratodearras.jpg",
  "/images/gestor6.jpg",
  "/images/firma10.jpg",
] as const;

/** Un conjunto de 5 imágenes por landing AMB (combinaciones distintas). */
const STEP_IMAGE_SETS: readonly (readonly [string, string, string, string, string])[] =
  COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS.map((_, i) => {
    const a = STEP_IMAGE_POOL[i % STEP_IMAGE_POOL.length]!;
    const b = STEP_IMAGE_POOL[(i + 4) % STEP_IMAGE_POOL.length]!;
    const c = STEP_IMAGE_POOL[(i + 7) % STEP_IMAGE_POOL.length]!;
    const d = "/images/contratodearras.jpg";
    const e = i % 2 === 0 ? "/images/firma10.jpg" : "/images/gestor6.jpg";
    return [a, b, c, d, e] as const;
  });

function metroSlugIndex(slug: string): number {
  const i = (COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS as readonly string[]).indexOf(slug);
  return i >= 0 ? i : 0;
}

export function getComprarPisoSinAgenciaHeroImage(slug: string): string {
  return HERO_BY_SLUG[slug] ?? HERO_FALLBACK;
}

export function getComprarPisoSinAgenciaStepImages(slug: string): readonly [string, string, string, string, string] {
  const idx = metroSlugIndex(slug);
  return STEP_IMAGE_SETS[idx % STEP_IMAGE_SETS.length]!;
}

export function isComprarBcnMetroSlugForImages(
  slug: string,
): slug is ComprarPisoSinAgenciaBcnMetroSlug {
  return metroSlugIndex(slug) >= 0;
}
