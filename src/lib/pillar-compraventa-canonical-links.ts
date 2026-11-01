import type { PillarRelatedLink } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-barcelona";
import { VENDER_PISO_SIN_INMOBILIARIA_BASE } from "@/lib/vender-piso-sin-inmobiliaria-local-cities";
import {
  isGestoriaInmobiliariaLocalSlugPublished,
  localGestoriaInmobiliariaHref,
} from "@/lib/gestoria-inmobiliaria-local-cities";
import type { HomeCoverageCitySlug } from "@/lib/home-coverage-cities";
import {
  getSeoCityPrimaryLandings,
  type SeoCityPrimaryLinkRole,
} from "@/lib/seo-city-primary-landings";

function roleToCategory(role: SeoCityPrimaryLinkRole): PillarRelatedLink["category"] {
  if (role === "vender-head" || role === "comprar-head") return "guia";
  if (role === "pack495") return "servicio";
  return "local";
}

const ROLE_DESCRIPTION: Record<SeoCityPrimaryLinkRole, string> = {
  "vender-head": "URL ganadora para intención «vender sin agencia» — enlaza desde esta guía pilar.",
  pack495: "Pack arras + gestión documental vendedor cuando ya tienes comprador y precio cerrado.",
  venta890: "Servicio completo de venta (reserva a escritura) con el mismo producto 890 €.",
  compra890: "Servicio completo de compra para quien vende y compra en cadena.",
  "comprar-head": "Guía SEO comprador entre particulares en la misma ciudad.",
  "gestoria-compraventa": "Índice local de landings compraventa (hub gestoría).",
};

/** Enlaces relacionados unificados en guías pilar /vender-piso-sin-inmobiliaria/{ciudad}. */
export function buildPillarCompraventaRelatedLinks(
  citySlug: HomeCoverageCitySlug,
): readonly PillarRelatedLink[] {
  const block = getSeoCityPrimaryLandings(citySlug);
  if (!block) return [];

  const links: PillarRelatedLink[] = block.links.map((link) => ({
    href: link.href,
    label: link.label,
    description: `${link.priceHint}. ${ROLE_DESCRIPTION[link.role]}`,
    category: roleToCategory(link.role),
  }));

  links.push({
    href: "/servicios/servicio-completo-venta",
    label: "Ficha nacional — servicio completo de venta",
    description: "Alcance del producto 890 € IVA incl. en toda España (checkout).",
    category: "servicio",
  });

  if (isGestoriaInmobiliariaLocalSlugPublished(citySlug)) {
    links.push({
      href: localGestoriaInmobiliariaHref(citySlug),
      label: `Gestoría inmobiliaria en ${block.cityName}`,
      description: "Directorio de todos los servicios Livendia publicados en la ciudad.",
      category: "local",
    });
  }

  links.push({
    href: VENDER_PISO_SIN_INMOBILIARIA_BASE,
    label: "Hub guías «vender sin inmobiliaria»",
    description: "Índice nacional de guías pilar por ciudad.",
    category: "guia",
  });

  return links;
}

/** Landing SEO principal de venta (contratar / indexación). */
export function getSeoVentaHeadLandingHref(citySlug: HomeCoverageCitySlug): string {
  const block = getSeoCityPrimaryLandings(citySlug);
  const head = block?.links.find((l) => l.role === "vender-head");
  return head?.href ?? "/servicios/servicio-completo-venta";
}
