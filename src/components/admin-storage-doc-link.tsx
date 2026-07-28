"use client";

import type { ReactNode } from "react";
import { useState } from "react";

/**
 * Enlace on-demand: pide URL firmada al hacer clic (no caduca en páginas abiertas mucho rato).
 * `path` = clave en el bucket `documents` (p. ej. userId/orderId/archivo.pdf).
 */
export function AdminStorageDocLink({
  path,
  children,
  className = "font-medium text-[#1A4FBF] hover:underline",
}: {
  path: string;
  children: ReactNode;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function openDoc() {
    if (!path || loading) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/documents/download?filePath=${encodeURIComponent(path)}`);
      const data = (await response.json()) as { url?: string; error?: string };
      if (!response.ok || !data.url) {
        throw new Error(data.error || "No se pudo abrir el archivo");
      }
      window.open(data.url, "_blank", "noopener,noreferrer");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al abrir");
    } finally {
      setLoading(false);
    }
  }

  return (
    <span className="inline-flex flex-col items-start gap-0.5">
      <button type="button" onClick={() => void openDoc()} disabled={loading} className={`${className} text-left disabled:opacity-60`}>
        {loading ? "Abriendo…" : children}
      </button>
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </span>
  );
}
