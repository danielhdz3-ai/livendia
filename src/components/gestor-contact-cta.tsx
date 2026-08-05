"use client";

import { MessageCircle, Phone, UserRound } from "lucide-react";
import { WhatsAppLeadButton } from "@/components/whatsapp-lead-button";
import { businessNap } from "@/lib/business-nap";
import { WHATSAPP_RESPONSE_HOURS } from "@/lib/whatsapp-prefill";

type GestorContactCtaProps = {
  placement?: string;
  className?: string;
  serviceLabel?: string;
  city?: string;
};

export function GestorContactCta({
  placement = "gestor_cta",
  className = "",
  serviceLabel,
  city,
}: GestorContactCtaProps) {
  const telHref = businessNap.telephoneTel();
  const phoneDisplay = businessNap.telephoneDisplay();

  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] px-4 py-12 text-white sm:px-6 sm:py-16 ${className}`}
      aria-labelledby={`${placement}-gestor-heading`}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
          <UserRound className="h-8 w-8 text-cyan-200" aria-hidden />
        </div>
        <h2 id={`${placement}-gestor-heading`} className="text-2xl font-extrabold tracking-tight sm:text-4xl">
          Habla con tu gestor o llámanos
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
          Resolvemos dudas sobre alquiler, compra, venta entre particulares o arras. Sin compromiso antes de
          contratar.
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm text-blue-200/95">{WHATSAPP_RESPONSE_HOURS}</p>

        <a
          href={telHref}
          data-analytics-placement={`${placement}_phone_display`}
          className="mt-8 inline-block text-3xl font-extrabold tracking-tight text-white transition hover:text-cyan-200 sm:text-4xl lg:text-6xl"
        >
          {phoneDisplay}
        </a>
        <p className="mt-2 text-sm font-medium text-blue-200/90">L–V · 9:00 – 19:30 · IVA y precios claros</p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <WhatsAppLeadButton
            placement={`${placement}_whatsapp`}
            serviceLabel={serviceLabel}
            city={city}
            mode="modal"
            className="inline-flex min-h-[3.25rem] flex-1 items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-xl transition hover:scale-[1.02] hover:bg-[#20bd5a] sm:max-w-xs sm:flex-none"
          >
            <MessageCircle className="h-6 w-6 shrink-0" aria-hidden />
            WhatsApp con gestor
          </WhatsAppLeadButton>
          <a
            href={telHref}
            data-analytics-placement={`${placement}_call`}
            className="inline-flex min-h-[3.25rem] flex-1 items-center justify-center gap-3 rounded-2xl border-2 border-white bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition hover:scale-[1.02] hover:bg-white/20 sm:max-w-xs sm:flex-none"
          >
            <Phone className="h-6 w-6 shrink-0" aria-hidden />
            Llamar ahora
          </a>
        </div>
      </div>
    </section>
  );
}
