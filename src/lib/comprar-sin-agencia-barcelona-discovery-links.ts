import {
  COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_CITIES,
} from "@/lib/comprar-piso-sin-agencia-bcn-metro-cities";
import {
  isServicioCompletoCompraLocalSlugPublished,
  localServicioCompletoCompraHref,
} from "@/lib/servicio-completo-compra-local-cities";
import { localComprarPisoSinAgenciaHref } from "@/lib/comprar-piso-sin-agencia-local-cities";

export type ComprarBarrioDiscoveryLink = {
  href: string;
  label: string;
  description: string;
  kind: "distrito" | "metro" | "hub890";
};

function shortCityLabel(city: string): string {
  return city.replace(/\s*\(Barcelona\)\s*/i, "").trim();
}

/**
 * Enlaces inversos desde comprar sin agencia Barcelona → distritos/municipios AMB (+ ficha 890 € local si existe).
 */
export function getComprarSinAgenciaBarcelonaDiscoveryLinks(
  hubSlug: string,
): ComprarBarrioDiscoveryLink[] {
  if (hubSlug !== "barcelona") return [];

  const links: ComprarBarrioDiscoveryLink[] = [];

  for (const def of COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_CITIES) {
    const isDistrito = def.slug.startsWith("barcelona-");
    const label = shortCityLabel(def.city);
    const comprarHref = localComprarPisoSinAgenciaHref(def.slug);
    const servicio890 = isServicioCompletoCompraLocalSlugPublished(def.slug)
      ? localServicioCompletoCompraHref(def.slug)
      : null;

    links.push({
      href: comprarHref,
      label: `Comprar sin agencia en ${label}`,
      description:
        servicio890 != null
          ? `Guía SEO comprador en ${label}. Contratar: misma tarifa 890 € (también en ${servicio890}).`
          : `Contenido local comprador en ${label} — enlaza con la landing principal de Barcelona.`,
      kind: isDistrito ? "distrito" : "metro",
    });
  }

  links.push({
    href: localServicioCompletoCompraHref("barcelona"),
    label: "Servicio completo de compra en Barcelona (890 €)",
    description: "Ficha producto con checkout — complementa la landing SEO «comprar sin agencia».",
    kind: "hub890",
  });

  return links;
}
