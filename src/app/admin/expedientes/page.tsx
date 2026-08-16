import Link from "next/link";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { AdminClientAvatar } from "@/components/admin/admin-client-avatar";
import { fetchClientEmails, formatEuros, countsAsRevenue, type AdminOrderRow } from "@/lib/admin-data";
import { ADMIN_CARD_PAD, ADMIN_MONEY, ADMIN_TABLE_HEAD } from "@/lib/admin-ui";
import { requireAdmin } from "@/lib/admin-auth";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata = { title: { absolute: "Expedientes — Livendia Admin" } };

type ExpedienteRow = {
  clientId: string;
  fullName: string;
  email: string;
  phone: string;
  totalOrders: number;
  paidOrders: number;
  totalCents: number;
  firstDate: string | null;
  lastDate: string | null;
  latestOrderId: string | null;
};

function buildExpedientes(orders: AdminOrderRow[], emailByClient: Map<string, string>): ExpedienteRow[] {
  const map = new Map<string, ExpedienteRow>();

  for (const order of orders) {
    const pr = order.profiles;
    const fullName = (Array.isArray(pr) ? pr[0]?.full_name : pr?.full_name)?.trim() ?? "—";
    const phone = (Array.isArray(pr) ? pr[0]?.phone : pr?.phone)?.trim() ?? "—";
    const existing =
      map.get(order.client_id) ??
      ({
        clientId: order.client_id,
        fullName,
        email: emailByClient.get(order.client_id) ?? "—",
        phone,
        totalOrders: 0,
        paidOrders: 0,
        totalCents: 0,
        firstDate: null,
        lastDate: null,
        latestOrderId: null,
      } satisfies ExpedienteRow);

    existing.totalOrders += 1;
    if (countsAsRevenue(order)) {
      existing.paidOrders += 1;
      existing.totalCents += order.total_cents ?? 0;
      const d = order.paid_at!;
      if (!existing.firstDate || d < existing.firstDate) existing.firstDate = d;
      if (!existing.lastDate || d > existing.lastDate) {
        existing.lastDate = d;
        existing.latestOrderId = order.id;
      }
    }
    if (!existing.latestOrderId) existing.latestOrderId = order.id;

    map.set(order.client_id, existing);
  }

  return [...map.values()].sort((a, b) => (b.lastDate ?? "").localeCompare(a.lastDate ?? ""));
}

export default async function AdminExpedientesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  await requireAdmin("/admin/expedientes");
  const { q } = await searchParams;
  const supabase = await createServerSupabaseClient();

  const { data: ordersRaw } = await supabase
    .from("orders")
    .select(
      "id, client_id, status, created_at, paid_at, total_cents, stripe_session_id, notes, services ( name, slug ), profiles ( full_name, phone )",
    )
    .not("status", "eq", "cancelled")
    .order("created_at", { ascending: false });

  const orders = (ordersRaw ?? []) as AdminOrderRow[];
  const clientIds = [...new Set(orders.map((o) => o.client_id))];
  const emailByClient = await fetchClientEmails(clientIds);
  let rows = buildExpedientes(orders, emailByClient).filter((r) => r.paidOrders > 0);

  const term = q?.trim().toLowerCase();
  if (term) {
    rows = rows.filter(
      (r) =>
        r.fullName.toLowerCase().includes(term) ||
        r.email.toLowerCase().includes(term) ||
        r.phone.toLowerCase().includes(term),
    );
  }

  return (
    <>
      <AdminPageHeader title="Expedientes" subtitle="Clientes reales con pedido pagado" />

      <form method="get" className={`${ADMIN_CARD_PAD} mb-4`}>
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="search"
            name="q"
            defaultValue={q ?? ""}
            placeholder="Buscar expediente por email o nombre…"
            className="min-w-[16rem] flex-1 rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/15"
          />
          <span className="text-sm text-[#64748B]">{rows.length} expediente(s)</span>
        </div>
      </form>

      <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                {["Cliente", "Contacto", "Pedidos", "Ingresos", "Fechas", "Expediente"].map((h) => (
                  <th key={h} className={`px-4 py-3 ${ADMIN_TABLE_HEAD}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {!rows.length ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-[#64748B]">
                    No hay expedientes
                  </td>
                </tr>
              ) : (
                rows.map((row) => (
                  <tr key={row.clientId} className="border-b border-slate-100 last:border-0">
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
                    <td className="px-4 py-3 text-[#475569]">
                      {row.paidOrders} de {row.totalOrders}
                    </td>
                    <td className="px-4 py-3">
                      <p className={ADMIN_MONEY}>{formatEuros(row.totalCents)}</p>
                      {row.paidOrders > 0 ? (
                        <p className="text-xs text-[#94A3B8]">
                          {(row.totalCents / row.paidOrders / 100).toFixed(2)} € / pedido
                        </p>
                      ) : null}
                    </td>
                    <td className="px-4 py-3 text-xs text-[#64748B]">
                      {row.firstDate ? (
                        <>
                          Primera: {new Date(row.firstDate).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })}
                          <br />
                          Última: {new Date(row.lastDate!).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })}
                        </>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {row.latestOrderId ? (
                        <Link
                          href={`/admin/expedientes/cliente/${row.clientId}`}
                          className="inline-flex rounded-lg bg-[#0F172A] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#1A4FBF]"
                        >
                          Ver expediente
                        </Link>
                      ) : null}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
