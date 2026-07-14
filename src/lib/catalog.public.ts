/**
 * Catálogo: tipos y constantes compartidas. Seguro para importar en Client Components.
 */

export type PublicService = {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  category: string | null;
  price_cents: number;
  is_recurring: boolean;
  features: string[] | null;
  badge: string | null;
};

/** Servicios que deben existir en BD; se sincronizan en servidor si faltan. */
export type CatalogServiceSeed = Omit<PublicService, "id">;

/** Servicio completo de compra y de venta (reserva → escritura), IVA incl. — precio en euros. */
export const SERVICIO_COMPLETO_CV_PRICE_EUR = 890;
/** Stripe y Supabase guardan céntimos: 890 € → 89000 (no confundir con 89000 €). */
export const SERVICIO_COMPLETO_CV_PRICE_CENTS = SERVICIO_COMPLETO_CV_PRICE_EUR * 100;
export const SERVICIO_COMPLETO_CV_PRICE_LABEL = `${SERVICIO_COMPLETO_CV_PRICE_EUR} €`;
export const SERVICIO_COMPLETO_CV_PRICE_LABEL_COMPACT = `${SERVICIO_COMPLETO_CV_PRICE_EUR}€`;

/** Slugs cuyo precio en BD debe coincidir con SERVICIO_COMPLETO_CV_PRICE_EUR. */
export const SERVICIO_COMPLETO_CV_SLUGS = [
  "servicio-completo-compra",
  "servicio-completo-venta",
] as const;

/** Reserva de compra — precio comercial IVA incl. */
export const RESERVA_DE_COMPRA_PRICE_EUR = 61;
export const RESERVA_DE_COMPRA_PRICE_CENTS = RESERVA_DE_COMPRA_PRICE_EUR * 100;
export const RESERVA_DE_COMPRA_PRICE_LABEL = `${RESERVA_DE_COMPRA_PRICE_EUR} €`;
export const RESERVA_DE_COMPRA_SLUG = "reserva-de-compra" as const;

/** Pack Revisión Documental post-arras — precio comercial IVA incl. */
export const REVISION_DOCUMENTAL_POST_ARRAS_PRICE_EUR = 350;
export const REVISION_DOCUMENTAL_POST_ARRAS_PRICE_CENTS = REVISION_DOCUMENTAL_POST_ARRAS_PRICE_EUR * 100;
export const REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL = `${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_EUR} €`;
export const REVISION_DOCUMENTAL_POST_ARRAS_SLUG = "revision-documental-post-arras" as const;

/** Gestor documental vendedor (arras → escritura) — precio comercial IVA incl. */
export const GESTION_DOCUMENTAL_VENDEDOR_PRICE_EUR = 350;
export const GESTION_DOCUMENTAL_VENDEDOR_PRICE_CENTS = GESTION_DOCUMENTAL_VENDEDOR_PRICE_EUR * 100;
export const GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL = `${GESTION_DOCUMENTAL_VENDEDOR_PRICE_EUR} €`;
export const GESTION_DOCUMENTAL_VENDEDOR_SLUG = "gestion-documental-vendedor" as const;

/** Acompañamiento de compra de parking o trastero — precio comercial IVA incl. */
export const ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_EUR = 298;
export const ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_CENTS =
  ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_EUR * 100;
export const ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL = `${ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_EUR} €`;
export const ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_SLUG = "acompanamiento-compra-parking-trastero" as const;

/** Contrato de arras local — tarifa publicada IVA incl. */
export const CONTRATO_ARRAS_LOCAL_PRICE_EUR = 145;
export const CONTRATO_ARRAS_LOCAL_PRICE_LABEL = `${CONTRATO_ARRAS_LOCAL_PRICE_EUR} €`;
export const LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_EUR =
  CONTRATO_ARRAS_LOCAL_PRICE_EUR + GESTION_DOCUMENTAL_VENDEDOR_PRICE_EUR;

/** Contrato de alquiler LAU — precio comercial IVA incl. */
export const CONTRATO_ALQUILER_LAU_PRICE_EUR = 145;
export const CONTRATO_ALQUILER_LAU_PRICE_CENTS = CONTRATO_ALQUILER_LAU_PRICE_EUR * 100;
export const CONTRATO_ALQUILER_LAU_PRICE_LABEL = `${CONTRATO_ALQUILER_LAU_PRICE_EUR} €`;
export const CONTRATO_ALQUILER_LAU_SLUG = "contrato-alquiler-lau" as const;

/** Contrato de alquiler por temporada — precio comercial IVA incl. */
export const CONTRATO_ALQUILER_TEMPORADA_PRICE_EUR = 200;
export const CONTRATO_ALQUILER_TEMPORADA_PRICE_CENTS = CONTRATO_ALQUILER_TEMPORADA_PRICE_EUR * 100;
export const CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL = `${CONTRATO_ALQUILER_TEMPORADA_PRICE_EUR} €`;
export const CONTRATO_ALQUILER_TEMPORADA_SLUG = "contrato-alquiler-temporada" as const;

/** Contrato de habitación — precio comercial IVA incl. */
export const CONTRATO_ALQUILER_HABITACION_PRICE_EUR = 145;
export const CONTRATO_ALQUILER_HABITACION_PRICE_CENTS = CONTRATO_ALQUILER_HABITACION_PRICE_EUR * 100;
export const CONTRATO_ALQUILER_HABITACION_PRICE_LABEL = `${CONTRATO_ALQUILER_HABITACION_PRICE_EUR} €`;
export const CONTRATO_ALQUILER_HABITACION_SLUG = "contrato-alquiler-habitacion" as const;

/** Revisión de contrato de alquiler (inquilinos) — precio comercial IVA incl. */
export const REVISION_CONTRATO_ALQUILER_PRICE_EUR = 120;
export const REVISION_CONTRATO_ALQUILER_PRICE_CENTS = REVISION_CONTRATO_ALQUILER_PRICE_EUR * 100;
export const REVISION_CONTRATO_ALQUILER_PRICE_LABEL = `${REVISION_CONTRATO_ALQUILER_PRICE_EUR} €`;
export const REVISION_CONTRATO_ALQUILER_SLUG = "revision-contrato-alquiler" as const;

/** Precios fijos en BD (slug → céntimos). */
export const FIXED_CATALOG_PRICE_CENTS: Record<string, number> = {
  [REVISION_DOCUMENTAL_POST_ARRAS_SLUG]: REVISION_DOCUMENTAL_POST_ARRAS_PRICE_CENTS,
  [RESERVA_DE_COMPRA_SLUG]: RESERVA_DE_COMPRA_PRICE_CENTS,
  [CONTRATO_ALQUILER_LAU_SLUG]: CONTRATO_ALQUILER_LAU_PRICE_CENTS,
  [CONTRATO_ALQUILER_TEMPORADA_SLUG]: CONTRATO_ALQUILER_TEMPORADA_PRICE_CENTS,
  [CONTRATO_ALQUILER_HABITACION_SLUG]: CONTRATO_ALQUILER_HABITACION_PRICE_CENTS,
  [REVISION_CONTRATO_ALQUILER_SLUG]: REVISION_CONTRATO_ALQUILER_PRICE_CENTS,
  [GESTION_DOCUMENTAL_VENDEDOR_SLUG]: GESTION_DOCUMENTAL_VENDEDOR_PRICE_CENTS,
  [ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_SLUG]: ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_CENTS,
  "servicio-completo-compra": SERVICIO_COMPLETO_CV_PRICE_CENTS,
  "servicio-completo-venta": SERVICIO_COMPLETO_CV_PRICE_CENTS,
};

/** Etiqueta de precio desde catálogo o constante de respaldo. */
export function resolveServicePriceLabel(
  service: Pick<PublicService, "price_cents"> | null | undefined,
  fallbackLabel: string,
): string {
  if (!service) return fallbackLabel;
  return `${(service.price_cents / 100).toFixed(0)} €`;
}

export const CATALOG_SERVICE_SEEDS: CatalogServiceSeed[] = [
  {
    slug: "servicio-completo-venta",
    name: "Servicio completo de venta: reserva a escritura",
    description:
      "Acompañamiento para propietarios que venden su piso de forma particular a un comprador particular: gestor personalizado, reserva, arras, documentación y asesoramiento hasta escriturar con éxito.",
    category: "acompanamiento",
    price_cents: SERVICIO_COMPLETO_CV_PRICE_CENTS,
    is_recurring: false,
    features: [
      "Estudio de la operación con gestor personalizado",
      "Redacción de contrato de reserva",
      "Redacción de contrato de arras (penitenciales o confirmatorias)",
      "Ayuda para recabar nota simple, comunidad, ITE y certificados",
      "Revisión de coherencia entre reserva, arras y documentación",
      "Asesoramiento hasta la firma en notaría",
      "Coordinación de plazos y checklist pre-escritura",
      "Área de cliente para centralizar documentos",
    ],
    badge: "Para vendedores",
  },
  {
    slug: "revision-documental-post-arras",
    name: "Pack Revisión Documental post-arras",
    description:
      "Verificación documental integral tras firmar arras y antes de escriturar. Revisamos contrato de arras, actas de comunidad, derramas, ITE, nota registral e información urbanística. Informe ejecutivo + llamada de veredicto y asesoramiento telefónico.",
    category: "compraventa",
    price_cents: REVISION_DOCUMENTAL_POST_ARRAS_PRICE_CENTS,
    is_recurring: false,
    features: [
      "Revisión completa de contrato de arras",
      "Revisión de actas de comunidad (últimos 2 años)",
      "Verificación de derramas pendientes y extraordinarias",
      "Análisis del ITE (Inspección Técnica de Edificios)",
      "Obtención y revisión de nota registral actualizada",
      "Consulta de información urbanística y licencias",
      "Informe ejecutivo PDF con hallazgos y recomendaciones",
      "Llamada de veredicto con gestor especializado",
      "Asesoramiento telefónico para dudas durante el proceso",
      "Entrega en 3-5 días · Análisis en 48h",
    ],
    badge: "Pre-escritura",
  },
  {
    slug: "gestion-documental-vendedor",
    name: "Gestión documental vendedor post-arras",
    description:
      "Gestor dedicado que obtiene y verifica toda la documentación para escriturar: nota simple, comunidad, ITE, certificado energético, hipoteca, IBI y coherencia con arras. Informe semáforo y asesoramiento hasta notaría.",
    category: "compraventa",
    price_cents: GESTION_DOCUMENTAL_VENDEDOR_PRICE_CENTS,
    is_recurring: false,
    features: [
      "Gestor dedicado desde la contratación",
      "Checklist personalizado de documentación",
      "Nota simple registral actualizada",
      "Certificado de deuda cero de comunidad",
      "Verificación ITE vigente si aplica",
      "Certificado de eficiencia energético",
      "Estado de suministros (luz, agua, gas)",
      "IBI y prorrateo vendedor/comprador",
      "Cargas y afecciones registrales",
      "Documentación hipoteca pendiente",
      "Coherencia documentación vs arras",
      "Informe semáforo verde/ámbar/rojo",
      "Asesoramiento hasta notaría",
      "Área de cliente Livendia",
    ],
    badge: "Post-arras · Vendedor",
  },
  {
    slug: ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_SLUG,
    name: "Acompañamiento de compra de parking o trastero",
    description:
      "Servicio integral de compra con gestor dedicado: nota simple, IBI, comunidad, notaría, ITP y registro. Un profesional se encarga de todos los trámites hasta la entrega de la documentación final.",
    category: "compraventa",
    price_cents: ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_CENTS,
    is_recurring: false,
    features: [
      "Nota simple registral y revisión de cargas",
      "Revisión IBI y deuda de comunidad",
      "Coordinación con oficial de notaría",
      "Preparación documentación comprador y vendedor",
      "Solicitud copia autorizada electrónica al notario",
      "Liquidación ITP (modelo 600) en ATC",
      "Presentación telemática en registradores.org",
      "Entrega documentación final inscrita",
    ],
    badge: "Parking y trastero",
  },
  {
    slug: REVISION_CONTRATO_ALQUILER_SLUG,
    name: "Revisión de contrato de alquiler",
    description:
      "Revisión profesional del contrato de alquiler antes de firmar: LAU, temporada o habitación. Informe detallado para negociar. No incluye redacción completa del contrato.",
    category: "revision",
    price_cents: REVISION_CONTRATO_ALQUILER_PRICE_CENTS,
    is_recurring: false,
    features: [
      "Revisión cláusula a cláusula del borrador",
      "Contratos LAU, temporada y habitación",
      "Detección de cláusulas abusivas o ilegales",
      "Análisis de fianza, renta y actualizaciones",
      "Revisión de gastos, suministros y penalizaciones",
      "Informe detallado PDF con puntos a negociar",
      "Llamada de veredicto con gestor especializado",
      "Asesoramiento telefónico antes de firmar",
      "Entrega en 24-48 h laborables",
    ],
    badge: "Para inquilinos",
  },
];

export const CATEGORY_LABEL: Record<string, string> = {
  compraventa: "Compraventa",
  alquiler: "Alquiler",
  pack: "Packs",
  administracion_alquiler: "Administración de alquiler",
  contrato: "Contratos",
  acompanamiento: "Acompañamiento",
  revision: "Revisión",
  otro: "Otros",
};

export const CATEGORY_ORDER = [
  "compraventa",
  "alquiler",
  "pack",
  "administracion_alquiler",
  "contrato",
  "acompanamiento",
  "revision",
  "otro",
];

export function formatEur(cents: number) {
  return `${(cents / 100).toFixed(2).replace(".", ",")} €`;
}

export function groupByCategory(services: PublicService[]) {
  const map = new Map<string, PublicService[]>();
  for (const s of services) {
    const c = s.category ?? "otro";
    if (!map.has(c)) map.set(c, []);
    map.get(c)!.push(s);
  }
  const sortedKeys = [...map.keys()].sort((a, b) => {
    const ia = CATEGORY_ORDER.indexOf(a);
    const ib = CATEGORY_ORDER.indexOf(b);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });
  return sortedKeys.map((key) => ({
    key,
    label: CATEGORY_LABEL[key] ?? key,
    items: sortServicesWithinCategory(key, map.get(key)!),
  }));
}

/** Prioridad dentro de la misma categoría (compra completa y packs premium primero). */
function sortServicesWithinCategory(category: string, items: PublicService[]): PublicService[] {
  const rank = (s: PublicService): number => {
    if (category === "compraventa" && s.slug === "servicio-completo-compra") return -100;
    if (category === "compraventa") {
      const order = [
        "contrato-arras-penitenciales",
        "contrato-arras-confirmatorias",
        "revision-documental-post-arras",
        "gestion-documental-vendedor",
        "acompanamiento-compra-parking-trastero",
        "reserva-de-compra",
      ];
      const i = order.indexOf(s.slug);
      if (i !== -1) return i;
    }
    if (category === "acompanamiento") {
      const order = [
        "servicio-completo-compra",
        "servicio-completo-venta",
        "acompanamiento-reserva-arras",
      ];
      const i = order.indexOf(s.slug);
      if (i !== -1) return i - 100;
    }
    return s.price_cents;
  };
  return [...items].sort((a, b) => {
    const ra = rank(a);
    const rb = rank(b);
    if (ra !== rb) return ra - rb;
    return a.name.localeCompare(b.name, "es");
  });
}

/** Imagen de portada por slug de servicio */
export const SERVICE_IMAGES: Record<string, string> = {
  "administracion-alquiler": "/images/gestoria.jpg",
  "contrato-alquiler-lau": "/images/contratos.jpg",
  "contrato-alquiler-temporada": "/images/contratos5.jpg",
  "contrato-alquiler-habitacion": "/images/contratos2.jpg",
  "contrato-arras-penitenciales": "/images/contratos1.jpg",
  "contrato-arras-confirmatorias": "/images/contratos7.jpg",
  "reserva-de-compra": "/images/contratos6.jpg",
  "acompanamiento-reserva-arras": "/images/familia1.jpg",
  "servicio-completo-compra": "/images/familia2.jpg",
  "servicio-completo-venta": "/images/servicio-completo-venta-hero.jpg",
  "revision-documental-post-arras": "/images/gestoria20.jpg",
  "revision-contrato-alquiler": "/images/gestora2.jpg",
  "gestion-documental-vendedor": "/images/gestoria20.jpg",
  "acompanamiento-compra-parking-trastero": "/images/contratos6.jpg",
  /** Landing informativa (no catálogo DB) — imagen principal de la página dedicada */
  "contrato-de-arras": "/images/contratodearras.jpg",
  "contrato-de-alquiler": "/images/contratodealquiler.jpg",
};
