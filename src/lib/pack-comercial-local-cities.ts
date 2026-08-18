import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { getLocalCityCardImage } from "@/lib/local-city-card-images";
import {
  PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH,
  PACK_LAU_ADMIN_LANDING_PATH,
} from "@/lib/catalog.public";
import {
  PACK_ARRAS_GESTION_LANDING,
  PACK_LAU_ADMIN_LANDING,
  type PackCommercialLandingConfig,
} from "@/lib/pack-comercial-landings";
import {
  PACK_ARRAS_GESTION_LOCAL_DIFFERENTIATION,
  PACK_LAU_ADMIN_LOCAL_DIFFERENTIATION,
} from "@/lib/pack-comercial-local-differentiation";
import {
  getPackArrasGestionLocalSeo,
  getPackLauAdminLocalSeo,
  type PackCommercialLocalSeoContent,
} from "@/lib/pack-comercial-local-seo-content";

export const PACK_LAU_ADMIN_LOCAL_PUBLISHED_SLUGS = ["madrid", "barcelona", "valencia"] as const;
export const PACK_ARRAS_GESTION_LOCAL_PUBLISHED_SLUGS = ["madrid", "barcelona", "valencia"] as const;

export type PackCommercialLocalSlug = (typeof PACK_LAU_ADMIN_LOCAL_PUBLISHED_SLUGS)[number];

type PackLocalCityBase = {
  slug: string;
  city: string;
  schemaAdministrativeArea: string;
};

const PACK_LOCAL_CITY_BASES: Record<string, PackLocalCityBase> = {
  madrid: { slug: "madrid", city: "Madrid", schemaAdministrativeArea: "Comunidad de Madrid" },
  barcelona: { slug: "barcelona", city: "Barcelona", schemaAdministrativeArea: "Cataluña" },
  valencia: { slug: "valencia", city: "Valencia", schemaAdministrativeArea: "Comunitat Valenciana" },
};

export type PackCommercialLocalLandingConfig = PackCommercialLandingConfig &
  LocalCityLandingFields & {
    slug: string;
    city: string;
    schemaAdministrativeArea: string;
    localSeo: PackCommercialLocalSeoContent;
  };

export function localPackLauAdminHref(slug: string): string {
  return `${PACK_LAU_ADMIN_LANDING_PATH}/${slug}`;
}

export function localPackArrasGestionHref(slug: string): string {
  return `${PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH}/${slug}`;
}

export function isPackLauAdminLocalSlugPublished(slug: string): boolean {
  return (PACK_LAU_ADMIN_LOCAL_PUBLISHED_SLUGS as readonly string[]).includes(slug);
}

export function isPackArrasGestionLocalSlugPublished(slug: string): boolean {
  return (PACK_ARRAS_GESTION_LOCAL_PUBLISHED_SLUGS as readonly string[]).includes(slug);
}

export function getPublishedPackLauAdminLocalSlugs(): readonly string[] {
  return PACK_LAU_ADMIN_LOCAL_PUBLISHED_SLUGS;
}

export function getPublishedPackArrasGestionLocalSlugs(): readonly string[] {
  return PACK_ARRAS_GESTION_LOCAL_PUBLISHED_SLUGS;
}

function mergeFaq(
  national: readonly { question: string; answer: string }[],
  local: readonly { question: string; answer: string }[],
): { question: string; answer: string }[] {
  const seen = new Set<string>();
  const merged: { question: string; answer: string }[] = [];
  for (const item of [...local, ...national]) {
    if (seen.has(item.question)) continue;
    seen.add(item.question);
    merged.push(item);
  }
  return merged;
}

function mergeInfoBanners(
  national: readonly { title: string; body: string }[],
  local: readonly { title: string; body: string }[],
): { title: string; body: string }[] {
  return [...local, ...national];
}

function mergeStepsWithLocalNotes(
  national: PackCommercialLandingConfig["steps"],
  notes: readonly string[],
): PackCommercialLandingConfig["steps"] {
  return national.map((step, i) => ({
    title: step.title,
    description: notes[i] ?? step.description,
  }));
}

function applyLocalFields(
  base: PackCommercialLandingConfig,
  path: string,
  cityBase: PackLocalCityBase,
  diff: LocalCityLandingFields,
  localSeo: PackCommercialLocalSeoContent,
  relatedLinksExtra: readonly { href: string; label: string }[],
): PackCommercialLocalLandingConfig {
  const city = cityBase.city;
  return {
    ...base,
    slug: cityBase.slug,
    city,
    schemaAdministrativeArea: cityBase.schemaAdministrativeArea,
    path,
    localSeo,
    metaTitle: diff.metaTitle ?? base.metaTitle.replace("Pack", `Pack ${city}`),
    metaDescription: diff.metaDescription ?? base.metaDescription,
    keywords: diff.keywords ? [...diff.keywords] : [...base.keywords, city.toLowerCase()],
    heroBadge: diff.heroBadge ?? `${base.heroBadge} · ${city}`,
    heroH1: diff.heroH1 ?? `${base.heroH1} en ${city}`,
    heroLead: localSeo.heroSubtitle,
    heroImage: diff.heroImage ?? getLocalCityCardImage(cityBase.slug),
    heroImageAlt: `Pack Livendia en ${city} — ${base.heroBadge}`,
    includedIntro: diff.whySubtitle ?? base.includedIntro,
    steps: mergeStepsWithLocalNotes(base.steps, localSeo.stepLocalNotes),
    infoBanners: mergeInfoBanners(base.infoBanners, localSeo.localBanners),
    audienceTitle: diff.whyTitle ?? base.audienceTitle,
    audienceParagraph: localSeo.localProblemIntro,
    faq: mergeFaq(base.faq, localSeo.faqLocal),
    relatedLinks: [...relatedLinksExtra, ...base.relatedLinks],
    finalCtaTitle: diff.finalCtaTitle ?? base.finalCtaTitle,
    finalCtaLead: localSeo.marketIntro,
    jsonLdName: `${base.jsonLdName} — ${city}`,
    jsonLdDescription: localSeo.heroSubtitle,
    contactServiceLabel: `${base.contactServiceLabel} en ${city}`,
    ...diff,
  };
}

export function toPackLauAdminLocalConfig(slug: string): PackCommercialLocalLandingConfig | null {
  const cityBase = PACK_LOCAL_CITY_BASES[slug];
  const diff = PACK_LAU_ADMIN_LOCAL_DIFFERENTIATION[slug];
  const localSeo = getPackLauAdminLocalSeo(slug);
  if (!cityBase || !diff || !localSeo) return null;

  const relatedLinksExtra = [
    { href: `/servicios/contrato-alquiler-local/${slug}`, label: `Contrato alquiler ${cityBase.city}` },
    { href: `/servicios/administracion-alquiler-local/${slug}`, label: `Administración alquiler ${cityBase.city}` },
    { href: PACK_LAU_ADMIN_LANDING_PATH, label: "Pack nacional LAU + admin" },
  ] as const;

  return applyLocalFields(
    PACK_LAU_ADMIN_LANDING,
    localPackLauAdminHref(slug),
    cityBase,
    diff,
    localSeo,
    relatedLinksExtra,
  );
}

export function toPackArrasGestionLocalConfig(slug: string): PackCommercialLocalLandingConfig | null {
  const cityBase = PACK_LOCAL_CITY_BASES[slug];
  const diff = PACK_ARRAS_GESTION_LOCAL_DIFFERENTIATION[slug];
  const localSeo = getPackArrasGestionLocalSeo(slug);
  if (!cityBase || !diff || !localSeo) return null;

  const relatedLinksExtra = [
    { href: `/servicios/contrato-arras-local/${slug}`, label: `Contrato arras ${cityBase.city}` },
    { href: `/servicios/gestion-documental-vendedor/${slug}`, label: `Gestión documental ${cityBase.city}` },
    { href: `/servicios/servicio-completo-venta-local/${slug}`, label: `Venta completa ${cityBase.city}` },
    { href: PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH, label: "Pack nacional arras + gestión" },
  ] as const;

  return applyLocalFields(
    PACK_ARRAS_GESTION_LANDING,
    localPackArrasGestionHref(slug),
    cityBase,
    diff,
    localSeo,
    relatedLinksExtra,
  );
}

export function getAllPublishedPackLocalConfigs(): PackCommercialLocalLandingConfig[] {
  const configs: PackCommercialLocalLandingConfig[] = [];
  for (const slug of PACK_LAU_ADMIN_LOCAL_PUBLISHED_SLUGS) {
    const c = toPackLauAdminLocalConfig(slug);
    if (c) configs.push(c);
  }
  for (const slug of PACK_ARRAS_GESTION_LOCAL_PUBLISHED_SLUGS) {
    const c = toPackArrasGestionLocalConfig(slug);
    if (c) configs.push(c);
  }
  return configs;
}
