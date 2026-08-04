import { AdminPageHeader, AdminStatCard } from "@/components/admin/admin-page-header";
import { AdminVentasPanel } from "@/components/admin/admin-ventas-panel";
import {
  fetchAllOrders,
  fetchClientEmails,
  groupOrdersByPaidDate,
  type AdminOrderRow,
} from "@/lib/admin-data";
import { formatEuros } from "@/lib/admin-data";
import { requireAdmin } from "@/lib/admin-auth";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata = { title: { absolute: "Ventas — Livendia Admin" } };

export default async function AdminVentasPage() {
  await requireAdmin("/admin/ventas");
  const supabase = await createServerSupabaseClient();

  const [{ data: ordersRaw }, { data: clientsRaw }, { data: servicesRaw }] = await Promise.all([
    fetchAllOrders(supabase),
    supabase.from("profiles").select("id, full_name, phone").eq("role", "client").order("full_name"),
    supabase.from("services").select("id, name, price_cents").order("name"),
  ]);

  const orders = (ordersRaw ?? []) as AdminOrderRow[];
  const clientIds = [...new Set(orders.map((o) => o.client_id))];
  const emailByClient = await fetchClientEmails(clientIds);

  const paidOrders = orders.filter((o) => o.paid_at);
  const salesMap = groupOrdersByPaidDate(paidOrders, emailByClient);
  const salesByDate = Object.fromEntries(salesMap);

  const ventaRows = orders.map((o) => ({
    ...o,
    clientEmail: emailByClient.get(o.client_id) ?? "—",
  }));

  const monthStart = new Date();
  monthStart.setDate(1);
  monthStart.setHours(0, 0, 0, 0);
  const monthTotal = paidOrders
    .filter((o) => o.paid_at && new Date(o.paid_at) >= monthStart)
    .reduce((s, o) => s + (o.total_cents ?? 0), 0);

  const clients = await Promise.all(
    (clientsRaw ?? []).map(async (c) => {
      const email = emailByClient.get(c.id as string);
      const name = (c.full_name as string | null)?.trim();
      return {
        id: c.id as string,
        label: name ? `${name}${email ? ` · ${email}` : ""}` : email ?? c.id.slice(0, 8),
      };
    }),
  );

  return (
    <>
      <AdminPageHeader title="Ventas" subtitle="Seguimiento de ingresos y pedidos" />

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <AdminStatCard label="Ventas pagadas" value={paidOrders.length} />
        <AdminStatCard label="Ingresos del mes" value={formatEuros(monthTotal)} />
        <AdminStatCard
          label="Manuales"
          value={paidOrders.filter((o) => !o.stripe_session_id).length}
          hint="Registradas fuera de Stripe"
        />
      </div>

      <AdminVentasPanel
        orders={ventaRows}
        salesByDate={salesByDate}
        clients={clients}
        services={(servicesRaw ?? []).map((s) => ({
          id: s.id as string,
          name: s.name as string,
          price_cents: s.price_cents as number,
        }))}
      />
    </>
  );
}
