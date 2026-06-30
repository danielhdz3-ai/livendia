import { localContratoAlquilerHabitacionHref } from "@/lib/contrato-alquiler-habitacion-local-cities";

/** Municipios del área metropolitana de Barcelona con landing de contrato de habitación. */
export const BARCELONA_METRO_HABITACION_CITIES = [
  { slug: "hospitalet-de-llobregat", name: "L'Hospitalet de Llobregat", shortName: "L'Hospitalet" },
  { slug: "cornella-de-llobregat", name: "Cornellà de Llobregat", shortName: "Cornellà" },
  { slug: "sabadell", name: "Sabadell", shortName: "Sabadell" },
  { slug: "terrassa", name: "Terrassa", shortName: "Terrassa" },
] as const;

export type BarcelonaMetroHabitacionSlug = (typeof BARCELONA_METRO_HABITACION_CITIES)[number]["slug"];

export function isBarcelonaMetroHabitacionSlug(slug: string): slug is BarcelonaMetroHabitacionSlug {
  return BARCELONA_METRO_HABITACION_CITIES.some((c) => c.slug === slug);
}

export function barcelonaMetroHabitacionHref(slug: BarcelonaMetroHabitacionSlug): string {
  return localContratoAlquilerHabitacionHref(slug);
}
