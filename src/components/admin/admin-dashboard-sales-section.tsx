"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AdminSalesCalendar } from "@/components/admin/admin-sales-calendar";
import type { SalesDayBucket } from "@/lib/admin-data";
import { formatEuros } from "@/lib/admin-data";
import { ADMIN_CARD_COMPACT, ADMIN_MONEY, ORDER_STATUS_LABEL } from "@/lib/admin-ui";

function monthLabel(year: number, month: number): string {
  const raw = new Date(year, month, 1).toLocaleDateString("es-ES", { month: "long" });
  return raw.charAt(0).toUpperCase() + raw.slice(1);
}

export function AdminDashboardSalesSection({
  salesByDate,
  detailBaseHref = "/admin/expedientes",
}: {
  salesByDate: Record<string, SalesDayBucket>;
  detailBaseHref?: string;
}) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const { orders, totalCents } = useMemo(() => {
    const list: SalesDayBucket["orders"] = [];
    let total = 0;
    for (const [key, bucket] of Object.entries(salesByDate)) {
      const d = new Date(`${key}T12:00:00`);
      if (d.getFullYear() === viewYear && d.getMonth() === viewMonth) {
        total += bucket.totalCents;
        list.push(...bucket.orders);
      }
    }
    list.sort((a, b) => b.paidAt.localeCompare(a.paidAt));
    return { orders: list, totalCents: total };
  }, [salesByDate, viewYear, viewMonth]);

  const monthName = monthLabel(viewYear, viewMonth);

  return (
    <div className="grid min-h-0 grid-rows-[auto_1fr] gap-3">
      <AdminSalesCalendar
        compact
        salesByDate={salesByDate}
        detailBaseHref={detailBaseHref}
        viewYear={viewYear}
        viewMonth={viewMonth}
        onViewMonthChange={(year, month) => {
          setViewYear(year);
          setViewMonth(month);
        }}
      />

      <div className={`${ADMIN_CARD_COMPACT} flex min-h-0 flex-col overflow-hidden`}>
        <div className="mb-2 flex shrink-0 items-start justify-between gap-2">
          <div>
            <h2 className="text-sm font-bold text-[#1E293B]">Ventas de {monthName}</h2>
            <p className="text-[11px] text-[#64748B]">
              {orders.length} {orders.length === 1 ? "venta" : "ventas"} ·{" "}
              <span className={ADMIN_MONEY}>{formatEuros(totalCents)}</span>
            </p>
          </div>
          <Link href="/admin/ventas" className="shrink-0 text-[11px] font-semibold text-[#1A4FBF] hover:underline">
            Ver ventas →
          </Link>
        </div>

        {!orders.length ? (
          <p className="text-xs text-[#64748B]">No hay ventas en {monthName.toLowerCase()}.</p>
        ) : (
          <ul className="min-h-0 flex-1 divide-y divide-slate-100 overflow-y-auto">
            {orders.map((order) => (
              <li key={order.id}>
                <Link
                  href={`${detailBaseHref}/${order.id}`}
                  className="flex items-center justify-between gap-2 py-2 transition hover:bg-slate-50/80"
                >
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-[#1E293B]">{order.serviceName}</p>
                    <p className="truncate text-[11px] text-[#64748B]">{order.clientName}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-xs font-semibold text-[#1A4FBF]">{formatEuros(order.totalCents)}</p>
                    <p className="text-[10px] text-[#94A3B8]">
                      {ORDER_STATUS_LABEL[order.status] ?? order.status}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
