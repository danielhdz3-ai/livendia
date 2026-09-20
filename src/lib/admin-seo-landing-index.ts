/**
 * Índice maestro de landing pages SEO publicadas — misma fuente de verdad que sitemap.ts.
 * Usado en /admin/seo para control editorial e indexación.
 */
import { getAllPosts } from "@/lib/blog-content";
import {
  CONTRATO_ALQUILER_LOCAL_BASE,
  getPublishedContratoAlquilerLocalCities,
} from "@/lib/contrato-alquiler-local-cities";
import {
  CONTRATO_ARRAS_LOCAL_BASE,
  getPublishedContratoArrasLocalCities,
} from "@/lib/contrato-arras-local-cities";
import {
  ADMINISTRACION_ALQUILER_LOCAL_BASE,
  getPublishedAdministracionAlquilerLocalCities,
} from "@/lib/administracion-alquiler-local-cities";
import {
  ADMINISTRACION_ALQUILER_TEMPORADA_LOCAL_BASE,
  getPublishedAdministracionAlquilerTemporadaLocalCities,
} from "@/lib/administracion-alquiler-temporada-local-cities";
import {
  REDACTAR_CONTRATO_ALQUILER_BASE,
  getPublishedRedactarContratoAlquilerLocalCities,
} from "@/lib/redactar-contrato-alquiler-local-cities";
import {
  CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE,
  getPublishedContratoAlquilerTemporadaLocalCities,
} from "@/lib/contrato-alquiler-temporada-local-cities";
import {
  SERVICIO_COMPLETO_COMPRA_LOCAL_BASE,
  getPublishedServicioCompletoCompraLocalCities,
} from "@/lib/servicio-completo-compra-local-cities";
import {
  SERVICIO_COMPLETO_VENTA_LOCAL_BASE,
  getPublishedServicioCompletoVentaLocalCities,
} from "@/lib/servicio-completo-venta-local-cities";
import {
  GESTORIA_INMOBILIARIA_LOCAL_BASE,
  getPublishedGestoriaInmobiliariaLocalCities,
} from "@/lib/gestoria-inmobiliaria-local-cities";
import {
  REVISION_DOCUMENTAL_POST_ARRAS_LOCAL_BASE,
  getPublishedRevisionDocumentalPostArrasLocalCities,
} from "@/lib/revision-documental-post-arras-local-cities";
import {
  GESTION_DOCUMENTAL_VENDEDOR_LOCAL_BASE,
  getPublishedGestionDocumentalVendedorLocalCities,
} from "@/lib/gestion-documental-vendedor-local-cities";
import {
  ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_LOCAL_BASE,
  getPublishedParkingTrasteroLocalCities,
} from "@/lib/acompanamiento-compra-parking-trastero-local-cities";
import {
  ACOMPANAMIENTO_ALQUILER_LOCAL_BASE,
  getPublishedAcompanamientoAlquilerLocalCities,
} from "@/lib/acompanamiento-alquiler-local-cities";
import {
  REVISION_CONTRATO_ALQUILER_LOCAL_BASE,
  getPublishedRevisionContratoAlquilerLocalCities,
} from "@/lib/revision-contrato-alquiler-local-cities";
import {
  ACOMPANAMIENTO_RESERVA_ARRAS_LOCAL_BASE,
  getPublishedAcompanamientoReservaArrasLocalCities,
} from "@/lib/acompanamiento-reserva-arras-local-cities";
import {
  CONTRATO_ALQUILER_HABITACION_LOCAL_BASE,
  getPublishedContratoAlquilerHabitacionLocalCities,
} from "@/lib/contrato-alquiler-habitacion-local-cities";
import {
  getPublishedVenderPisoSinAgenciaCities,
  localVenderPisoSinAgenciaHref,
} from "@/lib/vender-piso-sin-agencia-local-cities";
import {
  getPublishedVentaPisoParticularCities,
  localVentaPisoParticularSinAgenciaHref,
  VENTA_PISO_PARTICULAR_SIN_AGENCIA_LOCAL_BASE,
} from "@/lib/venta-piso-particular-sin-agencia-local-cities";
import {
  getPublishedVenderPisoSinInmobiliariaCities,
  localVenderPisoSinInmobiliariaHref,
  VENDER_PISO_SIN_INMOBILIARIA_BASE,
} from "@/lib/vender-piso-sin-inmobiliaria-local-cities";
import { PILLAR_BARCELONA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-barcelona";
import { PILLAR_MADRID_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-madrid";
import { PILLAR_VALENCIA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-valencia";
import { PILLAR_SEVILLA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-sevilla";
import { PILLAR_BILBAO_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-bilbao";
import { PILLAR_MALAGA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-malaga";
import { PILLAR_GRANADA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-granada";
import { PILLAR_ZARAGOZA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-zaragoza";
import { CIUDADES_HUB_BASE, cityHubHref } from "@/lib/ciudades-hub";
import { HOME_COVERAGE_CITIES, HOME_COVERAGE_CITY_SLUGS } from "@/lib/home-coverage-cities";
import {
  CONTRATO_ENTRE_PARTICULARES_LOCAL_BASE,
  getPublishedContratoEntreParticularesLocalCities,
} from "@/lib/contrato-entre-particulares-local-cities";
import { getPublishedAdministracionAlquilerMetroLandings } from "@/lib/administracion-alquiler-metro-landings";
import {
  getPublishedPackArrasGestionLocalSlugs,
  getPublishedPackLauAdminLocalSlugs,
  localPackArrasGestionHref,
  localPackLauAdminHref,
} from "@/lib/pack-comercial-local-cities";
import {
  PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH,
  PACK_LAU_ADMIN_LANDING_PATH,
} from "@/lib/catalog.public";
export type AdminSeoLandingKind =
  | "local-ciudad"
  | "barrio-amb"
  | "hub-servicio"
  | "hub-ciudad"
  | "pillar"
  | "blog"
  | "pack";

export type AdminSeoLandingEntry = {
  id: string;
  serviceId: string;
  serviceLabel: string;
  serviceOrder: number;
  city: string;
  citySortKey: string;
  barrioAmb: string | null;
  kind: AdminSeoLandingKind;
  name: string;
  slug: string;
  path: string;
};

export type AdminSeoLandingIndex = {
  generatedAt: string;
  entries: AdminSeoLandingEntry[];
  stats: {
    total: number;
    byService: Record<string, number>;
    byCity: Record<string, number>;
    barcelonaBarrios: number;
    localCiudad: number;
    hubs: number;
    blog: number;
  };
};

type LocalCityRow = {
  slug: string;
  city: string;
  metaTitle?: string;
  heroH1?: string;
};

type LocalCitySource = {
  serviceId: string;
  serviceLabel: string;
  serviceOrder: number;
  getPublished: () => LocalCityRow[];
  href: (slug: string) => string;
};

const BARCELONA_AMB_SLUGS = new Set([
  "hospitalet-de-llobregat",
  "cornella-de-llobregat",
  "esplugues",
  "sant-joan-despi",
  "sant-adria",
  "castelldefels",
  "sant-boi",
  "gava",
  "mollet-del-valles",
  "sant-cugat",
  "badalona",
  "l-hospitalet",
  "cornella",
]);

const BARCELONA_DISTRICT_CITY_NAMES = new Set([
  "Les Corts",
  "Gràcia",
  "Eixample",
  "Sants-Montjuïc",
  "Sant Martí",
  "Sarrià-Sant Gervasi",
  "Nou Barris",
  "Ciutat Vella",
  "Horta-Guinardó",
  "Sant Andreu",
  "Poblenou",
  "Pedralbes",
  "El Raval",
  "El Born",
  "Barri Gòtic",
  "La Barceloneta",
  "Sarrià",
  "Vila de Gràcia",
  "Vila Olímpica",
  "Sagrada Família",
  "L'Hospitalet",
  "Cornellà",
  "Esplugues",
  "Sant Joan Despí",
  "Sant Adrià",
  "Castelldefels",
  "Sant Boi",
  "Gavà",
  "Mollet",
  "Sant Cugat",
  "Badalona",
]);

const SERVICE_HUB_LABELS: Record<string, string> = {
  "administracion-alquiler": "Administración de alquiler",
  "administracion-alquiler-temporada": "Administración alquiler temporada",
  "contrato-alquiler-habitacion": "Contrato alquiler habitación",
  "contrato-alquiler-lau": "Contrato alquiler LAU",
  "contrato-alquiler-temporada": "Contrato alquiler temporada",
  "contrato-arras-penitenciales": "Contrato arras penitenciales",
  "vender-piso-sin-agencia": "Vender piso sin agencia",
  "contrato-entre-particulares-local": "Contrato entre particulares (hub)",
  "servicio-completo-compra": "Servicio completo compra",
  "acompanamiento-compra-parking-trastero": "Compra parking/trastero",
  "acompanamiento-compra-parking-trastero-local": "Compra parking/trastero (local hub)",
  "servicio-completo-venta": "Servicio completo venta",
  "revision-documental-post-arras": "Revisión documental post-arras",
  "revision-contrato-alquiler": "Revisión contrato alquiler",
  "revision-contrato-alquiler-local": "Revisión contrato alquiler (local hub)",
  "acompanamiento-reserva-arras-local": "Acompañamiento reserva arras (local hub)",
  "acompanamiento-alquiler": "Acompañamiento alquiler",
  "acompanamiento-alquiler-local": "Acompañamiento alquiler (local hub)",
  "gestion-documental-vendedor": "Gestión documental vendedor",
  "reserva-de-compra": "Reserva de compra",
  "acompanamiento-reserva-arras": "Acompañamiento reserva arras",
  "contrato-de-arras": "Contrato de arras",
  "contrato-de-alquiler": "Contrato de alquiler",
  "redactar-contrato-alquiler": "Redactar contrato alquiler (hub)",
  "contrato-alquiler-local": "Contrato alquiler LAU (local hub)",
  "contrato-arras-local": "Contrato arras (local hub)",
  "administracion-alquiler-local": "Administración alquiler (local hub)",
  "administracion-alquiler-temporada-local": "Admin. alquiler temporada (local hub)",
  "contrato-alquiler-temporada-local": "Contrato temporada (local hub)",
  "servicio-completo-compra-local": "Servicio completo compra (local hub)",
  "servicio-completo-venta-local": "Servicio completo venta (local hub)",
  "venta-piso-particular-sin-agencia": "Venta piso particular sin agencia (hub AMB)",
  "pack-contrato-lau-administracion-alquiler": "Pack LAU + administración",
  "pack-arras-gestion-documental-vendedor": "Pack arras + gestión documental",
};

const SERVICE_HUB_SLUGS = Object.keys(SERVICE_HUB_LABELS);

const LOCAL_CITY_SOURCES: LocalCitySource[] = [
  {
    serviceId: "contrato-alquiler-local",
    serviceLabel: "Contrato alquiler LAU",
    serviceOrder: 10,
    getPublished: getPublishedContratoAlquilerLocalCities,
    href: (slug) => `${CONTRATO_ALQUILER_LOCAL_BASE}/${slug}`,
  },
  {
    serviceId: "redactar-contrato-alquiler",
    serviceLabel: "Redactar contrato alquiler",
    serviceOrder: 11,
    getPublished: getPublishedRedactarContratoAlquilerLocalCities,
    href: (slug) => `${REDACTAR_CONTRATO_ALQUILER_BASE}/${slug}`,
  },
  {
    serviceId: "contrato-alquiler-habitacion",
    serviceLabel: "Contrato alquiler habitación",
    serviceOrder: 12,
    getPublished: getPublishedContratoAlquilerHabitacionLocalCities,
    href: (slug) => `${CONTRATO_ALQUILER_HABITACION_LOCAL_BASE}/${slug}`,
  },
  {
    serviceId: "contrato-alquiler-temporada-local",
    serviceLabel: "Contrato alquiler temporada",
    serviceOrder: 13,
    getPublished: getPublishedContratoAlquilerTemporadaLocalCities,
    href: (slug) => `${CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE}/${slug}`,
  },
  {
    serviceId: "administracion-alquiler-local",
    serviceLabel: "Administración de alquiler",
    serviceOrder: 20,
    getPublished: getPublishedAdministracionAlquilerLocalCities,
    href: (slug) => `${ADMINISTRACION_ALQUILER_LOCAL_BASE}/${slug}`,
  },
  {
    serviceId: "administracion-alquiler-temporada-local",
    serviceLabel: "Administración alquiler temporada",
    serviceOrder: 21,
    getPublished: getPublishedAdministracionAlquilerTemporadaLocalCities,
    href: (slug) => `${ADMINISTRACION_ALQUILER_TEMPORADA_LOCAL_BASE}/${slug}`,
  },
  {
    serviceId: "revision-contrato-alquiler-local",
    serviceLabel: "Revisión contrato alquiler",
    serviceOrder: 22,
    getPublished: getPublishedRevisionContratoAlquilerLocalCities,
    href: (slug) => `${REVISION_CONTRATO_ALQUILER_LOCAL_BASE}/${slug}`,
  },
  {
    serviceId: "acompanamiento-alquiler-local",
    serviceLabel: "Acompañamiento alquiler",
    serviceOrder: 23,
    getPublished: getPublishedAcompanamientoAlquilerLocalCities,
    href: (slug) => `${ACOMPANAMIENTO_ALQUILER_LOCAL_BASE}/${slug}`,
  },
  {
    serviceId: "contrato-arras-local",
    serviceLabel: "Contrato de arras",
    serviceOrder: 30,
    getPublished: getPublishedContratoArrasLocalCities,
    href: (slug) => `${CONTRATO_ARRAS_LOCAL_BASE}/${slug}`,
  },
  {
    serviceId: "revision-documental-post-arras",
    serviceLabel: "Revisión documental post-arras",
    serviceOrder: 31,
    getPublished: getPublishedRevisionDocumentalPostArrasLocalCities,
    href: (slug) => `${REVISION_DOCUMENTAL_POST_ARRAS_LOCAL_BASE}/${slug}`,
  },
  {
    serviceId: "gestion-documental-vendedor",
    serviceLabel: "Gestión documental vendedor",
    serviceOrder: 32,
    getPublished: getPublishedGestionDocumentalVendedorLocalCities,
    href: (slug) => `${GESTION_DOCUMENTAL_VENDEDOR_LOCAL_BASE}/${slug}`,
  },
  {
    serviceId: "acompanamiento-reserva-arras-local",
    serviceLabel: "Acompañamiento reserva arras",
    serviceOrder: 33,
    getPublished: getPublishedAcompanamientoReservaArrasLocalCities,
    href: (slug) => `${ACOMPANAMIENTO_RESERVA_ARRAS_LOCAL_BASE}/${slug}`,
  },
  {
    serviceId: "servicio-completo-compra-local",
    serviceLabel: "Servicio completo compra",
    serviceOrder: 40,
    getPublished: getPublishedServicioCompletoCompraLocalCities,
    href: (slug) => `${SERVICIO_COMPLETO_COMPRA_LOCAL_BASE}/${slug}`,
  },
  {
    serviceId: "servicio-completo-venta-local",
    serviceLabel: "Servicio completo venta",
    serviceOrder: 41,
    getPublished: getPublishedServicioCompletoVentaLocalCities,
    href: (slug) => `${SERVICIO_COMPLETO_VENTA_LOCAL_BASE}/${slug}`,
  },
  {
    serviceId: "acompanamiento-compra-parking-trastero-local",
    serviceLabel: "Compra parking / trastero",
    serviceOrder: 42,
    getPublished: getPublishedParkingTrasteroLocalCities,
    href: (slug) => `${ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_LOCAL_BASE}/${slug}`,
  },
  {
    serviceId: "contrato-entre-particulares-local",
    serviceLabel: "Contrato entre particulares",
    serviceOrder: 43,
    getPublished: getPublishedContratoEntreParticularesLocalCities,
    href: (slug) => `${CONTRATO_ENTRE_PARTICULARES_LOCAL_BASE}/${slug}`,
  },
  {
    serviceId: "gestoria-inmobiliaria",
    serviceLabel: "Gestoría inmobiliaria",
    serviceOrder: 50,
    getPublished: getPublishedGestoriaInmobiliariaLocalCities,
    href: (slug) => `${GESTORIA_INMOBILIARIA_LOCAL_BASE}/${slug}`,
  },
  {
    serviceId: "vender-piso-sin-agencia",
    serviceLabel: "Vender piso sin agencia",
    serviceOrder: 60,
    getPublished: getPublishedVenderPisoSinAgenciaCities,
    href: localVenderPisoSinAgenciaHref,
  },
  {
    serviceId: "vender-piso-sin-inmobiliaria",
    serviceLabel: "Vender piso sin inmobiliaria",
    serviceOrder: 61,
    getPublished: getPublishedVenderPisoSinInmobiliariaCities,
    href: localVenderPisoSinInmobiliariaHref,
  },
  {
    serviceId: "venta-piso-particular-sin-agencia",
    serviceLabel: "Venta piso particular sin agencia (AMB)",
    serviceOrder: 62,
    getPublished: getPublishedVentaPisoParticularCities,
    href: localVentaPisoParticularSinAgenciaHref,
  },
];

const PILLAR_PATHS: Record<string, string> = {
  barcelona: PILLAR_BARCELONA_PATH,
  madrid: PILLAR_MADRID_PATH,
  valencia: PILLAR_VALENCIA_PATH,
  sevilla: PILLAR_SEVILLA_PATH,
  bilbao: PILLAR_BILBAO_PATH,
  malaga: PILLAR_MALAGA_PATH,
  granada: PILLAR_GRANADA_PATH,
  zaragoza: PILLAR_ZARAGOZA_PATH,
};

const PACK_CITY_NAMES: Record<string, string> = {
  madrid: "Madrid",
  barcelona: "Barcelona",
  valencia: "Valencia",
  malaga: "Málaga",
  sevilla: "Sevilla",
};

function normalizeCitySort(city: string): string {
  return city
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase();
}

function displayName(row: LocalCityRow): string {
  return row.metaTitle?.split("—")[0]?.split("|")[0]?.trim() || row.heroH1 || row.city;
}

function detectBarcelonaBarrio(slug: string, city: string): string | null {
  if (slug === "barcelona") return null;
  if (slug.startsWith("barcelona-")) return city;
  if (BARCELONA_AMB_SLUGS.has(slug)) return city;
  if (BARCELONA_DISTRICT_CITY_NAMES.has(city)) return city;
  return null;
}

function parentCityForEntry(slug: string, city: string): string {
  const barrio = detectBarcelonaBarrio(slug, city);
  if (barrio) return "Barcelona (área metropolitana)";
  return city;
}

function pushLocalCityEntries(entries: AdminSeoLandingEntry[], source: LocalCitySource): void {
  for (const row of source.getPublished()) {
    const barrioAmb = detectBarcelonaBarrio(row.slug, row.city);
    const parentCity = parentCityForEntry(row.slug, row.city);
    entries.push({
      id: `${source.serviceId}:${row.slug}`,
      serviceId: source.serviceId,
      serviceLabel: source.serviceLabel,
      serviceOrder: source.serviceOrder,
      city: parentCity,
      citySortKey: normalizeCitySort(parentCity),
      barrioAmb,
      kind: barrioAmb ? "barrio-amb" : "local-ciudad",
      name: displayName(row),
      slug: row.slug,
      path: source.href(row.slug),
    });
  }
}

function compareEntries(a: AdminSeoLandingEntry, b: AdminSeoLandingEntry): number {
  if (a.serviceOrder !== b.serviceOrder) return a.serviceOrder - b.serviceOrder;
  if (a.citySortKey !== b.citySortKey) return a.citySortKey.localeCompare(b.citySortKey, "es");
  const barrioA = a.barrioAmb ?? "";
  const barrioB = b.barrioAmb ?? "";
  if (barrioA !== barrioB) return barrioA.localeCompare(barrioB, "es");
  return a.name.localeCompare(b.name, "es");
}

export function buildAdminSeoLandingIndex(): AdminSeoLandingIndex {
  const entries: AdminSeoLandingEntry[] = [];

  for (const source of LOCAL_CITY_SOURCES) {
    pushLocalCityEntries(entries, source);
  }

  for (const landing of getPublishedAdministracionAlquilerMetroLandings()) {
    const key = landing.segments.join("/");
    const isBarcelonaCity = landing.segments[0] === "barcelona";
    const barrioAmb = landing.zoneLabel;
    entries.push({
      id: `administracion-alquiler-metro:${key}`,
      serviceId: "administracion-alquiler-metro",
      serviceLabel: "Administración alquiler (barrio / municipio AMB)",
      serviceOrder: 20.5,
      city: isBarcelonaCity ? "Barcelona (distritos y barrios)" : "Barcelona (área metropolitana)",
      citySortKey: normalizeCitySort("Barcelona"),
      barrioAmb,
      kind: "barrio-amb",
      name: landing.h1,
      slug: key,
      path: landing.path,
    });
  }

  for (const slug of getPublishedPackLauAdminLocalSlugs()) {
    entries.push({
      id: `pack-lau-admin:${slug}`,
      serviceId: "pack-lau-admin",
      serviceLabel: "Pack LAU + administración",
      serviceOrder: 70,
      city: PACK_CITY_NAMES[slug] ?? slug,
      citySortKey: normalizeCitySort(PACK_CITY_NAMES[slug] ?? slug),
      barrioAmb: null,
      kind: "pack",
      name: `Pack LAU + admin — ${PACK_CITY_NAMES[slug] ?? slug}`,
      slug,
      path: localPackLauAdminHref(slug),
    });
  }

  for (const slug of getPublishedPackArrasGestionLocalSlugs()) {
    entries.push({
      id: `pack-arras-gestion:${slug}`,
      serviceId: "pack-arras-gestion",
      serviceLabel: "Pack arras + gestión documental",
      serviceOrder: 71,
      city: PACK_CITY_NAMES[slug] ?? slug,
      citySortKey: normalizeCitySort(PACK_CITY_NAMES[slug] ?? slug),
      barrioAmb: null,
      kind: "pack",
      name: `Pack arras + gestión — ${PACK_CITY_NAMES[slug] ?? slug}`,
      slug,
      path: localPackArrasGestionHref(slug),
    });
  }

  entries.push(
    {
      id: "pack-lau-admin:nacional",
      serviceId: "pack-lau-admin",
      serviceLabel: "Pack LAU + administración",
      serviceOrder: 70,
      city: "Nacional",
      citySortKey: "aaa-nacional",
      barrioAmb: null,
      kind: "pack",
      name: "Pack LAU + administración (nacional)",
      slug: "nacional",
      path: PACK_LAU_ADMIN_LANDING_PATH,
    },
    {
      id: "pack-arras-gestion:nacional",
      serviceId: "pack-arras-gestion",
      serviceLabel: "Pack arras + gestión documental",
      serviceOrder: 71,
      city: "Nacional",
      citySortKey: "aaa-nacional",
      barrioAmb: null,
      kind: "pack",
      name: "Pack arras + gestión documental (nacional)",
      slug: "nacional",
      path: PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH,
    },
  );

  for (const slug of SERVICE_HUB_SLUGS) {
    entries.push({
      id: `hub-servicio:${slug}`,
      serviceId: slug,
      serviceLabel: SERVICE_HUB_LABELS[slug] ?? slug,
      serviceOrder: 5,
      city: "Nacional",
      citySortKey: "aaa-nacional",
      barrioAmb: null,
      kind: "hub-servicio",
      name: SERVICE_HUB_LABELS[slug] ?? slug,
      slug,
      path: `/servicios/${slug}`,
    });
  }

  entries.push({
    id: "hub:gestoria",
    serviceId: "gestoria-inmobiliaria",
    serviceLabel: "Gestoría inmobiliaria",
    serviceOrder: 50,
    city: "Nacional",
    citySortKey: "aaa-nacional",
    barrioAmb: null,
    kind: "hub-servicio",
    name: "Gestoría inmobiliaria (hub)",
    slug: "gestoria",
    path: GESTORIA_INMOBILIARIA_LOCAL_BASE,
  });

  entries.push({
    id: "hub:vender-sin-inmobiliaria",
    serviceId: "vender-piso-sin-inmobiliaria",
    serviceLabel: "Vender piso sin inmobiliaria",
    serviceOrder: 61,
    city: "Nacional",
    citySortKey: "aaa-nacional",
    barrioAmb: null,
    kind: "hub-servicio",
    name: "Vender piso sin inmobiliaria (hub)",
    slug: "hub",
    path: VENDER_PISO_SIN_INMOBILIARIA_BASE,
  });

  entries.push({
    id: "hub:venta-particular-amb",
    serviceId: "venta-piso-particular-sin-agencia",
    serviceLabel: "Venta piso particular sin agencia (AMB)",
    serviceOrder: 62,
    city: "Barcelona (área metropolitana)",
    citySortKey: normalizeCitySort("Barcelona"),
    barrioAmb: null,
    kind: "hub-servicio",
    name: "Venta piso particular sin agencia (hub AMB)",
    slug: "hub",
    path: VENTA_PISO_PARTICULAR_SIN_AGENCIA_LOCAL_BASE,
  });

  entries.push({
    id: "hub:ciudades",
    serviceId: "ciudades-hub",
    serviceLabel: "Hub ciudades",
    serviceOrder: 80,
    city: "Nacional",
    citySortKey: "aaa-nacional",
    barrioAmb: null,
    kind: "hub-ciudad",
    name: "Hub ciudades Livendia",
    slug: "ciudades",
    path: CIUDADES_HUB_BASE,
  });

  for (const slug of HOME_COVERAGE_CITY_SLUGS) {
    const meta = HOME_COVERAGE_CITIES.find((c) => c.slug === slug);
    entries.push({
      id: `hub-ciudad:${slug}`,
      serviceId: "ciudades-hub",
      serviceLabel: "Hub ciudad",
      serviceOrder: 80,
      city: meta?.name ?? slug,
      citySortKey: normalizeCitySort(meta?.name ?? slug),
      barrioAmb: null,
      kind: "hub-ciudad",
      name: `Hub ${meta?.name ?? slug}`,
      slug,
      path: cityHubHref(slug),
    });
  }

  for (const row of getPublishedVenderPisoSinInmobiliariaCities()) {
    const pillarPath = PILLAR_PATHS[row.slug];
    if (!pillarPath) continue;
    entries.push({
      id: `pillar:${row.slug}`,
      serviceId: "vender-piso-sin-inmobiliaria",
      serviceLabel: "Vender piso sin inmobiliaria (pilar)",
      serviceOrder: 61,
      city: row.city,
      citySortKey: normalizeCitySort(row.city),
      barrioAmb: null,
      kind: "pillar",
      name: `Pilar vender sin inmobiliaria — ${row.city}`,
      slug: row.slug,
      path: pillarPath,
    });
  }

  for (const post of getAllPosts()) {
    entries.push({
      id: `blog:${post.slug}`,
      serviceId: "blog",
      serviceLabel: "Blog",
      serviceOrder: 90,
      city: "Nacional",
      citySortKey: "aaa-nacional",
      barrioAmb: null,
      kind: "blog",
      name: post.title,
      slug: post.slug,
      path: `/blog/${post.slug}`,
    });
  }

  entries.sort(compareEntries);

  const byService: Record<string, number> = {};
  const byCity: Record<string, number> = {};
  let barcelonaBarrios = 0;

  for (const e of entries) {
    byService[e.serviceLabel] = (byService[e.serviceLabel] ?? 0) + 1;
    byCity[e.city] = (byCity[e.city] ?? 0) + 1;
    if (e.barrioAmb) barcelonaBarrios += 1;
  }

  return {
    generatedAt: new Date().toISOString(),
    entries,
    stats: {
      total: entries.length,
      byService,
      byCity,
      barcelonaBarrios,
      localCiudad: entries.filter((e) => e.kind === "local-ciudad").length,
      hubs: entries.filter((e) => e.kind === "hub-servicio" || e.kind === "hub-ciudad").length,
      blog: entries.filter((e) => e.kind === "blog").length,
    },
  };
}

export function groupEntriesByService(entries: AdminSeoLandingEntry[]): { serviceLabel: string; items: AdminSeoLandingEntry[] }[] {
  const map = new Map<string, AdminSeoLandingEntry[]>();
  for (const e of entries) {
    const list = map.get(e.serviceLabel) ?? [];
    list.push(e);
    map.set(e.serviceLabel, list);
  }
  return [...map.entries()]
    .map(([serviceLabel, items]) => ({
      serviceLabel,
      items: [...items].sort((a, b) => {
        if (a.citySortKey !== b.citySortKey) return a.citySortKey.localeCompare(b.citySortKey, "es");
        return (a.barrioAmb ?? "").localeCompare(b.barrioAmb ?? "", "es");
      }),
    }))
    .sort((a, b) => {
      const orderA = a.items[0]?.serviceOrder ?? 999;
      const orderB = b.items[0]?.serviceOrder ?? 999;
      return orderA - orderB || a.serviceLabel.localeCompare(b.serviceLabel, "es");
    });
}

export function groupEntriesByCity(entries: AdminSeoLandingEntry[]): { city: string; items: AdminSeoLandingEntry[] }[] {
  const map = new Map<string, AdminSeoLandingEntry[]>();
  for (const e of entries) {
    const list = map.get(e.city) ?? [];
    list.push(e);
    map.set(e.city, list);
  }
  return [...map.entries()]
    .map(([city, items]) => ({
      city,
      items: [...items].sort((a, b) => {
        if (a.serviceOrder !== b.serviceOrder) return a.serviceOrder - b.serviceOrder;
        return (a.barrioAmb ?? a.name).localeCompare(b.barrioAmb ?? b.name, "es");
      }),
    }))
    .sort((a, b) => a.city.localeCompare(b.city, "es"));
}

export function getBarcelonaBarrioEntries(entries: AdminSeoLandingEntry[]): AdminSeoLandingEntry[] {
  return entries
    .filter((e) => e.barrioAmb !== null)
    .sort((a, b) => {
      if (a.serviceOrder !== b.serviceOrder) return a.serviceOrder - b.serviceOrder;
      return (a.barrioAmb ?? "").localeCompare(b.barrioAmb ?? "", "es");
    });
}
