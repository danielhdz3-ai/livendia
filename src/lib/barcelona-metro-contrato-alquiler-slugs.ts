/**
 * Slugs compartidos — landings locales de contrato / redactar alquiler (distritos + municipios AMB).
 * Orden fijo en blog y hubs. Solo se muestran enlaces si el slug está en PUBLISHED_SLUGS del servicio.
 */
export const BARCELONA_METRO_CONTRATO_ALQUILER_ENTRIES = [
  { slug: "barcelona-les-corts", shortName: "Les Corts" },
  { slug: "barcelona-gracia", shortName: "Gràcia" },
  { slug: "barcelona-eixample", shortName: "Eixample" },
  { slug: "hospitalet-de-llobregat", shortName: "L'Hospitalet" },
  { slug: "cornella-de-llobregat", shortName: "Cornellà" },
] as const;

export type BarcelonaMetroContratoAlquilerSlug =
  (typeof BARCELONA_METRO_CONTRATO_ALQUILER_ENTRIES)[number]["slug"];

export const BARCELONA_METRO_CONTRATO_ALQUILER_SLUG_SET: ReadonlySet<string> = new Set(
  BARCELONA_METRO_CONTRATO_ALQUILER_ENTRIES.map((e) => e.slug),
);

export function isBarcelonaMetroContratoAlquilerSlug(slug: string): slug is BarcelonaMetroContratoAlquilerSlug {
  return BARCELONA_METRO_CONTRATO_ALQUILER_SLUG_SET.has(slug);
}

export function getPublishedBarcelonaMetroContratoAlquilerLinks(
  publishedSlugs: ReadonlySet<string>,
  hrefForSlug: (slug: BarcelonaMetroContratoAlquilerSlug) => string,
): { slug: BarcelonaMetroContratoAlquilerSlug; shortName: string; href: string }[] {
  return BARCELONA_METRO_CONTRATO_ALQUILER_ENTRIES.filter((e) => publishedSlugs.has(e.slug)).map((e) => ({
    slug: e.slug,
    shortName: e.shortName,
    href: hrefForSlug(e.slug),
  }));
}
