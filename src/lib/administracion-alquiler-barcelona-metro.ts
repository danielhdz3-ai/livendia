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
    slug: "eixample",
    segments: ["barcelona", "eixample"] as const,
    name: "Eixample, Barcelona",
    shortName: "Eixample",
    kind: "barrio" as const,
  },
  {
    slug: "sants-montjuic",
    segments: ["barcelona", "sants-montjuic"] as const,
    name: "Sants-Montjuïc, Barcelona",
    shortName: "Sants-Montjuïc",
    kind: "barrio" as const,
  },
  {
    slug: "sant-marti",
    segments: ["barcelona", "sant-marti"] as const,
    name: "Sant Martí, Barcelona",
    shortName: "Sant Martí",
    kind: "barrio" as const,
  },
  {
    slug: "sarria-sant-gervasi",
    segments: ["barcelona", "sarria-sant-gervasi"] as const,
    name: "Sarrià-Sant Gervasi, Barcelona",
    shortName: "Sarrià-Sant Gervasi",
    kind: "barrio" as const,
  },
  {
    slug: "nou-barris",
    segments: ["barcelona", "nou-barris"] as const,
    name: "Nou Barris, Barcelona",
    shortName: "Nou Barris",
    kind: "barrio" as const,
  },
  {
    slug: "ciutat-vella",
    segments: ["barcelona", "ciutat-vella"] as const,
    name: "Ciutat Vella, Barcelona",
    shortName: "Ciutat Vella",
    kind: "barrio" as const,
  },
  {
    slug: "horta-guinardo",
    segments: ["barcelona", "horta-guinardo"] as const,
    name: "Horta-Guinardó, Barcelona",
    shortName: "Horta-Guinardó",
    kind: "barrio" as const,
  },
  {
    slug: "sant-andreu",
    segments: ["barcelona", "sant-andreu"] as const,
    name: "Sant Andreu, Barcelona",
    shortName: "Sant Andreu",
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
  {
    slug: "esplugues",
    segments: ["esplugues"] as const,
    name: "Esplugues de Llobregat",
    shortName: "Esplugues",
    kind: "municipio" as const,
  },
  {
    slug: "sant-joan-despi",
    segments: ["sant-joan-despi"] as const,
    name: "Sant Joan Despí",
    shortName: "Sant Joan Despí",
    kind: "municipio" as const,
  },
  {
    slug: "sant-adria",
    segments: ["sant-adria"] as const,
    name: "Sant Adrià de Besòs",
    shortName: "Sant Adrià",
    kind: "municipio" as const,
  },
  {
    slug: "castelldefels",
    segments: ["castelldefels"] as const,
    name: "Castelldefels",
    shortName: "Castelldefels",
    kind: "municipio" as const,
  },
  {
    slug: "sant-boi",
    segments: ["sant-boi"] as const,
    name: "Sant Boi de Llobregat",
    shortName: "Sant Boi",
    kind: "municipio" as const,
  },
  {
    slug: "gava",
    segments: ["gava"] as const,
    name: "Gavà",
    shortName: "Gavà",
    kind: "municipio" as const,
  },
  {
    slug: "mollet-del-valles",
    segments: ["mollet-del-valles"] as const,
    name: "Mollet del Vallès",
    shortName: "Mollet",
    kind: "municipio" as const,
  },
  {
    slug: "sant-cugat",
    segments: ["sant-cugat"] as const,
    name: "Sant Cugat del Vallès",
    shortName: "Sant Cugat",
    kind: "municipio" as const,
  },
  {
    slug: "badalona",
    segments: ["badalona"] as const,
    name: "Badalona",
    shortName: "Badalona",
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
