import {
  ADMINISTRACION_ALQUILER_BARCELONA_METRO_LANDINGS,
  administracionAlquilerMetroHref,
} from "@/lib/administracion-alquiler-barcelona-metro";
import {
  isContratoAlquilerLocalSlugPublished,
  localContratoAlquilerHref,
} from "@/lib/contrato-alquiler-local-cities";
import {
  isContratoArrasLocalSlugPublished,
  localContratoArrasHref,
} from "@/lib/contrato-arras-local-cities";
import { getLocalCityCardImage } from "@/lib/local-city-card-images";
import {
  isServicioCompletoCompraLocalSlugPublished,
  localServicioCompletoCompraHref,
} from "@/lib/servicio-completo-compra-local-cities";
export type BarcelonaZoneLink = {
  name: string;
  slug: string;
  heading: string;
  areaLabel:
    | "Ciudad · Cataluña"
    | "Distrito · Barcelona"
    | "Barrio · Barcelona"
    | "Área metropolitana · Cataluña"
    | "Cataluña";
  blurb: string;
  image: string;
  href: string;
};

const METRO_MUNICIPIO_TO_LOCAL: Record<string, string> = {
  "l-hospitalet": "hospitalet-de-llobregat",
  cornella: "cornella-de-llobregat",
  badalona: "badalona",
  "sant-cugat": "sant-cugat-del-valles",
  esplugues: "esplugues-de-llobregat",
  "sant-boi": "sant-boi-de-llobregat",
  gava: "gava",
  castelldefels: "castelldefels",
  "sant-joan-despi": "sant-joan-despi",
  "sant-adria": "sant-adria-de-besos",
  "mollet-del-valles": "mollet-del-valles",
};

const BARCELONA_SUBZONE_TO_CONTRATO: Record<string, string> = {
  "vila-de-gracia": "barcelona-gracia",
  "sagrada-familia": "barcelona-eixample",
  pedralbes: "barcelona-sarria-sant-gervasi",
};

function contratoLocalSlugForMetroEntry(
  entry: (typeof ADMINISTRACION_ALQUILER_BARCELONA_METRO_LANDINGS)[number],
): string | null {
  if (entry.segments[0] === "barcelona" && entry.segments[1]) {
    const sub = entry.segments[1];
    const mapped = BARCELONA_SUBZONE_TO_CONTRATO[sub] ?? `barcelona-${sub}`;
    if (isContratoAlquilerLocalSlugPublished(mapped)) return mapped;
    if (isContratoArrasLocalSlugPublished(mapped)) return mapped;
    if (isServicioCompletoCompraLocalSlugPublished(mapped)) return mapped;
    return null;
  }
  const localSlug = METRO_MUNICIPIO_TO_LOCAL[entry.slug] ?? entry.slug;
  if (isContratoAlquilerLocalSlugPublished(localSlug)) return localSlug;
  if (isContratoArrasLocalSlugPublished(localSlug)) return localSlug;
  if (isServicioCompletoCompraLocalSlugPublished(localSlug)) return localSlug;
  return null;
}

function hrefForContratoSlug(slug: string): string {
  if (isContratoAlquilerLocalSlugPublished(slug)) return localContratoAlquilerHref(slug);
  if (isContratoArrasLocalSlugPublished(slug)) return localContratoArrasHref(slug);
  return localServicioCompletoCompraHref(slug);
}

function zoneHrefForMetroEntry(
  entry: (typeof ADMINISTRACION_ALQUILER_BARCELONA_METRO_LANDINGS)[number],
): string {
  const contratoSlug = contratoLocalSlugForMetroEntry(entry);
  if (contratoSlug) return hrefForContratoSlug(contratoSlug);
  return administracionAlquilerMetroHref(entry.segments);
}

function imageSlugForMetroEntry(
  entry: (typeof ADMINISTRACION_ALQUILER_BARCELONA_METRO_LANDINGS)[number],
): string {
  const contratoSlug = contratoLocalSlugForMetroEntry(entry);
  if (contratoSlug) return contratoSlug;
  if (entry.segments[0] === "barcelona" && entry.segments[1]) {
    const sub = entry.segments[1];
    const mapped = BARCELONA_SUBZONE_TO_CONTRATO[sub] ?? `barcelona-${sub}`;
    return mapped;
  }
  return METRO_MUNICIPIO_TO_LOCAL[entry.slug] ?? entry.slug;
}

function areaLabelForMetroEntry(
  entry: (typeof ADMINISTRACION_ALQUILER_BARCELONA_METRO_LANDINGS)[number],
): BarcelonaZoneLink["areaLabel"] {
  if (entry.kind === "municipio") return "Área metropolitana · Cataluña";
  if (entry.kind === "subbarrio") return "Barrio · Barcelona";
  return "Distrito · Barcelona";
}

function blurbForMetroEntry(
  entry: (typeof ADMINISTRACION_ALQUILER_BARCELONA_METRO_LANDINGS)[number],
): string {
  if (entry.kind === "municipio") {
    return "Contratos LAU, arras y compraventa entre particulares con gestor Livendia y CCCat.";
  }
  if (entry.kind === "subbarrio") {
    return "Alquiler, habitación, temporada y arras adaptados al barrio y al mercado local.";
  }
  return "Contratos inmobiliarios por distrito: LAU, arras, administración de alquiler y panel online.";
}

function buildMetroZone(
  entry: (typeof ADMINISTRACION_ALQUILER_BARCELONA_METRO_LANDINGS)[number],
): BarcelonaZoneLink {
  const imageSlug = imageSlugForMetroEntry(entry);
  return {
    slug: entry.slug,
    name: entry.shortName,
    heading: `Contratos inmobiliarios en ${entry.shortName}`,
    areaLabel: areaLabelForMetroEntry(entry),
    blurb: blurbForMetroEntry(entry),
    image: getLocalCityCardImage(imageSlug),
    href: zoneHrefForMetroEntry(entry),
  };
}

function buildSimpleZone(
  slug: string,
  name: string,
  areaLabel: BarcelonaZoneLink["areaLabel"],
  blurb: string,
  href: string,
): BarcelonaZoneLink {
  return {
    slug,
    name,
    heading: `Contratos inmobiliarios en ${name}`,
    areaLabel,
    blurb,
    image: getLocalCityCardImage(slug),
    href,
  };
}

/** Barcelona capital + distritos, barrios finos y municipios AMB/Cataluña con landing publicada. */
export const CONTRATOS_BCN_CATALUNYA_ZONE_LINKS: readonly BarcelonaZoneLink[] = [
  buildSimpleZone(
    "barcelona",
    "Barcelona capital",
    "Ciudad · Cataluña",
    "Hub de contratos LAU, arras, habitación, temporada y administración de alquiler en la ciudad condal.",
    localContratoAlquilerHref("barcelona"),
  ),
  ...ADMINISTRACION_ALQUILER_BARCELONA_METRO_LANDINGS.map(buildMetroZone),
  buildSimpleZone(
    "sabadell",
    "Sabadell",
    "Área metropolitana · Cataluña",
    "Arras y compraventa entre particulares en el Vallès Occidental — gestoría online Livendia.",
    isContratoArrasLocalSlugPublished("sabadell")
      ? localContratoArrasHref("sabadell")
      : localServicioCompletoCompraHref("sabadell"),
  ),
  buildSimpleZone(
    "terrassa",
    "Terrassa",
    "Área metropolitana · Cataluña",
    "Contratos de arras y acompañamiento de compra en Terrassa con adaptación al CCCat.",
    isContratoArrasLocalSlugPublished("terrassa")
      ? localContratoArrasHref("terrassa")
      : localServicioCompletoCompraHref("terrassa"),
  ),
  buildSimpleZone(
    "baix-llobregat",
    "Baix Llobregat",
    "Cataluña",
    "Compraventa y arras en el corredor del Baix Llobregat — particulares sin comisión de agencia.",
    localServicioCompletoCompraHref("baix-llobregat"),
  ),
];
