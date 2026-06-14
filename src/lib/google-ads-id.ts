/** ID de conversión Google Ads (gtag AW-). Cuenta livendia. */
export const GOOGLE_ADS_ID_DEFAULT = "AW-18221518655";

export function getGoogleAdsId(): string | undefined {
  const fromEnv = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim();
  if (fromEnv === "off") return undefined;
  if (fromEnv) return fromEnv;
  if (process.env.NODE_ENV === "production") return GOOGLE_ADS_ID_DEFAULT;
  return undefined;
}
