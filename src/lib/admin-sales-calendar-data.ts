import type { SupabaseClient } from "@supabase/supabase-js";
import {
  fetchClientEmails,
  filterOrdersForSalesCalendar,
  filterRevenueOrders,
  groupOrdersByPaidDate,
  type AdminOrderRow,
  type SalesDayBucket,
} from "@/lib/admin-data";
import {
  getAdminRentalServiceId,
  mergeRentalAdminDuesIntoSalesCalendar,
  type RentalAdminFeeDueRow,
} from "@/lib/rental-admin-billing";

export async function buildAdminSalesCalendarByDate(
  supabase: SupabaseClient,
  paidOrders: AdminOrderRow[],
): Promise<Record<string, SalesDayBucket>> {
  const revenueOrders = filterRevenueOrders(paidOrders);
  const clientIds = [...new Set(revenueOrders.map((o) => o.client_id))];
  const emailByClient = await fetchClientEmails(clientIds);

  const serviceId = await getAdminRentalServiceId(supabase);
  let dues: RentalAdminFeeDueRow[] = [];
  const linkedOrderIds = new Set<string>();

  if (serviceId) {
    const { data: duesRaw, error: duesErr } = await supabase
      .from("rental_admin_fee_dues")
      .select("id, client_id, service_id, due_date, amount_cents, status, order_id")
      .eq("service_id", serviceId)
      .in("status", ["pending", "paid"]);

    if (!duesErr) {
      dues = (duesRaw ?? []) as RentalAdminFeeDueRow[];
      for (const due of dues) {
        if (due.order_id) linkedOrderIds.add(due.order_id);
      }
    }
  }

  const calendarOrders = filterOrdersForSalesCalendar(revenueOrders, linkedOrderIds);
  const salesMap = groupOrdersByPaidDate(calendarOrders, emailByClient);
  let salesByDate = Object.fromEntries(salesMap);

  if (dues.length > 0) {
    const dueClientIds = [...new Set(dues.map((d) => d.client_id))];
    const dueEmails = await fetchClientEmails(dueClientIds);
    const { data: profiles } = await supabase
      .from("profiles")
      .select("id, full_name")
      .in("id", dueClientIds);

    const metaByClient = new Map<string, { name: string; email: string }>();
    for (const id of dueClientIds) {
      const prof = profiles?.find((p) => p.id === id);
      metaByClient.set(id, {
        name: (prof?.full_name as string | null)?.trim() || "Cliente",
        email: dueEmails.get(id) ?? "—",
      });
    }

    salesByDate = mergeRentalAdminDuesIntoSalesCalendar(salesByDate, dues, metaByClient);
  }

  return salesByDate;
}
