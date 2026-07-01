import { localContratoArrasHref } from "@/lib/contrato-arras-local-cities";

/** Municipios del área metropolitana de Barcelona con landing de contrato de arras. */
export const BARCELONA_METRO_ARRAS_CITIES = [
  { slug: "hospitalet-de-llobregat", name: "L'Hospitalet de Llobregat", shortName: "L'Hospitalet" },
  { slug: "cornella-de-llobregat", name: "Cornellà de Llobregat", shortName: "Cornellà" },
  { slug: "badalona", name: "Badalona", shortName: "Badalona" },
  { slug: "sant-cugat-del-valles", name: "Sant Cugat del Vallès", shortName: "Sant Cugat" },
  { slug: "sabadell", name: "Sabadell", shortName: "Sabadell" },
  { slug: "terrassa", name: "Terrassa", shortName: "Terrassa" },
] as const;

export type BarcelonaMetroArrasSlug = (typeof BARCELONA_METRO_ARRAS_CITIES)[number]["slug"];

export function isBarcelonaMetroArrasSlug(slug: string): slug is BarcelonaMetroArrasSlug {
  return BARCELONA_METRO_ARRAS_CITIES.some((c) => c.slug === slug);
}

export function barcelonaMetroArrasHref(slug: BarcelonaMetroArrasSlug): string {
  return localContratoArrasHref(slug);
}
