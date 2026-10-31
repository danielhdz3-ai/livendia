import { resolvePostLoginPath } from "@/lib/admin-access";
import {
  applyRentalDashboardLanding,
  hasActiveRentalSubscriptionFromRows,
  orderGrantsRentalAccess,
} from "@/lib/rental-access";
import type { SupabaseClient } from "@supabase/supabase-js";

type RentalOrderRow = Parameters<typeof orderGrantsRentalAccess>[0];

export async function resolveClientLandingPath(
  supabase: SupabaseClient,
  userId: string,
  email: string | null | undefined,
  role: string | null | undefined,
  requestedNext: string,
): Promise<string> {
  const base = resolvePostLoginPath(email, role, requestedNext);
  const [{ data: orders }, { data: subs }] = await Promise.all([
    supabase.from("orders").select("status, services(slug)"),
    supabase
      .from("client_subscriptions")
      .select("status, current_period_end, services(slug)")
      .eq("client_id", userId),
  ]);
  const hasRentalSub = hasActiveRentalSubscriptionFromRows(subs);
  return applyRentalDashboardLanding(base, (orders ?? []) as RentalOrderRow[], hasRentalSub);
}
