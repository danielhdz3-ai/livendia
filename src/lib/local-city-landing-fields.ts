/** Bloques opcionales para que cada landing local sea única (SEO + conversión). */

export type LocalCityBenefit = {
  title: string;
  description: string;
};

export type LocalCityLandingFields = {
  /** Meta keywords (no indexan solas, pero orientan copy y rich snippets). */
  keywords?: readonly string[];
  heroBadge?: string;
  heroH1?: string;
  metaTitle?: string;
  metaDescription?: string;
  /** Viñetas bajo el precio en el hero — distintas por ciudad. */
  heroBullets?: readonly string[];
  /** H2 de la sección “por qué” — no repetir fórmula genérica. */
  whyTitle?: string;
  /** Subtítulo bajo el H2 (sustituye la frase genérica del componente). */
  whySubtitle?: string;
  /** Párrafo de zonas / barrios / municipios atendidos. */
  localZonesHeading?: string;
  localZones?: string;
  /** Imagen del hero (ruta bajo /images). */
  heroImage?: string;
  /** Beneficios Livendia redactados para el mercado local (sustituyen la cuadrícula genérica). */
  localBenefits?: readonly LocalCityBenefit[];
  /** H2 del CTA final — distinto por ciudad. */
  finalCtaTitle?: string;
  /** Párrafo único sobre el mercado local (precios, perfiles, barrios) — reduce duplicidad percibida. */
  localMarketInsight?: string;
  /** Snapshot de precios €/m² y fuente. */
  localPriceSnapshot?: import("@/lib/local-city-market-profile-types").LocalPriceSnapshot;
  /** Barrios con descripción y precio orientativo. */
  localNeighborhoods?: readonly import("@/lib/local-city-market-profile-types").LocalNeighborhoodDetail[];
  /** Notas sobre cómo aplica el servicio Livendia en la ciudad. */
  localServiceNotes?: readonly { title: string; body: string }[];
  /** FAQ local adicional (se concatena con la del bloque base al hacer merge). */
  faq?: readonly { question: string; answer: string }[];
};

/** Props para la sección de contexto local en landings SEO. */
export type LocalCityContextSectionProps = {
  city: string;
  heading?: string;
  insight?: string;
  priceSnapshot?: import("@/lib/local-city-market-profile-types").LocalPriceSnapshot;
  neighborhoods?: readonly import("@/lib/local-city-market-profile-types").LocalNeighborhoodDetail[];
  serviceNotes?: readonly { title: string; body: string }[];
  serviceNotesHeading?: string;
};
