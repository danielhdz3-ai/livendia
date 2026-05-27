/**
 * Landings SEO locales: contrato de alquiler por temporada.
 * Rutas: /servicios/contrato-alquiler-temporada-local/[slug]
 */

export const CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE = "/servicios/contrato-alquiler-temporada-local";

export const CONTRATO_ALQUILER_TEMPORADA_LOCAL_PUBLISHED_SLUGS: readonly string[] = ["mallorca"];

export function isContratoAlquilerTemporadaLocalSlugPublished(slug: string): boolean {
  return CONTRATO_ALQUILER_TEMPORADA_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedContratoAlquilerTemporadaLocalCities(): ContratoAlquilerTemporadaLocalCityDefinition[] {
  const pub = new Set(CONTRATO_ALQUILER_TEMPORADA_LOCAL_PUBLISHED_SLUGS);
  return CONTRATO_ALQUILER_TEMPORADA_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

export type ContratoAlquilerTemporadaLocalLandingConfig = {
  path: string;
  city: string;
  schemaAdministrativeArea: string;
  heroLead: string;
  whyIntro: string;
  howIntro: string;
  testimonialsTitle: string;
  testimonials: { quote: string; author: string; role: string }[];
  finalCtaLead: string;
};

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
  return {
    ...def,
    path: localContratoAlquilerTemporadaHref(def.slug),
  };
}

export function getContratoAlquilerTemporadaLocalCity(
  slug: string,
): ContratoAlquilerTemporadaLocalCityDefinition | undefined {
  return CONTRATO_ALQUILER_TEMPORADA_LOCAL_CITIES.find((c) => c.slug === slug);
}

export const CONTRATO_ALQUILER_TEMPORADA_LOCAL_CITIES: ContratoAlquilerTemporadaLocalCityDefinition[] = [
  {
    slug: "mallorca",
    city: "Palma de Mallorca",
    schemaAdministrativeArea: "Islas Baleares",
    heroLead:
      "En Mallorca el alquiler por temporada concentra estancias de verano, desplazamientos laborales, estudios y segundas residencias con plazos acotados. Un contrato genérico LAU no encaja: hace falta redacción específica fuera del arrendamiento habitual, con duración, prórroga, suministros y entrega de llaves bien cerrados. Livendia redacta o revisa tu contrato de temporada con gestor inmobiliario desde 120 € IVA incluido.",
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
      "Contrata tu contrato de alquiler por temporada en Mallorca por 120 € IVA incluido. Pago seguro, panel online e inventario incluido en el expediente gestor.",
  },
];
