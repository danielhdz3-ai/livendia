"use client";

import { useState } from "react";
import { Download, Eye, FileText, ImageIcon, Loader2 } from "lucide-react";
import { ORDER_DOCUMENT_LABEL_ES } from "@/lib/order-document-labels";

async function fetchSignedUrl(path: string) {
  const response = await fetch(`/api/documents/download?filePath=${encodeURIComponent(path)}`);
  const data = (await response.json()) as { url?: string; error?: string };
  if (!response.ok || !data.url) throw new Error(data.error || "No se pudo abrir el archivo");
  return data.url;
}

function fileIcon(name: string) {
  const lower = name.toLowerCase();
  if (/\.(jpg|jpeg|png|webp|gif)$/.test(lower)) return ImageIcon;
  return FileText;
}

export function AdminDocumentCard({
  fileName,
  filePath,
  documentType,
  uploadedAt,
}: {
  fileName: string;
  filePath: string;
  documentType: string;
  uploadedAt: string;
}) {
  const [loading, setLoading] = useState<"view" | "download" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const Icon = fileIcon(fileName);
  const typeLabel = ORDER_DOCUMENT_LABEL_ES[documentType] ?? documentType;

  async function openDoc(mode: "view" | "download") {
    setLoading(mode);
    setError(null);
    try {
      const url = await fetchSignedUrl(filePath);
      if (mode === "view") {
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.rel = "noopener";
        a.target = "_blank";
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al abrir");
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm transition hover:border-[#1A4FBF]/25 hover:shadow-md">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#1A4FBF]">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-[#1E293B]">{fileName}</p>
        <p className="mt-0.5 text-xs text-[#64748B]">
          {typeLabel} · {new Date(uploadedAt).toLocaleDateString("es-ES")}
        </p>
        {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
        <div className="mt-2 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void openDoc("view")}
            disabled={loading !== null}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#BFDBFE] bg-[#EFF6FF] px-2.5 py-1.5 text-xs font-semibold text-[#1A4FBF] hover:bg-[#DBEAFE] disabled:opacity-60"
          >
            {loading === "view" ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Eye className="h-3.5 w-3.5" />}
            Ver
          </button>
          <button
            type="button"
            onClick={() => void openDoc("download")}
            disabled={loading !== null}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-[#475569] hover:bg-slate-50 disabled:opacity-60"
          >
            {loading === "download" ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
            Descargar
          </button>
        </div>
      </div>
    </div>
  );
}
