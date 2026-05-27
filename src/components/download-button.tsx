"use client";

import { Download } from "lucide-react";
import { useState } from "react";

interface DownloadButtonProps {
  filePath: string;
  fileName?: string;
  documentType?: string;
  variant?: "button" | "link";
  className?: string;
}

export function DownloadButton({
  filePath,
  fileName,
  documentType,
  variant = "link",
  className = "",
}: DownloadButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setLoading(true);
    setError(null);

    try {
      // Llamar al endpoint para obtener URL firmada
      const response = await fetch(
        `/api/documents/download?filePath=${encodeURIComponent(filePath)}`
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Error al descargar");
      }

      const { url } = await response.json();

      // Abrir en nueva pestaña o descargar
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      if (fileName) {
        link.download = fileName;
      }
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Error al descargar:", err);
      setError(err instanceof Error ? err.message : "Error al descargar");
    } finally {
      setLoading(false);
    }
  };

  if (variant === "button") {
    return (
      <div>
        <button
          onClick={handleDownload}
          disabled={loading}
          className={`flex items-center gap-2 rounded-lg bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2563EB] disabled:opacity-50 ${className}`}
        >
          <Download className="h-4 w-4" />
          <span>{loading ? "Descargando..." : "Descargar"}</span>
        </button>
        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={handleDownload}
        disabled={loading}
        className={`flex items-center gap-1 text-[#1A4FBF] hover:text-[#06B6D4] disabled:opacity-50 ${className}`}
      >
        <Download className="h-3 w-3" />
        <span className="text-xs">{loading ? "Descargando..." : documentType || "Descargar"}</span>
      </button>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
