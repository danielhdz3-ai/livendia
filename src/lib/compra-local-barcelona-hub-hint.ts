import { isComprarPisoSinAgenciaBcnMetroSlug } from "@/lib/comprar-piso-sin-agencia-bcn-metro-cities";
import { localComprarPisoSinAgenciaHref } from "@/lib/comprar-piso-sin-agencia-local-cities";
import { localGestoriaCityVerticalHref } from "@/lib/gestoria-city-vertical-hub";
import {
  isServicioCompletoCompraLocalSlugPublished,
  localServicioCompletoCompraHref,
} from "@/lib/servicio-completo-compra-local-cities";
import { SERVICIO_COMPLETO_COMPRA_LOCAL_BCN_ZONE_PUBLISHED_SLUGS } from "@/lib/servicio-completo-compra-local-bcn-zones";

const COMPRA_AMB_HUB_CHILD_SLUGS = new Set<string>([
  "hospitalet-de-llobregat",
  "baix-llobregat",
  "sant-andreu",
  "sabadell",
  "terrassa",
  "badalona",
  "castelldefels",
  "cornella-de-llobregat",
  "esplugues-de-llobregat",
  "gava",
  "sant-boi-de-llobregat",
  "sant-cugat-del-valles",
  "sant-adria-de-besos",
  "sant-joan-despi",
  "mollet-del-valles",
]);

export type CompraLocalBarcelonaHubHint = {
  comprarHeadHref: string;
  compra890Href: string;
  gestoriaCompraventaHref: string;
};

function isBarcelonaAreaCompraSlug(slug: string): boolean {
  if (slug === "barcelona") return false;
  if (slug.startsWith("barcelona-")) return true;
  if (isComprarPisoSinAgenciaBcnMetroSlug(slug)) return true;
  if ((SERVICIO_COMPLETO_COMPRA_LOCAL_BCN_ZONE_PUBLISHED_SLUGS as readonly string[]).includes(slug)) {
    return true;
  }
  return COMPRA_AMB_HUB_CHILD_SLUGS.has(slug);
}

export function getCompraLocalBarcelonaHubHint(slug: string): CompraLocalBarcelonaHubHint | null {
  if (!isBarcelonaAreaCompraSlug(slug)) return null;

  const compra890Href = isServicioCompletoCompraLocalSlugPublished(slug)
    ? localServicioCompletoCompraHref(slug)
    : localServicioCompletoCompraHref("barcelona");

  return {
    comprarHeadHref: localComprarPisoSinAgenciaHref("barcelona"),
    compra890Href,
    gestoriaCompraventaHref: localGestoriaCityVerticalHref("barcelona", "compraventa"),
  };
}
