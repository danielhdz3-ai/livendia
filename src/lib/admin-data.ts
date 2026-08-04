import type { SupabaseClient } from "@supabase/supabase-js";
import { createServiceRoleClient } from "@/lib/supabase/service";

export type AdminOrderRow = {
  id: string;
  client_id: string;
  status: string;
  created_at: string;
  paid_at: string | null;
  total_cents: number | null;
  stripe_session_id: string | null;
  notes: string | null;
  services: { name?: string; slug?: string } | { name?: string; slug?: string }[] | null;
  profiles: { full_name?: string; phone?: string } | { full_name?: string; phone?: string }[] | null;
};

export function serviceName(order: AdminOrderRow): string {
  const svc = order.services;
  return (Array.isArray(svc) ? svc[0]?.name : svc?.name) ?? "Servicio";
}

export function clientName(order: AdminOrderRow): string {
  const pr = order.profiles;
  return (Array.isArray(pr) ? pr[0]?.full_name : pr?.full_name)?.trim() ?? "—";
}

export function clientPhone(order: AdminOrderRow): string {
  const pr = order.profiles;
  return (Array.isArray(pr) ? pr[0]?.phone : pr?.phone)?.trim() ?? "—";
}

export function isManualOrder(order: AdminOrderRow): boolean {
  return !order.stripe_session_id;
}

export function formatEuros(cents: number | null | undefined): string {
  if (cents == null) return "—";
  return `${(cents / 100).toFixed(2)} €`;
}

export function dateKey(iso: string): string {
  return iso.slice(0, 10);
}

export type SalesDayBucket = {
  date: string;
  totalCents: number;
  orders: {
    id: string;
    clientName: string;
    clientEmail: string;
    serviceName: string;
    totalCents: number;
    paidAt: string;
    status: string;
    isManual: boolean;
  }[];
};

export function groupOrdersByPaidDate(
  orders: AdminOrderRow[],
  emailByClient: Map<string, string>,
): Map<string, SalesDayBucket> {
  const map = new Map<string, SalesDayBucket>();

  for (const order of orders) {
    if (!order.paid_at || order.total_cents == null) continue;
    const key = dateKey(order.paid_at);
    const bucket =
      map.get(key) ??
      ({
        date: key,
        totalCents: 0,
        orders: [],
      } satisfies SalesDayBucket);

    bucket.totalCents += order.total_cents;
    bucket.orders.push({
      id: order.id,
      clientName: clientName(order),
      clientEmail: emailByClient.get(order.client_id) ?? "—",
      serviceName: serviceName(order),
      totalCents: order.total_cents,
      paidAt: order.paid_at,
      status: order.status,
      isManual: isManualOrder(order),
    });
    map.set(key, bucket);
  }

  return map;
}

export async function fetchClientEmails(userIds: string[]): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  if (!userIds.length) return map;

  const admin = createServiceRoleClient();
  const unique = [...new Set(userIds)];

  await Promise.all(
    unique.map(async (id) => {
      try {
        const { data, error } = await admin.auth.admin.getUserById(id);
        if (!error && data.user?.email) map.set(id, data.user.email);
      } catch {
        /* omit */
      }
    }),
  );

  return map;
}

export async function fetchAllPaidOrders(supabase: SupabaseClient) {
  return supabase
    .from("orders")
    .select(
      "id, client_id, status, created_at, paid_at, total_cents, stripe_session_id, notes, services ( name, slug ), profiles ( full_name, phone )",
    )
    .not("paid_at", "is", null)
    .order("paid_at", { ascending: false });
}

export async function fetchAllOrders(supabase: SupabaseClient) {
  return supabase
    .from("orders")
    .select(
      "id, client_id, status, created_at, paid_at, total_cents, stripe_session_id, notes, services ( name, slug ), profiles ( full_name, phone )",
    )
    .order("created_at", { ascending: false });
}
