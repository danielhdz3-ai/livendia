"use client";

import { useState } from "react";
import {
  getLivendiaBankIbanCopyValue,
  getLivendiaBankIbanDisplay,
  getLivendiaBankTransferBeneficiary,
  LIVENDIA_BANK_TRANSFER_HINT,
} from "@/lib/livendia-bank-transfer";
import { Building2, Copy, Check } from "lucide-react";

type LivendiaBankTransferCardProps = {
  className?: string;
  /** Si true, ocupa el bloque principal (sin Stripe). */
  primary?: boolean;
};

export function LivendiaBankTransferCard({ className = "", primary = false }: LivendiaBankTransferCardProps) {
  const [copied, setCopied] = useState(false);
  const iban = getLivendiaBankIbanDisplay();
  const beneficiary = getLivendiaBankTransferBeneficiary();

  async function copyIban() {
    try {
      await navigator.clipboard.writeText(getLivendiaBankIbanCopyValue());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <div
      className={
        primary
          ? `rounded-2xl border border-[#1A4FBF]/20 bg-gradient-to-br from-[#EFF3F9] to-white px-5 py-5 ring-1 ring-[#1A4FBF]/10 ${className}`
          : `rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-4 ${className}`
      }
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1A4FBF]/10 text-[#1A4FBF]">
          <Building2 className="h-5 w-5" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-[#1E293B]">Pago por transferencia bancaria</p>
          <p className="mt-1 text-sm text-[#64748B]">
            {primary
              ? "Para cuotas de administración y cobros acordados con tu gestor, usa esta cuenta (la misma que en tus facturas)."
              : "Alternativa a tarjeta: misma cuenta que figura en las facturas Livendia."}
          </p>
        </div>
      </div>

      <dl className="mt-4 space-y-2 text-sm">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">Beneficiario</dt>
          <dd className="font-medium text-[#1E293B]">{beneficiary}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">IBAN</dt>
          <dd className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-base font-semibold tracking-wide text-[#1A4FBF]">{iban}</span>
            <button
              type="button"
              onClick={() => void copyIban()}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-[#475569] transition hover:border-[#1A4FBF]/40 hover:text-[#1A4FBF]"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
                  Copiado
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" aria-hidden />
                  Copiar IBAN
                </>
              )}
            </button>
          </dd>
        </div>
      </dl>

      <p className="mt-3 text-xs leading-relaxed text-[#64748B]">{LIVENDIA_BANK_TRANSFER_HINT}</p>
    </div>
  );
}
