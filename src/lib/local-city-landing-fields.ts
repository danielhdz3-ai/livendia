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
};
