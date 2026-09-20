/**
 * Slugs compartidos — landings locales de contrato de arras (barrios BCN + municipios AMB).
 * Solo se muestran enlaces si el slug está en CONTRATO_ARRAS_LOCAL_PUBLISHED_SLUGS.
 */
export const BARCELONA_METRO_CONTRATO_ARRAS_BARRIO_ENTRIES = [
  { slug: "barcelona-eixample", shortName: "Eixample" },
  { slug: "barcelona-gracia", shortName: "Gràcia" },
  { slug: "barcelona-les-corts", shortName: "Les Corts" },
  { slug: "barcelona-born", shortName: "El Born" },
  { slug: "barcelona-sants-montjuic", shortName: "Sants-Montjuïc" },
  { slug: "barcelona-poblenou", shortName: "Poblenou" },
  { slug: "barcelona-gotic", shortName: "Barri Gòtic" },
  { slug: "barcelona-sarria", shortName: "Sarrià" },
  { slug: "barcelona-barceloneta", shortName: "La Barceloneta" },
  { slug: "barcelona-vila-olimpica", shortName: "Vila Olímpica" },
  { slug: "barcelona-el-raval", shortName: "El Raval" },
] as const;

export const BARCELONA_METRO_CONTRATO_ARRAS_MUNICIPIO_ENTRIES = [
  { slug: "hospitalet-de-llobregat", shortName: "L'Hospitalet" },
  { slug: "cornella-de-llobregat", shortName: "Cornellà" },
  { slug: "badalona", shortName: "Badalona" },
  { slug: "sant-cugat-del-valles", shortName: "Sant Cugat" },
  { slug: "sabadell", shortName: "Sabadell" },
  { slug: "terrassa", shortName: "Terrassa" },
] as const;

export const BARCELONA_METRO_CONTRATO_ARRAS_ENTRIES = [
  ...BARCELONA_METRO_CONTRATO_ARRAS_BARRIO_ENTRIES,
  ...BARCELONA_METRO_CONTRATO_ARRAS_MUNICIPIO_ENTRIES,
] as const;

export type BarcelonaMetroContratoArrasSlug =
  (typeof BARCELONA_METRO_CONTRATO_ARRAS_ENTRIES)[number]["slug"];

export const BARCELONA_METRO_CONTRATO_ARRAS_SLUG_SET: ReadonlySet<string> = new Set(
  BARCELONA_METRO_CONTRATO_ARRAS_ENTRIES.map((e) => e.slug),
);

export function isBarcelonaMetroContratoArrasSlug(slug: string): slug is BarcelonaMetroContratoArrasSlug {
  return BARCELONA_METRO_CONTRATO_ARRAS_SLUG_SET.has(slug);
}

export function getPublishedBarcelonaMetroContratoArrasLinks(
  publishedSlugs: ReadonlySet<string>,
  hrefForSlug: (slug: BarcelonaMetroContratoArrasSlug) => string,
): { slug: BarcelonaMetroContratoArrasSlug; shortName: string; href: string }[] {
  return BARCELONA_METRO_CONTRATO_ARRAS_ENTRIES.filter((e) => publishedSlugs.has(e.slug)).map((e) => ({
    slug: e.slug,
    shortName: e.shortName,
    href: hrefForSlug(e.slug),
  }));
}

export function getPublishedBarcelonaMetroContratoArrasBarrioLinks(
  publishedSlugs: ReadonlySet<string>,
  hrefForSlug: (slug: BarcelonaMetroContratoArrasSlug) => string,
): { slug: BarcelonaMetroContratoArrasSlug; shortName: string; href: string }[] {
  return BARCELONA_METRO_CONTRATO_ARRAS_BARRIO_ENTRIES.filter((e) => publishedSlugs.has(e.slug)).map((e) => ({
    slug: e.slug,
    shortName: e.shortName,
    href: hrefForSlug(e.slug),
  }));
}

export function getPublishedBarcelonaMetroContratoArrasMunicipioLinks(
  publishedSlugs: ReadonlySet<string>,
  hrefForSlug: (slug: BarcelonaMetroContratoArrasSlug) => string,
): { slug: BarcelonaMetroContratoArrasSlug; shortName: string; href: string }[] {
  return BARCELONA_METRO_CONTRATO_ARRAS_MUNICIPIO_ENTRIES.filter((e) => publishedSlugs.has(e.slug)).map((e) => ({
    slug: e.slug,
    shortName: e.shortName,
    href: hrefForSlug(e.slug),
  }));
}
