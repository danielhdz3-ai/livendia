"use client";

import { useState } from "react";

export type ServiceRow = { id: string; name: string; price_cents: number };

export function ServiceCheckout({ services }: { services: ServiceRow[] }) {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function pay(serviceId: string) {
    setError(null);
    setLoadingId(serviceId);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceId }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(typeof data.error === "string" ? data.error : "No se pudo iniciar el pago");
        return;
      }
      if (data.url) {
        window.location.href = data.url as string;
        return;
      }
      setError("Respuesta inesperada");
    } finally {
      setLoadingId(null);
    }
  }

  if (!services.length) return null;

  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold text-[#1E293B]">Contratar servicio</h2>
      <p className="mt-1 text-sm text-[#475569]">Pago seguro con Stripe.</p>
      {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
      <ul className="mt-4 space-y-3">
        {services.map((s) => (
          <li
            key={s.id}
            className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white p-4 shadow ring-1 ring-slate-200"
          >
            <div>
              <p className="font-medium text-[#1E293B]">{s.name}</p>
              <p className="text-sm text-[#475569]">{(s.price_cents / 100).toFixed(2)} €</p>
            </div>
            <button
              type="button"
              disabled={loadingId !== null}
              onClick={() => pay(s.id)}
              className="rounded-full bg-[#06B6D4] px-5 py-2 text-sm font-semibold text-white hover:bg-[#0891b2] disabled:opacity-60"
            >
              {loadingId === s.id ? "Redirigiendo…" : "Pagar"}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
