import { localVentaPisoParticularSinAgenciaHref } from "@/lib/venta-piso-particular-sin-agencia-local-cities";

/** Municipios del área metropolitana de Barcelona — venta entre particulares con comprador ya encontrado. */
/** Distritos de Barcelona capital — venta con comprador ya encontrado. */
export const BARCELONA_DISTRICT_VENTA_PARTICULAR_CITIES = [
  { slug: "barcelona-eixample", name: "l'Eixample", shortName: "Eixample" },
  { slug: "barcelona-gracia", name: "Gràcia", shortName: "Gràcia" },
  { slug: "barcelona-sants-montjuic", name: "Sants-Montjuïc", shortName: "Sants-Montjuïc" },
] as const;

export const BARCELONA_METRO_VENTA_PARTICULAR_CITIES = [
  { slug: "hospitalet-de-llobregat", name: "L'Hospitalet de Llobregat", shortName: "L'Hospitalet" },
  { slug: "cornella-de-llobregat", name: "Cornellà de Llobregat", shortName: "Cornellà" },
  { slug: "esplugues-de-llobregat", name: "Esplugues de Llobregat", shortName: "Esplugues" },
  { slug: "sabadell", name: "Sabadell", shortName: "Sabadell" },
  { slug: "terrassa", name: "Terrassa", shortName: "Terrassa" },
] as const;

export type BarcelonaMetroVentaParticularSlug =
  (typeof BARCELONA_METRO_VENTA_PARTICULAR_CITIES)[number]["slug"];

export type BarcelonaDistrictVentaParticularSlug =
  (typeof BARCELONA_DISTRICT_VENTA_PARTICULAR_CITIES)[number]["slug"];

export type VentaParticularBarcelonaAreaSlug =
  | BarcelonaMetroVentaParticularSlug
  | BarcelonaDistrictVentaParticularSlug;

export function isBarcelonaMetroVentaParticularSlug(
  slug: string,
): slug is BarcelonaMetroVentaParticularSlug {
  return BARCELONA_METRO_VENTA_PARTICULAR_CITIES.some((c) => c.slug === slug);
}

export function barcelonaMetroVentaParticularHref(slug: VentaParticularBarcelonaAreaSlug): string {
  return localVentaPisoParticularSinAgenciaHref(slug);
}
