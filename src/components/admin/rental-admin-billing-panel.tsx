"use client";

import { updateRentalAdminBillingStatus } from "@/app/admin/actions";
import { ADMIN_BTN_GHOST, ADMIN_BTN_PRIMARY } from "@/lib/admin-ui";
import { Loader2, PauseCircle, PlayCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type RentalAdminBillingPanelState = {
  status: "active" | "suspended";
  billingMethod: "transfer" | "stripe";
  monthlyCents: number;
  startedOn: string;
  suspendedAt: string | null;
  suspendReason: string | null;
  nextDueDate: string | null;
  nextDueCents: number | null;
};

function formatEuros(cents: number): string {
  return `${(cents / 100).toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
}

export function RentalAdminBillingPanel({
  clientId,
  billing,
}: {
  clientId: string;
  billing: RentalAdminBillingPanelState | null;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reason, setReason] = useState("");
  const [showSuspendForm, setShowSuspendForm] = useState(false);

  const isActive = billing?.status !== "suspended";

  async function setStatus(status: "active" | "suspended") {
    setBusy(true);
    setError(null);
    const result = await updateRentalAdminBillingStatus({
      clientId,
      status,
      suspendReason: status === "suspended" ? reason.trim() || undefined : undefined,
    });
    setBusy(false);
    if (result.error) {
      setError(result.error);
      return;
    }
    setShowSuspendForm(false);
    setReason("");
    router.refresh();
  }

  return (
    <section className="mb-8 rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#1E293B]">Administración de alquiler</h2>
          <p className="mt-1 text-sm text-[#64748B]">
            Cuota mensual el día 1. Puedes suspender la gestión (no se generan cuotas en calendario mientras esté
            suspendida).
          </p>
        </div>
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${
            isActive ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-700"
          }`}
        >
          {isActive ? "Activo" : "Suspendido"}
        </span>
      </div>

      {billing ? (
        <ul className="mt-4 grid gap-2 text-sm text-[#475569] sm:grid-cols-2">
          <li>
            <span className="text-[#64748B]">Cuota:</span>{" "}
            <strong className="text-[#1E293B]">{formatEuros(billing.monthlyCents)}/mes</strong>
          </li>
          <li>
            <span className="text-[#64748B]">Cobro:</span>{" "}
            {billing.billingMethod === "transfer" ? "Transferencia" : "Stripe"}
          </li>
          <li>
            <span className="text-[#64748B]">Desde:</span>{" "}
            {new Date(billing.startedOn).toLocaleDateString("es-ES")}
          </li>
          {billing.nextDueDate ? (
            <li>
              <span className="text-[#64748B]">Próximo día 1:</span>{" "}
              {new Date(billing.nextDueDate).toLocaleDateString("es-ES")} ·{" "}
              {billing.nextDueCents != null ? formatEuros(billing.nextDueCents) : "—"}
            </li>
          ) : null}
          {billing.status === "suspended" && billing.suspendReason ? (
            <li className="sm:col-span-2 text-amber-800">
              Motivo suspensión: {billing.suspendReason}
            </li>
          ) : null}
        </ul>
      ) : (
        <p className="mt-4 text-sm text-[#64748B]">
          Sin ficha de facturación recurrente. Se creará al registrar la primera cuota por transferencia.
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {isActive ? (
          <>
            {!showSuspendForm ? (
              <button
                type="button"
                onClick={() => setShowSuspendForm(true)}
                className={`${ADMIN_BTN_GHOST} border-amber-200 text-amber-900 hover:bg-amber-50`}
              >
                <PauseCircle className="h-4 w-4" aria-hidden />
                Suspender administración
              </button>
            ) : (
              <div className="w-full rounded-lg border border-amber-200 bg-amber-50/50 p-4">
                <label className="block text-sm">
                  <span className="font-medium text-[#1E293B]">Motivo (opcional)</span>
                  <input
                    type="text"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Ej. fin de contrato, cliente pausa servicio…"
                  />
                </label>
                {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
                <div className="mt-3 flex gap-2">
                  <button type="button" disabled={busy} onClick={() => setStatus("suspended")} className={ADMIN_BTN_PRIMARY}>
                    {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : "Confirmar suspensión"}
                  </button>
                  <button type="button" onClick={() => setShowSuspendForm(false)} className={ADMIN_BTN_GHOST}>
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <button type="button" disabled={busy} onClick={() => setStatus("active")} className={ADMIN_BTN_PRIMARY}>
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <PlayCircle className="h-4 w-4" aria-hidden />}
            Reactivar administración
          </button>
        )}
      </div>
    </section>
  );
}
