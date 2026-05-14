/**
 * URL pública sin barra final (Stripe, SEO, enlaces absolutos).
 * Prioridad: `NEXT_PUBLIC_APP_URL` → prod Vercel = dominio público → preview Vercel → local.
 */

function stripTrailingSlash(url: string) {
  return url.replace(/\/$/, "");
}

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (explicit) return stripTrailingSlash(explicit);

  // Despliegue de producción en Vercel: nunca usar *.vercel.app en sitemap/robots si falta APP_URL.
  // Así Search Console (`livendia.com`) coincide con las URLs declaradas.
  if (process.env.VERCEL_ENV === "production") {
    return "https://livendia.com";
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }

  return "http://localhost:3000";
}
