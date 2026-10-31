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

type RentalLandingOrder = Parameters<typeof orderGrantsRentalAccess>[0];

/** Clientes solo de administración de alquiler entran directo en /dashboard/rental. */
export function applyRentalDashboardLanding(
  basePath: string,
  orders: RentalLandingOrder[] | null | undefined,
  hasActiveRentalSubscription: boolean,
): string {
  if (basePath !== "/dashboard") return basePath;
  const list = orders ?? [];
  if (list.some((o) => !orderGrantsRentalAccess(o))) return basePath;
  if (hasActiveRentalSubscription) return "/dashboard/rental";
  if (list.length > 0 && list.every((o) => orderGrantsRentalAccess(o))) return "/dashboard/rental";
  return basePath;
}

export function hasActiveRentalSubscriptionFromRows(
  subs:
    | Array<{
        status?: string | null;
        current_period_end?: string | null;
        services?: { slug?: string | null } | { slug?: string | null }[] | null;
      }>
    | null
    | undefined,
): boolean {
  return (subs ?? []).some((row) => {
    const svc = row.services;
    const slug = Array.isArray(svc) ? svc[0]?.slug : svc?.slug;
    return (
      isRentalAdminServiceSlug(slug) &&
      subscriptionGrantsRentalAccess(row.status, row.current_period_end ?? null)
    );
  });
}
