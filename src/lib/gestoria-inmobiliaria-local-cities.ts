/**
 * Landings SEO unificadas por ciudad: compraventa + contratos + administración.
 * Rutas: /gestoria/[slug]
 */

export const GESTORIA_INMOBILIARIA_LOCAL_BASE = "/gestoria";

export const GESTORIA_INMOBILIARIA_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "zaragoza",
  "alicante",
  "murcia",
];

export type GestoriaInmobiliariaLocalLandingConfig = {
  path: string;
  slug: string;
  city: string;
  schemaAdministrativeArea: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroLead: string;
  compraventa: {
    h2: string;
    intro: string;
    h3Reserva: string;
    reservaCopy: string;
    h3Completo: string;
    completoCopy: string;
  };
  contratos: {
    h2: string;
    intro: string;
    h3Arras: string;
    arrasCopy: string;
    h3Lau: string;
    lauCopy: string;
    h3Temporada: string;
    temporadaCopy: string;
  };
  administracion: {
    h2: string;
    intro: string;
    h3Incluye: string;
    incluyeCopy: string;
    h3Precio: string;
    precioCopy: string;
  };
  faq: { question: string; answer: string }[];
  finalCtaLead: string;
};

export type GestoriaInmobiliariaLocalCityDefinition = Omit<GestoriaInmobiliariaLocalLandingConfig, "path">;

export function localGestoriaInmobiliariaHref(slug: string): string {
  return `${GESTORIA_INMOBILIARIA_LOCAL_BASE}/${slug}`;
}

export function toGestoriaInmobiliariaLandingConfig(
  def: GestoriaInmobiliariaLocalCityDefinition,
): GestoriaInmobiliariaLocalLandingConfig {
  return { ...def, path: localGestoriaInmobiliariaHref(def.slug) };
}

export function getGestoriaInmobiliariaLocalCity(
  slug: string,
): GestoriaInmobiliariaLocalCityDefinition | undefined {
  return GESTORIA_INMOBILIARIA_LOCAL_CITIES.find((c) => c.slug === slug);
}

export function isGestoriaInmobiliariaLocalSlugPublished(slug: string): boolean {
  return GESTORIA_INMOBILIARIA_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedGestoriaInmobiliariaLocalCities(): GestoriaInmobiliariaLocalCityDefinition[] {
  const pub = new Set(GESTORIA_INMOBILIARIA_LOCAL_PUBLISHED_SLUGS);
  return GESTORIA_INMOBILIARIA_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

export const GESTORIA_INMOBILIARIA_LOCAL_CITIES: GestoriaInmobiliariaLocalCityDefinition[] = [
  {
    slug: "zaragoza",
    city: "Zaragoza",
    schemaAdministrativeArea: "Aragón",
    metaTitle: "Gestoría inmobiliaria y alquileres en Zaragoza | Livendia",
    metaDescription:
      "Gestoría compraventa vivienda Zaragoza: acompañamiento 424 €, servicio completo 666 €, contratos LAU/arras 120-145 € y administración alquileres 49 €/mes sin permanencia.",
    h1: "Gestoría inmobiliaria en Zaragoza: compraventa, contratos y administración de alquileres",
    heroLead:
      "Compra piso entre particulares, redacta contratos legales o delega la gestión del alquiler en Zaragoza capital y comarca. Precios fijos publicados, gestoría online y entrega en 48-72 h en contratos.",
    compraventa: {
      h2: "Gestoría compraventa vivienda en Zaragoza entre particulares",
      intro:
        "Los trámites compra piso Zaragoza suelen ir con prisa: reservas genéricas, arras copiadas y cláusulas de agencias que no se leen hasta después de la señal. Livendia revisa la nota simple, la documentación urbanística y cada texto antes de que muevas dinero.",
      h3Reserva: "Acompañamiento Reserva hasta Arras — 424 € (IVA incl.)",
      reservaCopy:
        "Revisión de contrato de reserva, nota registral, cédula de habitabilidad y arras penitenciales o confirmatorias. Ideal si ya tienes piso elegido en Delicias, Casco Histórico o comarca y quieres un gestor que traduzca riesgos a lenguaje claro.",
      h3Completo: "Servicio Completo hasta Escritura y Notaría — 666 € (IVA incl.)",
      completoCopy:
        "Gestor personal desde la reserva hasta la firma en notaría: coordinación con vendedor, agencia y banco, defensa frente a cláusulas abusivas y seguimiento de plazos. La opción más completa para tramites compra piso Zaragoza con todas las garantías.",
    },
    contratos: {
      h2: "Redacción contrato alquiler en Zaragoza y contrato de arras en Zaragoza",
      intro:
        "Contratos LAU, temporada, habitación o arras con precio cerrado y revisión profesional. Entrega en 48-72 h laborables tras recibir datos e inventario.",
      h3Arras: "Contrato de Arras — 145 € (IVA incl.)",
      arrasCopy:
        "Penitenciales o confirmatorias adaptadas a tu operación de compraventa en Zaragoza. Incluye revisión de condiciones suspensivas, plazos y penalidades antes de firmar.",
      h3Lau: "Contrato LAU — 120 € (IVA incl.)",
      lauCopy:
        "Arrendamiento habitual con renta, fianza, IPC, gastos de comunidad y causas de resolución alineadas con la LAU vigente. Inventario fotográfico recomendado.",
      h3Temporada: "Contrato Temporada / Habitación — 120 € (IVA incl.)",
      temporadaCopy:
        "Para estancias temporales, estudiantes en Universidad o alquiler por habitaciones en pisos compartidos. Cláusulas de convivencia y suministros separadas por escrito.",
    },
    administracion: {
      h2: "Administración de alquileres en Zaragoza — gestión integral sin permanencia",
      intro:
        "Delega la relación con el inquilino: incidencias, averías, mediación y seguimiento de renovaciones. Tú decides; nosotros ejecutamos y documentamos.",
      h3Incluye: "Qué incluye la gestión integral de alquileres en Zaragoza",
      incluyeCopy:
        "Canal único con el arrendatario, coordinación de reparaciones, control de pagos y alertas solo cuando hace falta tu firma. Compatible con pisos en barrios universitarios, ensanche o municipios del cinturón.",
      h3Precio: "Tarifa plana 49 €/mes (IVA incl.) — sin permanencia",
      precioCopy:
        "El propietario se desentiende de llamadas, urgencias de fontanería o conflictos menores. Sin letra pequeña ni permanencia: cancelas cuando quieras desde el panel Livendia.",
    },
    faq: [
      {
        question: "¿Atendéis compraventas fuera del casco urbano de Zaragoza?",
        answer:
          "Sí. Cubrimos Zaragoza capital, área metropolitana y operaciones en comarca siempre que la documentación sea accesible de forma digital.",
      },
      {
        question: "¿Cuánto tarda un contrato de alquiler en Zaragoza?",
        answer: "Entre 48 y 72 h laborables desde que recibimos datos completos del inmueble y las partes.",
      },
      {
        question: "¿La administración de alquiler incluye encontrar inquilino?",
        answer:
          "No incluye captación ni visitas. Entra en vigor una vez firmado el contrato: gestionamos la relación día a día con quien ya ocupa el piso.",
      },
    ],
    finalCtaLead:
      "Elige el servicio que necesitas en Zaragoza: compraventa desde 424 €, contratos desde 120 € o administración 49 €/mes. Contratación online en minutos.",
  },
  {
    slug: "alicante",
    city: "Alicante",
    schemaAdministrativeArea: "Comunidad Valenciana",
    metaTitle: "Gestoría inmobiliaria y alquileres en Alicante | Livendia",
    metaDescription:
      "Tramites compra piso Alicante y redacción contrato alquiler Alicante. Acompañamiento 424 €, servicio 666 €, arras 145 €, LAU 120 € y administración 49 €/mes Livendia.",
    h1: "Gestoría inmobiliaria en Alicante: compraventa, contratos y administración de alquileres",
    heroLead:
      "Gestoría inmobiliaria digital para propietarios e inversores en Alicante ciudad y zona costera. Precios transparentes en compraventa entre particulares, contratos legales y administración mensual del alquiler.",
    compraventa: {
      h2: "Gestoría compraventa vivienda en Alicante entre particulares",
      intro:
        "El mercado alicantino mezcla compradores locales, segunda residencia y operaciones rápidas en Playa de San Juan o centro. Los tramites compra piso Alicante exigen revisar cargas, comunidad y contratos de reserva antes de entregar arras.",
      h3Reserva: "Acompañamiento Reserva hasta Arras — 424 € (IVA incl.)",
      reservaCopy:
        "Análisis de reserva, nota simple registral, arras y documentación urbanística. Detectamos honorarios encadenados, plazos irreales y lagunas antes de la señal.",
      h3Completo: "Servicio Completo hasta Escritura y Notaría — 666 € (IVA incl.)",
      completoCopy:
        "Acompañamiento integral con gestor dedicado: negociación documental, coordinación con notaría y alerta temprana ante cláusulas que suelen costar miles si no se revisan a tiempo.",
    },
    contratos: {
      h2: "Redacción contrato alquiler en Alicante y contrato de arras en Alicante",
      intro:
        "Precios fijos para LAU, temporada, habitación y arras. Entrega en 48-72 h con inventario y cláusulas adaptadas al uso real (habitual, turístico-residencial o habitaciones).",
      h3Arras: "Contrato de Arras — 145 € (IVA incl.)",
      arrasCopy:
        "Contrato de arras penitenciales o confirmatorias para compraventa en Alicante. Condiciones suspensivas, plazos de hipoteca y penalidades revisadas por gestor.",
      h3Lau: "Contrato LAU — 120 € (IVA incl.)",
      lauCopy:
        "Arrendamiento de larga duración con fianza, actualización de renta, gastos y mantenimiento conforme a LAU. Ideal para vivienda habitual en barrios residenciales.",
      h3Temporada: "Contrato Temporada / Habitación — 120 € (IVA incl.)",
      temporadaCopy:
        "Estancias temporales, contratos por habitación en pisos compartidos o alquiler orientado a temporada en zona universitaria o costera, con límites de ocupación claros.",
    },
    administracion: {
      h2: "Administración de alquileres en Alicante — gestión integral sin permanencia",
      intro:
        "Gestión integral de alquileres Alicante: tú no hablas con el inquilino, nosotros canalizamos incidencias, averías y renovaciones con criterio profesional.",
      h3Incluye: "Qué incluye la gestión integral de alquileres en Alicante",
      incluyeCopy:
        "Intermediación ante el arrendatario, coordinación de reparaciones, seguimiento de pagos, mediación en conflictos y alertas cuando necesitas decidir.",
      h3Precio: "Tarifa plana 49 €/mes (IVA incl.) — sin permanencia",
      precioCopy:
        "Despreocúpate de averías, llamadas fuera de horario y pequeñas disputas. Tarifa plana sin permanencia: el propietario delega; Livendia ejecuta.",
    },
    faq: [
      {
        question: "¿Gestionáis alquileres en Playa de San Juan o San Vicente?",
        answer:
          "Sí, en Alicante ciudad, área metropolitana y municipios cercanos con el mismo protocolo de incidencias y mediación.",
      },
      {
        question: "¿El servicio de 666 € incluye la hipoteca?",
        answer:
          "Coordinamos plazos y documentación con el banco, pero la tramitación hipotecaria la lleva tu entidad financiera.",
      },
      {
        question: "¿Puedo contratar solo el contrato de arras en Alicante?",
        answer: "Sí. El contrato de arras (145 €) es independiente y se entrega en 48-72 h laborables.",
      },
    ],
    finalCtaLead:
      "Contrata online en Alicante: compraventa 424 € o 666 €, contratos desde 120 € y administración 49 €/mes. Sin permanencia en la gestión del alquiler.",
  },
  {
    slug: "murcia",
    city: "Murcia",
    schemaAdministrativeArea: "Región de Murcia",
    metaTitle: "Gestoría inmobiliaria online en Murcia | Precios Livendia",
    metaDescription:
      "Gestoría compraventa vivienda Murcia: 424 € y 666 €. Redacción contrato alquiler Murcia desde 120 €, arras 145 € y administración de alquileres 49 €/mes sin permanencia.",
    h1: "Gestoría inmobiliaria en Murcia: compraventa, contratos y administración de alquileres",
    heroLead:
      "Servicios de gestoría inmobiliaria en Murcia capital y área metropolitana con tarifas publicadas. Compraventa asistida, contratos en 48-72 h y administración mensual para propietarios que quieren desentenderse del inquilino.",
    compraventa: {
      h2: "Gestoría compraventa vivienda en Murcia entre particulares",
      intro:
        "Los tramites compra piso Murcia entre particulares requieren revisar nota simple, cargas y contratos antes de las arras. Evita firmar plantillas de agencia sin segundo par profesional.",
      h3Reserva: "Acompañamiento Reserva hasta Arras — 424 € (IVA incl.)",
      reservaCopy:
        "Revisión de reserva, nota registral, cédula de habitabilidad y contrato de arras. Priorizamos lo negociable antes de que el dinero quede atado a un texto genérico.",
      h3Completo: "Servicio Completo hasta Escritura y Notaría — 666 € (IVA incl.)",
      completoCopy:
        "Gestor experto desde la señal hasta notaría: defensa frente a cláusulas abusivas, coordinación con vendedor y seguimiento documental en Centro, Espinardo, El Carmen o pedanías cercanas.",
    },
    contratos: {
      h2: "Redacción contrato alquiler en Murcia y contrato de arras en Murcia",
      intro:
        "Contrato de arras en Murcia y contratos LAU, temporada o habitación con precio cerrado. Entrega en 48-72 h laborables tras recibir la información del inmueble.",
      h3Arras: "Contrato de Arras — 145 € (IVA incl.)",
      arrasCopy:
        "Arras penitenciales o confirmatorias con condiciones suspensivas, plazos y penalidades revisadas. Imprescindible antes de transferir la señal en una compraventa murciana.",
      h3Lau: "Contrato LAU — 120 € (IVA incl.)",
      lauCopy:
        "Arrendamiento habitual con depósito, fianza, IPC, gastos de comunidad y causas de resolución redactadas conforme a la LAU. Inventario fotográfico para evitar disputas.",
      h3Temporada: "Contrato Temporada / Habitación — 120 € (IVA incl.)",
      temporadaCopy:
        "Para estancias temporales, alquiler por habitación en pisos compartidos o contratos fuera del régimen LAU estándar, con normas de convivencia explícitas.",
    },
    administracion: {
      h2: "Administración de alquileres en Murcia — gestión integral sin permanencia",
      intro:
        "Administración de alquileres en Murcia con tarifa plana: intermediamos con el inquilino, gestionamos averías y documentamos cada incidencia hasta su cierre.",
      h3Incluye: "Qué incluye la gestión integral de alquileres en Murcia",
      incluyeCopy:
        "Canal único con el arrendatario, coordinación de reparaciones, control de renovaciones y mediación profesional si surge discrepancia sobre pagos o mantenimiento.",
      h3Precio: "Tarifa plana 49 €/mes (IVA incl.) — sin permanencia",
      precioCopy:
        "El propietario no atiende llamadas ni urgencias: Livendia filtra, coordina técnicos y te informa solo cuando hace falta tu decisión. Sin permanencia ni costes ocultos.",
    },
    faq: [
      {
        question: "¿Cubrís pedanías y municipios del área metropolitana de Murcia?",
        answer:
          "Sí. Mismo servicio en capital, Espinardo, Alcantarilla, Molina de Segura y núcleos cercanos con operativa digital.",
      },
      {
        question: "¿Qué documentación necesito para la compraventa asistida?",
        answer:
          "Contrato de reserva (si existe), nota simple, ITE o cédula cuando aplique y datos de comprador y vendedor. Te guiamos desde el primer contacto.",
      },
      {
        question: "¿La administración gestiona impagos?",
        answer:
          "Coordinamos reclamación amistosa y documentación, pero no incluye procedimiento judicial. Te avisamos en cuanto detectamos retraso en el pago.",
      },
    ],
    finalCtaLead:
      "Empieza en Murcia con precios fijos: 424 €, 666 €, contratos 120-145 € o administración 49 €/mes. Contratación 100 % online.",
  },
];

/** Productos con precio fijo para JSON-LD (LegalService + Product/Offer). */
export const GESTORIA_SCHEMA_OFFERS = [
  {
    slug: "acompanamiento-reserva-arras",
    name: "Acompañamiento Reserva hasta Arras con revisión de nota simple",
    price: "424.00",
  },
  {
    slug: "revision-documental-post-arras",
    name: "Pack Revisión Documental post-arras",
    price: "169.00",
  },
  {
    slug: "servicio-completo-compra",
    name: "Servicio Completo hasta Escritura y Notaría",
    price: "666.00",
  },
  {
    slug: "contrato-arras-penitenciales",
    name: "Contrato de Arras",
    price: "145.00",
  },
  {
    slug: "contrato-alquiler-lau",
    name: "Contrato LAU",
    price: "120.00",
  },
  {
    slug: "contrato-alquiler-temporada",
    name: "Contrato de Temporada",
    price: "120.00",
  },
  {
    slug: "contrato-alquiler-habitacion",
    name: "Contrato de Habitación",
    price: "120.00",
  },
  {
    slug: "administracion-alquiler",
    name: "Administración mensual de alquiler",
    price: "49.00",
    unitText: "MONTH",
  },
] as const;
