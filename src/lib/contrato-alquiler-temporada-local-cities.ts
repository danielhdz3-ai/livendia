/**
 * Landings SEO locales: contrato de alquiler por temporada.
 * Rutas: /servicios/contrato-alquiler-temporada-local/[slug]
 */

import { CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL } from "@/lib/catalog.public";
import { TEMPORADA_LOCAL_DIFFERENTIATION } from "@/lib/contrato-alquiler-temporada-local-differentiation";
import {
  getTemporadaLocalSeoContent,
  type TemporadaLocalSeoContent,
} from "@/lib/contrato-alquiler-temporada-local-seo-content";
import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";

export const CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE = "/servicios/contrato-alquiler-temporada-local";

export const CONTRATO_ALQUILER_TEMPORADA_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "madrid",
  "barcelona",
  "mallorca",
];

export function isContratoAlquilerTemporadaLocalSlugPublished(slug: string): boolean {
  return CONTRATO_ALQUILER_TEMPORADA_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedContratoAlquilerTemporadaLocalCities(): ContratoAlquilerTemporadaLocalCityDefinition[] {
  const pub = new Set(CONTRATO_ALQUILER_TEMPORADA_LOCAL_PUBLISHED_SLUGS);
  return CONTRATO_ALQUILER_TEMPORADA_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

export type ContratoAlquilerTemporadaLocalLandingConfig = {
  slug: string;
  path: string;
  city: string;
  schemaAdministrativeArea: string;
  heroLead: string;
  whyIntro: string;
  howIntro: string;
  testimonialsTitle: string;
  testimonials: { quote: string; author: string; role: string }[];
  finalCtaLead: string;
  faq?: readonly { question: string; answer: string }[];
  seoContent?: TemporadaLocalSeoContent;
  adminSlug?: string;
  gestoriaSlug?: string;
} & LocalCityLandingFields;

export type ContratoAlquilerTemporadaLocalCityDefinition = Omit<
  ContratoAlquilerTemporadaLocalLandingConfig,
  "path"
> & {
  slug: string;
};

export function localContratoAlquilerTemporadaHref(slug: string): string {
  return `${CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE}/${slug}`;
}

export function toContratoAlquilerTemporadaLandingConfig(
  def: ContratoAlquilerTemporadaLocalCityDefinition,
): ContratoAlquilerTemporadaLocalLandingConfig {
  const diff = TEMPORADA_LOCAL_DIFFERENTIATION[def.slug] ?? {};
  const seoContent = getTemporadaLocalSeoContent(def.slug);
  const faq = seoContent?.faq ?? diff.faq ?? def.faq;
  return {
    ...def,
    ...diff,
    ...(seoContent ? { seoContent } : {}),
    ...(faq ? { faq } : {}),
    slug: def.slug,
    path: localContratoAlquilerTemporadaHref(def.slug),
    adminSlug: def.adminSlug ?? def.slug,
    gestoriaSlug: def.gestoriaSlug ?? def.slug,
  };
}

export function getContratoAlquilerTemporadaLocalCity(
  slug: string,
): ContratoAlquilerTemporadaLocalCityDefinition | undefined {
  return CONTRATO_ALQUILER_TEMPORADA_LOCAL_CITIES.find((c) => c.slug === slug);
}

export const CONTRATO_ALQUILER_TEMPORADA_LOCAL_CITIES: ContratoAlquilerTemporadaLocalCityDefinition[] = [
  {
    slug: "madrid",
    city: "Madrid",
    schemaAdministrativeArea: "Comunidad de Madrid",
    heroLead:
      `En Madrid capital y alrededores, el alquiler por temporada cubre oposiciones, desplazamientos a Azca o el CTBA, másteres en IE/IESE y rodajes con plazos cerrados. Livendia redacta el contrato fuera del LAU de vivienda habitual desde ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido.`,
    whyIntro:
      "La Comunidad de Madrid mueve miles de estancias acotadas al año. Un PDF LAU estándar activa prórrogas que no encajan con una oposición o un proyecto de seis meses.",
    howIntro:
      "Cuatro pasos: datos del inmueble y partes, redacción con causa de temporalidad, inventario si procede y cierre antes de firmar — en Chamberí, Salamanca, Vallecas o municipios del cinturón.",
    testimonialsTitle: "",
    testimonials: [],
    finalCtaLead:
      `Contrata ahora tu contrato de temporada en Madrid — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido. Entrega en 24-48 h con gestor dedicado.`,
  },
  {
    slug: "barcelona",
    city: "Barcelona",
    schemaAdministrativeArea: "Cataluña",
    heroLead:
      `En Barcelona y área metropolitana, el alquiler temporal une Erasmus, profesionales del 22@, estancias por MWC o Sónar y teletrabajo por trimestres. Contrato de temporada redactado por gestor desde ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido.`,
    whyIntro:
      "Cataluña mezcla demanda universitaria, tech y turismo de larga estancia. Confundir temporada con LAU habitual o con VUT genera sanciones y litigios.",
    howIntro:
      "Recogemos motivo de la estancia, redactamos cláusulas de temporada, integramos inventario y resolvemos dudas — en Eixample, Gràcia, Poblenou, L'Hospitalet o Badalona.",
    testimonialsTitle: "",
    testimonials: [],
    finalCtaLead:
      `Contrata ahora tu contrato de temporada en Barcelona — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido. Entrega en 24-48 h con gestor dedicado.`,
  },
  {
    slug: "mallorca",
    city: "Palma de Mallorca",
    schemaAdministrativeArea: "Islas Baleares",
    heroLead:
      `En Mallorca el alquiler por temporada concentra estancias de verano, desplazamientos laborales, estudios y segundas residencias con plazos acotados. Un contrato genérico LAU no encaja: hace falta redacción específica fuera del arrendamiento habitual, con duración, prórroga, suministros y entrega de llaves bien cerrados. Livendia redacta o revisa tu contrato de temporada con gestor inmobiliario desde ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido.`,
    whyIntro:
      "Las Baleares mezclan demanda turística, nómadas digitales y propietarios que alquilan meses concretos en Palma, Calvià, Alcúdia o Manacor. Las plantillas copiadas confunden temporada contractual con otros regímenes y dejan lagunas sobre mobiliario, limpieza de salida o depósitos. Adaptamos el texto al uso real acordado y al marco aplicable a arrendamientos temporales.",
    howIntro:
      "Cuatro pasos hasta firmar con seguridad: recogemos datos del inmueble y las partes, redactamos cláusulas de temporada, integramos inventario y resolvemos dudas antes de rubricar — útil tanto en Palma ciudad como en municipios costeros de la isla.",
    testimonialsTitle: "Propietarios e inquilinos en Mallorca que cerraron su contrato de temporada con Livendia",
    testimonials: [
      {
        quote:
          "Alquilamos un piso en Palma de junio a septiembre para un profesional desplazado. Livendia dejó por escrito duración exacta, ropa de cama incluida y qué pasaba si se retrasaba la entrega de llaves. Sin ambigüedades.",
        author: "Patricia M.",
        role: "Propietaria, Palma — Portixol",
      },
      {
        quote:
          "Buscábamos contrato por temporada en zona de Calvià, no LAU de larga duración. Explicaron la diferencia y el borrador reflejó suministros y fianza como habíamos pactado con el propietario.",
        author: "Daniel K.",
        role: "Inquilino temporal, Calvià",
      },
    ],
    finalCtaLead:
      `Contrata tu contrato de alquiler por temporada en Mallorca por ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido. Pago seguro, panel online e inventario incluido en el expediente gestor.`,
  },
];
