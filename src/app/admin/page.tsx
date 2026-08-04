import Link from "next/link";
import { AdminPageHeader, AdminStatCard } from "@/components/admin/admin-page-header";
import { AdminSalesCalendar } from "@/components/admin/admin-sales-calendar";
import {
  clientName,
  fetchAllPaidOrders,
  fetchClientEmails,
  formatEuros,
  groupOrdersByPaidDate,
  serviceName,
  type AdminOrderRow,
} from "@/lib/admin-data";
import { ADMIN_CARD_PAD, ORDER_STATUS_LABEL } from "@/lib/admin-ui";
import { requireAdmin } from "@/lib/admin-auth";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata = { title: { absolute: "Dashboard — Livendia Admin" } };

export default async function AdminDashboardPage() {
  await requireAdmin("/admin");
  const supabase = await createServerSupabaseClient();

  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

  const [
    { count: totalClients },
    { count: activeOrders },
    { data: paidOrdersResult },
    { data: recentOrders },
    { count: newClientsWeek },
  ] = await Promise.all([
    supabase.from("profiles").select("*", { count: "exact", head: true }).eq("role", "client"),
    supabase
      .from("orders")
      .select("*", { count: "exact", head: true })
      .in("status", ["paid", "pending_docs", "in_review", "in_progress"]),
    fetchAllPaidOrders(supabase),
    supabase
      .from("orders")
      .select(
        "id, client_id, status, created_at, paid_at, total_cents, stripe_session_id, notes, services ( name, slug ), profiles ( full_name, phone )",
      )
      .order("created_at", { ascending: false })
      .limit(6),
    supabase
      .from("profiles")
      .select("*", { count: "exact", head: true })
      .eq("role", "client")
      .gte("created_at", new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString()),
  ]);

  const paidOrders = (paidOrdersResult ?? []) as AdminOrderRow[];
  const clientIds = [...new Set(paidOrders.map((o) => o.client_id))];
  const emailByClient = await fetchClientEmails(clientIds);

  const salesMap = groupOrdersByPaidDate(paidOrders, emailByClient);
  const salesByDate = Object.fromEntries(salesMap);

  const monthRevenue = paidOrders
    .filter((o) => o.paid_at && o.paid_at >= startOfMonth)
    .reduce((sum, o) => sum + (o.total_cents ?? 0), 0);

  const totalRevenue = paidOrders.reduce((sum, o) => sum + (o.total_cents ?? 0), 0);
  const salesCount = paidOrders.length;

  const serviceCounts: Record<string, number> = {};
  for (const order of paidOrders) {
    const name = serviceName(order);
    serviceCounts[name] = (serviceCounts[name] ?? 0) + 1;
  }
  const topServices = Object.entries(serviceCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <>
      <AdminPageHeader title="Dashboard" subtitle="Resumen general de la plataforma" />

      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard label="Total clientes" value={totalClients ?? 0} hint={`+${newClientsWeek ?? 0} esta semana`} />
        <AdminStatCard label="Ventas registradas" value={salesCount} hint={`${activeOrders ?? 0} expedientes activos`} />
        <AdminStatCard label="Ingresos del mes" value={formatEuros(monthRevenue)} hint={`Total: ${formatEuros(totalRevenue)}`} />
        <AdminStatCard
          label="Ticket medio"
          value={salesCount ? formatEuros(Math.round(totalRevenue / salesCount)) : "—"}
          hint="Por venta pagada"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_22rem]">
        <div className="space-y-6">
          <AdminSalesCalendar salesByDate={salesByDate} title="Calendario de ventas" detailBaseHref="/admin/expedientes" />

          <div className={ADMIN_CARD_PAD}>
            <div className="mb-4 flex items-center justify-between gap-2">
              <h2 className="text-lg font-bold text-[#1E293B]">Actividad reciente</h2>
              <Link href="/admin/ventas" className="text-sm font-semibold text-[#1A4FBF] hover:underline">
                Ver ventas →
              </Link>
            </div>
            {!recentOrders?.length ? (
              <p className="py-6 text-center text-sm text-[#64748B]">No hay actividad reciente</p>
            ) : (
              <ul className="divide-y divide-slate-100">
                {(recentOrders as AdminOrderRow[]).map((order) => (
                  <li key={order.id}>
                    <Link
                      href={`/admin/expedientes/${order.id}`}
                      className="flex items-center justify-between gap-3 py-3 transition hover:bg-slate-50/80"
                    >
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-[#1E293B]">{serviceName(order)}</p>
                        <p className="truncate text-sm text-[#64748B]">{clientName(order)}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-sm font-semibold text-[#1A4FBF]">{formatEuros(order.total_cents)}</p>
                        <p className="text-xs text-[#94A3B8]">{ORDER_STATUS_LABEL[order.status] ?? order.status}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <aside className="space-y-6">
          <div className={ADMIN_CARD_PAD}>
            <h2 className="text-sm font-bold text-[#1E293B]">Servicios más contratados</h2>
            {!topServices.length ? (
              <p className="mt-4 text-sm text-[#64748B]">No hay datos disponibles</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {topServices.map(([name, count], idx) => (
                  <li key={name} className="flex items-center justify-between gap-2 text-sm">
                    <span className="flex items-center gap-2 text-[#475569]">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EFF6FF] text-xs font-bold text-[#1A4FBF]">
                        {idx + 1}
                      </span>
                      {name}
                    </span>
                    <span className="font-semibold text-[#1A4FBF]">{count}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={ADMIN_CARD_PAD}>
            <h2 className="text-sm font-bold text-[#1E293B]">Accesos rápidos</h2>
            <div className="mt-3 space-y-2 text-sm">
              {[
                { href: "/admin/expedientes", label: "Expedientes" },
                { href: "/admin/ventas", label: "Ventas" },
                { href: "/admin/documentos", label: "Documentos" },
                { href: "/admin/base-datos", label: "Base de datos" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2.5 font-medium text-[#1E293B] transition hover:border-[#1A4FBF]/30 hover:bg-[#EFF6FF]/40"
                >
                  {label}
                  <span className="text-[#1A4FBF]">→</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
