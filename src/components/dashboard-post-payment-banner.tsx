"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, Upload, X } from "lucide-react";
import { useState } from "react";

export function DashboardPostPaymentBanner({
  orderId,
  serviceName,
}: {
  orderId: string | null;
  serviceName: string | null;
}) {
  const searchParams = useSearchParams();
  const pedidoFromUrl = searchParams.get("pedido");
  const activeOrderId = orderId ?? pedidoFromUrl;
  const [dismissed, setDismissed] = useState(false);

  if (!activeOrderId || dismissed) return null;

  const title = serviceName ?? "tu servicio";

  return (
    <section
      className="mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-[#1A4FBF] p-6 text-white shadow-lg ring-1 ring-emerald-500/30 sm:p-8"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">¡Pago confirmado!</h2>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-emerald-50 sm:text-base">
              Tu cuenta Livendia está activa. Sube la documentación de{" "}
              <strong className="text-white">{title}</strong> en el panel o envíala a{" "}
              <strong className="text-white">info@livendia.com</strong>.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={`/mis-pedidos/${activeOrderId}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1A4FBF] shadow hover:bg-slate-50"
          >
            <Upload className="h-4 w-4" />
            Subir documentación ahora
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            <X className="h-4 w-4" />
            Explorar el panel
          </button>
        </div>
      </div>
    </section>
  );
}
