/**
 * Landings SEO locales: contrato de alquiler por temporada.
 * Rutas: /servicios/contrato-alquiler-temporada-local/[slug]
 */

import { CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL } from "@/lib/catalog.public";
import { enrichWithCityMarketProfile } from "@/lib/attach-local-city-market-profile";
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
  "valencia",
  "sevilla",
  "malaga",
  "zaragoza",
  "asturias",
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
  const merged: ContratoAlquilerTemporadaLocalLandingConfig = {
    ...def,
    ...diff,
    ...(seoContent ? { seoContent } : {}),
    ...(faq ? { faq } : {}),
    slug: def.slug,
    path: localContratoAlquilerTemporadaHref(def.slug),
    adminSlug: def.adminSlug ?? def.slug,
    gestoriaSlug: def.gestoriaSlug ?? def.slug,
  };
  return enrichWithCityMarketProfile(def.slug, "alquiler-temporada", merged) as ContratoAlquilerTemporadaLocalLandingConfig;
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
      `En Madrid capital y alrededores, particulares propietarios e inquilinos usan el alquiler por temporada para oposiciones, desplazamientos laborales, másteres y estancias acotadas — sin pagar comisión de agencia. Livendia redacta el contrato entre particulares fuera del LAU de vivienda habitual desde ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido.`,
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
      `En Barcelona y área metropolitana, particulares alquilan por temporadas concretas: Erasmus, proyectos en el 22@, congresos o teletrabajo por meses — sin intermediarios. Livendia redacta el contrato de temporada entre arrendador e inquilino desde ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido.`,
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
    slug: "valencia",
    city: "Valencia",
    schemaAdministrativeArea: "Comunidad Valenciana",
    heroLead:
      `En Valencia, particulares propietarios e inquilinos necesitan contratos de alquiler por temporada para estudios en la UPV o la UV, prácticas hospitalarias, desplazamientos laborales o estancias de varios meses en Ciutat Vella, Ruzafa o la playa — sin comisión de agencia. Livendia redacta el contrato entre particulares desde ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido.`,
    whyIntro:
      "La Comunidad Valenciana concentra rotación universitaria, teletrabajo estacional y propietarios que alquilan meses concretos. Un LAU de vivienda habitual copiado de internet activa prórrogas que ninguna de las partes quería.",
    howIntro:
      "Cuatro pasos: datos del inmueble y partes, redacción con causa de temporalidad, inventario si procede y cierre antes de firmar — en Eixample valenciano, Benimaclet, Mislata, Burjassot, Paterna o la costa metropolitana.",
    testimonialsTitle: "Particulares en Valencia que redactaron su contrato de temporada con Livendia",
    testimonials: [
      {
        quote:
          "Alquilamos un piso en Ruzafa seis meses a una residente en formación. Livendia dejó por escrito duración, fianza de dos meses y qué incluía el mobiliario. Todo entre particulares, sin agencia.",
        author: "Carmen L.",
        role: "Propietaria, Valencia — Ruzafa",
      },
      {
        quote:
          "Buscábamos contrato por temporada en Benimaclet, no un LAU de cinco años. Explicaron la diferencia y el borrador reflejó suministros y salida como habíamos pactado con el propietario.",
        author: "Marcos T.",
        role: "Inquilino temporal, Valencia",
      },
    ],
    finalCtaLead:
      `Contrata tu contrato de alquiler por temporada en Valencia entre particulares — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido. Entrega en 24-48 h con gestor dedicado.`,
  },
  {
    slug: "sevilla",
    city: "Sevilla",
    schemaAdministrativeArea: "Andalucía",
    heroLead:
      `En Sevilla, particulares alquilan por temporada por estudios en la US o la UPO, prácticas en hospitales, proyectos en Cartuja o estancias laborales de meses en Nervión, Triana o Los Remedios — sin pagar comisión inmobiliaria. Livendia redacta el contrato entre particulares desde ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido.`,
    whyIntro:
      "Andalucía mezcla demanda universitaria, desplazamientos profesionales y propietarios que prefieren alquilar periodos acotados entre particulares. Confundir temporada con LAU habitual o con alquiler turístico genera litigios y sanciones.",
    howIntro:
      "Recogemos motivo de la estancia, redactamos cláusulas de temporada, integramos inventario y resolvemos dudas antes de firmar — en el centro histórico, Nervión, Macarena, Sevilla Este o Dos Hermanas.",
    testimonialsTitle: "Particulares en Sevilla que cerraron su contrato de temporada con Livendia",
    testimonials: [
      {
        quote:
          "Alquilamos un apartamento en Nervión cuatro meses por un proyecto. Livendia documentó fechas, fianza y limpieza de salida. Sin plantilla genérica ni comisión de agencia.",
        author: "Isabel R.",
        role: "Propietaria, Sevilla — Nervión",
      },
      {
        quote:
          "Necesitábamos contrato de temporada en Triana para una estancia de prácticas. El gestor aclaró que no era LAU de larga duración y el texto cuadró con lo pactado.",
        author: "Javier M.",
        role: "Inquilino temporal, Sevilla",
      },
    ],
    finalCtaLead:
      `Contrata tu contrato de alquiler por temporada en Sevilla entre particulares — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido. Pago seguro, panel online e inventario incluido.`,
  },
  {
    slug: "mallorca",
    city: "Palma de Mallorca",
    schemaAdministrativeArea: "Islas Baleares",
    heroLead:
      `En Mallorca, particulares propietarios e inquilinos cierran alquileres por temporada para verano, teletrabajo, estudios o segunda residencia con plazos acotados. Un LAU genérico no encaja: hace falta redacción específica con duración, fianza, suministros e inventario. Livendia redacta el contrato entre particulares desde ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido.`,
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
  {
    slug: "malaga",
    city: "Málaga",
    schemaAdministrativeArea: "Andalucía",
    heroLead:
      `En Málaga capital y Costa del Sol, particulares alquilan por temporada para estudios en la UMA, teletrabajo estacional, desplazamientos laborales o verano en Teatinos, El Palo, Torremolinos o Benalmádena — sin comisión de agencia. Livendia redacta el contrato entre particulares desde ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido.`,
    whyIntro:
      "La Costa del Sol mezcla alquiler residencial temporal, segunda residencia y propietarios que prefieren acuerdos directos entre particulares. Un LAU de larga duración copiado de internet no refleja estancias de meses ni evita prórrogas no deseadas.",
    howIntro:
      "Cuatro pasos: datos del inmueble y partes, redacción con causa de temporalidad, inventario si procede y cierre antes de firmar — en Málaga centro, Teatinos, El Palo, Rincón de la Victoria o municipios de la costa.",
    testimonialsTitle: "Particulares en Málaga que redactaron su contrato de temporada con Livendia",
    testimonials: [
      {
        quote:
          "Alquilamos un piso en Teatinos ocho meses a un estudiante de máster. Livendia dejó duración, fianza y mobiliario por escrito. Entre particulares, sin agencia.",
        author: "Laura P.",
        role: "Propietaria, Málaga — Teatinos",
      },
      {
        quote:
          "Buscábamos contrato de temporada en El Palo, no LAU de cinco años. El borrador reflejó suministros y salida como habíamos pactado.",
        author: "Álvaro S.",
        role: "Inquilino temporal, Málaga",
      },
    ],
    finalCtaLead:
      `Contrata tu contrato de alquiler por temporada en Málaga entre particulares — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido. Entrega en 24-48 h con gestor dedicado.`,
  },
  {
    slug: "zaragoza",
    city: "Zaragoza",
    schemaAdministrativeArea: "Aragón",
    heroLead:
      `En Zaragoza, particulares propietarios e inquilinos cierran alquileres por temporada para estudios en la UNIZAR, prácticas hospitalarias, desplazamientos a PLAZA o proyectos en Delicias, Casco Histórico o Actur — sin pagar comisión inmobiliaria. Livendia redacta el contrato entre particulares desde ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido.`,
    whyIntro:
      "Aragón concentra rotación universitaria, desplazamientos profesionales y propietarios que alquilan meses concretos entre particulares. Confundir temporada contractual con LAU habitual genera litigios al finalizar la estancia.",
    howIntro:
      "Recogemos motivo de la estancia, redactamos cláusulas de temporada, integramos inventario y resolvemos dudas — en Delicias, Actur, Casco Histórico, Valdespartera o comarca zaragozana.",
    testimonialsTitle: "Particulares en Zaragoza que cerraron su contrato de temporada con Livendia",
    testimonials: [
      {
        quote:
          "Alquilamos un piso en Delicias seis meses por un proyecto. Livendia documentó fechas, fianza y limpieza de salida sin plantilla genérica.",
        author: "Marta G.",
        role: "Propietaria, Zaragoza — Delicias",
      },
      {
        quote:
          "Necesitábamos contrato de temporada en Actur para una estancia de prácticas. El gestor aclaró que no era LAU de larga duración.",
        author: "Pablo R.",
        role: "Inquilino temporal, Zaragoza",
      },
    ],
    finalCtaLead:
      `Contrata tu contrato de alquiler por temporada en Zaragoza entre particulares — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido. Pago seguro y panel online.`,
  },
  {
    slug: "asturias",
    city: "Asturias",
    schemaAdministrativeArea: "Principado de Asturias",
    heroLead:
      `En Asturias — Oviedo, Gijón, Avilés, costa o interior — particulares alquilan por temporada para verano, estudios, desplazamientos laborales o segunda residencia con plazos acotados, sin comisión de agencia. Livendia redacta el contrato entre particulares desde ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido.`,
    whyIntro:
      "El Principado mezcla alquiler urbano, costa veraniega y casas rurales compartidas. Las plantillas genéricas no cubren humedad, leña, parking comunitario ni estancias estacionales en la costa.",
    howIntro:
      "Cuatro pasos hasta firmar: datos del inmueble y partes, redacción con causa de temporalidad, inventario y cierre — en Oviedo, Gijón, Avilés, Langreo, costa (Gijón mar, Villaviciosa) o vivienda rural.",
    testimonialsTitle: "Particulares en Asturias que redactaron su contrato de temporada con Livendia",
    testimonials: [
      {
        quote:
          "Alquilamos un piso en Gijón tres meses de verano. Livendia dejó duración, ropa de cama y limpieza de salida por escrito. Todo entre particulares.",
        author: "Sandra V.",
        role: "Propietaria, Gijón — centro",
      },
      {
        quote:
          "Buscábamos contrato de temporada en Oviedo para prácticas, no LAU indefinido. El borrador cuadró con suministros y fianza pactados.",
        author: "Héctor L.",
        role: "Inquilino temporal, Oviedo",
      },
    ],
    finalCtaLead:
      `Contrata tu contrato de alquiler por temporada en Asturias entre particulares — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido. Ideal para propietarios fuera del Principado.`,
  },
];
