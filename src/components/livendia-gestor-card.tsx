import { LIVENDIA_GESTOR } from "@/lib/livendia-gestor";
import { PANEL_CARD } from "@/lib/client-panel-ui";
import { getWhatsAppHref } from "@/lib/business-nap";
import { Clock, MessageCircle, Sparkles, UserRound } from "lucide-react";

export function LivendiaGestorCard({ compact = false }: { compact?: boolean }) {
  const waHref = getWhatsAppHref(
    `Hola ${LIVENDIA_GESTOR.name.split(" ")[0]}, soy cliente de Livendia y tengo una consulta sobre mi expediente.`,
  );

  return (
    <section
      className={`${PANEL_CARD} relative overflow-hidden bg-gradient-to-br from-[#0F2A6B] via-[#1A4FBF] to-[#2563EB] p-5 text-white shadow-[0_12px_40px_rgba(26,79,191,0.3)] sm:p-6`}
      aria-labelledby="livendia-gestor-heading"
    >
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl" />
      <div className="relative flex gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-lg font-extrabold ring-2 ring-white/25 backdrop-blur-sm">
          {LIVENDIA_GESTOR.initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold text-blue-100">
            <Sparkles className="h-3 w-3" aria-hidden />
            Gestor asignado
          </div>
          <h2 id="livendia-gestor-heading" className="mt-2 text-lg font-extrabold tracking-tight">
            {LIVENDIA_GESTOR.name}
          </h2>
          <p className="mt-0.5 text-sm text-blue-100">{LIVENDIA_GESTOR.role}</p>
          {!compact ? (
            <p className="mt-2 text-xs leading-relaxed text-blue-100/90">{LIVENDIA_GESTOR.specialty}</p>
          ) : null}
        </div>
      </div>

      <ul className="relative mt-4 space-y-2 text-sm text-blue-100">
        <li className="flex items-center gap-2">
          <Clock className="h-4 w-4 shrink-0" aria-hidden />
          Horario {LIVENDIA_GESTOR.openingHours}
        </li>
        <li className="flex items-center gap-2">
          <UserRound className="h-4 w-4 shrink-0" aria-hidden />
          Te acompaña en todo tu expediente online
        </li>
      </ul>

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        data-analytics-placement="gestor_whatsapp"
        className="relative mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-bold text-[#1A4FBF] shadow-md transition hover:bg-blue-50 sm:w-auto"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        Hablar con {LIVENDIA_GESTOR.name.split(" ")[0]}
      </a>
    </section>
  );
}
