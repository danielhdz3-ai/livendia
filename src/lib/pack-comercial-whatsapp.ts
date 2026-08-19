import {
  LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL,
  LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL,
  PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH,
  PACK_LAU_ADMIN_LANDING_PATH,
} from "@/lib/catalog.public";
import { getWhatsAppHref } from "@/lib/business-nap";
import { buildCampaignUrl } from "@/lib/utm";

export type PackCommercialWhatsAppVariant = "lau-admin" | "arras-gestion";

export type PackCommercialWhatsAppContext = {
  variant: PackCommercialWhatsAppVariant;
  /** Nombre de ciudad para el mensaje (Madrid, Málaga…). */
  city?: string;
  /** Slug URL para placement analítico (madrid, malaga…). */
  slug?: string;
};

/** Texto pre-rellenado que recibe el comercial en WhatsApp. */
export function getPackCommercialWhatsAppPrefill({
  variant,
  city,
}: PackCommercialWhatsAppContext): string {
  if (variant === "lau-admin") {
    const price = LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL;
    return city
      ? `Hola, estoy viendo el Pack Contrato + Administración (${price}) en ${city} y me gustaría gestionar mi alquiler.`
      : `Hola, estoy viendo el Pack Contrato + Administración (${price}) y me gustaría gestionar mi alquiler.`;
  }

  const price = LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL;
  return city
    ? `Hola, me interesa el Pack Vender sin Comisión (${price}) en ${city} para preparar mis arras y documentación.`
    : `Hola, me interesa el Pack Vender sin Comisión (${price}) para preparar mis arras y documentación.`;
}

/** Añade origen UTM al mensaje si el usuario llegó con campaña (sessionStorage). */
export function appendUtmToWhatsAppMessage(message: string, utm: {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}): string {
  const parts: string[] = [];
  if (utm.utm_source) parts.push(utm.utm_source);
  if (utm.utm_medium) parts.push(utm.utm_medium);
  if (utm.utm_campaign) parts.push(utm.utm_campaign);
  if (parts.length === 0) return message;
  return `${message}\n\n(Origen web: ${parts.join(" · ")})`;
}

export function getPackCommercialWhatsAppPlacement({
  variant,
  slug,
}: Pick<PackCommercialWhatsAppContext, "variant" | "slug">): string {
  const pack = variant === "lau-admin" ? "lau_admin" : "arras_gestion";
  return slug ? `pack_${pack}_${slug}_whatsapp` : `pack_${pack}_whatsapp`;
}

export function getPackCommercialWhatsAppHref(ctx: PackCommercialWhatsAppContext): string {
  return getWhatsAppHref(getPackCommercialWhatsAppPrefill(ctx));
}

export function resolvePackVariantFromPath(path: string): PackCommercialWhatsAppVariant | null {
  if (path.startsWith(PACK_LAU_ADMIN_LANDING_PATH)) return "lau-admin";
  if (path.startsWith(PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH)) return "arras-gestion";
  return null;
}

/** URLs de campaña con UTM para Ads / email (landing del pack). */
export function buildPackCommercialCampaignUrl(
  variant: PackCommercialWhatsAppVariant,
  citySlug?: string,
  source = "google",
  medium = "cpc",
): string {
  const base =
    variant === "lau-admin" ? PACK_LAU_ADMIN_LANDING_PATH : PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH;
  const path = citySlug ? `${base}/${citySlug}` : base;
  const campaign = citySlug
    ? `pack-${variant === "lau-admin" ? "lau-admin" : "arras-gestion"}-${citySlug}`
    : `pack-${variant === "lau-admin" ? "lau-admin" : "arras-gestion"}-nacional`;
  return buildCampaignUrl(path, {
    source,
    medium,
    campaign,
    content: "whatsapp-cta",
  });
}
