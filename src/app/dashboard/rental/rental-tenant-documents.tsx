"use client";

import { resolveRentalDocStoragePath } from "@/lib/rental-doc-storage-path";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type RentalTenantDocRow = {
  id: string;
  document_type: string;
  file_name: string;
  file_url: string;
  storage_path: string | null;
  uploaded_at: string;
};

const DOC_TYPES: { value: string; label: string }[] = [
  { value: "dni", label: "DNI / NIE" },
  { value: "nomina", label: "Nómina" },
  { value: "contrato_trabajo", label: "Contrato de trabajo" },
  { value: "contrato_arrendamiento", label: "Contrato de arrendamiento" },
  { value: "otro", label: "Otro" },
];

function typeLabel(v: string) {
  return DOC_TYPES.find((t) => t.value === v)?.label ?? v;
}

export function RentalTenantDocuments({
  tenantId,
  initialDocs,
}: {
  tenantId: string;
  initialDocs: RentalTenantDocRow[];
}) {
  const router = useRouter();
  const [docs, setDocs] = useState(initialDocs);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [docType, setDocType] = useState("otro");

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    setErr(null);
    setBusy(true);
    try {
      const fd = new FormData();
      fd.append("tenantId", tenantId);
      fd.append("documentType", docType);
      fd.append("file", file);

      const res = await fetch("/api/rental/tenant-document", { method: "POST", body: fd });
      const data = (await res.json()) as {
        error?: string;
        document?: RentalTenantDocRow;
      };

      if (!res.ok) {
        setErr(data.error ?? "Error al subir");
        return;
      }

      if (data.document) {
        setDocs((d) => [data.document as RentalTenantDocRow, ...d]);
      }
      router.refresh();
    } catch {
      setErr("Error de red");
    } finally {
      setBusy(false);
    }
  }

  async function downloadRow(d: RentalTenantDocRow) {
    const path = resolveRentalDocStoragePath(d.storage_path, d.file_url);
    if (!path) {
      setErr("No hay ruta de archivo para descargar (registro antiguo). Sube de nuevo el archivo.");
      return;
    }
    setErr(null);
    const r = await fetch(`/api/documents/download?filePath=${encodeURIComponent(path)}`);
    const j = (await r.json()) as { url?: string; error?: string };
    if (!r.ok || !j.url) {
      setErr(j.error ?? "No se pudo generar la descarga");
      return;
    }
    window.open(j.url, "_blank", "noopener,noreferrer");
  }

  async function removeDoc(d: RentalTenantDocRow) {
    if (!globalThis.confirm("¿Eliminar este archivo del inquilino?")) return;
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch(`/api/rental/tenant-document?id=${encodeURIComponent(d.id)}`, {
        method: "DELETE",
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setErr(data.error ?? "No se pudo eliminar");
        return;
      }
      setDocs((x) => x.filter((y) => y.id !== d.id));
      router.refresh();
    } catch {
      setErr("Error de red");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <p className="text-sm text-[#64748B]">
        DNI, nóminas, contratos y demás documentación del arrendatario. Los archivos quedan asociados a tu cuenta.
      </p>

      {err ? <p className="mt-3 text-xs text-red-600">{err}</p> : null}

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-end">
        <div className="min-w-[180px] flex-1">
          <label htmlFor={`tenant-doc-type-${tenantId}`} className="text-xs font-medium text-[#64748b]">
            Tipo de documento
          </label>
          <select
            id={`tenant-doc-type-${tenantId}`}
            value={docType}
            onChange={(e) => setDocType(e.target.value)}
            className="mt-0.5 w-full rounded-lg border border-slate-300 bg-white px-2 py-2 text-sm text-[#1E293B]"
          >
            {DOC_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <label className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60">
          {busy ? "Subiendo…" : "Subir archivo"}
          <input
            type="file"
            className="sr-only"
            disabled={busy}
            accept=".pdf,.doc,.docx,image/*,.heic,.heif"
            onChange={onFile}
          />
        </label>
      </div>

      {!docs.length ? (
        <p className="mt-6 text-center text-sm text-[#64748B]">
          No hay documentos aún. Puedes subir el DNI y el resto de la documentación aquí.
        </p>
      ) : (
        <ul className="mt-6 space-y-2">
          {docs.map((d) => (
            <li
              key={d.id}
              className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-slate-50 px-4 py-3 text-sm ring-1 ring-slate-100"
            >
              <div>
                <span className="font-medium text-[#1E293B]">{d.file_name}</span>
                <span className="ml-2 text-xs text-[#64748b]">({typeLabel(d.document_type)})</span>
                <div className="mt-0.5 text-xs text-[#94a3b8]">
                  {new Date(d.uploaded_at).toLocaleString("es-ES")}
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="text-xs font-semibold text-[#1A4FBF] hover:underline"
                  disabled={busy}
                  onClick={() => void downloadRow(d)}
                >
                  Descargar
                </button>
                <button
                  type="button"
                  disabled={busy}
                  className="text-xs font-semibold text-red-600 hover:underline disabled:opacity-50"
                  onClick={() => void removeDoc(d)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
