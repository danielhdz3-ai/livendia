import type { SupabaseClient } from "@supabase/supabase-js";
import type { SalesDayBucket } from "@/lib/admin-data";
import { ADMINISTRACION_ALQUILER_MONTHLY_PRICE_CENTS } from "@/lib/catalog.public";

export type RentalAdminBillingRow = {
  client_id: string;
  service_id: string;
  status: "active" | "suspended";
  billing_method: "transfer" | "stripe";
  monthly_cents: number;
  started_on: string;
  first_period_amount_cents: number | null;
  suspended_at: string | null;
  suspend_reason: string | null;
  notes: string | null;
};

export type RentalAdminFeeDueRow = {
  id: string;
  client_id: string;
  service_id: string;
  due_date: string;
  amount_cents: number;
  status: "pending" | "paid" | "skipped";
  order_id: string | null;
};

const MONTHS_AHEAD = 14;

function monthKeyFromDate(isoDate: string): string {
  return isoDate.slice(0, 7);
}

function dueDateForMonth(year: number, monthIndex: number): string {
  return `${year}-${String(monthIndex + 1).padStart(2, "0")}-01`;
}

export function amountCentsForDueMonth(billing: RentalAdminBillingRow, dueDate: string): number {
  const dueMonth = monthKeyFromDate(dueDate);
  const startMonth = monthKeyFromDate(billing.started_on);
  if (
    dueMonth === startMonth &&
    billing.first_period_amount_cents != null &&
    billing.first_period_amount_cents > 0
  ) {
    return billing.first_period_amount_cents;
  }
  return billing.monthly_cents;
}

export async function getAdminRentalServiceId(supabase: SupabaseClient): Promise<string | null> {
  const { data } = await supabase
    .from("services")
    .select("id")
    .eq("slug", "administracion-alquiler")
    .maybeSingle();
  return (data?.id as string) ?? null;
}

export async function ensureRentalAdminBillingAccount(
  supabase: SupabaseClient,
  input: {
    clientId: string;
    serviceId: string;
    startedOn?: string;
    monthlyCents?: number;
    firstPeriodAmountCents?: number | null;
    billingMethod?: "transfer" | "stripe";
  },
): Promise<RentalAdminBillingRow | null> {
  const { data: existing } = await supabase
    .from("rental_admin_billing")
    .select("*")
    .eq("client_id", input.clientId)
    .maybeSingle();

  if (existing) return existing as RentalAdminBillingRow;

  const { data, error } = await supabase
    .from("rental_admin_billing")
    .insert({
      client_id: input.clientId,
      service_id: input.serviceId,
      status: "active",
      billing_method: input.billingMethod ?? "transfer",
      monthly_cents: input.monthlyCents ?? ADMINISTRACION_ALQUILER_MONTHLY_PRICE_CENTS,
      started_on: input.startedOn ?? new Date().toISOString().slice(0, 10),
      first_period_amount_cents: input.firstPeriodAmountCents ?? null,
    })
    .select("*")
    .single();

  if (error) {
    console.error("ensureRentalAdminBillingAccount:", error.message);
    return null;
  }
  return data as RentalAdminBillingRow;
}

export async function ensureRentalAdminFeeDuesForAccount(
  supabase: SupabaseClient,
  billing: RentalAdminBillingRow,
): Promise<number> {
  if (billing.status === "suspended") return 0;

  const start = new Date(billing.started_on);
  if (Number.isNaN(start.getTime())) return 0;

  const cursor = new Date(start.getFullYear(), start.getMonth(), 1);
  const limit = new Date();
  limit.setMonth(limit.getMonth() + MONTHS_AHEAD);
  limit.setDate(1);

  let created = 0;

  while (cursor <= limit) {
    const dueDate = dueDateForMonth(cursor.getFullYear(), cursor.getMonth());
    const amount = amountCentsForDueMonth(billing, dueDate);

    const { data: existing } = await supabase
      .from("rental_admin_fee_dues")
      .select("id, status")
      .eq("client_id", billing.client_id)
      .eq("service_id", billing.service_id)
      .eq("due_date", dueDate)
      .maybeSingle();

    if (!existing) {
      const { error } = await supabase.from("rental_admin_fee_dues").insert({
        client_id: billing.client_id,
        service_id: billing.service_id,
        due_date: dueDate,
        amount_cents: amount,
        status: "pending",
      });
      if (!error) created++;
    }

    cursor.setMonth(cursor.getMonth() + 1);
  }

  return created;
}

export async function ensureAllRentalAdminFeeDues(supabase: SupabaseClient): Promise<{ accounts: number; created: number }> {
  const { data: accounts } = await supabase
    .from("rental_admin_billing")
    .select("*")
    .eq("status", "active")
    .eq("billing_method", "transfer");

  let created = 0;
  for (const row of accounts ?? []) {
    created += await ensureRentalAdminFeeDuesForAccount(supabase, row as RentalAdminBillingRow);
  }
  return { accounts: accounts?.length ?? 0, created };
}

/** Marca la cuota del mes (día 1) como pagada y enlaza el pedido. */
export async function linkTransferPaymentToFeeDue(
  supabase: SupabaseClient,
  input: {
    clientId: string;
    serviceId: string;
    orderId: string;
    paidAtIso: string;
    totalCents: number;
  },
): Promise<void> {
  const paid = new Date(input.paidAtIso);
  const dueDate = dueDateForMonth(paid.getFullYear(), paid.getMonth());

  await ensureRentalAdminBillingAccount(supabase, {
    clientId: input.clientId,
    serviceId: input.serviceId,
  });

  const { data: billing } = await supabase
    .from("rental_admin_billing")
    .select("*")
    .eq("client_id", input.clientId)
    .maybeSingle();

  if (billing) {
    await ensureRentalAdminFeeDuesForAccount(supabase, billing as RentalAdminBillingRow);
  }

  const { data: due } = await supabase
    .from("rental_admin_fee_dues")
    .select("id, amount_cents")
    .eq("client_id", input.clientId)
    .eq("service_id", input.serviceId)
    .eq("due_date", dueDate)
    .maybeSingle();

  if (due?.id) {
    await supabase
      .from("rental_admin_fee_dues")
      .update({
        status: "paid",
        order_id: input.orderId,
        amount_cents: input.totalCents,
      })
      .eq("id", due.id as string);
    return;
  }

  await supabase.from("rental_admin_fee_dues").insert({
    client_id: input.clientId,
    service_id: input.serviceId,
    due_date: dueDate,
    amount_cents: input.totalCents,
    status: "paid",
    order_id: input.orderId,
  });
}

export async function syncPaidFeeDuesFromOrders(
  supabase: SupabaseClient,
  serviceId: string,
): Promise<number> {
  const { data: orders } = await supabase
    .from("orders")
    .select("id, client_id, total_cents, paid_at")
    .eq("service_id", serviceId)
    .not("paid_at", "is", null)
    .order("paid_at", { ascending: true });

  let linked = 0;
  for (const order of orders ?? []) {
    if (!order.paid_at) continue;
    await linkTransferPaymentToFeeDue(supabase, {
      clientId: order.client_id as string,
      serviceId,
      orderId: order.id as string,
      paidAtIso: order.paid_at as string,
      totalCents: order.total_cents as number,
    });
    linked++;
  }
  return linked;
}

export function mergeRentalAdminDuesIntoSalesCalendar(
  salesByDate: Record<string, SalesDayBucket>,
  dues: RentalAdminFeeDueRow[],
  metaByClient: Map<string, { name: string; email: string }>,
): Record<string, SalesDayBucket> {
  const map = new Map<string, SalesDayBucket>(Object.entries(salesByDate));

  for (const due of dues) {
    if (due.status === "skipped") continue;
    const key = due.due_date;
    const meta = metaByClient.get(due.client_id) ?? { name: "Cliente", email: "—" };
    const bucket =
      map.get(key) ??
      ({
        date: key,
        totalCents: 0,
        orders: [],
      } satisfies SalesDayBucket);

    if (due.status === "paid" && due.order_id) {
      const already = bucket.orders.some((o) => o.id === due.order_id);
      if (already) continue;
    }

    const isPending = due.status === "pending";
    bucket.totalCents += due.amount_cents;
    bucket.orders.push({
      id: due.order_id ?? due.id,
      clientName: meta.name,
      clientEmail: meta.email,
      serviceName: isPending
        ? "Administración alquiler · cuota (día 1, pendiente)"
        : "Administración alquiler · cuota",
      totalCents: due.amount_cents,
      paidAt: `${key}T12:00:00.000Z`,
      status: isPending ? "pending_payment" : "paid",
      isManual: true,
      isPendingDue: isPending,
      detailHref: `/admin/alquileres/${due.client_id}`,
    });
    map.set(key, bucket);
  }

  return Object.fromEntries(map);
}
