export const RENTAL_SERVICE_SLUG = "administracion-alquiler" as const;
export const RENTAL_SERVICE_TEMPORADA_SLUG = "administracion-alquiler-temporada" as const;

/** Slugs de catálogo que abren el panel /dashboard/rental. */
export const RENTAL_ADMIN_SERVICE_SLUGS = new Set<string>([
  RENTAL_SERVICE_SLUG,
  RENTAL_SERVICE_TEMPORADA_SLUG,
]);

export function isRentalAdminServiceSlug(slug: string | null | undefined): boolean {
  return !!slug && RENTAL_ADMIN_SERVICE_SLUGS.has(slug);
}

const ORDER_ACCESS_STATUSES = new Set([
  "paid",
  "pending_docs",
  "in_review",
  "in_progress",
  "completed",
]);

const SUBSCRIPTION_ACCESS_STATUSES = new Set(["active", "trialing", "past_due"]);

export function orderGrantsRentalAccess(
  order: {
    status?: string | null;
    services?:
      | { slug?: string | null }
      | { slug?: string | null }[]
      | null;
  } | null,
): boolean {
  if (!order || !ORDER_ACCESS_STATUSES.has(order.status ?? "")) return false;
  const svc = order.services;
  const row = Array.isArray(svc) ? svc[0] : svc;
  return isRentalAdminServiceSlug(row?.slug);
}

export function subscriptionGrantsRentalAccess(
  status: string | null | undefined,
  currentPeriodEnd?: string | null,
): boolean {
  if (SUBSCRIPTION_ACCESS_STATUSES.has(status ?? "")) return true;
  /** Tras cancelar, Stripe suele mantener acceso hasta el fin del período pagado */
  if (status === "canceled" && currentPeriodEnd) {
    const end = new Date(currentPeriodEnd).getTime();
    return !Number.isNaN(end) && end > Date.now();
  }
  return false;
}
