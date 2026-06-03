/** ID de medición GA4 — flujo «Web Livendia» (https://livendia.com). */
export const GA_MEASUREMENT_ID_DEFAULT = "G-J2SZJ5V6H6";

export function getGaMeasurementId(): string | undefined {
  const fromEnv = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  if (fromEnv === "off") return undefined;
  if (fromEnv) return fromEnv;
  if (process.env.NODE_ENV === "production") return GA_MEASUREMENT_ID_DEFAULT;
  return undefined;
}
