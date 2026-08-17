/**
 * Fechas estables para el sitemap. Actualizar solo cuando cambie el contenido de esa sección.
 * Evita que cada deploy marque todas las URLs como recién modificadas (fechas falsas en el SERP).
 */
export const SITEMAP_LAST_MODIFIED = {
  core: "2026-06-30",
  servicios: "2026-06-01",
  localLandings: "2026-08-17",
  gestoria: "2026-05-15",
  ventaSeo: "2026-06-30",
  venderSinInmobiliaria: "2026-06-01",
  ciudades: "2026-06-30",
} as const;

export function toSitemapDate(isoDate: string): Date {
  return new Date(`${isoDate}T12:00:00Z`);
}
