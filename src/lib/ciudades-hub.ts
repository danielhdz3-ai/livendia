import {
  ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL,
  CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL,
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL,
  RESERVA_DE_COMPRA_PRICE_LABEL,
  REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
} from "@/lib/catalog.public";
import {
  HOME_COVERAGE_CITIES,
  HOME_COVERAGE_CITY_SLUGS,
  type HomeCoverageCity,
  type HomeCoverageCitySlug,
} from "@/lib/home-coverage-cities";
import { PILLAR_BARCELONA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-barcelona";
import { PILLAR_MADRID_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-madrid";
import { PILLAR_MALAGA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-malaga";
import { PILLAR_SEVILLA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-sevilla";
import { PILLAR_VALENCIA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-valencia";
import { PILLAR_BILBAO_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-bilbao";
import { PILLAR_GRANADA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-granada";
import { PILLAR_ZARAGOZA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-zaragoza";
import { VENTA_PISO_PARTICULAR_SIN_AGENCIA_LOCAL_BASE } from "@/lib/venta-piso-particular-sin-agencia-local-cities";

export const CIUDADES_HUB_BASE = "/ciudades";

export function cityHubHref(slug: HomeCoverageCitySlug): string {
  return `${CIUDADES_HUB_BASE}/${slug}`;
}

export function getCityHub(slug: string): HomeCoverageCity | undefined {
  return HOME_COVERAGE_CITIES.find((c) => c.slug === slug);
}

export function isCityHubSlug(slug: string): slug is HomeCoverageCitySlug {
  return (HOME_COVERAGE_CITY_SLUGS as readonly string[]).includes(slug);
}

export const CITY_HUB_TAGLINES: Record<HomeCoverageCitySlug, string> = {
  madrid: "Capital y corredor del Henares: alquiler, arras y venta entre particulares.",
  valencia: "Ciudad y litoral: contratos LAU, habitación y gestión de alquileres.",
  barcelona: "Área metropolitana y CCCat: arras, habitación y venta sin agencia.",
  malaga: "Costa y provincia: gestoría online con precios cerrados.",
  sevilla: "Capital andaluza: compraventa, contratos y administración de alquiler.",
  bilbao: "Gran Bilbao y Bizkaia: contratos, arras y venta entre particulares.",
  granada: "Capital y área metropolitana: gestoría online con tarifas planas.",
  zaragoza: "Aragón: compraventa, LAU y administración de alquileres.",
};

export const CITY_PILLAR_PATHS: Partial<Record<HomeCoverageCitySlug, string>> = {
  barcelona: PILLAR_BARCELONA_PATH,
  madrid: PILLAR_MADRID_PATH,
  valencia: PILLAR_VALENCIA_PATH,
  malaga: PILLAR_MALAGA_PATH,
  sevilla: PILLAR_SEVILLA_PATH,
  bilbao: PILLAR_BILBAO_PATH,
  granada: PILLAR_GRANADA_PATH,
  zaragoza: PILLAR_ZARAGOZA_PATH,
};

export function getCityHubMeta(city: HomeCoverageCity) {
  return {
    title: `Servicios de gestoría inmobiliaria en ${city.name}: todo lo que ofrecemos`,
    description: `Directorio de servicios Livendia en ${city.name}: gestoría, contratos LAU y arras, venta entre particulares, administración de alquileres y compraventa. Precios publicados y enlaces a cada trámite — sin venta directa en esta página.`,
  };
}

/** Imagen destacada por ciudad (hub índice y páginas locales). */
export const CITY_HUB_IMAGES: Record<HomeCoverageCitySlug, { src: string; alt: string }> = {
  madrid: { src: "/images/madrid.jpg", alt: "Skyline de Madrid — gestoría inmobiliaria Livendia" },
  valencia: { src: "/images/valencia1.jpg", alt: "Ciudad de Valencia — gestoría inmobiliaria Livendia" },
  barcelona: { src: "/images/barcelona2.jpg", alt: "Barcelona y área metropolitana — gestoría Livendia" },
  malaga: { src: "/images/malaga.jpg", alt: "Málaga, plaza de toros y puerto — gestoría inmobiliaria Livendia" },
  sevilla: { src: "/images/sevilla2.jpg", alt: "Sevilla — gestoría inmobiliaria Livendia" },
  bilbao: { src: "/images/bilbao2.jpg", alt: "Bilbao — gestoría inmobiliaria Livendia" },
  granada: { src: "/images/tipo2.jpg", alt: "Granada — gestoría inmobiliaria Livendia" },
  zaragoza: { src: "/images/zaragoza.jpg", alt: "Zaragoza — gestoría inmobiliaria Livendia" },
};

type LocalServiceField = keyof Pick<
  HomeCoverageCity,
  | "gestoriaHref"
  | "venderSinAgenciaHref"
  | "ventaLocalHref"
  | "compraHref"
  | "administracionHref"
  | "temporadaHref"
  | "parkingTrasteroHref"
  | "habitacionHref"
  | "arrasLocalHref"
>;

export type CiudadesLocalServiceRow = {
  id: string;
  title: string;
  price: string;
  description: string;
  field: LocalServiceField;
  nationalHref?: string;
};

/** Servicios con landing local en al menos una ciudad prioritiva. */
export const CIUDADES_LOCAL_SERVICES: readonly CiudadesLocalServiceRow[] = [
  {
    id: "gestoria",
    title: "Gestoría inmobiliaria",
    price: "Precio cerrado",
    description: "Compraventa, contratos LAU/arras y administración con gestor dedicado y panel online.",
    field: "gestoriaHref",
    nationalHref: "/gestoria",
  },
  {
    id: "vender-sin-agencia",
    title: "Vender piso sin agencia",
    price: SERVICIO_COMPLETO_CV_PRICE_LABEL,
    description: "Venta entre particulares con arras, documentación y acompañamiento hasta notaría.",
    field: "venderSinAgenciaHref",
  },
  {
    id: "venta-completa",
    title: "Servicio completo de venta",
    price: SERVICIO_COMPLETO_CV_PRICE_LABEL,
    description: "Desde la reserva o arras hasta la escritura, sin comisión de inmobiliaria.",
    field: "ventaLocalHref",
    nationalHref: "/servicios/servicio-completo-venta",
  },
  {
    id: "compra-completa",
    title: "Comprar con garantías",
    price: SERVICIO_COMPLETO_CV_PRICE_LABEL,
    description: "Revisión documental, arras y escritura con gestor que defiende tus intereses.",
    field: "compraHref",
    nationalHref: "/servicios/servicio-completo-compra",
  },
  {
    id: "administracion",
    title: "Administración de alquiler",
    price: "49 €/mes",
    description: "Gestión de incidencias, inquilino y renovaciones. Sin permanencia.",
    field: "administracionHref",
    nationalHref: "/servicios/administracion-alquiler",
  },
  {
    id: "habitacion",
    title: "Contrato alquiler habitación",
    price: CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
    description: "Piso compartido: redacción LAU, inventario y asesoramiento por teléfono.",
    field: "habitacionHref",
    nationalHref: "/servicios/contrato-alquiler-habitacion",
  },
  {
    id: "arras",
    title: "Contrato de arras",
    price: CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
    description: "Penitenciales o confirmatorias con revisión de condiciones antes de firmar.",
    field: "arrasLocalHref",
    nationalHref: "/servicios/contrato-arras-local",
  },
  {
    id: "temporada",
    title: "Contrato alquiler temporada",
    price: CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL,
    description: "Estancias temporales con cláusulas adaptadas y gestor asignado.",
    field: "temporadaHref",
    nationalHref: "/servicios/contrato-alquiler-temporada",
  },
  {
    id: "parking",
    title: "Compra parking o trastero",
    price: ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL,
    description: "Revisión de escritura, comunidad y cargas antes de firmar.",
    field: "parkingTrasteroHref",
    nationalHref: "/servicios/acompanamiento-compra-parking-trastero",
  },
] as const;

export type CiudadesNationalService = {
  title: string;
  price: string;
  description: string;
  href: string;
};

/** Servicios 100 % online en toda España (sin landing local obligatoria). */
export const CIUDADES_NATIONAL_SERVICES: readonly CiudadesNationalService[] = [
  {
    title: "Contrato de alquiler LAU",
    price: CONTRATO_ALQUILER_LAU_PRICE_LABEL,
    description: "Piso completo con normativa vigente e inventario.",
    href: "/servicios/contrato-de-alquiler",
  },
  {
    title: "Revisión documental post-arras",
    price: REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL,
    description: "Para compradores: due diligence antes de la escritura.",
    href: "/servicios/revision-documental-post-arras",
  },
  {
    title: "Gestión documental vendedor",
    price: GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL,
    description: "Tras las arras: documentación y preparación de la venta.",
    href: "/servicios/gestion-documental-vendedor",
  },
  {
    title: "Reserva de compra",
    price: RESERVA_DE_COMPRA_PRICE_LABEL,
    description: "Revisión de la reserva antes de comprometerte.",
    href: "/servicios/reserva-de-compra",
  },
] as const;

export function getLocalServiceHref(city: HomeCoverageCity, field: LocalServiceField): string | undefined {
  return city[field];
}

export function getCiudadesIndexDescription(): string {
  return (
    "Directorio de servicios de gestoría inmobiliaria en Madrid, Barcelona, Valencia, Málaga y Sevilla. " +
    "Consulta contratos, venta entre particulares, administración de alquileres y compraventa con enlaces " +
    "a cada landing — precios publicados IVA incl. y mismo servicio online en toda España."
  );
}

export const BARCELONA_METRO_HUB_LINKS = {
  arras: "/servicios/contrato-arras-local",
  ventaParticular: VENTA_PISO_PARTICULAR_SIN_AGENCIA_LOCAL_BASE,
  habitacion: "/servicios/contrato-alquiler-habitacion",
} as const;
