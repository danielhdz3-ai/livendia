export function getAppUrl() {
  return (process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000").replace(/\/$/, "");
}

export function getResendFrom() {
  return process.env.RESEND_FROM ?? "Livendia <onboarding@resend.dev>";
}

const DEFAULT_ADMIN_NOTIFY = "info@livendia.com";

/** Siempre incluido además de ADMIN_NOTIFY_EMAIL (pagos, incidencias, contacto). */
export const ADMIN_NOTIFY_GMAIL = "admin.livendia@gmail.com";

/** Lista de destinatarios admin (sin duplicados). */
export function getAdminNotifyEmails(): string[] {
  const raw = process.env.ADMIN_NOTIFY_EMAIL?.trim();
  const parsed = raw
    ? raw.split(/[,;]/).map((e) => e.trim()).filter(Boolean)
    : [DEFAULT_ADMIN_NOTIFY];

  const out: string[] = [];
  const seen = new Set<string>();
  for (const email of [...parsed, ADMIN_NOTIFY_GMAIL]) {
    const key = email.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(email);
  }
  return out;
}

/** Primer destinatario admin (compatibilidad). */
export function getAdminNotifyEmail() {
  return getAdminNotifyEmails()[0] ?? DEFAULT_ADMIN_NOTIFY;
}
