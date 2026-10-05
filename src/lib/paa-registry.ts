import type { PaaRegistryEntry } from "@/lib/paa-types";

/**
 * Índice de preguntas PAA / People Also Ask → URL canónica (micro-artículo o blog).
 * Los matchers se aplican sobre la pregunta normalizada (sin acentos opcionales, minúsculas).
 */
export const PAA_REGISTRY: readonly PaaRegistryEntry[] = [
  {
    slug: "inquilino-no-paga-alquiler",
    title: "Qué pasa si el inquilino no paga el alquiler",
    description: "Pasos legales, plazos y prevención para propietarios.",
    category: "administracion",
    blogSlug: "que-pasa-si-el-inquilino-no-paga",
    matchers: [/inquilino no paga/i, /impago/i, /no paga el alquiler/i, /no paga la renta/i],
    ogImage: "/images/gestoria20.jpg",
  },
  {
    slug: "como-calcular-arras",
    title: "Cómo calcular las arras en una compraventa",
    description: "Porcentaje habitual, importe mínimo y diferencia con la reserva.",
    category: "compraventa",
    matchers: [/calcular.*arras/i, /cuánto.*arras/i, /cuanto.*arras/i, /importe.*arras/i, /porcentaje.*arras/i],
    ogImage: "/images/contratodearras.jpg",
  },
  {
    slug: "documentos-vender-piso-entre-particulares",
    title: "Qué documentos necesito para vender mi piso entre particulares",
    description: "Checklist registral, comunidad, ITE y certificados antes de notaría.",
    category: "compraventa",
    matchers: [
      /documentos.*vender/i,
      /documentaci[oó]n.*vender/i,
      /documentaci[oó]n.*compraventa/i,
      /vender.*particulares.*document/i,
      /qu[eé] necesito.*vender/i,
    ],
    ogImage: "/images/servicio-completo-venta-hero.jpg",
  },
  {
    slug: "documentos-comprar-piso-entre-particulares",
    title: "Qué documentos revisar antes de comprar entre particulares",
    description: "Nota simple, comunidad, ITE y señales de alerta para el comprador.",
    category: "compraventa",
    matchers: [
      /documentos.*comprar/i,
      /documentaci[oó]n.*comprar/i,
      /comprar.*particulares.*document/i,
      /qu[eé] revisar.*comprar/i,
    ],
    ogImage: "/images/familia2.jpg",
  },
  {
    slug: "diferencia-reserva-y-arras",
    title: "Diferencia entre reserva de compra y contrato de arras",
    description: "Cuándo usar cada documento y qué riesgos evitar.",
    category: "compraventa",
    matchers: [
      /diferencia.*reserva.*arras/i,
      /reserva.*424.*arras/i,
      /reserva.*y.*arras/i,
      /señal.*y.*arras/i,
    ],
    ogImage: "/images/contratos6.jpg",
  },
  {
    slug: "que-es-contrato-arras",
    title: "Qué es un contrato de arras",
    description: "Tipos, contenido mínimo y cuándo firmarlo.",
    category: "compraventa",
    blogSlug: "que-es-un-contrato-de-arras",
    matchers: [/qu[eé] es.*contrato de arras/i, /qu[eé] son las arras/i],
    ogImage: "/images/contratodearras.jpg",
  },
  {
    slug: "arras-penitenciales-o-confirmatorias",
    title: "Arras penitenciales o confirmatorias: cuál elegir",
    description: "Consecuencias si alguien se echa atrás.",
    category: "compraventa",
    blogSlug: "diferencia-arras-penitenciales-confirmatorias",
    matchers: [/penitenciales.*confirmatorias/i, /confirmatorias.*penitenciales/i, /tipo.*arras/i],
    ogImage: "/images/contratos1.jpg",
  },
  {
    slug: "que-pasa-si-desisto-arras",
    title: "Qué pasa si me echo atrás después de firmar arras",
    description: "Penalidades en arras penitenciales y vías de resolución.",
    category: "compraventa",
    matchers: [/desisto.*arras/i, /echo atr[aá]s.*arras/i, /perder.*arras/i, /devolver.*doble.*arras/i],
    ogImage: "/images/contratos1.jpg",
  },
  {
    slug: "que-es-nota-simple",
    title: "Qué es la nota simple registral y para qué sirve",
    description: "Cargas, titularidad y cuándo pedirla en compraventa.",
    category: "compraventa",
    matchers: [/nota simple/i, /registro de la propiedad/i],
    ogImage: "/images/gestoria20.jpg",
  },
  {
    slug: "revision-documental-post-arras",
    title: "Para qué sirve la revisión documental post-arras",
    description: "Due diligence del comprador tras firmar la señal.",
    category: "compraventa",
    matchers: [/revisi[oó]n documental post-arras/i, /post-arras/i, /due diligence/i, /despu[eé]s de firmar arras/i],
    ogImage: "/images/gestoria20.jpg",
  },
  {
    slug: "cuanto-fianza-alquiler-legal",
    title: "Cuánto puede ser la fianza en un alquiler LAU",
    description: "Límite legal, garantías adicionales y depósitos.",
    category: "alquiler",
    matchers: [/cu[aá]nto.*fianza/i, /fianza legal/i, /garant[ií]a adicional/i, /dep[oó]sito.*alquiler/i],
    ogImage: "/images/contratos.jpg",
  },
  {
    slug: "contrato-temporada-o-lau",
    title: "Contrato de temporada o LAU: cuál corresponde",
    description: "Estancia temporal vs vivienda habitual.",
    category: "alquiler",
    matchers: [/temporada o lau/i, /lau o temporada/i, /contrato de temporada/i, /alquiler temporal/i],
    ogImage: "/images/contratos5.jpg",
  },
  {
    slug: "como-calcular-ipc-alquiler",
    title: "Cómo calcular la subida de renta por IPC",
    description: "Actualización anual, límites y cláusulas en contrato.",
    category: "alquiler",
    matchers: [/calcular.*ipc/i, /subida.*renta/i, /actualizaci[oó]n.*renta/i, /ipc.*alquiler/i],
    ogImage: "/images/contratos.jpg",
  },
  {
    slug: "vender-piso-con-inquilino-dentro",
    title: "Vender un piso con inquilino dentro",
    description: "Transmisión del contrato, preferencia del inquilino y plazos LAU.",
    category: "alquiler",
    matchers: [/vender.*inquilino/i, /inquilino dentro/i, /transmitir.*arrendamiento/i],
    ogImage: "/images/gestoria.jpg",
  },
  {
    slug: "recuperar-vivienda-uso-propio",
    title: "Recuperar la vivienda alquilada para uso propio",
    description: "Causas LAU, preaviso y requisitos formales.",
    category: "alquiler",
    matchers: [/uso propio/i, /recuperar la vivienda/i, /necesito la vivienda/i],
    ogImage: "/images/gestoria.jpg",
  },
  {
    slug: "cuanto-cuesta-gestoria-inmobiliaria",
    title: "Cuánto cuesta una gestoría inmobiliaria",
    description: "Tarifas planas Livendia frente a comisión de agencia.",
    category: "legal",
    blogSlug: "cuanto-cuesta-una-gestoria-inmobiliaria",
    matchers: [/cu[aá]nto cuesta.*gestor/i, /precio.*gestor[ií]a/i, /tarifa.*gestor/i],
    ogImage: "/images/gestoria20.jpg",
  },
  {
    slug: "redactar-contrato-alquiler-particulares",
    title: "Cómo redactar un contrato de alquiler entre particulares",
    description: "LAU, inventario y errores habituales.",
    category: "alquiler",
    blogSlug: "redactar-contrato-alquiler-entre-particulares-guia-2026",
    matchers: [/redactar.*contrato.*alquiler/i, /contrato.*entre particulares/i],
    ogImage: "/images/contratodealquiler.jpg",
  },
  {
    slug: "comprar-piso-sin-agencia-guia",
    title: "Comprar piso entre particulares sin agencia",
    description: "Pasos, riesgos y gestor del comprador.",
    category: "compraventa",
    blogSlug: "comprar-piso-entre-particulares-sin-agencia-guia-completa",
    matchers: [/comprar.*sin agencia/i, /comprar.*entre particulares/i],
    ogImage: "/images/familia2.jpg",
  },
  {
    slug: "alquiler-habitacion-piso-compartido",
    title: "Alquiler de habitación en piso compartido",
    description: "Contrato, convivencia y fianza.",
    category: "alquiler",
    blogSlug: "particular-alquila-habitacion-guia-contrato-2026",
    matchers: [/alquiler de habitaci[oó]n/i, /piso compartido/i, /habitaci[oó]n.*particular/i],
    ogImage: "/images/contratos2.jpg",
  },
  {
    slug: "delegar-contacto-inquilino",
    title: "Delegar el contacto con el inquilino",
    description: "Qué cubre la administración de alquiler.",
    category: "administracion",
    blogSlug: "delegar-contacto-inquilino-propietario",
    matchers: [/delegar.*inquilino/i, /hablar con el inquilino/i, /contacto con el inquilino/i],
    ogImage: "/images/gestoria20.jpg",
  },
  {
    slug: "zonas-tensionadas-alquiler-2026",
    title: "Zonas tensionadas y límite de alquiler",
    description: "Ley de vivienda e IRAV en mercados regulados.",
    category: "actualidad",
    blogSlug: "ley-vivienda-2026-zonas-tensionadas-limite-alquiler",
    matchers: [/zona tensionada/i, /mercado tensionado/i, /l[ií]mite.*alquiler/i, /irav/i],
    ogImage: "/images/gestoria20.jpg",
  },
  {
    slug: "inventario-contrato-lau",
    title: "Qué incluye el inventario en un contrato LAU",
    description: "Mobiliario, estado del piso y anexo firmable.",
    category: "alquiler",
    matchers: [/inventario.*lau/i, /qu[eé] incluye el inventario/i, /anexo.*mobiliario/i],
    ogImage: "/images/contratos.jpg",
  },
  {
    slug: "livendia-busca-comprador",
    title: "¿Livendia busca comprador o inquilino?",
    description: "Gestoría sin comisión inmobiliaria.",
    category: "legal",
    matchers: [/busca comprador/i, /buscar inquilino/i, /encontrar inquilino/i, /encontrar comprador/i],
    ogImage: "/images/gestoria.jpg",
  },
  {
    slug: "servicio-completo-notaria-tasacion",
    title: "¿Incluye notaría y tasación el servicio completo?",
    description: "Qué cubre la tarifa plana y qué va aparte.",
    category: "compraventa",
    matchers: [/incluye notar[ií]a/i, /incluye tasaci[oó]n/i, /honorarios notariales/i],
    ogImage: "/images/familia2.jpg",
  },
];

export function normalizeFaqQuestionForPaa(question: string): string {
  return question
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[¿?¡!]/g, "")
    .trim();
}

export function getPaaCanonicalHref(entry: PaaRegistryEntry): string {
  if (entry.blogSlug) return `/blog/${entry.blogSlug}`;
  return `/respuestas/${entry.slug}`;
}

export function findPaaEntryForQuestion(question: string): PaaRegistryEntry | undefined {
  const norm = normalizeFaqQuestionForPaa(question);
  for (const entry of PAA_REGISTRY) {
    if (entry.matchers.some((re) => re.test(norm) || re.test(question))) {
      return entry;
    }
  }
  return undefined;
}

export function getPaaRegistryBySlug(slug: string): PaaRegistryEntry | undefined {
  return PAA_REGISTRY.find((e) => e.slug === slug);
}

/** Entradas cuyo contenido vive en /respuestas (no solo blog). */
export function getRespuestasRegistryEntries(): PaaRegistryEntry[] {
  return PAA_REGISTRY.filter((e) => !e.blogSlug);
}
