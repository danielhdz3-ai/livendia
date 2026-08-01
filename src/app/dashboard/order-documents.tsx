"use client";

import { MobilePhotoSidesSheet } from "@/components/mobile-photo-sides-sheet";
import {
  OrderUploadProgressPanel,
  OrderUploadSuccessBanner,
  type UploadQueueItem,
} from "@/components/order-upload-progress-panel";
import { useToast } from "@/components/toast-provider";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import {
  buildSideFileName,
  isMobileUploadViewport,
  labelForPhotoSide,
  orderDocTypeNeedsTwoSides,
} from "@/lib/order-doc-upload-ui";
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
import { PANEL_CARD } from "@/lib/client-panel-ui";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useRef, useState } from "react";
import {
  CheckCircle2,
  FileText,
  ImageIcon,
  ShieldCheck,
  Trash2,
  Upload,
} from "lucide-react";

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

type FileToUpload = {
  file: File;
  queueId: string;
  label?: string;
};

async function uploadSingleFile(
  file: File,
  orderId: string,
  userId: string,
  docType: string,
  onProgress?: (pct: number, status: "uploading" | "registering") => void,
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

  onProgress?.(12, "uploading");

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

  onProgress?.(35, "uploading");

  const { error: storageError } = await supabase.storage.from("documents").upload(path, file, {
    contentType,
    upsert: false,
  });

  if (storageError) {
    return { ok: false, error: `${file.name}: ${mapStorageUploadError(storageError.message)}` };
  }

  onProgress?.(72, "registering");

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

  onProgress?.(92, "registering");

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

  onProgress?.(100, "registering");
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
  const { toast } = useToast();
  const photoInputRef = useRef<HTMLInputElement>(null);
  const docInputRef = useRef<HTMLInputElement>(null);
  const busyRef = useRef(false);
  const [docs, setDocs] = useState(initialDocs);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [docType, setDocType] = useState("otro");
  const [dragOver, setDragOver] = useState(false);
  const [queue, setQueue] = useState<UploadQueueItem[]>([]);
  const [success, setSuccess] = useState<string | null>(null);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [photoSheetOpen, setPhotoSheetOpen] = useState(false);
  const [recentlyUploadedIds, setRecentlyUploadedIds] = useState<Set<string>>(new Set());

  const docTypeLabel = typeLabel(docType);
  const requireBothSides = orderDocTypeNeedsTwoSides(docType);

  const overallProgress = useMemo(() => {
    if (!queue.length) return busy ? 8 : 0;
    const sum = queue.reduce((acc, item) => acc + item.progress, 0);
    return Math.round(sum / queue.length);
  }, [queue, busy]);

  const updateQueueItem = useCallback((id: string, patch: Partial<UploadQueueItem>) => {
    setQueue((q) => q.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  }, []);

  const processUploadBatch = useCallback(
    async (entries: FileToUpload[]) => {
      if (!canUpload) {
        setErr("No puedes subir archivos en este estado del pedido.");
        return;
      }
      if (busyRef.current || entries.length === 0) return;

      busyRef.current = true;
      setErr(null);
      setSuccess(null);
      setStatusMsg(
        entries.length === 1
          ? `Subiendo «${entries[0].file.name}»…`
          : `Subiendo ${entries.length} archivos…`,
      );
      setBusy(true);

      setQueue(
        entries.map((entry) => ({
          id: entry.queueId,
          name: entry.file.name,
          label: entry.label,
          status: "pending",
          progress: 0,
        })),
      );

      const newRows: DocRow[] = [];
      const errors: string[] = [];

      try {
        for (const entry of entries) {
          updateQueueItem(entry.queueId, { status: "uploading", progress: 5 });

          const result = await uploadSingleFile(
            entry.file,
            orderId,
            userId,
            docType,
            (pct, phase) => {
              updateQueueItem(entry.queueId, {
                status: phase,
                progress: pct,
              });
            },
          );

          if (result.ok) {
            newRows.push(result.row);
            updateQueueItem(entry.queueId, { status: "done", progress: 100 });
          } else {
            errors.push(result.error);
            updateQueueItem(entry.queueId, {
              status: "error",
              progress: 0,
              error: result.error,
            });
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
        setRecentlyUploadedIds(new Set(newRows.map((r) => r.id)));
        window.setTimeout(() => setRecentlyUploadedIds(new Set()), 8000);

        const msg =
          newRows.length === 1
            ? `«${newRows[0].file_name}» guardado en tu expediente.`
            : `${newRows.length} archivos guardados en tu expediente.`;
        setSuccess(msg);
        toast(msg, "success");
        router.refresh();
      }

      if (errors.length) {
        setErr(errors.slice(0, 3).join(" · ") + (errors.length > 3 ? ` (+${errors.length - 3} más)` : ""));
        toast(errors[0] ?? "Error al subir", "error");
      } else if (!newRows.length) {
        setErr("No se pudo guardar el archivo. Prueba de nuevo o contáctanos por WhatsApp.");
      }

      setStatusMsg(null);
      busyRef.current = false;
      setBusy(false);
      window.setTimeout(() => setQueue([]), 10000);
    },
    [canUpload, docType, orderId, router, toast, updateQueueItem, userId],
  );

  const processFiles = useCallback(
    async (fileList: FileList | File[], labels?: Record<number, string>) => {
      const files = Array.from(fileList).slice(0, MAX_FILES_PER_BATCH);
      if (files.length === 0) {
        setErr("No se detectó ningún archivo. Vuelve a elegirlo (PDF, Word o foto).");
        return;
      }

      const entries: FileToUpload[] = files.map((file, index) => ({
        file,
        queueId: crypto.randomUUID(),
        label: labels?.[index],
      }));

      await processUploadBatch(entries);
    },
    [processUploadBatch],
  );

  function onDocInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target;
    const picked = input.files ? Array.from(input.files) : [];
    input.value = "";
    if (picked.length) void processFiles(picked);
    else setErr("No se recibió el archivo. En móvil, prueba «Fotos o galería» o «PDF o Word».");
  }

  function onPhotoSidesConfirm(payload: { side: "anverso" | "reverso"; file: File }[]) {
    setPhotoSheetOpen(false);
    const entries: FileToUpload[] = payload.map(({ side, file }) => {
      const renamed = new File([file], buildSideFileName(file.name, side), { type: file.type });
      return {
        file: renamed,
        queueId: crypto.randomUUID(),
        label: labelForPhotoSide(side),
      };
    });
    void processUploadBatch(entries);
  }

  function openPhotoFlow() {
    if (busy) return;
    if (isMobileUploadViewport()) {
      setPhotoSheetOpen(true);
      return;
    }
    photoInputRef.current?.click();
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
        toast("Archivo eliminado del expediente.", "info");
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
    <div className={prominent ? "mt-2" : "mt-4 border-t border-slate-100 pt-4"}>
      {!prominent ? <h4 className="text-sm font-semibold text-[#1E293B]">Documentación</h4> : null}

      {canUpload ? (
        <div className="mt-4 space-y-4">
          <div className={`${PANEL_CARD} bg-gradient-to-br from-white to-[#EFF6FF]/30`}>
            <label htmlFor={`dtype-${orderId}`} className="text-sm font-bold text-[#1E293B]">
              Tipo de documento
            </label>
            <select
              id={`dtype-${orderId}`}
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
              disabled={busy}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm text-[#1E293B] focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20 sm:max-w-md"
            >
              {DOC_TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
            {requireBothSides ? (
              <p className="mt-2 flex items-start gap-2 text-xs text-[#64748B]">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#1A4FBF]" aria-hidden />
                En móvil te pediremos foto del <strong>anverso</strong> y del <strong>reverso</strong>.
              </p>
            ) : (
              <p className="mt-2 flex items-start gap-2 text-xs text-[#64748B]">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#1A4FBF]" aria-hidden />
                Si subes fotos desde el móvil, te guiaremos con <strong>anverso</strong> y <strong>reverso</strong>.
              </p>
            )}
          </div>

          <div
            className={`${dropZoneClass} transition ${
              dragOver
                ? "border-[#1A4FBF] bg-blue-50/80 shadow-[0_0_0_4px_rgba(26,79,191,0.12)]"
                : "border-slate-300 bg-gradient-to-br from-slate-50/90 to-white hover:border-[#1A4FBF]/50 hover:shadow-[0_8px_30px_rgba(26,79,191,0.08)]"
            } ${busy ? "pointer-events-none opacity-80" : ""}`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] text-white shadow-lg shadow-blue-500/25">
                <Upload className="h-8 w-8" aria-hidden />
              </div>
              <p className="mt-4 text-base font-bold text-[#1E293B] sm:text-lg">
                Arrastra archivos o selecciónalos
              </p>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#64748B]">
                PDF, Word, fotos (JPG, PNG, HEIC). Hasta <strong>{ORDER_DOC_MAX_MB} MB</strong> por archivo.
              </p>
              <div className="mt-6 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={openPhotoFlow}
                  disabled={busy}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:opacity-95 active:scale-[0.98] disabled:opacity-60 sm:w-auto"
                >
                  <ImageIcon className="h-4 w-4" aria-hidden />
                  {busy ? "Subiendo…" : "Fotos o galería"}
                </button>
                <label
                  htmlFor={`doc-input-${orderId}`}
                  className={`inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 border-[#1A4FBF] bg-white px-6 py-3.5 text-sm font-bold text-[#1A4FBF] hover:bg-blue-50 active:scale-[0.98] sm:w-auto ${
                    busy ? "pointer-events-none opacity-60" : ""
                  }`}
                >
                  <FileText className="h-4 w-4" aria-hidden />
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
                  onChange={onDocInputChange}
                />
                <input
                  id={`doc-input-${orderId}`}
                  ref={docInputRef}
                  type="file"
                  className="sr-only"
                  multiple
                  disabled={busy}
                  accept={ORDER_DOC_ACCEPT_DOCUMENTS}
                  onChange={onDocInputChange}
                />
              </div>
            </div>
          </div>

          <OrderUploadProgressPanel
            items={queue}
            overallProgress={overallProgress}
            activeLabel={statusMsg}
          />

          {success && !busy ? <OrderUploadSuccessBanner message={success} /> : null}
        </div>
      ) : (
        <p className="mt-2 text-sm text-[#64748b]">No puedes subir archivos en este estado.</p>
      )}

      {err ? (
        <p className="mt-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">
          {err}
        </p>
      ) : null}

      <div className="mt-8">
        <div className="flex items-center justify-between gap-3">
          <h4 className="text-base font-bold text-[#1E293B]">
            Archivos en tu expediente {docs.length > 0 ? `(${docs.length})` : ""}
          </h4>
        </div>
        {!docs.length ? (
          <div className="mt-3 rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 px-4 py-8 text-center text-sm text-[#64748B]">
            Aún no has subido ningún archivo.
          </div>
        ) : (
          <ul className="mt-3 space-y-3">
            {docs.map((d) => {
              const isNew = recentlyUploadedIds.has(d.id);
              return (
                <li
                  key={d.id}
                  className={`${PANEL_CARD} flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ${
                    isNew ? "ring-2 ring-emerald-200" : ""
                  }`}
                >
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#1A4FBF]">
                      <FileText className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-[#1E293B] break-words">{d.file_name}</span>
                        {isNew ? (
                          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-800">
                            Nuevo
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-0.5 text-xs text-[#64748B]">
                        {typeLabel(d.document_type)} ·{" "}
                        {new Date(d.created_at).toLocaleString("es-ES", {
                          dateStyle: "short",
                          timeStyle: "short",
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full gap-2 sm:w-auto">
                    <button
                      type="button"
                      className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#1A4FBF] px-4 text-sm font-semibold text-white hover:bg-[#2563EB] sm:flex-none"
                      onClick={() => void download(d.file_path, d.file_name)}
                    >
                      <CheckCircle2 className="h-4 w-4 opacity-80" aria-hidden />
                      Abrir
                    </button>
                    {canUpload ? (
                      <button
                        type="button"
                        disabled={busy}
                        className="inline-flex min-h-11 items-center justify-center rounded-xl border border-red-200 bg-white px-3 text-red-600 hover:bg-red-50 disabled:opacity-50"
                        onClick={() => void removeDoc(d)}
                        aria-label={`Eliminar ${d.file_name}`}
                      >
                        <Trash2 className="h-4 w-4" aria-hidden />
                      </button>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <MobilePhotoSidesSheet
        open={photoSheetOpen}
        docTypeLabel={docTypeLabel}
        requireBothSides
        onClose={() => setPhotoSheetOpen(false)}
        onConfirm={onPhotoSidesConfirm}
      />
    </div>
  );
}
