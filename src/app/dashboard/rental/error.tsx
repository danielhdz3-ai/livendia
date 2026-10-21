"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function RentalDashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("dashboard/rental:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-8 text-center">
      <h1 className="text-2xl font-bold text-[#1E293B]">No se pudo cargar el panel de alquiler</h1>
      <p className="mt-2 max-w-md text-sm text-[#64748B]">
        Ha ocurrido un error temporal. Si acabas de entrar, prueba de nuevo en unos segundos.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-lg bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2563EB]"
        >
          Reintentar
        </button>
        <Link
          href="/dashboard"
          className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#1E293B] hover:bg-slate-50"
        >
          Ir al panel general
        </Link>
      </div>
    </div>
  );
}
