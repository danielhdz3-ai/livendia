/**
 * Verificación Cloudflare Turnstile (opcional).
 * Si TURNSTILE_SECRET_KEY no está configurada → no verifica (modo desarrollo).
 */
export async function verifyTurnstileToken(token: string | undefined | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token || typeof token !== "string") return false;

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });

  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}
