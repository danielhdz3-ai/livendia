"use client";

import { BillingPortalButton } from "@/components/billing-portal-button";
import { LivendiaBankTransferCard } from "@/components/livendia-bank-transfer-card";
import { PANEL_CARD, PANEL_MUTED, PANEL_SECTION_TITLE } from "@/lib/client-panel-ui";
import { CreditCard, ShieldCheck } from "lucide-react";

export function PaymentsBillingCard({
  hasStripeCustomer,
  showBankTransfer = true,
}: {
  hasStripeCustomer: boolean;
  showBankTransfer?: boolean;
}) {
  return (
    <section className={`${PANEL_CARD} overflow-hidden`}>
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] text-white shadow-lg shadow-blue-500/25">
          <CreditCard className="h-6 w-6" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className={PANEL_SECTION_TITLE}>Métodos de pago</h2>
          <p className={`mt-1 ${PANEL_MUTED}`}>
            {hasStripeCustomer
              ? "Gestiona tarjetas en Stripe o paga por transferencia con la cuenta de Livendia."
              : "Puedes abonar tus cuotas por transferencia a la cuenta indicada abajo (como en tus facturas)."}
          </p>
        </div>
      </div>

      {showBankTransfer ? (
        <div className="mt-5">
          <LivendiaBankTransferCard primary={!hasStripeCustomer} />
        </div>
      ) : null}

      {hasStripeCustomer ? (
        <div className="mt-5">
          <BillingPortalButton
            returnPath="/dashboard/pagos"
            label="Abrir portal de pagos Stripe"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:opacity-95 disabled:opacity-60 sm:w-auto"
          />
        </div>
      ) : null}

      {!hasStripeCustomer && !showBankTransfer ? (
        <div className="mt-5 rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 px-4 py-4 text-sm text-[#64748B]">
          Contrata un servicio desde{" "}
          <a href="/dashboard/servicios" className="font-semibold text-[#1A4FBF] hover:underline">
            Servicios
          </a>{" "}
          para ver opciones de pago.
        </div>
      ) : null}

      <ul className="mt-6 space-y-2 border-t border-slate-100 pt-5 text-sm text-[#475569]">
        <li className="flex items-start gap-2">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
          Pagos procesados de forma segura con Stripe
        </li>
        <li className="flex items-start gap-2">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
          Tus datos bancarios nunca se almacenan en nuestros servidores
        </li>
      </ul>
    </section>
  );
}
