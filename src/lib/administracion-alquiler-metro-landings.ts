/**
 * Landings metro Barcelona — administración de alquiler por barrio/municipio.
 * Rutas: /administracion-alquiler/…
 *
 * Jerarquía URL (documentada en administracion-alquiler-barcelona-metro.ts):
 * - Barrios de Barcelona:     /administracion-alquiler/barcelona/{barrio}
 * - Municipios AMB (propios): /administracion-alquiler/{municipio}
 * Página madre ciudad: /servicios/administracion-alquiler-local/barcelona
 *
 * Imágenes: solo rutas bajo public/images/ trackeadas en git.
 */

import { ADMINISTRACION_ALQUILER_LOCAL_BASE } from "@/lib/administracion-alquiler-local-cities";
import { ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL } from "@/lib/catalog.public";

export const ADMINISTRACION_ALQUILER_METRO_BASE = "/administracion-alquiler";

/** Landings metro indexables (sitemap, generateStaticParams, enlaces hub). */
export const ADMINISTRACION_ALQUILER_METRO_PUBLISHED_SEGMENT_KEYS: readonly string[] = [
  "barcelona/les-corts",
  "barcelona/gracia",
  "barcelona/eixample",
  "barcelona/sants-montjuic",
  "barcelona/sant-marti",
  "l-hospitalet",
  "cornella",
  "sant-cugat",
  "badalona",
];

const BARCELONA_CITY_HUB = `${ADMINISTRACION_ALQUILER_LOCAL_BASE}/barcelona`;

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
  /** Página madre (ciudad) — canonical propio en esta landing; enlace ascendente para jerarquía SEO */
  parentCityHubPath: string;
  parentCityHubLabel: string;
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
      "Nuestra sede central está en el distrito de Les Corts en Barcelona (Carrer de Mejía Lequerica, 44), lo que nos permite dar servicio presencial y ágil en Barcelona capital (Eixample, Gràcia, Les Corts, Sants-Montjuïc, Sant Martí) y en el área metropolitana (L'Hospitalet, Cornellà, Sant Cugat, Badalona).",
  },
  {
    question: `¿Qué incluye exactamente la cuota de ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}?`,
    answer:
      `Incluye la gestión integral de alquiler de larga duración (LAU): cobranza mensual de la renta, atención e intermediación de incidencias con el inquilino, gestión de fianzas en INCASÒL, cambios de titularidad de suministros y seguimiento de renovaciones en zona tensionada. Tú no hablas con el arrendatario: Livendia es el único canal.`,
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
    metaTitle: `Administración de alquiler Les Corts — Pedralbes, Maternitat, Zona Universitària · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Les Corts: Pedralbes, La Maternitat, Les Corts centre y Zona Universitària. Despacho en Mejía Lequerica 44. Cobro, INCASÒL, IRAV e incidencias por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    h1: "Administración de alquiler en Les Corts con gestor en tu distrito (Mejía Lequerica 44)",
    subtitle:
      `Asesoramiento legal y gestión integral con oficina física en tu propio distrito. Tu alquiler en manos de expertos por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} sin permanencia.`,
    heroLead:
      "¿Cansado de que el inquilino te llame un domingo por una avería? En Les Corts —desde Pedralbes y La Maternitat hasta el eje Diagonal— Livendia se convierte en tu único interlocutor con el arrendatario: cobramos la renta, gestionamos incidencias con industriales de confianza y solo te avisamos cuando hace falta tu firma o tu decisión. Nuestra sede está en el propio distrito (Mejía Lequerica, 44): no somos un call center lejano.",
    eeatHeading: "Conocemos Les Corts porque estamos aquí",
    eeatBlock:
      "Nuestra sede central está en el distrito de Les Corts. Conocemos al detalle el mercado de Pedralbes (23 €/m² en oferta, Fotocasa agosto 2026), La Maternitat i Sant Ramon y Les Corts centre (21–22 €/m² según Idealista vía Properfy, 2026), y el perfil del inquilino —familias, personal del Hospital Clínic, expatriados del eje Diagonal—. Brains Real Estate (Q2 2026) sitúa el distrito en 24,90 €/m² de publicación. Cada renovación exige criterio IRAV en zona tensionada antes de que firmes.",
    whyIntro:
      "Livendia no sustituye tu rol como propietario: tú sigues decidiendo sobre la renta, las obras importantes o la venta del piso. Lo que eliminamos es el contacto diario con el inquilino —llamadas, WhatsApp a deshora, presión de la comunidad—. En un distrito donde la publicación ronda 24,90 €/m² (Brains Real Estate, Q2 2026) pero Pedralbes y Maternitat divergen varios euros por metro, ese filtro profesional evita malentendidos costosos en cobros y renovaciones.",
    howIntro:
      "Cuatro hitos claros desde el alta hasta el día a día: onboarding con datos del piso y del inquilino en Les Corts o Pedralbes, canal único Livendia-inquilino, coordinación de reparaciones con trazabilidad y resumen mensual de lo relevante para ti.",
    barriosIntro:
      "En Pedralbes y Pedralbes i Malvasia el parque suele ser amplio (120–180 m²) con inquilinos familiares y expatriados del eje Diagonal. La Maternitat i Sant Ramon y Les Corts centre mezclan bloques de los 60–80 con calderas comunitarias y mucha demanda del Hospital Clínic. En Zona Universitària predominan contratos LAU con rotación de másteres y doctorandos. También damos cobertura en Numància y Travessera de Les Corts cuando el inmueble cae en el límite con Sants-Montjuïc.",
    barrios: [
      "Pedralbes",
      "Pedralbes i Malvasia",
      "La Maternitat i Sant Ramon",
      "Les Corts centre",
      "Zona Universitària (UB / UPC)",
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
        question: "¿Cuál es el precio medio del alquiler en Les Corts?",
        answer:
          "Según Brains Real Estate (Q2 2026), el distrito se sitúa en 24,90 €/m² de publicación (~3.127 €/mes). Pedralbes ronda 23 €/m² (Fotocasa, agosto 2026) y Maternitat/centre algo por debajo según Idealista (Properfy, 2026). Tu gestor contrasta la referencia antes de cada renovación.",
      },
      {
        question: "¿Por qué contratar administración si mi oficina de gestoría está en Les Corts?",
        answer:
          `Precisamente porque operamos en el distrito: conocemos el mercado local, los plazos de Incasòl y los industriales de la zona. Pagas ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} por delegar el canal con el inquilino sin desplazarte al despacho por cada incidencia.`,
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
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona (ciudad)",
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
    metaTitle: `Administración de alquiler Gràcia — Vila, Vallcarca, La Salut, Camp d'en Grassot · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión de alquiler LAU y habitaciones en Vila de Gràcia, Vallcarca, La Salut y Camp d'en Grassot. Mediación con inquilinos, cobro e IRAV por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    h1: "Gestión de alquiler en Gràcia para propietarios (Vila, Vallcarca y La Salut)",
    subtitle:
      `Transforma tu propiedad en Gràcia en un ingreso pasivo y protegido por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    heroLead:
      "Gràcia mezcla alquiler residencial LAU, pisos compartidos y estancias de temporada en Vila de Gràcia (25,7 €/m² en oferta, Properfy/Idealista 2026) o Vallcarca (20,7 €/m²). Esa mezcla multiplica llamadas del inquilino —ruido, convivencia, subarriendo— si no hay un gestor de por medio. Livendia filtra, cobra el día 1 y coordina averías; tú decides sobre la renta y las obras, no sobre el WhatsApp del domingo.",
    eeatHeading: "Gràcia: LAU, temporada y perfiles diversos",
    eeatBlock:
      "El mercado de Gràcia combina alquiler residencial LAU y temporada regulada. Brains Real Estate (Q2 2026) sitúa el distrito en 25,30 €/m² de publicación; Incasòl registró 1.041,60 €/mes de media real en 1T 2025 — por debajo de la oferta por los topes legales. Gestionamos perfiles diversos —profesionales, nómadas digitales, familias jóvenes (24 % de población extranjera, Idescat 2025)— con cobro puntual y cumplimiento normativo. Operamos desde Les Corts, a 15 minutos en metro.",
    whyIntro:
      "En Gràcia la rotación es alta —oferta a 25,30 €/m² según Brains RE (Q2 2026)— y los contratos mal redactados generan conflictos por ruido, mascotas o uso turístico encubierto. Livendia asume la mediación diaria: el inquilino sabe que debe pasar por nosotros; tú recibes un resumen claro cuando hay impago, renovación o una avería que supera el umbral que acordemos.",
    howIntro:
      "Alta del arrendamiento en panel, registro de contactos del inquilino, protocolo de incidencias con proveedores del barrio y avisos solo para pagos recibidos, impagos o decisiones que requieran tu firma en Vila de Gràcia o Camp d'en Grassot.",
    barriosIntro:
      "Vila de Gràcia concentra pisos señoriales sin ascensor y convivencias compartidas cerca de Plaça del Sol. Camp d'en Grassot i Gràcia Nova y La Salut (límite Park Güell) mezclan familias y profesionales con oferta reformada. Vallcarca i els Penitents y El Coll tienen pendiente, edificios en terraza y más estancias medias. En cada barrio adaptamos el protocolo de cobro y mediación al tipo de contrato (LAU, habitaciones, temporada con causa).",
    barrios: [
      "Vila de Gràcia",
      "Plaça del Sol / Plaça de la Vila",
      "Camp d'en Grassot i Gràcia Nova",
      "Vallcarca i els Penitents",
      "El Coll",
      "La Salut",
      "Plaça de Lesseps",
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
        question: "¿Cuál es el precio medio del alquiler en Gràcia?",
        answer:
          "Brains Real Estate (Q2 2026) cifra la oferta del distrito en 25,30 €/m² (~2.014 €/mes). Por barrio varía: Vila de Gràcia 25,7 €/m², Vallcarca 20,7 €/m² (Properfy/Idealista, 2026). El alquiler real registrado en Incasòl (1T 2025) fue 1.041,60 €/mes — inferior por los topes de zona tensionada.",
      },
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
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona (ciudad)",
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
    metaTitle: `Administración de alquiler L'Hospitalet — Bellvitge, Collblanc, Centre · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en L'Hospitalet: Collblanc, Bellvitge, Santa Eulàlia, Centre y Granvia Sud. Cobro, INCASÒL e incidencias en bloques compactos por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    h1: "Administración de alquiler en L'Hospitalet de Llobregat (Bellvitge, Collblanc, Centre)",
    subtitle:
      `Máxima rentabilidad y protección anti-impago en L'Hospitalet de Llobregat por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} sin permanencia.`,
    heroLead:
      "L'Hospitalet concentra uno de los parques de alquiler más densos del área metropolitana —mediana ~56 m² en contratos registrados (AT 2024)— con barrios que van de 15 €/m² en Centre a 21 €/m² en Collblanc (Fotocasa, agosto 2026). El riesgo no es solo el impago: son incidencias en bloques con ascensor antiguo y comunidades exigentes. Livendia cobra, media y repara; tú no atiendes al inquilino en persona.",
    eeatHeading: "Área metropolitana, respuesta desde Les Corts",
    eeatBlock:
      "Desde Collblanc (21 €/m²) hasta Centre (15 €/m²), según Fotocasa (agosto 2026), L'Hospitalet exige control del cobro y respuesta ágil ante averías en viviendas compactas. Idealista vía Properfy (febrero 2026) sitúa el municipio en 17,3 €/m² — por debajo de Barcelona capital (~23,9 €/m², El Periódico/ Idealista, junio 2025). Operamos desde Les Corts con presencia física. Zona tensionada catalana: depósito en Incasòl e IRAV en renovaciones.",
    whyIntro:
      "Muchos propietarios en L'Hospitalet viven fuera del municipio o tienen varios pisos de 55–75 m². Sin gestor, el inquilino contacta directamente para todo —retrasos, averías de ascensor, certificados—. Livendia establece canal único y plazos de respuesta; tú solo intervienes cuando la ley o el contrato lo exigen.",
    howIntro:
      "Registro del inmueble y arrendatario, seguimiento de renta (SEPA o transferencia), gestión de impagos desde el día 3, coordinación con industriales del Baix Llobregat y resumen mensual en panel.",
    barriosIntro:
      "Collblanc–La Torrassa y la frontera con Barcelona (L1/L5) concentran pisos de 55–70 m² con alta rotación. Bellvitge y Granvia Sud tienen bloques de los 70–80 con ascensores envejecidos y mucha demanda familiar. Centre y Can Serra ofrecen rentas más contenidas (~15 €/m² en oferta, Fotocasa 2026). Pubilla Cases y Santa Eulàlia completan el mapa con comunidades activas y propietarios que suelen vivir fuera del municipio.",
    barrios: [
      "Collblanc",
      "La Torrassa",
      "Bellvitge",
      "Granvia Sud",
      "Santa Eulàlia",
      "Pubilla Cases",
      "Centre",
      "Can Serra",
      "Rambla de Just Oliveras",
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
        question: "¿Cuánto cuesta alquilar en L'Hospitalet?",
        answer:
          "Idealista vía Properfy (febrero 2026) sitúa la oferta en 17,3 €/m² municipal; Fotocasa (agosto 2026) en 20 €/m². Collblanc–La Torrassa ronda 21 €/m² y Centre 15 €/m² (Fotocasa por barrio, agosto 2026). Un piso de ~60 m² puede suponer ~1.000–1.200 €/mes según zona.",
      },
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
      `Protege tu alquiler en L'Hospitalet con un gestor que habla con el inquilino por ti — ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}, sin permanencia.`,
    primaryCtaLabel: "Solicitar Gestión en L'Hospitalet por WhatsApp",
    waPlaceLabel: "L'Hospitalet de Llobregat",
    heroImage: "/images/gestora3.jpg",
    howImages: ["/images/gestoria1.jpg", "/images/familia6.jpg", "/images/equipo3.jpg", "/images/gestoria4.jpg"],
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona y área metropolitana",
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
    metaTitle: `Administración de alquiler Cornellà — Sant Ildefons, Almeda, Centre · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Cornellà de Llobregat: Sant Ildefons, Almeda, Centre y Gavarra. FGC Cornellà Centre, INCASÒL e incidencias por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    h1: "Administración de alquiler en Cornellà de Llobregat (Baix Llobregat, Sant Ildefons y Almeda)",
    subtitle: `Delegación total de tu piso de alquiler en Cornellà por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}.`,
    heroLead:
      "Cornellà —Almeda, Centre, Sant Ildefons, Gavarra— comparte la normativa catalana de zona tensionada y oferta de alquiler en torno a 15,22 €/m² en pisos (Engel & Völkers, julio 2026), por debajo de Barcelona capital. Livendia deposita la fianza en Incasòl, cobra cada mes y resuelve incidencias. Tú no negocias con el inquilino ni persigues transferencias.",
    eeatHeading: "Cornellà y Baix Llobregat",
    eeatBlock:
      "Gestionamos arrendamientos en Almeda, Centre, Sant Ildefons y Gavarra. Engel & Völkers (julio 2026) sitúa el alquiler de pisos en 15,22 €/m²; Inmobiliarias Barcelona (2025) estima un rango de 12–15 €/m² según barrio. Verificamos IRAV y baremo estatal en renovaciones, depositamos en Incasòl y canalizamos incidencias desde Les Corts con plazos claros.",
    whyIntro:
      "En Cornellà muchos propietarios alquilaron durante la subida de precios del Baix Llobregat y ahora renuevan con topes legales. Sin intermediario, cada petición de mejora o duda de suministros acaba en tu móvil. Livendia filtra lo urgente, contrasta presupuestos y te presenta opciones antes de gastar.",
    howIntro:
      "Expediente digital del piso, contacto único con el arrendatario, liquidación mensual de rentas, historial de incidencias en panel y gestión de renovaciones con límite legal de subida.",
    barriosIntro:
      "Sant Ildefons y Centre concentran bloques de los 70–90 m² bien comunicados con FGC Cornellà Centre. Almeda y el polígono industrial atraen familias que trabajan en Barcelona o en el Baix Llobregat. Gavarra y Riu Sud mezclan chalets adosados y pisos más amplios. En cada zona aplicamos el mismo protocolo de cobro, pero el tipo de incidencia cambia: humedades en sótanos en Centre, comunidades muy activas en Sant Ildefons Mas.",
    barrios: [
      "Sant Ildefons",
      "Sant Ildefons Mas",
      "Centre",
      "Almeda",
      "Gavarra",
      "Riu Sud",
      "Can Mercader",
    ],
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
        question: "¿Cuál es el precio medio del alquiler en Cornellà?",
        answer:
          "Engel & Völkers (julio 2026) sitúa los pisos en 15,22 €/m². Inmobiliarias Barcelona (2025) estima un rango de 12–15 €/m² según barrio — Centre y Almeda suelen estar en la banda alta. Consultamos el baremo estatal antes de fijar renta en contrato nuevo o renovación.",
      },
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
      `Delega en Cornellà la relación con tu inquilino: renta cobrada, incidencias documentadas y gestor asignado por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}.`,
    primaryCtaLabel: "Contactar con el Gestor de Cornellà",
    waPlaceLabel: "Cornellà de Llobregat",
    heroImage: "/images/gestora4.jpg",
    howImages: ["/images/gestoria2.jpg", "/images/familia1.jpg", "/images/equipo4.jpg", "/images/modelo3.jpg"],
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona y área metropolitana",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Cornellà de Llobregat",
      addressLocality: "Cornellà de Llobregat",
      areaServedName: "Cornellà de Llobregat",
    },
  },
  {
    segments: ["barcelona", "eixample"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/barcelona/eixample`,
    zoneLabel: "Eixample",
    metaTitle: `Administración de alquiler Eixample — Dreta, Esquerra, Sagrada Família · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Eixample: Dreta, Antiga i Nova Esquerra, Fort Pienc y Sagrada Família. IRAV, cobro e incidencias en fincas regias por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    h1: "Administración de alquiler en el Eixample (Dreta, Esquerra y Sagrada Família)",
    subtitle:
      `Protege tu inversión en el corazón de Barcelona por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl. — sin permanencia.`,
    heroLead:
      "El Eixample concentra la oferta de alquiler más cara de Barcelona —30,32 €/m² en publicación (Brains Real Estate, Q2 2026)— con inquilinos exigentes y fincas centenarias. Livendia cobra la renta, gestiona incidencias con industriales del distrito y calcula topes IRAV en renovaciones. Tú no atiendes llamadas del inquilino ni persigues transferencias.",
    eeatHeading: "Eixample: precios altos, normativa estricta",
    eeatBlock:
      "Gestionamos arrendamientos en Dreta de l'Eixample, Antiga Esquerra, Nova Esquerra, Fort Pienc y Sagrada Família. Brains Real Estate (Q2 2026) sitúa el distrito en 30,32 €/m² (~3.113 €/mes); Idealista (abril 2025) en 26,5 €/m² de oferta; Incasòl registró mediana ~1.284 €/mes en contratos firmados (Nitia, 2024). Zona tensionada: cada renovación exige criterio IRAV antes de firmar. Operamos desde Les Corts, a minutos del distrito.",
    whyIntro:
      "En el Eixample un punto de €/m² representa cientos de euros anuales y un error en renovación o cobro puede costar más que años de gestoría. Livendia filtra el contacto diario con el inquilino —averías, suministros, quejas de vecinos— y te resume solo lo que requiere tu firma o decisión económica.",
    howIntro:
      "Alta del inmueble en panel, canal único Livendia-inquilino, protocolo de cobro desde el día 3, coordinación con industriales del Eixample y resumen mensual de rentas e incidencias.",
    barriosIntro:
      "En Dreta de l'Eixample y Passeig de Gràcia predominan fincas regias de 90–130 m² con inquilinos ejecutivos y familias de alto ticket. Antiga i Nova Esquerra mezclan bloques del ensanche con convivencias compartidas cerca de Hospital Clínic. Fort Pienc y Sagrada Família concentran rotación moderada y edificios con ascensores antiguos. En el límite con Sant Antoni aplicamos el mismo protocolo de cobro adaptado a pisos más compactos (65–80 m²).",
    barrios: [
      "Dreta de l'Eixample",
      "Antiga Esquerra de l'Eixample",
      "Nova Esquerra de l'Eixample",
      "Fort Pienc",
      "Sagrada Família",
      "Passeig de Gràcia (tramo Eixample)",
      "Sant Antoni (límite)",
    ],
    serviceGrid: [
      {
        title: "Renovaciones con tope IRAV",
        description:
          "Cálculo de incremento máximo legal en zona tensionada antes de enviar propuesta al inquilino — especialmente crítico cuando la oferta publicada supera los 30 €/m².",
      },
      {
        title: "Incidencias en fincas regias",
        description:
          "Red de mantenimiento para calderas comunitarias, ascensores antiguos y fontanería en edificios del ensanche.",
      },
      {
        title: "Cobro y mediación profesional",
        description:
          "Seguimiento de transferencias, recordatorios automatizados y escalado documentado antes de que el impago llegue a tu móvil.",
      },
      {
        title: "Depósito en INCASÒL",
        description:
          "Tramitación de fianza legal, cambio de titularidad de suministros y archivo en panel del propietario.",
      },
    ],
    testimonialsTitle: "Propietarios en el Eixample que delegaron el contacto con el inquilino",
    testimonials: [
      {
        quote:
          "Tengo un piso en Dreta de l'Eixample y vivo en Londres. Livendia gestionó la renovación con IRAV y yo solo firmé el resumen. El inquilino no tiene mi teléfono desde hace un año.",
        author: "Claire M.",
        role: "Propietaria, Dreta de l'Eixample",
      },
      {
        quote:
          "Alquilo cerca de Sagrada Família. Cuando falló el ascensor, Livendia coordinó con la comunidad y el técnico. Yo recibí el presupuesto por email y nada más.",
        author: "Oriol B.",
        role: "Propietario, Sagrada Família",
      },
    ],
    localFaq: [
      {
        question: "¿Cuál es el precio medio del alquiler en el Eixample?",
        answer:
          "Brains Real Estate (Q2 2026) cifra la oferta en 30,32 €/m² (~3.113 €/mes). Idealista (abril 2025) sitúa el distrito en 26,5 €/m². Incasòl registró mediana ~1.284 €/mes en contratos firmados (Nitia, 2024). Tu gestor contrasta referencia antes de cada renovación.",
      },
      {
        question: "¿Gestionáis pisos de alto ticket en Passeig de Gràcia?",
        answer:
          "Sí. El protocolo de cobro y mediación es el mismo; adaptamos comunicación al perfil del inquilino (familias, ejecutivos, expatriados) y documentamos cada paso en el panel.",
      },
      {
        question: "¿Por qué contratar administración si el piso está en zona premium?",
        answer:
          `Precisamente porque el ticket es alto: un impago o una renovación mal calculada cuesta más que ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}. Livendia asume el canal con el inquilino y verifica IRAV en cada subida legal.`,
      },
    ],
    finalCtaLead:
      "Activa la administración Livendia en el Eixample: gestor dedicado, cobro puntual y cero llamadas del inquilino a tu móvil.",
    primaryCtaLabel: "Consultar con Gestor en Eixample por WhatsApp",
    waPlaceLabel: "Eixample, Barcelona",
    heroImage: "/images/barcelona2.jpg",
    howImages: ["/images/gestora5.jpg", "/images/familia2.jpg", "/images/equipo1.jpg", "/images/gestoria5.jpg"],
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona (ciudad)",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Eixample",
      addressLocality: "Barcelona",
      addressRegion: "Eixample",
      geo: { latitude: "41.3888", longitude: "2.1680" },
      areaServedName: "Eixample, Barcelona",
    },
  },
  {
    segments: ["barcelona", "sants-montjuic"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/barcelona/sants-montjuic`,
    zoneLabel: "Sants-Montjuïc",
    metaTitle: `Administración de alquiler Sants-Montjuïc — Sants, Poble-sec, Hostafrancs · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Sants-Montjuïc: Sants, La Bordeta, Hostafrancs, Poble-sec y Montjuïc. Cobro, INCASÒL e incidencias cerca de Estació Sants por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    h1: "Administración de alquiler en Sants-Montjuïc (Sants, Poble-sec y La Bordeta)",
    subtitle:
      `Delega el contacto con el inquilino en un distrito bien conectado — ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl., sin permanencia.`,
    heroLead:
      "Sants-Montjuïc concentra familias en La Bordeta, profesionales junto a Estació Sants y alquiler en Poble-sec con edificios de los 30–60. Brains Real Estate (Q2 2026) sitúa el distrito en 23,58 €/m² de publicación. Livendia cobra la renta, coordina industriales del eje Paral·lel–Sants y calcula IRAV en renovaciones. Tú no persigues transferencias ni atiendes averías un domingo.",
    eeatHeading: "Sants-Montjuïc: conectividad, parque envejecido y zona tensionada",
    eeatBlock:
      "Administramos alquileres en Sants, Hostafrancs, La Bordeta, Poble-sec, Montjuïc y la frontera con Les Corts en Numància. Brains Real Estate (Q2 2026): 23,58 €/m² en oferta agregada del distrito. Idealista (2025) muestra Sants por encima de Poble-sec en €/m². Zona tensionada catalana: cada renovación exige IRAV antes de comunicar al inquilino. Operamos desde Les Corts (~10 min en metro L3/L5).",
    whyIntro:
      "En Sants la rotación es moderada pero las incidencias en bloques antiguos —calderas, humedades en sótanos, ascensores— consumen tiempo si el propietario vive fuera del distrito. Livendia filtra WhatsApp del inquilino, contrasta presupuestos y te presenta solo decisiones que requieren tu firma.",
    howIntro:
      "Alta en panel, canal único Livendia-inquilino, protocolo de cobro desde el día 3, coordinación con mantenimiento en Sants/Poble-sec y resumen mensual de rentas e incidencias.",
    barriosIntro:
      "Sants centre y Hostafrancs mezclan bloques de los 60–80 con familias estables y demanda del eje ferroviario. La Bordeta y Badal y Font de la Guatlla tienen pisos más compactos (55–70 m²) con calderas comunitarias. Poble-sec concentra edificios bajos y convivencias cerca de Avinguda del Paral·lel. Montjuïc y la Zona Franca completan el mapa con viviendas más dispersas y propietarios que suelen residir fuera del distrito.",
    barrios: [
      "Sants",
      "Hostafrancs",
      "La Bordeta",
      "Badal",
      "Poble-sec",
      "Font de la Guatlla",
      "Montjuïc",
      "Estació Sants / Plaça dels Països Catalans",
    ],
    serviceGrid: [
      {
        title: "Incidencias en bloques de los 60–80",
        description:
          "Red de fontaneros y calderistas habituales en Sants y Poble-sec para urgencias fuera de horario laboral.",
      },
      {
        title: "Renovaciones con IRAV",
        description:
          "Cálculo de incremento máximo en zona tensionada antes de enviar propuesta — habitual en contratos largos en La Bordeta.",
      },
      {
        title: "Cobro y mediación",
        description:
          "Seguimiento de transferencias y escalado documentado cuando el inquilino retrasa el ingreso tras el día 3.",
      },
      {
        title: "Depósito en INCASÒL",
        description:
          "Tramitación de fianza, cambio de suministros y archivo en panel del propietario.",
      },
    ],
    testimonialsTitle: "Propietarios en Sants-Montjuïc que delegaron el canal con el inquilino",
    testimonials: [
      {
        quote:
          "Mi piso está en Sants cerca de la estación y yo en Tarragona. Livendia gestionó una avería de caldera comunitaria y yo solo aprobé el presupuesto por email. El inquilino no tiene mi móvil.",
        author: "Núria C.",
        role: "Propietaria, Sants",
      },
      {
        quote:
          "Alquilo en Poble-sec. Cuando el inquilino retrasó la renta, Livendia aplicó el protocolo de cobro antes de que yo tuviera que llamar. Todo quedó en el panel.",
        author: "David L.",
        role: "Propietario, Poble-sec",
      },
    ],
    localFaq: [
      {
        question: "¿Cuál es el precio medio del alquiler en Sants-Montjuïc?",
        answer:
          "Brains Real Estate (Q2 2026) cifra el distrito en 23,58 €/m² de publicación. Sants suele estar por encima de Poble-sec y Montjuïc en agregadores de Idealista (2025). Tu gestor contrasta referencia antes de cada renovación.",
      },
      {
        question: "¿Gestionáis pisos cerca de Estació Sants o la Fira?",
        answer:
          "Sí. El protocolo de cobro e incidencias es el mismo; adaptamos comunicación al perfil del inquilino (familias, profesionales en traslado, estancias medias) y documentamos en el panel.",
      },
      {
        question: "¿Atendéis incidencias en edificios sin ascensor en Poble-sec?",
        answer:
          "Sí. Coordinamos cerrajería, fontanería y electricistas del distrito; el inquilino contacta con Livendia, no contigo.",
      },
    ],
    finalCtaLead:
      "Activa administración Livendia en Sants-Montjuïc: gestor dedicado, cobro puntual y cero llamadas del inquilino a tu móvil.",
    primaryCtaLabel: "Consultar con Gestor Sants-Montjuïc por WhatsApp",
    waPlaceLabel: "Sants-Montjuïc, Barcelona",
    heroImage: "/images/gestora8.jpg",
    howImages: HOW_IMAGES_DEFAULT,
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona (ciudad)",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Sants-Montjuïc",
      addressLocality: "Barcelona",
      addressRegion: "Sants-Montjuïc",
      geo: { latitude: "41.3750", longitude: "2.1490" },
      areaServedName: "Sants-Montjuïc, Barcelona",
    },
  },
  {
    segments: ["barcelona", "sant-marti"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/barcelona/sant-marti`,
    zoneLabel: "Sant Martí",
    metaTitle: `Administración de alquiler Sant Martí — Poblenou, Clot, Diagonal Mar · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Sant Martí: Poblenou, Clot, La Verneda, Besòs i el Maresme y Diagonal Mar. Cobro e IRAV por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    h1: "Administración de alquiler en Sant Martí (Poblenou, Clot y Diagonal Mar)",
    subtitle:
      `Protege tu piso en el distrito del 22@ y el Besòs por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl. — gestor desde Les Corts.`,
    heroLead:
      "Sant Martí mezcla Poblenou tech, Clot familiar y promociones en Diagonal Mar. Brains Real Estate (Q2 2026) sitúa el distrito en 24,12 €/m² de publicación, con fuerte demanda de profesionales y familias. Livendia cobra la renta, media incidencias en bloques de los 70–2000 y verifica IRAV en renovaciones. Tú no negocias con el inquilino ni persigues pagos.",
    eeatHeading: "Sant Martí: 22@, litoral y normativa catalana",
    eeatBlock:
      "Gestionamos arrendamientos en Poblenou, Clot, La Verneda i la Pau, Besòs i el Maresme, Provençals del Poblenou y Diagonal Mar i el Front Marítim del Besòs. Brains Real Estate (Q2 2026): 24,12 €/m² en oferta del distrito. Zona tensionada: depósito Incasòl e IRAV en cada subida legal. Respuesta desde Les Corts (~15 min en metro L4/L2).",
    whyIntro:
      "En Poblenou y Diagonal Mar muchos propietarios compraron para alquilar a perfiles tech con contratos LAU estables; en La Verneda y el Besòs el parque es más compacto y las incidencias de comunidad son frecuentes. Livendia unifica el canal con el inquilino y documenta cada paso para que no dependas de grupos de WhatsApp con la finca.",
    howIntro:
      "Expediente del inmueble en panel, contacto único con el arrendatario, liquidación mensual, historial de incidencias y renovaciones con límite legal verificado.",
    barriosIntro:
      "Poblenou y Provençals concentran pisos reformados (70–95 m²) con inquilinos de startups y familias jóvenes. Clot y el Parc de la Estació del Nord mezclan bloques señoriales y edificios recientes. La Verneda i la Pau y el Besòs tienen rentas más contenidas y comunidades muy activas. Diagonal Mar aporta viviendas orientadas al mar con ticket medio alto y expectativas de respuesta rápida.",
    barrios: [
      "Poblenou",
      "Provençals del Poblenou",
      "Clot",
      "La Verneda i la Pau",
      "Besòs i el Maresme",
      "Diagonal Mar i el Front Marítim del Besòs",
      "El Parc i la Llacuna del Poblenou",
      "22@ (distrito de innovación)",
    ],
    serviceGrid: [
      {
        title: "Renovaciones con tope IRAV",
        description:
          "Cálculo legal antes de proponer subida — crítico en Poblenou y Diagonal Mar donde la oferta publicada supera la media municipal.",
      },
      {
        title: "Mediación con la comunidad",
        description:
          "Gestión de quejas de vecinos, ruido o convivencia compartida con trazabilidad para el propietario.",
      },
      {
        title: "Cobro profesional",
        description:
          "Protocolo desde el día 3 con recordatorios y escalado antes de que el impago llegue a tu móvil.",
      },
      {
        title: "INCASÒL y suministros",
        description:
          "Fianza legal, altas/bajas de luz y agua y archivo documental en el panel.",
      },
    ],
    testimonialsTitle: "Propietarios en Sant Martí con el inquilino bajo control",
    testimonials: [
      {
        quote:
          "Tengo un piso en Poblenou y vivo en Madrid. Livendia calculó el tope IRAV en la renovación y yo solo firmé el resumen. El inquilino no me escribe desde hace meses.",
        author: "Laura F.",
        role: "Propietaria, Poblenou",
      },
      {
        quote:
          "Alquilo en Clot. Hubo un conflicto con la comunidad por ruido; Livendia medió con el inquilino y documentó las medidas. Yo recibí un acta, no veinte llamadas.",
        author: "Sergi V.",
        role: "Propietario, Clot",
      },
    ],
    localFaq: [
      {
        question: "¿Cuánto cuesta alquilar en Sant Martí?",
        answer:
          "Brains Real Estate (Q2 2026) sitúa el distrito en 24,12 €/m² de publicación. Poblenou y Diagonal Mar suelen superar La Verneda o el Besòs en agregadores de Idealista (2025). Tu gestor contrasta referencia por barrio antes de renovar.",
      },
      {
        question: "¿Gestionáis pisos en el 22@ o cerca de la playa?",
        answer:
          "Sí. Mismo protocolo de cobro e incidencias; adaptamos comunicación al perfil (profesionales tech, familias, estancias medias) y dejamos constancia en el panel.",
      },
      {
        question: "¿Puedo contratar si vivo fuera de Barcelona?",
        answer:
          "Es habitual. Panel online y WhatsApp con tu gestor sustituyen desplazamientos; la oficina en Les Corts queda accesible si necesitas firma presencial.",
      },
    ],
    finalCtaLead:
      "Delega en Sant Martí la relación con tu inquilino: renta cobrada, incidencias resueltas y gestor asignado.",
    primaryCtaLabel: "Contactar con el Gestor de Sant Martí",
    waPlaceLabel: "Sant Martí, Barcelona",
    heroImage: "/images/gestora9.jpg",
    howImages: ["/images/gestoria3.jpg", "/images/familia3.jpg", "/images/equipo2.jpg", "/images/gestoria6.jpg"],
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona (ciudad)",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Sant Martí",
      addressLocality: "Barcelona",
      addressRegion: "Sant Martí",
      geo: { latitude: "41.4180", longitude: "2.2000" },
      areaServedName: "Sant Martí, Barcelona",
    },
  },
  {
    segments: ["sant-cugat"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/sant-cugat`,
    zoneLabel: "Sant Cugat del Vallès",
    metaTitle: "Administración de Alquiler en Sant Cugat del Vallès",
    metaDescription:
      `Gestión integral de alquileres en Sant Cugat (Mira-sol, Centre, Volpelleres) por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}. Cobro, incidencias e IRAV desde Les Corts.`,
    h1: "Administración de Alquileres en Sant Cugat del Vallès",
    subtitle:
      `Familias, casas y pisos premium en el Vallès — gestionados por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} sin permanencia.`,
    heroLead:
      "Sant Cugat combina vivienda unifamiliar en Mira-sol y Valldoreix con pisos en Centre-Vila —Fotocasa (agosto 2026) sitúa el municipio en 17 €/m², con ticket medio alto por superficie—. Livendia cobra la renta, coordina incidencias en casas y chalets, y calcula IRAV en renovaciones. Tú no negocias con el inquilino ni persigues transferencias.",
    eeatHeading: "Sant Cugat: calidad de vida, gestión profesional",
    eeatBlock:
      "Administramos alquileres en Centre-Vila, Mira-sol, Valldoreix, Volpelleres, Les Planes y Can Matas. Fotocasa (agosto 2026): 17 €/m² municipal; La Voz Central (2025) citaba ~20,66 €/m² en Idealista. Zona tensionada catalana: depósito Incasòl e IRAV en renovaciones. Respuesta desde nuestra sede en Les Corts (~20 min en FGC o carretera).",
    whyIntro:
      "Muchos propietarios en Sant Cugat viven fuera del municipio o en el extranjero. Sin gestor, cada avería en jardín, piscina comunitaria o caldera acaba en tu móvil. Livendia establece canal único, contrasta presupuestos y te presenta opciones antes de autorizar gasto.",
    howIntro:
      "Expediente digital del inmueble, contacto único con el arrendatario, liquidación mensual de rentas, historial de incidencias en panel y gestión de renovaciones con límite legal.",
    barriosIntro: "Zonas de Sant Cugat donde llevamos la administración:",
    barrios: ["Centre-Vila", "Mira-sol", "Valldoreix", "Volpelleres", "Les Planes", "Can Matas", "Parc Central"],
    serviceBullets: [
      {
        title: "Casas y chalets adosados",
        description:
          "Coordinación de incidencias en viviendas unifamiliares: cubiertas, jardín, piscina comunitaria y portería.",
      },
      {
        title: "Renovaciones con IRAV",
        description:
          "Cálculo de incremento máximo en zona tensionada antes de comunicar al inquilino — habitual en contratos familiares de larga duración.",
      },
      {
        title: "Panel y gestor dedicado",
        description:
          "Acceso 24/7 a contratos, recibos e incidencias desde cualquier ubicación — sin desplazarte a Sant Cugat por cada papel.",
      },
    ],
    testimonialsTitle: "Propietarios en Sant Cugat con el inquilino bajo control",
    testimonials: [
      {
        quote:
          "Alquilo un chalet en Mira-sol y vivo en Madrid. Livendia gestionó una filtración en cubierta y yo solo aprobé el presupuesto por email. El inquilino no me llama.",
        author: "Patricia G.",
        role: "Propietaria, Mira-sol",
      },
      {
        quote:
          "Renové contrato en Volpelleres y Livendia calculó el tope IRAV antes de enviar la propuesta. Todo documentado en el panel.",
        author: "Jordi M.",
        role: "Propietario, Volpelleres",
      },
    ],
    localFaq: [
      {
        question: "¿Cuánto cuesta alquilar en Sant Cugat?",
        answer:
          "Fotocasa (agosto 2026) sitúa el municipio en 17 €/m²; La Voz Central (2025) citaba ~20,66 €/m² en oferta Idealista. Un piso de 90 m² puede suponer ~1.500–1.900 €/mes según zona y estado.",
      },
      {
        question: "¿Atendéis incidencias en casas unifamiliares?",
        answer:
          "Sí. Coordinamos industriales del Vallès para cubiertas, fontanería, calefacción y averías comunitarias en urbanizaciones.",
      },
      {
        question: "¿Puedo contratar si vivo fuera de Sant Cugat?",
        answer:
          "Es el caso más habitual. El panel online y WhatsApp con tu gestor sustituyen los desplazamientos. La oficina en Les Corts queda a ~20 minutos si necesitas firma presencial.",
      },
    ],
    finalCtaLead:
      `Delega en Sant Cugat la relación con tu inquilino: renta cobrada, incidencias resueltas y gestor asignado por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}.`,
    primaryCtaLabel: "Contactar con el Gestor de Sant Cugat",
    waPlaceLabel: "Sant Cugat del Vallès",
    heroImage: "/images/gestora6.jpg",
    howImages: ["/images/gestoria2.jpg", "/images/familia1.jpg", "/images/equipo4.jpg", "/images/modelo3.jpg"],
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona y área metropolitana",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Sant Cugat del Vallès",
      addressLocality: "Sant Cugat del Vallès",
      areaServedName: "Sant Cugat del Vallès",
    },
  },
  {
    segments: ["badalona"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/badalona`,
    zoneLabel: "Badalona",
    metaTitle: "Administración de Alquiler en Badalona",
    metaDescription:
      `Gestión de alquileres en Badalona (Centre, Gorg, Montigalà) por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}. Cobro de rentas, incidencias e IRAV en zona tensionada.`,
    h1: "Administración de Alquileres en Badalona",
    subtitle:
      `Protege tu piso en Badalona por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl. — metro directo a Barcelona, gestor desde Les Corts.`,
    heroLead:
      "Badalona —Centre, Gorg, Montigalà, Sant Roc— concentra alquiler asequible frente a Barcelona capital: Idealista (2025) en 19,22 €/m² de oferta, Engel & Völkers (julio 2026) en 14,16 €/m² para pisos. El parque envejecido multiplica incidencias si no hay gestor. Livendia cobra, media y repara; tú no atiendes al inquilino en persona.",
    eeatHeading: "Badalona: densidad, metro y normativa catalana",
    eeatBlock:
      "Gestionamos arrendamientos en Centre, Gorg, Montigalà, Bufalà, Nova Lloreda y Sant Roc. Idealista (2025): 19,22 €/m² oferta; SERPAVI (2024): mediana ~10,17 €/m² en contratos reales; Engel & Völkers (julio 2026): 14,16 €/m² pisos. Zona tensionada: Incasòl e IRAV en renovaciones. Operamos desde Les Corts (~25 min en metro L2).",
    whyIntro:
      "Muchos propietarios en Badalona tienen el piso como inversión y viven en otro municipio. Sin intermediario, el inquilino contacta para todo —retrasos, ascensor, humedades—. Livendia establece canal único y plazos de respuesta; tú solo intervienes cuando la ley o el contrato lo exigen.",
    howIntro:
      "Registro del inmueble, seguimiento de renta, gestión de impagos desde el día 3, coordinación con industriales del Maresme-Besòs y resumen mensual en panel.",
    barriosIntro: "Barrios de Badalona donde administramos alquileres:",
    barrios: ["Centre", "Gorg", "Montigalà", "Bufalà", "Nova Lloreda", "Sant Roc", "Llefià"],
    serviceBullets: [
      {
        title: "Protocolo de cobros",
        description:
          "Seguimiento de transferencias, recordatorios automáticos y mediación profesional antes de escalar — crítico en barrios con rotación moderada.",
      },
      {
        title: "Incidencias en bloques antiguos",
        description:
          "Red de mantenimiento para calderas, fontanería comunitaria y ascensores en edificios de los 60–80.",
      },
      {
        title: "Fianza en INCASÒL",
        description:
          `Depósito legal, suministros y documentación al alta — incluido en la cuota mensual de ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}.`,
      },
    ],
    testimonialsTitle: "Propietarios en Badalona que dejaron de perseguir la renta",
    testimonials: [
      {
        quote:
          "Mi piso está en Gorg y yo en Sabadell. Livendia aplicó el protocolo de cobro cuando el inquilino retrasaba la transferencia. Yo recibo aviso en el panel el día 1.",
        author: "Marta S.",
        role: "Propietaria, Gorg",
      },
      {
        quote:
          "Hubo humedad en Centre tras lluvias. Livendia mandó perito, habló con la comunidad y yo solo aprobé la obra. El inquilino no me escribe.",
        author: "Ramon P.",
        role: "Propietario, Centre",
      },
    ],
    localFaq: [
      {
        question: "¿Cuánto cuesta alquilar en Badalona?",
        answer:
          "Idealista (2025) sitúa la oferta en 19,22 €/m²; Engel & Völkers (julio 2026) en 14,16 €/m² para pisos; SERPAVI (2024) registra mediana ~10,17 €/m² en contratos reales. Un piso de ~65 m² puede suponer ~650–1.250 €/mes según barrio y estado.",
      },
      {
        question: "¿Atendéis incidencias en Sant Roc o Llefià?",
        answer:
          "Sí. Tenemos red de mantenimiento en el área metropolitana norte para fontanería, calderas y cerrajería. El inquilino contacta con Livendia.",
      },
      {
        question: "¿Puedo contratar si vivo en Barcelona capital?",
        answer:
          "Sí. Badalona está a 15–25 min en metro L2 desde el centro. El panel y WhatsApp sustituyen desplazamientos; la oficina en Les Corts queda accesible si necesitas firma presencial.",
      },
    ],
    finalCtaLead:
      `Protege tu alquiler en Badalona con un gestor que habla con el inquilino por ti — ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}, sin permanencia.`,
    primaryCtaLabel: "Solicitar Gestión en Badalona por WhatsApp",
    waPlaceLabel: "Badalona",
    heroImage: "/images/gestora7.jpg",
    howImages: ["/images/gestoria1.jpg", "/images/familia6.jpg", "/images/equipo3.jpg", "/images/gestoria4.jpg"],
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona y área metropolitana",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Badalona",
      addressLocality: "Badalona",
      areaServedName: "Badalona",
    },
  },
];

export function isAdministracionAlquilerMetroSegmentPublished(segments: readonly string[]): boolean {
  return ADMINISTRACION_ALQUILER_METRO_PUBLISHED_SEGMENT_KEYS.includes(segments.join("/"));
}

export function getPublishedAdministracionAlquilerMetroLandings(): AdministracionAlquilerMetroLanding[] {
  return ADMINISTRACION_ALQUILER_METRO_LANDINGS.filter((l) =>
    isAdministracionAlquilerMetroSegmentPublished(l.segments),
  );
}

export function getMetroLandingSegments(): { segments: string[] }[] {
  return getPublishedAdministracionAlquilerMetroLandings().map((l) => ({
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
