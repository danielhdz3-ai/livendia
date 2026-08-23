"use client";

import {
  PROPERTY_DOCUMENT_LABEL_ES,
  TENANT_DOCUMENT_LABEL_ES,
} from "@/lib/rental-document-labels";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export type DocRequestRow = {
  id: string;
  target: string;
  document_type: string;
  message: string | null;
  status: string;
  created_at: string;
  fulfilled_at: string | null;
};

function labelFor(row: DocRequestRow) {
  if (row.target === "tenant") {
    return TENANT_DOCUMENT_LABEL_ES[row.document_type] ?? row.document_type;
  }
  return PROPERTY_DOCUMENT_LABEL_ES[row.document_type] ?? row.document_type;
}

export function AdminDocumentRequestForm({
  propertyId,
  tenantId,
}: {
  propertyId: string;
  tenantId?: string | null;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [ok, setOk] = useState(false);
  const [target, setTarget] = useState<"property" | "tenant">("property");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    setOk(false);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/rental/document-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          propertyId,
          tenantId: target === "tenant" ? tenantId : null,
          target,
          documentType: String(fd.get("documentType")),
          message: String(fd.get("message") || ""),
        }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Error");
      setOk(true);
      e.currentTarget.reset();
      router.refresh();
    } catch (error) {
      setErr(error instanceof Error ? error.message : "Error");
    } finally {
      setBusy(false);
    }
  }

  const types =
    target === "tenant" ? Object.entries(TENANT_DOCUMENT_LABEL_ES) : Object.entries(PROPERTY_DOCUMENT_LABEL_ES);

  return (
    <form onSubmit={onSubmit} className="space-y-3 rounded-xl border border-slate-200 bg-white p-4">
      <h4 className="font-semibold text-[#1E293B]">Solicitar documentación</h4>
      {err ? <p className="text-sm text-red-700">{err}</p> : null}
      {ok ? <p className="text-sm text-emerald-700">Solicitud enviada al cliente.</p> : null}
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="text-xs font-semibold text-[#64748B]">Destino</label>
          <select
            value={target}
            onChange={(e) => setTarget(e.target.value as "property" | "tenant")}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          >
            <option value="property">Inmueble</option>
            <option value="tenant">Inquilino</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-[#64748B]">Documento</label>
          <select name="documentType" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm">
            {types.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="text-xs font-semibold text-[#64748B]">Mensaje al cliente</label>
          <input name="message" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Ej. Subir nota simple actualizada" />
        </div>
      </div>
      <button type="submit" disabled={busy} className="rounded-lg bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2563EB] disabled:opacity-60">
        {busy ? "Enviando…" : "Enviar solicitud"}
      </button>
    </form>
  );
}

export function RentalDocumentRequestsList({
  requests,
  canManage,
}: {
  requests: DocRequestRow[];
  canManage?: boolean;
}) {
  const router = useRouter();
  const pending = requests.filter((r) => r.status === "pending");

  async function updateStatus(requestId: string, status: string) {
    await fetch("/api/rental/document-request", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestId, status }),
    });
    router.refresh();
  }

  if (requests.length === 0) {
    return <p className="text-sm text-[#64748B]">No hay solicitudes de documentación.</p>;
  }

  return (
    <ul className="space-y-3">
      {requests.map((row) => (
        <li key={row.id} className="rounded-lg border border-slate-200 p-4">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <div className="font-medium text-[#1E293B]">{labelFor(row)}</div>
              <div className="text-xs text-[#64748B]">
                {row.target === "tenant" ? "Inquilino" : "Inmueble"} ·{" "}
                {new Date(row.created_at).toLocaleDateString("es-ES")}
              </div>
              {row.message ? <p className="mt-1 text-sm text-[#475569]">{row.message}</p> : null}
            </div>
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                row.status === "pending"
                  ? "bg-amber-100 text-amber-800"
                  : row.status === "fulfilled"
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-slate-100 text-slate-600"
              }`}
            >
              {row.status === "pending" ? "Pendiente" : row.status === "fulfilled" ? "Recibido" : "Cancelada"}
            </span>
          </div>
          {row.status === "pending" ? (
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href={row.target === "tenant" ? "/dashboard/rental/inquilino" : "/dashboard/rental/inmueble"}
                className="rounded-lg border border-[#1A4FBF] px-3 py-1.5 text-xs font-semibold text-[#1A4FBF] hover:bg-blue-50"
              >
                Subir documento
              </Link>
              {canManage ? (
                <>
                  <button type="button" onClick={() => void updateStatus(row.id, "fulfilled")} className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">
                    Marcar recibido
                  </button>
                  <button type="button" onClick={() => void updateStatus(row.id, "cancelled")} className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-600">
                    Cancelar
                  </button>
                </>
              ) : null}
            </div>
          ) : null}
        </li>
      ))}
      {pending.length > 0 && !canManage ? (
        <p className="text-xs text-amber-700">{pending.length} documento(s) pendiente(s) de tu gestor.</p>
      ) : null}
    </ul>
  );
}
