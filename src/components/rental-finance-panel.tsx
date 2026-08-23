"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  EXPENSE_TYPE_LABELS,
  EXPENSE_TYPES,
  RENT_PAYMENT_METHODS,
  RENT_PAYMENT_STATUS_LABELS,
} from "@/lib/rental-finance-labels";

export type RentPaymentRow = {
  id: string;
  payment_date: string;
  amount: number;
  status: string;
  payment_method?: string | null;
  notes?: string | null;
};

export type ExpenseRow = {
  id: string;
  expense_type: string;
  amount: number;
  expense_date: string;
  description?: string | null;
  is_deductible?: boolean;
};

type Props = {
  propertyId: string;
  tenantId: string;
  monthlyRent: number;
  payments: RentPaymentRow[];
  expenses: ExpenseRow[];
  canManage: boolean;
};

export function RentalFinancePanel({
  propertyId,
  tenantId,
  monthlyRent,
  payments,
  expenses,
  canManage,
}: Props) {
  const router = useRouter();
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const paidCount = payments.filter((p) => p.status === "paid").length;
  const lateCount = payments.filter((p) => p.status === "late").length;
  const pendingCount = payments.filter((p) => p.status === "pending").length;

  async function generateCurrentMonth() {
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch("/api/rental/rent-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ propertyId, tenantId, generateCurrentMonth: true }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Error");
      router.refresh();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Error");
    } finally {
      setBusy(false);
    }
  }

  async function generateFullSchedule() {
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch("/api/rental/rent-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ propertyId, tenantId, generateSchedule: true }),
      });
      const data = (await res.json()) as { error?: string; created?: number; skipped?: number };
      if (!res.ok) throw new Error(data.error ?? "Error");
      router.refresh();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Error");
    } finally {
      setBusy(false);
    }
  }

  const exportBase = `/api/rental/finance-export?propertyId=${encodeURIComponent(propertyId)}`;

  async function updatePaymentStatus(paymentId: string, status: string) {
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch("/api/rental/rent-payment", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId, status }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Error");
      router.refresh();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Error");
    } finally {
      setBusy(false);
    }
  }

  async function addManualPayment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canManage) return;
    const fd = new FormData(e.currentTarget);
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch("/api/rental/rent-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          propertyId,
          tenantId,
          paymentDate: String(fd.get("paymentDate")),
          amount: Number(fd.get("amount")),
          status: String(fd.get("status")),
          paymentMethod: String(fd.get("paymentMethod") || ""),
          notes: String(fd.get("notes") || ""),
        }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Error");
      e.currentTarget.reset();
      router.refresh();
    } catch (error) {
      setErr(error instanceof Error ? error.message : "Error");
    } finally {
      setBusy(false);
    }
  }

  async function addExpense(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canManage) return;
    const fd = new FormData(e.currentTarget);
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch("/api/rental/property-expense", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          propertyId,
          expenseType: String(fd.get("expenseType")),
          amount: Number(fd.get("amount")),
          expenseDate: String(fd.get("expenseDate")),
          description: String(fd.get("description") || ""),
          isDeductible: fd.get("isDeductible") === "on",
        }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Error");
      e.currentTarget.reset();
      router.refresh();
    } catch (error) {
      setErr(error instanceof Error ? error.message : "Error");
    } finally {
      setBusy(false);
    }
  }

  async function deleteExpense(expenseId: string) {
    if (!canManage || !confirm("¿Eliminar este gasto?")) return;
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch(`/api/rental/property-expense?expenseId=${expenseId}`, { method: "DELETE" });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Error");
      router.refresh();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Error");
    } finally {
      setBusy(false);
    }
  }

  const inputClass =
    "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-1 focus:ring-[#1A4FBF]";

  return (
    <div className="space-y-8">
      {err ? <p className="rounded-lg bg-red-50 p-3 text-sm text-red-800">{err}</p> : null}

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
          <div className="text-xs text-emerald-700">Cobrados</div>
          <div className="text-2xl font-bold text-emerald-800">{paidCount}</div>
        </div>
        <div className="rounded-xl bg-amber-50 p-4 ring-1 ring-amber-100">
          <div className="text-xs text-amber-700">Pendientes</div>
          <div className="text-2xl font-bold text-amber-800">{pendingCount}</div>
        </div>
        <div className="rounded-xl bg-red-50 p-4 ring-1 ring-red-100">
          <div className="text-xs text-red-700">Retrasados</div>
          <div className="text-2xl font-bold text-red-800">{lateCount}</div>
        </div>
      </div>

      <section className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-[#1E293B]">Pagos de renta</h2>
            <p className="text-sm text-[#64748B]">Renta pactada: {monthlyRent.toFixed(2)} €/mes</p>
          </div>
          {canManage ? (
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                disabled={busy}
                onClick={() => void generateCurrentMonth()}
                className="rounded-lg bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2563EB] disabled:opacity-60"
              >
                Cuota del mes
              </button>
              <button
                type="button"
                disabled={busy}
                onClick={() => void generateFullSchedule()}
                className="rounded-lg border border-[#1A4FBF] px-4 py-2 text-sm font-semibold text-[#1A4FBF] hover:bg-blue-50 disabled:opacity-60"
              >
                Calendario completo
              </button>
            </div>
          ) : null}
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          <a
            href={`${exportBase}&format=csv`}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-[#475569] hover:bg-slate-50"
          >
            Exportar CSV (mes actual)
          </a>
          <a
            href={`${exportBase}&format=html`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-[#475569] hover:bg-slate-50"
          >
            Informe HTML / PDF
          </a>
        </div>

        {payments.length === 0 ? (
          <p className="text-sm text-[#64748B]">Aún no hay registros de renta.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs text-[#64748B]">
                  <th className="py-2 pr-3">Mes</th>
                  <th className="py-2 pr-3">Importe</th>
                  <th className="py-2 pr-3">Estado</th>
                  <th className="py-2 pr-3">Método</th>
                  {canManage ? <th className="py-2">Acción</th> : null}
                </tr>
              </thead>
              <tbody>
                {payments.map((p) => (
                  <tr key={p.id} className="border-b border-slate-100">
                    <td className="py-3 pr-3">
                      {new Date(p.payment_date).toLocaleDateString("es-ES", { month: "long", year: "numeric" })}
                    </td>
                    <td className="py-3 pr-3 font-medium">{Number(p.amount).toFixed(2)} €</td>
                    <td className="py-3 pr-3">{RENT_PAYMENT_STATUS_LABELS[p.status] ?? p.status}</td>
                    <td className="py-3 pr-3">{p.payment_method ?? "—"}</td>
                    {canManage ? (
                      <td className="py-3">
                        <select
                          className="rounded border border-slate-300 px-2 py-1 text-xs"
                          value={p.status}
                          disabled={busy}
                          onChange={(e) => void updatePaymentStatus(p.id, e.target.value)}
                        >
                          <option value="pending">Pendiente</option>
                          <option value="paid">Cobrado</option>
                          <option value="late">Retrasado</option>
                        </select>
                      </td>
                    ) : null}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {canManage ? (
          <form onSubmit={addManualPayment} className="mt-6 grid gap-3 border-t border-slate-100 pt-6 md:grid-cols-2">
            <div>
              <label className="text-xs font-semibold text-[#64748B]">Fecha</label>
              <input name="paymentDate" type="date" required className={inputClass} />
            </div>
            <div>
              <label className="text-xs font-semibold text-[#64748B]">Importe (€)</label>
              <input name="amount" type="number" step="0.01" min={0} defaultValue={monthlyRent} required className={inputClass} />
            </div>
            <div>
              <label className="text-xs font-semibold text-[#64748B]">Estado</label>
              <select name="status" defaultValue="paid" className={inputClass}>
                <option value="pending">Pendiente</option>
                <option value="paid">Cobrado</option>
                <option value="late">Retrasado</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-[#64748B]">Método</label>
              <select name="paymentMethod" className={inputClass}>
                <option value="">—</option>
                {RENT_PAYMENT_METHODS.map((m) => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-xs font-semibold text-[#64748B]">Notas</label>
              <input name="notes" className={inputClass} placeholder="Ej. Transferencia recibida día 3" />
            </div>
            <div>
              <button type="submit" disabled={busy} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-60">
                Registrar pago
              </button>
            </div>
          </form>
        ) : null}
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        <h2 className="mb-4 text-lg font-bold text-[#1E293B]">Gastos del inmueble</h2>
        {expenses.length === 0 ? (
          <p className="text-sm text-[#64748B]">Sin gastos registrados.</p>
        ) : (
          <ul className="space-y-3">
            {expenses.map((ex) => (
              <li key={ex.id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-100 p-3">
                <div>
                  <div className="font-medium text-[#1E293B]">
                    {EXPENSE_TYPE_LABELS[ex.expense_type] ?? ex.expense_type} — {Number(ex.amount).toFixed(2)} €
                  </div>
                  <div className="text-xs text-[#64748B]">
                    {new Date(ex.expense_date).toLocaleDateString("es-ES")}
                    {ex.description ? ` · ${ex.description}` : ""}
                  </div>
                </div>
                {canManage ? (
                  <button type="button" onClick={() => void deleteExpense(ex.id)} className="text-xs font-semibold text-red-600 hover:underline">
                    Eliminar
                  </button>
                ) : null}
              </li>
            ))}
          </ul>
        )}

        {canManage ? (
          <form onSubmit={addExpense} className="mt-6 grid gap-3 border-t border-slate-100 pt-6 md:grid-cols-2">
            <div>
              <label className="text-xs font-semibold text-[#64748B]">Tipo</label>
              <select name="expenseType" required className={inputClass}>
                {EXPENSE_TYPES.map((t) => (
                  <option key={t} value={t}>{EXPENSE_TYPE_LABELS[t]}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-[#64748B]">Fecha</label>
              <input name="expenseDate" type="date" required className={inputClass} />
            </div>
            <div>
              <label className="text-xs font-semibold text-[#64748B]">Importe (€)</label>
              <input name="amount" type="number" step="0.01" min={0} required className={inputClass} />
            </div>
            <div className="flex items-end gap-2 pb-2">
              <input id="deductible" name="isDeductible" type="checkbox" defaultChecked />
              <label htmlFor="deductible" className="text-sm text-[#475569]">Deducible</label>
            </div>
            <div className="md:col-span-2">
              <label className="text-xs font-semibold text-[#64748B]">Descripción</label>
              <input name="description" className={inputClass} />
            </div>
            <div>
              <button type="submit" disabled={busy} className="rounded-lg bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2563EB] disabled:opacity-60">
                Añadir gasto
              </button>
            </div>
          </form>
        ) : null}
      </section>
    </div>
  );
}
