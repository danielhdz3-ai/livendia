import Link from "next/link";
import { AdminStatCard } from "@/components/admin/admin-page-header";
import { AdminSalesCalendar } from "@/components/admin/admin-sales-calendar";
import {
  clientName,
  fetchAllPaidOrders,
  fetchClientEmails,
  filterRevenueOrders,
  formatEuros,
  groupOrdersByPaidDate,
  serviceName,
  sumOrderRevenueCents,
  type AdminOrderRow,
} from "@/lib/admin-data";
import { ADMIN_CARD_COMPACT, ORDER_STATUS_LABEL } from "@/lib/admin-ui";
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
      .limit(4),
    supabase
      .from("profiles")
      .select("*", { count: "exact", head: true })
      .eq("role", "client")
      .gte("created_at", new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString()),
  ]);

  const paidOrders = filterRevenueOrders((paidOrdersResult ?? []) as AdminOrderRow[]);
  const clientIds = [...new Set(paidOrders.map((o) => o.client_id))];
  const emailByClient = await fetchClientEmails(clientIds);

  const salesMap = groupOrdersByPaidDate(paidOrders, emailByClient);
  const salesByDate = Object.fromEntries(salesMap);

  const monthRevenue = paidOrders
    .filter((o) => o.paid_at && o.paid_at >= startOfMonth)
    .reduce((sum, o) => sum + (o.total_cents ?? 0), 0);

  const totalRevenue = sumOrderRevenueCents(paidOrders);
  const salesCount = paidOrders.length;

  const serviceCounts: Record<string, number> = {};
  for (const order of paidOrders) {
    const name = serviceName(order);
    serviceCounts[name] = (serviceCounts[name] ?? 0) + 1;
  }
  const topServices = Object.entries(serviceCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return (
    <div className="-m-2 flex h-[calc(100dvh-5.5rem)] flex-col overflow-hidden sm:-m-4">
      <div className="mb-3 shrink-0">
        <h1 className="text-xl font-bold text-[#1E293B] sm:text-2xl">Dashboard</h1>
        <p className="text-xs text-[#64748B]">Resumen general de la plataforma</p>
      </div>

      <div className="mb-3 grid shrink-0 grid-cols-2 gap-2 xl:grid-cols-4">
        <AdminStatCard compact label="Total clientes" value={totalClients ?? 0} hint={`+${newClientsWeek ?? 0} semana`} />
        <AdminStatCard compact label="Ventas" value={salesCount} hint={`${activeOrders ?? 0} activos`} />
        <AdminStatCard compact label="Mes" value={formatEuros(monthRevenue)} hint={`Total ${formatEuros(totalRevenue)}`} />
        <AdminStatCard
          compact
          label="Ticket medio"
          value={salesCount ? formatEuros(Math.round(totalRevenue / salesCount)) : "—"}
        />
      </div>

      <div className="grid min-h-0 flex-1 gap-3 xl:grid-cols-[1fr_15rem]">
        <div className="grid min-h-0 grid-rows-[auto_1fr] gap-3">
          <AdminSalesCalendar compact salesByDate={salesByDate} detailBaseHref="/admin/expedientes" />

          <div className={`${ADMIN_CARD_COMPACT} min-h-0 overflow-hidden`}>
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-sm font-bold text-[#1E293B]">Actividad reciente</h2>
              <Link href="/admin/ventas" className="text-[11px] font-semibold text-[#1A4FBF] hover:underline">
                Ver ventas →
              </Link>
            </div>
            {!recentOrders?.length ? (
              <p className="text-xs text-[#64748B]">No hay actividad reciente</p>
            ) : (
              <ul className="divide-y divide-slate-100">
                {(recentOrders as AdminOrderRow[]).map((order) => (
                  <li key={order.id}>
                    <Link
                      href={`/admin/expedientes/${order.id}`}
                      className="flex items-center justify-between gap-2 py-2 transition hover:bg-slate-50/80"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-xs font-semibold text-[#1E293B]">{serviceName(order)}</p>
                        <p className="truncate text-[11px] text-[#64748B]">{clientName(order)}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-xs font-semibold text-[#1A4FBF]">{formatEuros(order.total_cents)}</p>
                        <p className="text-[10px] text-[#94A3B8]">{ORDER_STATUS_LABEL[order.status] ?? order.status}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <aside className="flex min-h-0 flex-col gap-3">
          <div className={`${ADMIN_CARD_COMPACT} min-h-0 flex-1 overflow-hidden`}>
            <h2 className="text-xs font-bold text-[#1E293B]">Top servicios</h2>
            {!topServices.length ? (
              <p className="mt-2 text-xs text-[#64748B]">Sin datos</p>
            ) : (
              <ul className="mt-2 space-y-1.5">
                {topServices.map(([name, count], idx) => (
                  <li key={name} className="flex items-center justify-between gap-1 text-[11px]">
                    <span className="flex min-w-0 items-center gap-1.5 text-[#475569]">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#EFF6FF] text-[10px] font-bold text-[#1A4FBF]">
                        {idx + 1}
                      </span>
                      <span className="truncate">{name}</span>
                    </span>
                    <span className="shrink-0 font-semibold text-[#1A4FBF]">{count}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={ADMIN_CARD_COMPACT}>
            <h2 className="text-xs font-bold text-[#1E293B]">Accesos rápidos</h2>
            <div className="mt-2 space-y-1">
              {[
                { href: "/admin/expedientes", label: "Expedientes" },
                { href: "/admin/ventas", label: "Ventas" },
                { href: "/admin/documentos", label: "Documentos" },
                { href: "/admin/base-datos", label: "Base de datos" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] font-medium text-[#1E293B] hover:border-[#1A4FBF]/30 hover:bg-[#EFF6FF]/40"
                >
                  {label}
                  <span className="text-[#1A4FBF]">→</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
