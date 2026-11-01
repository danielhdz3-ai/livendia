import type { ContratosBcnServiceSection } from "@/lib/contratos-inmobiliarios-barcelona-content";
import { CONTRATOS_BCN_SERVICE_SECTIONS } from "@/lib/contratos-inmobiliarios-barcelona-content";
import {
  ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
  ADMINISTRACION_ALQUILER_SLUG,
  CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
  CONTRATO_ALQUILER_HABITACION_SLUG,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_SLUG,
  CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL,
  CONTRATO_ALQUILER_TEMPORADA_SLUG,
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
} from "@/lib/catalog.public";
import {
  isAdministracionAlquilerLocalSlugPublished,
  localAdministracionAlquilerHref,
} from "@/lib/administracion-alquiler-local-cities";
import {
  isContratoAlquilerHabitacionLocalSlugPublished,
  localContratoAlquilerHabitacionHref,
} from "@/lib/contrato-alquiler-habitacion-local-cities";
import {
  isContratoAlquilerLocalSlugPublished,
  localContratoAlquilerHref,
} from "@/lib/contrato-alquiler-local-cities";
import {
  isContratoAlquilerTemporadaLocalSlugPublished,
  localContratoAlquilerTemporadaHref,
} from "@/lib/contrato-alquiler-temporada-local-cities";
import {
  isContratoArrasLocalSlugPublished,
  localContratoArrasHref,
} from "@/lib/contrato-arras-local-cities";
import {
  isServicioCompletoCompraLocalSlugPublished,
  localServicioCompletoCompraHref,
} from "@/lib/servicio-completo-compra-local-cities";
import { GESTORIA_INMOBILIARIA_LOCAL_BASE } from "@/lib/gestoria-inmobiliaria-local-cities";
import { CONTRATOS_INMOBILIARIOS_BARCELONA_PATH } from "@/lib/contratos-inmobiliarios-barcelona-content";

export type GestoriaCarouselScope = "all" | "alquiler" | "compraventa";

const SERVICE_SLUG_CANDIDATES: Record<string, readonly string[]> = {
  "les-corts": ["les-corts", "barcelona-les-corts"],
  "hospitalet-de-llobregat": ["hospitalet-de-llobregat", "barcelona-hospitalet-de-llobregat"],
};

function candidates(citySlug: string): readonly string[] {
  return SERVICE_SLUG_CANDIDATES[citySlug] ?? [citySlug];
}

function firstPublished(
  citySlug: string,
  check: (slug: string) => boolean,
): string | undefined {
  return candidates(citySlug).find(check);
}

function localOrNational(
  citySlug: string,
  check: (slug: string) => boolean,
  href: (slug: string) => string,
  fallback?: string,
): string | undefined {
  const slug = firstPublished(citySlug, check);
  if (slug) return href(slug);
  return fallback;
}

const ALQUILER_IDS = new Set(["lau", "temporada", "habitacion", "admin"]);
const COMPRAVENTA_IDS = new Set(["arras", "compraventa"]);

function substituteCity(text: string, city: string, region?: string): string {
  let out = text
    .replace(/Barcelona y área metropolitana/gi, `${city} y área metropolitana`)
    .replace(/Barcelona ciudad/gi, `${city}`)
    .replace(/en Barcelona/gi, `en ${city}`)
    .replace(/Barcelona/g, city);
  if (region) {
    out = out.replace(/Cataluña/g, region).replace(/marco catalán \(CCCat\)/gi, "normativa autonómica aplicable");
  }
  return out;
}

function buildFromBarcelonaTemplate(citySlug: string, cityLabel: string, region?: string): ContratosBcnServiceSection[] {
  const gestoriaHref = `${GESTORIA_INMOBILIARIA_LOCAL_BASE}/${citySlug}`;
  const arrasLocal = localOrNational(citySlug, isContratoArrasLocalSlugPublished, localContratoArrasHref, undefined);
  const lauLocal = localOrNational(citySlug, isContratoAlquilerLocalSlugPublished, localContratoAlquilerHref, undefined);
  const tempLocal = localOrNational(
    citySlug,
    isContratoAlquilerTemporadaLocalSlugPublished,
    localContratoAlquilerTemporadaHref,
    undefined,
  );
  const habLocal = localOrNational(
    citySlug,
    isContratoAlquilerHabitacionLocalSlugPublished,
    localContratoAlquilerHabitacionHref,
    undefined,
  );
  const adminLocal = localOrNational(
    citySlug,
    isAdministracionAlquilerLocalSlugPublished,
    localAdministracionAlquilerHref,
    undefined,
  );
  const compraLocal = localOrNational(
    citySlug,
    isServicioCompletoCompraLocalSlugPublished,
    localServicioCompletoCompraHref,
    gestoriaHref,
  );

  const localHrefs: Record<string, string | undefined> = {
    arras: arrasLocal,
    lau: lauLocal,
    temporada: tempLocal,
    habitacion: habLocal,
    compraventa: compraLocal ?? gestoriaHref,
    admin: adminLocal,
  };

  return CONTRATOS_BCN_SERVICE_SECTIONS.map((base, index) => ({
    ...base,
    title: substituteCity(base.title, cityLabel, region),
    lead: substituteCity(base.lead, cityLabel, region),
    localContext: substituteCity(base.localContext, cityLabel, region),
    imageAlt: substituteCity(base.imageAlt, cityLabel, region),
    heroImageAlt: substituteCity(base.heroImageAlt, cityLabel, region),
    localHref: localHrefs[base.id] ?? base.localHref,
    reverse: index % 2 === 1,
  }));
}

/** Carrusel + módulos de servicios para hubs /gestoria/[ciudad] y verticales. */
export function buildGestoriaServicesCarouselSections(
  citySlug: string,
  cityLabel: string,
  scope: GestoriaCarouselScope = "all",
  schemaAdministrativeArea?: string,
): readonly ContratosBcnServiceSection[] {
  let sections: ContratosBcnServiceSection[];
  if (citySlug === "barcelona" || citySlug === "les-corts") {
    sections = [...CONTRATOS_BCN_SERVICE_SECTIONS];
  } else {
    sections = buildFromBarcelonaTemplate(citySlug, cityLabel, schemaAdministrativeArea);
  }

  if (scope === "alquiler") {
    sections = sections.filter((s) => ALQUILER_IDS.has(s.id));
  } else if (scope === "compraventa") {
    sections = sections.filter((s) => COMPRAVENTA_IDS.has(s.id));
  }
  return sections.map((s) => ({
    ...s,
    carouselReadHref: gestoriaReadSectionHref(s),
  }));
}

export function gestoriaCarouselCopy(cityLabel: string) {
  return {
    eyebrow: "Explora servicios",
    title: `Todos los servicios de gestoría en ${cityLabel}`,
    subtitle:
      "Desliza, usa las flechas o déjalo avanzar solo. Cada tarjeta enlaza al apartado completo y a contratar online.",
  };
}

export function gestoriaReadSectionHref(section: ContratosBcnServiceSection): string {
  if (section.localHref) return section.localHref;
  if (section.id === "compraventa") return "#compraventa";
  if (section.id === "admin") return "#administracion";
  return "#contratos";
}

export function gestoriaContratosHubHref(citySlug: string): string | undefined {
  if (citySlug === "barcelona" || citySlug === "les-corts") {
    return CONTRATOS_INMOBILIARIOS_BARCELONA_PATH;
  }
  return undefined;
}

export const GESTORIA_CAROUSEL_PRICE_FALLBACK = {
  arras: `${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl.`,
  lau: `${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl.`,
  temporada: `${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl.`,
  habitacion: `${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl.`,
  compraventa: `Desde ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
  admin: ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
} as const;
