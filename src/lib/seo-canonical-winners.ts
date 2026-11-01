import type { HomeCoverageCitySlug } from "@/lib/home-coverage-cities";
import {
  getSeoCityPrimaryLandings,
  SEO_PRIMARY_LANDING_CITY_SLUGS,
  type SeoCityPrimaryLinkRole,
} from "@/lib/seo-city-primary-landings";

const ROLE_LABEL: Record<SeoCityPrimaryLinkRole, string> = {
  "vender-head": "Vender (SEO head)",
  pack495: "Pack arras 495 €",
  venta890: "Servicio completo venta",
  compra890: "Servicio completo compra",
  "comprar-head": "Comprar (SEO head)",
  "gestoria-compraventa": "Hub gestoría compraventa",
};

export type SeoCanonicalWinnerRow = {
  citySlug: HomeCoverageCitySlug;
  cityName: string;
  role: SeoCityPrimaryLinkRole;
  intentLabel: string;
  href: string;
  priceHint: string;
};

/** Matriz operativa para /admin/seo y solicitudes GSC. */
export function getSeoCanonicalWinnerRows(): SeoCanonicalWinnerRow[] {
  const rows: SeoCanonicalWinnerRow[] = [];
  for (const citySlug of SEO_PRIMARY_LANDING_CITY_SLUGS) {
    const block = getSeoCityPrimaryLandings(citySlug);
    if (!block) continue;
    for (const link of block.links) {
      rows.push({
        citySlug,
        cityName: block.cityName,
        role: link.role,
        intentLabel: ROLE_LABEL[link.role],
        href: link.href,
        priceHint: link.priceHint,
      });
    }
  }
  return rows;
}
