"use client";

import { generateFiscalMemoriaDraft, approveFiscalMemoriaDraft } from "@/app/admin/fiscal-actions";
import type { FiscalSellerCalcInput } from "@/lib/fiscal-seller-calculator";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  orderId: string;
  intake: Record<string, unknown> | null;
  draftHtml?: string | null;
};

export function AdminFiscalConsultationPanel({ orderId, intake, draftHtml }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState<string | null>(null);
  const [calcJson, setCalcJson] = useState(
    JSON.stringify(
      {
        municipalityId: "barcelona",
        escrituraDate: (intake?.escrituraDate as string) ?? "2026-12-01",
        acquisitionDate: "2016-01-01",
        salePrice: 0,
        acquisitionPrice: 0,
        saleCosts: 0,
        acquisitionCosts: 0,
        improvements: 0,
        amortization: 0,
        cadastralSoilValue: 0,
        cadastralSoilPercent: 50,
        mortgageBalance: 0,
        owners: [{ name: "Titular 1", percent: 100 }],
      } satisfies Partial<FiscalSellerCalcInput>,
      null,
      2,
    ),
  );

  async function onGenerate() {
    setLoading(true);
    setInfo(null);
    let parsed: FiscalSellerCalcInput;
    try {
      parsed = JSON.parse(calcJson) as FiscalSellerCalcInput;
    } catch {
      setInfo("JSON de cálculo inválido");
      setLoading(false);
      return;
    }
    const res = await generateFiscalMemoriaDraft(orderId, parsed);
    setLoading(false);
    if ("error" in res) {
      setInfo(res.error ?? "Error");
      return;
    }
    setInfo("Borrador generado (solo gestor). Revisa y aprueba para el cliente.");
    router.refresh();
  }

  async function onApprove() {
    setLoading(true);
    const res = await approveFiscalMemoriaDraft(orderId);
    setLoading(false);
    if ("error" in res) {
      setInfo(res.error ?? "Error");
      return;
    }
    setInfo("Memoria visible para el cliente y email enviado.");
    router.refresh();
  }

  return (
    <section className="rounded-xl border border-violet-200 bg-violet-50/50 p-5">
      <h2 className="text-lg font-bold text-[#1E293B]">Consulta fiscal vendedor</h2>
      {intake ? (
        <pre className="mt-3 max-h-40 overflow-auto rounded-lg bg-white p-3 text-xs text-[#475569]">
          {JSON.stringify(intake, null, 2)}
        </pre>
      ) : (
        <p className="mt-2 text-sm text-[#64748b]">Sin datos de contratación.</p>
      )}

      <label className="mt-4 block text-sm font-medium text-[#1E293B]">Datos para simulación (JSON)</label>
      <textarea
        rows={10}
        value={calcJson}
        onChange={(e) => setCalcJson(e.target.value)}
        className="mt-2 w-full rounded-lg border border-slate-300 font-mono text-xs"
      />

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          disabled={loading}
          onClick={onGenerate}
          className="rounded-full bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
        >
          Generar borrador de memoria
        </button>
        <button
          type="button"
          disabled={loading || !draftHtml}
          onClick={onApprove}
          className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
        >
          Aprobar y entregar al cliente
        </button>
      </div>
      {draftHtml ? (
        <details className="mt-4">
          <summary className="cursor-pointer text-sm font-semibold text-[#1A4FBF]">Vista previa borrador</summary>
          <iframe
            title="Borrador memoria fiscal"
            srcDoc={draftHtml}
            className="mt-2 h-96 w-full rounded-lg border border-slate-200 bg-white"
          />
        </details>
      ) : null}
      {info ? <p className="mt-3 text-sm text-[#64748b]">{info}</p> : null}
    </section>
  );
}