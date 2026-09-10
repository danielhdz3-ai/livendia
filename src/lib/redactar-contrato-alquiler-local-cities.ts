/**
 * Landings de conversión: redactar contrato de alquiler por ciudad.
 * Rutas: /servicios/redactar-contrato-alquiler/[slug]
 */
import { CONTRATO_ALQUILER_LAU_PRICE_LABEL } from "@/lib/catalog.public";
import { localContratoAlquilerHref } from "@/lib/contrato-alquiler-local-cities";
import { localContratoAlquilerHabitacionHref } from "@/lib/contrato-alquiler-habitacion-local-cities";
import { localContratoAlquilerTemporadaHref } from "@/lib/contrato-alquiler-temporada-local-cities";
import { REDACTAR_CONTRATO_ALQUILER_BASE } from "@/lib/redactar-contrato-alquiler-content";

export { REDACTAR_CONTRATO_ALQUILER_BASE };

export const REDACTAR_CONTRATO_ALQUILER_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "madrid",
  "barcelona",
  "valencia",
  "sevilla",
  "malaga",
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
        question: "¿Gestionáis L'Hospitalet o Badalona?",
        answer: "Sí. Misma normativa cataluna (INCASÒL, zona tensionada) con adaptación al municipio.",
      },
    ],
    heroImage: "/images/contratos2.jpg",
    heroImageAlt: "Redactar contrato de alquiler profesional en Barcelona — Livendia",
    contratoTemporadaHref: localContratoAlquilerTemporadaHref("barcelona"),
    contratoHabitacionHref: localContratoAlquilerHabitacionHref("barcelona"),
  },
  {
    slug: "valencia",
    city: "Valencia",
    placeLabel: "Valencia",
    schemaAdministrativeArea: "Comunidad Valenciana",
    metaTitle: `Redactar contrato alquiler Valencia — ${PRICE} IVA incl.`,
    metaDescription: `Contrato LAU en Valencia: Ruzafa, Benimaclet, Ciutat Vella, inventario y fianza. ${PRICE} IVA incl. Entre particulares sin comisión de agencia.`,
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
];
