"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Bell, CheckCheck, FileUp, Loader2, RefreshCw, Sparkles } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export type ClientNotificationItem = {
  id: string;
  kind: string;
  title: string;
  message: string | null;
  href: string | null;
  orderId: string | null;
  readAt: string | null;
  createdAt: string;
};

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
  const now = Date.now();
  const diff = now - d.getTime();
  if (diff < 60_000) return "Ahora";
  if (diff < 3_600_000) return `Hace ${Math.floor(diff / 60_000)} min`;
  if (diff < 86_400_000) return `Hace ${Math.floor(diff / 3_600_000)} h`;
  return d.toLocaleDateString("es-ES", { day: "numeric", month: "short" });
}

export function ClientNotificationCenter({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<ClientNotificationItem[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  const fetchNotifications = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/notifications", { cache: "no-store" });
      const data = await res.json();
      if (res.ok) {
        setItems(data.notifications ?? []);
        setUnreadCount(data.unreadCount ?? 0);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchNotifications();
  }, [fetchNotifications]);

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();
    let channel: ReturnType<typeof supabase.channel> | null = null;

    void (async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      channel = supabase
        .channel(`notifications:${user.id}`)
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "client_notifications",
            filter: `user_id=eq.${user.id}`,
          },
          () => {
            void fetchNotifications();
          },
        )
        .subscribe();
    })();

    return () => {
      if (channel) void supabase.removeChannel(channel);
    };
  }, [fetchNotifications]);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  async function markRead(id: string) {
    await fetch("/api/notifications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notificationId: id }),
    });
    setItems((prev) => prev.map((n) => (n.id === id ? { ...n, readAt: new Date().toISOString() } : n)));
    setUnreadCount((c) => Math.max(0, c - 1));
  }

  async function markAllRead() {
    await fetch("/api/notifications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ markAllRead: true }),
    });
    const now = new Date().toISOString();
    setItems((prev) => prev.map((n) => ({ ...n, readAt: n.readAt ?? now })));
    setUnreadCount(0);
  }

  return (
    <div className="relative" ref={panelRef}>
      <button
        type="button"
        onClick={() => {
          setOpen((v) => !v);
          if (!open) void fetchNotifications();
        }}
        className={
          compact
            ? "relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#64748B] transition hover:bg-slate-50"
            : "relative rounded-xl border border-slate-200 p-2.5 transition hover:bg-slate-50"
        }
        aria-label="Notificaciones"
        aria-expanded={open}
      >
        <Bell className={compact ? "h-5 w-5" : "h-5 w-5 text-[#64748B]"} aria-hidden />
        {unreadCount > 0 ? (
          <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#06B6D4] px-1 text-[10px] font-bold text-white">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        ) : null}
      </button>

      {open ? (
        <div
          className={`absolute z-[80] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-100 ${
            compact ? "right-0 top-12 w-[min(100vw-2rem,22rem)]" : "right-0 top-12 w-[min(100vw-2rem,24rem)]"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-[#0F2A6B] to-[#1A4FBF] px-4 py-3 text-white">
            <div>
              <p className="text-sm font-bold">Notificaciones</p>
              <p className="text-xs text-blue-100">
                {unreadCount > 0 ? `${unreadCount} sin leer` : "Estás al día"}
              </p>
            </div>
            {unreadCount > 0 ? (
              <button
                type="button"
                onClick={() => void markAllRead()}
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
              <div className="px-4 py-10 text-center text-sm text-[#64748B]">
                No tienes notificaciones por ahora.
              </div>
            ) : null}

            <ul className="divide-y divide-slate-100">
              {items.map((item) => {
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

                return (
                  <li key={item.id}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => {
                          if (unread) void markRead(item.id);
                          setOpen(false);
                        }}
                        className="flex gap-3 px-4 py-3 transition hover:bg-[#EFF6FF]/50"
                      >
                        {inner}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => unread && void markRead(item.id)}
                        className="flex w-full gap-3 px-4 py-3 text-left transition hover:bg-slate-50"
                      >
                        {inner}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
