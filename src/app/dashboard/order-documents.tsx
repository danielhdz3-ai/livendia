"use client";

import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import {
  ORDER_DOC_ACCEPT_DOCUMENTS,
  ORDER_DOC_ACCEPT_PHOTOS,
  ORDER_DOC_MAX_BYTES,
  ORDER_DOC_MAX_MB,
  ORDER_DOC_TYPE_LABELS,
  buildOrderDocStoragePath,
  formatOrderDocBytes,
  guessOrderDocContentType,
  mapStorageUploadError,
  validateOrderDocFile,
} from "@/lib/order-document-upload";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { CheckCircle2, FileText, ImageIcon, Loader2, Upload } from "lucide-react";

export type DocRow = {
  id: string;
  file_name: string;
  file_path: string;
  document_type: string;
  created_at: string;
};

const DOC_TYPES: { value: string; label: string }[] = Object.entries(ORDER_DOC_TYPE_LABELS).map(
  ([value, label]) => ({ value, label }),
);

const MAX_BYTES = ORDER_DOC_MAX_BYTES;
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
  const validation = validateOrderDocFile(file);
  if (!validation.ok) {
    return { ok: false, error: validation.error };
  }

  if (file.size > MAX_BYTES) {
    return {
      ok: false,
      error: `${file.name}: máximo ${ORDER_DOC_MAX_MB} MB (${formatOrderDocBytes(file.size)})`,
    };
  }

  const supabase = createBrowserSupabaseClient();
  const path = buildOrderDocStoragePath(userId, orderId, file.name);
  const contentType = guessOrderDocContentType(file);

  const {
    data: { session: initialSession },
  } = await supabase.auth.getSession();

  let session = initialSession;
  if (!session?.access_token) {
    const { data: refreshed } = await supabase.auth.refreshSession();
    session = refreshed.session;
  }

  if (!session?.access_token) {
    return {
      ok: false,
      error: `${file.name}: tu sesión ha caducado. Cierra sesión, vuelve a entrar e inténtalo de nuevo.`,
    };
  }

  const { error: storageError } = await supabase.storage.from("documents").upload(path, file, {
    contentType,
    upsert: false,
  });

  if (storageError) {
    return { ok: false, error: `${file.name}: ${mapStorageUploadError(storageError.message)}` };
  }

  const response = await fetch("/api/orders/document", {
    method: "PUT",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.access_token}`,
    },
    body: JSON.stringify({
      orderId,
      documentType: docType,
      fileName: file.name,
      filePath: path,
      fileType: contentType,
      fileSize: file.size,
    }),
  });

  let data: { document?: DocRow; error?: string };
  try {
    data = (await response.json()) as { document?: DocRow; error?: string };
  } catch {
    await supabase.storage.from("documents").remove([path]);
    return {
      ok: false,
      error: `${file.name}: no se pudo confirmar la subida. Recarga la página e inténtalo de nuevo.`,
    };
  }

  if (!response.ok || !data.document) {
    await supabase.storage.from("documents").remove([path]);
    return { ok: false, error: `${file.name}: ${data.error ?? "error al registrar el archivo"}` };
  }

  return { ok: true, row: data.document };
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
  const photoInputRef = useRef<HTMLInputElement>(null);
  const docInputRef = useRef<HTMLInputElement>(null);
  const busyRef = useRef(false);
  const [docs, setDocs] = useState(initialDocs);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [docType, setDocType] = useState("otro");
  const [dragOver, setDragOver] = useState(false);
  const [queue, setQueue] = useState<UploadItem[]>([]);
  const [success, setSuccess] = useState<string | null>(null);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  const processFiles = useCallback(
    async (fileList: FileList | File[]) => {
      if (!canUpload) {
        setErr("No puedes subir archivos en este estado del pedido.");
        return;
      }
      if (busyRef.current) return;

      const files = Array.from(fileList).slice(0, MAX_FILES_PER_BATCH);
      if (files.length === 0) {
        setErr("No se detectó ningún archivo. Vuelve a elegirlo (PDF, Word o foto).");
        return;
      }

      busyRef.current = true;
      setErr(null);
      setSuccess(null);
      setStatusMsg(
        files.length === 1
          ? `Subiendo «${files[0].name}»…`
          : `Subiendo ${files.length} archivos…`,
      );
      setBusy(true);

      const items: UploadItem[] = files.map((f) => ({
        id: crypto.randomUUID(),
        name: f.name || "archivo",
        status: "pending",
      }));
      setQueue(items);

      const newRows: DocRow[] = [];
      const errors: string[] = [];

      try {
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
      } catch (cause) {
        const message =
          cause instanceof Error ? cause.message : "Error inesperado al subir. Recarga e inténtalo de nuevo.";
        errors.push(message);
        setErr(message);
      }

      if (newRows.length) {
        setDocs((d) => [...newRows, ...d]);
        setSuccess(
          newRows.length === 1
            ? `«${newRows[0].file_name}» guardado correctamente.`
            : `${newRows.length} archivos guardados correctamente.`,
        );
        router.refresh();
      }
      if (errors.length) {
        setErr(errors.slice(0, 3).join(" · ") + (errors.length > 3 ? ` (+${errors.length - 3} más)` : ""));
      } else if (!newRows.length) {
        setErr("No se pudo guardar el archivo. Prueba de nuevo o contáctanos por WhatsApp.");
      }

      setStatusMsg(null);
      busyRef.current = false;
      setBusy(false);
      window.setTimeout(() => setQueue([]), 8000);
    },
    [canUpload, docType, orderId, router, userId],
  );

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target;
    const picked = input.files ? Array.from(input.files) : [];
    input.value = "";
    if (picked.length) void processFiles(picked);
    else setErr("No se recibió el archivo. En móvil, prueba «PDF o Word» o «Fotos o galería».");
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files?.length) void processFiles(e.dataTransfer.files);
  }

  async function download(path: string, fileName: string) {
    setErr(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { data, error } = await supabase.storage.from("documents").createSignedUrl(path, 180);
      if (error || !data?.signedUrl) {
        setErr(`No se pudo abrir «${fileName}». Recarga e inténtalo de nuevo.`);
        return;
      }
      window.open(data.signedUrl, "_blank", "noopener,noreferrer");
    } catch {
      setErr(`Error de red al abrir «${fileName}». Comprueba la conexión.`);
    }
  }

  async function removeDoc(d: DocRow) {
    if (!globalThis.confirm("¿Eliminar este archivo?")) return;
    setBusy(true);
    setErr(null);
    try {
      const supabase = createBrowserSupabaseClient();
      await supabase.storage.from("documents").remove([d.file_path]);
      const { error } = await supabase.from("documents").delete().eq("id", d.id);
      if (error) {
        setErr(`No se pudo eliminar «${d.file_name}»: ${error.message}`);
      } else {
        setDocs((x) => x.filter((y) => y.id !== d.id));
        router.refresh();
      }
    } catch {
      setErr("Error de red al eliminar. Inténtalo de nuevo.");
    } finally {
      setBusy(false);
    }
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
              <p className="mt-4 hidden text-base font-semibold text-[#1E293B] sm:block">
                Arrastra aquí varios archivos o selecciónalos
              </p>
              <p className="mt-4 text-base font-semibold text-[#1E293B] sm:hidden">
                Sube fotos, PDF o Word desde tu móvil
              </p>
              <p className="mt-2 max-w-md text-sm text-[#64748B]">
                PDF, Word (.doc/.docx), fotos del móvil (incl. iPhone HEIC). Hasta{" "}
                <strong>25 archivos</strong> y <strong>{ORDER_DOC_MAX_MB} MB</strong> por archivo.
              </p>
              <div className="mt-5 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
                <label
                  htmlFor={`photo-input-${orderId}`}
                  className={`inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#1A4FBF] px-6 py-3.5 text-sm font-bold text-white shadow hover:bg-[#2563EB] active:scale-[0.98] sm:w-auto ${
                    busy ? "pointer-events-none opacity-60" : ""
                  }`}
                >
                  <ImageIcon className="h-4 w-4" />
                  {busy ? "Subiendo…" : "Fotos o galería"}
                </label>
                <label
                  htmlFor={`doc-input-${orderId}`}
                  className={`inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[#1A4FBF] bg-white px-6 py-3.5 text-sm font-bold text-[#1A4FBF] hover:bg-blue-50 active:scale-[0.98] sm:w-auto ${
                    busy ? "pointer-events-none opacity-60" : ""
                  }`}
                >
                  <FileText className="h-4 w-4" />
                  PDF o Word
                </label>
                <input
                  id={`photo-input-${orderId}`}
                  ref={photoInputRef}
                  type="file"
                  className="sr-only"
                  multiple
                  disabled={busy}
                  accept={ORDER_DOC_ACCEPT_PHOTOS}
                  onChange={onInputChange}
                />
                <input
                  id={`doc-input-${orderId}`}
                  ref={docInputRef}
                  type="file"
                  className="sr-only"
                  multiple
                  disabled={busy}
                  accept={ORDER_DOC_ACCEPT_DOCUMENTS}
                  onChange={onInputChange}
                />
              </div>
              <p className="mt-3 text-xs text-[#94a3b8] sm:hidden">
                En iPhone: «PDF o Word» abre Archivos o iCloud. Si falla, envíanos el documento por WhatsApp.
              </p>
            </div>
          </div>

          {statusMsg ? (
            <div
              className="flex items-center gap-2 rounded-xl border border-[#1A4FBF]/20 bg-blue-50 px-4 py-3 text-sm font-medium text-[#1A4FBF]"
              role="status"
              aria-live="polite"
            >
              <Loader2 className="h-4 w-4 shrink-0 animate-spin" />
              {statusMsg}
            </div>
          ) : null}

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

      {err ? (
        <p className="mt-3 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">
          {err}
        </p>
      ) : null}
      {success ? (
        <p className="mt-3 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800" role="status">
          {success}
        </p>
      ) : null}

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
                className="flex flex-col gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm ring-1 ring-slate-100 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <span className="font-medium text-[#1E293B] break-words">{d.file_name}</span>
                  <span className="ml-2 text-xs text-[#64748B]">({typeLabel(d.document_type)})</span>
                </div>
                <div className="flex w-full gap-2 sm:w-auto">
                  <button
                    type="button"
                    className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-[#1A4FBF] px-4 text-sm font-semibold text-white hover:bg-[#2563EB] sm:flex-none"
                    onClick={() => void download(d.file_path, d.file_name)}
                  >
                    Abrir / descargar
                  </button>
                  {canUpload ? (
                    <button
                      type="button"
                      disabled={busy}
                      className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-red-200 bg-white px-4 text-sm font-semibold text-red-600 hover:bg-red-50 disabled:opacity-50 sm:flex-none"
                      onClick={() => void removeDoc(d)}
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
