"use client";

import { MessageCircle } from "lucide-react";
import { WhatsAppLeadButton } from "@/components/whatsapp-lead-button";
import type { WhatsAppNeedType } from "@/lib/whatsapp-prefill";

type Props = {
  placement: string;
  serviceLabel: string;
  needType?: WhatsAppNeedType;
  city?: string;
  /** Texto visible; debe incluir “WhatsApp” para reconocimiento inmediato */
  label?: string;
  variant?: "hero-on-blue" | "hero-on-white" | "footer-on-blue" | "compact-on-blue";
  className?: string;
};

const VARIANT_CLASS: Record<NonNullable<Props["variant"]>, string> = {
  "hero-on-blue":
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-[0_8px_28px_rgba(37,211,102,0.5)] ring-4 ring-white/30 transition hover:brightness-95 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
  "hero-on-white":
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-lg ring-2 ring-[#25D366]/30 transition hover:brightness-95",
  "footer-on-blue":
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-10 py-4 text-lg font-bold text-white shadow-[0_8px_28px_rgba(37,211,102,0.5)] ring-4 ring-white/30 transition hover:brightness-95 hover:scale-[1.02]",
  "compact-on-blue":
    "inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-md ring-2 ring-white/25 transition hover:brightness-95",
};

export function LandingProminentWhatsAppCta({
  placement,
  serviceLabel,
  needType = "otro",
  city,
  label = "WhatsApp — consultar con gestor",
  variant = "hero-on-blue",
  className,
}: Props) {
  return (
    <WhatsAppLeadButton
      mode="modal"
      placement={placement}
      serviceLabel={serviceLabel}
      needType={needType}
      city={city}
      className={className ?? VARIANT_CLASS[variant]}
    >
      <MessageCircle className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" aria-hidden />
      {label}
    </WhatsAppLeadButton>
  );
}
