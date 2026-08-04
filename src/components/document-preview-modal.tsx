"use client";

import { useEffect, useState } from "react";
import { Download, Eye, Loader2, X } from "lucide-react";

function isImageFile(name: string) {
  return /\.(jpe?g|png|gif|webp|heic|heif|bmp)$/i.test(name);
}

function isPdfFile(name: string) {
  return /\.pdf$/i.test(name);
}

export function DocumentPreviewModal({
  open,
  fileName,
  signedUrl,
  loading,
  error,
  onClose,
  onDownload,
}: {
  open: boolean;
  fileName: string;
  signedUrl: string | null;
  loading: boolean;
  error: string | null;
  onClose: () => void;
  onDownload: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const canPreviewImage = signedUrl && isImageFile(fileName);
  const canPreviewPdf = signedUrl && isPdfFile(fileName);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#0F172A]/90 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`Vista previa: ${fileName}`}>
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 text-white">
        <div className="min-w-0">
          <p className="truncate text-sm font-bold">{fileName}</p>
          <p className="text-xs text-blue-100">Vista previa del documento</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onDownload}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-white/15 px-3 text-sm font-semibold hover:bg-white/25"
          >
            <Download className="h-4 w-4" aria-hidden />
            Descargar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 hover:bg-white/25"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center overflow-auto p-4">
        {loading ? (
          <div className="flex items-center gap-2 text-white">
            <Loader2 className="h-6 w-6 animate-spin" aria-hidden />
            Cargando vista previa…
          </div>
        ) : null}

        {error ? (
          <div className="max-w-md rounded-2xl bg-white p-6 text-center">
            <Eye className="mx-auto h-10 w-10 text-[#64748B]" aria-hidden />
            <p className="mt-3 font-semibold text-[#1E293B]">No se pudo previsualizar</p>
            <p className="mt-1 text-sm text-[#64748B]">{error}</p>
            <button
              type="button"
              onClick={onDownload}
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#1A4FBF] px-4 text-sm font-bold text-white"
            >
              <Download className="h-4 w-4" aria-hidden />
              Descargar archivo
            </button>
          </div>
        ) : null}

        {!loading && !error && canPreviewImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={signedUrl}
            alt={fileName}
            className="max-h-[calc(100vh-8rem)] max-w-full rounded-lg object-contain shadow-2xl"
          />
        ) : null}

        {!loading && !error && canPreviewPdf ? (
          <iframe
            src={signedUrl}
            title={fileName}
            className="h-[calc(100vh-8rem)] w-full max-w-4xl rounded-lg bg-white shadow-2xl"
          />
        ) : null}

        {!loading && !error && signedUrl && !canPreviewImage && !canPreviewPdf ? (
          <div className="max-w-md rounded-2xl bg-white p-6 text-center">
            <FileFallbackIcon />
            <p className="mt-3 font-semibold text-[#1E293B]">Vista previa no disponible</p>
            <p className="mt-1 text-sm text-[#64748B]">Este tipo de archivo se abre mejor descargándolo.</p>
            <button
              type="button"
              onClick={onDownload}
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#1A4FBF] px-4 text-sm font-bold text-white"
            >
              <Download className="h-4 w-4" aria-hidden />
              Descargar
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function FileFallbackIcon() {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#1A4FBF]">
      <Eye className="h-7 w-7" aria-hidden />
    </div>
  );
}
