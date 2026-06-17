"use client";

import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { CheckCircle2, FileUp, Loader2, Upload } from "lucide-react";

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

const MAX_BYTES = 10 * 1024 * 1024;
const MAX_FILES_PER_BATCH = 25;

function typeLabel(v: string) {
  return DOC_TYPES.find((t) => t.value === v)?.label ?? v;
}

type UploadItem = {
  id: string;
  name: string;
  status: "pending" | "uploading" | "done" | "error";
  error?: string;
};

async function uploadSingleFile(
  file: File,
  orderId: string,
  userId: string,
  docType: string,
): Promise<{ ok: true; row: DocRow } | { ok: false; error: string }> {
  if (file.size > MAX_BYTES) {
    return { ok: false, error: `${file.name}: máximo 10 MB` };
  }

  const supabase = createBrowserSupabaseClient();
  const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const path = `${userId}/${orderId}/${crypto.randomUUID()}_${safe}`;

  const { error: upErr } = await supabase.storage.from("documents").upload(path, file, {
    contentType: file.type || "application/octet-stream",
    upsert: false,
  });

  if (upErr) {
    return { ok: false, error: `${file.name}: ${upErr.message}` };
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
    return { ok: false, error: `${file.name}: ${insErr.message}` };
  }

  void fetch("/api/email/doc-uploaded", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      orderId,
      fileName: file.name,
      docTypeLabel: typeLabel(docType),
    }),
  });

  return { ok: true, row: row as DocRow };
}

export function OrderDocuments({
  orderId,
  userId,
  canUpload,
  initialDocs,
  prominent = false,
}: {
  orderId: string;
  userId: string;
  canUpload: boolean;
  initialDocs: DocRow[];
  prominent?: boolean;
}) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [docs, setDocs] = useState(initialDocs);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [docType, setDocType] = useState("otro");
  const [dragOver, setDragOver] = useState(false);
  const [queue, setQueue] = useState<UploadItem[]>([]);

  const processFiles = useCallback(
    async (fileList: FileList | File[]) => {
      if (!canUpload || busy) return;
      const files = Array.from(fileList).slice(0, MAX_FILES_PER_BATCH);
      if (files.length === 0) return;

      setErr(null);
      setBusy(true);

      const items: UploadItem[] = files.map((f) => ({
        id: crypto.randomUUID(),
        name: f.name,
        status: "pending",
      }));
      setQueue(items);

      const newRows: DocRow[] = [];
      const errors: string[] = [];

      for (let i = 0; i < files.length; i += 1) {
        const file = files[i];
        const itemId = items[i].id;
        setQueue((q) => q.map((x) => (x.id === itemId ? { ...x, status: "uploading" } : x)));

        const result = await uploadSingleFile(file, orderId, userId, docType);
        if (result.ok) {
          newRows.push(result.row);
          setQueue((q) => q.map((x) => (x.id === itemId ? { ...x, status: "done" } : x)));
        } else {
          errors.push(result.error);
          setQueue((q) =>
            q.map((x) => (x.id === itemId ? { ...x, status: "error", error: result.error } : x)),
          );
        }
      }

      if (newRows.length) {
        setDocs((d) => [...newRows, ...d]);
        router.refresh();
      }
      if (errors.length) {
        setErr(errors.slice(0, 3).join(" · ") + (errors.length > 3 ? ` (+${errors.length - 3} más)` : ""));
      }

      setBusy(false);
      window.setTimeout(() => setQueue([]), 2500);
    },
    [busy, canUpload, docType, orderId, router, userId],
  );

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    e.target.value = "";
    if (files?.length) void processFiles(files);
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files?.length) void processFiles(e.dataTransfer.files);
  }

  async function download(path: string) {
    const supabase = createBrowserSupabaseClient();
    const { data, error } = await supabase.storage.from("documents").createSignedUrl(path, 120);
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

  const dropZoneClass = prominent
    ? "rounded-2xl border-2 border-dashed p-8 sm:p-10"
    : "rounded-xl border-2 border-dashed p-6";

  return (
    <div className={prominent ? "mt-6" : "mt-4 border-t border-slate-100 pt-4"}>
      {!prominent ? <h4 className="text-sm font-semibold text-[#1E293B]">Documentación</h4> : null}

      {canUpload ? (
        <div className="mt-4 space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <div className="flex-1 sm:max-w-xs">
              <label htmlFor={`dtype-${orderId}`} className="text-sm font-medium text-[#1E293B]">
                Tipo de documento
              </label>
              <select
                id={`dtype-${orderId}`}
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                disabled={busy}
                className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-[#1E293B] focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
              >
                {DOC_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-[#64748B]">
                Se aplicará a todos los archivos de esta subida. Puedes cambiar el tipo entre tandas.
              </p>
            </div>
          </div>

          <div
            className={`${dropZoneClass} transition ${
              dragOver
                ? "border-[#1A4FBF] bg-blue-50/80"
                : "border-slate-300 bg-slate-50/80 hover:border-[#1A4FBF]/50 hover:bg-blue-50/40"
            } ${busy ? "pointer-events-none opacity-70" : ""}`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1A4FBF]/10 text-[#1A4FBF]">
                {busy ? <Loader2 className="h-7 w-7 animate-spin" /> : <Upload className="h-7 w-7" />}
              </div>
              <p className="mt-4 text-base font-semibold text-[#1E293B]">
                Arrastra aquí varios archivos o selecciónalos
              </p>
              <p className="mt-2 max-w-md text-sm text-[#64748B]">
                Fotos, PDF, Word… hasta <strong>25 archivos</strong> a la vez y <strong>10 MB</strong> por archivo.
              </p>
              <button
                type="button"
                disabled={busy}
                onClick={() => inputRef.current?.click()}
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-bold text-white shadow hover:bg-[#2563EB] disabled:opacity-60"
              >
                <FileUp className="h-4 w-4" />
                {busy ? "Subiendo archivos…" : "Elegir archivos"}
              </button>
              <input
                ref={inputRef}
                type="file"
                className="sr-only"
                multiple
                disabled={busy}
                accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt"
                onChange={onInputChange}
              />
            </div>
          </div>

          {queue.length > 0 ? (
            <ul className="space-y-2 rounded-xl bg-white p-4 ring-1 ring-slate-200">
              {queue.map((item) => (
                <li key={item.id} className="flex items-center gap-3 text-sm">
                  {item.status === "uploading" ? (
                    <Loader2 className="h-4 w-4 shrink-0 animate-spin text-[#1A4FBF]" />
                  ) : item.status === "done" ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  ) : item.status === "error" ? (
                    <span className="text-red-600">✕</span>
                  ) : (
                    <span className="h-4 w-4 shrink-0 rounded-full bg-slate-200" />
                  )}
                  <span className="min-w-0 flex-1 truncate text-[#1E293B]">{item.name}</span>
                  {item.error ? <span className="text-xs text-red-600">{item.error}</span> : null}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : (
        <p className="mt-2 text-sm text-[#64748b]">No puedes subir archivos en este estado.</p>
      )}

      {err ? <p className="mt-3 text-sm text-red-600">{err}</p> : null}

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-[#1E293B]">
          Archivos subidos {docs.length > 0 ? `(${docs.length})` : ""}
        </h4>
        {!docs.length ? (
          <p className="mt-2 text-sm text-[#64748B]">Aún no has subido ningún archivo.</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {docs.map((d) => (
              <li
                key={d.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm ring-1 ring-slate-100"
              >
                <div className="min-w-0">
                  <span className="font-medium text-[#1E293B]">{d.file_name}</span>
                  <span className="ml-2 text-xs text-[#64748B]">({typeLabel(d.document_type)})</span>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="text-sm font-semibold text-[#1A4FBF] hover:underline"
                    onClick={() => download(d.file_path)}
                  >
                    Descargar
                  </button>
                  {canUpload ? (
                    <button
                      type="button"
                      disabled={busy}
                      className="text-sm font-semibold text-red-600 hover:underline disabled:opacity-50"
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
    </div>
  );
}
