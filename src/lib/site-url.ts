/**
 * URL pública sin barra final (Stripe, SEO, enlaces absolutos).
 * En producción debe ser https://livendia.com en `NEXT_PUBLIC_APP_URL`.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`.replace(/\/$/, "");

  return "https://livendia.com";
}
