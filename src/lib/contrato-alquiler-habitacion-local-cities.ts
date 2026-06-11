import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { CONTRATO_ALQUILER_HABITACION_PRICE_LABEL } from "@/lib/catalog.public";
import {
  getHabitacionLocalSeoContent,
  type HabitacionLocalSeoContent,
} from "@/lib/contrato-alquiler-habitacion-local-seo-content";

export const CONTRATO_ALQUILER_HABITACION_LOCAL_BASE = "/servicios/contrato-alquiler-habitacion";

export const CONTRATO_ALQUILER_HABITACION_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "barcelona",
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
    metaTitle: `Contrato alquiler habitación Barcelona — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} | Livendia`,
    metaDescription:
      "¿Alquilas una habitación en Barcelona? Contrato para particulares en piso compartido: convivencia, gastos y fianza. Eixample, Gràcia, Poblenou. 120 € IVA incl.",
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
    slug: "madrid",
    city: "Madrid",
    schemaAdministrativeArea: "Comunidad de Madrid",
    heroBadge: "Piso compartido · Madrid",
    heroH1: "Contrato de alquiler de habitación en Madrid",
    metaTitle: `Contrato alquiler habitación Madrid — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} | Livendia`,
    metaDescription:
      "¿Alquilas una habitación en Madrid? Contrato para particulares: Chamberí, Moncloa, Tetuán, Lavapiés. Convivencia, gastos y fianza. 120 € IVA incl. Gestor por teléfono.",
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
    metaTitle: `Contrato alquiler habitación Valencia — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} | Livendia`,
    metaDescription:
      "¿Alquilas una habitación en Valencia? Contrato para particulares en Ruzafa, Benimaclet, Ciutat Vella. Convivencia, gastos y fianza. 120 € IVA incl.",
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
    metaTitle: `Contrato alquiler habitación Málaga — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} | Livendia`,
    metaDescription:
      "¿Alquilas una habitación en Málaga? Contrato para particulares en Teatinos, El Palo, centro. Convivencia, gastos y fianza. 120 € IVA incl.",
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
    metaTitle: `Contrato alquiler habitación Sevilla — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} | Livendia`,
    metaDescription:
      "¿Alquilas una habitación en Sevilla? Contrato para particulares en Nervión, Triana, Los Remedios. Convivencia, gastos y fianza. 120 € IVA incl.",
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
    metaTitle: `Contrato alquiler habitación Bilbao — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} | Livendia`,
    metaDescription:
      "¿Alquilas una habitación en Bilbao? Contrato para particulares en Deusto, Indautxu, Casco Viejo. Convivencia, gastos y fianza. 120 € IVA incl.",
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
