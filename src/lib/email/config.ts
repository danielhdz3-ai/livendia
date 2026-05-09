export function getAppUrl() {
  return (process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000").replace(/\/$/, "");
}

export function getResendFrom() {
  return process.env.RESEND_FROM ?? "Livendia <onboarding@resend.dev>";
}

export function getAdminNotifyEmail() {
  return process.env.ADMIN_NOTIFY_EMAIL ?? "info@livendia.com";
}
