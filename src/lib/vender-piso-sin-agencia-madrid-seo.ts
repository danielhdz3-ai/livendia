/** @deprecated Importar desde vender-piso-sin-agencia-local-cities.ts */
export {
  VENDER_PISO_SIN_AGENCIA_MADRID_PATH,
  buildAgencySavingsRows as buildMadridAgencySavingsRows,
  formatEur,
  VENTA_PARTICULAR_TRAMITES as MADRID_VENTA_TRAMITES,
} from "@/lib/vender-piso-sin-agencia-local-cities";

import { getVenderPisoSinAgenciaCity } from "@/lib/vender-piso-sin-agencia-local-cities";

export const MADRID_SAVINGS_SALE_PRICES = [180_000, 220_000, 250_000, 300_000, 350_000, 400_000, 500_000] as const;

const madrid = getVenderPisoSinAgenciaCity("madrid");

export const MADRID_VENTA_FAQ = madrid?.faq ?? [];

export const MADRID_VENTA_METADATA = {
  title: madrid?.metaTitle ?? "Vender piso sin agencia en Madrid",
  description: madrid?.metaDescription ?? "",
};
