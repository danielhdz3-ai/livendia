import type { OrderActivityRow } from "@/lib/order-activity";
import { PANEL_CARD, PANEL_SECTION_TITLE } from "@/lib/client-panel-ui";
import { CheckCircle2, CreditCard, FileUp, MessageSquare, RefreshCw } from "lucide-react";

const ICONS: Record<string, typeof FileUp> = {
  document: FileUp,
  payment: CreditCard,
  deliverable: CheckCircle2,
  status: RefreshCw,
  note: MessageSquare,
};

export function OrderActivityFeed({ items }: { items: OrderActivityRow[] }) {
  return (
    <section className={PANEL_CARD}>
      <h2 className={PANEL_SECTION_TITLE}>Actividad reciente</h2>
      <p className="mt-1 text-sm text-[#64748B]">Todo lo que ha ocurrido en tu expediente.</p>

      {items.length === 0 ? (
        <p className="mt-4 text-sm text-[#64748B]">Aún no hay actividad registrada.</p>
      ) : (
        <ol className="relative mt-5 space-y-4 border-s border-slate-200 pl-5">
          {items.slice(0, 8).map((item) => {
            const Icon = ICONS[item.kind] ?? MessageSquare;
            return (
              <li key={item.id} className="relative">
                <span className="absolute -start-[1.35rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#EFF6FF] ring-2 ring-white">
                  <Icon className="h-3.5 w-3.5 text-[#1A4FBF]" aria-hidden />
                </span>
                <p className="font-semibold text-[#1E293B]">{item.title}</p>
                {item.description ? (
                  <p className="mt-0.5 text-sm text-[#64748B]">{item.description}</p>
                ) : null}
                <p className="mt-1 text-xs text-[#94A3B8]">
                  {new Date(item.created_at).toLocaleString("es-ES")}
                </p>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}
