import {
  BARCELONA_METRO_CONTRATO_ARRAS_BARRIO_ENTRIES,
  BARCELONA_METRO_CONTRATO_ARRAS_ENTRIES,
  BARCELONA_METRO_CONTRATO_ARRAS_MUNICIPIO_ENTRIES,
  type BarcelonaMetroContratoArrasSlug,
} from "@/lib/barcelona-metro-contrato-arras-slugs";
import { localContratoArrasHref } from "@/lib/contrato-arras-local-cities";

/** Barrios de Barcelona con landing de contrato de arras. */
export const BARCELONA_METRO_ARRAS_BARRIO_CITIES = BARCELONA_METRO_CONTRATO_ARRAS_BARRIO_ENTRIES.map((e) => ({
  slug: e.slug,
  name: e.shortName,
  shortName: e.shortName,
}));

/** Municipios del área metropolitana de Barcelona con landing de contrato de arras. */
export const BARCELONA_METRO_ARRAS_CITIES = BARCELONA_METRO_CONTRATO_ARRAS_MUNICIPIO_ENTRIES.map((e) => ({
  slug: e.slug,
  name: e.shortName,
  shortName: e.shortName,
}));

export const BARCELONA_METRO_ARRAS_ALL_CITIES = BARCELONA_METRO_CONTRATO_ARRAS_ENTRIES.map((e) => ({
  slug: e.slug,
  name: e.shortName,
  shortName: e.shortName,
}));

export type BarcelonaMetroArrasSlug = BarcelonaMetroContratoArrasSlug;

export function isBarcelonaMetroArrasSlug(slug: string): slug is BarcelonaMetroArrasSlug {
  return BARCELONA_METRO_CONTRATO_ARRAS_ENTRIES.some((c) => c.slug === slug);
}

export function barcelonaMetroArrasHref(slug: BarcelonaMetroArrasSlug): string {
  return localContratoArrasHref(slug);
}
