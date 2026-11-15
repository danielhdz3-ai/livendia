"use client";

import Link from "next/link";

export function ConsultaFiscalExamplePrintBar({ backHref }: { backHref: string }) {
  return (
    <div className="no-print flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-[#F8FAFC] px-4 py-3 sm:px-6">
      <Link href={backHref} className="text-sm font-semibold text-[#1A4FBF] hover:underline">
        ← Volver a consulta fiscal
      </Link>
      <button
        type="button"
        onClick={() => window.print()}
        className="rounded-full bg-[#1A4FBF] px-5 py-2 text-sm font-semibold text-white hover:bg-[#153f9a]"
      >
        Imprimir o guardar como PDF
      </button>
    </div>
  );
}