/**
 * Landings metro Barcelona — administración de alquiler por barrio/municipio.
 * Rutas: /administracion-alquiler/…
 *
 * Contenido único por zona (hero, barrios, testimonios, FAQ local) para evitar thin/duplicate.
 * Imágenes: solo rutas bajo public/images/ trackeadas en git.
 */

export const ADMINISTRACION_ALQUILER_METRO_BASE = "/administracion-alquiler";

export type MetroServiceItem = {
  title: string;
  description: string;
};

export type MetroTestimonial = {
  quote: string;
  author: string;
  role: string;
};

export type AdministracionAlquilerMetroLanding = {
  segments: readonly string[];
  path: string;
  /** Nombre corto de la zona para titulares y CTAs */
  zoneLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  heroLead: string;
  eeatHeading: string;
  eeatBlock: string;
  whyIntro: string;
  howIntro: string;
  barriosIntro?: string;
  barrios?: readonly string[];
  serviceGrid?: readonly MetroServiceItem[];
  serviceBullets?: readonly MetroServiceItem[];
  testimonialsTitle: string;
  testimonials: readonly MetroTestimonial[];
  localFaq: readonly { question: string; answer: string }[];
  finalCtaLead: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  waPlaceLabel: string;
  heroImage: string;
  howImages: readonly string[];
  /** Slug en ALQUILER_REGULATORY_BY_SLUG (p. ej. barcelona) */
  regulatorySlug?: string;
  jsonLd: {
    name: string;
    addressLocality: string;
    addressRegion?: string;
    geo?: { latitude: string; longitude: string };
    areaServedName: string;
  };
};

/** FAQ común a las 4 landings (oficina, precio, permanencia). */
export const METRO_ADMINISTRACION_FAQ: readonly { question: string; answer: string }[] = [
  {
    question: "¿Dónde están ubicadas las oficinas de Livendia?",
    answer:
      "Nuestra sede central está en el distrito de Les Corts en Barcelona (Carrer de Mejía Lequerica, 44), lo que nos permite dar servicio presencial y ágil en Barcelona capital (Gràcia, Les Corts, Eixample) y en todo el área metropolitana (L'Hospitalet, Cornellà, Sant Cugat).",
  },
  {
    question: "¿Qué incluye exactamente la cuota de 49 €/mes?",
    answer:
      "Incluye la gestión integral: cobranza mensual de la renta, atención e intermediación de incidencias 24/7 con el inquilino, gestión de fianzas en INCASÒL, cambios de titularidad de suministros y actualización legal del contrato. Tú no hablas con el arrendatario: Livendia es el único canal.",
  },
  {
    question: "¿Existe compromiso de permanencia?",
    answer:
      "No. El servicio de administración de alquileres de Livendia no tiene permanencia. Puedes cancelar el servicio en cualquier momento con un preaviso de 30 días.",
  },
];

const HOW_IMAGES_DEFAULT = [
  "/images/gestoria.jpg",
  "/images/familia2.jpg",
  "/images/equipo1.jpg",
  "/images/gestoria5.jpg",
] as const;

export const ADMINISTRACION_ALQUILER_METRO_LANDINGS: AdministracionAlquilerMetroLanding[] = [
  {
    segments: ["barcelona", "les-corts"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/barcelona/les-corts`,
    zoneLabel: "Les Corts",
    metaTitle: "Gestión y Administración de Alquileres en Les Corts, Barcelona",
    metaDescription:
      "Administramos tu piso en Les Corts (Pedralbes, Maternitat) por 49 €/mes. Oficina física en el propio distrito. Cobro garantizado, INCASÒL e incidencias.",
    h1: "Gestión y Administración de Alquileres en Les Corts (Barcelona)",
    subtitle:
      "Asesoramiento legal y gestión integral con oficina física en tu propio distrito. Tu alquiler en manos de expertos por 49 €/mes sin permanencia.",
    heroLead:
      "¿Cansado de que el inquilino te llame un domingo por una avería? En Les Corts —desde Pedralbes y La Maternitat hasta el eje Diagonal— Livendia se convierte en tu único interlocutor con el arrendatario: cobramos la renta, gestionamos incidencias con industriales de confianza y solo te avisamos cuando hace falta tu firma o tu decisión. Nuestra sede está en el propio distrito: no somos un call center lejano.",
    eeatHeading: "Conocemos Les Corts porque estamos aquí",
    eeatBlock:
      "Nuestra sede central está ubicada físicamente en el distrito de Les Corts (Mejía Lequerica, 44). Conocemos al detalle el mercado de Pedralbes, La Maternitat i Sant Ramon y Les Corts centro, el perfil del inquilino de la zona —familias, profesionales del Hospital Clínic, expatriados— y los límites del Índice de Referencia de Precios de Alquiler en Cataluña. Barcelona está en zona tensionada: cada renovación exige criterio legal que aplicamos antes de que firmes.",
    whyIntro:
      "Livendia no sustituye tu rol como propietario: tú sigues decidiendo sobre la renta, las obras importantes o la venta del piso. Lo que eliminamos es el contacto diario con el inquilino —llamadas, WhatsApp a deshora, presión de la comunidad— para que te centres en lo que importa. En Les Corts, donde el ticket medio supera los 1.800 €/mes en Pedralbes y baja en Maternitat, ese filtro profesional evita malentendidos costosos.",
    howIntro:
      "Cuatro hitos claros desde el alta hasta el día a día: onboarding con datos del piso y del inquilino en Les Corts o Pedralbes, canal único Livendia-inquilino, coordinación de reparaciones con trazabilidad y resumen mensual de lo relevante para ti.",
    barriosIntro:
      "Administramos alquileres en Pedralbes, La Maternitat i Sant Ramon, Les Corts centre, Zona Universitària y enlace con Sants-Montjuïc cuando el inmueble cae en el límite del distrito.",
    barrios: [
      "Pedralbes",
      "La Maternitat i Sant Ramon",
      "Les Corts centre",
      "Zona Universitària",
      "Numància",
      "Travessera de Les Corts",
    ],
    serviceGrid: [
      {
        title: "Filtro de Solvencia",
        description:
          "Selección de candidatos con estudio de riesgo laboral y financiero antes de firmar — especialmente relevante en Pedralbes, donde el perfil del inquilino condiciona la estabilidad del contrato.",
      },
      {
        title: "Cumplimiento CCCat e INCASÒL",
        description:
          "Redacción conforme al Codi Civil de Catalunya, depósito obligatorio de fianza en Incasòl e información de renta anterior en zona tensionada.",
      },
      {
        title: "Atención Inmediata de Incidencias",
        description:
          "Red de industriales en Les Corts y Sants para averías urgentes: caldera, humedades, cerrajería. El inquilino llama a Livendia, no a ti.",
      },
      {
        title: "Gestor Dedicado",
        description:
          "Un profesional asignado que atiende directamente a tu inquilino, documenta cada incidencia en el panel y te resume solo lo que requiere tu aprobación.",
      },
    ],
    testimonialsTitle: "Propietarios en Les Corts que ya delegaron el contacto con el inquilino",
    testimonials: [
      {
        quote:
          "Tengo un piso en Pedralbes y vivo en Madrid. Antes el inquilino me escribía por cualquier cosa —filtro del aire, ascensor, ruido del vecino—. Desde que Livendia administra, solo me llegan avisos cuando hay que autorizar una reparación o renovar contrato.",
        author: "Elena R.",
        role: "Propietaria, Pedralbes",
      },
      {
        quote:
          "Alquilo en Maternitat cerca del Camp Nou. Livendia gestionó el depósito en Incasòl y me explicó el tope de subida por IRAV antes de la renovación. Yo no he hablado con el inquilino en ocho meses.",
        author: "Marc T.",
        role: "Propietario, La Maternitat",
      },
    ],
    localFaq: [
      {
        question: "¿Por qué contratar administración si mi oficina de gestoría está en Les Corts?",
        answer:
          "Precisamente porque operamos en el distrito: conocemos el mercado local, los plazos de Incasòl y los industriales de la zona. Pagas 49 €/mes por delegar el canal con el inquilino sin desplazarte al despacho por cada incidencia.",
      },
      {
        question: "¿Gestionáis pisos en Pedralbes con rentas altas?",
        answer:
          "Sí. El protocolo de cobro y mediación es el mismo; adaptamos la comunicación al perfil del inquilino (familias, ejecutivos, personal sanitario del Clínic) y documentamos cada paso en el panel del propietario.",
      },
    ],
    finalCtaLead:
      "Activa la administración Livendia en Les Corts: oficina en tu distrito, gestor dedicado y cero llamadas del inquilino a tu móvil personal.",
    primaryCtaLabel: "Hablar con el Gestor de Les Corts por WhatsApp",
    secondaryCtaLabel: "Llamar a la Oficina de Les Corts: 600 367 742",
    waPlaceLabel: "Les Corts, Barcelona",
    heroImage: "/images/barcelona2.jpg",
    howImages: HOW_IMAGES_DEFAULT,
    regulatorySlug: "barcelona",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Les Corts",
      addressLocality: "Barcelona",
      addressRegion: "Les Corts",
      geo: { latitude: "41.3868", longitude: "2.1287" },
      areaServedName: "Les Corts, Barcelona",
    },
  },
  {
    segments: ["barcelona", "gracia"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/barcelona/gracia`,
    zoneLabel: "Gràcia",
    metaTitle: "Administración de Alquiler en Gràcia (Barcelona)",
    metaDescription:
      "Delegación integral de tu alquiler en Vila de Gràcia y Vallcarca por 49 €/mes. Control de cobros, contratos LAU/Temporada y resolución de incidencias.",
    h1: "Administración Integral de Alquileres en Gràcia",
    subtitle:
      "Transforma tu propiedad en Gràcia en un ingreso pasivo y protegido por 49 €/mes IVA incl.",
    heroLead:
      "Gràcia mezcla alquiler residencial LAU, pisos compartidos y estancias de temporada en plazas como Vila de Gràcia o Vallcarca. Esa mezcla multiplica llamadas del inquilino —ruido, convivencia, subarriendo— si no hay un gestor de por medio. Livendia filtra, cobra el día 1 y coordina averías; tú decides sobre la renta y las obras, no sobre el WhatsApp del domingo.",
    eeatHeading: "Gràcia: LAU, temporada y perfiles diversos",
    eeatBlock:
      "El mercado de Gràcia (Vila de Gràcia, Camp d'en Grassot, Vallcarca i els Penitents) combina alquiler residencial LAU y alquiler de temporada regulado. Gestionamos la heterogeneidad de inquilinos —profesionales, nómadas digitales, familias jóvenes— garantizando el cobro puntual y el cumplimiento normativo en zona tensionada barcelonesa. Operamos desde Les Corts, a 15 minutos en metro.",
    whyIntro:
      "En Gràcia la rotación es alta y los contratos mal redactados generan conflictos por ruido, mascotas o uso turístico encubierto. Livendia asume la mediación diaria: el inquilino sabe que debe pasar por nosotros; tú recibes un resumen claro cuando hay impago, renovación o una avería que supera el umbral que acordemos.",
    howIntro:
      "Alta del arrendamiento en panel, registro de contactos del inquilino, protocolo de incidencias con proveedores del barrio y avisos solo para pagos recibidos, impagos o decisiones que requieran tu firma en Vila de Gràcia o Camp d'en Grassot.",
    barriosIntro: "Zonas donde administramos alquileres en el distrito de Gràcia:",
    barrios: [
      "Vila de Gràcia",
      "Camp d'en Grassot i Gràcia Nova",
      "Vallcarca i els Penitents",
      "El Coll",
      "La Salut",
    ],
    serviceBullets: [
      {
        title: "Mediación completa con el arrendatario",
        description:
          "Olvídate de atender llamadas por averías a deshoras o quejas de vecinos. Livendia documenta cada contacto y te informa con criterio.",
      },
      {
        title: "Gestión de Contratos LAU y Temporada",
        description:
          "Causa justificada, duración y cláusulas adaptadas a Gràcia para evitar sanciones por uso indebido de temporada.",
      },
      {
        title: "Liquidación mensual de rentas",
        description:
          "Seguimiento de transferencias SEPA, reclamación automatizada de impagos desde el día 3 y registro en tu panel 24/7.",
      },
    ],
    testimonialsTitle: "Propietarios en Gràcia que recuperaron su tiempo libre",
    testimonials: [
      {
        quote:
          "Alquilo un piso en Vila de Gràcia a tres inquilinos jóvenes. Antes era un grupo de WhatsApp interminable. Livendia centralizó incidencias y yo solo apruebo presupuestos por email cuando superan 200 €.",
        author: "Núria P.",
        role: "Propietaria, Vila de Gràcia",
      },
      {
        quote:
          "Tenía dudas sobre si mi contrato de temporada en Vallcarca era defendible. Livendia revisó cláusulas y ahora gestionan al inquilino sin que yo intervenga en cada cambio de estancia.",
        author: "David S.",
        role: "Propietario, Vallcarca",
      },
    ],
    localFaq: [
      {
        question: "¿Administráis pisos compartidos por habitaciones en Gràcia?",
        answer:
          "Sí. Coordinamos convivencia, reparto de suministros y canal único con cada arrendatario según el contrato. El propietario no recibe llamadas individuales de cada habitante.",
      },
      {
        question: "¿Cómo controláis el alquiler de temporada en Gràcia?",
        answer:
          "Verificamos causa, duración y límites legales antes de firmar o renovar. El cobro y las incidencias siguen el mismo protocolo que en LAU habitual.",
      },
    ],
    finalCtaLead:
      "Delega en Livendia la relación con tu inquilino en Gràcia: cobro el día 1, incidencias resueltas y tú al margen del día a día.",
    primaryCtaLabel: "Consultar con Gestor en Gràcia por WhatsApp",
    waPlaceLabel: "Gràcia, Barcelona",
    heroImage: "/images/barcelona.jpg",
    howImages: ["/images/gestora2.jpg", "/images/familia2.jpg", "/images/equipo2.jpg", "/images/gestoria3.jpg"],
    regulatorySlug: "barcelona",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Gràcia",
      addressLocality: "Barcelona",
      addressRegion: "Gràcia",
      areaServedName: "Gràcia, Barcelona",
    },
  },
  {
    segments: ["l-hospitalet"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/l-hospitalet`,
    zoneLabel: "L'Hospitalet de Llobregat",
    metaTitle: "Gestoría y Administración de Alquileres en L'Hospitalet de Llobregat",
    metaDescription:
      "Protege tu piso de alquiler en L'Hospitalet (Collblanc, Bellvitge, Santa Eulàlia). Cobro de rentas, gestión de incidencias y fianza por 49 €/mes.",
    h1: "Administración de Alquileres para Propietarios en L'Hospitalet",
    subtitle:
      "Máxima rentabilidad y protección anti-impago en L'Hospitalet de Llobregat por 49 €/mes sin permanencia.",
    heroLead:
      "L'Hospitalet concentra uno de los parques de alquiler más densos del área metropolitana: Collblanc, Bellvitge, Santa Eulàlia, Pubilla Cases. El riesgo no es solo el impago —es la acumulación de incidencias en bloques con ascensor antiguo y comunidades exigentes. Livendia cobra, media y repara; tú no atiendes al inquilino en persona ni negocias con el presidente de la comunidad por teléfono.",
    eeatHeading: "Área metropolitana, respuesta desde Les Corts",
    eeatBlock:
      "Desde Collblanc y Santa Eulàlia hasta Bellvitge y Pubilla Cases, L'Hospitalet exige un control exhaustivo del cobro mensual y una respuesta ágil ante incidencias en la vivienda. Operamos desde Les Corts (Barcelona), a pocos minutos en metro o carretera, con presencia física y soporte constante. Conocemos la declaración de zona tensionada en Cataluña y el depósito en Incasòl aplicable a tu municipio.",
    whyIntro:
      "Muchos propietarios en L'Hospitalet viven fuera del municipio o tienen varios pisos. Sin gestor, el inquilino acaba contactando directamente para todo —retrasos de pago, averías, certificados—. Livendia establece un protocolo claro: canal único, plazos de respuesta y escalado a ti solo cuando la ley o el contrato lo exigen.",
    howIntro:
      "Registro del inmueble y arrendatario, seguimiento de renta (SEPA o transferencia), gestión de impagos desde el día 3, coordinación con industriales del Baix Llobregat y resumen mensual en panel.",
    barriosIntro: "Barrios y núcleos de L'Hospitalet donde administramos alquileres:",
    barrios: [
      "Collblanc",
      "Bellvitge",
      "Santa Eulàlia",
      "Pubilla Cases",
      "Centre",
      "Can Serra",
      "Granvia Sud",
    ],
    serviceBullets: [
      {
        title: "Protocolo Riguroso de Cobros",
        description:
          "Seguimiento de transferencias SEPA, recordatorios automáticos y gestión de retrasos desde el día 3 con mediación profesional antes de escalar.",
      },
      {
        title: "Mantenimiento Preventivo y Correctivo",
        description:
          "Presupuestos comparados con industriales de confianza en L'Hospitalet; tú autorizas, Livendia ejecuta y hace seguimiento hasta cierre.",
      },
      {
        title: "Tramitación de Fianza en INCASÒL",
        description:
          "Depósito legal, cambio de titularidad de suministros y documentación al alta — sin coste extra dentro del servicio mensual.",
      },
    ],
    testimonialsTitle: "Propietarios en L'Hospitalet que dejaron de perseguir la renta",
    testimonials: [
      {
        quote:
          "Mi piso está en Bellvitge y yo en Terrassa. El inquilino retrasaba la transferencia dos o tres días cada mes. Livendia aplicó el protocolo de cobro y desde entonces la renta entra el día 1 — yo recibo un aviso en el panel.",
        author: "Francisco M.",
        role: "Propietario, Bellvitge",
      },
      {
        quote:
          "Hubo una avería de caldera en Collblanc un viernes noche. Livendia coordinó al técnico el sábado por la mañana. Yo solo recibí el informe y la factura para aprobar.",
        author: "Aina L.",
        role: "Propietaria, Collblanc",
      },
    ],
    localFaq: [
      {
        question: "¿Atendéis incidencias en bloques antiguos de Bellvitge?",
        answer:
          "Sí. Tenemos red de mantenimiento en el Baix Llobregat para calderas, fontanería y cerrajería. El inquilino contacta con Livendia; nosotros abrimos incidencia y te informamos del presupuesto.",
      },
      {
        question: "¿Puedo contratar si vivo fuera de L'Hospitalet?",
        answer:
          "Es el caso más habitual. El panel online y WhatsApp con tu gestor sustituyen los desplazamientos. La oficina en Les Corts queda a menos de 20 minutos si alguna vez necesitas firma presencial.",
      },
    ],
    finalCtaLead:
      "Protege tu alquiler en L'Hospitalet con un gestor que habla con el inquilino por ti — 49 €/mes, sin permanencia.",
    primaryCtaLabel: "Solicitar Gestión en L'Hospitalet por WhatsApp",
    waPlaceLabel: "L'Hospitalet de Llobregat",
    heroImage: "/images/gestora3.jpg",
    howImages: ["/images/gestoria1.jpg", "/images/familia6.jpg", "/images/equipo3.jpg", "/images/gestoria4.jpg"],
    regulatorySlug: "barcelona",
    jsonLd: {
      name: "Livendia — Administración de alquiler en L'Hospitalet de Llobregat",
      addressLocality: "L'Hospitalet de Llobregat",
      areaServedName: "L'Hospitalet de Llobregat",
    },
  },
  {
    segments: ["cornella"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/cornella`,
    zoneLabel: "Cornellà de Llobregat",
    metaTitle: "Administración de Alquiler en Cornellà de Llobregat",
    metaDescription:
      "Gestoría especializada en alquileres en Cornellà. Nos encargamos de tu inquilino, cobros y contrato por una tarifa fija de 49 €/mes.",
    h1: "Gestoría e Inmobiliaria de Administración en Cornellà de Llobregat",
    subtitle: "Delegación total de tu piso de alquiler en Cornellà por 49 €/mes.",
    heroLead:
      "Cornellà —Almeda, Centre, Sant Ildefons, Gavarra— comparte normativa catalana de zona tensionada y demanda estable cerca de Barcelona y del Baix Llobregat. Livendia redacta o revisa tu contrato, deposita la fianza en Incasòl, cobra cada mes y resuelve incidencias. Tú no negocias con el inquilino ni persigues transferencias: te centras en tu patrimonio, no en la convivencia diaria.",
    eeatHeading: "Cornellà y Baix Llobregat",
    eeatBlock:
      "Gestionamos arrendamientos en Almeda, Centre, Sant Ildefons y Gavarra. Nos aseguramos de que tu contrato cumpla con la normativa de zona tensionada en el Baix Llobregat, que la fianza esté en Incasòl y de que recibas tu renta mes a mes sin discusiones con el inquilino. Desde Les Corts coordinamos visitas, suministros y renovaciones con plazos claros.",
    whyIntro:
      "En Cornellà muchos propietarios alquilaron durante la subida de precios y ahora necesitan renovar con IRAV o gestionar inquilinos que piden mejoras en la vivienda. Sin intermediario, cada petición acaba en tu móvil. Livendia filtra lo urgente de lo prescindible y te presenta opciones antes de gastar.",
    howIntro:
      "Expediente digital del piso, contacto único con el arrendatario, liquidación mensual de rentas, historial de incidencias en panel y gestión de renovaciones con límite legal de subida.",
    barriosIntro: "Zonas de Cornellà donde llevamos la administración del alquiler:",
    barrios: ["Almeda", "Centre", "Sant Ildefons", "Gavarra", "Riu Sud", "Sant Ildefons Mas"],
    serviceBullets: [
      {
        title: "Redacción e inicio de expediente incluido",
        description:
          "Alta documental, contrato LAU conforme a Cataluña y registro de contactos del inquilino en el panel Livendia.",
      },
      {
        title: "Panel Online para el Propietario",
        description:
          "Acceso 24/7 a contratos, recibos, incidencias cerradas y pendientes — desde móvil u ordenador.",
      },
      {
        title: "Renovaciones y actualización de rentas",
        description:
          "IPC / IRAV según corresponda en zona tensionada, con aviso previo y documentación para tu archivo.",
      },
    ],
    testimonialsTitle: "Propietarios en Cornellà con el inquilino bajo control",
    testimonials: [
      {
        quote:
          "Renové contrato en Sant Ildefons y Livendia calculó el tope IRAV antes de enviar la propuesta al inquilino. Yo firmé una sola vez; ellos llevaron toda la conversación.",
        author: "Rosa V.",
        role: "Propietaria, Sant Ildefons",
      },
      {
        quote:
          "Uso el panel para ver si pagaron la renta y qué incidencias hubo en el mes. El inquilino no tiene mi teléfono personal desde hace un año.",
        author: "Javier C.",
        role: "Propietario, Almeda",
      },
    ],
    localFaq: [
      {
        question: "¿Incluye la administración la revisión del contrato en Cornellà?",
        answer:
          "El servicio mensual cubre gestión del arrendamiento en curso. Si necesitas redactar un contrato nuevo desde cero, podemos vincularlo con nuestro servicio de contrato LAU (145 €) antes de activar la administración.",
      },
      {
        question: "¿Cómo funciona el panel del propietario?",
        answer:
          "Tras el alta, accedes con tu cuenta a contratos, justificantes de pago, incidencias abiertas/cerradas y mensajes resumidos de tu gestor. No necesitas instalar nada: funciona en navegador.",
      },
    ],
    finalCtaLead:
      "Delega en Cornellà la relación con tu inquilino: renta cobrada, incidencias documentadas y gestor asignado por 49 €/mes.",
    primaryCtaLabel: "Contactar con el Gestor de Cornellà",
    waPlaceLabel: "Cornellà de Llobregat",
    heroImage: "/images/gestora4.jpg",
    howImages: ["/images/gestoria2.jpg", "/images/familia1.jpg", "/images/equipo4.jpg", "/images/modelo3.jpg"],
    regulatorySlug: "barcelona",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Cornellà de Llobregat",
      addressLocality: "Cornellà de Llobregat",
      areaServedName: "Cornellà de Llobregat",
    },
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

export function mergeMetroFaq(local: readonly { question: string; answer: string }[]): { question: string; answer: string }[] {
  return [...local, ...METRO_ADMINISTRACION_FAQ];
}
