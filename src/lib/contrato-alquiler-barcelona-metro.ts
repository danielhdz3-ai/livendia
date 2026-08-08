import { localContratoAlquilerHref } from "@/lib/contrato-alquiler-local-cities";

/** Barrios y municipios del área metropolitana de Barcelona con landing de contrato LAU. */
export const BARCELONA_METRO_ALQUILER_CITIES = [
  { slug: "barcelona-les-corts", name: "Les Corts, Barcelona", shortName: "Les Corts" },
  { slug: "barcelona-gracia", name: "Gràcia, Barcelona", shortName: "Gràcia" },
  { slug: "hospitalet-de-llobregat", name: "L'Hospitalet de Llobregat", shortName: "L'Hospitalet" },
  { slug: "cornella-de-llobregat", name: "Cornellà de Llobregat", shortName: "Cornellà" },
] as const;

export type BarcelonaMetroAlquilerSlug = (typeof BARCELONA_METRO_ALQUILER_CITIES)[number]["slug"];

export function isBarcelonaMetroAlquilerSlug(slug: string): slug is BarcelonaMetroAlquilerSlug {
  return BARCELONA_METRO_ALQUILER_CITIES.some((c) => c.slug === slug);
}

export function barcelonaMetroAlquilerHref(slug: BarcelonaMetroAlquilerSlug): string {
  return localContratoAlquilerHref(slug);
}
