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
import { localAdministracionAlquilerHref } from "@/lib/administracion-alquiler-local-cities";
import { localContratoAlquilerHref } from "@/lib/contrato-alquiler-local-cities";
import { localContratoArrasHref } from "@/lib/contrato-arras-local-cities";
import { GESTORIA_INMOBILIARIA_LOCAL_BASE } from "@/lib/gestoria-inmobiliaria-local-cities";

export const CONTRATOS_INMOBILIARIOS_BARCELONA_PATH = "/contratos-inmobiliarios-barcelona" as const;

export const CONTRATOS_INMOBILIARIOS_BARCELONA_META = {
  title: "Contratos inmobiliarios Barcelona | Gestoría Livendia",
  description:
    "Gestoría inmobiliaria en Barcelona y Cataluña: contratos LAU, temporada, habitación, arras y compraventa entre particulares. Panel online, gestor dedicado y administración de alquiler. Precios fijos IVA incl.",
  keywords: [
    "contratos inmobiliarios barcelona",
    "gestoría contratos inmobiliarios barcelona",
    "gestoría inmobiliaria barcelona particulares",
    "contrato alquiler barcelona gestoría",
    "contrato arras barcelona",
    "contrato alquiler habitación barcelona",
    "contrato alquiler temporada barcelona",
    "administración alquiler barcelona",
    "contratos inmobiliarios eixample",
    "contratos inmobiliarios hospitalet",
    "contratos inmobiliarios gràcia",
    "tramitar contrato inmobiliario cataluña",
  ],
};

export type ContratosBcnServiceSection = {
  id: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  lead: string;
  localContext: string;
  stepsTitle: string;
  steps: string[];
  bullets: string[];
  priceLabel: string;
  serviceSlug: string;
  serviceHref: string;
  localHref?: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

export const CONTRATOS_BCN_SERVICE_SECTIONS: ContratosBcnServiceSection[] = [
  {
    id: "arras",
    navLabel: "Contrato de arras",
    eyebrow: "Apartado 1 · Compraventa entre particulares",
    title: "Contrato de arras en Barcelona",
    lead:
      "En Livendia no rellenamos plantillas genéricas: un gestor inmobiliario recoge datos de comprador, vendedor e inmueble, revisa la nota simple y redacta arras penitenciales o confirmatorias adaptadas a la operación y al marco catalán (CCCat).",
    localContext:
      "En Barcelona y área metropolitana conviene anticipar ITE cuando el edificio lo exija, cargas registrales, derramas de comunidad y coherencia entre precio, señal y plazo de escritura — especialmente en operaciones en Eixample, Gràcia o L'Hospitalet.",
    stepsTitle: "Cómo lo hacemos en Livendia",
    steps: [
      "Recogemos datos de las partes, precio, señal y plazo para escritura.",
      "Revisamos nota simple, cargas registrales y coherencia con lo pactado.",
      "Redactamos cláusulas (penitenciales/confirmatorias), condiciones de hipoteca y gastos.",
      "Entregamos PDF listo para firmar en ~48 h con revisiones incluidas los 7 días siguientes.",
    ],
    bullets: [
      "Gestor dedicado por WhatsApp y panel online.",
      "Enfoque comprador o vendedor según el servicio contratado.",
      "Sin comisión sobre el precio del inmueble.",
    ],
    priceLabel: `${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl.`,
    serviceSlug: "contrato-arras-penitenciales",
    serviceHref: "/servicios/contrato-arras-penitenciales",
    localHref: localContratoArrasHref("barcelona"),
    image: "/images/contratodearras.jpg",
    imageAlt: "Gestor Livendia redactando contrato de arras en Barcelona",
  },
  {
    id: "lau",
    navLabel: "Alquiler LAU",
    eyebrow: "Apartado 2 · Vivienda habitual",
    title: "Contrato de alquiler en Barcelona (LAU) con inventario y fianza",
    lead:
      "Redactamos contratos de larga duración conforme a la LAU y a la normativa de vivienda vigente: renta, duración, fianza legal, actualizaciones, cláusulas de convivencia e inventario detallado.",
    localContext:
      "En Barcelona aplicamos el contexto local: límites de renta cuando proceda, depósito en INCASÒL, referencias de barrio (Poblenou, Gràcia, Eixample, Sants…) y coherencia con la documentación del piso (ITE, cédula, comunidad).",
    stepsTitle: "Cómo lo hacemos en Livendia",
    steps: [
      "Definimos renta, duración, fianza legal y forma de pago.",
      "Redactamos cláusulas (mascotas, subarriendo, uso del piso, suministros).",
      "Elaboramos inventario amueblado con mobiliario y electrodomésticos.",
      "Regulamos la fianza ante el organismo autonómico cuando corresponda.",
      "Entregamos contrato + inventario en PDF en ~48 h.",
    ],
    bullets: [
      "Actualizado a LAU y Ley de Vivienda 2023.",
      "Inventario profesional incluido en el servicio LAU.",
      "Revisión de borrador antes de firmar.",
    ],
    priceLabel: `${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl.`,
    serviceSlug: CONTRATO_ALQUILER_LAU_SLUG,
    serviceHref: `/servicios/${CONTRATO_ALQUILER_LAU_SLUG}`,
    localHref: localContratoAlquilerHref("barcelona"),
    image: "/images/contratodealquiler.jpg",
    imageAlt: "Contrato de alquiler LAU redactado por gestoría Livendia Barcelona",
    reverse: true,
  },
  {
    id: "temporada",
    navLabel: "Alquiler temporada",
    eyebrow: "Apartado 3 · Estancias temporales",
    title: "Contrato de alquiler de temporada en Barcelona y Cataluña",
    lead:
      "Para estancias por estudios, desplazamiento laboral, teletrabajo estacional o segunda residencia temporal, redactamos contratos fuera del régimen de vivienda habitual cuando la operación lo permite, con plazos, precio y condiciones claras.",
    localContext:
      "En zonas turísticas y de alta rotación (Barceloneta, Born, parte de Eixample, costa del Maresme desde Barcelona) conviene delimitar duración, suministros, limpieza y uso para evitar reclasificaciones indebidas como LAU.",
    stepsTitle: "Cómo lo hacemos en Livendia",
    steps: [
      "Analizamos motivo de la estancia, duración y partes.",
      "Redactamos contrato de temporada con cláusulas de uso y precio.",
      "Incluimos inventario cuando el piso va amueblado.",
      "Coordinamos documentación (DNI, poderes, titularidad).",
      "Entrega en PDF con soporte del gestor hasta la firma.",
    ],
    bullets: [
      "Ideal para propietarios e inquilinos particulares.",
      "Compatible con administración Livendia temporada/habitación.",
      "Asesoramiento sobre límites legales del régimen temporal.",
    ],
    priceLabel: `${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl.`,
    serviceSlug: CONTRATO_ALQUILER_TEMPORADA_SLUG,
    serviceHref: `/servicios/${CONTRATO_ALQUILER_TEMPORADA_SLUG}`,
    localHref: localContratoAlquilerHref("barcelona"),
    image: "/images/gestoria20.jpg",
    imageAlt: "Contrato alquiler temporada Barcelona gestoría Livendia",
  },
  {
    id: "habitacion",
    navLabel: "Alquiler habitación",
    eyebrow: "Apartado 4 · Piso compartido",
    title: "Contrato de alquiler de habitación en Barcelona",
    lead:
      "Redactamos contratos de habitación en piso compartido: uso de zonas comunes, duración, renta, fianza, convivencia y suministros, alineados con la normativa estatal y el marco catalán cuando aplica.",
    localContext:
      "Muy demandado en Gràcia, Eixample, Poblenou, Sants y L'Hospitalet de Llobregat. Ajustamos cláusulas a pisos compartidos, coliving y alquiler de habitación con reglas claras para evitar conflictos.",
    stepsTitle: "Cómo lo hacemos en Livendia",
    steps: [
      "Identificamos habitación, zonas comunes y partes.",
      "Definimos renta, duración, fianza y reparto de gastos.",
      "Redactamos normas de convivencia y uso (visitas, mascotas, limpieza).",
      "Entregamos contrato + anexo de inventario de la habitación.",
      "Soporte del gestor para dudas antes de firmar.",
    ],
    bullets: [
      "Enfoque práctico para propietarios e inquilinos.",
      "Cláusulas adaptadas a piso compartido.",
      "Panel online para documentación de las partes.",
    ],
    priceLabel: `${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl.`,
    serviceSlug: CONTRATO_ALQUILER_HABITACION_SLUG,
    serviceHref: `/servicios/${CONTRATO_ALQUILER_HABITACION_SLUG}`,
    localHref: localContratoAlquilerHref("barcelona-gracia"),
    image: "/images/chicasofaazul.png",
    imageAlt: "Contrato alquiler habitación Barcelona Livendia",
    reverse: true,
  },
  {
    id: "compraventa",
    navLabel: "Compra y venta",
    eyebrow: "Apartado 5 · Acompañamiento integral",
    title: "Acompañamiento de compra y venta entre particulares en Barcelona",
    lead:
      "Más allá del contrato puntual, acompañamos compradores y vendedores desde reserva o arras hasta escritura: revisión documental, coordinación con notaría y checklist de cierre — tarifa plana, sin comisión del 3–5 % de agencia.",
    localContext:
      "Operaciones en Barcelona ciudad, L'Hospitalet, Badalona, Sant Adrià o Cornellà: cédula de habitabilidad, certificado energético, ITE, comunidad y plusvalía municipal según municipio.",
    stepsTitle: "Cómo lo hacemos en Livendia",
    steps: [
      "Primera llamada en menos de 24 h: plazos, precio y documentación.",
      "Revisión de reserva, arras, notas simples, cargas y certificados.",
      "Redacción o corrección de contratos en interés del cliente.",
      "Checklist hasta notaría y seguimiento con gestor dedicado.",
    ],
    bullets: [
      `Servicio completo desde ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
      "Gestor asignado y panel de expediente online.",
      "Transparencia total: sin honorarios ocultos.",
    ],
    priceLabel: `Desde ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
    serviceSlug: "servicio-completo-compra",
    serviceHref: "/servicios/servicio-completo-compra",
    localHref: `${GESTORIA_INMOBILIARIA_LOCAL_BASE}/barcelona`,
    image: "/images/equipo2.jpg",
    imageAlt: "Acompañamiento compraventa particulares Barcelona Livendia",
  },
  {
    id: "admin",
    navLabel: "Administración alquiler",
    eyebrow: "Apartado 6 · Gestión continuada",
    title: "Administración de alquiler de viviendas en Barcelona",
    lead:
      "Somos especialistas en administración de alquiler para propietarios particulares: cobro de rentas, incidencias, documentación del inquilino, panel de gestión y relación con tu gestor — sin permanencia en la cuota mensual.",
    localContext:
      "Ideal si ya tienes inquilino en Barcelona o área metropolitana y quieres delegar la gestión diaria manteniendo control desde el panel Livendia (inmueble, inquilino, chat, documentos y pagos).",
    stepsTitle: "Qué incluye la administración",
    steps: [
      "Alta del inmueble e inquilino en tu panel de alquiler.",
      "Seguimiento de incidencias y comunicación con el arrendatario.",
      "Archivo de contratos, facturas Livendia y documentación.",
      "Cuota mensual de gestión con facturación transparente.",
    ],
    bullets: [
      `${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl. — sin permanencia.`,
      "Panel online 24/7 para propietario.",
      "Gestor humano cuando lo necesitas.",
    ],
    priceLabel: ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
    serviceSlug: ADMINISTRACION_ALQUILER_SLUG,
    serviceHref: `/servicios/${ADMINISTRACION_ALQUILER_SLUG}`,
    localHref: localAdministracionAlquilerHref("barcelona"),
    image: "/images/gestora8.jpg",
    imageAlt: "Administración alquiler viviendas Barcelona Livendia",
    reverse: true,
  },
];

export const LIVENDIA_PROCESS_STEPS = [
  {
    title: "Hablas con tu gestor",
    body: "Cuéntanos la operación (compra, venta, alquiler LAU, habitación o temporada). Respondemos en horario laboral y agendamos la primera llamada en menos de 24 h.",
  },
  {
    title: "Contratas y pagas online",
    body: "Eliges el servicio con precio fijo IVA incluido, pagas de forma segura y recibes confirmación al instante en tu email.",
  },
  {
    title: "Subes la documentación al panel",
    body: "Cada cliente dispone de un área privada para cargar DNI, notas simples, borradores, fotos del piso e inventarios. Todo queda archivado por expediente.",
  },
  {
    title: "Redacción y formalización",
    body: "El gestor redacta o revisa contratos, coordina ajustes contigo y prepara la versión definitiva para firma (presencial o según acordéis).",
  },
  {
    title: "Entrega y seguimiento",
    body: "Recibes PDFs finales, checklist cumplido y, si contrataste administración de alquiler, acceso al panel de gestión del inmueble.",
  },
] as const;

export const BARCELONA_ZONE_LINKS = [
  {
    name: "Eixample",
    slug: "barcelona-eixample",
    blurb: "Contratos LAU, arras y administración en el corazón de Barcelona.",
    image: "/images/zonas barcelona/eixample4.jpg",
    href: localContratoAlquilerHref("barcelona-eixample"),
  },
  {
    name: "Gràcia",
    slug: "barcelona-gracia",
    blurb: "Alquiler de habitación y contratos de larga duración en vivienda de barrio.",
    image: "/images/zonas barcelona/pexels-gabicostae-20318695.jpg",
    href: localContratoAlquilerHref("barcelona-gracia"),
  },
  {
    name: "L'Hospitalet de Llobregat",
    slug: "hospitalet-de-llobregat",
    blurb: "Gestoría para particulares en la segunda ciudad del área metropolitana.",
    image: "/images/zonas barcelona/hospitalet (2).jpg",
    href: localContratoArrasHref("hospitalet-de-llobregat"),
  },
  {
    name: "Poblenou",
    slug: "barcelona-poblenou",
    blurb: "Temporada, LAU y compraventa en zona 22@ y frente marítim.",
    image: "/images/zonas barcelona/pexels-marc-barcelona-2573466-40149832.jpg",
    href: localContratoAlquilerHref("barcelona-poblenou"),
  },
  {
    name: "Sants – Montjuïc",
    slug: "barcelona-sants-montjuic",
    blurb: "Contratos inmobiliarios cerca de Sants Estació y entorno Montjuïc.",
    image: "/images/zonas barcelona/sants1.jpg",
    href: localContratoAlquilerHref("barcelona-sants-montjuic"),
  },
  {
    name: "Les Corts",
    slug: "barcelona-les-corts",
    blurb: "Arras y alquiler entre particulares en Les Corts y entorno.",
    image: "/images/zonas barcelona/diagonal.jpg",
    href: localContratoAlquilerHref("barcelona-les-corts"),
  },
] as const;

export const CONTRATOS_BCN_FAQ = [
  {
    q: "¿Qué es Livendia y en qué se diferencia de una inmobiliaria?",
    a: "Livendia es una gestoría inmobiliaria online para particulares: redactamos y tramitamos contratos (arras, LAU, temporada, habitación) y administramos alquileres con precio fijo. No vendemos pisos ni cobramos comisión sobre el precio del inmueble.",
  },
  {
    q: "¿Tramitáis contratos inmobiliarios en todo Cataluña?",
    a: "Sí. Nuestro foco de contenido y gestión cubre Barcelona ciudad, área metropolitana (L'Hospitalet, Badalona, Cornellà…) y el resto de Cataluña en operaciones entre particulares, con adaptación al CCCat cuando procede.",
  },
  {
    q: "¿Cómo funciona el panel online del cliente?",
    a: "Tras contratar, accedes a tu área privada: subes documentación, sigues el estado del expediente, descargas entregables y, en administración de alquiler, gestionas inmueble, inquilino, incidencias y facturas Livendia.",
  },
  {
    q: "¿Los contratos cumplen la LAU y la Ley de Vivienda?",
    a: "Sí. Los contratos de larga duración se redactan conforme a la LAU y normativa de vivienda aplicable; temporada y habitación se diseñan según el régimen que corresponda a cada caso, con asesoramiento del gestor.",
  },
  {
    q: "¿Cuánto tarda la entrega del contrato?",
    a: "La mayoría de redacciones (arras, LAU, habitación) se entregan en torno a 48 horas laborables desde que recibimos la documentación completa en el panel. Plazos pueden ampliarse en operaciones complejas.",
  },
  {
    q: "¿Puedo contratar solo un contrato o también gestión del alquiler?",
    a: "Puedes contratar servicios puntuales (por ejemplo solo LAU) o la administración mensual del alquiler con panel dedicado. En la misma landing encontrarás precios y enlaces a cada servicio.",
  },
] as const;
