"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import {
  deleteSaleByAdmin,
  updateSaleByAdmin,
  updateSalePaymentStatus,
} from "@/app/admin/actions";
import type { SalePaymentStatus } from "@/lib/admin-ui";
import { getSalePaymentLabel, isSaleRefunded } from "@/lib/admin-ui";

type SaleRowActionsProps = {
  order: {
    id: string;
    total_cents: number | null;
    status: string;
    paid_at: string | null;
    stripe_session_id: string | null;
    notes: string | null;
    service_id?: string;
  };
  services: { id: string; name: string; price_cents: number }[];
};

export function SalePaymentStatusSelect({ orderId, status, paidAt }: { orderId: string; status: string; paidAt: string | null }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const current: SalePaymentStatus = isSaleRefunded({ status }) ? "refund" : paidAt ? "paid" : "paid";

  async function onChange(value: SalePaymentStatus) {
    setBusy(true);
    const result = await updateSalePaymentStatus(orderId, value);
    setBusy(false);
    if (result.error) {
      alert(result.error);
      return;
    }
    router.refresh();
  }

  return (
    <select
      value={current}
      disabled={busy}
      onChange={(e) => void onChange(e.target.value as SalePaymentStatus)}
      className={`rounded-lg border px-2 py-1 text-xs font-semibold disabled:opacity-60 ${
        current === "refund"
          ? "border-red-200 bg-red-50 text-red-700"
          : "border-emerald-200 bg-emerald-50 text-emerald-700"
      }`}
      aria-label="Estado de pago"
    >
      <option value="paid">Pagado</option>
      <option value="refund">Devolución</option>
    </select>
  );
}

export function SaleRowActions({ order }: Omit<SaleRowActionsProps, "services">) {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [busy, setBusy] = useState(false);
  const [amountEuros, setAmountEuros] = useState(((order.total_cents ?? 0) / 100).toFixed(2));
  const [note, setNote] = useState(order.notes ?? "");
  const [error, setError] = useState<string | null>(null);

  async function onDelete() {
    const msg = order.stripe_session_id
      ? "¿Eliminar esta venta? No se procesará devolución automática en Stripe."
      : "¿Eliminar esta venta?";
    if (!globalThis.confirm(msg)) return;
    setBusy(true);
    const result = await deleteSaleByAdmin(order.id);
    setBusy(false);
    if (result.error) {
      alert(result.error);
      return;
    }
    router.refresh();
  }

  async function onSave(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const cents = Math.round(parseFloat(amountEuros.replace(",", ".")) * 100);
    const result = await updateSaleByAdmin({
      orderId: order.id,
      totalCents: cents,
      notes: note,
    });
    setBusy(false);
    if (result.error) {
      setError(result.error);
      return;
    }
    setEditing(false);
    router.refresh();
  }

  if (editing) {
    return (
      <form onSubmit={onSave} className="min-w-[12rem] space-y-2">
        <input
          type="text"
          inputMode="decimal"
          value={amountEuros}
          onChange={(e) => setAmountEuros(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-2 py-1 text-xs"
          placeholder="Importe €"
        />
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-2 py-1 text-xs"
          placeholder="Nota"
        />
        {error ? <p className="text-xs text-red-600">{error}</p> : null}
        <div className="flex gap-1">
          <button type="submit" disabled={busy} className="rounded bg-[#1A4FBF] px-2 py-1 text-xs font-semibold text-white">
            {busy ? "…" : "Guardar"}
          </button>
          <button type="button" onClick={() => setEditing(false)} className="rounded border px-2 py-1 text-xs">
            Cancelar
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="flex items-center gap-1.5">
      <Link href={`/admin/expedientes/${order.id}`} className="rounded-lg p-1.5 text-[#1A4FBF] hover:bg-[#EFF6FF]" title="Ver">
        Ver
      </Link>
      <button
        type="button"
        onClick={() => setEditing(true)}
        disabled={busy}
        className="rounded-lg p-1.5 text-[#64748B] hover:bg-slate-100"
        aria-label="Modificar venta"
      >
        <Pencil className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => void onDelete()}
        disabled={busy}
        className="rounded-lg p-1.5 text-red-600 hover:bg-red-50 disabled:opacity-60"
        aria-label="Eliminar venta"
      >
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
      </button>
    </div>
  );
}

export function SalePaymentBadge({ order }: { order: { status: string; paid_at: string | null } }) {
  const label = getSalePaymentLabel(order);
  const refunded = isSaleRefunded(order);
  return (
    <span
      className={`rounded-full px-2 py-1 text-xs font-semibold ${
        refunded ? "bg-red-50 text-red-700" : label === "Pagado" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
      }`}
    >
      {label}
    </span>
  );
}
