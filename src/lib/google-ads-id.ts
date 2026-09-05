/** ID de conversión Google Ads (gtag AW-). Cuenta livendia. */
export const GOOGLE_ADS_ID_DEFAULT = "AW-18221518655";

/** Acciones de conversión Google Ads (clics WhatsApp / teléfono). */
export const GOOGLE_ADS_CONVERSION_WHATSAPP = `${GOOGLE_ADS_ID_DEFAULT}/FC9HCK6jhO8cEL-e2fBD`;
export const GOOGLE_ADS_CONVERSION_PHONE = `${GOOGLE_ADS_ID_DEFAULT}/iUwRCLGjhO8cEL-e2fBD`;

export function getGoogleAdsId(): string | undefined {
  const fromEnv = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim();
  if (fromEnv === "off") return undefined;
  if (fromEnv) return fromEnv;
  if (process.env.NODE_ENV === "production") return GOOGLE_ADS_ID_DEFAULT;
  return undefined;
}
