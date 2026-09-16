import {
  BARCELONA_METRO_CONTRATO_ALQUILER_ENTRIES,
  type BarcelonaMetroContratoAlquilerSlug,
} from "@/lib/barcelona-metro-contrato-alquiler-slugs";
import { localContratoAlquilerHref } from "@/lib/contrato-alquiler-local-cities";

/** Barrios y municipios del área metropolitana de Barcelona con landing de contrato LAU. */
export const BARCELONA_METRO_ALQUILER_CITIES = BARCELONA_METRO_CONTRATO_ALQUILER_ENTRIES.map((e) => ({
  slug: e.slug,
  name: e.shortName,
  shortName: e.shortName,
}));

export type BarcelonaMetroAlquilerSlug = BarcelonaMetroContratoAlquilerSlug;

export function isBarcelonaMetroAlquilerSlug(slug: string): slug is BarcelonaMetroAlquilerSlug {
  return BARCELONA_METRO_ALQUILER_CITIES.some((c) => c.slug === slug);
}

export function barcelonaMetroAlquilerHref(slug: BarcelonaMetroAlquilerSlug): string {
  return localContratoAlquilerHref(slug);
}
