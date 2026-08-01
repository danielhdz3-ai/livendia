"use client";

import type { OrderDeliverableRow } from "@/lib/order-activity";
import { PANEL_CARD, PANEL_SECTION_TITLE } from "@/lib/client-panel-ui";
import { Download, FileText } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/toast-provider";

export function OrderDeliverablesPanel({
  items,
}: {
  items: OrderDeliverableRow[];
}) {
  const { toast } = useToast();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  if (items.length === 0) return null;

  async function download(filePath: string | null, fileName: string | null, id: string) {
    if (!filePath) {
      toast("Este entregable no tiene archivo adjunto todavía.", "info");
      return;
    }
    setLoadingId(id);
    try {
      const res = await fetch(`/api/documents/download?filePath=${encodeURIComponent(filePath)}`);
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) throw new Error(data.error ?? "No se pudo descargar");
      window.open(data.url, "_blank", "noopener,noreferrer");
    } catch (error) {
      toast(error instanceof Error ? error.message : "Error al descargar", "error");
    } finally {
      setLoadingId(null);
    }
  }

  return (
    <section className={`${PANEL_CARD} border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 to-white`}>
      <h2 className={PANEL_SECTION_TITLE}>Entregables de tu gestor</h2>
      <p className="mt-1 text-sm text-[#64748B]">
        Documentos o avisos que Livendia ha dejado listos en tu expediente.
      </p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-white/90 p-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <FileText className="h-5 w-5" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-[#1E293B]">{item.title}</p>
              {item.message ? <p className="mt-1 text-sm text-[#64748B]">{item.message}</p> : null}
              <p className="mt-1 text-xs text-[#94A3B8]">
                {new Date(item.created_at).toLocaleString("es-ES")}
              </p>
            </div>
            {item.file_path ? (
              <button
                type="button"
                disabled={loadingId === item.id}
                onClick={() => void download(item.file_path, item.file_name, item.id)}
                className="inline-flex min-h-10 shrink-0 items-center gap-1 rounded-full bg-emerald-600 px-3 py-2 text-xs font-bold text-white hover:bg-emerald-700 disabled:opacity-60"
              >
                <Download className="h-4 w-4" aria-hidden />
                {loadingId === item.id ? "…" : "Descargar"}
              </button>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
