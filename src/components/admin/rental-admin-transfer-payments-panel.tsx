"use client";

import { createRentalAdminTransferPayment } from "@/app/admin/actions";
import { ADMIN_BTN_GHOST, ADMIN_BTN_PRIMARY } from "@/lib/admin-ui";
import { Loader2, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type RentalAdminFeeOrderRow = {
  id: string;
  total_cents: number | null;
  paid_at: string | null;
  notes: string | null;
  status: string;
  created_at: string;
};

function formatEuros(cents: number | null): string {
  if (cents == null) return "—";
  return `${(cents / 100).toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
}

export function RentalAdminTransferPaymentsPanel({
  clientId,
  orders,
  defaultAmountEuros = "59,00",
}: {
  clientId: string;
  orders: RentalAdminFeeOrderRow[];
  defaultAmountEuros?: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [amountEuros, setAmountEuros] = useState(defaultAmountEuros);
  const [paidDate, setPaidDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [periodLabel, setPeriodLabel] = useState("");
  const [invoiceRef, setInvoiceRef] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const cents = Math.round(parseFloat(amountEuros.replace(",", ".")) * 100);
    const result = await createRentalAdminTransferPayment({
      clientId,
      totalCents: cents,
      paidAt: paidDate ? `${paidDate}T12:00:00.000Z` : undefined,
      periodLabel: periodLabel.trim() || undefined,
      invoiceRef: invoiceRef.trim() || undefined,
    });
    setBusy(false);
    if (result.error) {
      setError(result.error);
      return;
    }
    setOpen(false);
    setPeriodLabel("");
    setInvoiceRef("");
    router.refresh();
  }

  return (
    <section className="mb-8 rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#1E293B]">Cuotas de administración (transferencia)</h2>
          <p className="mt-1 text-sm text-[#64748B]">
            Cliente sin Stripe: registra aquí cada transferencia mensual de la cuota de gestión (59 €/mes IVA incl. o
            proporcional).
          </p>
        </div>
        {!open ? (
          <button type="button" onClick={() => setOpen(true)} className={ADMIN_BTN_PRIMARY}>
            <Plus className="h-4 w-4" aria-hidden />
            Registrar transferencia
          </button>
        ) : null}
      </div>

      {open ? (
        <form onSubmit={submit} className="mt-6 rounded-lg border border-[#1A4FBF]/20 bg-[#EFF6FF]/40 p-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="font-medium text-[#1E293B]">Importe (€)</span>
              <input
                required
                type="text"
                inputMode="decimal"
                value={amountEuros}
                onChange={(e) => setAmountEuros(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-[#1E293B]">Fecha de pago</span>
              <input
                required
                type="date"
                value={paidDate}
                onChange={(e) => setPaidDate(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              />
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="font-medium text-[#1E293B]">Periodo (ej. Septiembre 2026)</span>
              <input
                type="text"
                value={periodLabel}
                onChange={(e) => setPeriodLabel(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="Mes completo o tramo proporcional"
              />
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="font-medium text-[#1E293B]">Nº factura (opcional)</span>
              <input
                type="text"
                value={invoiceRef}
                onChange={(e) => setInvoiceRef(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="003/2026"
              />
            </label>
          </div>
          {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
          <div className="mt-4 flex gap-2">
            <button type="submit" disabled={busy} className={ADMIN_BTN_PRIMARY}>
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : "Guardar cuota"}
            </button>
            <button type="button" onClick={() => setOpen(false)} className={ADMIN_BTN_GHOST}>
              Cancelar
            </button>
          </div>
        </form>
      ) : null}

      {orders.length === 0 ? (
        <p className="mt-6 text-sm text-[#64748B]">Aún no hay cuotas registradas por transferencia.</p>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-[#64748B]">
                <th className="py-2 pr-4 font-semibold">Fecha pago</th>
                <th className="py-2 pr-4 font-semibold">Importe</th>
                <th className="py-2 font-semibold">Notas</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-b border-slate-100">
                  <td className="py-3 pr-4 whitespace-nowrap text-[#1E293B]">
                    {o.paid_at
                      ? new Date(o.paid_at).toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })
                      : "—"}
                  </td>
                  <td className="py-3 pr-4 font-semibold text-[#1A4FBF]">{formatEuros(o.total_cents)}</td>
                  <td className="py-3 text-[#64748B]">{o.notes ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
