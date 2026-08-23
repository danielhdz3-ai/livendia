/** Datos de mercado reutilizables en landings locales (alquiler, venta, compra, gestoría). */

export type LocalNeighborhoodDetail = {
  name: string;
  /** Precio orientativo alquiler €/m² mes. */
  rentalPerSqm?: string;
  /** Precio orientativo venta €/m². */
  salePerSqm?: string;
  /** 2-3 frases sobre perfil del barrio y operaciones habituales. */
  note: string;
};

export type LocalPriceSnapshot = {
  rentalAvgPerSqm?: string;
  rentalRangePerSqm?: string;
  saleAvgPerSqm?: string;
  saleRangePerSqm?: string;
  avgSalePrice?: string;
  sourceNote: string;
};

export type LocalCityMarketProfile = {
  slug: string;
  cityLabel: string;
  prices: LocalPriceSnapshot;
  /** Párrafo general sobre el mercado de la ciudad (sin repetir en cada servicio). */
  marketSummary: string;
  neighborhoods: readonly LocalNeighborhoodDetail[];
};

export type LocalLandingServiceKind =
  | "alquiler-lau"
  | "alquiler-temporada"
  | "venta"
  | "compra"
  | "vender-sin-agencia"
  | "gestoria";
