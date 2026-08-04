"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SalesDayBucket } from "@/lib/admin-data";
import { ADMIN_CARD_COMPACT, ADMIN_CARD_PAD, ADMIN_MONEY } from "@/lib/admin-ui";

const WEEKDAYS = ["L", "M", "X", "J", "V", "S", "D"];

function monthLabel(year: number, month: number) {
  return new Date(year, month, 1).toLocaleDateString("es-ES", { month: "long", year: "numeric" });
}

function centsShort(cents: number) {
  const euros = cents / 100;
  return euros >= 100 ? `${Math.round(euros)}€` : `${euros.toFixed(0)}€`;
}

export function AdminSalesCalendar({
  salesByDate,
  title = "Calendario de ventas",
  detailBaseHref = "/admin/expedientes",
  compact = false,
}: {
  salesByDate: Record<string, SalesDayBucket>;
  title?: string;
  detailBaseHref?: string;
  compact?: boolean;
}) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const monthTotal = useMemo(() => {
    let sum = 0;
    for (const [key, bucket] of Object.entries(salesByDate)) {
      const d = new Date(key);
      if (d.getFullYear() === viewYear && d.getMonth() === viewMonth) sum += bucket.totalCents;
    }
    return sum;
  }, [salesByDate, viewYear, viewMonth]);

  const cells = useMemo(() => {
    const first = new Date(viewYear, viewMonth, 1);
    const startPad = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const result: { date: string | null; day: number | null }[] = [];
    for (let i = 0; i < startPad; i++) result.push({ date: null, day: null });
    for (let d = 1; d <= daysInMonth; d++) {
      const iso = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      result.push({ date: iso, day: d });
    }
    return result;
  }, [viewYear, viewMonth]);

  const todayKey = dateKeyLocal(today);
  const selectedBucket = selectedDate ? salesByDate[selectedDate] : null;
  const cardClass = compact ? ADMIN_CARD_COMPACT : ADMIN_CARD_PAD;

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
    setSelectedDate(null);
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
    setSelectedDate(null);
  }

  return (
    <div className={`${cardClass} ${compact ? "flex h-full flex-col" : ""}`}>
      <div className="flex items-center justify-between gap-2">
        <div>
          {!compact ? <p className="text-[11px] font-semibold uppercase tracking-wide text-[#64748B]">Calendario</p> : null}
          <h2 className={`font-bold text-[#1E293B] ${compact ? "text-sm" : "mt-1 text-lg"}`}>{title}</h2>
          <p className={`text-[#64748B] ${compact ? "text-[11px]" : "mt-1 text-sm"}`}>
            <span className={ADMIN_MONEY}>{(monthTotal / 100).toFixed(2)} €</span> este mes
          </p>
        </div>
        <div className="flex items-center gap-0.5">
          <button type="button" onClick={prevMonth} className="rounded border border-slate-200 p-1 hover:bg-slate-50" aria-label="Mes anterior">
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <span className={`text-center font-semibold capitalize text-[#1E293B] ${compact ? "min-w-[6rem] text-[11px]" : "min-w-[9rem] text-sm"}`}>
            {monthLabel(viewYear, viewMonth)}
          </span>
          <button type="button" onClick={nextMonth} className="rounded border border-slate-200 p-1 hover:bg-slate-50" aria-label="Mes siguiente">
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className={`grid grid-cols-7 gap-0.5 text-center font-semibold text-[#94A3B8] ${compact ? "mt-2 text-[9px]" : "mt-4 text-[11px]"}`}>
        {WEEKDAYS.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="mt-0.5 grid grid-cols-7 gap-0.5">
        {cells.map((cell, idx) => {
          if (!cell.date || !cell.day) return <div key={`empty-${idx}`} className={compact ? "h-7" : "aspect-square"} />;
          const bucket = salesByDate[cell.date];
          const hasSales = Boolean(bucket?.orders.length);
          const isToday = cell.date === todayKey;
          const isSelected = cell.date === selectedDate;

          return (
            <button
              key={cell.date}
              type="button"
              onClick={() => setSelectedDate(cell.date)}
              className={`flex flex-col items-center justify-center rounded border transition ${
                compact ? "h-7 text-[10px]" : "aspect-square text-xs"
              } ${
                isSelected
                  ? "border-[#1A4FBF] bg-[#EFF6FF] ring-1 ring-[#1A4FBF]/30"
                  : hasSales
                    ? "border-[#BFDBFE] bg-[#EFF6FF]/70 hover:bg-[#EFF6FF]"
                    : "border-slate-200 bg-white hover:bg-slate-50"
              } ${isToday && !isSelected ? "ring-1 ring-[#1A4FBF]/40" : ""}`}
            >
              <span className="font-semibold leading-none text-[#1E293B]">{cell.day}</span>
              {hasSales && !compact ? (
                <span className="mt-0.5 text-[9px] font-bold text-[#1A4FBF]">{centsShort(bucket!.totalCents)}</span>
              ) : null}
            </button>
          );
        })}
      </div>

      {selectedBucket ? (
        <div className={`border-t border-slate-100 ${compact ? "mt-2 max-h-24 overflow-y-auto pt-2" : "mt-5 pt-4"}`}>
          <div className="flex items-center justify-between gap-2">
            <p className={`font-semibold text-[#1E293B] ${compact ? "text-[11px]" : "text-sm"}`}>
              {new Date(selectedBucket.date).toLocaleDateString("es-ES", { day: "numeric", month: "short" })}{" "}
              · <span className={ADMIN_MONEY}>{(selectedBucket.totalCents / 100).toFixed(2)} €</span>
            </p>
            <button type="button" onClick={() => setSelectedDate(null)} className="text-[10px] font-semibold text-[#1A4FBF] hover:underline">
              Cerrar
            </button>
          </div>
          {!compact ? (
            <ul className="mt-3 space-y-2">
              {selectedBucket.orders.map((o) => (
                <li key={o.id} className="rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#1E293B]">{o.clientName}</p>
                      <p className="text-xs text-[#64748B]">{o.serviceName}</p>
                    </div>
                    <Link href={`${detailBaseHref}/${o.id}`} className="text-xs font-semibold text-[#1A4FBF] hover:underline">
                      Ver →
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}

      {!compact ? (
        <div className="mt-4 flex flex-wrap gap-4 text-[11px] text-[#64748B]">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded border border-[#1A4FBF]/40 ring-1 ring-[#1A4FBF]/20" /> Hoy
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded bg-[#EFF6FF] ring-1 ring-[#BFDBFE]" /> Con ventas
          </span>
        </div>
      ) : null}
    </div>
  );
}

function dateKeyLocal(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
