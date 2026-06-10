import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { CONTRATO_ALQUILER_HABITACION_PRICE_LABEL } from "@/lib/catalog.public";
import {
  getHabitacionLocalSeoContent,
  type HabitacionLocalSeoContent,
} from "@/lib/contrato-alquiler-habitacion-local-seo-content";

export const CONTRATO_ALQUILER_HABITACION_LOCAL_BASE = "/servicios/contrato-alquiler-habitacion";

export const CONTRATO_ALQUILER_HABITACION_LOCAL_PUBLISHED_SLUGS: readonly string[] = ["barcelona"];

export type ContratoAlquilerHabitacionLocalLandingConfig = {
  slug: string;
  path: string;
  city: string;
  schemaAdministrativeArea: string;
  finalCtaLead: string;
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

export const CONTRATO_ALQUILER_HABITACION_LOCAL_CITIES: ContratoAlquilerHabitacionLocalCityDefinition[] = [
  {
    slug: "barcelona",
    city: "Barcelona",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Piso compartido · Barcelona",
    heroH1: "Contrato de alquiler de habitación en Barcelona",
    metaTitle: `Contrato alquiler habitación Barcelona — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} | Livendia`,
    metaDescription:
      "¿Alquilas una habitación en Barcelona? Contrato profesional para piso compartido: convivencia, gastos y fianza. Eixample, Gràcia, Poblenou. 120 € IVA incl. Entrega 48-72 h.",
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
    heroBullets: [
      "Normas de convivencia y zonas comunes",
      "Gastos, fianza e inventario de la habitación",
      "No es plantilla LAU de piso entero",
      "Entrega en 48-72 h laborables",
    ],
    finalCtaLead: "Contrata tu contrato de habitación en Barcelona — listo en 48-72 h",
  },
];
