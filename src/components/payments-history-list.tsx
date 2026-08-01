import Link from "next/link";
import { ClientPanelEmptyState } from "@/components/client-panel-empty-state";
import { OrderStatusBadge } from "@/components/order-status-badge";
import { PANEL_CARD, PANEL_MUTED, PANEL_SECTION_TITLE } from "@/lib/client-panel-ui";
import { ArrowRight, Receipt } from "lucide-react";

export type PaymentHistoryRow = {
  id: string;
  serviceName: string;
  status: string;
  totalCents: number | null;
  paidAt: string | null;
  createdAt: string;
};

export function PaymentsHistoryList({ rows }: { rows: PaymentHistoryRow[] }) {
  return (
    <section className={PANEL_CARD}>
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className={PANEL_SECTION_TITLE}>Historial de pagos</h2>
          <p className={`mt-1 ${PANEL_MUTED}`}>Pedidos y cobros realizados en Livendia.</p>
        </div>
        <Receipt className="h-6 w-6 shrink-0 text-[#94A3B8]" aria-hidden />
      </div>

      {!rows.length ? (
        <div className="mt-6">
          <ClientPanelEmptyState
            icon={Receipt}
            title="Sin pagos registrados"
            description="Cuando contrates un servicio, aparecerá aquí con el importe, la fecha y enlace a tu expediente."
            actionHref="/dashboard/servicios"
            actionLabel="Ver servicios"
          />
        </div>
      ) : (
        <ul className="mt-5 divide-y divide-slate-100">
          {rows.map((row) => {
            const date = row.paidAt ?? row.createdAt;
            const amount =
              row.totalCents != null ? `${(row.totalCents / 100).toFixed(2)} €` : "—";

            return (
              <li key={row.id} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center">
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-[#1E293B]">{row.serviceName}</p>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-[#64748B]">
                    <span>{new Date(date).toLocaleDateString("es-ES", { dateStyle: "medium" })}</span>
                    <span className="font-bold text-[#1A4FBF]">{amount}</span>
                    <OrderStatusBadge status={row.status} size="sm" />
                  </div>
                </div>
                <Link
                  href={`/mis-pedidos/${row.id}`}
                  className="inline-flex min-h-10 shrink-0 items-center justify-center gap-1 rounded-full border border-slate-200 px-4 text-sm font-semibold text-[#1A4FBF] transition hover:border-[#1A4FBF]/30 hover:bg-blue-50"
                >
                  Expediente
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
