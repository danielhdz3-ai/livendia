import {
  ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
  CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL,
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  REVISION_CONTRATO_ALQUILER_PRICE_LABEL,
} from "@/lib/catalog.public";

export type BlogContractPromoId =
  | "lau"
  | "arras"
  | "habitacion"
  | "temporada"
  | "admin"
  | "revision"
  | "barcelona";

export type BlogContractPromo = {
  id: BlogContractPromoId;
  eyebrow: string;
  title: string;
  body: string;
  priceLabel: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  ctaLabel: string;
};

export const BLOG_CONTRACT_PROMOS: Record<BlogContractPromoId, BlogContractPromo> = {
  lau: {
    id: "lau",
    eyebrow: "Contrato LAU",
    title: "Alquiler de vivienda habitual adaptado a la normativa 2026",
    body: "Redacción con inventario, fianza, cláusulas de prórroga e índice de referencia cuando aplique. Entrega en 48–72 h con gestor asignado.",
    priceLabel: `${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl.`,
    imageSrc: "/images/contratodealquiler.jpg",
    imageAlt: "Contrato de alquiler LAU — Livendia",
    href: "/servicios/contrato-de-alquiler",
    ctaLabel: "Contratar contrato LAU",
  },
  arras: {
    id: "arras",
    eyebrow: "Contrato de arras",
    title: "Arras penitenciales entre particulares con cláusulas revisadas",
    body: "Objeto, plazos, penalidades y documentación alineados a compraventa entre particulares — antes de la señal.",
    priceLabel: `${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl.`,
    imageSrc: "/images/contratodearras.jpg",
    imageAlt: "Contrato de arras penitenciales — Livendia",
    href: "/servicios/contrato-de-arras",
    ctaLabel: "Contratar arras",
  },
  habitacion: {
    id: "habitacion",
    eyebrow: "Alquiler habitación",
    title: "Contrato de habitación en piso compartido (ZMRT incluida)",
    body: "Normas de convivencia, reparto de suministros y límites de renta en Cataluña cuando la modalidad lo exige.",
    priceLabel: `${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl.`,
    imageSrc: "/images/contratos2.jpg",
    imageAlt: "Contrato alquiler habitación — Livendia",
    href: "/servicios/contrato-alquiler-habitacion",
    ctaLabel: "Contratar habitación",
  },
  temporada: {
    id: "temporada",
    eyebrow: "Alquiler temporada",
    title: "Contrato de temporada con causa acreditada",
    body: "Evita reclasificaciones a LAU: duración, motivo, inventario y cláusulas adaptadas al Decreto 147/1997.",
    priceLabel: `${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl.`,
    imageSrc: "/images/contratos6.jpg",
    imageAlt: "Contrato alquiler temporada — Livendia",
    href: "/servicios/contrato-alquiler-temporada",
    ctaLabel: "Contratar temporada",
  },
  admin: {
    id: "admin",
    eyebrow: "Administración alquiler",
    title: "Gestión mensual con topes de renta y panel online",
    body: "Cobros, incidencias, renovaciones y actualizaciones conforme a la Ley de Vivienda y LAU vigente.",
    priceLabel: `Desde ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}/mes IVA incl.`,
    imageSrc: "/images/gestoria20.jpg",
    imageAlt: "Administración de alquiler Livendia",
    href: "/servicios/administracion-alquiler",
    ctaLabel: "Ver administración",
  },
  revision: {
    id: "revision",
    eyebrow: "Revisión contrato",
    title: "Revisión exprés antes de firmar o renovar",
    body: "Detectamos cláusulas obsoletas tras los RDL 28/2026 y 29/2026 y la normativa autonómica aplicable.",
    priceLabel: `${REVISION_CONTRATO_ALQUILER_PRICE_LABEL} IVA incl.`,
    imageSrc: "/images/contratos.jpg",
    imageAlt: "Revisión contrato alquiler — Livendia",
    href: "/servicios/revision-contrato-alquiler",
    ctaLabel: "Solicitar revisión",
  },
  barcelona: {
    id: "barcelona",
    eyebrow: "Barcelona",
    title: "Hub de contratos inmobiliarios por barrio y municipio",
    body: "Eixample, Gràcia, Poblenou, Born, Sants-Montjuïc y enlace a landings locales con contexto catalán.",
    priceLabel: "Precios fijos en /precios",
    imageSrc: "/images/gestoria3.jpg",
    imageAlt: "Contratos inmobiliarios Barcelona — Livendia",
    href: "/contratos-inmobiliarios-barcelona",
    ctaLabel: "Contratos en Barcelona",
  },
};

export function getBlogContractPromo(id: string): BlogContractPromo | undefined {
  if (id in BLOG_CONTRACT_PROMOS) return BLOG_CONTRACT_PROMOS[id as BlogContractPromoId];
  return undefined;
}

export const BLOG_INLINE_MARKER_RE =
  /\[\[(GESTOR_BANNER|CONTRATO_BANNER:([a-z0-9-]+))\]\]/g;
