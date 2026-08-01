import Link from "next/link";
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
        <div className="mt-6 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/60 px-6 py-10 text-center">
          <p className="font-semibold text-[#1E293B]">Sin pagos registrados</p>
          <p className={`mt-2 ${PANEL_MUTED}`}>
            Cuando contrates un servicio, aparecerá aquí con el importe y la fecha.
          </p>
          <Link
            href="/dashboard/servicios"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#1A4FBF] px-5 py-2.5 text-sm font-bold text-white"
          >
            Ver servicios
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
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
