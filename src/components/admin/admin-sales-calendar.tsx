"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SalesDayBucket } from "@/lib/admin-data";
import { ADMIN_CARD_PAD, ADMIN_MONEY } from "@/lib/admin-ui";

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
}: {
  salesByDate: Record<string, SalesDayBucket>;
  title?: string;
  detailBaseHref?: string;
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
    <div className={ADMIN_CARD_PAD}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-[#64748B]">Calendario</p>
          <h2 className="mt-1 text-lg font-bold text-[#1E293B]">{title}</h2>
          <p className="mt-1 text-sm text-[#64748B]">
            <span className={ADMIN_MONEY}>{(monthTotal / 100).toFixed(2)} €</span> este mes
          </p>
        </div>
        <div className="flex items-center gap-1">
          <button type="button" onClick={prevMonth} className="rounded-lg border border-slate-200 p-2 hover:bg-slate-50" aria-label="Mes anterior">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="min-w-[9rem] text-center text-sm font-semibold capitalize text-[#1E293B]">
            {monthLabel(viewYear, viewMonth)}
          </span>
          <button type="button" onClick={nextMonth} className="rounded-lg border border-slate-200 p-2 hover:bg-slate-50" aria-label="Mes siguiente">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-[#94A3B8]">
        {WEEKDAYS.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {cells.map((cell, idx) => {
          if (!cell.date || !cell.day) return <div key={`empty-${idx}`} className="aspect-square" />;
          const bucket = salesByDate[cell.date];
          const hasSales = Boolean(bucket?.orders.length);
          const isToday = cell.date === todayKey;
          const isSelected = cell.date === selectedDate;

          return (
            <button
              key={cell.date}
              type="button"
              onClick={() => setSelectedDate(cell.date)}
              className={`flex aspect-square flex-col items-center justify-center rounded-lg border text-xs transition ${
                isSelected
                  ? "border-[#1A4FBF] bg-[#EFF6FF] ring-2 ring-[#1A4FBF]/30"
                  : hasSales
                    ? "border-[#BFDBFE] bg-[#EFF6FF]/70 hover:bg-[#EFF6FF]"
                    : "border-slate-200 bg-white hover:bg-slate-50"
              } ${isToday && !isSelected ? "ring-1 ring-[#1A4FBF]/40" : ""}`}
            >
              <span className="font-semibold text-[#1E293B]">{cell.day}</span>
              {hasSales ? (
                <span className="mt-0.5 text-[10px] font-bold text-[#1A4FBF]">{centsShort(bucket!.totalCents)}</span>
              ) : null}
            </button>
          );
        })}
      </div>

      {selectedBucket ? (
        <div className="mt-5 border-t border-slate-100 pt-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-semibold text-[#1E293B]">
              {new Date(selectedBucket.date).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
              })}{" "}
              · <span className={ADMIN_MONEY}>{(selectedBucket.totalCents / 100).toFixed(2)} €</span> ·{" "}
              {selectedBucket.orders.length} venta(s)
            </p>
            <button type="button" onClick={() => setSelectedDate(null)} className="text-xs font-semibold text-[#1A4FBF] hover:underline">
              Cerrar
            </button>
          </div>
          <ul className="mt-3 space-y-2">
            {selectedBucket.orders.map((o) => (
              <li key={o.id} className="rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-semibold text-[#1E293B]">{o.clientName}</p>
                    <p className="mt-0.5 text-xs text-[#64748B]">
                      {o.serviceName} · {new Date(o.paidAt).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                    <p className="text-xs text-[#94A3B8]">{o.clientEmail}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm ${ADMIN_MONEY}`}>{(o.totalCents / 100).toFixed(2)} €</p>
                    <Link href={`${detailBaseHref}/${o.id}`} className="mt-1 inline-block text-xs font-semibold text-[#1A4FBF] hover:underline">
                      Ver expediente →
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-4 text-[11px] text-[#64748B]">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-3 w-3 rounded border border-[#1A4FBF]/40 ring-1 ring-[#1A4FBF]/20" /> Hoy
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-3 w-3 rounded bg-[#EFF6FF] ring-1 ring-[#BFDBFE]" /> Con ventas — click para ver detalle
        </span>
      </div>
    </div>
  );
}

function dateKeyLocal(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
