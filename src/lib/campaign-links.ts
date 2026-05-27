import { buildCampaignUrl } from "@/lib/utm";

/** URLs listas para Google Ads / redes (copiar en anuncios). */
export const CAMPAIGN_URLS = {
  administracionGoogle: buildCampaignUrl("/servicios/administracion-alquiler", {
    source: "google",
    medium: "cpc",
    campaign: "administracion_alquiler",
    content: "search",
  }),
  administracionPropietarios: buildCampaignUrl("/para-propietarios", {
    source: "google",
    medium: "cpc",
    campaign: "propietarios",
    content: "landing",
  }),
  arrasGoogle: buildCampaignUrl("/servicios/contrato-arras-penitenciales", {
    source: "google",
    medium: "cpc",
    campaign: "contrato_arras",
  }),
  lauGoogle: buildCampaignUrl("/servicios/contrato-alquiler-lau", {
    source: "google",
    medium: "cpc",
    campaign: "contrato_lau",
  }),
  gbpAdministracion: buildCampaignUrl("/servicios/administracion-alquiler", {
    source: "google",
    medium: "organic",
    campaign: "google_business_profile",
  }),
} as const;
