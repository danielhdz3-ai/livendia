/**
 * Enlaces internos para reforzar rastreo de landings locales (GSC: descubierta sin indexar).
 */
import {
  ACOMPANAMIENTO_RESERVA_ARRAS_LOCAL_BASE,
  isAcompanamientoReservaArrasLocalSlugPublished,
  localAcompanamientoReservaArrasHref,
} from "@/lib/acompanamiento-reserva-arras-local-cities";
import {
  ADMINISTRACION_ALQUILER_TEMPORADA_LOCAL_BASE,
  isAdministracionAlquilerTemporadaLocalSlugPublished,
  localAdministracionAlquilerTemporadaHref,
} from "@/lib/administracion-alquiler-temporada-local-cities";
import {
  CONTRATO_ALQUILER_LOCAL_BASE,
  isContratoAlquilerLocalSlugPublished,
  localContratoAlquilerHref,
} from "@/lib/contrato-alquiler-local-cities";
import {
  HOME_COVERAGE_CITY_SLUGS,
  type HomeCoverageCitySlug,
} from "@/lib/home-coverage-cities";
import { PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH } from "@/lib/catalog.public";
import {
  isPackArrasGestionLocalSlugPublished,
  localPackArrasGestionHref,
} from "@/lib/pack-comercial-local-cities";
import {
  isRedactarContratoAlquilerLocalSlugPublished,
  localRedactarContratoAlquilerHref,
  REDACTAR_CONTRATO_ALQUILER_BASE,
  getPublishedRedactarContratoAlquilerLocalCities,
} from "@/lib/redactar-contrato-alquiler-local-cities";
import {
  isRevisionContratoAlquilerLocalSlugPublished,
  localRevisionContratoAlquilerHref,
  REVISION_CONTRATO_ALQUILER_LOCAL_BASE,
} from "@/lib/revision-contrato-alquiler-local-cities";
import { BARCELONA_METRO_CONTRATO_ALQUILER_SLUG_SET } from "@/lib/barcelona-metro-contrato-alquiler-slugs";

export type DiscoverabilityLink = {
  href: string;
  label: string;
};

function hrefIfPublished(
  slug: string,
  isPublished: (s: string) => boolean,
  hrefFor: (s: string) => string,
): string | undefined {
  return isPublished(slug) ? hrefFor(slug) : undefined;
}

/** Enlaces extra en hub /ciudades/[slug] según landings publicadas. */
export function getHubCityDiscoverabilityLinks(
  slug: HomeCoverageCitySlug,
  cityName: string,
): DiscoverabilityLink[] {
  const links: DiscoverabilityLink[] = [];

  const contratoAlquiler = hrefIfPublished(
    slug,
    isContratoAlquilerLocalSlugPublished,
    localContratoAlquilerHref,
  );
  if (contratoAlquiler) {
    links.push({ href: contratoAlquiler, label: `Contrato LAU ${cityName}` });
  }

  const redactar = hrefIfPublished(slug, isRedactarContratoAlquilerLocalSlugPublished, localRedactarContratoAlquilerHref);
  if (redactar) {
    links.push({ href: redactar, label: `Redactar contrato alquiler ${cityName}` });
  }

  const revision = hrefIfPublished(
    slug,
    isRevisionContratoAlquilerLocalSlugPublished,
    localRevisionContratoAlquilerHref,
  );
  if (revision) {
    links.push({ href: revision, label: `Revisión contrato alquiler ${cityName}` });
  }

  const reservaArras = hrefIfPublished(
    slug,
    isAcompanamientoReservaArrasLocalSlugPublished,
    localAcompanamientoReservaArrasHref,
  );
  if (reservaArras) {
    links.push({ href: reservaArras, label: `Acompañamiento hasta arras ${cityName}` });
  }

  const adminTemporada = hrefIfPublished(
    slug,
    isAdministracionAlquilerTemporadaLocalSlugPublished,
    localAdministracionAlquilerTemporadaHref,
  );
  if (adminTemporada) {
    links.push({ href: adminTemporada, label: `Admin. temporada ${cityName}` });
  }

  const packArras = hrefIfPublished(slug, isPackArrasGestionLocalSlugPublished, localPackArrasGestionHref);
  if (packArras) {
    links.push({ href: packArras, label: `Pack arras + gestión ${cityName}` });
  }

  return links;
}

/** Pilares y ciudades secundarias (fuera del hub prioritario) con landing de redactar. */
export function getExtendedRedactarDiscoverabilityLinks(): DiscoverabilityLink[] {
  const hubSlugs = new Set<string>(HOME_COVERAGE_CITY_SLUGS);
  return getPublishedRedactarContratoAlquilerLocalCities()
    .filter((c) => !hubSlugs.has(c.slug) && !BARCELONA_METRO_CONTRATO_ALQUILER_SLUG_SET.has(c.slug))
    .map((c) => ({
      href: localRedactarContratoAlquilerHref(c.slug),
      label: c.placeLabel,
    }));
}

/** Enlaces cruzados en landings LAU / redactar del mismo slug. */
export function getAlquilerLocalRelatedLinks(
  slug: string,
  cityName: string,
): DiscoverabilityLink[] {
  const links: DiscoverabilityLink[] = [];

  if (isContratoAlquilerLocalSlugPublished(slug)) {
    links.push({
      href: localContratoAlquilerHref(slug),
      label: `Contrato LAU ${cityName}`,
    });
  }
  if (isRedactarContratoAlquilerLocalSlugPublished(slug)) {
    links.push({
      href: localRedactarContratoAlquilerHref(slug),
      label: `Redactar contrato ${cityName}`,
    });
  }
  if (isRevisionContratoAlquilerLocalSlugPublished(slug)) {
    links.push({
      href: localRevisionContratoAlquilerHref(slug),
      label: `Revisión contrato ${cityName}`,
    });
  }

  return links;
}

export const DISCOVERABILITY_PILLAR_LINKS: DiscoverabilityLink[] = [
  { href: REDACTAR_CONTRATO_ALQUILER_BASE, label: "Redactar contrato alquiler" },
  { href: CONTRATO_ALQUILER_LOCAL_BASE, label: "Contrato LAU por ciudad" },
  { href: REVISION_CONTRATO_ALQUILER_LOCAL_BASE, label: "Revisión contrato alquiler" },
  { href: ACOMPANAMIENTO_RESERVA_ARRAS_LOCAL_BASE, label: "Acompañamiento hasta arras" },
  { href: ADMINISTRACION_ALQUILER_TEMPORADA_LOCAL_BASE, label: "Admin. temporada por ciudad" },
  { href: PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH, label: "Pack arras + gestión vendedor" },
  { href: "/servicios/vender-piso-sin-agencia", label: "Vender piso sin agencia" },
];
