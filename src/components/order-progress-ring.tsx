"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { PANEL_CARD } from "@/lib/client-panel-ui";

export function OrderProgressRing({
  percent,
  label,
  size = "md",
}: {
  percent: number;
  label: string;
  size?: "sm" | "md";
}) {
  const target = Math.max(0, Math.min(100, percent));
  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    const t = window.setTimeout(() => setAnimated(target), 80);
    return () => window.clearTimeout(t);
  }, [target]);

  const dim = size === "sm" ? 56 : 72;
  const stroke = size === "sm" ? 6 : 7;
  const radius = (dim - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animated / 100) * circumference;
  const complete = animated >= 100;

  return (
    <div className={`${PANEL_CARD} flex items-center gap-4`}>
      <div className="relative shrink-0" style={{ width: dim, height: dim }}>
        <svg width={dim} height={dim} className="-rotate-90" aria-hidden>
          <circle
            cx={dim / 2}
            cy={dim / 2}
            r={radius}
            fill="none"
            stroke="#E2E8F0"
            strokeWidth={stroke}
          />
          <circle
            cx={dim / 2}
            cy={dim / 2}
            r={radius}
            fill="none"
            stroke="#1A4FBF"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-[stroke-dashoffset] duration-700 ease-out"
          />
        </svg>
        {complete ? (
          <span className="livendia-check-pop absolute inset-0 flex items-center justify-center">
            <CheckCircle2 className="h-7 w-7 text-emerald-600" aria-hidden />
          </span>
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-sm font-extrabold text-[#1A4FBF] tabular-nums">
            {Math.round(animated)}%
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">Progreso</p>
        <p className="mt-1 text-base font-bold text-[#1E293B]">{label}</p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="livendia-progress-bar-shine h-full rounded-full bg-gradient-to-r from-[#1A4FBF] via-[#06B6D4] to-[#1A4FBF] transition-all duration-700 ease-out"
            style={{ width: `${animated}%` }}
          />
        </div>
      </div>
    </div>
  );
}
