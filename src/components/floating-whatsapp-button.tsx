"use client";

import { MessageCircle } from "lucide-react";
import { useWhatsAppLeadOptional } from "@/components/whatsapp-lead-provider";
import { WHATSAPP_RESPONSE_HOURS } from "@/lib/whatsapp-prefill";
import { usePathname } from "next/navigation";

/** FAB de WhatsApp: abre el mini-formulario contextual antes de enviar. */
export function FloatingWhatsAppButton() {
  const pathname = usePathname() ?? "";
  const lead = useWhatsAppLeadOptional();

  if (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/contacto") ||
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/mis-pedidos")
  ) {
    return null;
  }

  return (
    <div
      className="livendia-wa-fab-anchor pointer-events-none fixed z-[55] flex max-w-[calc(100vw-1.5rem)] flex-col items-end gap-2 bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] sm:bottom-6 sm:right-6"
      aria-hidden={false}
    >
      <span className="pointer-events-none hidden max-w-[11rem] rounded-2xl bg-[#1E293B] px-3 py-2 text-left text-[11px] font-medium leading-snug text-white shadow-lg sm:block">
        <span className="block font-semibold">¿Te ayudamos?</span>
        <span className="mt-0.5 block text-[10px] font-normal text-slate-300">{WHATSAPP_RESPONSE_HOURS}</span>
      </span>
      <button
        type="button"
        data-analytics-placement="fab_whatsapp"
        aria-label="Abrir formulario y contactar por WhatsApp"
        onClick={() => lead?.openLeadModal({ placement: "fab_whatsapp" })}
        className="pointer-events-auto group relative flex h-[3.75rem] w-[3.75rem] items-center justify-center sm:h-16 sm:w-16"
      >
        <span
          className="livendia-wa-fab-ring absolute inset-0 rounded-full bg-[#25D366]"
          aria-hidden
        />
        <span
          className="livendia-wa-fab-ring absolute inset-0 rounded-full bg-[#25D366] [animation-delay:0.6s]"
          aria-hidden
        />
        <span className="livendia-wa-fab relative flex h-full w-full items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_rgba(37,211,102,0.45)] ring-4 ring-white transition group-hover:scale-110 group-hover:shadow-[0_12px_32px_rgba(37,211,102,0.55)] group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-[#25D366]">
          <MessageCircle className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden />
        </span>
      </button>
    </div>
  );
}
