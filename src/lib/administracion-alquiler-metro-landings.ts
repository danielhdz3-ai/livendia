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
import {
  metroBarcelonaHeroForSegments,
  metroBarcelonaZoneImage,
} from "@/lib/administracion-alquiler-metro-zone-images";
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
  "barcelona/sarria-sant-gervasi",
  "barcelona/nou-barris",
  "barcelona/ciutat-vella",
  "barcelona/horta-guinardo",
  "barcelona/sant-andreu",
  "esplugues",
  "sant-joan-despi",
  "sant-adria",
  "castelldefels",
  "sant-boi",
  "gava",
  "mollet-del-valles",
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
      "Nuestra sede central está en el distrito de Les Corts en Barcelona (Carrer de Mejía Lequerica, 44), lo que nos permite dar servicio presencial y ágil en Barcelona capital (Eixample, Gràcia, Les Corts, Sants-Montjuïc, Sant Martí) y en el área metropolitana (L'Hospitalet, Cornellà, Esplugues, Sant Joan Despí, Sant Adrià, Castelldefels, Sant Boi, Gavà, Mollet, Sant Cugat, Badalona).",
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
    heroImage: metroBarcelonaHeroForSegments(["barcelona", "les-corts"]),
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
    heroImage: metroBarcelonaHeroForSegments(["barcelona", "gracia"]),
    howImages: [
      metroBarcelonaZoneImage("gracia2.jpg"),
      "/images/familia2.jpg",
      "/images/equipo2.jpg",
      "/images/gestoria3.jpg",
    ],
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
    heroImage: metroBarcelonaHeroForSegments(["l-hospitalet"]),
    howImages: [
      "/images/gestoria1.jpg",
      "/images/familia6.jpg",
      "/images/equipo3.jpg",
      "/images/gestoria4.jpg",
    ],
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
    heroImage: metroBarcelonaHeroForSegments(["cornella"]),
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
    heroImage: metroBarcelonaHeroForSegments(["barcelona", "eixample"]),
    howImages: [
      metroBarcelonaZoneImage("sagradafamilia.jpg"),
      metroBarcelonaZoneImage("eixample2.jpg"),
      "/images/familia2.jpg",
      "/images/equipo1.jpg",
    ],
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
    heroImage: metroBarcelonaHeroForSegments(["barcelona", "sants-montjuic"]),
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
    heroImage: metroBarcelonaHeroForSegments(["barcelona", "sant-marti"]),
    howImages: [
      metroBarcelonaZoneImage("poblenou.jpg"),
      "/images/familia3.jpg",
      "/images/equipo2.jpg",
      "/images/gestoria6.jpg",
    ],
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
    segments: ["barcelona", "sarria-sant-gervasi"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/barcelona/sarria-sant-gervasi`,
    zoneLabel: "Sarrià-Sant Gervasi",
    metaTitle: `Administración de alquiler Sarrià-Sant Gervasi — Tres Torres, Bonanova, Putxet · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Sarrià-Sant Gervasi: Sarrià centre, Sant Gervasi, Les Tres Torres, Putxet i Farró y Bonanova. Rentas altas, IRAV, fincas señoriales e incidencias premium por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    h1: "Administración de alquiler en Sarrià-Sant Gervasi (Tres Torres, Bonanova y Sarrià centre)",
    subtitle:
      `El distrito con mayor ticket medio de Barcelona — gestionado por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl., sin permanencia.`,
    heroLead:
      "Sarrià-Sant Gervasi concentra parte del alquiler más caro de Barcelona capital: Brains Real Estate (Q2 2026) sitúa el distrito en 28,76 €/m² de publicación, con pisos señoriales en Les Tres Torres, Bonanova y Sarrià centre donde un error en renovación o cobro cuesta más que años de cuota de gestoría. Livendia cobra la renta, coordina industriales habituados en fincas regias y calcula IRAV antes de cada subida legal. Tú no atiendes WhatsApp del inquilino ni negocias con la comunidad de propietarios en primera persona.",
    eeatHeading: "Sarrià-Sant Gervasi: fincas premium y exigencia del inquilino",
    eeatBlock:
      "Administramos alquileres en Sarrià centre, Sant Gervasi – Galvany, Les Tres Torres, Putxet i Farró, Bonanova, Vallvidrera i el Penitents (límite) y La Bonanova. Brains Real Estate (Q2 2026): 28,76 €/m² en oferta agregada del distrito; Idealista (2025) muestra Bonanova y Tres Torres por encima de la media municipal. Zona tensionada catalana: cada renovación exige IRAV y depósito Incasòl. Operamos desde Les Corts (~15 min en FGC o bus) con gestores que conocen el protocolo de cobro en rentas altas.",
    whyIntro:
      "En Tres Torres o Bonanova el inquilino tipo —familia con hijos en colegio internacional, ejecutivo en traslado, expatriado— espera respuesta el mismo día ante avería de climatización o conflicto con portería. Si el propietario vive en Madrid, Londres o en otro barrio de Barcelona, ese ritmo es insostenible sin canal profesional. Livendia filtra peticiones, contrasta presupuestos de mantenimiento y documenta cada paso para que tú solo firmes lo crítico.",
    howIntro:
      "Alta con inventario y contrato en panel, canal único Livendia-inquilino, protocolo de cobro reforzado en rentas >2.000 €/mes, coordinación con comunidades exigentes y resumen mensual con KPIs de renta e incidencias abiertas/cerradas.",
    barriosIntro:
      "Les Tres Torres y Bonanova mezclan fincas regias de 120–200 m² con ascensores antiguos y portería física — incidencias de caldera comunitaria y ascensor son frecuentes y caras. Sant Gervasi – Galvany y Putxet i Farró tienen bloques del s. XX bien comunicados (FGC, metro L3/L6). Sarrià centre conserva casas entre medianeras y pisos de carácter con inquilinos estables. Vallvidrera (límite) aporta chalets con jardín donde filtraciones y cubiertas requieren industriales especializados.",
    barrios: [
      "Les Tres Torres",
      "Bonanova",
      "Sant Gervasi – Galvany",
      "Putxet i Farró",
      "Sarrià centre",
      "La Bonanova",
      "Vallvidrera i el Penitents (límite)",
      "FGC Sarrià / Reina Elisenda",
    ],
    serviceGrid: [
      {
        title: "Renovaciones IRAV en renta alta",
        description:
          "Cálculo legal antes de proponer subida — crítico cuando la oferta publicada supera 28 €/m² y el inquilino conoce sus derechos en zona tensionada.",
      },
      {
        title: "Incidencias en fincas señoriales",
        description:
          "Ascensores antiguos, fontanería comunitaria, climatización individual y portería: red de mantenimiento con SLA acordado con el propietario.",
      },
      {
        title: "Cobro y mediación premium",
        description:
          "Seguimiento el día 1, recordatorios documentados y escalado antes de impago — sin que persigas transferencias por email personal.",
      },
      {
        title: "INCASÒL y suministros",
        description:
          "Fianza legal, altas/bajas y archivo en panel — incluido en la cuota mensual.",
      },
    ],
    testimonialsTitle: "Propietarios en Sarrià-Sant Gervasi que dejaron de ser el teléfono de guardia del inquilino",
    testimonials: [
      {
        quote:
          "Mi piso está en Tres Torres y yo en Suiza. Livendia gestionó una derrama de ascensor y una renovación con IRAV en el mismo trimestre. Solo firmé dos resúmenes en el panel.",
        author: "Isabel K.",
        role: "Propietaria, Les Tres Torres",
      },
      {
        quote:
          "Alquilo en Putxet. El inquilino es expatriado y muy exigente con plazos. Livendia canaliza averías y yo recibo un informe semanal, no cincuenta mensajes.",
        author: "Albert P.",
        role: "Propietario, Putxet i Farró",
      },
    ],
    localFaq: [
      {
        question: "¿Cuál es el precio medio del alquiler en Sarrià-Sant Gervasi?",
        answer:
          "Brains Real Estate (Q2 2026) cifra el distrito en 28,76 €/m² de publicación. Bonanova y Les Tres Torres suelen superar la media en agregadores de Idealista (2025). Tu gestor contrasta referencia por subzona antes de cada renovación.",
      },
      {
        question: "¿Gestionáis pisos en fincas con portería y ascensor antiguo?",
        answer:
          "Sí. Coordinamos con portería y administrador de fincas, abrimos incidencias con mantenedores acreditados y reportamos al propietario solo cuando hay coste individual o derrama que deba autorizar.",
      },
      {
        question: "¿Qué pasa si el inquilino retrasa una renta de 2.500 €/mes?",
        answer:
          "Aplicamos protocolo desde el día 3: recordatorio formal, mediación y escalado documentado. El propietario ve el estado en tiempo real en el panel; Livendia es el único canal con el arrendatario.",
      },
      {
        question: "¿Puedo contratar si el piso está en Sarrià y yo vivo en otro distrito?",
        answer:
          "Es lo habitual. Panel online, WhatsApp con gestor asignado y oficina en Les Corts para firma presencial si la operación lo requiere.",
      },
    ],
    finalCtaLead:
      "Protege tu inversión en el distrito más premium de Barcelona: gestor dedicado, IRAV verificado y cero llamadas del inquilino a tu móvil.",
    primaryCtaLabel: "Hablar con el Gestor de Sarrià-Sant Gervasi",
    waPlaceLabel: "Sarrià-Sant Gervasi, Barcelona",
    heroImage: metroBarcelonaHeroForSegments(["barcelona", "sarria-sant-gervasi"]),
    howImages: [
      metroBarcelonaZoneImage("santgervasi2.jpg"),
      "/images/familia4.jpg",
      "/images/equipo5.jpg",
      "/images/gestoria8.jpg",
    ],
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona (ciudad)",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Sarrià-Sant Gervasi",
      addressLocality: "Barcelona",
      addressRegion: "Sarrià-Sant Gervasi",
      geo: { latitude: "41.4010", longitude: "2.1280" },
      areaServedName: "Sarrià-Sant Gervasi, Barcelona",
    },
  },
  {
    segments: ["barcelona", "nou-barris"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/barcelona/nou-barris`,
    zoneLabel: "Nou Barris",
    metaTitle: `Administración de alquiler Nou Barris — Verdum, Roquetes, Trinitat Vella · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Nou Barris: Verdum, Roquetes, Trinitat Vella, Porta y Ciutat Meridiana. Cobro, humedades en bloques de los 60–70 e IRAV por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    h1: "Administración de alquiler en Nou Barris (Verdum, Roquetes y Trinitat Vella)",
    subtitle:
      `Parque compacto y rentas contenidas — gestión profesional por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl., sin permanencia.`,
    heroLead:
      "Nou Barris es el distrito con rentas de publicación más contenidas de Barcelona capital: Brains Real Estate (Q2 2026) lo sitúa en 18,42 €/m², con bloques de los 60–80 en Verdum, Roquetes, Trinitat Vella y Ciutat Meridiana donde humedades, ascensor y calderas comunitarias son el día a día si no hay gestor. Livendia cobra la renta, media con comunidades muy activas y aplica IRAV en renovaciones. Tú no persigues pagos ni entras en chats de vecinos por un impago del inquilino.",
    eeatHeading: "Nou Barris: densidad, parque envejecido y propietarios fuera del distrito",
    eeatBlock:
      "Administramos alquileres en Verdum, Roquetes, Trinitat Vella, Porta, Ciutat Meridiana, Vilaplana, Torre Baró i Vallbona y Can Peguera. Brains Real Estate (Q2 2026): 18,42 €/m² en oferta agregada. Idealista (2025) muestra heterogeneidad entre Verdum (más consolidado) y Torre Baró. Zona tensionada catalana: Incasòl e IRAV aplican igual que en distritos premium — el error en renovación no perdona. Desde Les Corts (~20–25 min en metro L3/L4) asumimos canal con inquilino e industriales del norte de Barcelona.",
    whyIntro:
      "Muchos pisos en Nou Barris son herencia o inversión de propietarios que viven en otro barrio o municipio. El inquilino llama por humedad, por retraso de la comunidad en reparar el ascensor o por interpretar una cláusula del contrato — y sin filtro acabas mediando entre tres partes. Livendia establece plazos de respuesta, registra incidencias y te envía solo decisiones con impacto económico o legal.",
    howIntro:
      "Expediente digital, contacto único Livendia-inquilino, protocolo de cobro desde el día 3, red de fontaneros/calderistas en Verdum y Roquetes, y renovaciones con baremo verificado.",
    barriosIntro:
      "Verdum y Roquetes mezclan bloques de los 70 con ascensor y viviendas de 55–70 m² con familias estables. Trinitat Vella y Ciutat Meridiana tienen parque más envejecido y comunidades con alta participación en obras. Porta y Vilaplana conectan con el eje Meridiana; Torre Baró i Vallbona y Can Peguera aportan edificios en pendiente con humedades por filtración frecuentes. En cada barrio el protocolo de cobro es el mismo; cambia el tipo de incidencia doméstica y comunitaria.",
    barrios: [
      "Verdum",
      "Roquetes",
      "Trinitat Vella",
      "Ciutat Meridiana",
      "Porta",
      "Vilaplana",
      "Torre Baró i Vallbona",
      "Can Peguera",
    ],
    serviceGrid: [
      {
        title: "Humedades y fontanería en bloques antiguos",
        description:
          "Peritaje, origen comunitario vs interior, conversación con la finca y presupuesto antes de obra — habitual en Trinitat Vella y Roquetes.",
      },
      {
        title: "Mediación con comunidades activas",
        description:
          "Quejas de vecinos, ruido o convivencia compartida documentadas para el propietario sin exponer su teléfono personal.",
      },
      {
        title: "Cobro en rentas moderadas",
        description:
          "Impago de 750 € duele igual que uno de 2.500 €: protocolo idéntico con recordatorios y escalado trazable.",
      },
      {
        title: "Renovaciones con IRAV",
        description:
          "Cálculo legal antes de comunicar subida — aunque la oferta publicada sea más baja que en Eixample, la normativa es la misma.",
      },
    ],
    testimonialsTitle: "Propietarios en Nou Barris que delegaron cobros e incidencias",
    testimonials: [
      {
        quote:
          "Mi piso está en Verdum y yo en Granollers. Livendia gestionó humedad por tubería comunitaria y el inquilino dejó de escribirme directamente. Todo en el panel.",
        author: "Carmen V.",
        role: "Propietaria, Verdum",
      },
      {
        quote:
          "Alquilo en Roquetes. Cuando retrasaron la renta dos meses seguidos, Livendia aplicó el protocolo antes de que yo tuviera que amenazar con abogado.",
        author: "Héctor M.",
        role: "Propietario, Roquetes",
      },
    ],
    localFaq: [
      {
        question: "¿Cuánto cuesta alquilar en Nou Barris?",
        answer:
          "Brains Real Estate (Q2 2026) sitúa el distrito en 18,42 €/m² de publicación. Verdum y Porta suelen estar por encima de Torre Baró en agregadores de Idealista (2025). Tu gestor contrasta referencia por barrio.",
      },
      {
        question: "¿Gestionáis pisos alquilados por habitaciones en Nou Barris?",
        answer:
          "Administramos alquiler LAU de vivienda completa. Si hay habitaciones, revisamos que el contrato y la convivencia estén documentados; incidencias y cobro siguen canalizándose por Livendia.",
      },
      {
        question: "¿Atendéis incidencias de ascensor en edificios sin mantenimiento al día?",
        answer:
          "Sí. Abrimos incidencia con comunidad y empresa de ascensores, hacemos seguimiento y reportamos al propietario si hay derrama o coste individual.",
      },
    ],
    finalCtaLead:
      `Activa administración Livendia en Nou Barris: cobro puntual, incidencias trazadas y gestor por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}.`,
    primaryCtaLabel: "Consultar gestor Nou Barris por WhatsApp",
    waPlaceLabel: "Nou Barris, Barcelona",
    heroImage: metroBarcelonaHeroForSegments(["barcelona", "nou-barris"]),
    howImages: HOW_IMAGES_DEFAULT,
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona (ciudad)",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Nou Barris",
      addressLocality: "Barcelona",
      addressRegion: "Nou Barris",
      geo: { latitude: "41.4410", longitude: "2.1770" },
      areaServedName: "Nou Barris, Barcelona",
    },
  },
  {
    segments: ["barcelona", "ciutat-vella"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/barcelona/ciutat-vella`,
    zoneLabel: "Ciutat Vella",
    metaTitle: `Administración de alquiler Ciutat Vella — Gòtic, Born, Raval, Barceloneta · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Ciutat Vella: Barri Gòtic, El Born, El Raval y La Barceloneta. Turismo, convivencia, fincas centenarias e IRAV por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    h1: "Administración de alquiler en Ciutat Vella (Gòtic, Born, Raval y Barceloneta)",
    subtitle:
      `Centro histórico con normativa estricta — gestionado por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl., sin permanencia.`,
    heroLead:
      "Ciutat Vella combina Barri Gòtic, El Born, El Raval y La Barceloneta: Brains Real Estate (Q2 2026) sitúa el distrito en 22,18 €/m² de publicación, con heterogeneidad extrema — pisos turísticos mal encuadrados, convivencias compartidas en El Raval y fincas centenarias en el Gòtic sin ascensor. Livendia cobra la renta, media conflictos de convivencia y verifica IRAV en renovaciones. Tú no eres el primer contacto cuando la comunidad se queja o el inquilino confunde temporada con LAU.",
    eeatHeading: "Ciutat Vella: turismo, convivencia y edificios patrimoniales",
    eeatBlock:
      "Gestionamos arrendamientos en Barri Gòtic, Sant Pere/Santa Caterina i la Ribera (El Born), El Raval y La Barceloneta. Brains Real Estate (Q2 2026): 22,18 €/m² agregado; El Born y Barceloneta suelen superar El Raval en oferta Idealista (2025). Zona tensionada y escrutinio municipal sobre usos turísticos: cada contrato debe encajar en LAU o temporada con causa real. Operamos desde Les Corts con gestores que conocen la casuística de fincas estrechas, humedades en planta baja y ruido en calles de ocio.",
    whyIntro:
      "En Ciutat Vella el propietario arriesga sanciones si el contrato no refleja el uso real, y arriesga desgaste personal si el inquilino contacta por cada conflicto con vecinos o comercios. Livendia documenta comunicaciones, aplica protocolo de cobro y escala a asesoramiento legal cuando hay indicios de subarriendo o uso incompatible — sin que tú gestiones el día a día en calles saturadas.",
    howIntro:
      "Revisión de contrato y uso declarado, alta en panel, canal único con inquilino, mediación con comunidad, protocolo de cobro y renovaciones con IRAV verificado.",
    barriosIntro:
      "El Gòtic y El Born tienen fincas estrechas con escaleras interiores y humedades en planta baja; muchos propietarios no viven en el distrito. El Raval mezcla convivencias compartidas, familias y estudiantes — rotación e incidencias de convivencia son frecuentes. La Barceloneta aporta pisos pequeños (45–65 m²) con expectativa de respuesta rápida en temporada alta y normativa de usos muy vigilada. Sant Pere y la Ribera completan el mapa con edificios rehabilitados y rentas medias altas para el centro histórico.",
    barrios: [
      "Barri Gòtic",
      "El Born (Sant Pere, Santa Caterina i la Ribera)",
      "El Raval",
      "La Barceloneta",
      "Plaça Reial (límite)",
      "Rambla del Raval",
      "Passeig del Born",
    ],
    serviceGrid: [
      {
        title: "Convivencia y quejas de vecinos",
        description:
          "Mediación documentada en pisos compartidos o estancias medias — habitual en El Raval y Gòtic.",
      },
      {
        title: "Fincas centenarias sin ascensor",
        description:
          "Fontanería, humedades por capilaridad y cerrajería con industriales habituados en patrimonio urbano.",
      },
      {
        title: "Renovaciones IRAV en centro",
        description:
          "Cálculo legal antes de subida — la brecha oferta/contrato registrado es marcada en Ciutat Vella.",
      },
      {
        title: "Cobro y canal único",
        description:
          "El inquilino no obtiene tu móvil personal; Livendia gestiona recordatorios y escalado.",
      },
    ],
    testimonialsTitle: "Propietarios en Ciutat Vella que filtraron el contacto con el inquilino",
    testimonials: [
      {
        quote:
          "Tengo un piso en El Born y vivo en Sarrià. Livendia medió con la comunidad por ruido en terraza y yo solo leí el acta. El inquilino ya no me escribe.",
        author: "Montse R.",
        role: "Propietaria, El Born",
      },
      {
        quote:
          "Alquilo en El Raval. Livendia revisó la renovación con IRAV y gestionó una avería de fontanería en finca del s. XIX. Yo firmé dos resúmenes online.",
        author: "Pau D.",
        role: "Propietario, El Raval",
      },
    ],
    localFaq: [
      {
        question: "¿Cuál es el precio medio del alquiler en Ciutat Vella?",
        answer:
          "Brains Real Estate (Q2 2026) cifra el distrito en 22,18 €/m² de publicación. El Born y Barceloneta suelen superar El Raval en agregadores de Idealista (2025). Tu gestor contrasta referencia por subzona.",
      },
      {
        question: "¿Administráis pisos con riesgo de uso turístico encubierto?",
        answer:
          "Trabajamos con contratos LAU o temporada con causa documentada. Si detectamos incoherencias entre uso declarado y realidad, lo escalamos al propietario con criterio legal — no sustituimos inspección municipal.",
      },
      {
        question: "¿Gestionáis incidencias en edificios del Gòtic sin ascensor?",
        answer:
          "Sí. Coordinamos subidas de material, cerrajería de urgencia e industriales acostumbrados a fincas estrechas; el inquilino contacta con Livendia.",
      },
      {
        question: "¿Puedo contratar si el piso está en Barceloneta y yo en el extranjero?",
        answer:
          "Es frecuente. Panel 24/7, WhatsApp con gestor en horario laboral español y documentación archivada para renovaciones e incidencias.",
      },
    ],
    finalCtaLead:
      "Delega en Ciutat Vella la relación con inquilino y comunidad: cobro, IRAV e incidencias con trazabilidad.",
    primaryCtaLabel: "Contactar gestor Ciutat Vella",
    waPlaceLabel: "Ciutat Vella, Barcelona",
    heroImage: metroBarcelonaHeroForSegments(["barcelona", "ciutat-vella"]),
    howImages: [
      metroBarcelonaZoneImage("rabal.jpg"),
      "/images/familia5.jpg",
      "/images/equipo6.jpg",
      "/images/gestoria2.jpg",
    ],
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona (ciudad)",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Ciutat Vella",
      addressLocality: "Barcelona",
      addressRegion: "Ciutat Vella",
      geo: { latitude: "41.3825", longitude: "2.1769" },
      areaServedName: "Ciutat Vella, Barcelona",
    },
  },
  {
    segments: ["barcelona", "horta-guinardo"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/barcelona/horta-guinardo`,
    zoneLabel: "Horta-Guinardó",
    metaTitle: `Administración de alquiler Horta-Guinardó — Horta, El Carmel, La Clota, Vall d'Hebron · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Horta-Guinardó: Horta centre, El Carmel, La Teixonera, Guinardó y Vall d'Hebron. Cobro, IRAV e incidencias en pendiente y bloques de los 60–70 por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    h1: "Administración de alquiler en Horta-Guinardó (Horta, El Carmel y Guinardó)",
    subtitle:
      `Distrito residencial en pendiente — gestión profesional por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl., sin permanencia.`,
    heroLead:
      "Horta-Guinardó mezcla Horta centre familiar, El Carmel en pendiente y Guinardó con vistas: Brains Real Estate (Q2 2026) sitúa el distrito en 21,34 €/m² de publicación, con heterogeneidad entre La Clota (más premium) y barrios en ladera con edificios de los 60–70. Livendia cobra la renta, coordina industriales en zonas de difícil acceso y calcula IRAV en renovaciones. Tú no subes a El Carmel un sábado porque el inquilino no sabe cerrar la llave de paso.",
    eeatHeading: "Horta-Guinardó: pendiente, familias y parque heterogéneo",
    eeatBlock:
      "Administramos alquileres en Horta centre, El Carmel, La Teixonera, El Coll (límite), Guinardó, La Clota, Montbau y Vall d'Hebron. Brains Real Estate (Q2 2026): 21,34 €/m² agregado; Idealista (2025) muestra La Clota y Horta centre por encima de El Carmel en €/m². Zona tensionada catalana: Incasòl e IRAV en cada renovación. Desde Les Corts (~20 min en metro L5/L3) asumimos canal con inquilino, cobro y mediación con comunidades muy participativas.",
    whyIntro:
      "En El Carmel y La Teixonera las incidencias de fontanería y humedades por filtración en ladera son recurrentes; en Horta centre predominan familias con contratos LAU largos y expectativa de estabilidad. Si el propietario vive en otro municipio, mezclar ambos perfiles en un solo WhatsApp personal es insostenible. Livendia segmenta comunicaciones, documenta presupuestos y te presenta decisiones con plazo.",
    howIntro:
      "Alta con geolocalización del inmueble (accesos, parking), canal Livendia-inquilino, protocolo de cobro, red de mantenimiento en Horta/Carmel y renovaciones con baremo verificado.",
    barriosIntro:
      "Horta centre y La Clota concentran pisos de 70–90 m² con familias estables cerca de parques y comercio de proximidad. El Carmel y La Teixonera tienen bloques en pendiente, calderas envejecidas y más rotación en pisos compactos. Guinardó y Montbau mezclan chalet adosado y bloques con vistas. Vall d'Hebron atrae personal sanitario del campus hospitalario — horarios de incidencia irregulares si no hay gestor.",
    barrios: [
      "Horta centre",
      "La Clota",
      "El Carmel",
      "La Teixonera",
      "El Guinardó",
      "Montbau",
      "Vall d'Hebron",
      "Can Baró (límite)",
    ],
    serviceGrid: [
      {
        title: "Incidencias en ladera y accesos difíciles",
        description:
          "Fontaneros y electricistas habituados en El Carmel/Teixonera con coordinación de horarios de obra con comunidad.",
      },
      {
        title: "Renovaciones IRAV",
        description:
          "Cálculo legal por subzona — La Clota no tiene el mismo baremo efectivo que El Carmel en agregadores de portal.",
      },
      {
        title: "Cobro en familias estables",
        description:
          "Protocolo día 3 con mediación antes de escalado — habitual en contratos largos en Horta centre.",
      },
      {
        title: "INCASÒL y suministros",
        description:
          "Depósito, altas/bajas y archivo documental incluidos en la cuota mensual.",
      },
    ],
    testimonialsTitle: "Propietarios en Horta-Guinardó que dejaron de subir a El Carmel por averías",
    testimonials: [
      {
        quote:
          "Mi piso está en El Carmel y yo en Sabadell. Livendia gestionó humedad por filtración en fachada y habló con la comunidad. Yo aprobé obra por panel.",
        author: "Quim S.",
        role: "Propietario, El Carmel",
      },
      {
        quote:
          "Alquilo en Horta centre. Livendia calculó IRAV en renovación y el inquilino familia no me llama — solo el gestor.",
        author: "Teresa A.",
        role: "Propietaria, Horta",
      },
    ],
    localFaq: [
      {
        question: "¿Cuál es el precio medio del alquiler en Horta-Guinardó?",
        answer:
          "Brains Real Estate (Q2 2026) cifra el distrito en 21,34 €/m² de publicación. La Clota y Horta centre suelen superar El Carmel en Idealista (2025). Tu gestor contrasta referencia por barrio.",
      },
      {
        question: "¿Atendéis incidencias urgentes en El Carmel con calles empinadas?",
        answer:
          "Sí. Coordinamos industriales locales y horarios de acceso con inquilino y comunidad; el propietario recibe presupuesto antes de autorizar.",
      },
      {
        question: "¿Gestionáis alquileres cerca del Hospital Vall d'Hebron?",
        answer:
          "Sí. Personal sanitario con turnos rotativos implica incidencias a horas atípicas — Livendia asume el canal 24/7 operativo vía gestor, no tu móvil personal.",
      },
      {
        question: "¿Puedo contratar si heredé un piso en Guinardó y vivo fuera de Barcelona?",
        answer:
          "Es frecuente. Panel, WhatsApp con gestor y oficina en Les Corts para firma si hace falta.",
      },
    ],
    finalCtaLead:
      "Activa administración Livendia en Horta-Guinardó: cobro, IRAV e incidencias en pendiente con trazabilidad.",
    primaryCtaLabel: "Consultar gestor Horta-Guinardó",
    waPlaceLabel: "Horta-Guinardó, Barcelona",
    heroImage: metroBarcelonaHeroForSegments(["barcelona", "horta-guinardo"]),
    howImages: [
      "/images/gestoria6.jpg",
      "/images/familia2.jpg",
      "/images/equipo4.jpg",
      "/images/gestoria3.jpg",
    ],
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona (ciudad)",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Horta-Guinardó",
      addressLocality: "Barcelona",
      addressRegion: "Horta-Guinardó",
      geo: { latitude: "41.4190", longitude: "2.1690" },
      areaServedName: "Horta-Guinardó, Barcelona",
    },
  },
  {
    segments: ["barcelona", "sant-andreu"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/barcelona/sant-andreu`,
    zoneLabel: "Sant Andreu",
    metaTitle: `Administración de alquiler Sant Andreu — centre, La Sagrera, Trinitat Vella · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Sant Andreu: Sant Andreu de Palomar, La Sagrera, Navas, Bon Pastor (límite) y Trinitat Vella. Cobro, INCASÒL e IRAV por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    h1: "Administración de alquiler en Sant Andreu (centre, La Sagrera y Navas)",
    subtitle:
      `Distrito en transformación junto a La Sagrera — ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl., sin permanencia.`,
    heroLead:
      "Sant Andreu combina barrio de mercado tradicional, eje La Sagrera (AVE, metro) y promociones nuevas en Navas: Brains Real Estate (Q2 2026) sitúa el distrito en 21,88 €/m² de publicación, con demanda de familias que buscan más metros que en el Eixample. Livendia cobra la renta, media con comunidades activas en bloques de los 70–90 y verifica IRAV. Tú no persigues transferencias ni entras en conflictos de convivencia en pisos compartidos cerca del mercado.",
    eeatHeading: "Sant Andreu: tradición, Sagrera y stock en renovación",
    eeatBlock:
      "Gestionamos arrendamientos en Sant Andreu de Palomar centre, La Sagrera, Navas, Bon Pastor (límite), Trinitat Vella (límite Nou Barris) y el barrio de la Maquinista. Brains Real Estate (Q2 2026): 21,88 €/m² en oferta agregada. Idealista (2025) muestra subidas moderadas en Navas tras obra pública. Zona tensionada: cada renovación exige IRAV. Operamos desde Les Corts (~18 min en metro L1/L5).",
    whyIntro:
      "La Sagrera concentra pisos reformados con inquilinos jóvenes; el centre de Sant Andreu mantiene familias en contratos largos con calderas comunitarias. Sin gestor, el propietario recibe mezcla de urgencias reales y peticiones administrativas (empadronamiento, certificados). Livendia filtra, prioriza y documenta.",
    howIntro:
      "Expediente en panel, canal único, cobro desde día 3, industriales en Sant Andreu/La Sagrera y renovaciones con resumen legal de una página.",
    barriosIntro:
      "Sant Andreu centre conserva fincas de 65–85 m² cerca del mercado y la estación. La Sagrera mezcla obra nueva y rehabilitación con expectativa de respuesta rápida por proximidad a nodos de transporte. Navas y la Maquinista atraen familias jóvenes; Trinitat Vella (límite) comparte parque envejecido con Nou Barris — humedades y ascensor son frecuentes.",
    barrios: [
      "Sant Andreu de Palomar centre",
      "La Sagrera",
      "Navas",
      "La Maquinista",
      "Bon Pastor (límite)",
      "Trinitat Vella (límite)",
      "Pg. Fabra i Puig",
      "Mercat de Sant Andreu",
    ],
    serviceGrid: [
      {
        title: "Mediación en pisos compartidos",
        description:
          "Convivencia y ruido documentados — habitual cerca del centre y Navas con rotación moderada.",
      },
      {
        title: "Renovaciones con IRAV",
        description:
          "Propuesta legal antes de subir renta tras reforma — evita reclamación cuando el inquilino compara con portal.",
      },
      {
        title: "Cobro y empadronamientos",
        description:
          "Protocolo de renta + gestión de certificados sin exponer tu teléfono al inquilino.",
      },
      {
        title: "INCASÒL",
        description:
          "Fianza y suministros en alta/baja de inquilino archivados en panel.",
      },
    ],
    testimonialsTitle: "Propietarios en Sant Andreu con el inquilino canalizado",
    testimonials: [
      {
        quote:
          "Mi piso está en La Sagrera y yo en Valencia. Livendia gestionó renovación con IRAV y una avería de ascensor. Solo firmé online.",
        author: "Miguel R.",
        role: "Propietario, La Sagrera",
      },
      {
        quote:
          "Alquilo cerca del mercado de Sant Andreu. Cuando hubo queja de vecinos por convivencia, Livendia medió y yo recibí acta — no diez llamadas.",
        author: "Aina B.",
        role: "Propietaria, Sant Andreu centre",
      },
    ],
    localFaq: [
      {
        question: "¿Cuánto cuesta alquilar en Sant Andreu?",
        answer:
          "Brains Real Estate (Q2 2026) sitúa el distrito en 21,88 €/m² de publicación. Navas y La Sagrera suelen superar Bon Pastor en agregadores de Idealista (2025). Tu gestor contrasta referencia antes de renovar.",
      },
      {
        question: "¿Gestionáis pisos reformados cerca de la estación de La Sagrera?",
        answer:
          "Sí. Mismo protocolo de cobro e incidencias; adaptamos comunicación a inquilinos jóvenes o familias según contrato LAU.",
      },
      {
        question: "¿Qué pasa si el inquilino pide certificado de empadronamiento?",
        answer:
          "Livendia verifica procedencia, coordina firma contigo si hace falta y entrega documentación al arrendatario — sin interrumpir tu jornada laboral.",
      },
    ],
    finalCtaLead:
      `Delega en Sant Andreu cobros, IRAV e incidencias — gestor Livendia por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}.`,
    primaryCtaLabel: "Hablar con gestor Sant Andreu por WhatsApp",
    waPlaceLabel: "Sant Andreu, Barcelona",
    heroImage: metroBarcelonaHeroForSegments(["barcelona", "sant-andreu"]),
    howImages: HOW_IMAGES_DEFAULT,
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona (ciudad)",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Sant Andreu",
      addressLocality: "Barcelona",
      addressRegion: "Sant Andreu",
      geo: { latitude: "41.4350", longitude: "2.1900" },
      areaServedName: "Sant Andreu, Barcelona",
    },
  },
  {
    segments: ["esplugues"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/esplugues`,
    zoneLabel: "Esplugues de Llobregat",
    metaTitle: `Administración de alquiler Esplugues — Can Vidalet, Finestrelles, FGC · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Esplugues de Llobregat: Can Vidalet, Centre, Finestrelles y Les Planes. Metro L5, INCASÒL e incidencias por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl. Gestor desde Les Corts.`,
    h1: "Administración de alquiler en Esplugues de Llobregat (Can Vidalet, Finestrelles y metro L5)",
    subtitle: `Delega tu piso en Esplugues por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} — canal único con el inquilino.`,
    heroLead:
      "Esplugues —Can Vidalet, Centre, Finestrelles, Les Planes— combina metro L5, casas adosadas en ladera y normativa catalana de zona tensionada. Oferta de alquiler más contenida que Barcelona capital pero parque envejecido con calderas y ascensores exigentes. Livendia cobra, media e incidencias; tú no persigues transferencias ni llamadas del inquilino.",
    eeatHeading: "Esplugues: Baix Llobregat y acceso rápido a Barcelona",
    eeatBlock:
      "Gestionamos arrendamientos en Can Vidalet, Centre, Finestrelles, Les Planes y Can Clota. Municipio tensionado: Incasòl e IRAV en renovaciones. Operamos desde Les Corts (~15–20 min en metro L5 o coche por Diagonal). Contrastamos referencia de mercado antes de cada subida legal.",
    whyIntro:
      "Muchos propietarios en Esplugues alquilaron pisos reformados durante la subida del Baix Llobregat y ahora renuevan con topes IRAV. Sin gestor, cada avería de ascensor en ladera o duda de suministros acaba en tu móvil. Livendia filtra urgencias, coordina industriales locales y te resume solo lo que requiere firma o presupuesto.",
    howIntro:
      "Alta en panel, protocolo de cobro desde el día 3, coordinación con comunidades activas y resumen mensual de rentas e incidencias.",
    barriosIntro:
      "Can Vidalet y Centre concentran bloques de los 70–90 m² bien comunicados con metro L5. Finestrelles y Les Planes mezclan casas adosadas y pisos en ladera con más incidencias de fontanería y accesos. Can Clota y el entorno del Hospital Sant Joan Despí atraen familias con contratos LAU estables.",
    barrios: ["Can Vidalet", "Centre", "Finestrelles", "Les Planes", "Can Clota", "Hospital Sant Joan Despí (límite)"],
    serviceBullets: [
      {
        title: "Renovaciones con IRAV",
        description: "Cálculo de incremento máximo en zona tensionada antes de enviar propuesta al inquilino.",
      },
      {
        title: "Incidencias en ladera y bloques",
        description: "Coordinación con mantenedores del Baix Llobregat para ascensores, calderas y humedades.",
      },
      {
        title: "Panel y cobro mensual",
        description: "Liquidación de renta, historial de incidencias y contacto único Livendia-inquilino.",
      },
    ],
    testimonialsTitle: "Propietarios en Esplugues que dejaron de gestionar el día a día",
    testimonials: [
      {
        quote:
          "Mi piso está en Can Vidalet y yo en Madrid. Livendia gestionó una filtración en fachada con la comunidad; yo solo autorizé el presupuesto por email.",
        author: "Laura P.",
        role: "Propietaria, Can Vidalet",
      },
      {
        quote:
          "Renové contrato en Finestrelles y Livendia calculó IRAV antes de hablar con el inquilino. El panel me dice si pagaron el día 1.",
        author: "Marc T.",
        role: "Propietario, Finestrelles",
      },
    ],
    localFaq: [
      {
        question: "¿Cuánto cuesta alquilar en Esplugues?",
        answer:
          "El alquiler suele situarse por debajo de Barcelona capital en agregadores locales (rango habitual 14–18 €/m² según barrio y estado). Tu gestor contrasta baremo estatal e IRAV antes de renovar o firmar contrato nuevo.",
      },
      {
        question: "¿Atendéis incidencias en casas adosadas de Les Planes?",
        answer:
          "Sí. Mismo protocolo de cobro e incidencias; adaptamos coordinación a comunidades pequeñas o viviendas unifamiliares con accesos en cuesta.",
      },
      {
        question: "¿Puedo contratar si vivo en Barcelona capital?",
        answer:
          "Sí. Esplugues está a minutos en metro L5 desde Diagonal. El panel y WhatsApp sustituyen desplazamientos habituales.",
      },
    ],
    finalCtaLead:
      `Protege tu alquiler en Esplugues con gestor Livendia — ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}, sin permanencia.`,
    primaryCtaLabel: "Contactar gestor Esplugues por WhatsApp",
    waPlaceLabel: "Esplugues de Llobregat",
    heroImage: metroBarcelonaHeroForSegments(["esplugues"]),
    howImages: ["/images/gestoria2.jpg", "/images/familia1.jpg", "/images/equipo4.jpg", "/images/modelo3.jpg"],
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona y área metropolitana",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Esplugues de Llobregat",
      addressLocality: "Esplugues de Llobregat",
      areaServedName: "Esplugues de Llobregat",
    },
  },
  {
    segments: ["sant-joan-despi"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/sant-joan-despi`,
    zoneLabel: "Sant Joan Despí",
    metaTitle: `Administración de alquiler Sant Joan Despí — Centre, Torreblanca, TRAM · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Sant Joan Despí: Centre, Torreblanca, Les Fonts y TRAM T1/T2. INCASÒL, cobro e incidencias por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    h1: "Administración de alquiler en Sant Joan Despí (Centre, Torreblanca y eje TRAM)",
    subtitle: `Administración LAU en Sant Joan Despí desde ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    heroLead:
      "Sant Joan Despí —Centre, Torreblanca, Les Fonts, Can Trabal— es municipio tensionado del Baix Llobregat con buena conexión TRAM y demanda familiar estable. Parque mixto de bloques y chalets donde humedades, ascensor y suministros generan fricción si el propietario no está cerca. Livendia asume cobro, mediación e industriales; tú no hablas con el inquilino.",
    eeatHeading: "Sant Joan Despí y corredor del TRAM",
    eeatBlock:
      "Gestionamos arrendamientos en Centre, Torreblanca, Les Fonts, Can Trabal y entorno del Hospital. Verificamos IRAV en renovaciones, depositamos en Incasòl y canalizamos incidencias desde Les Corts con plazos documentados en panel.",
    whyIntro:
      "Propietarios que invirtieron cerca del TRAM suelen vivir fuera del municipio. Cada consulta de empadronamiento, retraso de renta o avería comunitaria distrae del trabajo. Livendia establece un único canal y escala solo lo que requiere tu decisión.",
    howIntro:
      "Expediente digital, seguimiento de transferencias, mediación de impagos y coordinación con técnicos del Baix Llobregat.",
    barriosIntro:
      "Centre y Torreblanca concentran bloques de los 80–95 m² con comunidades muy activas. Les Fonts y Can Trabal mezclan casas adosadas y pisos con más rotación moderada. El eje TRAM (T1/T2) atrae inquilinos que trabajan en Barcelona o en polígonos del Llobregat.",
    barrios: ["Centre", "Torreblanca", "Les Fonts", "Can Trabal", "La Plana", "TRAM Sant Joan Despí"],
    serviceBullets: [
      {
        title: "Cobro y protocolo de impago",
        description: "Recordatorios automatizados, mediación formal y aviso al propietario solo si no hay justificante.",
      },
      {
        title: "TRAM y desplazamientos",
        description: "Gestión remota con panel; oficina Les Corts accesible si necesitas firma presencial.",
      },
      {
        title: "Renovaciones LAU",
        description: "IRAV y documentación para archivo antes de enviar propuesta al inquilino.",
      },
    ],
    testimonialsTitle: "Propietarios en Sant Joan Despí con renta bajo control",
    testimonials: [
      {
        quote:
          "Alquilo en Torreblanca y vivo en Girona. Livendia aplicó el protocolo de cobro cuando el inquilino retrasó la transferencia — yo lo supe por el panel, no por llamadas.",
        author: "Núria F.",
        role: "Propietaria, Torreblanca",
      },
      {
        quote:
          "Hubo avería de ascensor en Centre. Livendia presionó a comunidad y mantenedor; yo recibí acta y presupuesto, nada más.",
        author: "David S.",
        role: "Propietario, Centre",
      },
    ],
    localFaq: [
      {
        question: "¿Está Sant Joan Despí en zona tensionada?",
        answer:
          "Sí, forma parte de la declaración catalana de mercado residencial tensionado. Cada renovación exige contrastar IRAV y baremo estatal antes de comunicar subida al inquilino.",
      },
      {
        question: "¿Gestionáis pisos cerca de la parada TRAM?",
        answer:
          "Sí. El protocolo es el mismo en Centre o Les Fonts; documentamos incidencias y cobros con el mismo panel que en Barcelona capital.",
      },
      {
        question: "¿Incluye cambio de suministros?",
        answer:
          "Coordinamos alta/baja de luz y agua en rotaciones, recogemos lecturas y archivamos justificantes — sin que negocies directamente con el inquilino.",
      },
    ],
    finalCtaLead:
      `Activa administración Livendia en Sant Joan Despí — ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}, gestor dedicado.`,
    primaryCtaLabel: "Solicitar gestión Sant Joan Despí",
    waPlaceLabel: "Sant Joan Despí",
    heroImage: metroBarcelonaHeroForSegments(["sant-joan-despi"]),
    howImages: ["/images/gestoria1.jpg", "/images/familia6.jpg", "/images/equipo3.jpg", "/images/gestoria4.jpg"],
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona y área metropolitana",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Sant Joan Despí",
      addressLocality: "Sant Joan Despí",
      areaServedName: "Sant Joan Despí",
    },
  },
  {
    segments: ["sant-adria"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/sant-adria`,
    zoneLabel: "Sant Adrià de Besòs",
    metaTitle: `Administración de alquiler Sant Adrià — Parc del Besòs, metro L2, La Mina · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Sant Adrià de Besòs: Centre, La Mina, Parc del Besòs y Fòrum. Cobro en bloques del litoral, INCASÒL e IRAV por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    h1: "Administración de alquiler en Sant Adrià de Besòs (Parc del Besòs, La Mina y metro L2)",
    subtitle: `Protege tu piso en Sant Adrià por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} — gestor desde Les Corts.`,
    heroLead:
      "Sant Adrià —Centre, La Mina, Parc del Besòs, Fòrum— comparte el corredor del Besòs con Badalona: alquiler más asequible que Barcelona, parque envejecido y normativa catalana tensionada. Livendia cobra la renta, media incidencias de humedad y ascensor, y calcula IRAV en renovaciones. Tú no atiendes al inquilino en persona.",
    eeatHeading: "Sant Adrià: litoral del Besòs y normativa catalana",
    eeatBlock:
      "Gestionamos arrendamientos en Centre, La Mina, Parc del Besòs y entorno Fòrum. Zona tensionada: Incasòl e IRAV. Operamos desde Les Corts (~20–25 min metro L2). Contrastamos oferta de portales y referencia legal antes de cada renovación.",
    whyIntro:
      "Muchos pisos en Sant Adrià son inversión de propietarios que viven en Barcelona o fuera de Cataluña. Sin intermediario, retrasos de renta y quejas de vecinos por convivencia llegan directo a tu móvil. Livendia documenta cada paso en panel.",
    howIntro:
      "Canal único con arrendatario, industriales del Maresme-Besòs, liquidación mensual y avisos solo para firmas o gastos que autorices.",
    barriosIntro:
      "Centre y Parc del Besòs concentran bloques de los 60–80 m² con metro L2 hacia Barcelona. La Mina tiene parque compacto donde humedades y calderas son frecuentes. El entorno Fòrum mezcla vivienda más reciente con rotación moderada de inquilinos jóvenes.",
    barrios: ["Centre", "La Mina", "Parc del Besòs", "Fòrum (límite)", "Artigues (límite Badalona)"],
    serviceBullets: [
      {
        title: "Mediación en el Besòs",
        description: "Cobro, convivencia y incidencias sin que el propietario sea el primer contacto.",
      },
      {
        title: "IRAV en renovación",
        description: "Propuesta documentada al inquilino tras cálculo legal en municipio tensionado.",
      },
      {
        title: "INCASÒL y suministros",
        description: "Fianza y cambios de titularidad archivados en panel del propietario.",
      },
    ],
    testimonialsTitle: "Propietarios en Sant Adrià que delegaron el contacto",
    testimonials: [
      {
        quote:
          "Mi piso está en La Mina y yo en Tarragona. Livendia gestionó humedad por filtración con la comunidad; yo vi fotos y presupuesto en el panel.",
        author: "Sergi M.",
        role: "Propietario, La Mina",
      },
      {
        quote:
          "Renové en Centre con tope IRAV. Livendia llevó la conversación con el inquilino; yo firmé el resumen.",
        author: "Elena V.",
        role: "Propietaria, Centre",
      },
    ],
    localFaq: [
      {
        question: "¿Cuánto cuesta alquilar en Sant Adrià?",
        answer:
          "Suele situarse por debajo de Barcelona capital en agregadores del corredor Besòs (referencia habitual 12–17 €/m² según barrio y estado). Contrastamos baremo e IRAV antes de renovar.",
      },
      {
        question: "¿Atendéis La Mina y Parc del Besòs?",
        answer:
          "Sí. Mismo protocolo de cobro e incidencias con industriales habituales del litoral.",
      },
      {
        question: "¿Cómo llegáis desde la oficina Livendia?",
        answer:
          "Sede en Les Corts; Sant Adrià está a ~20–25 min en metro L2. Gestión diaria es remota vía panel y WhatsApp profesional.",
      },
    ],
    finalCtaLead:
      `Delega tu alquiler en Sant Adrià — ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}, sin permanencia.`,
    primaryCtaLabel: "WhatsApp gestor Sant Adrià",
    waPlaceLabel: "Sant Adrià de Besòs",
    heroImage: metroBarcelonaHeroForSegments(["sant-adria"]),
    howImages: ["/images/gestoria2.jpg", "/images/familia1.jpg", "/images/equipo4.jpg", "/images/modelo3.jpg"],
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona y área metropolitana",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Sant Adrià de Besòs",
      addressLocality: "Sant Adrià de Besòs",
      areaServedName: "Sant Adrià de Besòs",
    },
  },
  {
    segments: ["castelldefels"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/castelldefels`,
    zoneLabel: "Castelldefels",
    metaTitle: `Administración de alquiler Castelldefels — platja, Bellamar, Rodalies · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Castelldefels: Centre, platja, Bellamar y Montmar. Temporada alta, INCASÒL e incidencias en chalets y bloques por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    h1: "Administración de alquiler en Castelldefels (platja, Bellamar y Rodalies)",
    subtitle: `Administración de alquiler en Castelldefels desde ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    heroLead:
      "Castelldefels —Centre, platja, Bellamar, Montmar— mezcla demanda residencial estable y estacionalidad cerca del litoral. Chalets adosados, bloques con vistas y normativa catalana tensionada. Livendia cobra, gestiona incidencias (humedades, clima, comunidades) y verifica IRAV; tú no negocias con el inquilino.",
    eeatHeading: "Castelldefels: litoral, Rodalies y gestión LAU",
    eeatBlock:
      "Gestionamos arrendamientos en Centre, platja, Bellamar, Montmar y Can Roca. Municipio tensionado del Baix Llobregat. Operamos desde Les Corts (~25–35 min Rodalies R2). Documentamos cobros e incidencias en panel aunque vivas fuera del Garraf.",
    whyIntro:
      "Propietarios en Castelldefels suelen alquilar pisos o chalets como segunda residencia o inversión. Sin gestor, averías de climatización, filtraciones tras temporal o dudas de temporada larga acaban en llamadas fuera de horario. Livendia centraliza el canal.",
    howIntro:
      "Alta documental, protocolo de cobro, coordinación con mantenedores del Garraf y resumen mensual para propietarios en Barcelona o fuera de España.",
    barriosIntro:
      "La platja y Bellamar concentran viviendas con más exposición a humedad salina y rotación estacional moderada. Centre y Montmar mezclan bloques familiares bien comunicados con Rodalies R2. Can Roca y urbanizaciones interiores tienen casas adosadas con incidencias de jardín, persianas y comunidades pequeñas.",
    barrios: ["Centre", "Platja de Castelldefels", "Bellamar", "Montmar", "Can Roca", "Estació Castelldefels (Rodalies)"],
    serviceBullets: [
      {
        title: "Incidencias litorales",
        description: "Coordinación de humedades, climatización y cerramientos con técnicos del Garraf.",
      },
      {
        title: "Contratos LAU largos",
        description: "Mediación y cobro aunque el propietario no esté en temporada en la costa.",
      },
      {
        title: "Renovaciones IRAV",
        description: "Cálculo legal antes de proponer subida en municipio tensionado.",
      },
    ],
    testimonialsTitle: "Propietarios en Castelldefels con gestión remota",
    testimonials: [
      {
        quote:
          "Tengo un piso en Bellamar y vivo en Eixample. Livendia gestionó una avería de aire acondicionado en verano; el inquilino no tiene mi teléfono.",
        author: "Pau L.",
        role: "Propietario, Bellamar",
      },
      {
        quote:
          "Alquilo cerca de la estación. Livendia calculó IRAV en renovación y archivó todo en panel — útil porque no voy cada semana a Castelldefels.",
        author: "Isabel R.",
        role: "Propietaria, Centre",
      },
    ],
    localFaq: [
      {
        question: "¿Gestionáis chalets adosados en Castelldefels?",
        answer:
          "Sí. Adaptamos coordinación a comunidades pequeñas o viviendas unifamiliares; el protocolo de cobro y panel es el mismo que en bloques.",
      },
      {
        question: "¿Castelldefels es zona tensionada?",
        answer:
          "Sí, incluida en la declaración catalana. Verificamos IRAV y referencia legal en cada renovación de contrato LAU.",
      },
      {
        question: "¿Puedo contratar desde Barcelona capital?",
        answer:
          "Sí. Rodalies R2 conecta en ~25–35 min; la gestión cotidiana es remota con panel y WhatsApp de tu gestor Livendia.",
      },
    ],
    finalCtaLead:
      `Protege tu alquiler en Castelldefels — ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}, gestor desde Les Corts.`,
    primaryCtaLabel: "Consultar gestión Castelldefels",
    waPlaceLabel: "Castelldefels",
    heroImage: metroBarcelonaHeroForSegments(["castelldefels"]),
    howImages: ["/images/gestoria1.jpg", "/images/familia6.jpg", "/images/equipo3.jpg", "/images/gestoria4.jpg"],
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona y área metropolitana",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Castelldefels",
      addressLocality: "Castelldefels",
      areaServedName: "Castelldefels",
    },
  },
  {
    segments: ["sant-boi"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/sant-boi`,
    zoneLabel: "Sant Boi de Llobregat",
    metaTitle: `Administración de alquiler Sant Boi — Centre, Marianao, Plaça Catalunya · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Sant Boi de Llobregat: Centre, Marianao, Camps Blancs y Baix Llobregat. INCASÒL, cobro e incidencias por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl. Gestor desde Les Corts.`,
    h1: "Administración de alquiler en Sant Boi de Llobregat (Centre, Marianao y corredor Baix Llobregat)",
    subtitle: `Delega tu piso en Sant Boi por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} — canal único con el inquilino.`,
    heroLead:
      "Sant Boi —Centre, Marianao, Camps Blancs, Plaça Catalunya— es municipio tensionado del Baix Llobregat con parque envejecido y demanda familiar estable. Alquiler más asequible que Barcelona capital pero incidencias recurrentes en ascensor, calderas y humedades. Livendia cobra, media e industriales; tú no persigues transferencias.",
    eeatHeading: "Sant Boi: Baix Llobregat y gestión LAU",
    eeatBlock:
      "Gestionamos arrendamientos en Centre, Marianao, Camps Blancs y entorno hospitalario. Zona tensionada: Incasòl e IRAV en renovaciones. Operamos desde Les Corts (~20–25 min). Contrastamos referencia legal antes de cada subida de renta.",
    whyIntro:
      "Propietarios en Sant Boi suelen alquilar como inversión y vivir fuera del municipio. Sin gestor, impagos y averías comunitarias interrumpen el día a día. Livendia documenta cobros e incidencias en panel.",
    howIntro:
      "Alta en panel, protocolo de cobro desde el día 3, coordinación con técnicos del Baix Llobregat y resumen mensual.",
    barriosIntro:
      "Centre y Plaça Catalunya concentran bloques de los 70–85 m² con comunidades activas. Marianao y Camps Blancs mezclan vivienda compacta y familias con contratos LAU largos. El eje hospitalario y polígonos cercanos atraen inquilinos estables.",
    barrios: ["Centre", "Marianao", "Camps Blancs", "Plaça Catalunya", "Baix Llobregat (límite)", "St. Boi centre"],
    serviceBullets: [
      { title: "IRAV en renovación", description: "Cálculo legal en municipio tensionado antes de comunicar al inquilino." },
      { title: "Cobro y mediación", description: "Canal único Livendia-inquilino con escalado documentado." },
      { title: "INCASÒL y suministros", description: "Fianza y rotaciones archivadas en panel del propietario." },
    ],
    testimonialsTitle: "Propietarios en Sant Boi con renta bajo control",
    testimonials: [
      {
        quote:
          "Mi piso está en Marianao y yo en Tarragona. Livendia gestionó impago con protocolo de cobro; yo lo vi en el panel, no en llamadas.",
        author: "Quim A.",
        role: "Propietario, Marianao",
      },
      {
        quote:
          "Renové en Centre con IRAV calculado antes de hablar con el inquilino. Todo en una hoja resumen para firmar.",
        author: "Silvia H.",
        role: "Propietaria, Centre",
      },
    ],
    localFaq: [
      {
        question: "¿Cuánto cuesta alquilar en Sant Boi?",
        answer:
          "Suele situarse por debajo de Barcelona capital en agregadores del Baix Llobregat (referencia habitual 12–16 €/m² según barrio y estado). Contrastamos baremo e IRAV antes de renovar.",
      },
      {
        question: "¿Está Sant Boi en zona tensionada?",
        answer:
          "Sí, incluida en la declaración catalana. Cada renovación exige verificar IRAV y depósito Incasòl.",
      },
      {
        question: "¿Atendéis Camps Blancs y Marianao?",
        answer: "Sí. Mismo protocolo de cobro e incidencias con industriales habituales del municipio.",
      },
    ],
    finalCtaLead: `Protege tu alquiler en Sant Boi — ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}, sin permanencia.`,
    primaryCtaLabel: "WhatsApp gestor Sant Boi",
    waPlaceLabel: "Sant Boi de Llobregat",
    heroImage: metroBarcelonaHeroForSegments(["sant-boi"]),
    howImages: ["/images/gestoria2.jpg", "/images/familia1.jpg", "/images/equipo4.jpg", "/images/modelo3.jpg"],
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona y área metropolitana",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Sant Boi de Llobregat",
      addressLocality: "Sant Boi de Llobregat",
      areaServedName: "Sant Boi de Llobregat",
    },
  },
  {
    segments: ["gava"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/gava`,
    zoneLabel: "Gavà",
    metaTitle: `Administración de alquiler Gavà — Centre, Gavà Mar, TRAM · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Gavà: Centre, Gavà Mar, Can Ros y TRAM. Cobro en bloques y chalets, INCASÒL e IRAV por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    h1: "Administración de alquiler en Gavà (Centre, Gavà Mar y eje TRAM)",
    subtitle: `Administración LAU en Gavà desde ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    heroLead:
      "Gavà —Centre, Gavà Mar, Can Ros, Torre Lluch— combina litoral, TRAM y normativa catalana tensionada. Parque mixto de bloques y chalets con humedades, climatización y comunidades activas. Livendia asume cobro y mediación; tú no negocias con el inquilino.",
    eeatHeading: "Gavà: Garraf, TRAM y alquiler LAU",
    eeatBlock:
      "Gestionamos arrendamientos en Centre, Gavà Mar, Can Ros y urbanizaciones del TRAM. Municipio tensionado del Baix Llobregat. Desde Les Corts (~25–30 min). IRAV e Incasòl en cada renovación.",
    whyIntro:
      "Muchos pisos en Gavà Mar son segunda residencia o inversión de propietarios en Barcelona. Sin gestor, temporales y averías de climatización llegan fuera de horario. Livendia centraliza el canal.",
    howIntro:
      "Canal único, liquidación mensual, técnicos del Garraf y avisos solo para autorizar gastos o firmas.",
    barriosIntro:
      "Centre concentra bloques familiares bien comunicados con TRAM. Gavà Mar mezcla vivienda cerca del mar con estacionalidad moderada. Can Ros y Torre Lluch tienen casas adosadas con incidencias de cerramientos y humedad.",
    barrios: ["Centre", "Gavà Mar", "Can Ros", "Torre Lluch", "TRAM Gavà", "Les Graudes (límite)"],
    serviceBullets: [
      { title: "Incidencias litorales", description: "Humedad, climatización y cerramientos con técnicos del Garraf." },
      { title: "Renovaciones IRAV", description: "Propuesta legal documentada al inquilino en municipio tensionado." },
      { title: "Panel remoto", description: "Cobro e incidencias sin desplazarte semanalmente a Gavà." },
    ],
    testimonialsTitle: "Propietarios en Gavà con gestión remota",
    testimonials: [
      {
        quote:
          "Alquilo en Gavà Mar y vivo en Gràcia. Livendia coordinó avería de climatización en verano; el inquilino no tiene mi móvil.",
        author: "Oriol D.",
        role: "Propietario, Gavà Mar",
      },
      {
        quote:
          "Renové contrato en Centre con tope IRAV. Panel con justificantes de cobro cada mes.",
        author: "Laia P.",
        role: "Propietaria, Centre",
      },
    ],
    localFaq: [
      {
        question: "¿Gavà es zona tensionada?",
        answer: "Sí. Verificamos IRAV y referencia legal en cada renovación de contrato LAU.",
      },
      {
        question: "¿Gestionáis pisos en Gavà Mar?",
        answer: "Sí. Protocolo adaptado a humedad y climatización; cobro e incidencias igual que en Centre.",
      },
      {
        question: "¿Cómo llegáis desde Les Corts?",
        answer: "Gestión cotidiana remota; desplazamiento ~25–30 min por C-32/TRAM si hace falta firma presencial.",
      },
    ],
    finalCtaLead: `Delega tu alquiler en Gavà — ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}, gestor Livendia.`,
    primaryCtaLabel: "Consultar gestión Gavà",
    waPlaceLabel: "Gavà",
    heroImage: metroBarcelonaHeroForSegments(["gava"]),
    howImages: ["/images/gestoria1.jpg", "/images/familia6.jpg", "/images/equipo3.jpg", "/images/gestoria4.jpg"],
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona y área metropolitana",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Gavà",
      addressLocality: "Gavà",
      areaServedName: "Gavà",
    },
  },
  {
    segments: ["mollet-del-valles"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/mollet-del-valles`,
    zoneLabel: "Mollet del Vallès",
    metaTitle: `Administración de alquiler Mollet del Vallès — Centre, Can Borrell, RENFE · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Mollet del Vallès: Centre, Can Borrell, Gallecs y estación RENFE. INCASÒL, cobro e incidencias por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.`,
    h1: "Administración de alquiler en Mollet del Vallès (Centre, Can Borrell y RENFE)",
    subtitle: `Protege tu piso en Mollet por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} — sin permanencia.`,
    heroLead:
      "Mollet del Vallès —Centre, Can Borrell, Gallecs, estación RENFE— es alternativa residencial al Vallès con alquiler más contenido que Sant Cugat y buena conexión a Barcelona. Municipio tensionado; parque de bloques de los 80–00 con comunidades activas. Livendia cobra, calcula IRAV y gestiona incidencias.",
    eeatHeading: "Mollet: Vallès y contratos LAU estables",
    eeatBlock:
      "Gestionamos arrendamientos en Centre, Can Borrell, Gallecs y entorno estación. Zona tensionada catalana. Operamos desde Les Corts (~25–35 min). Documentación de cobros e incidencias en panel.",
    whyIntro:
      "Propietarios en Mollet suelen tener uno o dos pisos de inversión y no quieren mediación directa con inquilinos familiares de larga duración. Livendia filtra consultas y escala solo lo necesario.",
    howIntro:
      "Expediente digital, protocolo de impago, coordinación con industriales del Vallès y resumen mensual.",
    barriosIntro:
      "Centre y entorno estación concentran bloques de 75–95 m² con familias estables. Can Borrell y Gallecs mezclan promociones recientes y vivienda unifamiliar. Comunidades activas en ascensor y calderas.",
    barrios: ["Centre", "Can Borrell", "Gallecs", "Estació Mollet-Sant Fost", "Plaça Catalunya Mollet", "Barri del Nord"],
    serviceBullets: [
      { title: "Familias y contratos largos", description: "Mediación y cobro sin fricción en renovaciones IRAV." },
      { title: "Incidencias en bloques", description: "Ascensor, caldera comunitaria y humedades con seguimiento diario." },
      { title: "Gestor desde Les Corts", description: "Panel y WhatsApp profesional aunque vivas fuera del Vallès." },
    ],
    testimonialsTitle: "Propietarios en Mollet con el inquilino canalizado",
    testimonials: [
      {
        quote:
          "Mi piso está en Centre y yo en Madrid. Livendia gestionó ascensor parado dos semanas; yo solo autorizé derrama por email.",
        author: "Albert C.",
        role: "Propietario, Centre",
      },
      {
        quote:
          "Impago puntual resuelto con mediación antes de que yo interviniera. Todo registrado en panel.",
        author: "Montse L.",
        role: "Propietaria, Can Borrell",
      },
    ],
    localFaq: [
      {
        question: "¿Cuánto cuesta alquilar en Mollet?",
        answer:
          "Suele estar por debajo de Sant Cugat y Barcelona en agregadores del Vallès (referencia habitual 13–17 €/m² según barrio). Contrastamos IRAV antes de renovar.",
      },
      {
        question: "¿Mollet está en zona tensionada?",
        answer: "Sí, dentro de la declaración catalana. Cada subida legal pasa por cálculo IRAV.",
      },
      {
        question: "¿Atendéis Can Borrell y Gallecs?",
        answer: "Sí. Mismo protocolo Livendia en todo el municipio.",
      },
    ],
    finalCtaLead: `Activa administración en Mollet — ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}, gestor dedicado.`,
    primaryCtaLabel: "WhatsApp gestor Mollet",
    waPlaceLabel: "Mollet del Vallès",
    heroImage: metroBarcelonaHeroForSegments(["mollet-del-valles"]),
    howImages: ["/images/gestoria2.jpg", "/images/familia1.jpg", "/images/equipo4.jpg", "/images/modelo3.jpg"],
    regulatorySlug: "barcelona",
    parentCityHubPath: BARCELONA_CITY_HUB,
    parentCityHubLabel: "Administración de alquiler en Barcelona y área metropolitana",
    jsonLd: {
      name: "Livendia — Administración de alquiler en Mollet del Vallès",
      addressLocality: "Mollet del Vallès",
      areaServedName: "Mollet del Vallès",
    },
  },
  {
    segments: ["sant-cugat"],
    path: `${ADMINISTRACION_ALQUILER_METRO_BASE}/sant-cugat`,
    zoneLabel: "Sant Cugat del Vallès",
    metaTitle: `Administración de alquiler Sant Cugat — Mira-sol, Valldoreix, Volpelleres, chalets · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Sant Cugat del Vallès: Centre-Vila, Mira-sol, Valldoreix y Les Planes. Cobro en casas adosadas, IRAV e incidencias en urbanizaciones por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl. Desde Les Corts (~20 min FGC).`,
    h1: "Administración de alquiler en Sant Cugat del Vallès (Mira-sol, Valldoreix y Centre-Vila)",
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
    barriosIntro:
      "Centre-Vila y Volpelleres concentran pisos de 85–115 m² con familias en contratos LAU largos y colegios concertados. Mira-sol y Valldoreix (FGC) mezclan chalets adosados con jardín, piscina comunitaria y portería — donde más duele no tener gestor si vives fuera del Vallès. Les Planes y Can Matas aportan promociones recientes; Parc Central y Eixample Sant Cugat completan el mapa con ticket medio alto por metro cuadrado efectivo (superficie amplia).",
    barrios: [
      "Centre-Vila",
      "Mira-sol",
      "Valldoreix (FGC)",
      "Volpelleres",
      "Les Planes",
      "Can Matas",
      "Parc Central",
      "Eixample Sant Cugat",
    ],
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
      {
        question: "¿Qué ocurre si hay avería en piscina o jardín de una urbanización en Mira-sol?",
        answer:
          "Livendia contacta con administrador de la urbanización o comunidad, registra plazos y te presenta costes individuales antes de autorizar — el inquilino no canaliza la urgencia por tu móvil personal.",
      },
    ],
    finalCtaLead:
      `Delega en Sant Cugat la relación con tu inquilino: renta cobrada, incidencias resueltas y gestor asignado por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}.`,
    primaryCtaLabel: "Contactar con el Gestor de Sant Cugat",
    waPlaceLabel: "Sant Cugat del Vallès",
    heroImage: metroBarcelonaHeroForSegments(["sant-cugat"]),
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
    metaTitle: `Administración de alquiler Badalona — Gorg, Centre, Montigalà, metro L2 · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
    metaDescription:
      `Gestión LAU en Badalona: Gorg, Centre, Montigalà, Sant Roc y Llefià. Cobro en bloques de los 60–80, humedades, INCASÒL e IRAV por ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl. Gestor desde Les Corts.`,
    h1: "Administración de alquiler en Badalona (Gorg, Centre y Montigalà — metro a Barcelona)",
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
    barriosIntro:
      "Centre y Gorg (metro L2) concentran pisos de 55–75 m² con rotación moderada y comunidades muy activas. Montigalà y Bufalà mezclan bloques de los 70–90 con ascensores envejecidos. Nova Lloreda y el litoral del Besòs atraen familias que trabajan en Barcelona; Sant Roc y Llefià tienen parque compacto donde humedades, calderas y ascensor son la tríada habitual de incidencias si no hay gestor intermediando.",
    barrios: [
      "Centre",
      "Gorg",
      "Montigalà",
      "Bufalà",
      "Nova Lloreda",
      "Sant Roc",
      "Llefià",
      "Artigues (límite)",
      "Canyet",
    ],
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
      {
        question: "¿Cómo gestionáis la brecha entre precio de Idealista y contrato SERPAVI en Badalona?",
        answer:
          "En renovación calculamos IRAV y baremo legal antes de proponer subida — no copiamos el €/m² del portal sin verificar referencia oficial. Te explicamos la diferencia en resumen de una página.",
      },
    ],
    finalCtaLead:
      `Protege tu alquiler en Badalona con un gestor que habla con el inquilino por ti — ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}, sin permanencia.`,
    primaryCtaLabel: "Solicitar Gestión en Badalona por WhatsApp",
    waPlaceLabel: "Badalona",
    heroImage: metroBarcelonaHeroForSegments(["badalona"]),
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
