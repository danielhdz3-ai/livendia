import { buildOrderDocChecklist, countUploadedRecommended } from "@/lib/order-doc-checklist";
import { PANEL_CARD } from "@/lib/client-panel-ui";
import { CheckCircle2, Circle } from "lucide-react";

export function OrderDocChecklist({
  serviceSlug,
  uploadedTypes,
}: {
  serviceSlug: string | null | undefined;
  uploadedTypes: string[];
}) {
  const items = buildOrderDocChecklist(serviceSlug, uploadedTypes);
  const { uploaded, total } = countUploadedRecommended(items);

  if (items.length === 0) return null;

  return (
    <section className={`${PANEL_CARD}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-[#1E293B] sm:text-lg">Documentación recomendada</h2>
          <p className="mt-1 text-sm text-[#64748B]">
            Marca lo que vayas subiendo. Si te falta algún archivo, tu gestor te lo pedirá.
          </p>
        </div>
        <span className="rounded-full bg-[#1A4FBF]/10 px-3 py-1.5 text-xs font-bold text-[#1A4FBF]">
          {uploaded}/{total} tipos
        </span>
      </div>

      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item.type}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${
              item.uploaded ? "bg-emerald-50 ring-1 ring-emerald-100" : "bg-slate-50 ring-1 ring-slate-100"
            }`}
          >
            {item.uploaded ? (
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
            ) : (
              <Circle className="h-5 w-5 shrink-0 text-slate-300" aria-hidden />
            )}
            <span className={`text-sm font-medium ${item.uploaded ? "text-emerald-900" : "text-[#475569]"}`}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
