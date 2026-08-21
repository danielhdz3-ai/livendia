import type { SupabaseClient } from "@supabase/supabase-js";
import { subscriptionGrantsRentalAccess, RENTAL_SERVICE_SLUG } from "@/lib/rental-access";

export type RentalAdminClientRow = {
  clientId: string;
  profile: {
    id: string;
    full_name: string | null;
    email: string | null;
    phone: string | null;
  } | null;
  since: string;
  source: "order" | "subscription";
};

export async function fetchRentalAdminClients(
  supabase: SupabaseClient,
  serviceId: string,
): Promise<RentalAdminClientRow[]> {
  const byClient = new Map<string, RentalAdminClientRow>();

  const { data: orders } = await supabase
    .from("orders")
    .select("client_id, created_at, profiles ( id, full_name, email, phone )")
    .eq("service_id", serviceId)
    .in("status", ["paid", "pending_docs", "in_review", "in_progress", "completed"]);

  for (const order of orders ?? []) {
    const clientId = order.client_id as string;
    if (!clientId || byClient.has(clientId)) continue;
    const prof = order.profiles;
    const profile = Array.isArray(prof) ? prof[0] : prof;
    byClient.set(clientId, {
      clientId,
      profile: profile
        ? {
            id: profile.id as string,
            full_name: (profile.full_name as string | null) ?? null,
            email: (profile.email as string | null) ?? null,
            phone: (profile.phone as string | null) ?? null,
          }
        : null,
      since: order.created_at as string,
      source: "order",
    });
  }

  const { data: subs } = await supabase
    .from("client_subscriptions")
    .select("client_id, current_period_end, status, services ( slug ), profiles ( id, full_name, email, phone )")
    .eq("service_id", serviceId);

  for (const sub of subs ?? []) {
    const svc = sub.services;
    const slug = Array.isArray(svc) ? svc[0]?.slug : (svc as { slug?: string } | null)?.slug;
    if (slug !== RENTAL_SERVICE_SLUG) continue;
    if (!subscriptionGrantsRentalAccess(sub.status as string, sub.current_period_end as string | null)) {
      continue;
    }
    const clientId = sub.client_id as string;
    if (!clientId || byClient.has(clientId)) continue;
    const prof = sub.profiles;
    const profile = Array.isArray(prof) ? prof[0] : prof;
    byClient.set(clientId, {
      clientId,
      profile: profile
        ? {
            id: profile.id as string,
            full_name: (profile.full_name as string | null) ?? null,
            email: (profile.email as string | null) ?? null,
            phone: (profile.phone as string | null) ?? null,
          }
        : null,
      since: (sub.current_period_end as string) ?? new Date().toISOString(),
      source: "subscription",
    });
  }

  return [...byClient.values()].sort(
    (a, b) => new Date(b.since).getTime() - new Date(a.since).getTime(),
  );
}

/** Heurística: falta nota simple en inmueble o DNI en inquilino. */
export async function countPendingRentalDocs(
  supabase: SupabaseClient,
  propertyIds: string[],
  tenantIds: string[],
): Promise<number> {
  if (propertyIds.length === 0 && tenantIds.length === 0) return 0;

  let pending = 0;

  if (propertyIds.length > 0) {
    const { data: propDocs } = await supabase
      .from("property_documents")
      .select("property_id, document_type")
      .in("property_id", propertyIds);
    const hasNotaByProperty = new Set(
      (propDocs ?? [])
        .filter((d) => d.document_type === "nota_simple")
        .map((d) => d.property_id as string),
    );
    pending += propertyIds.filter((id) => !hasNotaByProperty.has(id)).length;
  }

  if (tenantIds.length > 0) {
    const { data: tenantDocs } = await supabase
      .from("tenant_documents")
      .select("tenant_id, document_type")
      .in("tenant_id", tenantIds);
    const hasDniByTenant = new Set(
      (tenantDocs ?? []).filter((d) => d.document_type === "dni").map((d) => d.tenant_id as string),
    );
    pending += tenantIds.filter((id) => !hasDniByTenant.has(id)).length;
  }

  return pending;
}
