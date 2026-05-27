"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";

type BillingPortalButtonProps = {
  /** Clases de la fila (p. ej. sidebar en fondo marca). */
  navItemClassName?: string;
};

/** Abre el Customer Billing Portal de Stripe (facturación / cancelación). */
export function BillingPortalButton({ navItemClassName }: BillingPortalButtonProps) {
  const [loading, setLoading] = useState(false);

  async function openPortal() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/billing-portal", { method: "POST" });
      const data = (await res.json()) as { url?: string; error?: string };
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      window.alert(data.error ?? "No se pudo abrir la gestión de facturación.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={openPortal}
      disabled={loading}
      className={
        navItemClassName ??
        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium text-[#64748B] transition hover:bg-slate-50 hover:text-[#1E293B] disabled:opacity-60"
      }
    >
      <CreditCard className="h-5 w-5 shrink-0" />
      <span>{loading ? "Abriendo…" : "Gestionar suscripción (Stripe)"}</span>
    </button>
  );
}
