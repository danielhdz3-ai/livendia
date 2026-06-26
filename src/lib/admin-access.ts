/** Cuenta principal del panel /admin — redirección automática tras login. */
export const ADMIN_PANEL_EMAIL = "admin.livendia@gmail.com";

export function usesAdminPanel(email: string | null | undefined): boolean {
  return email?.toLowerCase() === ADMIN_PANEL_EMAIL.toLowerCase();
}

export function shouldRedirectToAdminPanel(
  email: string | null | undefined,
  role: string | null | undefined,
): boolean {
  return usesAdminPanel(email) && role === "admin";
}

export function resolvePostLoginPath(
  email: string | null | undefined,
  role: string | null | undefined,
  requestedNext: string,
): string {
  if (shouldRedirectToAdminPanel(email, role)) {
    return "/admin";
  }
  return requestedNext;
}
