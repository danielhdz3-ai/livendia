"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";
import { useToast } from "@/components/toast-provider";

type BillingPortalButtonProps = {
  /** Clases de la fila (p. ej. sidebar en fondo marca). */
  navItemClassName?: string;
  /** Clases del botón (p. ej. CTA premium en pagos). */
  className?: string;
  /** Ruta de retorno tras cerrar el portal Stripe. */
  returnPath?: string;
  label?: string;
};

/** Abre el Customer Billing Portal de Stripe (facturación / cancelación). */
export function BillingPortalButton({
  navItemClassName,
  className,
  returnPath,
  label,
}: BillingPortalButtonProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function openPortal() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/billing-portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ returnPath: returnPath ?? null }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      toast(data.error ?? "No se pudo abrir la gestión de facturación.", "error");
    } finally {
      setLoading(false);
    }
  }

  const text = loading ? "Abriendo…" : (label ?? "Gestionar suscripción (Stripe)");

  return (
    <button
      type="button"
      onClick={() => void openPortal()}
      disabled={loading}
      className={
        className ??
        navItemClassName ??
        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium text-[#64748B] transition hover:bg-slate-50 hover:text-[#1E293B] disabled:opacity-60"
      }
    >
      {!className ? <CreditCard className="h-5 w-5 shrink-0" aria-hidden /> : null}
      <span>{text}</span>
    </button>
  );
}
