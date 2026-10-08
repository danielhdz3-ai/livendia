/**
 * Copy, pasos, imágenes y FAQ ampliada para hubs /gestoria/[ciudad]/alquiler|compraventa
 */

import type {
  GestoriaCityVertical,
  GestoriaVerticalServiceLink,
} from "@/lib/gestoria-city-vertical-hub";
import {
  ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
  CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL,
  REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
  SERVICE_IMAGES,
  servicePublicLandingPath,
  LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL,
  PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH,
} from "@/lib/catalog.public";

export type GestoriaVerticalServiceKey =
  | "admin"
  | "lau"
  | "redactar-lau"
  | "temporada"
  | "habitacion"
  | "revision-alquiler"
  | "pack-lau-admin"
  | "venta-completa"
  | "compra-completa"
  | "vender-sin-agencia"
  | "comprar-sin-agencia"
  | "arras"
  | "revision-post-arras"
  | "reserva-arras"
  | "reserva-nacional"
  | "pack-arras-gestion";

export type GestoriaVerticalServiceShowcase = {
  key: GestoriaVerticalServiceKey;
  href: string;
  price: string;
  sectionLabel: string;
  headline: string;
  body: string;
  image: string;
  imageAlt: string;
  cardTitle: string;
  cardMeta: string;
  steps: readonly string[];
  checklist: readonly string[];
  contratarSlug?: string;
};

export type GestoriaVerticalBenefit = {
  title: string;
  body: string;
};

export function inferGestoriaVerticalServiceKey(href: string): GestoriaVerticalServiceKey | undefined {
  if (href.includes("pack-contrato-lau")) return "pack-lau-admin";
  if (href.includes("administracion-alquiler-local")) return "admin";
  if (href.includes("redactar-contrato-alquiler")) return "redactar-lau";
  if (href.includes("contrato-alquiler-temporada")) return "temporada";
  if (href.includes("contrato-alquiler-habitacion")) return "habitacion";
  if (href.includes("revision-contrato-alquiler")) return "revision-alquiler";
  if (href.includes("contrato-alquiler-local")) return "lau";
  if (href.includes("servicio-completo-venta")) return "venta-completa";
  if (href.includes("servicio-completo-compra")) return "compra-completa";
  if (href.includes("vender-piso-sin-agencia")) return "vender-sin-agencia";
  if (href.includes("comprar-piso-sin-agencia")) return "comprar-sin-agencia";
  if (href.includes("contrato-arras")) return "arras";
  if (href.includes("revision-documental-post-arras")) return "revision-post-arras";
  if (href.includes("acompanamiento-reserva-arras")) return "reserva-arras";
  if (href.includes("reserva-de-compra")) return "reserva-nacional";
  if (href.includes("pack-arras-gestion")) return "pack-arras-gestion";
  return undefined;
}

export const GESTORIA_VERTICAL_CONTRATAR_SLUG: Partial<Record<GestoriaVerticalServiceKey, string>> = {
  admin: "administracion-alquiler",
  lau: "contrato-alquiler-lau",
  "redactar-lau": "contrato-alquiler-lau",
  temporada: "contrato-alquiler-temporada",
  habitacion: "contrato-alquiler-habitacion",
  "revision-alquiler": "revision-contrato-alquiler",
  "venta-completa": "servicio-completo-venta",
  "compra-completa": "servicio-completo-compra",
  arras: "contrato-arras-penitenciales",
  "revision-post-arras": "revision-documental-post-arras",
  "reserva-arras": "acompanamiento-reserva-arras",
  "reserva-nacional": "reserva-de-compra",
};

type ShowcaseTemplate = {
  sectionShort: string;
  headline: (city: string) => string;
  body: (city: string) => string;
  image: string;
  imageAlt: string;
  cardMeta: string;
  steps: readonly string[];
  checklist: readonly string[];
};

const SHOWCASE_TEMPLATES: Record<GestoriaVerticalServiceKey, ShowcaseTemplate> = {
  admin: {
    sectionShort: "ADMINISTRACIÓN DE ALQUILER",
    headline: (city) => `Gestión de alquileres en ${city} sin hablar con el inquilino`,
    body: (city) =>
      `Si ya tienes inquilino o acabas de firmar LAU en ${city}, la administración mensual de Livendia cubre incidencias, averías, renovaciones y comunicación formal. Tarifa fija ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl., sin permanencia ni comisión sobre la renta.`,
    image: SERVICE_IMAGES["administracion-alquiler"],
    imageAlt: "Gestor revisando incidencias de alquiler en panel online",
    cardMeta: "Panel online · gestor asignado · WhatsApp",
    steps: [
      "Primera llamada en menos de 24 h: recogemos datos del piso, inquilino y contactos de comunidad.",
      "Activamos el panel: incidencias, documentos y avisos de renovación en un solo sitio.",
      "Filtramos averías y urgencias; tú apruebas presupuestos importantes.",
      "Renovaciones, IPC y preavisos LAU con cláusulas revisadas antes de firmar.",
    ],
    checklist: [
      `Tarifa plana ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} — sin % sobre la renta`,
      "Sin permanencia: puedes cancelar cuando quieras",
      "Gestor con teléfono directo y WhatsApp",
      "Coordinación con seguros, comunidad y suministros",
    ],
  },
  lau: {
    sectionShort: "CONTRATO DE ALQUILER LAU",
    headline: (city) => `Contrato de alquiler en ${city} con inventario y fianza legal`,
    body: (city) =>
      `Redactamos un contrato LAU a medida para ${city}: renta, duración, fianza, garantías adicionales, IPC, gastos de comunidad e inventario de mobiliario. Normativa de vivienda y LAU actualizada — no plantillas genéricas de internet.`,
    image: SERVICE_IMAGES["contrato-alquiler-lau"],
    imageAlt: "Documentos de contrato de alquiler LAU sobre mesa de trabajo",
    cardMeta: "Entrega 48–72 h · PDF firmable",
    steps: [
      "Definimos renta, duración, fianza legal y garantías adicionales conforme a la LAU.",
      "Redactamos cláusulas sobre mascotas, subarriendo, obras, IPC y resolución anticipada.",
      "Elaboramos inventario detallado: mobiliario, electrodomésticos y estado de paredes y suelos.",
      "Entregamos PDF listo para firma y resolvemos dudas antes de entregar la fianza.",
    ],
    checklist: [
      `${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl. — tarifa plana por contrato`,
      "Inventario y anexo de mobiliario incluidos",
      "Gestor asignado con revisión previa a la firma",
      "Cláusulas adaptadas al piso real, no a un modelo vacío",
    ],
  },
  "redactar-lau": {
    sectionShort: "REDACTAR CONTRATO LAU",
    headline: (city) => `Redactar contrato de alquiler en ${city} con enfoque local`,
    body: (city) =>
      `Misma redacción profesional LAU que el servicio estándar, con copy y enlaces orientados a barrios y casuística de ${city}. Ideal si llegas desde búsquedas locales y quieres contratar con contexto del mercado de alquiler en la zona.`,
    image: SERVICE_IMAGES["contrato-alquiler-lau"],
    imageAlt: "Redacción personalizada de contrato de alquiler",
    cardMeta: "{city} · gestor online",
    steps: [
      "Recogemos datos del inmueble, propietario e inquilino en formulario guiado.",
      "Ajustamos cláusulas a la tipología del piso y normativa autonómica aplicable.",
      "Revisamos borrador contigo antes de cerrar el PDF definitivo.",
      "Enlace directo a administración si quieres delegar después de firmar.",
    ],
    checklist: [
      `Precio publicado: ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl.`,
      "Mismo equipo de gestoría que el resto de Livendia",
      "Landing local con FAQ de barrio cuando aplica",
    ],
  },
  temporada: {
    sectionShort: "ALQUILER TEMPORADA",
    headline: (city) => `Contrato de alquiler por temporada en ${city}`,
    body: (city) =>
      `Estancias temporales en ${city}: motivo de la estancia, duración, suministros y depósito por escrito. Evita usar un LAU de larga duración cuando la operación es claramente temporal.`,
    image: SERVICE_IMAGES["contrato-alquiler-temporada"],
    imageAlt: "Contrato de alquiler temporal entre particulares",
    cardMeta: "Temporada · suministros definidos",
    steps: [
      "Confirmamos que la operación encaja en régimen temporal y no en LAU de vivienda habitual.",
      "Fijamos renta, calendario, fianza o depósito y reparto de suministros.",
      "Incluimos cláusulas de salida, limpieza y estado del piso.",
      "PDF en 48–72 h con gestor disponible para dudas pre-firma.",
    ],
    checklist: [
      `${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl.`,
      "Cláusulas de estancia temporal, no copia-pega de LAU anual",
      "Inventario cuando hay mobiliario",
    ],
  },
  habitacion: {
    sectionShort: "ALQUILER DE HABITACIÓN",
    headline: (city) => `Contrato de habitación en piso compartido en ${city}`,
    body: (city) =>
      `Piso compartido en ${city}: convivencia, zonas comunes, limpieza, visitas y reglas de uso. Protege al propietario y deja claro al inquilino qué incluye la habitación antes de transferir la fianza.`,
    image: SERVICE_IMAGES["contrato-alquiler-habitacion"],
    imageAlt: "Contrato de alquiler de habitación en piso compartido",
    cardMeta: "Convivencia · zonas comunes",
    steps: [
      "Definimos qué incluye la habitación (m², muebles, armario) y uso de cocina/baño.",
      "Reglas de convivencia: ruidos, visitas, limpieza y gastos compartidos.",
      "Fianza, duración e IPC o revisión de renta según LAU aplicable.",
      "Inventario de la habitación y elementos comunes.",
    ],
    checklist: [
      `${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl.`,
      "Anexo de convivencia incluido",
      "Revisión antes de entregar llaves y fianza",
    ],
  },
  "revision-alquiler": {
    sectionShort: "REVISIÓN CONTRATO LAU",
    headline: (city) => `Revisión de contrato de alquiler en ${city} antes de firmar`,
    body: (city) =>
      `¿Te han pasado un borrador LAU o de temporada en ${city}? Un gestor revisa cláusulas abusivas, fianza, IPC, obras y salida — segunda opinión profesional antes de firmar.`,
    image: SERVICE_IMAGES["revision-contrato-alquiler"],
    imageAlt: "Revisión legal de contrato de alquiler",
    cardMeta: "Segunda opinión · 145 €",
    steps: [
      "Subes el borrador o PDF que te han enviado.",
      "Analizamos cláusulas críticas: fianza, garantías, obras, mascotas, subarriendo.",
      "Informe con semáforo y propuestas de redacción alternativa.",
      "Llamada breve para resolver dudas puntuales.",
    ],
    checklist: [
      "145 € IVA incl. por revisión de borrador",
      "No sustituye a abogado en litigios — enfoque preventivo",
      "Respuesta en plazo acordado con el gestor",
    ],
  },
  "pack-lau-admin": {
    sectionShort: "PACK LAU + ADMINISTRACIÓN",
    headline: (city) => `Pack contrato LAU y primer mes de administración en ${city}`,
    body: (city) =>
      `Contrato LAU y arranque de administración en un solo flujo: ideal primera vez que alquilas en ${city}. Contrato ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} + primer mes de gestión ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}.`,
    image: SERVICE_IMAGES["administracion-alquiler"],
    imageAlt: "Pack contrato LAU más administración de alquiler",
    cardMeta: "Pack nacional · ciudades con landing local",
    steps: [
      "Redactamos LAU completo con inventario.",
      "Tras la firma, activamos panel de administración.",
      "Primer mes incluido para incidencias y renovaciones.",
      "Puedes continuar admin mes a mes sin permanencia.",
    ],
    checklist: [
      "Desde 204 € IVA incl. (LAU + 1.er mes admin)",
      "Un solo gestor para contrato y gestión",
      "Enlace a landings locales por ciudad cuando existen",
    ],
  },
  "venta-completa": {
    sectionShort: "SERVICIO COMPLETO DE VENTA",
    headline: (city) => `Vender piso en ${city} entre particulares con gestor hasta escritura`,
    body: (city) =>
      `Servicio integral para vendedores en ${city}: reserva, arras penitenciales, recopilación de documentación (comunidad, ITE, certificados) y coordinación con notaría. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. — sin comisión del 3–5 % sobre el precio de venta.`,
    image: SERVICE_IMAGES["servicio-completo-venta"],
    imageAlt: "Gestoría de venta de vivienda entre particulares",
    cardMeta: "Tarifa plana · sin % sobre venta",
    steps: [
      "Primera llamada: datos del inmueble, comprador y calendario objetivo.",
      "Redactamos reserva y arras a favor del vendedor con plazos de hipoteca claros.",
      "Checklist documental: nota simple, comunidad, derramas, ITE, certificado energético.",
      "Seguimiento hasta escritura: pendientes, notaría y última revisión.",
    ],
    checklist: [
      `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. — sin comisión sobre el precio`,
      "No buscamos comprador: tú cierras con quien traes de Idealista/Fotocasa",
      "Gestor asignado con panel y WhatsApp",
    ],
  },
  "compra-completa": {
    sectionShort: "SERVICIO COMPLETO DE COMPRA",
    headline: (city) => `Acompañamiento de compra en ${city} hasta escritura`,
    body: (city) =>
      `Gestor del comprador en ${city}: revisión de reserva y arras, análisis de comunidad e ITE, checklist pre-escritura y coordinación con notaría. Tarifa plana ${SERVICIO_COMPLETO_CV_PRICE_LABEL} — no pagas porcentaje sobre el precio del piso.`,
    image: SERVICE_IMAGES["servicio-completo-compra"],
    imageAlt: "Acompañamiento de compra de vivienda con gestor",
    cardMeta: "Comprador · due diligence",
    steps: [
      "Primera llamada en menos de 24 h: operación, precio y calendario.",
      "Revisamos reserva, arras, nota simple y cargas registrales.",
      "Redactamos o corregimos arras y condiciones de hipoteca.",
      "Coordinamos checklist documental antes de ir a notaría.",
    ],
    checklist: [
      `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
      "Defensa del comprador, no del vendedor",
      "Informe documental con tareas pendientes",
    ],
  },
  "vender-sin-agencia": {
    sectionShort: "VENDER SIN AGENCIA",
    headline: (city) => `Vender piso sin agencia en ${city} con respaldo legal`,
    body: (city) =>
      `Landing orientada a SEO local para vender entre particulares en ${city}. Misma tarifa ${SERVICIO_COMPLETO_CV_PRICE_LABEL} que el servicio completo de venta: arras, documentación y notaría sin pagar comisión de agencia.`,
    image: SERVICE_IMAGES["servicio-completo-venta"],
    imageAlt: "Vender piso sin agencia entre particulares",
    cardMeta: "{city} · particulares",
    steps: [
      "Publicas tú el anuncio; nosotros cubrimos la parte legal y documental.",
      "Arras y reserva redactadas a favor del vendedor.",
      "Análisis de comunidad y cargas antes de comprometer plazos.",
      "Acompañamiento hasta firma de escritura.",
    ],
    checklist: [
      `Tarifa plana ${SERVICIO_COMPLETO_CV_PRICE_LABEL}`,
      "Contenido local de mercado y barrios en la landing",
      "Enlace directo a contratar online",
    ],
  },
  "comprar-sin-agencia": {
    sectionShort: "COMPRAR SIN AGENCIA",
    headline: (city) => `Comprar piso sin agencia en ${city} con gestor del comprador`,
    body: (city) =>
      `Compras en portal entre particulares en ${city}: revisamos arras y documentación antes de ingresar la señal. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. — el gestor trabaja para ti, no para el vendedor.`,
    image: SERVICE_IMAGES["servicio-completo-compra"],
    imageAlt: "Comprar vivienda sin agencia con gestor del comprador",
    cardMeta: "Comprador · revisión pre-señal",
    steps: [
      "Analizamos el borrador de arras que te envía el vendedor.",
      "Pedimos y revisamos nota simple, ITE y actas de comunidad.",
      "Señalamos riesgos: derramas, cargas, plazos de hipoteca.",
      "Te acompañamos hasta escritura con checklist actualizado.",
    ],
    checklist: [
      `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
      "Landing local con contexto de barrios y precios orientativos",
      "Mismo catálogo que servicio completo de compra",
    ],
  },
  arras: {
    sectionShort: "CONTRATO DE ARRAS",
    headline: (city) => `Contrato de arras en ${city} penitenciales o confirmatorias`,
    body: (city) =>
      `En Livendia no rellenamos plantillas: un gestor recoge datos reales de comprador, vendedor e inmueble en ${city}, revisa la nota simple y redacta arras con plazos de hipoteca y penalidades equilibradas. 145 € IVA incl.`,
    image: SERVICE_IMAGES["contrato-arras-penitenciales"],
    imageAlt: "Redacción de contrato de arras penitenciales",
    cardMeta: "48 h · PDF firmable",
    steps: [
      "Datos de las partes, precio, calendario y forma de pago de la señal.",
      "Elección penitenciales vs confirmatorias según tu operación.",
      "Cláusulas de hipoteca, cargas y resolución.",
      "Entrega en PDF con gestor para dudas pre-firma.",
    ],
    checklist: [
      "145 € IVA incl. por contrato de arras",
      "Revisión de nota simple registral incluida en el flujo",
      "Penitenciales o confirmatorias según acuerdo",
    ],
  },
  "revision-post-arras": {
    sectionShort: "REVISIÓN POST-ARRAS",
    headline: (city) => `Revisión documental post-arras para compradores en ${city}`,
    body: (city) =>
      `Ya firmaste arras en ${city} y quieres due diligence antes de escriturar: comunidad (2 años), derramas, ITE, cargas registrales e informe con llamada de veredicto. ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} IVA incl.`,
    image: SERVICE_IMAGES["revision-documental-post-arras"],
    imageAlt: "Due diligence documental tras firmar arras",
    cardMeta: "Comprador · informe + llamada",
    steps: [
      "Recopilamos escrituras, actas, ITE y recibos que tengas o guiamos para obtenerlos.",
      "Analizamos derramas pendientes, deudas de comunidad e IBI.",
      "Informe escrito con semáforo de riesgos.",
      "Llamada de veredicto antes de fijar fecha en notaría.",
    ],
    checklist: [
      `${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} IVA incl.`,
      "Enfoque comprador tras arras firmadas",
      "No sustituye al servicio completo si aún no has firmado arras",
    ],
  },
  "reserva-arras": {
    sectionShort: "RESERVA HASTA ARRAS",
    headline: (city) => `Acompañamiento de reserva hasta arras en ${city}`,
    body: (city) =>
      `Primer tramo de la compraventa en ${city}: señal inicial, borrador de arras y documentación mínima antes de comprometer el importe completo de arras. 424 € IVA incl.`,
    image: SERVICE_IMAGES["acompanamiento-reserva-arras"],
    imageAlt: "Acompañamiento desde reserva hasta contrato de arras",
    cardMeta: "424 € · tramo inicial",
    steps: [
      "Definimos importe de reserva y condiciones suspensivas.",
      "Borrador de arras coherente con lo acordado en la reserva.",
      "Lista de documentos a pedir al vendedor.",
      "Puente hacia servicio completo o revisión post-arras si lo necesitas.",
    ],
    checklist: [
      "424 € IVA incl.",
      "Ideal cuando acabas de encontrar piso y aún no hay arras",
      "Upgrade posible a servicio completo de compra o venta",
    ],
  },
  "pack-arras-gestion": {
    sectionShort: "PACK ARRAS PLUS · VENDEDORES",
    headline: (city) => `Pack arras + gestión documental para vendedores en ${city}`,
    body: (city) =>
      `Vendes entre particulares en ${city} y quieres arras bien redactadas más el checklist registral y de comunidad antes de notaría: contrato de arras penitenciales y gestión documental del vendedor en un solo flujo. ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl. (145 € arras + 350 € gestión documental).`,
    image: SERVICE_IMAGES["gestion-documental-vendedor"],
    imageAlt: "Pack arras y gestión documental para vendedor de vivienda",
    cardMeta: "Vendedor · arras + documentación",
    steps: [
      "Recogemos datos del inmueble, comprador y calendario de escritura.",
      "Redactamos arras penitenciales o confirmatorias con plazos de hipoteca claros.",
      "Solicitamos y revisamos nota simple, actas de comunidad (2 años), ITE y certificado energético.",
      "Informe de pendientes y coordinación hacia notaría sin comisión sobre el precio de venta.",
    ],
    checklist: [
      `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl. — pack publicado`,
      "Pensado para vendedores que ya tienen comprador",
      "Upgrade posible a servicio completo de venta si lo necesitas",
    ],
  },
  "reserva-nacional": {
    sectionShort: "RESERVA DE COMPRA",
    headline: (city) => `Reserva de compra en ${city} — catálogo nacional Livendia`,
    body: (city) =>
      `Señal y condiciones antes de arras con el mismo flujo online en toda España; copy local en ${city} para enlazar desde este hub. 424 € IVA incl.`,
    image: SERVICE_IMAGES["reserva-de-compra"],
    imageAlt: "Reserva de compra de vivienda",
    cardMeta: "Nacional · 424 €",
    steps: [
      "Formulario con datos de operación y partes.",
      "Redacción de reserva con plazos y devolución de señal.",
      "Coordinación con el tramo de arras posterior.",
      "Gestor online sin desplazamiento obligatorio.",
    ],
    checklist: [
      "424 € IVA incl.",
      "Mismo precio en catálogo nacional",
      "Enlaza con landings locales de compraventa en el hub",
    ],
  },
};

export function buildGestoriaVerticalServiceShowcases(
  links: readonly GestoriaVerticalServiceLink[],
  city: string,
): GestoriaVerticalServiceShowcase[] {
  const showcases: GestoriaVerticalServiceShowcase[] = [];

  links.forEach((link, index) => {
    const key = inferGestoriaVerticalServiceKey(link.href);
    if (!key) return;
    const tpl = SHOWCASE_TEMPLATES[key];
    const apartado = index + 1;
    showcases.push({
      key,
      href: link.href,
      price: link.price,
      sectionLabel: `APARTADO ${apartado} · ${tpl.sectionShort}`,
      headline: tpl.headline(city),
      body: tpl.body(city),
      image: tpl.image,
      imageAlt: tpl.imageAlt,
      cardTitle: link.title,
      cardMeta: tpl.cardMeta.replace("{city}", city),
      steps: tpl.steps,
      checklist: tpl.checklist,
      contratarSlug: GESTORIA_VERTICAL_CONTRATAR_SLUG[key],
    });
  });

  return showcases;
}

type NationalServiceCatalogEntry = {
  price: string;
  cardTitle: string;
  /** Si no se indica, se usa la ficha pública del slug de contratar. */
  href?: string;
};

const NATIONAL_SERVICE_CATALOG: Partial<Record<GestoriaVerticalServiceKey, NationalServiceCatalogEntry>> = {
  admin: {
    price: ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
    cardTitle: "Administración de alquiler",
  },
  lau: {
    price: CONTRATO_ALQUILER_LAU_PRICE_LABEL,
    cardTitle: "Contrato de alquiler LAU",
  },
  temporada: {
    price: CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL,
    cardTitle: "Contrato de alquiler por temporada",
  },
  habitacion: {
    price: CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
    cardTitle: "Contrato de alquiler de habitación",
  },
  "revision-alquiler": {
    price: "145 €",
    cardTitle: "Revisión de contrato de alquiler",
  },
  "venta-completa": {
    price: SERVICIO_COMPLETO_CV_PRICE_LABEL,
    cardTitle: "Acompañamiento de venta",
  },
  "compra-completa": {
    price: SERVICIO_COMPLETO_CV_PRICE_LABEL,
    cardTitle: "Acompañamiento de compra",
  },
  arras: {
    price: "145 €",
    cardTitle: "Contrato de arras",
  },
  "revision-post-arras": {
    price: REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL,
    cardTitle: "Revisión documental post-arras",
  },
  "reserva-arras": {
    price: "424 €",
    cardTitle: "Acompañamiento reserva hasta arras",
  },
  "reserva-nacional": {
    price: "424 €",
    cardTitle: "Reserva de compra",
    href: servicePublicLandingPath("reserva-de-compra"),
  },
  "pack-arras-gestion": {
    price: LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL,
    cardTitle: "Pack Arras Plus · vendedores",
    href: PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH,
  },
};

export function buildNationalGestoriaServiceShowcase(
  key: GestoriaVerticalServiceKey,
  index: number,
  locationLabel = "España",
): GestoriaVerticalServiceShowcase | undefined {
  const meta = NATIONAL_SERVICE_CATALOG[key];
  const tpl = SHOWCASE_TEMPLATES[key];
  if (!meta || !tpl) return undefined;

  const contratarSlug = GESTORIA_VERTICAL_CONTRATAR_SLUG[key];
  const href = meta.href ?? (contratarSlug ? servicePublicLandingPath(contratarSlug) : undefined);
  if (!href) return undefined;

  return {
    key,
    href,
    price: meta.price,
    sectionLabel: `APARTADO ${index + 1} · ${tpl.sectionShort}`,
    headline: tpl.headline(locationLabel),
    body: tpl.body(locationLabel),
    image: tpl.image,
    imageAlt: tpl.imageAlt,
    cardTitle: meta.cardTitle,
    cardMeta: tpl.cardMeta.replace("{city}", locationLabel),
    steps: tpl.steps,
    checklist: tpl.checklist,
    contratarSlug,
  };
}

export function buildNationalGestoriaServiceShowcases(
  keys: readonly GestoriaVerticalServiceKey[],
  locationLabel = "España",
): GestoriaVerticalServiceShowcase[] {
  return keys
    .map((key, index) => buildNationalGestoriaServiceShowcase(key, index, locationLabel))
    .filter((s): s is GestoriaVerticalServiceShowcase => Boolean(s));
}

export function gestoriaVerticalBenefits(vertical: GestoriaCityVertical): GestoriaVerticalBenefit[] {
  if (vertical === "alquiler") {
    return [
      {
        title: "Sin comisión sobre la renta",
        body: `Administración ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} y contratos desde 145 € — no cobramos un mes de renta como algunas agencias.`,
      },
      {
        title: "Contratos LAU redactados por gestoría",
        body: "Inventario, fianza, IPC y cláusulas de convivencia en habitación o piso completo — no PDF genérico.",
      },
      {
        title: "Gestor asignado con seguimiento",
        body: "Panel online, WhatsApp y teléfono directo; revisamos cláusulas antes de que entregues la fianza.",
      },
      {
        title: "Entrega en 48–72 h",
        body: "Contratos en PDF listos para firma; administración activa en días tras la primera llamada.",
      },
      {
        title: "Particulares sin intermediarios",
        body: "Ideal si alquilas tras Idealista, Fotocasa o boca a boca en tu ciudad.",
      },
      {
        title: "Normativa LAU y vivienda actualizada",
        body: "Cláusulas revisadas con criterio 2026: fianzas, garantías adicionales y temporadas bien delimitadas.",
      },
    ];
  }

  return [
    {
      title: "Sin comisión sobre el precio del piso",
      body: `Venta o compra integral ${SERVICIO_COMPLETO_CV_PRICE_LABEL} — frente al 3–5 % habitual de agencia sobre el valor de la vivienda.`,
    },
    {
      title: "Arras y reserva con gestor real",
      body: "145 € arras, 424 € reserva: datos de partes e inmueble recogidos por persona, no chatbot de plantillas.",
    },
    {
      title: "Gestor del comprador o del vendedor",
      body: "Sabes de qué lado está el gestor; informes documentales antes de comprometer señal o escritura.",
    },
    {
      title: "Due diligence post-arras",
      body: `${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} IVA incl. con informe y llamada cuando ya firmaste arras.`,
    },
    {
      title: "Particulares en portales",
      body: "Cierras con quien encuentras tú; nosotros la capa legal hasta notaría.",
    },
    {
      title: "Landings locales por ciudad",
      body: "Cada servicio enlaza a su página local con contexto de barrio cuando está publicada.",
    },
  ];
}

export function gestoriaVerticalComparison(
  vertical: GestoriaCityVertical,
  city: string,
): { title: string; body: string } {
  if (vertical === "alquiler") {
    return {
      title: `Alquiler: agencia clásica vs Livendia en ${city}`,
      body: `Muchas agencias cobran un mes de renta más IVA por encontrar inquilino, o un 8–10 % mensual de gestión. Livendia publica precios fijos: LAU ${CONTRATO_ALQUILER_LAU_PRICE_LABEL}, habitación ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL}, administración ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} sin permanencia. Tú captas al inquilino; nosotros redactamos y, si quieres, administramos.`,
    };
  }
  return {
    title: `Compraventa: agencia al 5 % vs Livendia en ${city}`,
    body: `En un piso de 300.000 €, un 5 % de agencia son 15.000 €. Livendia cobra tarifa plana: servicio completo ${SERVICIO_COMPLETO_CV_PRICE_LABEL}, solo arras 145 € o reserva 424 €. No buscamos comprador ni vendemos el piso: evitas comisión y mantienes gestoría hasta escritura cuando contratas el servicio integral.`,
  };
}

export function gestoriaVerticalExtendedFaq(
  vertical: GestoriaCityVertical,
  city: string,
): readonly { question: string; answer: string }[] {
  if (vertical === "alquiler") {
    return [
      {
        question: `¿Qué incluye el inventario del LAU en ${city}?`,
        answer:
          "Mobiliario, electrodomésticos, estado de paredes y suelos y entrega de llaves. Se firma como anexo al contrato para evitar disputas en la devolución de fianza.",
      },
      {
        question: "¿Puedo contratar solo la revisión de un borrador?",
        answer:
          "Sí, el servicio de revisión de contrato de alquiler cuesta 145 € IVA incl. Te indicamos cláusulas a negociar antes de firmar.",
      },
      {
        question: `¿La administración de alquiler gestiona averías en ${city}?`,
        answer:
          "Filtramos incidencias, pedimos presupuestos y coordinamos con profesionales; tú apruebas gastos relevantes. No somos mantenimiento 24 h de emergencias, pero sí el interlocutor habitual con el inquilino.",
      },
      {
        question: "¿Contrato de temporada o LAU?",
        answer:
          "Si la estancia es claramente temporal y no vivienda habitual, usamos contrato de temporada. Si es alquiler de vivienda, LAU con fianza legal. El gestor te orienta en la primera llamada.",
      },
      {
        question: "¿Hay pack LAU más administración?",
        answer:
          "Sí: contrato LAU (145 €) más primer mes de administración (59 €), desde 204 € IVA incl., en la landing del pack nacional enlazada desde este hub.",
      },
      {
        question: `¿Los precios cambian según el barrio de ${city}?`,
        answer:
          "No. El precio es el del catálogo nacional; cambian el copy local, ejemplos de barrio y enlaces SEO — no la tarifa.",
      },
    ];
  }

  return [
    {
      question: `¿Livendia busca comprador para mi piso en ${city}?`,
      answer:
        "No. Publicas y negocias tú; nosotros redactamos reserva, arras, revisamos documentación y coordinamos hasta notaría en el servicio completo.",
    },
    {
      question: "¿Cuál es la diferencia entre reserva (424 €) y arras (145 €)?",
      answer:
        "La reserva fija la señal inicial y condiciones antes de un contrato de arras completo. Las arras son el contrato de señal penal o confirmatoria con plazos de hipoteca y precio cerrado.",
    },
    {
      question: `¿Puedo contratar solo arras en ${city}?`,
      answer:
        "Sí, 145 € IVA incl. por contrato penitencial o confirmatorio con gestor y revisión registral en el flujo.",
    },
    {
      question: "¿Qué pasa si ya firmé arras y tengo dudas documentales?",
      answer: `Contrata revisión documental post-arras (${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} IVA incl.): informe sobre comunidad, ITE y cargas más llamada de veredicto.`,
    },
    {
      question: "¿El servicio completo incluye notaría y tasación?",
      answer:
        "Coordinamos checklist y plazos hacia notaría; honorarios notariales, registro e impuestos van aparte. No somos tasadores ni agencia inmobiliaria.",
    },
    {
      question: `¿Vender sin agencia y servicio completo de venta son lo mismo en ${city}?`,
      answer: `Misma tarifa ${SERVICIO_COMPLETO_CV_PRICE_LABEL} y mismo alcance; la landing «sin agencia» añade contenido SEO local para quien busca vender entre particulares en ${city}.`,
    },
  ];
}

export function gestoriaVerticalCatalogCopy(
  vertical: GestoriaCityVertical,
  city: string,
): { eyebrow: string; title: string; subtitle: string } {
  if (vertical === "alquiler") {
    return {
      eyebrow: "CADA SERVICIO, UN APARTADO",
      title: `Contratos y gestión de alquiler en ${city}`,
      subtitle: `LAU, habitación, temporada, revisión de borrador y administración mensual: un gestor conoce tu caso en ${city}, no un chatbot de plantillas.`,
    };
  }
  return {
    eyebrow: "CADA SERVICIO, UN APARTADO",
    title: `Servicios de compraventa en ${city}`,
    subtitle: `Arras, reserva, venta o compra integral y revisión post-arras: tarifas publicadas y landings locales para cada trámite.`,
  };
}
