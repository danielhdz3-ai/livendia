"use client";

import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type DocRow = {
  id: string;
  file_name: string;
  file_path: string;
  document_type: string;
  created_at: string;
};

const DOC_TYPES: { value: string; label: string }[] = [
  { value: "dni_propietario", label: "DNI propietario" },
  { value: "dni_inquilino", label: "DNI inquilino" },
  { value: "escrituras", label: "Escrituras" },
  { value: "nota_simple", label: "Nota simple" },
  { value: "contrato_actual", label: "Contrato actual" },
  { value: "recibos", label: "Recibos" },
  { value: "poder_notarial", label: "Poder notarial" },
  { value: "otro", label: "Otro" },
];

function typeLabel(v: string) {
  return DOC_TYPES.find((t) => t.value === v)?.label ?? v;
}

export function OrderDocuments({
  orderId,
  userId,
  canUpload,
  initialDocs,
}: {
  orderId: string;
  userId: string;
  canUpload: boolean;
  initialDocs: DocRow[];
}) {
  const router = useRouter();
  const [docs, setDocs] = useState(initialDocs);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [docType, setDocType] = useState("otro");

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file || !canUpload) return;
    if (file.size > 10 * 1024 * 1024) {
      setErr("Máximo 10 MB por archivo");
      return;
    }
    setErr(null);
    setBusy(true);
    const supabase = createBrowserSupabaseClient();
    const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const path = `${userId}/${orderId}/${crypto.randomUUID()}_${safe}`;

    const { error: upErr } = await supabase.storage
      .from("documents")
      .upload(path, file, {
        contentType: file.type || "application/octet-stream",
        upsert: false,
      });

    if (upErr) {
      setBusy(false);
      setErr(upErr.message);
      return;
    }

    const { data: row, error: insErr } = await supabase
      .from("documents")
      .insert({
        order_id: orderId,
        client_id: userId,
        file_name: file.name,
        file_path: path,
        file_type: file.type || null,
        file_size: file.size,
        document_type: docType,
      })
      .select("id, file_name, file_path, document_type, created_at")
      .single();

    if (insErr) {
      await supabase.storage.from("documents").remove([path]);
      setBusy(false);
      setErr(insErr.message);
      return;
    }

    setBusy(false);
    if (row) setDocs((d) => [row as DocRow, ...d]);
    router.refresh();

    void fetch("/api/email/doc-uploaded", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderId,
        fileName: file.name,
        docTypeLabel: typeLabel(docType),
      }),
    });
  }

  async function download(path: string) {
    const supabase = createBrowserSupabaseClient();
    const { data, error } = await supabase.storage
      .from("documents")
      .createSignedUrl(path, 120);
    if (error || !data?.signedUrl) return;
    window.open(data.signedUrl, "_blank", "noopener,noreferrer");
  }

  async function removeDoc(d: DocRow) {
    if (!globalThis.confirm("¿Eliminar este archivo?")) return;
    setBusy(true);
    const supabase = createBrowserSupabaseClient();
    await supabase.storage.from("documents").remove([d.file_path]);
    await supabase.from("documents").delete().eq("id", d.id);
    setDocs((x) => x.filter((y) => y.id !== d.id));
    setBusy(false);
    router.refresh();
  }

  return (
    <div className="mt-4 border-t border-slate-100 pt-4">
      <h4 className="text-sm font-semibold text-[#1E293B]">Documentación</h4>
      {err ? <p className="mt-2 text-xs text-red-600">{err}</p> : null}

      {canUpload ? (
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-end">
          <div className="flex-1 min-w-[140px]">
            <label htmlFor={`dtype-${orderId}`} className="text-xs text-[#64748b]">
              Tipo
            </label>
            <select
              id={`dtype-${orderId}`}
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
          <label className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#06B6D4] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0891b2] disabled:opacity-60">
            {busy ? "Subiendo…" : "Subir archivo"}
            <input
              type="file"
              className="sr-only"
              disabled={busy}
              onChange={onFile}
            />
          </label>
        </div>
      ) : (
        <p className="mt-2 text-xs text-[#64748b]">No puedes subir archivos en este estado.</p>
      )}

      {!docs.length ? (
        <p className="mt-3 text-sm text-[#64748b]">Ningún archivo aún.</p>
      ) : (
        <ul className="mt-3 space-y-2">
          {docs.map((d) => (
            <li
              key={d.id}
              className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm"
            >
              <div>
                <span className="font-medium text-[#1E293B]">{d.file_name}</span>
                <span className="ml-2 text-xs text-[#64748b]">({typeLabel(d.document_type)})</span>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="text-xs font-semibold text-[#1A4FBF] hover:underline"
                  onClick={() => download(d.file_path)}
                >
                  Descargar
                </button>
                {canUpload ? (
                  <button
                    type="button"
                    disabled={busy}
                    className="text-xs font-semibold text-red-600 hover:underline disabled:opacity-50"
                    onClick={() => removeDoc(d)}
                  >
                    Eliminar
                  </button>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
