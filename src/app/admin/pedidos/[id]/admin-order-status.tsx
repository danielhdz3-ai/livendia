"use client";

import { updateOrderStatus } from "@/app/admin/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const OPTIONS: { value: string; label: string }[] = [
  { value: "pending_payment", label: "Pago pendiente" },
  { value: "paid", label: "Pagado" },
  { value: "pending_docs", label: "Falta documentación" },
  { value: "in_review", label: "En revisión" },
  { value: "in_progress", label: "En curso" },
  { value: "completed", label: "Completado" },
  { value: "cancelled", label: "Cancelado" },
];

export function AdminOrderStatusForm({
  orderId,
  currentStatus,
}: {
  orderId: string;
  currentStatus: string;
}) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus);
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    setLoading(true);
    const res = await updateOrderStatus(orderId, status);
    setLoading(false);
    if ("error" in res) {
      setMsg(res.error ?? "Error");
      return;
    }
    setMsg("Guardado");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-wrap items-end gap-3">
      <div>
        <label htmlFor="order-status" className="text-xs font-medium text-[#64748b]">
          Estado del pedido
        </label>
        <select
          id="order-status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="mt-1 block rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-[#1E293B]"
        >
          {OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={loading || status === currentStatus}
        className="rounded-full bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2563EB] disabled:opacity-50"
      >
        {loading ? "Guardando…" : "Actualizar"}
      </button>
      {msg ? <span className="text-sm text-[#64748b]">{msg}</span> : null}
    </form>
  );
}
