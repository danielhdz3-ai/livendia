import { ADMINISTRACION_ALQUILER_METRO_BASE } from "@/lib/administracion-alquiler-metro-landings";
import { ADMINISTRACION_ALQUILER_LOCAL_BASE } from "@/lib/administracion-alquiler-local-cities";

/**
 * Jerarquía URL — landings hiperlocales administración de alquiler (área metropolitana Barcelona).
 *
 * Dos formas intencionadas (no compiten entre sí):
 * 1. Barrios/distritos DENTRO de Barcelona ciudad → /administracion-alquiler/barcelona/{barrio}
 * 2. Municipios independientes del AMB → /administracion-alquiler/{municipio}
 *
 * Página madre SEO (ciudad): /servicios/administracion-alquiler-local/barcelona
 * Las landings de barrio/municipio canonicalizan a sí mismas; enlazan hacia la madre con ancla explícita.
 */
export const ADMINISTRACION_ALQUILER_BARCELONA_CITY_HUB = `${ADMINISTRACION_ALQUILER_LOCAL_BASE}/barcelona` as const;

export const ADMINISTRACION_ALQUILER_BARCELONA_METRO_LANDINGS = [
  {
    slug: "les-corts",
    segments: ["barcelona", "les-corts"] as const,
    name: "Les Corts, Barcelona",
    shortName: "Les Corts",
    kind: "barrio" as const,
  },
  {
    slug: "gracia",
    segments: ["barcelona", "gracia"] as const,
    name: "Gràcia, Barcelona",
    shortName: "Gràcia",
    kind: "barrio" as const,
  },
  {
    slug: "l-hospitalet",
    segments: ["l-hospitalet"] as const,
    name: "L'Hospitalet de Llobregat",
    shortName: "L'Hospitalet",
    kind: "municipio" as const,
  },
  {
    slug: "cornella",
    segments: ["cornella"] as const,
    name: "Cornellà de Llobregat",
    shortName: "Cornellà",
    kind: "municipio" as const,
  },
] as const;

export type AdministracionAlquilerBarcelonaMetroSlug =
  (typeof ADMINISTRACION_ALQUILER_BARCELONA_METRO_LANDINGS)[number]["slug"];

export function administracionAlquilerMetroHref(segments: readonly string[]): string {
  return `${ADMINISTRACION_ALQUILER_METRO_BASE}/${segments.join("/")}`;
}

export function administracionAlquilerMetroSlugHref(slug: AdministracionAlquilerBarcelonaMetroSlug): string {
  const entry = ADMINISTRACION_ALQUILER_BARCELONA_METRO_LANDINGS.find((l) => l.slug === slug);
  if (!entry) return ADMINISTRACION_ALQUILER_METRO_BASE;
  return administracionAlquilerMetroHref(entry.segments);
}
