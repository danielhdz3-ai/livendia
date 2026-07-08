import { localServicioCompletoCompraHref } from "@/lib/servicio-completo-compra-local-cities";

/** Landings de compra en Cataluña: comarca, barrio barcelonés y municipios del área metropolitana. */
export const COMPRA_LOCAL_BARCELONA_METRO_CITIES = [
  {
    slug: "hospitalet-de-llobregat",
    name: "L'Hospitalet de Llobregat",
    shortName: "L'Hospitalet",
  },
  {
    slug: "baix-llobregat",
    name: "Baix Llobregat",
    shortName: "Baix Llobregat",
  },
  {
    slug: "sant-andreu",
    name: "Sant Andreu (Barcelona)",
    shortName: "Sant Andreu",
  },
  { slug: "sabadell", name: "Sabadell", shortName: "Sabadell" },
  { slug: "terrassa", name: "Terrassa", shortName: "Terrassa" },
] as const;

export type CompraLocalBarcelonaMetroSlug = (typeof COMPRA_LOCAL_BARCELONA_METRO_CITIES)[number]["slug"];

export function isCompraLocalBarcelonaMetroSlug(slug: string): slug is CompraLocalBarcelonaMetroSlug {
  return COMPRA_LOCAL_BARCELONA_METRO_CITIES.some((c) => c.slug === slug);
}

export function barcelonaMetroCompraHref(slug: CompraLocalBarcelonaMetroSlug): string {
  return localServicioCompletoCompraHref(slug);
}
