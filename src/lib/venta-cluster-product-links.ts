import {
  isPackArrasGestionLocalSlugPublished,
  localPackArrasGestionHref,
} from "@/lib/pack-comercial-local-cities";
import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";
import {
  localServicioCompletoVentaHref,
  SERVICIO_COMPLETO_VENTA_LOCAL_PUBLISHED_SLUGS,
} from "@/lib/servicio-completo-venta-local-cities";
import {
  isVentaPisoParticularSlugPublished,
  localVentaPisoParticularSinAgenciaHref,
} from "@/lib/venta-piso-particular-sin-agencia-local-cities";
import {
  isVenderPisoSinAgenciaSlugPublished,
  localVenderPisoSinAgenciaHref,
} from "@/lib/vender-piso-sin-agencia-local-cities";

export type VentaClusterHighlight =
  | "pack-arras"
  | "servicio-completo-venta"
  | "vender-sin-agencia"
  | "venta-particular";

export type VentaClusterProductLink = {
  id: VentaClusterHighlight;
  href: string;
  title: string;
  priceLabel: string;
  description: string;
};

const VENTA_CITY_SLUGS = new Set<string>(SERVICIO_COMPLETO_VENTA_LOCAL_PUBLISHED_SLUGS);

/** Resuelve slug de ciudad para servicio completo venta (890 €). */
export function resolveServicioCompletoVentaCitySlug(localSlug: string): string | null {
  if (VENTA_CITY_SLUGS.has(localSlug)) return localSlug;
  if (localSlug.startsWith("barcelona")) return "barcelona";
  if (localSlug === "hospitalet-de-llobregat") return "barcelona";
  return null;
}

export function buildVentaClusterProductLinks(
  localSlug: string,
  cityLabel: string,
): VentaClusterProductLink[] {
  const links: VentaClusterProductLink[] = [];

  if (isPackArrasGestionLocalSlugPublished(localSlug)) {
    links.push({
      id: "pack-arras",
      href: localPackArrasGestionHref(localSlug),
      title: "Pack arras + gestión documental",
      priceLabel: "495 € IVA incl.",
      description: `Solo arras CCCat y documentación post-arras hasta notaría en ${cityLabel}. Ideal si ya cerraste precio y quieres el tramo legal mínimo.`,
    });
  }

  const ventaCity = resolveServicioCompletoVentaCitySlug(localSlug);
  if (ventaCity) {
    links.push({
      id: "servicio-completo-venta",
      href: localServicioCompletoVentaHref(ventaCity),
      title: "Servicio completo de venta",
      priceLabel: `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
      description: `Reserva, arras, trámites y coordinación con notaría en ${cityLabel}. Acompañamiento integral de principio a escritura.`,
    });
  }

  if (isVenderPisoSinAgenciaSlugPublished(localSlug)) {
    links.push({
      id: "vender-sin-agencia",
      href: localVenderPisoSinAgenciaHref(localSlug),
      title: "Vender piso sin agencia",
      priceLabel: `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
      description: `Landing principal para vender sin comisión cuando ya tienes comprador en ${cityLabel}. Mismo servicio 890 € con enfoque SEO local.`,
    });
  }

  if (isVentaPisoParticularSlugPublished(localSlug)) {
    links.push({
      id: "venta-particular",
      href: localVentaPisoParticularSinAgenciaHref(localSlug),
      title: "Venta entre particulares (barrio)",
      priceLabel: `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
      description: `Contenido específico de barrio/municipio: casuística local y proceso hasta escritura en ${cityLabel}.`,
    });
  }

  return links;
}
