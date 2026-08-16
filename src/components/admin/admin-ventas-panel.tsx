"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import { ManualSaleForm } from "@/components/admin/manual-sale-form";
import { SalePaymentStatusSelect, SaleRowActions } from "@/components/admin/sale-row-actions";
import { AdminSalesCalendar } from "@/components/admin/admin-sales-calendar";
import type { AdminOrderRow, SalesDayBucket } from "@/lib/admin-data";
import { formatEuros, isManualOrder, countsAsRevenue } from "@/lib/admin-data";
import { ADMIN_CARD_PAD, ADMIN_MONEY, ADMIN_TABLE_HEAD, PAID_STATUSES } from "@/lib/admin-ui";

type VentaRow = AdminOrderRow & { clientEmail: string };

const FILTERS = [
  { id: "all", label: "Todas" },
  { id: "paid", label: "Pagadas" },
  { id: "pending", label: "Pendientes" },
  { id: "week", label: "Esta semana" },
  { id: "month", label: "Este mes" },
  { id: "manual", label: "Manuales" },
] as const;

function clientLabel(order: VentaRow) {
  const pr = order.profiles;
  const name = (Array.isArray(pr) ? pr[0]?.full_name : pr?.full_name)?.trim();
  return name || order.clientEmail || "—";
}

function serviceLabel(order: VentaRow) {
  const svc = order.services;
  return (Array.isArray(svc) ? svc[0]?.name : svc?.name) ?? "Servicio";
}

export function AdminVentasPanel({
  orders,
  salesByDate,
  clients,
  services,
}: {
  orders: VentaRow[];
  salesByDate: Record<string, SalesDayBucket>;
  clients: { id: string; label: string }[];
  services: { id: string; name: string; price_cents: number }[];
}) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const now = new Date();
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1));
    weekStart.setHours(0, 0, 0, 0);
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    return orders.filter((order) => {
      const label = `${clientLabel(order)} ${order.clientEmail} ${serviceLabel(order)}`.toLowerCase();
      if (q && !label.includes(q)) return false;

      const paid = order.paid_at != null && PAID_STATUSES.has(order.status);
      const date = order.paid_at ? new Date(order.paid_at) : new Date(order.created_at);

      switch (filter) {
        case "paid":
          return paid;
        case "pending":
          return !paid && order.status === "pending_payment";
        case "week":
          return paid && date >= weekStart;
        case "month":
          return paid && date >= monthStart;
        case "manual":
          return isManualOrder(order) && paid;
        default:
          return true;
      }
    });
  }, [orders, search, filter]);

  const totalCents = filtered.filter(countsAsRevenue).reduce((s, o) => s + (o.total_cents ?? 0), 0);

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_22rem]">
      <div className="space-y-4">
        <div className={`${ADMIN_CARD_PAD} space-y-4`}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar venta por email o nombre…"
                className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/15"
              />
            </div>
            <ManualSaleForm clients={clients} services={services} />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  filter === f.id
                    ? "bg-[#EFF6FF] text-[#1A4FBF] ring-1 ring-[#BFDBFE]"
                    : "text-[#64748B] hover:bg-slate-50"
                }`}
              >
                {f.label}
              </button>
            ))}
            <span className="ml-auto text-sm text-[#64748B]">
              {filtered.length} venta(s) · <span className={ADMIN_MONEY}>{formatEuros(totalCents)}</span>
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  {["Cliente", "Servicio", "Fecha", "Estado", "Importe", "Acciones"].map((h) => (
                    <th key={h} className={`px-4 py-3 ${ADMIN_TABLE_HEAD}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {!filtered.length ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-10 text-center text-[#64748B]">
                      No hay ventas con estos filtros
                    </td>
                  </tr>
                ) : (
                  filtered.map((order) => {
                    const when = order.paid_at ?? order.created_at;
                    return (
                      <tr key={order.id} className="border-b border-slate-100 last:border-0">
                        <td className="px-4 py-3">
                          <p className="font-semibold text-[#1E293B]">{clientLabel(order)}</p>
                          <p className="text-xs text-[#94A3B8]">{order.clientEmail}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-[#475569]">{serviceLabel(order)}</p>
                          {order.stripe_session_id ? (
                            <a
                              href={`https://dashboard.stripe.com/search?query=${order.stripe_session_id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-0.5 inline-flex items-center gap-1 text-xs font-semibold text-[#1A4FBF] hover:underline"
                            >
                              Ver en Stripe <ExternalLink className="h-3 w-3" />
                            </a>
                          ) : (
                            <span className="text-xs text-[#94A3B8]">Pago manual</span>
                          )}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-[#64748B]">
                          {new Date(when).toLocaleString("es-ES", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                        <td className="px-4 py-3">
                          <SalePaymentStatusSelect orderId={order.id} status={order.status} paidAt={order.paid_at} />
                        </td>
                        <td className={`px-4 py-3 ${ADMIN_MONEY}`}>{formatEuros(order.total_cents)}</td>
                        <td className="px-4 py-3">
                          <SaleRowActions order={order} />
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AdminSalesCalendar salesByDate={salesByDate} detailBaseHref="/admin/expedientes" />
    </div>
  );
}
