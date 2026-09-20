/**
 * Landings de conversión: redactar contrato de alquiler por ciudad.
 * Rutas: /servicios/redactar-contrato-alquiler/[slug]
 */
import { CONTRATO_ALQUILER_LAU_PRICE_LABEL } from "@/lib/catalog.public";
import { metroBarcelonaZoneImage } from "@/lib/administracion-alquiler-metro-zone-images";
import { localContratoAlquilerHref } from "@/lib/contrato-alquiler-local-cities";
import { localContratoAlquilerHabitacionHref } from "@/lib/contrato-alquiler-habitacion-local-cities";
import { localContratoAlquilerTemporadaHref } from "@/lib/contrato-alquiler-temporada-local-cities";
import { REDACTAR_CONTRATO_ALQUILER_BASE } from "@/lib/redactar-contrato-alquiler-content";

export { REDACTAR_CONTRATO_ALQUILER_BASE };

export const REDACTAR_CONTRATO_ALQUILER_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "madrid",
  "barcelona",
  "barcelona-les-corts",
  "barcelona-eixample",
  "hospitalet-de-llobregat",
  "cornella-de-llobregat",
  "valencia",
  "sevilla",
  "malaga",
  "bilbao",
  "zaragoza",
  "alicante",
  "granada",
  "palma",
  "murcia",
  "valladolid",
  "vigo",
  "gijon",
  "cordoba",
  "las-palmas",
  "santander",
  "pamplona",
  "oviedo",
  "asturias",
] as const;

export function isRedactarContratoAlquilerLocalSlugPublished(slug: string): boolean {
  return REDACTAR_CONTRATO_ALQUILER_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedRedactarContratoAlquilerLocalCities(): RedactarContratoAlquilerLocalCityDefinition[] {
  const pub = new Set(REDACTAR_CONTRATO_ALQUILER_LOCAL_PUBLISHED_SLUGS);
  return REDACTAR_CONTRATO_ALQUILER_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

export type RedactarContratoAlquilerLocalLandingConfig = {
  path: string;
  slug: string;
  city: string;
  placeLabel: string;
  schemaAdministrativeArea: string;
  metaTitle: string;
  metaDescription: string;
  /** H1 propio; si no se define, usa la plantilla genérica de conversión. */
  heroTitle?: string;
  heroLead: string;
  whyIntro: string;
  marketContext: string;
  barriosIntro: string;
  barrios: readonly string[];
  regulatoryBlock: string;
  localDifferentiators: readonly { title: string; description: string }[];
  agencyLocalNote: string;
  platformDemoProperty: string;
  testimonialsTitle: string;
  testimonials: readonly { quote: string; author: string; role: string }[];
  faqLocal: readonly { question: string; answer: string }[];
  heroImage: string;
  heroImageAlt: string;
  contratoAlquilerLocalHref: string;
  contratoTemporadaHref?: string;
  contratoHabitacionHref?: string;
};

export type RedactarContratoAlquilerLocalCityDefinition = Omit<
  RedactarContratoAlquilerLocalLandingConfig,
  "path" | "contratoAlquilerLocalHref"
>;

const PRICE = CONTRATO_ALQUILER_LAU_PRICE_LABEL;

export function localRedactarContratoAlquilerHref(slug: string): string {
  return `${REDACTAR_CONTRATO_ALQUILER_BASE}/${slug}`;
}

export function toRedactarContratoAlquilerLandingConfig(
  def: RedactarContratoAlquilerLocalCityDefinition,
): RedactarContratoAlquilerLocalLandingConfig {
  return {
    ...def,
    path: localRedactarContratoAlquilerHref(def.slug),
    contratoAlquilerLocalHref: localContratoAlquilerHref(def.slug),
  };
}

export function getRedactarContratoAlquilerLocalCity(
  slug: string,
): RedactarContratoAlquilerLocalCityDefinition | undefined {
  return REDACTAR_CONTRATO_ALQUILER_LOCAL_CITIES.find((c) => c.slug === slug);
}

export const REDACTAR_CONTRATO_ALQUILER_LOCAL_CITIES: RedactarContratoAlquilerLocalCityDefinition[] = [
  {
    slug: "madrid",
    city: "Madrid",
    placeLabel: "Madrid",
    schemaAdministrativeArea: "Comunidad de Madrid",
    metaTitle: `Redactar contrato alquiler Madrid — ${PRICE} IVA incl.`,
    metaDescription: `Contrato LAU profesional en Madrid: inventario, depósito AVS y cláusulas para Salamanca, Chamberí, Vallecas o cinturón sur. ${PRICE} IVA incl. Sin comisión de agencia.`,
    heroTitle: "Contrato de alquiler en Madrid — AVS, inventario y 145 € sin comisión de agencia",
    heroLead:
      "¿Ya tienes inquilino en Madrid por Idealista o recomendación y la agencia te pide miles de euros? Livendia redacta tu contrato LAU con inventario fotográfico, orientación de fianza en la AVS y acabado visual profesional por 145 € IVA incl. — desde Salamanca hasta Vallecas.",
    whyIntro:
      "Madrid mueve el mayor volumen de alquileres entre particulares de España. En Chamberí, Malasaña o Moncloa los contratos se cierran en días, pero muchos se firman con PDF idénticos que no recogen lo pactado en la visita ni explican el depósito en la Agencia de Vivienda Social.",
    marketContext:
      "Fotocasa (2026) sitúa la media en 21,6 €/m²: de 26–28 €/m² en Salamanca a 13–16 €/m² en Villaverde o Usera. Conviven pisos compartidos por habitación, familias en barrios residenciales y teletrabajadores en el cinturón (Getafe, Leganés, Móstoles). Cada barrio tiene ritmo de negociación distinto; el contrato debe reflejarlo.",
    barriosIntro: "Barrios y municipios donde redactamos contratos LAU entre particulares en Madrid:",
    barrios: [
      "Salamanca",
      "Chamberí",
      "Malasaña / Universidad",
      "Retiro",
      "Tetuán",
      "Carabanchel",
      "Vallecas",
      "Usera",
      "Getafe",
      "Leganés",
      "Alcorcón",
    ],
    regulatoryBlock:
      "En la Comunidad de Madrid la fianza del alquiler LAU se deposita en la Agencia de Vivienda Social (AVS), no en la cuenta del propietario. Madrid no está declarada zona tensionada: la renta se fija libremente entre las partes, pero IPC, gastos de comunidad e IBI repercutido deben quedar claros antes de firmar.",
    localDifferentiators: [
      {
        title: "Depósito AVS explicado antes de transferir",
        description:
          "Te orientamos para que la fianza legal se gestione en la AVS y no quede en manos del arrendador sin trámite.",
      },
      {
        title: "Pisos compartidos cerca de Moncloa y Complutense",
        description: "Normas de convivencia, limpieza y uso de zonas comunes en pisos por habitaciones.",
      },
      {
        title: "Cinturón sur: Getafe, Leganés, Alcorcón",
        description: "Cláusulas adaptadas a bloques recientes, garaje comunitario y gastos de comunidad en urbanizaciones.",
      },
      {
        title: "Inventario en edificios señoriales del centro",
        description: "Carpintería, suelos y electrodomésticos documentados con fotos antes de las llaves.",
      },
    ],
    agencyLocalNote:
      "En Madrid capital una agencia suele pedir un mes de renta de comisión más 2.000–3.000 € de gestión. Si ya encontraste inquilino en Chamberí o Vallecas, Livendia cubre el tramo legal por 145 €.",
    platformDemoProperty: "Piso 3 hab. · Calle Fuencarral 88, Madrid (Chamberí)",
    testimonialsTitle: "Particulares en Madrid que redactaron contrato con Livendia",
    testimonials: [
      {
        quote:
          "Encontré inquilino en Retiro por Idealista. La agencia pedía 2.800 €; Livendia me dio contrato impecable, inventario con fotos y me explicó la AVS por 145 €.",
        author: "Marta S.",
        role: "Propietaria · Retiro",
      },
      {
        quote:
          "Alquiler en piso compartido cerca de Moncloa: el contrato reflejó convivencia, fianza y gastos como los habíamos pactado verbalmente.",
        author: "Álvaro & Sara",
        role: "Inquilinos · Chamberí",
      },
    ],
    faqLocal: [
      {
        question: "¿Dónde se deposita la fianza en Madrid?",
        answer:
          "En la Agencia de Vivienda Social (AVS) de la Comunidad de Madrid. Te orientamos para comprobar que el depósito se tramita correctamente tras la firma.",
      },
      {
        question: "¿Gestionáis contratos en Getafe o Leganés?",
        answer:
          "Sí. Aplicamos LAU estatal con adaptación al municipio concreto del cinturón sur de Madrid.",
      },
      {
        question: "¿Incluye inventario en pisos del centro?",
        answer:
          "Sí. Inventario descriptivo y fotográfico incluido, especialmente útil en viviendas con carpintería y suelos de valor.",
      },
    ],
    heroImage: "/images/contratodealquiler.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Madrid — Livendia",
    contratoTemporadaHref: localContratoAlquilerTemporadaHref("madrid"),
    contratoHabitacionHref: localContratoAlquilerHabitacionHref("madrid"),
  },
  {
    slug: "barcelona",
    city: "Barcelona",
    placeLabel: "Barcelona",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: `Redactar contrato alquiler Barcelona — ${PRICE} IVA incl.`,
    metaDescription: `Contrato LAU en Barcelona: INCASÒL, zona tensionada, inventario y Eixample, Gràcia, Poblenou. ${PRICE} IVA incl. Entre particulares sin agencia.`,
    heroTitle: "Contrato LAU en Barcelona — INCASÒL, zona tensionada y gestoría online",
    heroLead:
      "¿Alquilas en Barcelona entre particulares sin pagar comisión de agencia? Livendia redacta contrato LAU con inventario profesional, topes de zona tensionada revisados, fianza INCASÒL orientada y panel digital seguro — 145 € IVA incl.",
    whyIntro:
      "Barcelona combina edificios señoriales en el Eixample, pisos compartidos en Gràcia y presión normativa (zona tensionada, licencias turísticas). Un PDF copiado de Madrid no contempla el tope de renta ni el depósito en INCASÒL — y ahí empiezan los conflictos.",
    marketContext:
      "Idealista (2026) sitúa el alquiler medio en torno a 22 €/m², con demanda sostenida en distritos universitarios (Gràcia, Les Corts) y estancias laborales en Poblenou o el 22@. Barcelona está en zona de mercado residencial tensionado hasta 2027: los contratos nuevos deben respetar límites de renta vinculados al contrato anterior.",
    barriosIntro: "Barrios y municipios del área metropolitana donde redactamos contratos LAU:",
    barrios: [
      "Eixample",
      "Gràcia",
      "Sant Martí",
      "Poblenou",
      "Les Corts",
      "Sants",
      "Sarrià",
      "L'Hospitalet",
      "Badalona",
      "Cornellà de Llobregat",
    ],
    regulatoryBlock:
      "En Cataluña la fianza se deposita en el INCASÒL (Institut Català del Sòl) en un plazo máximo de dos meses desde la firma — no en la cuenta del propietario. Además, Barcelona es zona tensionada: el contrato debe informar de la renta del arrendamiento anterior y respetar los topes legales aplicables.",
    localDifferentiators: [
      {
        title: "INCASÒL y zona tensionada revisados",
        description:
          "Comprobamos que el borrador cumple topes de renta y que la fianza se orienta al organismo catalán correcto.",
      },
      {
        title: "Eixample: comunidad y derramas",
        description: "Cláusulas coherentes con actas de comunidad en edificios con obras o ascensor antiguo.",
      },
      {
        title: "Pisos compartidos en Gràcia y Sant Martí",
        description: "Convivencia, limpieza y visitas redactadas para pisos de habitaciones sin conflicto posterior.",
      },
      {
        title: "Área metropolitana: L'Hospitalet y Cornellà",
        description: "Misma normativa catalana con adaptación al municipio y al edificio concreto.",
      },
    ],
    agencyLocalNote:
      "En Barcelona las agencias suelen cobrar un mes de renta más honorarios de gestión de 2.000–3.000 €. Si ya tienes inquilino en el Eixample o Gràcia, Livendia redacta el LAU por 145 €.",
    platformDemoProperty: "Piso 2 hab. · Carrer de Provença 214, Barcelona (Eixample)",
    testimonialsTitle: "Particulares en Barcelona con contrato Livendia",
    testimonials: [
      {
        quote:
          "El propietario me pasó un PDF genérico en Les Corts. Livendia adaptó la renta anterior de zona tensionada y el depósito INCASÒL antes de la fianza.",
        author: "Jordi M.",
        role: "Inquilino · Les Corts",
      },
      {
        quote:
          "Alquiler en Gràcia entre particulares: inventario fotográfico, cláusulas de comunidad cerradas y contrato con aspecto muy profesional.",
        author: "Núria P.",
        role: "Propietaria · Gràcia",
      },
    ],
    faqLocal: [
      {
        question: "¿La fianza va al propietario en Barcelona?",
        answer:
          "No. Debe depositarse en el INCASÒL en un plazo máximo de dos meses desde la firma. Te orientamos para verificar el trámite.",
      },
      {
        question: "¿Revisáis el tope de renta de zona tensionada?",
        answer:
          "Sí. Comprobamos que el contrato informe de la renta anterior y respete los límites aplicables en Barcelona.",
      },
      {
        question: "¿Tenéis páginas por barrio en Barcelona?",
        answer:
          "Sí: Les Corts, Eixample, L'Hospitalet y Cornellà tienen landings propias con contenido diferenciado para Google — además de esta página general de Barcelona.",
      },
    ],
    heroImage: "/images/contratos2.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Barcelona — Livendia",
    contratoTemporadaHref: localContratoAlquilerTemporadaHref("barcelona"),
    contratoHabitacionHref: localContratoAlquilerHabitacionHref("barcelona"),
  },
  {
    slug: "barcelona-les-corts",
    city: "Les Corts",
    placeLabel: "Les Corts (Barcelona)",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: `Contrato LAU Les Corts — Pedralbes, Zona Universitària · ${PRICE}`,
    metaDescription: `Redactar contrato alquiler Les Corts: Diagonal, Camp Nou, INCASÒL y zona tensionada. ${PRICE} IVA incl. Entre particulares sin agencia.`,
    heroTitle: "Contrato de alquiler en Les Corts — Diagonal, Maternitat e INCASÒL sin agencia",
    heroLead:
      "¿Propietario e inquilino en Pedralbes, la Zona Universitària o el entorno del Camp Nou y queréis firmar sin inmobiliaria? Livendia redacta LAU con inventario, renta anterior de Barcelona revisada y depósito orientado a INCASÒL — 145 € IVA incl.",
    whyIntro:
      "Les Corts concentra alquileres directos por Idealista cerca de Diagonal y edificios familiares en la Maternitat. Un PDF de otra ciudad no recoge terrazas comunitarias, tope de renta ni plazos del organismo catalán de fianzas.",
    marketContext:
      "Les Corts mezcla familias consolidadas, pisos cerca del campus y alquileres entre particulares en edificios de los 70 en Pedralbes o Numancia. Los borradores barceloneses genéricos no distinguen zona tensionada ni inventario de terrazas comunitarias. Livendia redacta LAU con barrios concretos del distrito.",
    barriosIntro: "Barrios de Les Corts donde redactamos contratos LAU entre particulares:",
    barrios: [
      "Pedralbes",
      "Zona Universitària",
      "La Maternitat i Sant Ramon",
      "Les Corts",
      "Entorno Camp Nou",
      "Numància",
      "Travessera de Les Corts",
    ],
    regulatoryBlock:
      "Barcelona es zona tensionada: el contrato debe informar de la renta del arrendamiento anterior y respetar topes legales. En Cataluña la fianza se deposita en INCASÒL en un plazo máximo de dos meses — no en la cuenta del propietario.",
    localDifferentiators: [
      {
        title: "Diagonal y oficinas: entradas rápidas",
        description: "Cláusulas de mudanza, fianza e inventario cuando la negociación cierra en días.",
      },
      {
        title: "Campus y pisos compartidos",
        description: "LAU de piso entero o habitación con normas de convivencia en la Zona Universitària.",
      },
      {
        title: "Pedralbes: comunidad y parking",
        description: "Reparto de gastos, plaza de garaje y ascensor documentados antes de la firma.",
      },
      {
        title: "Gestoría online 48–72 h",
        description: "Briefing, documentos e inventario fotográfico desde el panel Livendia.",
      },
    ],
    agencyLocalNote:
      "En Les Corts las agencias piden comisión más gestión. Si ya tenéis contraparte en Diagonal o Pedralbes, Livendia redacta el LAU por 145 € con inventario incluido.",
    platformDemoProperty: "Piso 3 hab. · Travessera de Les Corts 180, Barcelona (Les Corts)",
    testimonialsTitle: "Particulares en Les Corts con contrato Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en Pedralbes sin agencia: Livendia incluyó renta anterior, depósito INCASÒL e inventario de terraza comunitaria antes de transferir la fianza.",
        author: "Clara V.",
        role: "Inquilina · Pedralbes",
      },
      {
        quote:
          "Piso cerca del campus: cláusulas de visitas del propietario y comunidad cerradas en castellano claro — sin ir al despacho.",
        author: "Marc T.",
        role: "Propietario · Zona Universitària",
      },
    ],
    faqLocal: [
      {
        question: "¿Redactáis contratos en Pedralbes y Maternitat?",
        answer: "Sí. LAU adaptado al edificio, con inventario y revisión de zona tensionada de Barcelona.",
      },
      {
        question: "¿La fianza va al propietario en Les Corts?",
        answer: "No. Debe depositarse en INCASÒL. Te orientamos para verificar el trámite antes de firmar.",
      },
      {
        question: "¿Contrato por habitación cerca del campus?",
        answer: "Sí. LAU por habitación con reparto de gastos y normas de convivencia.",
      },
    ],
    heroImage: metroBarcelonaZoneImage("barcelona2.jpg"),
    heroImageAlt: "Redactar contrato de alquiler en Les Corts, Barcelona — Livendia",
    contratoTemporadaHref: localContratoAlquilerTemporadaHref("barcelona"),
    contratoHabitacionHref: localContratoAlquilerHabitacionHref("barcelona"),
  },
  {
    slug: "barcelona-eixample",
    city: "Eixample",
    placeLabel: "Eixample (Barcelona)",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: `Contrato LAU Eixample — Dreta, Esquerra, Sagrada Família · ${PRICE}`,
    metaDescription: `Contrato alquiler Eixample entre particulares: fincas del ensanche, derramas, INCASÒL. ${PRICE} IVA incl. Redacción LAU Livendia.`,
    heroTitle: "Contrato de alquiler en el Eixample — fincas regias, IRAV e inventario entre particulares",
    heroLead:
      "¿Cerráis alquiler en Dreta, Esquerra, Fort Pienc o Sagrada Família sin pagar mes de agencia? Livendia redacta LAU con renta anterior revisada, cláusulas de comunidad en edificios centenarios e inventario profesional — 145 € IVA incl.",
    whyIntro:
      "El Eixample combina ticket alto, ascensores antiguos y obras en acta de comunidad. Entre particulares es habitual firmar plantillas que no mencionan derramas pendientes ni el tope legal de subida en zona tensionada.",
    marketContext:
      "El Eixample combina fincas regias del ensanche, ascensores antiguos y rentas entre las más altas de Barcelona (publicación agregada ~26–30 €/m² según barrio). Entre particulares, un LAU copiado no recoge derramas en edificios centenarios ni la renta anterior en zona tensionada. Livendia redacta contrato e inventario por barrio — Dreta, Esquerra o Sagrada Família.",
    barriosIntro: "Tramos del Eixample donde redactamos contratos LAU:",
    barrios: [
      "Dreta de l'Eixample",
      "Antiga Esquerra",
      "Nova Esquerra",
      "Fort Pienc",
      "Sagrada Família",
      "Provença i Girona",
      "Límite Sant Antoni",
    ],
    regulatoryBlock:
      "En Barcelona capital aplican zona tensionada e información de renta anterior en cada LAU nuevo. La fianza catalana se deposita en INCASÒL; revisamos coherencia entre anuncio, contrato y depósito antes de la entrada.",
    localDifferentiators: [
      {
        title: "Derramas y ascensor comunitario",
        description: "Cláusulas alineadas con actas frecuentes en fincas regias del ensanche.",
      },
      {
        title: "Pisos amueblados premium",
        description: "Inventario fotográfico de electrodomésticos, suelos y carpintería de época.",
      },
      {
        title: "Renta anterior en Provença o Girona",
        description: "Comprobamos topes legales antes de rubricar entre propietario e inquilino.",
      },
      {
        title: "Sin comisión de captación",
        description: "Livendia no publica el anuncio ni cobra porcentaje sobre la renta mensual.",
      },
    ],
    agencyLocalNote:
      "En el Eixample las agencias suelen cobrar un mes de renta más honorarios altos. Con inquilino ya elegido en Antiga Esquerra o Dreta, Livendia cierra el LAU por 145 €.",
    platformDemoProperty: "Piso 2 hab. · Carrer de Provença 214, Barcelona (Eixample)",
    testimonialsTitle: "Particulares en el Eixample con contrato Livendia",
    testimonials: [
      {
        quote:
          "Alquilamos en Antiga Esquerra sin inmobiliaria. Livendia incluyó renta anterior, depósito INCASÒL e inventario de suelos antes de la fianza.",
        author: "Helena R.",
        role: "Propietaria · Antiga Esquerra",
      },
      {
        quote:
          "Piso en Dreta con derrama pendiente: el gestor dejó por escrito qué paga el inquilino y plazos de comunidad.",
        author: "Oriol V.",
        role: "Inquilino · Dreta de l'Eixample",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis alquileres en Dreta de l'Eixample?",
        answer: "Sí. LAU de piso entero, habitación o temporada según el uso acordado, con inventario incluido.",
      },
      {
        question: "¿Qué pasa si hay derrama en la comunidad?",
        answer: "Revisamos actas recientes y dejamos por escrito reparto de gastos antes de la entrada del inquilino.",
      },
      {
        question: "¿Revisáis el tope de renta de zona tensionada?",
        answer: "Sí. Comprobamos renta anterior e información obligatoria en Barcelona.",
      },
    ],
    heroImage: metroBarcelonaZoneImage("eixample.jpg"),
    heroImageAlt: "Redactar contrato de alquiler en el Eixample, Barcelona — Livendia",
    contratoTemporadaHref: localContratoAlquilerTemporadaHref("barcelona"),
    contratoHabitacionHref: localContratoAlquilerHabitacionHref("barcelona"),
  },
  {
    slug: "hospitalet-de-llobregat",
    city: "L'Hospitalet de Llobregat",
    placeLabel: "L'Hospitalet de Llobregat",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: `Contrato LAU L'Hospitalet — Collblanc, Bellvitge · ${PRICE}`,
    metaDescription: `Redactar contrato alquiler L'Hospitalet entre particulares: Collblanc, Bellvitge, INCASÒL. ${PRICE} IVA incl. Sin comisión de agencia.`,
    heroTitle: "Contrato de alquiler en L'Hospitalet — Collblanc, Bellvitge e INCASÒL entre particulares",
    heroLead:
      "¿Propietario e inquilino en L'Hospitalet y queréis LAU sin inmobiliaria? Livendia redacta contrato con inventario, comunidad en bloques densos y depósito orientado a INCASÒL — 145 € IVA incl., gestoría online.",
    whyIntro:
      "L'Hospitalet recibe inquilinos que trabajan en Barcelona y cierran por Idealista en Collblanc o La Florida. Copiar un LAU de Barcelona capital sin adaptar plazos de comunidad o inventario en bloques de muchas viviendas es el error más habitual.",
    marketContext:
      "L'Hospitalet recibe inquilinos que trabajan en Barcelona y buscan renta más asequible en Collblanc o Bellvitge. Los alquileres entre particulares suelen usar contratos de Barcelona capital sin adaptar INCASÒL ni plazos de comunidad en bloques densos. Livendia revisa depósito, renta anterior e inventario antes de la fianza.",
    barriosIntro: "Barrios de L'Hospitalet donde redactamos contratos LAU:",
    barrios: [
      "Collblanc",
      "Bellvitge",
      "La Florida",
      "Centre",
      "Sant Josep",
      "Pubilla Cases",
      "Can Serra",
    ],
    regulatoryBlock:
      "L'Hospitalet comparte normativa catalana: INCASÒL para la fianza y zona tensionada con información de renta anterior. Revisamos coherencia entre municipio, edificio y borrador antes de firmar.",
    localDifferentiators: [
      {
        title: "Comunidad en bloques densos",
        description: "Cláusulas sobre derramas y certificado de deuda cuando el edificio tiene muchas viviendas.",
      },
      {
        title: "Negociación rápida por precio",
        description: "LAU cerrado antes de la señal cuando el inquilino viene de Barcelona capital.",
      },
      {
        title: "Piso compartido en Bellvitge",
        description: "Contrato por habitación con reparto de gastos y normas de convivencia.",
      },
      {
        title: "Gestoría metropolitana online",
        description: "Misma operativa Livendia que en Barcelona, adaptada al municipio.",
      },
    ],
    agencyLocalNote:
      "En L'Hospitalet muchas agencias cobran gestión completa aunque ya tengáis contraparte. Livendia redacta el LAU por 145 € con inventario incluido.",
    platformDemoProperty: "Piso 2 hab. · Carrer de la Tecla Sala 45, L'Hospitalet (Collblanc)",
    testimonialsTitle: "Particulares en L'Hospitalet con contrato Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en Collblanc entre particulares: comunidad, fianza INCASÒL e inventario cerrados online antes de la entrada.",
        author: "Sandra L.",
        role: "Propietaria · Collblanc",
      },
      {
        quote:
          "Venía de buscar piso en Barcelona y firmamos en Bellvitge. El contrato dejó claro depósito, IPC y visitas del propietario.",
        author: "Ahmed K.",
        role: "Inquilino · Bellvitge",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis Bellvitge y La Florida?",
        answer: "Sí. LAU adaptado al barrio y al tipo de edificio, con inventario incluido.",
      },
      {
        question: "¿Es lo mismo que un contrato de Barcelona capital?",
        answer: "La normativa catalana es común, pero adaptamos cláusulas al municipio y a la comunidad concreta.",
      },
      {
        question: "¿Contrato por habitación en L'Hospitalet?",
        answer: "Sí. LAU por habitación con reparto de gastos y normas de convivencia.",
      },
    ],
    heroImage: metroBarcelonaZoneImage("hospitalet.jpg"),
    heroImageAlt: "Redactar contrato de alquiler en L'Hospitalet — Livendia",
    contratoTemporadaHref: localContratoAlquilerTemporadaHref("barcelona"),
    contratoHabitacionHref: localContratoAlquilerHabitacionHref("hospitalet-de-llobregat"),
  },
  {
    slug: "cornella-de-llobregat",
    city: "Cornellà de Llobregat",
    placeLabel: "Cornellà de Llobregat",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: `Contrato LAU Cornellà — Sant Ildefons, FGC · ${PRICE}`,
    metaDescription: `Contrato alquiler Cornellà entre particulares: Sant Ildefons, Can Mercader, INCASÒL. ${PRICE} IVA incl. Redacción LAU Livendia.`,
    heroTitle: "Contrato de alquiler en Cornellà — Sant Ildefons, Renfe e inventario sin agencia",
    heroLead:
      "¿Alquiláis en Cornellà de Llobregat entre particulares — Sant Ildefons, centre o zona FGC — y necesitáis LAU serio? Livendia redacta contrato con inventario, zona tensionada catalana e INCASÒL orientado — 145 € IVA incl.",
    whyIntro:
      "Cornellà comparte mercado metropolitano con L'Hospitalet: operaciones directas cuando el inquilino ya está elegido. Un PDF de otra ciudad no refleja el edificio ni el reparto de gastos en bloques del Baix Llobregat.",
    marketContext:
      "Cornellà de Llobregat comparte mercado metropolitano con L'Hospitalet: operaciones directas en Sant Ildefons o Can Mercader cuando el inquilino ya está elegido. Livendia redacta LAU del Baix Llobregat con zona tensionada catalana e inventario — sin comisión de agencia de alquiler.",
    barriosIntro: "Zonas de Cornellà donde redactamos contratos LAU:",
    barrios: [
      "Sant Ildefons",
      "Can Mercader",
      "Centre",
      "Estació Renfe",
      "Parc de Can Mercader",
      "Zona FGC",
    ],
    regulatoryBlock:
      "En Cornellà aplican las mismas reglas catalanas de fianza (INCASÒL) y zona tensionada que en Barcelona metropolitana. Revisamos renta anterior, depósito e inventario antes de la mudanza.",
    localDifferentiators: [
      {
        title: "Alquiler metropolitano sin intermediario",
        description: "Ideal cuando ya tenéis fecha de entrada y solo falta cerrar el texto legal del LAU.",
      },
      {
        title: "Sant Ildefons y Can Mercader",
        description: "Cláusulas adaptadas a bloques del Baix Llobregat y acceso Renfe/FGC.",
      },
      {
        title: "Zona tensionada catalana",
        description: "Comprobamos tope de renta e información de contrato anterior.",
      },
      {
        title: "Inventario antes de la fianza",
        description: "Estado de pintura, electrodomésticos y parking documentados con fotos.",
      },
    ],
    agencyLocalNote:
      "En Cornellà las agencias piden comisión aunque el inquilino llegue por recomendación. Entre particulares, Livendia redacta por 145 € con gestor online.",
    platformDemoProperty: "Piso 2 hab. · Avinguda del Parc 12, Cornellà (Sant Ildefons)",
    testimonialsTitle: "Particulares en Cornellà con contrato Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en Sant Ildefons sin agencia: inventario, INCASÒL y cláusulas de comunidad cerradas en 72 horas.",
        author: "Marta G.",
        role: "Propietaria · Sant Ildefons",
      },
      {
        quote:
          "Trabajo en Barcelona y firmamos en Cornellà. El LAU dejó claro fianza, gastos y duración sin sorpresas.",
        author: "Pau S.",
        role: "Inquilino · Centre",
      },
    ],
    faqLocal: [
      {
        question: "¿Redactáis contratos en Sant Ildefons y Can Mercader?",
        answer: "Sí. LAU adaptado al barrio y al edificio, con inventario incluido.",
      },
      {
        question: "¿La fianza va al propietario en Cornellà?",
        answer: "No. Debe depositarse en INCASÒL. Te orientamos para verificar el trámite.",
      },
      {
        question: "¿Contrato por habitación en Cornellà?",
        answer: "Sí. LAU por habitación con reparto de gastos y normas de convivencia.",
      },
    ],
    heroImage: metroBarcelonaZoneImage("barcelona.jpg"),
    heroImageAlt: "Redactar contrato de alquiler en Cornellà de Llobregat — Livendia",
    contratoTemporadaHref: localContratoAlquilerTemporadaHref("barcelona"),
    contratoHabitacionHref: localContratoAlquilerHabitacionHref("cornella-de-llobregat"),
  },
  {
    slug: "valencia",
    city: "Valencia",
    placeLabel: "Valencia",
    schemaAdministrativeArea: "Comunidad Valenciana",
    metaTitle: `Redactar contrato alquiler Valencia — ${PRICE} IVA incl.`,
    metaDescription: `Contrato LAU en Valencia: Ruzafa, Benimaclet, Ciutat Vella, inventario y fianza. ${PRICE} IVA incl. Entre particulares sin comisión de agencia.`,
    heroTitle: "¿Cierras alquiler en Valencia entre particulares? LAU profesional por 145 €",
    heroLead:
      "¿Cierras alquiler en Valencia entre particulares y no quieres pagar 2.000 € a una agencia? Livendia redacta contrato LAU con inventario, cláusulas adaptadas a Ruzafa, Benimaclet o Mislata y acceso al panel digital — 145 € IVA incl.",
    whyIntro:
      "Valencia tiene rotación rápida: un piso en Ruzafa o Benimaclet puede reservarse en 8–12 días. Las promesas verbales de la visita — gastos de comunidad, fianza, duración — exigen un LAU escrito antes de transferir dinero.",
    marketContext:
      "Idealista (junio 2026) sitúa la media en 14,3 €/m². Conviven familias en Campanar, estudiantes en Benimaclet, teletrabajadores en Ruzafa y alquileres en l'Horta (Mislata, Paterna, Torrent). Los borradores genéricos suelen mezclar temporada con LAU habitual.",
    barriosIntro: "Distritos y municipios donde redactamos contratos de alquiler en Valencia:",
    barrios: [
      "Ruzafa",
      "Benimaclet",
      "Ciutat Vella",
      "Campanar",
      "Patraix",
      "Malvarrosa",
      "Mislata",
      "Paterna",
      "Torrent",
      "Alboraya",
    ],
    regulatoryBlock:
      "En la Comunidad Valenciana aplican las reglas LAU para vivienda habitual: fianza de un mes (dos si el arrendador es empresa), depósito adicional limitado y prohibición de cláusulas que impongan obras estructurales al inquilino. Revisamos coherencia entre régimen contractual y estancia real.",
    localDifferentiators: [
      {
        title: "Ruzafa: rotación y negociación rápida",
        description:
          "Contrato cerrado antes de la señal: renta, gastos y fianza alineados con lo pactado en la visita express.",
      },
      {
        title: "Benimaclet y campus universitario",
        description: "Pisos compartidos con normas de convivencia y reparto de suministros claros.",
      },
      {
        title: "Mislata, Paterna y l'Horta",
        description: "Cláusulas para urbanizaciones con parking comunitario y gastos de zonas verdes.",
      },
      {
        title: "Inventario en viviendas reformadas",
        description: "Muy frecuente en Ruzafa: electrodomésticos y acabados documentados con fotos.",
      },
    ],
    agencyLocalNote:
      "En Valencia muchas agencias piden un mes de renta más 2.000–2.500 € de gestión. Si ya tienes inquilino en Ruzafa o Benimaclet, el contrato profesional Livendia cuesta 145 €.",
    platformDemoProperty: "Piso 2 hab. · Calle Sueca 42, Valencia (Ruzafa)",
    testimonialsTitle: "Particulares en Valencia con contrato Livendia",
    testimonials: [
      {
        quote:
          "Reservé en Ruzafa en una semana. Livendia revisó gastos de comunidad y fianza antes de que transfiriera — el contrato recogía todo lo de la visita.",
        author: "Cecilia R.",
        role: "Inquilina · Ruzafa",
      },
      {
        quote:
          "Propietario en Benimaclet: inventario con fotos del piso reformado y cláusulas claras. La agencia quería 2.400 € por lo mismo.",
        author: "Francisco T.",
        role: "Propietario · Benimaclet",
      },
    ],
    faqLocal: [
      {
        question: "¿Cuánto tarda el mercado en Valencia?",
        answer:
          "En barrios demandados como Ruzafa el piso puede reservarse en 8–12 días. Conviene tener el LAU revisado antes de ingresar la fianza.",
      },
      {
        question: "¿Gestionáis Mislata o Paterna?",
        answer: "Sí. LAU estatal con adaptación al municipio del área metropolitana de Valencia.",
      },
      {
        question: "¿Incluye inventario en pisos reformados de Ruzafa?",
        answer: "Sí. Inventario fotográfico incluido para documentar acabados y electrodomésticos.",
      },
    ],
    heroImage: "/images/contratos.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Valencia — Livendia",
    contratoTemporadaHref: localContratoAlquilerTemporadaHref("valencia"),
    contratoHabitacionHref: localContratoAlquilerHabitacionHref("valencia"),
  },
  {
    slug: "sevilla",
    city: "Sevilla",
    placeLabel: "Sevilla",
    schemaAdministrativeArea: "Andalucía",
    metaTitle: `Redactar contrato alquiler Sevilla — ${PRICE} IVA incl.`,
    metaDescription: `Contrato LAU en Sevilla: Triana, Nervión, Los Remedios, Macarena. Inventario, fianza y ${PRICE} IVA incl. Sin comisión de agencia.`,
    heroTitle: "Contrato de alquiler en Sevilla — Triana, Feria y campus, sin comisión",
    heroLead:
      "¿Alquilas en Sevilla entre particulares sin pagar miles a una inmobiliaria? Livendia redacta contrato LAU con inventario, cláusulas para Triana, Nervión o Macarena y panel de seguimiento — 145 € IVA incl.",
    whyIntro:
      "Sevilla mezcla demanda universitaria (US, Pablo de Olavide), rotación laboral y presión turística en el centro. Los alquileres se cierran rápido por Idealista, pero muchos contratos mezclan temporada de Feria o curso académico con LAU mal redactado.",
    marketContext:
      "Triana, Los Remedios y Nervión concentran familias y profesionales; Macarena y Heliópolis, estudiantes; Sevilla Este, familias en urbanizaciones. En edificios del centro histórico los conflictos habituales son comunidad sin ascensor, patios compartidos e IBI mal repercutido.",
    barriosIntro: "Barrios de Sevilla y área metropolitana donde redactamos contratos LAU:",
    barrios: [
      "Triana",
      "Los Remedios",
      "Nervión",
      "Macarena",
      "Heliópolis",
      "Sevilla Este",
      "Tablada",
      "Tomares",
      "Camas",
      "Alcalá de Guadaíra",
    ],
    regulatoryBlock:
      "En Andalucía aplican las reglas LAU estatales para arrendamiento urbano. La fianza legal es de un mes (dos si el arrendador es persona jurídica). Conviene delimitar temporada Feria, curso universitario o LAU habitual antes de firmar.",
    localDifferentiators: [
      {
        title: "Temporada Feria vs. LAU habitual",
        description:
          "Te orientamos si el arrendamiento es por Semana Santa, Feria o curso completo — obligaciones distintas en cada caso.",
      },
      {
        title: "Pisos compartidos cerca de campus",
        description: "Convivencia en Nervión, Reina Mercedes y Los Bermejales con normas de limpieza y visitas.",
      },
      {
        title: "Centro histórico: patios y comunidad",
        description: "Cláusulas sobre zonas comunes, ascensor y derramas en edificios tradicionales sevillanos.",
      },
      {
        title: "Inventario con detalle artesanal",
        description: "Azulejos, carpintería y patios documentados — clave en viviendas de Triana o Macarena.",
      },
    ],
    agencyLocalNote:
      "En Sevilla una agencia puede cobrar un mes de renta más 2.000–3.000 € de gestión. Si ya tienes inquilino en Triana o Nervión, Livendia redacta el contrato por 145 €.",
    platformDemoProperty: "Piso 3 hab. · Calle Betis 18, Sevilla (Triana)",
    testimonialsTitle: "Particulares en Sevilla con contrato Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en Triana entre particulares: Livendia cerró comunidad, fianza e inventario del patio antes de firmar. La agencia pedía casi 2.600 €.",
        author: "Rafa G.",
        role: "Propietario · Triana",
      },
      {
        quote:
          "Contrato para curso en Macarena: duración, suministros y salida anticipada quedaron claros desde el primer borrador.",
        author: "Elena & Jorge",
        role: "Inquilinos · Macarena",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis Tomares o Camas?",
        answer: "Sí. LAU estatal con adaptación al municipio del área metropolitana de Sevilla.",
      },
      {
        question: "¿Podéis redactar contrato para Feria o temporada?",
        answer:
          "Sí. Te orientamos si necesitas LAU habitual o contrato de temporada con duración y suministros acotados.",
      },
      {
        question: "¿Incluye inventario en pisos del centro?",
        answer: "Sí. Inventario fotográfico especialmente útil en viviendas con patios y acabados tradicionales.",
      },
    ],
    heroImage: "/images/contratos5.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Sevilla — Livendia",
    contratoTemporadaHref: localContratoAlquilerTemporadaHref("sevilla"),
    contratoHabitacionHref: localContratoAlquilerHabitacionHref("sevilla"),
  },
  {
    slug: "malaga",
    city: "Málaga",
    placeLabel: "Málaga",
    schemaAdministrativeArea: "Andalucía",
    metaTitle: `Redactar contrato alquiler Málaga — ${PRICE} IVA incl.`,
    metaDescription: `Contrato LAU en Málaga: Centro, Teatinos, El Palo, Costa del Sol. Inventario, fianza y ${PRICE} IVA incl. Entre particulares sin agencia.`,
    heroTitle: "Alquiler en Málaga y Costa del Sol — LAU e inventario por 145 €, online",
    heroLead:
      "¿Alquilas en Málaga o Costa del Sol próxima sin comisión de agencia? Livendia redacta contrato LAU con inventario profesional, límites claros entre residencia y temporada, y panel digital — 145 € IVA incl.",
    whyIntro:
      "Málaga combina teletrabajo, universidad (UMA, Teatinos) y turismo residencial. Los propietarios encuentran inquilino por Idealista en el centro o El Palo, pero usan plantillas pensadas para Madrid. Surgen conflictos sobre ocupación máxima, mobiliario o uso turístico encubierto.",
    marketContext:
      "El centro histórico y La Malagueta mezclan residentes y estancias medias; Teatinos y Cruz de Humilladero, demanda universitaria; El Palo y Huelin, familias y teletrabajadores con vistas al mar. Rincón de la Victoria y Torremolinos añaden presión estacional en la costa próxima.",
    barriosIntro: "Zonas de Málaga y costa próxima donde redactamos contratos LAU:",
    barrios: [
      "Centro histórico",
      "Teatinos",
      "El Palo",
      "La Malagueta",
      "Huelin",
      "Cruz de Humilladero",
      "Pedregalejo",
      "Rincón de la Victoria",
      "Torremolinos",
    ],
    regulatoryBlock:
      "En Andalucía rige la LAU estatal. Conviene separar con claridad alquiler de vivienda habitual, temporada turística regulada y habitación en piso compartido. La fianza legal es de un mes salvo arrendador persona jurídica (dos meses).",
    localDifferentiators: [
      {
        title: "Residencia vs. temporada turística",
        description:
          "Delimitamos duración, ocupación máxima y suministros cuando el inquilino viene por meses, no por años.",
      },
      {
        title: "Teatinos y campus UMA",
        description: "Pisos compartidos con convivencia, preaviso y reparto de gastos redactados con equilibrio.",
      },
      {
        title: "El Palo y La Malagueta",
        description: "Mobiliario, parking comunitario y vistas documentados en inventario fotográfico.",
      },
      {
        title: "Costa próxima: Rincón y Torremolinos",
        description: "Cláusulas adaptadas a estacionalidad sin mezclar régimen turístico con LAU disfrazado.",
      },
    ],
    agencyLocalNote:
      "En Málaga capital las agencias suelen pedir un mes de renta más 2.000–3.000 € de honorarios. Si ya tienes inquilino en Teatinos o el Centro, Livendia redacta el LAU por 145 €.",
    platformDemoProperty: "Piso 2 hab. · Calle Granada 56, Málaga (Centro histórico)",
    testimonialsTitle: "Particulares en Málaga con contrato Livendia",
    testimonials: [
      {
        quote:
          "Temporada en planta alta del centro: mobiliario, incidencias y duración quedaron por escrito. Inventario con fotos impecable.",
        author: "Carmen P.",
        role: "Propietaria · Centro histórico",
      },
      {
        quote:
          "Alquiler LAU en El Palo: comunidad, pequeñas reparaciones e inventario cerrados antes de entrar. Mucho más claro que la plantilla de internet.",
        author: "Iván L.",
        role: "Inquilino · El Palo",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis Rincón de la Victoria o Torremolinos?",
        answer: "Sí. Adaptamos el contrato al municipio y al uso real del inmueble en la costa.",
      },
      {
        question: "¿Temporada turística o LAU habitual?",
        answer:
          "Te orientamos sobre la modalidad correcta y redactamos cláusulas acordes — no mezclamos regímenes en un solo PDF genérico.",
      },
      {
        question: "¿Incluye inventario en pisos amueblados?",
        answer: "Sí. Inventario descriptivo y fotográfico del mobiliario y estado del inmueble incluido.",
      },
    ],
    heroImage: "/images/contratos1.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Málaga — Livendia",
    contratoTemporadaHref: localContratoAlquilerTemporadaHref("malaga"),
    contratoHabitacionHref: localContratoAlquilerHabitacionHref("malaga"),
  },
  {
    slug: "bilbao",
    city: "Bilbao",
    placeLabel: "Bilbao",
    schemaAdministrativeArea: "País Vasco",
    metaTitle: `Contrato LAU profesional Bilbao — inventario online · ${PRICE}`,
    metaDescription: `Contrato de alquiler en Bilbao: Abando, Deusto, Indautxu, Basurto. Inventario, gestor online y LAU adaptada. ${PRICE} IVA incl. Sin agencia.`,
    heroTitle: "Contrato de alquiler en Bilbao — gestoría online sin comisión de agencia",
    heroLead:
      "¿Cierras alquiler en Abando, Deusto o el ensanche sin pagar comisión? Livendia redacta tu LAU con inventario fotográfico, cláusulas adaptadas a bloques vascos de piedra y gestor operativo 100% online — 145 € IVA incl., sin desplazarte al despacho.",
    whyIntro:
      "En Bilbao los arrendamientos directos crecen en Deusto (UPV/EHU) e Indautxu, pero llegan con plantillas copiadas de Madrid que ignoran garaje comunitario, trastero, ascensor antiguo o garantías mal redactadas.",
    marketContext:
      "Bilbao combina familias en Indautxu, estudiantes en Deusto y jóvenes profesionales en Abando. El mercado es más contenido que Madrid, pero los conflictos por fianza, IBI repercutido o reparto de comunidad en bloques del ensanche son frecuentes cuando el contrato es genérico.",
    barriosIntro: "Barrios y municipios del Gran Bilbao donde redactamos contratos LAU:",
    barrios: [
      "Abando",
      "Indautxu",
      "Deusto",
      "Basurto",
      "Santutxu",
      "Begoña",
      "Rekalde",
      "Getxo",
      "Leioa",
      "Erandio",
    ],
    regulatoryBlock:
      "En el País Vasco aplican las reglas LAU estatales para arrendamientos urbanos. Fianza de un mes (dos si el arrendador es persona jurídica). Revisamos depósitos adicionales, aval y cláusulas de actualización de renta antes de firmar.",
    localDifferentiators: [
      {
        title: "Pisos compartidos Deusto–UPV",
        description: "Normas de convivencia y reparto de gastos en pisos de estudiantes e investigadores.",
      },
      {
        title: "Ensanche: comunidad e IBI",
        description: "Gastos repercutidos sin lagunas en bloques de piedra con ascensor antiguo.",
      },
      {
        title: "Garantías adicionales revisadas",
        description: "Aval o depósito extra solo si cumple requisitos legales — no cláusulas abusivas.",
      },
      {
        title: "Servicio online con gestor vasco",
        description: "Briefing, documentación e inventario desde el panel; asesoramiento posterior incluido.",
      },
    ],
    agencyLocalNote:
      "En Bilbao las agencias suelen pedir un mes de renta más 2.000–3.000 € de gestión. Si ya tienes inquilino en Deusto o Abando, Livendia redacta el contrato por 145 €.",
    platformDemoProperty: "Piso 3 hab. · Calle Ercilla 24, Bilbao (Indautxu)",
    testimonialsTitle: "Particulares en Bilbao con contrato Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en Deusto entre particulares: el gestor adaptó convivencia, trastero y fianza. Todo online, sin ir al despacho.",
        author: "Ane L.",
        role: "Propietaria · Deusto",
      },
      {
        quote:
          "Plantilla peninsular corregida: comunidad e IBI bien repartidos en un bloque del ensanche. Inventario con fotos muy claro.",
        author: "Iker M.",
        role: "Inquilino · Abando",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis Getxo o Leioa?",
        answer: "Sí. LAU estatal con adaptación al municipio del margen izquierdo o derecho.",
      },
      {
        question: "¿El servicio es online en Bilbao?",
        answer:
          "Sí. Contratas, subes documentación y hablas con tu gestor desde el panel o por teléfono/WhatsApp.",
      },
      {
        question: "¿Incluye inventario en pisos del ensanche?",
        answer: "Sí. Inventario fotográfico de cocina, baño y carpintería incluido.",
      },
    ],
    heroImage: "/images/contratos.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Bilbao — Livendia",
    contratoHabitacionHref: localContratoAlquilerHabitacionHref("bilbao"),
  },
  {
    slug: "zaragoza",
    city: "Zaragoza",
    placeLabel: "Zaragoza",
    schemaAdministrativeArea: "Aragón",
    metaTitle: `¿Contrato de alquiler en Zaragoza? Redacción pro · ${PRICE}`,
    metaDescription: `LAU en Zaragoza: Casco Histórico, Delicias, Actur, Valdespartera. Contrato online, inventario y gestor. ${PRICE} IVA incl. Entre particulares.`,
    heroTitle: "Redacta tu LAU en Zaragoza entre particulares — 145 €, todo online",
    heroLead:
      "En Zaragoza capital muchos alquileres se cierran entre conocidos o por Idealista en Delicias y Actur. Livendia redacta contrato LAU con IPC bien definido, inventario y gestor operativo sin que tengas que acudir a un despacho — 145 € IVA incl.",
    whyIntro:
      "Zaragoza tiene un mercado más pausado que Madrid, pero con rotación constante de estudiantes de la UNIZAR y trabajadores de polígonos como Malpica. Los PDF genéricos fallan en actualización de renta, fianza ilegal o pisos compartidos mal redactados.",
    marketContext:
      "Casco Histórico, Delicias, Actur y Valdespartera concentran la demanda. Los arrendamientos se pactan en una visita; el riesgo está en cláusulas copiadas de otra CCAA o en depósitos que superan lo legal sin aval formal.",
    barriosIntro: "Zonas de Zaragoza donde redactamos contratos de alquiler:",
    barrios: [
      "Casco Histórico",
      "Delicias",
      "Universidad",
      "Actur",
      "Valdespartera",
      "Las Fuentes",
      "Torrero",
      "La Almozara",
    ],
    regulatoryBlock:
      "En Aragón rige la LAU estatal. Fianza legal de un mes (dos meses si el arrendador es empresa). Revisamos garantías adicionales, IPC y causas de resolución antes del ingreso de la fianza.",
    localDifferentiators: [
      {
        title: "IPC y revisión anual en mercado aragonés",
        description: "Actualización de renta redactada con coherencia LAU, sin sorpresas al segundo año.",
      },
      {
        title: "Pisos compartidos UNIZAR",
        description: "Convivencia en Delicias, San Francisco y zona campus con normas claras.",
      },
      {
        title: "Actur y Valdespartera",
        description: "Cláusulas para urbanizaciones con parking, trastero y gastos de zonas verdes.",
      },
      {
        title: "Gestor online de principio a fin",
        description: "Briefing, docs, contrato y asesoramiento posterior — sin desplazamientos.",
      },
    ],
    agencyLocalNote:
      "En Zaragoza las agencias piden honorarios altos más comisión de un mes. Entre particulares, Livendia cubre el tramo contractual por 145 €.",
    platformDemoProperty: "Piso 2 hab. · Paseo Independencia 32, Zaragoza (Centro)",
    testimonialsTitle: "Propietarios e inquilinos en Zaragoza con Livendia",
    testimonials: [
      {
        quote:
          "Primera vez alquilando en Delicias. El gestor me explicó IPC y fianza en una llamada; contrato listo en el panel.",
        author: "Lucía P.",
        role: "Inquilina · Delicias",
      },
      {
        quote:
          "Piso en Actur: inventario y cláusulas de comunidad cerradas online. La agencia quería 2.200 € por lo mismo.",
        author: "Javier R.",
        role: "Propietario · Actur",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis Valdespartera o Actur?",
        answer: "Sí. Adaptamos el LAU al barrio y al tipo de edificio concreto.",
      },
      {
        question: "¿Contrato por habitación en Zaragoza?",
        answer: "Sí. Redactamos LAU por habitación con reparto de gastos y convivencia.",
      },
      {
        question: "¿Hay seguimiento después de firmar?",
        answer: "Sí. Asesoramiento posterior sobre cláusulas y dudas habituales, incluido en el servicio.",
      },
    ],
    heroImage: "/images/gestoria3.jpg",
    heroImageAlt: "Contrato de alquiler profesional en Zaragoza — Livendia",
    contratoTemporadaHref: localContratoAlquilerTemporadaHref("zaragoza"),
  },
  {
    slug: "alicante",
    city: "Alicante",
    placeLabel: "Alicante",
    schemaAdministrativeArea: "Comunidad Valenciana",
    metaTitle: `Alquiler entre particulares Alicante — contrato e inventario · ${PRICE}`,
    metaDescription: `Contrato LAU Alicante: Centro, Playa San Juan, San Blas, UA. Online, inventario fotográfico. ${PRICE} IVA incl. Sin comisión de agencia.`,
    heroTitle: "¿Buscas un contrato profesional de alquiler en Alicante?",
    heroLead:
      "Alicante mezcla alquiler anual, estancias de curso y pisos cerca del mar. Si ya tienes inquilino en el Centro o Playa San Juan, Livendia redacta LAU con inventario, suministros claros y gestor online — 145 € IVA incl., sin comisión.",
    whyIntro:
      "En Alicante un mismo PDF no sirve para un piso en Playa San Juan, una habitación cerca de la UA o un LAU habitual en Carolinas. Los conflictos por terraza, mobiliario o comunidad aparecen cuando el contrato es genérico.",
    marketContext:
      "Centro, San Blas, Carolinas Altas y Playa San Juan concentran demanda de estudiantes, familias y teletrabajadores. En temporada alta los cierres son rápidos; conviene tener LAU e inventario antes de transferir la fianza.",
    barriosIntro: "Zonas de Alicante donde redactamos contratos LAU entre particulares:",
    barrios: [
      "Centro",
      "Playa San Juan",
      "San Blas",
      "Carolinas Altas",
      "Benalúa",
      "Albufereta",
      "San Vicente del Raspeig",
      "Muchamiel",
    ],
    regulatoryBlock:
      "En la Comunidad Valenciana aplican reglas LAU estatales: fianza de un mes (dos si arrendador jurídico), límites al depósito adicional y prohibición de traspasar obras estructurales al inquilino.",
    localDifferentiators: [
      {
        title: "Playa San Juan vs. centro urbano",
        description: "Cláusulas distintas según ubicación, mobiliario de terraza y perfil de estancia.",
      },
      {
        title: "Pisos compartidos UA",
        description: "Convivencia en San Vicente del Raspeig y zona universitaria con gastos repartidos.",
      },
      {
        title: "Temporada vs. LAU habitual",
        description: "Delimitamos duración y suministros cuando el inquilino viene por meses, no por años.",
      },
      {
        title: "100% online con inventario costero",
        description: "Fotos de electrodomésticos y estado del piso antes de las llaves — desde el panel.",
      },
    ],
    agencyLocalNote:
      "En Alicante capital las agencias combinan comisión de un mes con honorarios de gestión elevados. Livendia: 145 € fijos si ya tienes contraparte.",
    platformDemoProperty: "Piso 2 hab. · Explanada de España 12, Alicante (Centro)",
    testimonialsTitle: "Particulares en Alicante con contrato Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en Playa San Juan: ocupación máxima, terraza e inventario quedaron por escrito. Todo el trámite online.",
        author: "Sandra M.",
        role: "Propietaria · Playa San Juan",
      },
      {
        quote:
          "Piso compartido cerca de la UA: convivencia y fianza revisadas antes de firmar. Mejor que la plantilla de internet.",
        author: "Pablo G.",
        role: "Inquilino · San Vicente",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis San Vicente del Raspeig?",
        answer: "Sí. LAU adaptada al municipio y al uso real del inmueble.",
      },
      {
        question: "¿Contrato para temporada en primera línea?",
        answer: "Te orientamos sobre LAU habitual vs. temporada y redactamos la modalidad correcta.",
      },
      {
        question: "¿Incluye inventario en pisos amueblados?",
        answer: "Sí. Inventario descriptivo y fotográfico incluido en el servicio.",
      },
    ],
    heroImage: "/images/contratos2.jpg",
    heroImageAlt: "Contrato de alquiler profesional en Alicante — Livendia",
  },
  {
    slug: "granada",
    city: "Granada",
    placeLabel: "Granada",
    schemaAdministrativeArea: "Andalucía",
    metaTitle: `Contrato alquiler Granada (Albaicín, UGR) — online · ${PRICE}`,
    metaDescription: `LAU en Granada: Albaicín, Realejo, Zaidín, Chana, UGR. Inventario, gestor online. ${PRICE} IVA incl. Sin agencia.`,
    heroTitle: "Contrato LAU en Granada — Albaicín, Realejo y campus UGR",
    heroLead:
      "Granada mezcla casco histórico UNESCO, pisos UGR y familias en Zaidín. Livendia redacta contrato LAU con inventario detallado, cláusulas sobre edificios antiguos y gestor operativo online — 145 € IVA incl., sin comisión de agencia.",
    whyIntro:
      "En Realejo o el Albaicín los edificios antiguos exigen cláusulas sobre humedades, obras y comunidad que una plantilla de Madrid no contempla. En Zaidín predominan pisos compartidos de estudiantes mal redactados.",
    marketContext:
      "Turismo residencial, estudiantes de la UGR y familias conviven en distritos distintos. Los alquileres entre particulares se cierran en visita, pero el borrador suele ignorar convivencia en pisos de cinco habitaciones o suministros en plantas sin ascensor.",
    barriosIntro: "Barrios de Granada donde redactamos contratos LAU:",
    barrios: [
      "Albaicín",
      "Realejo",
      "Zaidín",
      "Ronda",
      "Chana",
      "Cartuja",
      "Centro",
      "Genil",
    ],
    regulatoryBlock:
      "En Andalucía rige LAU estatal. Fianza de un mes salvo arrendador persona jurídica (dos meses). Conviene delimitar mantenimiento en edificios históricos y habitación vs. piso completo antes de firmar.",
    localDifferentiators: [
      {
        title: "Casco histórico y patrimonio",
        description: "Mantenimiento, humedades y comunidad en edificios antiguos del Albaicín o Realejo.",
      },
      {
        title: "Pisos compartidos UGR",
        description: "Convivencia en Cartuja, Zaidín y Realejo con normas de limpieza y visitas.",
      },
      {
        title: "Zaidín y expansión residencial",
        description: "LAU para familias en urbanizaciones con parking y trastero comunitario.",
      },
      {
        title: "Gestor online + asesoramiento posterior",
        description: "Todo el proceso sin desplazarte; consultas tras la firma incluidas en el servicio.",
      },
    ],
    agencyLocalNote:
      "En Granada las agencias piden comisión más gestión de miles de euros. Entre particulares, Livendia redacta el LAU por 145 € con inventario incluido.",
    platformDemoProperty: "Piso 4 hab. · Cuesta de Gomérez 8, Granada (Realejo)",
    testimonialsTitle: "Particulares en Granada con contrato Livendia",
    testimonials: [
      {
        quote:
          "Piso en Realejo: cláusulas sobre humedades y comunidad adaptadas al edificio antiguo. Inventario fotográfico muy completo.",
        author: "Isabel R.",
        role: "Propietaria · Realejo",
      },
      {
        quote:
          "Habitación en piso UGR: convivencia y fianza claras. El gestor lo explicó todo online antes de firmar.",
        author: "Marcos T.",
        role: "Inquilino · Zaidín",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis alquiler en el Albaicín?",
        answer: "Sí. Adaptamos cláusulas de mantenimiento y comunidad a edificios históricos.",
      },
      {
        question: "¿Contrato por habitación cerca de la UGR?",
        answer: "Sí. LAU por habitación con reparto de gastos y normas de convivencia.",
      },
      {
        question: "¿Es necesario ir a un despacho?",
        answer: "No. Todo el servicio es online: panel, documentación y gestor asignado.",
      },
    ],
    heroImage: "/images/granada.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Granada — Livendia",
  },
  {
    slug: "palma",
    city: "Palma de Mallorca",
    placeLabel: "Palma de Mallorca",
    schemaAdministrativeArea: "Islas Baleares",
    metaTitle: `Contrato alquiler Palma de Mallorca — LAU sin agencia · ${PRICE}`,
    metaDescription: `Contrato LAU Palma: Casco Antiguo, Santa Catalina, Son Espanyol. Inventario, online, temporada o habitual. ${PRICE} IVA incl.`,
    heroTitle: "Alquiler en Palma de Mallorca con contrato e inventario profesional",
    heroLead:
      "Palma combina vivienda habitual, estancias de meses y presión turística en el Casco Antiguo. Livendia redacta LAU con límites de ocupación claros, inventario profesional y gestor online — 145 € IVA incl., sin comisión de agencia.",
    whyIntro:
      "En Santa Catalina o la Lonja los contratos ambiguos mezclan temporada con LAU habitual o no limitan ocupación. Livendia delimita modalidad, suministros y mobiliario antes de cobrar la renta.",
    marketContext:
      "Baleares concentra uno de los mercados más tensionados: residentes, teletrabajadores y estancias medias compiten en el mismo edificio. Los cierres entre particulares son rápidos; el riesgo está en PDFs que no reflejan lo pactado en visita.",
    barriosIntro: "Barrios de Palma donde redactamos contratos de alquiler:",
    barrios: [
      "Casco Antiguo",
      "Santa Catalina",
      "La Lonja",
      "Son Espanyol",
      "Pere Garau",
      "Playa de Palma",
      "Portixol",
      "Son Armadans",
    ],
    regulatoryBlock:
      "En Baleares aplican reglas LAU estatales. Conviene separar uso turístico regulado, temporada y vivienda habitual. Fianza legal de un mes (dos si arrendador es empresa) con orientación de depósito correcto.",
    localDifferentiators: [
      {
        title: "Uso turístico vs. residencia habitual",
        description: "Definimos modalidad correcta y evitamos LAU mal aplicado a estancias cortas.",
      },
      {
        title: "Ocupación máxima en pisos céntricos",
        description: "Límites claros de personas y pernoctaciones en Santa Catalina o el Casco.",
      },
      {
        title: "Edificios históricos y comunidad",
        description: "IBI, ascensor y derramas en fincas del centro con cláusulas defendibles.",
      },
      {
        title: "Servicio 100% online desde Mallorca",
        description: "Subes docs e inventario desde la isla; gestor operativo en todo el proceso.",
      },
    ],
    agencyLocalNote:
      "En Palma las agencias suelen cobrar comisión de un mes más gestión elevada. Si ya tienes inquilino en el Casco o Son Espanyol, Livendia redacta por 145 €.",
    platformDemoProperty: "Piso 2 hab. · Carrer de Sant Magí 45, Palma (Santa Catalina)",
    testimonialsTitle: "Particulares en Palma con contrato Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en Santa Catalina: ocupación máxima y suministros por escrito. Inventario impecable, trámite 100% online.",
        author: "Joana F.",
        role: "Propietaria · Santa Catalina",
      },
      {
        quote:
          "Temporada vs. LAU habitual bien delimitados en Son Espanyol. El gestor respondió dudas después de firmar.",
        author: "Marc V.",
        role: "Inquilino · Son Espanyol",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis alquiler en todo Mallorca?",
        answer: "Esta landing cubre Palma capital; para otras zonas consulta con el gestor al contratar.",
      },
      {
        question: "¿Contrato de temporada en Palma?",
        answer: "Sí. Te orientamos sobre LAU habitual vs. temporada y redactamos la modalidad correcta.",
      },
      {
        question: "¿Incluye inventario en pisos amueblados?",
        answer: "Sí. Inventario fotográfico del mobiliario y estado del inmueble incluido.",
      },
    ],
    heroImage: "/images/mallorca2.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Palma de Mallorca — Livendia",
    contratoTemporadaHref: localContratoAlquilerTemporadaHref("mallorca"),
  },
  {
    slug: "murcia",
    city: "Murcia",
    placeLabel: "Murcia",
    schemaAdministrativeArea: "Región de Murcia",
    metaTitle: `Contrato alquiler Murcia — LAU online Espinardo · ${PRICE}`,
    metaDescription: `LAU en Murcia: Centro, Espinardo, El Carmen, La Flota. Inventario, gestor online. ${PRICE} IVA incl. Entre particulares sin agencia.`,
    heroTitle: "Contrato LAU en Murcia — Espinardo, El Carmen y campus, todo online",
    heroLead:
      "Murcia capital mezcla familias en La Flota, estudiantes en Espinardo y regeneración en El Carmen. Si ya tienes inquilino, Livendia redacta LAU con inventario, suministros claros y gestor operativo online — 145 € IVA incl., sin comisión de agencia.",
    whyIntro:
      "En Murcia los alquileres entre particulares se cierran rápido por precio asequible, pero las plantillas copiadas de otras CCAA ignoran rotación universitaria, patios interiores o reparto de IBI en edificios del centro histórico.",
    marketContext:
      "Centro, Espinardo, El Carmen y Vistalegre concentran demanda de familias, profesionales del campus y propietarios que alquilan desde otra provincia. La Región de Murcia no está declarada zona tensionada; el riesgo está en fianzas mal redactadas y contratos que no recogen lo pactado en visita.",
    barriosIntro: "Barrios y pedanías de Murcia donde redactamos contratos LAU:",
    barrios: [
      "Centro",
      "La Flota",
      "Espinardo",
      "El Carmen",
      "Vistalegre",
      "Santa María de Gracia",
      "Alcantarilla",
      "Molina de Segura",
    ],
    regulatoryBlock:
      "En la Región de Murcia rige LAU estatal. Fianza de un mes (dos si el arrendador es persona jurídica). Revisamos depósitos adicionales, IPC y causas de resolución antes de ingresar la fianza en el organismo correspondiente.",
    localDifferentiators: [
      {
        title: "Rotación universitaria en Espinardo",
        description: "Convivencia y fianza en pisos compartidos del campus con normas de limpieza y visitas.",
      },
      {
        title: "Regeneración El Carmen y Santa Eulalia",
        description: "Cláusulas sobre obras de entorno, ruido y accesos en barrios en transformación.",
      },
      {
        title: "Propietarios fuera de Murcia",
        description: "Briefing, documentación e inventario 100 % online sin desplazarte al despacho.",
      },
      {
        title: "Edificios del centro con patios",
        description: "Inventario de patios, trasteros y zonas comunes en fincas tradicionales murcianas.",
      },
    ],
    agencyLocalNote:
      "En Murcia las agencias piden comisión de un mes más gestión elevada. Entre particulares en La Flota o Espinardo, Livendia redacta el LAU por 145 € con inventario incluido.",
    platformDemoProperty: "Piso 3 hab. · Gran Vía Escultor Salzillo 18, Murcia (Centro)",
    testimonialsTitle: "Particulares en Murcia con contrato Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en Espinardo entre particulares: convivencia, trastero y fianza revisadas online. Mucho más claro que la plantilla que me pasó un compañero.",
        author: "Raquel M.",
        role: "Propietaria · Espinardo",
      },
      {
        quote:
          "Piso en El Carmen: inventario con fotos del patio y electrodomésticos. El gestor respondió dudas después de firmar.",
        author: "Francisco J.",
        role: "Inquilino · El Carmen",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis Alcantarilla o Molina de Segura?",
        answer: "Sí. LAU adaptada al municipio del área metropolitana de Murcia.",
      },
      {
        question: "¿Contrato por habitación cerca del campus?",
        answer: "Sí. LAU por habitación con reparto de gastos y normas de convivencia.",
      },
      {
        question: "¿El servicio es online en Murcia?",
        answer: "Sí. Panel, documentación e inventario desde cualquier punto; gestor asignado por teléfono o WhatsApp.",
      },
    ],
    heroImage: "/images/contratos6.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Murcia — Livendia",
  },
  {
    slug: "valladolid",
    city: "Valladolid",
    placeLabel: "Valladolid",
    schemaAdministrativeArea: "Castilla y León",
    metaTitle: `Contrato LAU Valladolid — Parquesol, Delicias · ${PRICE}`,
    metaDescription: `Contrato alquiler Valladolid entre particulares: Centro, Parquesol, Delicias, Rondilla. Online, inventario. ${PRICE} IVA incl. Sin agencia.`,
    heroTitle: "¿Alquilas en Valladolid entre particulares? LAU por 145 €, sin comisión",
    heroLead:
      "En Valladolid es habitual alquilar a un compañero de trabajo, familiar o comprador conocido. Livendia redacta contrato LAU con inventario, IPC bien definido y gestor online — 145 € IVA incl., sin pagar comisión de agencia.",
    whyIntro:
      "Parquesol, Delicias y Rondilla mueven alquileres entre vecinos con confianza personal, pero la plantilla de internet no cubre herencias pendientes, varios cotitulares o arras mal encadenadas con el LAU.",
    marketContext:
      "Castilla y León no ha declarado zona tensionada. Centro, Parquesol y Huerta del Rey combinan familias consolidadas y rotación universitaria en Rondilla. Los cierres son pausados; conviene tener contrato e inventario antes de transferir la fianza.",
    barriosIntro: "Barrios de Valladolid donde redactamos contratos LAU entre particulares:",
    barrios: [
      "Centro",
      "Parquesol",
      "Delicias",
      "Rondilla",
      "Huerta del Rey",
      "La Victoria",
      "Laguna de Duero",
      "Pinar de Jalón",
    ],
    regulatoryBlock:
      "En Castilla y León aplican reglas LAU estatales. Fianza legal de un mes (dos meses si arrendador es empresa). Revisamos garantías adicionales, actualización de renta por IPC y causas de resolución conforme a la normativa vigente.",
    localDifferentiators: [
      {
        title: "Operaciones entre conocidos",
        description: "Formalizamos lo pactado verbalmente cuando arrendador e inquilino ya se conocen.",
      },
      {
        title: "Parquesol y urbanizaciones recientes",
        description: "Parking, trastero y gastos de zonas verdes en bloques del ensanche vallisoletano.",
      },
      {
        title: "Rotación universitaria Rondilla",
        description: "Pisos compartidos con normas de convivencia y reparto de suministros.",
      },
      {
        title: "Gestoría 100 % online",
        description: "Sin desplazarte al despacho: panel, docs e inventario con asesoramiento posterior.",
      },
    ],
    agencyLocalNote:
      "En Valladolid las agencias combinan honorarios altos con comisión sobre la renta. Si ya tienes inquilino en Parquesol o Delicias, Livendia cubre el tramo contractual por 145 €.",
    platformDemoProperty: "Piso 2 hab. · Paseo de Zorrilla 102, Valladolid (Centro)",
    testimonialsTitle: "Particulares en Valladolid con contrato Livendia",
    testimonials: [
      {
        quote:
          "Alquilé en Parquesol a un compañero de trabajo. El gestor cerró IPC, garaje y fianza en una llamada; contrato listo en el panel.",
        author: "Beatriz L.",
        role: "Propietaria · Parquesol",
      },
      {
        quote:
          "Habitación en Delicias: convivencia y gastos repartidos como los habíamos hablado. Mejor que la plantilla genérica de internet.",
        author: "Héctor S.",
        role: "Inquilino · Delicias",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis Laguna de Duero?",
        answer: "Sí. LAU adaptada al municipio del área metropolitana de Valladolid.",
      },
      {
        question: "¿Sirve si alquilo a un familiar?",
        answer: "Sí. Incluso entre familiares conviene LAU con inventario; redactamos cláusulas claras y legales.",
      },
      {
        question: "¿Incluye inventario en pisos amueblados?",
        answer: "Sí. Inventario descriptivo y fotográfico incluido en el servicio.",
      },
    ],
    heroImage: "/images/valladolid.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Valladolid — Livendia",
  },
  {
    slug: "vigo",
    city: "Vigo",
    placeLabel: "Vigo",
    schemaAdministrativeArea: "Galicia",
    metaTitle: `Contrato alquiler Vigo — LAU Bouzas, Coia · ${PRICE}`,
    metaDescription: `LAU en Vigo: Centro, Coia, Navia, Bouzas. Humedad, inventario, gestor online. ${PRICE} IVA incl. Entre particulares.`,
    heroTitle: "Redacta tu contrato de alquiler en Vigo — humedad, barrio y LAU bien cerrados",
    heroLead:
      "Vigo combina demanda portuaria, universitaria y costa en Bouzas. Livendia redacta LAU con cláusulas sobre humedad e instalaciones, inventario fotográfico y gestor online — 145 € IVA incl., sin comisión de agencia.",
    whyIntro:
      "En Galicia los edificios costeros y del s. XX acumulan humedades, filtraciones y calderas comunitarias antiguas. Un PDF genérico no documenta el estado del piso ni reparte IBI y comunidad como corresponde en Coia o Teis.",
    marketContext:
      "Centro, Coia, Navia y Bouzas concentran familias, profesionales del puerto y teletrabajadores. Galicia no está declarada zona tensionada; los conflictos aparecen cuando el contrato ignora humedad preexistente o mobiliario incluido en la renta.",
    barriosIntro: "Barrios de Vigo donde redactamos contratos LAU entre particulares:",
    barrios: [
      "Centro",
      "Coia",
      "Teis",
      "Navia",
      "Bouzas",
      "Castrelos",
      "Samil",
      "Moaña",
    ],
    regulatoryBlock:
      "En Galicia rige LAU estatal. Fianza de un mes (dos si arrendador persona jurídica). Conviene documentar humedades, calefacción y estado de fachada en el inventario antes de firmar.",
    localDifferentiators: [
      {
        title: "Humedad y edificios costeros",
        description: "Inventario y cláusulas de mantenimiento en Bouzas, Samil y fincas expuestas al salitre.",
      },
      {
        title: "Demanda portuaria y profesional",
        description: "LAU para inquilinos del sector marítimo y servicios en Centro y Coia.",
      },
      {
        title: "Pisos compartidos universitarios",
        description: "Convivencia en Navia y Castrelos con reparto de gastos y normas claras.",
      },
      {
        title: "Servicio online desde Galicia",
        description: "Briefing, documentación e inventario desde el panel; gestor operativo en todo el proceso.",
      },
    ],
    agencyLocalNote:
      "En Vigo las agencias piden comisión de un mes más gestión de miles de euros. Entre particulares en Coia o Teis, Livendia redacta por 145 € con inventario incluido.",
    platformDemoProperty: "Piso 3 hab. · Gran Vía 42, Vigo (Centro)",
    testimonialsTitle: "Particulares en Vigo con contrato Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en Bouzas: humedad del baño y estado de la fachada quedaron en inventario con fotos. Todo online, sin ir al despacho.",
        author: "María P.",
        role: "Propietaria · Bouzas",
      },
      {
        quote:
          "Piso compartido en Navia: convivencia, trastero y fianza revisadas. El gestor explicó la fianza legal antes de transferir.",
        author: "Diego R.",
        role: "Inquilino · Navia",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis Moaña o área metropolitana?",
        answer: "Sí. LAU adaptada al municipio concreto del sur de Galicia.",
      },
      {
        question: "¿El inventario cubre humedades?",
        answer: "Sí. Documentamos manchas, filtraciones y estado de instalaciones antes de las llaves.",
      },
      {
        question: "¿Contrato por habitación en Vigo?",
        answer: "Sí. LAU por habitación con reparto de gastos y normas de convivencia.",
      },
    ],
    heroImage: "/images/vigo.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Vigo — Livendia",
  },
  {
    slug: "gijon",
    city: "Gijón",
    placeLabel: "Gijón",
    schemaAdministrativeArea: "Principado de Asturias",
    metaTitle: `Contrato LAU Gijón — Cimadevilla, La Arena · ${PRICE}`,
    metaDescription: `Contrato alquiler Gijón: Cimadevilla, La Arena, Somió, El Natahoyo. Online, inventario. ${PRICE} IVA incl. Sin agencia.`,
    heroTitle: "Alquiler en Gijón con contrato profesional — Cimadevilla, La Arena y campus",
    heroLead:
      "Gijón mezcla barrio histórico en Cimadevilla, familias en La Arena y rotación universitaria en Somió. Livendia redacta LAU con inventario, cláusulas para edificios asturianos y gestor online — 145 € IVA incl., sin comisión.",
    whyIntro:
      "En Asturias muchos alquileres son entre vecinos, familia o compañeros de trabajo. La confianza verbal no sustituye un LAU con inventario ni cláusulas sobre humedad, calefacción o ascensor antiguo en El Natahoyo.",
    marketContext:
      "Asturias no ha activado zona tensionada. Cimadevilla, La Arena, Somió y Laviada combinan edificios históricos, familias consolidadas y demanda universitaria. Propietarios fuera del Principado alquilan con frecuencia delegando todo el trámite online.",
    barriosIntro: "Barrios de Gijón donde redactamos contratos LAU:",
    barrios: [
      "Cimadevilla",
      "La Arena",
      "El Natahoyo",
      "Somió",
      "Laviada",
      "La Calzada",
      "Jove",
      "El Llano",
    ],
    regulatoryBlock:
      "En el Principado de Asturias aplican reglas LAU estatales. Fianza de un mes (dos si arrendador es empresa). Revisamos IPC, depósitos adicionales y mantenimiento en edificios con humedad o calefacción central.",
    localDifferentiators: [
      {
        title: "Cimadevilla y patrimonio histórico",
        description: "Cláusulas de mantenimiento y comunidad en edificios del cerro con instalaciones antiguas.",
      },
      {
        title: "Confianza personal, contrato en papel",
        description: "Formalizamos alquileres entre conocidos sin convertirse en agencia inmobiliaria.",
      },
      {
        title: "Rotación Somió y campus",
        description: "Pisos compartidos con normas de convivencia y fianza conforme a LAU.",
      },
      {
        title: "Gestor online en todo Asturias",
        description: "Desde Gijón u Oviedo: panel, docs e inventario con asesoramiento posterior incluido.",
      },
    ],
    agencyLocalNote:
      "En Gijón las agencias piden honorarios altos más comisión. Entre particulares en La Arena o Cimadevilla, Livendia redacta el LAU por 145 €.",
    platformDemoProperty: "Piso 2 hab. · Calle Corrida 28, Gijón (Centro)",
    testimonialsTitle: "Particulares en Gijón con contrato Livendia",
    testimonials: [
      {
        quote:
          "Alquiler entre compañeros de trabajo en La Arena: el gestor adaptó convivencia y fianza. Trámite 100 % online.",
        author: "Lucía A.",
        role: "Propietaria · La Arena",
      },
      {
        quote:
          "Piso en Cimadevilla: humedad del sótano y caldera comunitaria en el inventario. Mejor que firmar a ciegas.",
        author: "Rubén G.",
        role: "Inquilino · Cimadevilla",
      },
    ],
    faqLocal: [
      {
        question: "¿Atendéis también Oviedo o Avilés?",
        answer: "Sí. Misma gestoría online para todo el Principado de Asturias.",
      },
      {
        question: "¿Contrato de temporada en Gijón?",
        answer: "Sí. Te orientamos sobre LAU habitual vs. temporada y redactamos la modalidad correcta.",
      },
      {
        question: "¿Asturias tiene zona tensionada?",
        answer: "No. El alquiler se rige por LAU general; adaptamos cláusulas de actualización de renta a la normativa vigente.",
      },
    ],
    heroImage: "/images/gijon2.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Gijón — Livendia",
    contratoTemporadaHref: localContratoAlquilerTemporadaHref("asturias"),
  },
  {
    slug: "cordoba",
    city: "Córdoba",
    placeLabel: "Córdoba",
    schemaAdministrativeArea: "Andalucía",
    metaTitle: `Contrato LAU Córdoba — Judería, patios · ${PRICE}`,
    metaDescription: `Contrato alquiler Córdoba: Judería, Ciudad Jardín, Levante, Rabanales. Patios, inventario, online. ${PRICE} IVA incl.`,
    heroTitle: "Contrato de alquiler en Córdoba — patios, Judería y habitaciones UCO",
    heroLead:
      "Córdoba mezcla casco histórico UNESCO, patios interiores y demanda universitaria en Rabanales. Livendia redacta LAU con inventario de patios y mobiliario, cláusulas para edificios antiguos y gestor online — 145 € IVA incl.",
    whyIntro:
      "En el Judería o Ciudad Jardín es habitual pactar verbalmente sobre patios, muebles o obras menores. Si no consta en el LAU, el conflicto aparece meses después — especialmente en pisos compartidos de la UCO.",
    marketContext:
      "Andalucía no ha declarado zona tensionada en Córdoba capital. Judería, Levante, Sector Sur y Campus Rabanales combinan turismo residencial, familias locales y rotación estudiantil. Los cierres entre particulares son frecuentes; el borrador suele ser genérico.",
    barriosIntro: "Barrios de Córdoba donde redactamos contratos LAU entre particulares:",
    barrios: [
      "Judería",
      "Centro",
      "Ciudad Jardín",
      "Levante",
      "Sector Sur",
      "Campus Rabanales",
      "El Brillante",
      "Santa Rosa",
    ],
    regulatoryBlock:
      "En Andalucía rige LAU estatal. Fianza de un mes salvo arrendador persona jurídica (dos meses). Conviene delimitar patios, muebles incluidos y mantenimiento en edificios históricos antes de firmar.",
    localDifferentiators: [
      {
        title: "Patios y casco UNESCO",
        description: "Inventario de patios interiores, muebles y estado de instalaciones en el Judería.",
      },
      {
        title: "Pisos compartidos UCO",
        description: "Convivencia en Rabanales y Ciudad Jardín con normas de limpieza y visitas.",
      },
      {
        title: "Levante y barrios residenciales",
        description: "LAU para familias en urbanizaciones con parking y gastos de comunidad claros.",
      },
      {
        title: "Gestoría online sin agencia",
        description: "145 € fijos si ya tienes inquilino; panel, inventario y asesoramiento posterior.",
      },
    ],
    agencyLocalNote:
      "En Córdoba las agencias combinan comisión con honorarios de gestión. Entre particulares en el Judería o Levante, Livendia redacta por 145 € con inventario incluido.",
    platformDemoProperty: "Piso 3 hab. · Calle Judíos 12, Córdoba (Judería)",
    testimonialsTitle: "Particulares en Córdoba con contrato Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en Judería: patio, muebles de terraza e inventario fotográfico muy detallado. Todo el trámite online.",
        author: "Carmen V.",
        role: "Propietaria · Judería",
      },
      {
        quote:
          "Habitación cerca de Rabanales: convivencia y fianza claras. El gestor corrigió cláusulas de la plantilla que me pasaron.",
        author: "Andrés M.",
        role: "Inquilino · Campus",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis alquiler en el Judería?",
        answer: "Sí. Adaptamos cláusulas de mantenimiento, patios y comunidad a edificios históricos.",
      },
      {
        question: "¿Puedo alquilar sin inmobiliaria en Córdoba?",
        answer: `Sí. Contrato LAU por ${PRICE} IVA incl. con inventario y cláusulas adaptadas al inmueble.`,
      },
      {
        question: "¿Incluye inventario de patios y muebles?",
        answer: "Sí. Inventario descriptivo y fotográfico de zonas exteriores y mobiliario incluido.",
      },
    ],
    heroImage: "/images/cordoba.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Córdoba — Livendia",
  },
  {
    slug: "las-palmas",
    city: "Las Palmas de Gran Canaria",
    placeLabel: "Las Palmas de Gran Canaria",
    schemaAdministrativeArea: "Canarias",
    metaTitle: `Contrato alquiler Las Palmas — LAU Canarias · ${PRICE}`,
    metaDescription: `LAU en Las Palmas: Vegueta, Triana, Las Canteras. Climatización, humedad, inventario online. ${PRICE} IVA incl. Sin agencia.`,
    heroTitle: "Contrato LAU en Las Palmas — climatización, humedad e inventario en Canarias",
    heroLead:
      "Las Palmas mezcla residencia habitual, universidad y teletrabajo frente al Atlántico. Livendia redacta LAU con inventario, cláusulas sobre climatización y humedad, y gestor online — 145 € IVA incl., sin comisión de agencia.",
    whyIntro:
      "En Canarias los conflictos habituales son averías de climatización, humedad por salitre y reparto de comunidad mal redactado. Un PDF peninsular no documenta el estado del piso ni los suministros típicos del archipiélago.",
    marketContext:
      "Vegueta, Triana, Las Canteras y Guanarteme concentran demanda de familias, estudiantes y teletrabajadores. Canarias no está declarada zona tensionada; conviene cerrar inventario y pequeña reparación antes de la primera renta.",
    barriosIntro: "Barrios de Las Palmas donde redactamos contratos LAU entre particulares:",
    barrios: [
      "Vegueta",
      "Triana",
      "Las Canteras",
      "Guanarteme",
      "Alcaravaneras",
      "Tamaraceite",
      "Ciudad Alta",
      "Telde",
    ],
    regulatoryBlock:
      "En Canarias aplican reglas LAU estatales. Fianza de un mes (dos si arrendador persona jurídica). Revisamos depósitos adicionales, IPC y cláusulas de mantenimiento en edificios costeros.",
    localDifferentiators: [
      {
        title: "Climatización y suministros",
        description: "Delimitamos avería grave frente a desgaste normal y reparto de electricidad en climatización.",
      },
      {
        title: "Humedad y salitre en fachada",
        description: "Inventario fotográfico de filtraciones y estado de instalaciones antes de las llaves.",
      },
      {
        title: "Pisos compartidos universitarios",
        description: "Convivencia en Ciudad Alta y zonas campus con normas de zonas comunes claras.",
      },
      {
        title: "Gestoría 100 % online desde Canarias",
        description: "Panel, documentación e inventario sin desplazarte al despacho peninsular.",
      },
    ],
    agencyLocalNote:
      "En Las Palmas las agencias piden comisión de un mes más gestión elevada. Entre particulares en Triana o Las Canteras, Livendia redacta por 145 € con inventario incluido.",
    platformDemoProperty: "Piso 2 hab. · Calle Mayor de Triana 48, Las Palmas (Triana)",
    testimonialsTitle: "Particulares en Las Palmas con contrato Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en Las Canteras: climatización, humedad del baño e inventario quedaron por escrito. Trámite online impecable.",
        author: "Patricia N.",
        role: "Propietaria · Las Canteras",
      },
      {
        quote:
          "Piso compartido en Guanarteme: convivencia y fianza revisadas. Mejor que la plantilla que bajé de internet.",
        author: "Jorge & Ana",
        role: "Inquilinos · Guanarteme",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis Telde o municipios cercanos?",
        answer: "Sí. LAU adaptada al municipio de Gran Canaria concreto.",
      },
      {
        question: "¿El inventario cubre electrodomésticos y climatización?",
        answer: "Sí. Documentamos estado de equipos y instalaciones incluidos en la renta.",
      },
      {
        question: "¿Contrato por habitación en Las Palmas?",
        answer: "Sí. LAU por habitación con reparto de gastos y normas de convivencia.",
      },
    ],
    heroImage: "/images/laspalmas.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Las Palmas de Gran Canaria — Livendia",
  },
  {
    slug: "santander",
    city: "Santander",
    placeLabel: "Santander",
    schemaAdministrativeArea: "Cantabria",
    metaTitle: `Contrato alquiler Santander — Sardinero · ${PRICE}`,
    metaDescription: `LAU en Santander: Centro, El Sardinero, Monte. Inventario, online, temporada o habitual. ${PRICE} IVA incl. Sin agencia.`,
    heroTitle: "Alquiler en Santander — El Sardinero, universidad y LAU por 145 € online",
    heroLead:
      "Santander combina El Sardinero, demanda universitaria en Monte y familias en Cueto. Livendia redacta LAU con inventario, límites entre residencia y estancia media, y gestor online — 145 € IVA incl., sin comisión.",
    whyIntro:
      "Cantabria mezcla segunda residencia costera y alquiler anual en el ensanche. Los borradores genéricos no distinguen temporada de LAU habitual ni documentan humedad en edificios frente al mar.",
    marketContext:
      "Centro, El Sardinero, Monte y Peñacastillo concentran profesionales, estudiantes y teletrabajadores. Cantabria no está declarada zona tensionada; el riesgo está en fianza transferida sin contrato que recoja lo pactado en visita.",
    barriosIntro: "Barrios de Santander donde redactamos contratos LAU:",
    barrios: [
      "Centro",
      "El Sardinero",
      "Cueto",
      "Monte",
      "Peñacastillo",
      "Raos",
      "Castilla-Hermida",
      "Camargo",
    ],
    regulatoryBlock:
      "En Cantabria rige LAU estatal. Fianza legal de un mes (dos meses si arrendador es empresa). Conviene explicitar mobiliario incluido, suministros y estado del inmueble en edificios costeros.",
    localDifferentiators: [
      {
        title: "El Sardinero: residencia vs. estancia media",
        description: "Delimitamos duración, ocupación y suministros cuando el perfil no es LAU de larga duración.",
      },
      {
        title: "Zona universitaria Monte",
        description: "Pisos compartidos con convivencia y reparto de gastos redactados con equilibrio.",
      },
      {
        title: "Humedad en fincas costeras",
        description: "Inventario fotográfico de fachada, baños y zonas húmedas antes de firmar.",
      },
      {
        title: "Servicio online sin agencia",
        description: "145 € fijos si ya tienes inquilino; gestor operativo en todo el proceso.",
      },
    ],
    agencyLocalNote:
      "En Santander las agencias combinan comisión de un mes con honorarios de gestión. Entre particulares en el Centro o Cueto, Livendia redacta el LAU por 145 €.",
    platformDemoProperty: "Piso 3 hab. · Calle Burgos 12, Santander (Centro)",
    testimonialsTitle: "Particulares en Santander con contrato Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en El Sardinero: mobiliario, entrega de llaves e inventario fotográfico muy claro. Todo online.",
        author: "Marta E.",
        role: "Propietaria · El Sardinero",
      },
      {
        quote:
          "LAU en Monte cerca del campus: convivencia y fianza como las habíamos pactado. El gestor respondió dudas después de firmar.",
        author: "Javier H.",
        role: "Inquilino · Monte",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis Camargo o municipios del área?",
        answer: "Sí. LAU adaptada al municipio de Cantabria concreto.",
      },
      {
        question: "¿Temporada veraniega o LAU habitual?",
        answer: "Te orientamos sobre la modalidad correcta y redactamos cláusulas acordes al uso real.",
      },
      {
        question: "¿Incluye inventario en pisos amueblados?",
        answer: "Sí. Inventario descriptivo y fotográfico incluido en el servicio.",
      },
    ],
    heroImage: "/images/oviedo2.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Santander — Livendia",
  },
  {
    slug: "pamplona",
    city: "Pamplona",
    placeLabel: "Pamplona",
    schemaAdministrativeArea: "Navarra",
    metaTitle: `Contrato LAU Pamplona — Sanfermines · ${PRICE}`,
    metaDescription: `Contrato alquiler Pamplona: Casco Antiguo, Iturrama, Ensanche. Inventario, gestor online. ${PRICE} IVA incl. Entre particulares.`,
    heroTitle: "Contrato de alquiler en Pamplona — campus, Ensanche y Sanfermines bien delimitados",
    heroLead:
      "Pamplona-Iruña mezcla demanda universitaria, familias en Iturrama y presión estacional en Sanfermines. Livendia redacta LAU con inventario, cláusulas equilibradas y gestor online — 145 € IVA incl., sin comisión de agencia.",
    whyIntro:
      "En Navarra los conflictos posteriores suelen venir de mantenimiento mal repartido o de un inventario inexistente en el Casco Antiguo. Las plantillas copiadas no contemplan visitas del arrendador ni depósitos adicionales ilegales.",
    marketContext:
      "Casco Antiguo, Iturrama, San Juan y Rochapea combinan inquilinos estables y rotación universitaria. Navarra no está declarada zona tensionada; conviene cerrar fotografías del estado inicial antes del primer mes de renta.",
    barriosIntro: "Barrios de Pamplona donde redactamos contratos LAU entre particulares:",
    barrios: [
      "Casco Antiguo",
      "Iturrama",
      "San Juan",
      "Rochapea",
      "Ensanche",
      "Milagrosa",
      "Buztintxuri",
      "Mutilva",
    ],
    regulatoryBlock:
      "En Navarra aplican reglas LAU estatales. Fianza de un mes (dos si arrendador persona jurídica). Revisamos garantías adicionales, IPC y causas de resolución antes de firmar.",
    localDifferentiators: [
      {
        title: "Sanfermines y estancias estacionales",
        description: "Delimitamos duración y ocupación cuando el arrendamiento no es LAU habitual de larga duración.",
      },
      {
        title: "Casco Antiguo y patrimonio",
        description: "Cláusulas de mantenimiento y comunidad en edificios históricos con calles estrechas.",
      },
      {
        title: "Pisos compartidos universitarios",
        description: "Convivencia en Milagrosa y zonas campus con normas de limpieza y visitas.",
      },
      {
        title: "Gestoría online en Navarra",
        description: "Briefing, docs e inventario desde el panel; asesoramiento posterior incluido.",
      },
    ],
    agencyLocalNote:
      "En Pamplona las agencias piden comisión más gestión de miles de euros. Entre particulares en Iturrama o Ensanche, Livendia redacta por 145 € con inventario incluido.",
    platformDemoProperty: "Piso 2 hab. · Calle Estafeta 34, Pamplona (Casco Antiguo)",
    testimonialsTitle: "Particulares en Pamplona con contrato Livendia",
    testimonials: [
      {
        quote:
          "Primera vez alquilando en Iturrama: comunidad, seguros e inventario cerrados online. Sin ir al despacho.",
        author: "Gorka M.",
        role: "Propietario · Iturrama",
      },
      {
        quote:
          "Habitación en piso compartido: límites claros sobre visitas del propietario y reparto de gastos.",
        author: "Leire & Xabi",
        role: "Inquilinos · Milagrosa",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis Mutilva o barrios periféricos?",
        answer: "Sí. LAU adaptada al barrio y al tipo de edificio concreto.",
      },
      {
        question: "¿Contrato por habitación en Pamplona?",
        answer: "Sí. LAU por habitación con reparto de gastos y normas de convivencia.",
      },
      {
        question: "¿Es necesario acudir a un despacho?",
        answer: "No. Todo el servicio es online: panel, documentación y gestor asignado.",
      },
    ],
    heroImage: "/images/zaragoza2.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Pamplona — Livendia",
  },
  {
    slug: "oviedo",
    city: "Oviedo",
    placeLabel: "Oviedo",
    schemaAdministrativeArea: "Principado de Asturias",
    metaTitle: `Contrato alquiler Oviedo — campus La Ería · ${PRICE}`,
    metaDescription: `LAU en Oviedo: Centro, La Ería, Los Pilares, Ciudad Naranco. Humedad, inventario, online. ${PRICE} IVA incl. Sin agencia.`,
    heroTitle: "Redacta tu LAU en Oviedo — capital asturiana, campus e inventario online",
    heroLead:
      "Oviedo concentra demanda universitaria, familias en Ciudad Naranco y propietarios fuera del Principado. Livendia redacta LAU con inventario, cláusulas sobre humedad y calefacción, y gestor online — 145 € IVA incl.",
    whyIntro:
      "En La Ería y Los Pilares la rotación académica multiplica pisos compartidos mal redactados. En el Centro, edificios antiguos con ascensor y caldera comunitaria exigen cláusulas que un PDF peninsular no trae.",
    marketContext:
      "Asturias no ha activado zona tensionada. Centro, La Ería, Pumarín y Ciudad Naranco combinan inquilinos estables y estancias de curso. Gijón y Avilés comparten perfil; Oviedo es el núcleo administrativo y universitario.",
    barriosIntro: "Barrios de Oviedo donde redactamos contratos LAU:",
    barrios: [
      "Centro",
      "La Ería",
      "Los Pilares",
      "Ciudad Naranco",
      "Pumarín",
      "Teatinos",
      "La Florida",
      "Llamaquique",
    ],
    regulatoryBlock:
      "En el Principado de Asturias rige LAU estatal. Fianza de un mes (dos si arrendador es empresa). Documentamos humedades, calefacción y estado de comunidad antes de ingresar la fianza.",
    localDifferentiators: [
      {
        title: "Campus La Ería y Los Pilares",
        description: "Convivencia en pisos compartidos con normas de limpieza y reparto de suministros.",
      },
      {
        title: "Propietarios fuera de Asturias",
        description: "Gestión contractual 100 % online sin desplazarte a Oviedo.",
      },
      {
        title: "Edificios con humedad y caldera comunitaria",
        description: "Inventario fotográfico y cláusulas de mantenimiento defendibles.",
      },
      {
        title: "Enlace con Gijón y costa",
        description: "Misma gestoría para todo el Principado; asesoramiento posterior incluido.",
      },
    ],
    agencyLocalNote:
      "En Oviedo las agencias piden honorarios altos más comisión. Entre particulares en La Ería o Centro, Livendia redacta el LAU por 145 €.",
    platformDemoProperty: "Piso 2 hab. · Calle Uría 45, Oviedo (Centro)",
    testimonialsTitle: "Particulares en Oviedo con contrato Livendia",
    testimonials: [
      {
        quote:
          "Alquiler en La Ería: humedad del baño e inventario con fotos antes de la fianza. Gestor muy claro por teléfono.",
        author: "Clara S.",
        role: "Propietaria · La Ería",
      },
      {
        quote:
          "Habitación en Los Pilares: convivencia y fianza como lo habíamos pactado entre compañeros de máster.",
        author: "Mario T.",
        role: "Inquilino · Los Pilares",
      },
    ],
    faqLocal: [
      {
        question: "¿Atendéis también Gijón o Avilés?",
        answer: "Sí. Misma gestoría online para todo el Principado de Asturias.",
      },
      {
        question: "¿Contrato de temporada en Oviedo?",
        answer: "Sí. Te orientamos sobre LAU habitual vs. temporada y redactamos la modalidad correcta.",
      },
      {
        question: "¿Incluye inventario en pisos amueblados?",
        answer: "Sí. Inventario descriptivo y fotográfico incluido en el servicio.",
      },
    ],
    heroImage: "/images/oviedo.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Oviedo — Livendia",
    contratoTemporadaHref: localContratoAlquilerTemporadaHref("asturias"),
  },
  {
    slug: "asturias",
    city: "Asturias",
    placeLabel: "Asturias",
    schemaAdministrativeArea: "Principado de Asturias",
    metaTitle: `Contrato LAU Asturias — Oviedo, Gijón, costa · ${PRICE}`,
    metaDescription: `Contrato alquiler en Asturias: Oviedo, Gijón, Avilés, costa e interior. Humedad, temporada, online. ${PRICE} IVA incl.`,
    heroTitle: "Contrato de alquiler en Asturias — costa, interior y campus, 145 € online",
    heroLead:
      "Desde Oviedo y Gijón hasta la costa o viviendas rurales, el alquiler asturiano mezcla confianza personal y pactos verbales sobre leña, humedad o parking. Livendia redacta LAU con inventario y gestor online — 145 € IVA incl., sin agencia.",
    whyIntro:
      "El Principado combina mercado urbano, veraneo costero y casas compartidas en el interior. Los PDF genéricos ignoran calefacción, caminos de acceso o estancias estacionales mal encuadradas en LAU.",
    marketContext:
      "Oviedo, Gijón, Avilés, Langreo y la franja costera tienen perfiles distintos pero comparten humedad, calderas comunitarias y propietarios que viven fuera de Asturias. No hay zona tensionada declarada; el contrato debe reflejar el uso real del inmueble.",
    barriosIntro: "Núcleos del Principado donde redactamos contratos LAU:",
    barrios: [
      "Oviedo — Centro",
      "Gijón — La Arena",
      "Gijón — Cimadevilla",
      "Avilés",
      "Langreo / Siero",
      "Costa — Llanes",
      "Costa — Ribadesella",
      "Concejos del interior",
    ],
    regulatoryBlock:
      "En Asturias aplican reglas LAU estatales. Fianza legal de un mes (dos meses si arrendador es empresa). Separar temporada, segunda residencia y vivienda habitual antes de cobrar la renta.",
    localDifferentiators: [
      {
        title: "Costa veraniega vs. residencia habitual",
        description: "Modalidad contractual acorde a duración y causa real — no LAU disfrazado.",
      },
      {
        title: "Viviendas rurales e interior",
        description: "Leña, accesos, fincas colindantes y suministros en casas compartidas.",
      },
      {
        title: "Humedad y calefacción asturiana",
        description: "Inventario y mantenimiento en edificios con clima húmedo.",
      },
      {
        title: "Gestoría online en todo el Principado",
        description: "Oviedo, Gijón, Avilés o costa: mismo panel y gestor operativo.",
      },
    ],
    agencyLocalNote:
      "En Asturias las agencias piden comisión más gestión elevada. Entre particulares en Gijón, Oviedo o la costa, Livendia redacta por 145 € con inventario incluido.",
    platformDemoProperty: "Piso 2 hab. · Calle Jovellanos 8, Gijón (Centro)",
    testimonialsTitle: "Particulares en Asturias con contrato Livendia",
    testimonials: [
      {
        quote:
          "Alquiler de verano en la costa: duración, ropa de cama y parking comunitario por escrito. Todo entre particulares.",
        author: "Sandra V.",
        role: "Propietaria · zona costera",
      },
      {
        quote:
          "Casa compartida cerca de Oviedo: leña, acceso a fincas y plazo de aviso de salida reflejados en el LAU.",
        author: "Lucía P.",
        role: "Propietaria · interior",
      },
    ],
    faqLocal: [
      {
        question: "¿Sirve para Oviedo y Gijón por igual?",
        answer: "Sí. Adaptamos el LAU al municipio y al tipo de inmueble concreto.",
      },
      {
        question: "¿Contrato de temporada en la costa?",
        answer: "Sí. Te orientamos y redactamos la modalidad correcta con inventario incluido.",
      },
      {
        question: "¿Vivienda rural o casa en el interior?",
        answer: "Sí. Cláusulas sobre suministros, accesos y mantenimiento adaptadas al uso real.",
      },
    ],
    heroImage: "/images/gijon.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Asturias — Livendia",
    contratoTemporadaHref: localContratoAlquilerTemporadaHref("asturias"),
  },
];
