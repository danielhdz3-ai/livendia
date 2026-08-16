import Link from "next/link";
import { Search, Users } from "lucide-react";
import { AdminClientAvatar } from "@/components/admin/admin-client-avatar";
import { AdminPageHeader, AdminStatCard } from "@/components/admin/admin-page-header";
import { fetchClientEmails, formatEuros, filterRevenueOrders, type AdminOrderRow } from "@/lib/admin-data";
import { ADMIN_CARD_PAD, ADMIN_MONEY, ADMIN_TABLE_HEAD } from "@/lib/admin-ui";
import { requireAdmin } from "@/lib/admin-auth";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata = { title: { absolute: "Base de datos — Livendia Admin" } };

type OrderRow = {
  client_id: string;
  total_cents: number | null;
  paid_at: string | null;
  status: string;
  services: { slug?: string } | { slug?: string }[] | null;
};

export default async function AdminBaseDatosPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  await requireAdmin("/admin/base-datos");
  const { q } = await searchParams;
  const supabase = await createServerSupabaseClient();

  const { data: ordersRaw } = await supabase
    .from("orders")
    .select("client_id, total_cents, paid_at, status, services ( slug )")
    .not("paid_at", "is", null)
    .neq("status", "cancelled");

  const revenueOrders = filterRevenueOrders((ordersRaw ?? []) as AdminOrderRow[]);
  const salesClientIds = [...new Set(revenueOrders.map((o) => o.client_id))];

  if (!salesClientIds.length) {
    return (
      <>
        <AdminPageHeader title="Base de datos de particulares" subtitle="Clientes reales con venta registrada" />
        <div className={`${ADMIN_CARD_PAD} text-center`}>
          <Users className="mx-auto h-12 w-12 text-[#94A3B8]" />
          <p className="mt-3 text-sm text-[#64748B]">No hay clientes con ventas todavía</p>
        </div>
      </>
    );
  }

  const { data: clients } = await supabase
    .from("profiles")
    .select("id, full_name, phone, created_at")
    .eq("role", "client")
    .in("id", salesClientIds)
    .order("created_at", { ascending: false });

  const emailByClient = await fetchClientEmails(salesClientIds);

  const ordersByClient = new Map<string, OrderRow[]>();
  for (const order of revenueOrders) {
    const list = ordersByClient.get(order.client_id as string) ?? [];
    list.push(order);
    ordersByClient.set(order.client_id as string, list);
  }

  let rows = (clients ?? []).map((client) => {
    const ords = ordersByClient.get(client.id as string) ?? [];
    const totalCents = ords.reduce((s, o) => s + (o.total_cents ?? 0), 0);
    return {
      id: client.id as string,
      fullName: (client.full_name as string | null)?.trim() || "—",
      email: emailByClient.get(client.id as string) ?? "—",
      phone: (client.phone as string | null)?.trim() || "—",
      createdAt: client.created_at as string,
      orderCount: ords.length,
      totalCents,
    };
  });

  const term = q?.trim().toLowerCase();
  if (term) {
    rows = rows.filter(
      (r) => r.fullName.toLowerCase().includes(term) || r.email.toLowerCase().includes(term) || r.phone.includes(term),
    );
  }

  const totalRevenue = rows.reduce((s, r) => s + r.totalCents, 0);

  return (
    <>
      <AdminPageHeader title="Base de datos de particulares" subtitle="Clientes reales con venta registrada" />

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <AdminStatCard label="Clientes reales" value={rows.length} />
        <AdminStatCard label="Total ventas" value={revenueOrders.length} />
        <AdminStatCard label="Ingresos" value={formatEuros(totalRevenue)} />
      </div>

      <form method="get" className={`${ADMIN_CARD_PAD} mb-4`}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />
          <input
            type="search"
            name="q"
            defaultValue={q ?? ""}
            placeholder="Buscar por email, nombre…"
            className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/15"
          />
        </div>
        <p className="mt-2 text-sm text-[#64748B]">
          {rows.length} cliente(s) · <span className={ADMIN_MONEY}>{formatEuros(totalRevenue)}</span>
        </p>
      </form>

      {!rows.length ? (
        <div className={`${ADMIN_CARD_PAD} text-center`}>
          <p className="text-sm text-[#64748B]">No se encontraron registros</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  {["Cliente", "Contacto", "Ventas", "Ingresos", "Registrado", ""].map((h) => (
                    <th key={h || "acc"} className={`px-4 py-3 ${ADMIN_TABLE_HEAD}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <AdminClientAvatar name={row.fullName} />
                        <div>
                          <p className="font-semibold text-[#1E293B]">{row.fullName}</p>
                          <p className="text-xs text-[#94A3B8]">{row.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[#64748B]">{row.phone}</td>
                    <td className="px-4 py-3 text-[#475569]">{row.orderCount}</td>
                    <td className={`px-4 py-3 ${ADMIN_MONEY}`}>{formatEuros(row.totalCents)}</td>
                    <td className="px-4 py-3 text-[#64748B]">
                      {new Date(row.createdAt).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/admin/expedientes/cliente/${row.id}`}
                        className="text-xs font-semibold text-[#1A4FBF] hover:underline"
                      >
                        Ver expediente
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
