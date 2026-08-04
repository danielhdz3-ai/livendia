"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, Plus, Trash2 } from "lucide-react";
import { createManualSale, deleteManualSale } from "@/app/admin/actions";
import { ADMIN_BTN_GHOST, ADMIN_BTN_PRIMARY } from "@/lib/admin-ui";

export function ManualSaleForm({
  clients,
  services,
}: {
  clients: { id: string; label: string }[];
  services: { id: string; name: string; price_cents: number }[];
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [clientId, setClientId] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [amountEuros, setAmountEuros] = useState("");
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onServiceChange(id: string) {
    setServiceId(id);
    const svc = services.find((s) => s.id === id);
    if (svc) setAmountEuros((svc.price_cents / 100).toFixed(2));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const cents = Math.round(parseFloat(amountEuros.replace(",", ".")) * 100);
    const result = await createManualSale({
      clientId,
      serviceId,
      totalCents: cents,
      paymentNote: note,
    });
    setBusy(false);
    if (result.error) {
      setError(result.error);
      return;
    }
    setOpen(false);
    router.refresh();
  }

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className={ADMIN_BTN_PRIMARY}>
        <Plus className="h-4 w-4" aria-hidden />
        Venta manual
      </button>
    );
  }

  return (
    <form onSubmit={submit} className="w-full rounded-xl border border-[#1A4FBF]/20 bg-[#EFF6FF]/40 p-4 sm:w-auto sm:min-w-[20rem]">
      <p className="text-sm font-bold text-[#1E293B]">Registrar venta manual</p>
      <p className="mt-1 text-xs text-[#64748B]">Transferencia, efectivo u otro medio fuera de Stripe.</p>
      <div className="mt-3 space-y-3">
        <select
          required
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        >
          <option value="">Cliente…</option>
          {clients.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
        <select
          required
          value={serviceId}
          onChange={(e) => onServiceChange(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        >
          <option value="">Servicio…</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
        <input
          required
          type="text"
          inputMode="decimal"
          value={amountEuros}
          onChange={(e) => setAmountEuros(e.target.value)}
          placeholder="Importe €"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Nota (opcional)"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
      </div>
      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
      <div className="mt-3 flex gap-2">
        <button type="submit" disabled={busy} className={ADMIN_BTN_PRIMARY}>
          {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : "Guardar"}
        </button>
        <button type="button" onClick={() => setOpen(false)} className={ADMIN_BTN_GHOST}>
          Cancelar
        </button>
      </div>
    </form>
  );
}

export function DeleteManualSaleButton({ orderId }: { orderId: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function onDelete() {
    if (!globalThis.confirm("¿Eliminar esta venta manual?")) return;
    setBusy(true);
    const result = await deleteManualSale(orderId);
    setBusy(false);
    if (result.error) {
      alert(result.error);
      return;
    }
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={() => void onDelete()}
      disabled={busy}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-red-200 text-red-600 hover:bg-red-50 disabled:opacity-60"
      aria-label="Eliminar venta manual"
    >
      {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
    </button>
  );
}
