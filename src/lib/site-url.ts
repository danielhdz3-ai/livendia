/**
 * URL pública sin barra final (Stripe, SEO, enlaces absolutos).
 * Preview en Vercel → URL temporal; prod nunca debe usar *.vercel.app como canónica.
 */

function stripTrailingSlash(url: string) {
  return url.replace(/\/$/, "");
}

export function getSiteUrl(): string {
  if (process.env.NODE_ENV === "development") {
    const dev = process.env.NEXT_PUBLIC_APP_URL?.trim();
    return stripTrailingSlash(dev ?? "http://localhost:3000");
  }

  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL?.trim()) {
    const host = process.env.VERCEL_URL.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }

  const explicit = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (
    explicit &&
    !/\.vercel\.app\b/i.test(explicit) &&
    !/\.vercel\.sh\b/i.test(explicit)
  ) {
    return stripTrailingSlash(explicit);
  }

  return "https://livendia.com";
}
