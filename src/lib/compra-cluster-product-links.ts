import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";
import {
  isComprarPisoSinAgenciaSlugPublished,
  localComprarPisoSinAgenciaHref,
} from "@/lib/comprar-piso-sin-agencia-local-cities";
import {
  localServicioCompletoCompraHref,
  SERVICIO_COMPLETO_COMPRA_LOCAL_PUBLISHED_SLUGS,
} from "@/lib/servicio-completo-compra-local-cities";

export type CompraClusterHighlight = "comprar-sin-agencia" | "servicio-completo-compra";

export type CompraClusterProductLink = {
  id: CompraClusterHighlight;
  href: string;
  title: string;
  priceLabel: string;
  description: string;
};

const COMPRA_CITY_SLUGS = new Set<string>(SERVICIO_COMPLETO_COMPRA_LOCAL_PUBLISHED_SLUGS);

export function resolveServicioCompletoCompraCitySlug(localSlug: string): string | null {
  if (COMPRA_CITY_SLUGS.has(localSlug)) return localSlug;
  if (localSlug.startsWith("barcelona")) return "barcelona";
  if (
    localSlug === "hospitalet-de-llobregat" ||
    localSlug === "cornella-de-llobregat" ||
    localSlug === "badalona"
  ) {
    return "barcelona";
  }
  return null;
}

export function buildCompraClusterProductLinks(
  localSlug: string,
  cityLabel: string,
): CompraClusterProductLink[] {
  const links: CompraClusterProductLink[] = [];

  const compraCity = resolveServicioCompletoCompraCitySlug(localSlug);
  if (compraCity) {
    links.push({
      id: "servicio-completo-compra",
      href: localServicioCompletoCompraHref(compraCity),
      title: "Servicio completo de compra",
      priceLabel: `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
      description: `Reserva, arras, revisión documental y acompañamiento hasta escritura en ${cityLabel}. Para compradores que quieren cobertura integral.`,
    });
  }

  if (isComprarPisoSinAgenciaSlugPublished(localSlug)) {
    links.push({
      id: "comprar-sin-agencia",
      href: localComprarPisoSinAgenciaHref(localSlug),
      title: "Comprar piso sin agencia",
      priceLabel: `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
      description: `Landing local cuando ya tienes piso elegido y quieres gestor comprador en ${cityLabel} — mismo servicio, enfoque SEO comprador.`,
    });
  }

  return links;
}
