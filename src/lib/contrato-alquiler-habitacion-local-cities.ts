import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { CONTRATO_ALQUILER_HABITACION_PRICE_LABEL } from "@/lib/catalog.public";
import {
  getHabitacionLocalSeoContent,
  type HabitacionLocalSeoContent,
} from "@/lib/contrato-alquiler-habitacion-local-seo-content";

export const CONTRATO_ALQUILER_HABITACION_LOCAL_BASE = "/servicios/contrato-alquiler-habitacion";

/** Ciudades prioritarias para enlazado interno (demanda GSC / SERP). */
export const HABITACION_SEO_PRIMARY_SLUGS = ["madrid", "barcelona"] as const;

export type HabitacionSeoPrimarySlug = (typeof HABITACION_SEO_PRIMARY_SLUGS)[number];

/** CTA nacional por defecto: landing local Madrid (Barcelona ya posiciona #1). */
export const HABITACION_SEO_DEFAULT_LOCAL_HREF = `${CONTRATO_ALQUILER_HABITACION_LOCAL_BASE}/madrid`;

export const CONTRATO_ALQUILER_HABITACION_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "barcelona",
  "hospitalet-de-llobregat",
  "cornella-de-llobregat",
  "sabadell",
  "terrassa",
  "madrid",
  "valencia",
  "malaga",
  "sevilla",
  "bilbao",
];

export type ContratoAlquilerHabitacionLocalLandingConfig = {
  slug: string;
  path: string;
  city: string;
  schemaAdministrativeArea: string;
  finalCtaLead: string;
  testimonialsTitle?: string;
  testimonials?: readonly { quote: string; author: string; role: string }[];
  seoContent?: HabitacionLocalSeoContent;
  faq?: readonly { question: string; answer: string }[];
} & LocalCityLandingFields;

export type ContratoAlquilerHabitacionLocalCityDefinition = Omit<
  ContratoAlquilerHabitacionLocalLandingConfig,
  "path"
>;

export function localContratoAlquilerHabitacionHref(slug: string): string {
  return `${CONTRATO_ALQUILER_HABITACION_LOCAL_BASE}/${slug}`;
}

export function toHabitacionLandingConfig(
  def: ContratoAlquilerHabitacionLocalCityDefinition,
): ContratoAlquilerHabitacionLocalLandingConfig {
  const seoContent = getHabitacionLocalSeoContent(def.slug);
  return {
    ...def,
    ...(seoContent ? { seoContent } : {}),
    ...(seoContent ? { faq: seoContent.faqLocal } : {}),
    slug: def.slug,
    path: localContratoAlquilerHabitacionHref(def.slug),
  };
}

export function getContratoAlquilerHabitacionLocalCity(
  slug: string,
): ContratoAlquilerHabitacionLocalCityDefinition | undefined {
  return CONTRATO_ALQUILER_HABITACION_LOCAL_CITIES.find((c) => c.slug === slug);
}

export function isContratoAlquilerHabitacionLocalSlugPublished(slug: string): boolean {
  return CONTRATO_ALQUILER_HABITACION_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedContratoAlquilerHabitacionLocalCities(): ContratoAlquilerHabitacionLocalCityDefinition[] {
  const pub = new Set(CONTRATO_ALQUILER_HABITACION_LOCAL_PUBLISHED_SLUGS);
  return CONTRATO_ALQUILER_HABITACION_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

const HERO_BULLETS_DEFAULT = [
  "Normas de convivencia y zonas comunes",
  "Gastos, fianza e inventario de la habitación",
  "No es plantilla LAU de piso entero",
  "Llamada con gestor antes de contratar",
  "Entrega en 48-72 h laborables",
] as const;

export const CONTRATO_ALQUILER_HABITACION_LOCAL_CITIES: ContratoAlquilerHabitacionLocalCityDefinition[] = [
  {
    slug: "barcelona",
    city: "Barcelona",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Piso compartido · Barcelona",
    heroH1: "Contrato de alquiler de habitación en Barcelona",
    metaTitle: `Habitación Barcelona — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL}, LAU 2026`,
    metaDescription:
      `Contrato alquiler habitación Barcelona ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl. Modelo LAU 2026 para piso compartido: convivencia, fianza e inventario. Gestor humano por teléfono. Eixample, Gràcia. 48-72 h.`,
    keywords: [
      "contrato alquiler habitacion barcelona",
      "alquilar habitacion barcelona contrato",
      "contrato piso compartido barcelona",
      "modelo contrato habitacion barcelona",
      "redactar contrato alquiler habitacion barcelona",
      "alquiler habitacion eixample contrato",
      "contrato habitacion gracia barcelona",
      "alquiler habitacion poblenou",
    ],
    heroBullets: HERO_BULLETS_DEFAULT,
    finalCtaLead: "Contrata tu contrato de habitación en Barcelona — listo en 48-72 h",
    testimonialsTitle: "Particulares que tramitaron su contrato de habitación en Barcelona",
    testimonials: [
      {
        quote:
          "Tenía tres inquilinos en un piso de Gràcia y solo acuerdos verbales. El gestor nos llamó antes de contratar, explicó cómo repartir gastos y dejó el preaviso claro.",
        author: "Laura M.",
        role: "Propietaria — piso compartido en Gràcia",
      },
      {
        quote:
          "Entré en un piso del Eixample sin contrato. Livendia redactó uno con normas de cocina, visitas y limpieza. Me lo explicaron por WhatsApp antes de firmar.",
        author: "Carlos R.",
        role: "Inquilino — habitación en Eixample",
      },
      {
        quote:
          "Alquilaba una habitación en Poblenou a estudiantes. El gestor adaptó cláusulas de temporada escolar y lo coordinó por teléfono en 48 horas.",
        author: "Jordi P.",
        role: "Arrendador — habitación en Poblenou",
      },
      {
        quote:
          "Éramos dos compañeras en Sants y el propietario no sabía qué poner en el contrato. Livendia lo tramitó con fianza, inventario y normas de convivencia.",
        author: "Marina S.",
        role: "Inquilina — habitación en Sants",
      },
    ],
  },
  {
    slug: "hospitalet-de-llobregat",
    city: "L'Hospitalet de Llobregat",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Piso compartido · L'Hospitalet",
    heroH1: "Contrato de alquiler de habitación en L'Hospitalet de Llobregat",
    metaTitle: `Contrato habitación L'Hospitalet — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl.`,
    metaDescription:
      `¿Necesitas un contrato de alquiler de habitación en L'Hospitalet? Gestor especializado te asesora por teléfono. ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl. Bellvitge, Collblanc, Florida. 48-72 h.`,
    keywords: [
      "contrato alquiler habitacion hospitalet",
      "contrato habitacion l hospitalet de llobregat",
      "alquilar habitacion hospitalet contrato",
      "contrato piso compartido hospitalet",
      "modelo contrato habitacion hospitalet",
      "contrato habitacion bellvitge",
      "contrato alquiler habitacion collblanc",
    ],
    heroBullets: HERO_BULLETS_DEFAULT,
    finalCtaLead: "Contrato de habitación en L'Hospitalet — gestor especializado en 48-72 h",
    testimonialsTitle: "Particulares que tramitaron su contrato de habitación en L'Hospitalet",
    testimonials: [
      {
        quote:
          "Alquilaba dos habitaciones en Collblanc sin contrato escrito. El gestor nos llamó, repartió gastos de luz y dejó normas de cocina claras antes de firmar.",
        author: "Marc T.",
        role: "Propietario — piso compartido en Collblanc",
      },
      {
        quote:
          "Entré en un piso de Bellvitge con acuerdo verbal. Livendia redactó fianza, preaviso y convivencia; me lo explicaron por WhatsApp línea a línea.",
        author: "Aina R.",
        role: "Inquilina — habitación en Bellvitge",
      },
      {
        quote:
          "Compartía piso en La Florida y el propietario no sabía qué poner. El gestor especializado lo tramitó en 48 horas con inventario incluido.",
        author: "Pol S.",
        role: "Inquilino — habitación en La Florida",
      },
    ],
  },
  {
    slug: "cornella-de-llobregat",
    city: "Cornellà de Llobregat",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Piso compartido · Cornellà",
    heroH1: "Contrato de alquiler de habitación en Cornellà de Llobregat",
    metaTitle: `Contrato habitación Cornellà — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl.`,
    metaDescription:
      `¿Necesitas contrato de alquiler de habitación en Cornellà? Gestor Livendia te ayuda y asesora por teléfono. ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl. Sant Ildefons, Can Mercader. 48-72 h.`,
    keywords: [
      "contrato alquiler habitacion cornella",
      "contrato habitacion cornella de llobregat",
      "alquilar habitacion cornella contrato",
      "contrato piso compartido cornella",
      "contrato habitacion sant ildefons",
      "modelo contrato habitacion cornella",
    ],
    heroBullets: HERO_BULLETS_DEFAULT,
    finalCtaLead: "Contrato de habitación en Cornellà — asesoramiento del gestor incluido",
    testimonialsTitle: "Particulares que tramitaron su contrato de habitación en Cornellà",
    testimonials: [
      {
        quote:
          "Tenía una habitación en Sant Ildefons y solo acuerdos por WhatsApp. El gestor redactó convivencia, fianza y preaviso antes de cobrar la primera renta.",
        author: "Núria V.",
        role: "Propietaria — habitación en Sant Ildefons",
      },
      {
        quote:
          "Llegué a Cornellà por trabajo y el piso no tenía contrato. Livendia lo preparó con normas de cocina y gastos compartidos en dos días.",
        author: "Javier M.",
        role: "Inquilino — Can Mercader",
      },
      {
        quote:
          "Éramos tres compañeros en un piso cerca del metro y necesitábamos documento serio. El gestor especializado nos orientó por teléfono antes de contratar.",
        author: "Laia C.",
        role: "Inquilina — Cornellà centre",
      },
    ],
  },
  {
    slug: "sabadell",
    city: "Sabadell",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Piso compartido · Sabadell",
    heroH1: "Contrato de alquiler de habitación en Sabadell",
    metaTitle: `Contrato habitación Sabadell — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl.`,
    metaDescription:
      `¿Necesitas un contrato de alquiler de habitación en Sabadell? Gestor especializado te ayuda y asesora. ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl. Creu Alta, Gràcia, Can Feu. 48-72 h.`,
    keywords: [
      "contrato alquiler habitacion sabadell",
      "alquilar habitacion sabadell contrato",
      "contrato piso compartido sabadell",
      "modelo contrato habitacion sabadell",
      "contrato habitacion creu alta sabadell",
      "contrato alquiler habitacion can feu",
    ],
    heroBullets: HERO_BULLETS_DEFAULT,
    finalCtaLead: "Contrato de habitación en Sabadell — gestor por teléfono o WhatsApp",
    testimonialsTitle: "Particulares que tramitaron su contrato de habitación en Sabadell",
    testimonials: [
      {
        quote:
          "Alquilaba habitaciones en Creu Alta sin reparto de gastos claro. El gestor nos llamó antes de contratar y dejó luz, internet y preaviso por escrito.",
        author: "Oriol P.",
        role: "Propietario — piso compartido en Creu Alta",
      },
      {
        quote:
          "Entré en un piso de Gràcia (Sabadell) sin contrato. Livendia redactó normas de convivencia y me lo explicaron por teléfono antes de pagar la fianza.",
        author: "Marta L.",
        role: "Inquilina — Gràcia, Sabadell",
      },
      {
        quote:
          "Compartía piso en Can Feu con estudiantes del campus UAB. El gestor incluyó duración de curso y cláusula de salida en junio.",
        author: "Arnau D.",
        role: "Arrendador — Can Feu",
      },
    ],
  },
  {
    slug: "terrassa",
    city: "Terrassa",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Piso compartido · Terrassa",
    heroH1: "Contrato de alquiler de habitación en Terrassa",
    metaTitle: `Contrato habitación Terrassa — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl.`,
    metaDescription:
      `¿Necesitas contrato de alquiler de habitación en Terrassa? Gestor especializado te ayuda y asesora por teléfono. ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl. Sant Pere, La Maurina. 48-72 h.`,
    keywords: [
      "contrato alquiler habitacion terrassa",
      "alquilar habitacion terrassa contrato",
      "contrato piso compartido terrassa",
      "modelo contrato habitacion terrassa",
      "contrato habitacion sant pere terrassa",
      "contrato alquiler habitacion la maurina",
    ],
    heroBullets: HERO_BULLETS_DEFAULT,
    finalCtaLead: "Contrato de habitación en Terrassa — listo en 48-72 h laborables",
    testimonialsTitle: "Particulares que tramitaron su contrato de habitación en Terrassa",
    testimonials: [
      {
        quote:
          "Alquilaba dos habitaciones en Sant Pere sin contrato adaptado. El gestor especializado fijó fianza, inventario y normas de limpieza en 48 horas.",
        author: "Silvia G.",
        role: "Propietaria — Sant Pere, Terrassa",
      },
      {
        quote:
          "Entré en un piso de La Maurina con acuerdo verbal. Livendia redactó convivencia y gastos; el propietario y yo firmamos con tranquilidad.",
        author: "Héctor N.",
        role: "Inquilino — La Maurina",
      },
      {
        quote:
          "Necesitaba contrato antes de pagar depósito en Ca n'Anglada. El gestor me asesoró por WhatsApp y lo tuvimos listo en el plazo prometido.",
        author: "Claudia F.",
        role: "Inquilina — Ca n'Anglada",
      },
    ],
  },
  {
    slug: "madrid",
    city: "Madrid",
    schemaAdministrativeArea: "Comunidad de Madrid",
    heroBadge: "Piso compartido · Madrid",
    heroH1: "Contrato de alquiler de habitación en Madrid",
    metaTitle: `Habitación Madrid — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL}, LAU 2026`,
    metaDescription:
      `Contrato alquiler habitación Madrid ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl. Modelo LAU 2026 para piso compartido: Chamberí, Moncloa, Tetuán. Convivencia, gastos y fianza. Gestor humano por teléfono. 48-72 h.`,
    keywords: [
      "contrato alquiler habitacion madrid",
      "alquilar habitacion madrid contrato",
      "contrato piso compartido madrid",
      "modelo contrato habitacion madrid",
      "contrato habitacion chamberi",
      "alquiler habitacion moncloa contrato",
      "contrato habitacion lavapies",
      "redactar contrato habitacion madrid",
    ],
    heroBullets: HERO_BULLETS_DEFAULT,
    finalCtaLead: "Contrata tu contrato de habitación en Madrid — asesoramiento incluido",
    testimonialsTitle: "Particulares que tramitaron su contrato de habitación en Madrid",
    testimonials: [
      {
        quote:
          "Alquilaba dos habitaciones en Chamberí sin contrato escrito. El gestor nos llamó, repartió gastos de luz y dejó normas de cocina claras. Cada habitación firmó su contrato.",
        author: "Elena V.",
        role: "Propietaria — dos habitaciones en Chamberí",
      },
      {
        quote:
          "Llegué a Madrid por trabajo y el piso en Tetuán solo tenía acuerdo verbal. Livendia redactó el contrato con fianza y preaviso antes de que pagara el depósito.",
        author: "Pablo G.",
        role: "Inquilino — habitación en Tetuán",
      },
      {
        quote:
          "Compartía piso en Moncloa con tres personas y no había normas de limpieza. El gestor lo dejó todo por escrito en dos días, por WhatsApp y teléfono.",
        author: "Ana R.",
        role: "Inquilina — Ciudad Universitaria",
      },
      {
        quote:
          "Tenía un borrador del propietario en Lavapiés que era un LAU de piso entero. Livendia lo adaptó a habitación en piso compartido sin coste extra de sorpresa.",
        author: "Miguel T.",
        role: "Inquilino — habitación en Lavapiés",
      },
    ],
  },
  {
    slug: "valencia",
    city: "Valencia",
    schemaAdministrativeArea: "Comunidad Valenciana",
    heroBadge: "Piso compartido · Valencia",
    heroH1: "Contrato de alquiler de habitación en Valencia",
    metaTitle: `Contrato alquiler habitación Valencia — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL}`,
    metaDescription:
      `¿Alquilas una habitación en Valencia? Contrato para particulares en Ruzafa, Benimaclet, Ciutat Vella. Convivencia, gastos y fianza. ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl.`,
    keywords: [
      "contrato alquiler habitacion valencia",
      "alquilar habitacion valencia contrato",
      "contrato piso compartido valencia",
      "contrato habitacion ruzafa",
      "alquiler habitacion benimaclet contrato",
      "modelo contrato habitacion valencia",
      "contrato habitacion cabanyal",
    ],
    heroBullets: HERO_BULLETS_DEFAULT,
    finalCtaLead: "Contrata tu contrato de habitación en Valencia — listo en 48-72 h",
    testimonialsTitle: "Particulares que tramitaron su contrato de habitación en Valencia",
    testimonials: [
      {
        quote:
          "Alquilaba una habitación en Benimaclet a estudiantes sin contrato de curso. El gestor fijó preaviso de junio, fianza y gastos de internet. Muy claro.",
        author: "Carmen L.",
        role: "Propietaria — habitación en Benimaclet",
      },
      {
        quote:
          "Entré en un piso de Ruzafa con dos compañeros y solo había acuerdo verbal. Livendia redactó normas de convivencia y me lo explicaron por teléfono.",
        author: "David F.",
        role: "Inquilino — habitación en Ruzafa",
      },
      {
        quote:
          "Compartía piso en El Carmen y el propietario no sabía qué poner. El gestor adaptó el contrato a tres habitaciones con reparto de gastos justo.",
        author: "Lucía H.",
        role: "Inquilina — Ciutat Vella",
      },
      {
        quote:
          "Necesitaba contrato antes de pagar la fianza en Patraix. Lo tramitaron online en 48 horas con inventario de la habitación incluido.",
        author: "Sergio M.",
        role: "Inquilino — habitación en Patraix",
      },
    ],
  },
  {
    slug: "malaga",
    city: "Málaga",
    schemaAdministrativeArea: "Andalucía",
    heroBadge: "Piso compartido · Málaga",
    heroH1: "Contrato de alquiler de habitación en Málaga",
    metaTitle: `Contrato alquiler habitación Málaga — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL}`,
    metaDescription:
      `¿Alquilas una habitación en Málaga? Contrato para particulares en Teatinos, El Palo, centro. Convivencia, gastos y fianza. ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl.`,
    keywords: [
      "contrato alquiler habitacion malaga",
      "alquilar habitacion malaga contrato",
      "contrato piso compartido malaga",
      "contrato habitacion teatinos",
      "alquiler habitacion el palo contrato",
      "modelo contrato habitacion malaga",
    ],
    heroBullets: HERO_BULLETS_DEFAULT,
    finalCtaLead: "Contrata tu contrato de habitación en Málaga — gestor por teléfono o WhatsApp",
    testimonialsTitle: "Particulares que tramitaron su contrato de habitación en Málaga",
    testimonials: [
      {
        quote:
          "Alquilaba tres habitaciones en Teatinos sin reparto de gastos claro. El gestor llamó antes de cobrar y dejó luz, internet y preaviso por escrito.",
        author: "Rosa P.",
        role: "Propietaria — piso compartido en Teatinos",
      },
      {
        quote:
          "Entré en un piso en El Palo en verano sin contrato. Livendia redactó uno con duración de temporada, fianza y normas de convivencia.",
        author: "Andrés C.",
        role: "Inquilino — habitación en El Palo",
      },
      {
        quote:
          "El propietario en el centro tenía un PDF genérico de internet. El gestor lo adaptó a habitación en piso compartido y lo revisamos por WhatsApp.",
        author: "Nuria B.",
        role: "Inquilina — habitación en Centro",
      },
      {
        quote:
          "Compartía piso con dos personas en Ciudad Jardín y necesitábamos inventario. Lo tuvimos listo en 48 horas tras enviar la documentación.",
        author: "Iván D.",
        role: "Inquilino — habitación en La Malagueta",
      },
    ],
  },
  {
    slug: "sevilla",
    city: "Sevilla",
    schemaAdministrativeArea: "Andalucía",
    heroBadge: "Piso compartido · Sevilla",
    heroH1: "Contrato de alquiler de habitación en Sevilla",
    metaTitle: `Contrato alquiler habitación Sevilla — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL}`,
    metaDescription:
      `¿Alquilas una habitación en Sevilla? Contrato para particulares en Nervión, Triana, Los Remedios. Convivencia, gastos y fianza. ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl.`,
    keywords: [
      "contrato alquiler habitacion sevilla",
      "alquilar habitacion sevilla contrato",
      "contrato piso compartido sevilla",
      "contrato habitacion nervion",
      "alquiler habitacion triana contrato",
      "modelo contrato habitacion sevilla",
      "contrato habitacion macarena",
    ],
    heroBullets: HERO_BULLETS_DEFAULT,
    finalCtaLead: "Contrata tu contrato de habitación en Sevilla — asesoramiento del gestor incluido",
    testimonialsTitle: "Particulares que tramitaron su contrato de habitación en Sevilla",
    testimonials: [
      {
        quote:
          "Alquilaba habitaciones en Nervión a universitarios sin cláusula de curso. El gestor fijó preaviso de junio y reparto de luz con aire acondicionado.",
        author: "Isabel N.",
        role: "Propietaria — habitaciones en Nervión",
      },
      {
        quote:
          "Entré en un piso de Triana sin contrato. Livendia redactó normas de cocina y visitas; el propietario y yo firmamos tranquilos.",
        author: "Francisco J.",
        role: "Inquilino — habitación en Triana",
      },
      {
        quote:
          "Compartía piso en Los Remedios y el arrendador no tenía plantilla. El gestor lo tramitó por teléfono con fianza e inventario en dos días.",
        author: "Beatriz A.",
        role: "Inquilina — habitación en Los Remedios",
      },
      {
        quote:
          "Necesitaba contrato antes de pagar depósito en Reina Mercedes. Lo recibí en 48 horas con gastos y duración de curso claros.",
        author: "Hugo S.",
        role: "Inquilino — zona universitaria",
      },
    ],
  },
  {
    slug: "bilbao",
    city: "Bilbao",
    schemaAdministrativeArea: "País Vasco",
    heroBadge: "Piso compartido · Bilbao",
    heroH1: "Contrato de alquiler de habitación en Bilbao",
    metaTitle: `Contrato alquiler habitación Bilbao — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL}`,
    metaDescription:
      `¿Alquilas una habitación en Bilbao? Contrato para particulares en Deusto, Indautxu, Casco Viejo. Convivencia, gastos y fianza. ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl.`,
    keywords: [
      "contrato alquiler habitacion bilbao",
      "alquilar habitacion bilbao contrato",
      "contrato piso compartido bilbao",
      "contrato habitacion deusto",
      "alquiler habitacion indautxu contrato",
      "modelo contrato habitacion bilbao",
    ],
    heroBullets: HERO_BULLETS_DEFAULT,
    finalCtaLead: "Contrata tu contrato de habitación en Bilbao — listo en 48-72 h",
    testimonialsTitle: "Particulares que tramitaron su contrato de habitación en Bilbao",
    testimonials: [
      {
        quote:
          "Alquilaba dos habitaciones en Deusto sin contrato de curso. El gestor nos llamó, fijó preaviso y reparto de calefacción — clave en invierno.",
        author: "Maite U.",
        role: "Propietaria — habitaciones en Deusto",
      },
      {
        quote:
          "Entré en un piso de Indautxu sin documento escrito. Livendia redactó normas de convivencia y me lo explicaron por WhatsApp línea a línea.",
        author: "Jon I.",
        role: "Inquilino — habitación en Indautxu",
      },
      {
        quote:
          "Compartía piso en Santutxu con tres personas y no había reglas de limpieza. El gestor lo dejó todo por escrito en 48 horas.",
        author: "Ane Z.",
        role: "Inquilina — habitación en Rekalde",
      },
      {
        quote:
          "El propietario en el Casco Viejo tenía un borrador de piso entero. Livendia lo adaptó a habitación en piso compartido sin problema.",
        author: "Markel O.",
        role: "Inquilino — Casco Viejo",
      },
    ],
  },
];
