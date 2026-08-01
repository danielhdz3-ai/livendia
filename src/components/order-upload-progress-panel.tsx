"use client";

import { CheckCircle2, Loader2, XCircle } from "lucide-react";

export type UploadQueueItem = {
  id: string;
  name: string;
  label?: string;
  status: "pending" | "uploading" | "registering" | "done" | "error";
  progress: number;
  error?: string;
};

export function OrderUploadProgressPanel({
  items,
  overallProgress,
  activeLabel,
}: {
  items: UploadQueueItem[];
  overallProgress: number;
  activeLabel?: string | null;
}) {
  if (items.length === 0 && !activeLabel) return null;

  const clamped = Math.max(0, Math.min(100, overallProgress));

  return (
    <div
      className="overflow-hidden rounded-2xl border border-[#1A4FBF]/15 bg-white shadow-[0_8px_30px_rgba(26,79,191,0.12)] ring-1 ring-[#1A4FBF]/10"
      role="status"
      aria-live="polite"
    >
      <div className="bg-gradient-to-r from-[#0F2A6B] via-[#1A4FBF] to-[#2563EB] px-4 py-3 text-white sm:px-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {clamped >= 100 ? (
              <CheckCircle2 className="h-5 w-5 text-emerald-300" aria-hidden />
            ) : (
              <Loader2 className="h-5 w-5 animate-spin text-cyan-200" aria-hidden />
            )}
            <p className="text-sm font-bold">
              {clamped >= 100 ? "Documentación guardada" : activeLabel ?? "Subiendo documentación…"}
            </p>
          </div>
          <span className="text-sm font-extrabold tabular-nums">{clamped}%</span>
        </div>
        <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-white to-cyan-100 transition-all duration-300 ease-out"
            style={{ width: `${clamped}%` }}
          />
        </div>
      </div>

      {items.length > 0 ? (
        <ul className="divide-y divide-slate-100 px-4 py-2 sm:px-5">
          {items.map((item) => (
            <li key={item.id} className="flex items-center gap-3 py-3">
              {item.status === "done" ? (
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
              ) : item.status === "error" ? (
                <XCircle className="h-5 w-5 shrink-0 text-red-500" aria-hidden />
              ) : item.status === "uploading" || item.status === "registering" ? (
                <Loader2 className="h-5 w-5 shrink-0 animate-spin text-[#1A4FBF]" aria-hidden />
              ) : (
                <span className="h-5 w-5 shrink-0 rounded-full bg-slate-200" aria-hidden />
              )}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-[#1E293B]">
                  {item.label ? `${item.label}: ` : ""}
                  {item.name}
                </p>
                {item.status !== "done" && item.status !== "error" ? (
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#1A4FBF] to-[#06B6D4] transition-all duration-300"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                ) : null}
                {item.error ? <p className="mt-1 text-xs text-red-600">{item.error}</p> : null}
              </div>
              {item.status === "done" ? (
                <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                  OK
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function OrderUploadSuccessBanner({ message }: { message: string }) {
  return (
    <div
      className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white px-4 py-4 shadow-sm ring-1 ring-emerald-100"
      role="status"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
        <CheckCircle2 className="h-6 w-6 text-emerald-600" aria-hidden />
      </div>
      <div>
        <p className="font-bold text-emerald-950">¡Listo!</p>
        <p className="mt-0.5 text-sm leading-relaxed text-emerald-900">{message}</p>
      </div>
    </div>
  );
}
