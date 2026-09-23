/**
 * Landings SEO locales: contrato de alquiler con opción a compra.
 * Rutas: /servicios/contrato-alquiler-opcion-compra-local/[slug]
 */

import { enrichWithCityMarketProfile } from "@/lib/attach-local-city-market-profile";
import {
  getOpcionCompraCitySpec,
  OPCION_COMPRA_LOCAL_CITY_SPECS,
  OPCION_COMPRA_LOCAL_DIFFERENTIATION,
} from "@/lib/contrato-alquiler-opcion-compra-local-differentiation";
import {
  opcionCompraLocalPriceFaq,
  OPCION_COMPRA_LOCAL_BASE_FAQ,
} from "@/lib/contrato-alquiler-opcion-compra-local-seo-content";
import { CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL } from "@/lib/catalog.public";
import { mergeLocalDifferentiation } from "@/lib/merge-local-differentiation";
import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";

export const CONTRATO_ALQUILER_OPCION_COMPRA_LOCAL_BASE =
  "/servicios/contrato-alquiler-opcion-compra-local" as const;

export const CONTRATO_ALQUILER_OPCION_COMPRA_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "madrid",
  "barcelona",
  "barcelona-les-corts",
  "barcelona-eixample",
  "hospitalet-de-llobregat",
  "cornella-de-llobregat",
  "valencia",
  "sevilla",
  "malaga",
  "bilbao",
  "zaragoza",
  "alicante",
  "granada",
  "palma",
  "murcia",
  "valladolid",
  "vigo",
  "gijon",
  "cordoba",
  "las-palmas",
  "santander",
  "pamplona",
  "oviedo",
  "asturias",
] as const;

export function isContratoAlquilerOpcionCompraLocalSlugPublished(slug: string): boolean {
  return CONTRATO_ALQUILER_OPCION_COMPRA_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedContratoAlquilerOpcionCompraLocalCities(): ContratoAlquilerOpcionCompraLocalCityDefinition[] {
  const pub = new Set(CONTRATO_ALQUILER_OPCION_COMPRA_LOCAL_PUBLISHED_SLUGS);
  return CONTRATO_ALQUILER_OPCION_COMPRA_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

export type ContratoAlquilerOpcionCompraLocalLandingConfig = {
  slug: string;
  path: string;
  city: string;
  placeLabel: string;
  schemaAdministrativeArea: string;
  heroLead: string;
  whyIntro: string;
  howIntro: string;
  testimonialsTitle: string;
  testimonials: { quote: string; author: string; role: string }[];
  finalCtaLead: string;
  faq?: readonly { question: string; answer: string }[];
  gestoriaSlug?: string;
} & LocalCityLandingFields;

export type ContratoAlquilerOpcionCompraLocalCityDefinition = Omit<
  ContratoAlquilerOpcionCompraLocalLandingConfig,
  "path" | "placeLabel"
> & {
  slug: string;
};

export function localContratoAlquilerOpcionCompraHref(slug: string): string {
  return `${CONTRATO_ALQUILER_OPCION_COMPRA_LOCAL_BASE}/${slug}`;
}

function buildHeroLead(spec: NonNullable<ReturnType<typeof getOpcionCompraCitySpec>>): string {
  return `En ${spec.place}, particulares propietarios e inquilinos cierran alquiler con opción a compra sin pagar comisión de agencia: precio de ejercicio, plazo, tratamiento de rentas e inventario. Livendia redacta el contrato LAU + pacto de compra desde ${CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL} IVA incluido — ${spec.marketHook.split(".")[0]}.`;
}

export function toContratoAlquilerOpcionCompraLandingConfig(
  def: ContratoAlquilerOpcionCompraLocalCityDefinition,
): ContratoAlquilerOpcionCompraLocalLandingConfig {
  const diff = OPCION_COMPRA_LOCAL_DIFFERENTIATION[def.slug] ?? {};
  const spec = getOpcionCompraCitySpec(def.slug);
  const faq = [
    ...OPCION_COMPRA_LOCAL_BASE_FAQ,
    ...(spec ? [opcionCompraLocalPriceFaq(spec.place)] : []),
    ...(diff.faq ?? []),
  ];

  const merged = mergeLocalDifferentiation({ ...def, ...diff, faq }, diff);

  const config: ContratoAlquilerOpcionCompraLocalLandingConfig = {
    ...merged,
    slug: def.slug,
    path: localContratoAlquilerOpcionCompraHref(def.slug),
    placeLabel: spec?.place ?? def.city,
    gestoriaSlug: def.gestoriaSlug ?? def.slug,
  };

  return enrichWithCityMarketProfile(
    def.slug,
    "alquiler-lau",
    config,
  ) as ContratoAlquilerOpcionCompraLocalLandingConfig;
}

export function getContratoAlquilerOpcionCompraLocalCity(
  slug: string,
): ContratoAlquilerOpcionCompraLocalCityDefinition | undefined {
  return CONTRATO_ALQUILER_OPCION_COMPRA_LOCAL_CITIES.find((c) => c.slug === slug);
}

function cityDisplayName(spec: NonNullable<ReturnType<typeof getOpcionCompraCitySpec>>): string {
  if (spec.slug === "palma") return "Palma de Mallorca";
  if (spec.slug === "las-palmas") return "Las Palmas de Gran Canaria";
  if (spec.slug === "hospitalet-de-llobregat") return "L'Hospitalet de Llobregat";
  if (spec.slug === "cornella-de-llobregat") return "Cornellà de Llobregat";
  if (spec.place.includes("(")) return spec.place.split(" (")[0]!;
  return spec.place;
}

function cityDefFromSpec(
  spec: NonNullable<ReturnType<typeof getOpcionCompraCitySpec>>,
): ContratoAlquilerOpcionCompraLocalCityDefinition {
  return {
    slug: spec.slug,
    city: cityDisplayName(spec),
    schemaAdministrativeArea: spec.region,
    heroLead: buildHeroLead(spec),
    whyIntro: spec.marketHook,
    howIntro: `Cuatro pasos en ${spec.place}: briefing del acuerdo rent-to-own, redacción LAU + opción de compra, inventario del inmueble y cierre con gestor antes de firmar — sin desplazarte al despacho.`,
    testimonialsTitle: `Particulares en ${spec.place} con contrato opción a compra Livendia`,
    testimonials: [],
    finalCtaLead: `Contrata tu contrato de alquiler con opción a compra en ${spec.place} — ${CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL} IVA incluido. Entrega en 48-72 h con gestor dedicado.`,
  };
}

export const CONTRATO_ALQUILER_OPCION_COMPRA_LOCAL_CITIES: ContratoAlquilerOpcionCompraLocalCityDefinition[] =
  OPCION_COMPRA_LOCAL_CITY_SPECS.map(cityDefFromSpec);
