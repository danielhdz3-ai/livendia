"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function IncidentApprovalActions({
  incidentId,
  status,
  estimatedCost,
}: {
  incidentId: string;
  status: string;
  estimatedCost?: number | null;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  if (status !== "waiting_approval") return null;

  async function respond(action: "approve" | "reject") {
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch("/api/incidents/approve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ incidentId, action }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Error");
      router.refresh();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Error");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="rounded-2xl border-2 border-purple-200 bg-purple-50 p-6">
      <h3 className="font-bold text-[#1E293B]">Presupuesto pendiente de tu aprobación</h3>
      {estimatedCost != null ? (
        <p className="mt-2 text-sm text-[#475569]">
          Coste estimado: <strong>{estimatedCost.toFixed(2)} €</strong>
        </p>
      ) : null}
      {err ? <p className="mt-2 text-sm text-red-700">{err}</p> : null}
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          disabled={busy}
          onClick={() => void respond("approve")}
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-60"
        >
          Aprobar presupuesto
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() => void respond("reject")}
          className="rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50 disabled:opacity-60"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}
