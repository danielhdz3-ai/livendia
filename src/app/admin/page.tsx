import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  Users,
  ShoppingCart,
  TrendingUp,
  Clock,
  FileText,
  Euro,
  ArrowUpRight,
} from "lucide-react";

export const metadata = { title: { absolute: "Dashboard — Livendia Admin" } };

export default async function AdminDashboardPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/admin");

  const { data: me } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (me?.role !== "admin") redirect("/dashboard");

  // Stats generales
  const { count: totalClients } = await supabase
    .from("profiles")
    .select("*", { count: "exact", head: true })
    .eq("role", "client");

  const { count: totalOrders } = await supabase
    .from("orders")
    .select("*", { count: "exact", head: true });

  const { count: activeOrders } = await supabase
    .from("orders")
    .select("*", { count: "exact", head: true })
    .in("status", ["paid", "pending_docs", "in_review", "in_progress"]);

  const { count: completedOrders } = await supabase
    .from("orders")
    .select("*", { count: "exact", head: true })
    .eq("status", "completed");

  // Ingresos totales
  const { data: ordersData } = await supabase
    .from("orders")
    .select("total_cents, created_at")
    .eq("status", "completed");

  const totalRevenue = ordersData?.reduce((sum, o) => sum + (o.total_cents || 0), 0) || 0;
  
  // Ingresos del mes actual
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
  const { data: monthOrders } = await supabase
    .from("orders")
    .select("total_cents")
    .eq("status", "completed")
    .gte("created_at", startOfMonth);

  const monthRevenue = monthOrders?.reduce((sum, o) => sum + (o.total_cents || 0), 0) || 0;

  // Servicios más contratados
  const { data: topServices } = await supabase
    .from("orders")
    .select("service_id, services(name)")
    .eq("status", "completed");

  const serviceCounts: Record<string, { name: string; count: number }> = {};
  topServices?.forEach((order) => {
    const svc = order.services;
    const name = Array.isArray(svc) ? svc[0]?.name : (svc as { name?: string } | null)?.name;
    if (name) {
      if (!serviceCounts[name]) {
        serviceCounts[name] = { name, count: 0 };
      }
      serviceCounts[name].count++;
    }
  });

  const topServicesList = Object.values(serviceCounts)
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // Actividad reciente - últimos pedidos
  const { data: recentOrders } = await supabase
    .from("orders")
    .select("id, status, created_at, total_cents, services(name), profiles(full_name, email)")
    .order("created_at", { ascending: false })
    .limit(8);

  // Nuevos clientes (últimos 7 días)
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const { count: newClientsWeek } = await supabase
    .from("profiles")
    .select("*", { count: "exact", head: true })
    .eq("role", "client")
    .gte("created_at", sevenDaysAgo);

  const statusLabel: Record<string, string> = {
    pending_payment: "Pago pendiente",
    paid: "Pagado",
    pending_docs: "Falta documentación",
    in_review: "En revisión",
    in_progress: "En curso",
    completed: "Completado",
    cancelled: "Cancelado",
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1E293B]">Dashboard</h1>
        <p className="mt-1 text-sm text-[#64748B]">Resumen general de la plataforma</p>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Clientes */}
        <Link
          href="/admin/clientes"
          className="group rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-lg transition hover:shadow-xl"
        >
          <div className="mb-2 flex items-center justify-between">
            <Users className="h-8 w-8" />
            <ArrowUpRight className="h-5 w-5 opacity-0 transition group-hover:opacity-100" />
          </div>
          <div className="text-3xl font-bold">{totalClients || 0}</div>
          <div className="mt-1 text-sm opacity-90">Total Clientes</div>
          {(newClientsWeek || 0) > 0 && (
            <div className="mt-2 text-xs opacity-75">+{newClientsWeek} esta semana</div>
          )}
        </Link>

        {/* Total Pedidos */}
        <Link
          href="/admin/pedidos"
          className="group rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white shadow-lg transition hover:shadow-xl"
        >
          <div className="mb-2 flex items-center justify-between">
            <ShoppingCart className="h-8 w-8" />
            <ArrowUpRight className="h-5 w-5 opacity-0 transition group-hover:opacity-100" />
          </div>
          <div className="text-3xl font-bold">{totalOrders || 0}</div>
          <div className="mt-1 text-sm opacity-90">Total Pedidos</div>
          <div className="mt-2 text-xs opacity-75">{completedOrders || 0} completados</div>
        </Link>

        {/* Pedidos Activos */}
        <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 p-6 text-white shadow-lg">
          <div className="mb-2 flex items-center justify-between">
            <Clock className="h-8 w-8" />
          </div>
          <div className="text-3xl font-bold">{activeOrders || 0}</div>
          <div className="mt-1 text-sm opacity-90">Pedidos Activos</div>
          <div className="mt-2 text-xs opacity-75">Requieren atención</div>
        </div>

        {/* Ingresos del Mes */}
        <div className="rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-white shadow-lg">
          <div className="mb-2 flex items-center justify-between">
            <Euro className="h-8 w-8" />
          </div>
          <div className="text-3xl font-bold">{(monthRevenue / 100).toFixed(2)} €</div>
          <div className="mt-1 text-sm opacity-90">Ingresos del Mes</div>
          <div className="mt-2 text-xs opacity-75">Total: {(totalRevenue / 100).toFixed(2)} €</div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Actividad Reciente */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#1E293B]">Actividad Reciente</h2>
              <Link
                href="/admin/pedidos"
                className="text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
              >
                Ver todos →
              </Link>
            </div>

            {!recentOrders?.length ? (
              <p className="py-8 text-center text-sm text-[#64748B]">No hay actividad reciente</p>
            ) : (
              <div className="space-y-3">
                {recentOrders.map((order) => {
                  const svc = order.services;
                  const serviceName = Array.isArray(svc) ? svc[0]?.name : (svc as { name?: string } | null)?.name;
                  const prof = order.profiles;
                  const clientName = Array.isArray(prof)
                    ? prof[0]?.full_name
                    : (prof as { full_name?: string } | null)?.full_name;

                  return (
                    <Link
                      key={order.id}
                      href={`/admin/pedidos/${order.id}`}
                      className="flex items-start justify-between rounded-xl border border-slate-200 p-4 transition hover:border-[#1A4FBF] hover:bg-blue-50"
                    >
                      <div className="flex-1">
                        <div className="font-semibold text-[#1E293B]">{serviceName || "Servicio"}</div>
                        <div className="mt-1 text-sm text-[#64748B]">{clientName || "Cliente"}</div>
                        <div className="mt-1 text-xs text-[#94a3b8]">
                          {new Date(order.created_at).toLocaleString("es-ES")}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-[#1E293B]">
                          {((order.total_cents || 0) / 100).toFixed(2)} €
                        </div>
                        <div className="mt-1">
                          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                            {statusLabel[order.status] || order.status}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar - Servicios más contratados */}
        <div className="space-y-6">
          {/* Top Servicios */}
          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <h2 className="mb-4 text-lg font-bold text-[#1E293B]">Servicios Más Contratados</h2>
            {!topServicesList.length ? (
              <p className="text-sm text-[#64748B]">No hay datos disponibles</p>
            ) : (
              <div className="space-y-3">
                {topServicesList.map((service, idx) => (
                  <div key={service.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-[#1A4FBF]">
                        {idx + 1}
                      </div>
                      <div className="text-sm font-medium text-[#1E293B]">{service.name}</div>
                    </div>
                    <div className="text-sm font-bold text-[#1A4FBF]">{service.count}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Accesos rápidos */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 p-6 ring-1 ring-slate-200">
            <h2 className="mb-4 text-lg font-bold text-[#1E293B]">Accesos Rápidos</h2>
            <div className="space-y-2">
              <Link
                href="/admin/clientes"
                className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-slate-200 transition hover:shadow"
              >
                <Users className="h-5 w-5 text-[#1A4FBF]" />
                <span className="text-sm font-semibold text-[#1E293B]">Ver Clientes</span>
              </Link>
              <Link
                href="/admin/pedidos"
                className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-slate-200 transition hover:shadow"
              >
                <FileText className="h-5 w-5 text-[#1A4FBF]" />
                <span className="text-sm font-semibold text-[#1E293B]">Gestionar Pedidos</span>
              </Link>
              <Link
                href="/admin/alquileres"
                className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-slate-200 transition hover:shadow"
              >
                <TrendingUp className="h-5 w-5 text-[#1A4FBF]" />
                <span className="text-sm font-semibold text-[#1E293B]">Alquileres</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
