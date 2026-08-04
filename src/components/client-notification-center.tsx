"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Bell, CheckCheck, FileUp, Loader2, RefreshCw, Sparkles } from "lucide-react";
import { useClientPanel } from "@/components/client-panel-provider";
import type { ClientNotificationItem } from "@/lib/client-notification-types";

const KIND_ICON: Record<string, typeof Bell> = {
  reminder: FileUp,
  payment: Sparkles,
  status: RefreshCw,
  deliverable: CheckCheck,
  document: FileUp,
  system: Bell,
};

function formatWhen(iso: string) {
  const d = new Date(iso);
  const diff = Date.now() - d.getTime();
  if (diff < 60_000) return "Ahora";
  if (diff < 3_600_000) return `Hace ${Math.floor(diff / 60_000)} min`;
  if (diff < 86_400_000) return `Hace ${Math.floor(diff / 3_600_000)} h`;
  return d.toLocaleDateString("es-ES", { day: "numeric", month: "short" });
}

export function ClientNotificationCenter({ compact = false }: { compact?: boolean }) {
  const { unreadCount, items, loading, open, setOpen, markRead, markAllRead } = useClientPanel();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open, setOpen]);

  return (
    <div className="relative" ref={panelRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={
          compact
            ? "relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#64748B] transition hover:bg-slate-50"
            : "relative rounded-xl border border-slate-200 p-2.5 transition hover:bg-slate-50"
        }
        aria-label="Notificaciones"
        aria-expanded={open}
      >
        <Bell className="h-5 w-5 text-[#64748B]" aria-hidden />
        {unreadCount > 0 ? (
          <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#06B6D4] px-1 text-[10px] font-bold text-white">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        ) : null}
      </button>

      {open ? (
        <NotificationPanel
          compact={compact}
          items={items}
          loading={loading}
          unreadCount={unreadCount}
          onMarkAllRead={() => void markAllRead()}
          onMarkRead={(id) => void markRead(id)}
          onNavigate={() => setOpen(false)}
        />
      ) : null}
    </div>
  );
}

function NotificationPanel({
  compact,
  items,
  loading,
  unreadCount,
  onMarkAllRead,
  onMarkRead,
  onNavigate,
}: {
  compact: boolean;
  items: ClientNotificationItem[];
  loading: boolean;
  unreadCount: number;
  onMarkAllRead: () => void;
  onMarkRead: (id: string) => void;
  onNavigate: () => void;
}) {
  return (
    <div
      className={`absolute z-[80] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-100 ${
        compact ? "right-0 top-12 w-[min(100vw-2rem,22rem)]" : "right-0 top-12 w-[min(100vw-2rem,24rem)]"
      }`}
    >
      <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-[#0F2A6B] to-[#1A4FBF] px-4 py-3 text-white">
        <div>
          <p className="text-sm font-bold">Notificaciones</p>
          <p className="text-xs text-blue-100">{unreadCount > 0 ? `${unreadCount} sin leer` : "Estás al día"}</p>
        </div>
        {unreadCount > 0 ? (
          <button
            type="button"
            onClick={onMarkAllRead}
            className="rounded-lg bg-white/15 px-2.5 py-1 text-xs font-semibold hover:bg-white/25"
          >
            Marcar leídas
          </button>
        ) : null}
      </div>

      <div className="max-h-[min(70vh,24rem)] overflow-y-auto">
        {loading && items.length === 0 ? (
          <div className="flex items-center justify-center gap-2 px-4 py-10 text-sm text-[#64748B]">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Cargando…
          </div>
        ) : null}
        {!loading && items.length === 0 ? (
          <div className="px-4 py-10 text-center text-sm text-[#64748B]">No tienes notificaciones por ahora.</div>
        ) : null}
        <ul className="divide-y divide-slate-100">
          {items.map((item) => (
            <NotificationRow key={item.id} item={item} onMarkRead={onMarkRead} onNavigate={onNavigate} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function NotificationRow({
  item,
  onMarkRead,
  onNavigate,
}: {
  item: ClientNotificationItem;
  onMarkRead: (id: string) => void;
  onNavigate: () => void;
}) {
  const Icon = KIND_ICON[item.kind] ?? Bell;
  const unread = !item.readAt;
  const inner = (
    <>
      <div
        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
          unread ? "bg-[#EFF6FF] text-[#1A4FBF]" : "bg-slate-100 text-[#64748B]"
        }`}
      >
        <Icon className="h-4 w-4" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <p className={`text-sm ${unread ? "font-bold text-[#1E293B]" : "font-semibold text-[#475569]"}`}>
          {item.title}
        </p>
        {item.message ? (
          <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-[#64748B]">{item.message}</p>
        ) : null}
        <p className="mt-1 text-[11px] text-[#94A3B8]">{formatWhen(item.createdAt)}</p>
      </div>
      {unread ? <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#06B6D4]" /> : null}
    </>
  );

  if (item.href) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={() => {
            if (unread) onMarkRead(item.id);
            onNavigate();
          }}
          className="flex gap-3 px-4 py-3 transition hover:bg-[#EFF6FF]/50"
        >
          {inner}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => unread && onMarkRead(item.id)}
        className="flex w-full gap-3 px-4 py-3 text-left transition hover:bg-slate-50"
      >
        {inner}
      </button>
    </li>
  );
}
