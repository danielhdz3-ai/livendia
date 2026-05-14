/**
 * URL pública sin barra final (Stripe, SEO, enlaces absolutos).
 * Prioridad: `NEXT_PUBLIC_APP_URL` → preview en Vercel → dev local → dominio oficial.
 */

function stripTrailingSlash(url: string) {
  return url.replace(/\/$/, "");
}

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (explicit) return stripTrailingSlash(explicit);

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL?.trim()) {
    const host = process.env.VERCEL_URL.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }

  return "https://livendia.com";
}
