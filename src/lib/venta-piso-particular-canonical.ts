import { localGestoriaCityVerticalHref } from "@/lib/gestoria-city-vertical-hub";
import {
  isPackArrasGestionLocalSlugPublished,
  localPackArrasGestionHref,
} from "@/lib/pack-comercial-local-cities";
import {
  BARCELONA_DISTRICT_VENTA_PARTICULAR_CITIES,
  BARCELONA_METRO_VENTA_PARTICULAR_CITIES,
} from "@/lib/venta-piso-particular-barcelona-metro";
import {
  VENTA_PISO_PARTICULAR_PUBLISHED_SLUGS,
} from "@/lib/venta-piso-particular-sin-agencia-local-cities";
import { localVenderPisoSinAgenciaHref } from "@/lib/vender-piso-sin-agencia-local-cities";

const VENTA_HEAD_BARCELONA = localVenderPisoSinAgenciaHref("barcelona");

const ZONE_LABEL: Record<string, string> = Object.fromEntries([
  ...BARCELONA_DISTRICT_VENTA_PARTICULAR_CITIES.map((c) => [c.slug, c.name]),
  ...BARCELONA_METRO_VENTA_PARTICULAR_CITIES.map((c) => [c.slug, c.name]),
]);

export type VentaParticularCanonicalHint = {
  zoneLabel: string;
  venderHeadHref: string;
  pack495Href: string | null;
  gestoriaCompraventaHref: string;
};

/**
 * Landings metro/distrito: intención barrio. La URL ganadora de ciudad para SEO/contratar es vender sin agencia Barcelona.
 */
export function getVentaParticularCanonicalHint(slug: string): VentaParticularCanonicalHint | null {
  if (!(VENTA_PISO_PARTICULAR_PUBLISHED_SLUGS as readonly string[]).includes(slug)) {
    return null;
  }
  return {
    zoneLabel: ZONE_LABEL[slug] ?? slug,
    venderHeadHref: VENTA_HEAD_BARCELONA,
    pack495Href: isPackArrasGestionLocalSlugPublished("barcelona")
      ? localPackArrasGestionHref("barcelona")
      : null,
    gestoriaCompraventaHref: localGestoriaCityVerticalHref("barcelona", "compraventa"),
  };
}
