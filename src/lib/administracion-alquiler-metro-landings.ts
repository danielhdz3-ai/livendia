/**
 * Landings metro Barcelona — administración de alquiler por barrio/municipio.
 * Rutas: /administracion-alquiler/…
 */

export const ADMINISTRACION_ALQUILER_METRO_BASE = "/administracion-alquiler";

export type MetroServiceItem = {
  title: string;
  description: string;
};

export type AdministracionAlquilerMetroLanding = {
  /** Segmentos URL tras /administracion-alquiler/ */
  segments: readonly string[];
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  eeatHeading: string;
  eeatBlock: string;
  /** Grid de 4 columnas (Les Corts). */
  serviceGrid?: readonly MetroServiceItem[];
  /** Lista de puntos clave (Gràcia, L'H, Cornellà). */
  serviceBullets?: readonly MetroServiceItem[];
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  /** Texto para WhatsApp pre-rellenado: [Ciudad/Barrio] */
  waPlaceLabel: string;
  jsonLd: {
    name: string;
    addressLocality: string;
    addressRegion?: string;
    geo?: { latitude: string; longitude: string };
    areaServedName: string;
  };
  heroImage: string;
};

/** FAQ común (brief + FaqSection + FAQPage JSON-LD). */
export const METRO_ADMINISTRACION_FAQ: readonly { question: string; answer: string }[] = [
  {
    question: "¿Dónde están ubicadas las oficinas de Livendia?",
    answer:
      "Nuestra sede central está en el distrito de Les Corts en Barcelona, lo que nos permite dar servicio presencial y ágil en Barcelona capital (Gràcia, Les Corts, Eixample) y en todo el área metropolitana (L'Hospitalet, Cornellà, Sant Cugat).",
  },
  {
    question: "¿Qué incluye exactamente la cuota de 49 €/mes?",
    answer:
      "Incluye la gestión integral: cobranza mensual de la renta, atención e intermediación de incidencias 24/7 con el inquilino, gestión de fianzas en INCASÒL, cambios de titularidad de suministros y actualización legal del contrato.",
  },
  {
    question: "¿Existe compromiso de permanencia?",
    answer:
      "No. El servicio de administración de alquileres de Livendia no tiene permanencia. Puedes cancelar el servicio en cualquier momento con un preaviso de 30 días.",
  },
];

export const ADMINISTRACION_ALQUILER_METRO_LANDINGS: AdministracionAlquilerMetroLanding[] = [
  {
    segments: ["barcelona", "les-corts"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/barcelona/les-corts`,
    metaTitle: "Gestión y Administración de Alquileres en Les Corts, Barcelona",
    metaDescription:
      "Administramos tu piso en Les Corts (Pedralbes, Maternitat) por 49 €/mes. Oficina física en el propio distrito. Cobro garantizado, INCASÒL e incidencias.",
    h1: "Gestión y Administración de Alquileres en Les Corts (Barcelona)",
    subtitle:
      "Asesoramiento legal y gestión integral con oficina física en tu propio distrito. Tu alquiler en manos de expertos por 49 €/mes sin permanencia.",
    eeatHeading: "Conocemos Les Corts porque estamos aquí",
    eeatBlock:
      "Nuestra sede central está ubicada físicamente en el distrito de Les Corts. Conocemos al detalle el mercado de Pedralbes, La Maternitat i Sant Ramon y Les Corts centro, el perfil del inquilino de la zona y los límites del Índice de Referencia de Precios de Alquiler en Cataluña.",
    serviceGrid: [
      {
        title: "Filtro de Solvencia",
        description: "Selección de candidatos con estudio de riesgo laboral/financiero.",
      },
      {
        title: "Cumplimiento CCCat e INCASÒL",
        description: "Redacción conforme al Codi Civil de Catalunya y depósito obligatorio de fianza.",
      },
      {
        title: "Atención Inmediata de Incidencias",
        description: "Red de industriales en Les Corts y Sants para reparaciones urgentes.",
      },
      {
        title: "Gestor Dedicado",
        description:
          "Un profesional asignado que atiende directamente a tu inquilino para evitarte molestias.",
      },
    ],
    primaryCtaLabel: "Hablar con el Gestor de Les Corts por WhatsApp",
    secondaryCtaLabel: "Llamar a la Oficina de Les Corts: 600 367 742",
    waPlaceLabel: "Les Corts, Barcelona",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Les Corts",
      addressLocality: "Barcelona",
      addressRegion: "Les Corts",
      geo: { latitude: "41.3868", longitude: "2.1287" },
      areaServedName: "Les Corts, Barcelona",
    },
    heroImage: "/images/gestora5.jpg",
  },
  {
    segments: ["barcelona", "gracia"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/barcelona/gracia`,
    metaTitle: "Administración de Alquiler en Gràcia (Barcelona)",
    metaDescription:
      "Delegación integral de tu alquiler en Vila de Gràcia y Vallcarca por 49 €/mes. Control de cobros, contratos LAU/Temporada y resolución de incidencias.",
    h1: "Administración Integral de Alquileres en Gràcia",
    subtitle: "Transforma tu propiedad en Gràcia en un ingreso pasivo y protegido por 49 €/mes IVA incl.",
    eeatHeading: "Gràcia: LAU, temporada y perfiles diversos",
    eeatBlock:
      "El mercado de Gràcia (Vila de Gràcia, Camp d'en Grassot, Vallcarca) combina alquiler residencial LAU y alquiler de temporada. Gestionamos la heterogeneidad de inquilinos (profesionales, nómadas digitales, familias) garantizando el cobro puntual el día 1 de cada mes.",
    serviceBullets: [
      {
        title: "Mediación completa con el arrendatario",
        description: "Olvídate de atender llamadas por averías a deshoras.",
      },
      {
        title: "Gestión de Contratos LAU y Temporada",
        description: "Con causa justificada para evitar sanciones.",
      },
      {
        title: "Liquidación mensual de rentas",
        description: "Reclamación automatizada de impagos.",
      },
    ],
    primaryCtaLabel: "Consultar con Gestor en Gràcia por WhatsApp",
    waPlaceLabel: "Gràcia, Barcelona",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Gràcia",
      addressLocality: "Barcelona",
      addressRegion: "Gràcia",
      areaServedName: "Gràcia, Barcelona",
    },
    heroImage: "/images/gestora6.jpg",
  },
  {
    segments: ["l-hospitalet"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/l-hospitalet`,
    metaTitle: "Gestoría y Administración de Alquileres en L'Hospitalet de Llobregat",
    metaDescription:
      "Protege tu piso de alquiler en L'Hospitalet (Collblanc, Bellvitge, Santa Eulàlia). Cobro de rentas, gestión de incidencias y fianza por 49 €/mes.",
    h1: "Administración de Alquileres para Propietarios en L'Hospitalet",
    subtitle:
      "Máxima rentabilidad y protección anti-impago en L'Hospitalet de Llobregat por 49 €/mes sin permanencia.",
    eeatHeading: "Área metropolitana, respuesta desde Les Corts",
    eeatBlock:
      "Desde Collblanc y Santa Eulàlia hasta Bellvitge y Pubilla Cases, L'Hospitalet exige un control exhaustivo del cobro mensual y una respuesta ágil ante incidencias en la vivienda. Operamos desde Les Corts, a pocos minutos de L'Hospitalet, ofreciendo presencia física y soporte constante.",
    serviceBullets: [
      {
        title: "Protocolo Riguroso de Cobros",
        description: "Seguimiento de transferencias SEPA y gestión de retrasos desde el día 3.",
      },
      {
        title: "Mantenimiento Preventivo y Correctivo",
        description: "Gestión de presupuestos con industriales sin sobrecostes ocultos.",
      },
      {
        title: "Tramitación de Fianza en INCASÒL",
        description: "Cambio de suministros sin coste extra.",
      },
    ],
    primaryCtaLabel: "Solicitar Gestión en L'Hospitalet por WhatsApp",
    waPlaceLabel: "L'Hospitalet de Llobregat",
    jsonLd: {
      name: "Livendia — Administración de alquiler en L'Hospitalet de Llobregat",
      addressLocality: "L'Hospitalet de Llobregat",
      areaServedName: "L'Hospitalet de Llobregat",
    },
    heroImage: "/images/gestora7.jpg",
  },
  {
    segments: ["cornella"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/cornella`,
    metaTitle: "Administración de Alquiler en Cornellà de Llobregat",
    metaDescription:
      "Gestoría especializada en alquileres en Cornellà. Nos encargamos de tu inquilino, cobros y contrato por una tarifa fija de 49 €/mes.",
    h1: "Gestoría e Inmobiliaria de Administración en Cornellà de Llobregat",
    subtitle: "Delegación total de tu piso de alquiler en Cornellà por 49 €/mes.",
    eeatHeading: "Cornellà y Baix Llobregat",
    eeatBlock:
      "Gestionamos arrendamientos en Almeda, Centre, Sant Ildefons y Gavarra. Nos aseguramos de que tu contrato cumpla con la normativa de zona tensionada en el Baix Llobregat y de que recibas tu renta mes a mes sin discusiones con el inquilino.",
    serviceBullets: [
      {
        title: "Redacción e inicio de expediente incluido",
        description: "Alta documental y contrato conforme a la normativa vigente.",
      },
      {
        title: "Panel Online para el Propietario",
        description: "Acceso a contratos, recibos e historial de incidencias 24/7.",
      },
      {
        title: "Renovaciones y actualización de rentas",
        description: "IPC / Índice aplicable con trazabilidad legal.",
      },
    ],
    primaryCtaLabel: "Contactar con el Gestor de Cornellà",
    waPlaceLabel: "Cornellà de Llobregat",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Cornellà de Llobregat",
      addressLocality: "Cornellà de Llobregat",
      areaServedName: "Cornellà de Llobregat",
    },
    heroImage: "/images/gestora8.jpg",
  },
];

export function getMetroLandingSegments(): { segments: string[] }[] {
  return ADMINISTRACION_ALQUILER_METRO_LANDINGS.map((l) => ({
    segments: [...l.segments],
  }));
}

export function getMetroLandingBySegments(segments: string[]): AdministracionAlquilerMetroLanding | undefined {
  const key = segments.join("/");
  return ADMINISTRACION_ALQUILER_METRO_LANDINGS.find((l) => l.segments.join("/") === key);
}
