"use client";

import { notifyDocumentDelivered } from "@/app/admin/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function AdminNotifyDeliveredForm({ orderId }: { orderId: string }) {
  const router = useRouter();
  const [msg, setMessage] = useState("");
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setInfo(null);
    setLoading(true);
    const res = await notifyDocumentDelivered(orderId, msg);
    setLoading(false);
    if ("error" in res) {
      setInfo(res.error ?? "Error");
      return;
    }
    setInfo("Correo enviado al cliente");
    setMessage("");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <label htmlFor={`deliver-${orderId}`} className="text-sm font-medium text-[#1E293B]">
        Avisar al cliente: documento listo
      </label>
      <textarea
        id={`deliver-${orderId}`}
        required
        rows={4}
        value={msg}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ej.: Ya puedes descargar el borrador del contrato en tu panel."
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#1E293B] outline-none focus:border-[#1A4FBF]"
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-[#06B6D4] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0891b2] disabled:opacity-60"
      >
        {loading ? "Enviando…" : "Enviar email al cliente"}
      </button>
      {info ? <p className="text-sm text-[#64748b]">{info}</p> : null}
    </form>
  );
}
