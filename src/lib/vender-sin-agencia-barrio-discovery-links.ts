import {
  BARCELONA_DISTRICT_VENTA_PARTICULAR_CITIES,
  BARCELONA_METRO_VENTA_PARTICULAR_CITIES,
  barcelonaMetroVentaParticularHref,
} from "@/lib/venta-piso-particular-barcelona-metro";
import { PILLAR_BARCELONA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-barcelona";

export type VenderBarrioDiscoveryLink = {
  href: string;
  label: string;
  description: string;
  kind: "distrito" | "metro" | "pilar";
};

/**
 * Enlaces inversos desde vender sin agencia (URL ganadora) hacia guías por barrio/municipio.
 * No sustituye la landing principal: refuerza rastreo long-tail sin borrar URLs.
 */
export function getVenderSinAgenciaBarrioDiscoveryLinks(venderCitySlug: string): VenderBarrioDiscoveryLink[] {
  if (venderCitySlug !== "barcelona") return [];

  const districts: VenderBarrioDiscoveryLink[] = BARCELONA_DISTRICT_VENTA_PARTICULAR_CITIES.map((c) => ({
    href: barcelonaMetroVentaParticularHref(c.slug),
    label: `Vender en ${c.shortName}`,
    description: `Guía SEO cuando ya tienes comprador en ${c.name} — complementa la landing principal de Barcelona.`,
    kind: "distrito",
  }));

  const metro: VenderBarrioDiscoveryLink[] = BARCELONA_METRO_VENTA_PARTICULAR_CITIES.map((c) => ({
    href: barcelonaMetroVentaParticularHref(c.slug),
    label: `Vender en ${c.shortName}`,
    description: `Área metropolitana: contenido local para ${c.name}. Contratar sigue en vender sin agencia Barcelona.`,
    kind: "metro",
  }));

  return [
    ...districts,
    ...metro,
    {
      href: PILLAR_BARCELONA_PATH,
      label: "Guía pilar: vender sin comisiones en Barcelona",
      description: "Contenido editorial largo enlazado con esta ficha de servicio.",
      kind: "pilar",
    },
  ];
}
