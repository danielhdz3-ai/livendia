"use client";

import { useState } from "react";
import { Download, Eye, Loader2 } from "lucide-react";

async function fetchSignedUrl(path: string) {
  const response = await fetch(`/api/documents/download?filePath=${encodeURIComponent(path)}`);
  const data = (await response.json()) as { url?: string; error?: string };
  if (!response.ok || !data.url) throw new Error(data.error || "No se pudo abrir el archivo");
  return data.url;
}

export function AdminDocumentActions({ filePath, fileName }: { filePath: string; fileName: string }) {
  const [loading, setLoading] = useState<"view" | "download" | null>(null);

  async function openDoc(mode: "view" | "download") {
    setLoading(mode);
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
    } catch {
      alert("No se pudo abrir el archivo");
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="flex gap-1">
      <button
        type="button"
        onClick={() => void openDoc("view")}
        disabled={loading !== null}
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#BFDBFE] bg-[#EFF6FF] text-[#1A4FBF] hover:bg-[#DBEAFE] disabled:opacity-60"
        aria-label="Ver documento"
      >
        {loading === "view" ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Eye className="h-3.5 w-3.5" />}
      </button>
      <button
        type="button"
        onClick={() => void openDoc("download")}
        disabled={loading !== null}
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-[#475569] hover:bg-slate-50 disabled:opacity-60"
        aria-label="Descargar documento"
      >
        {loading === "download" ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}
