"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { ClientNotificationItem } from "@/lib/client-notification-types";

type ClientPanelContextValue = {
  userLabel: string;
  unreadCount: number;
  items: ClientNotificationItem[];
  loading: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  refreshCount: () => Promise<void>;
  refreshList: () => Promise<void>;
  markRead: (id: string) => Promise<void>;
  markAllRead: () => Promise<void>;
};

const ClientPanelContext = createContext<ClientPanelContextValue | null>(null);

export function useClientPanel() {
  const ctx = useContext(ClientPanelContext);
  if (!ctx) {
    throw new Error("useClientPanel debe usarse dentro de ClientPanelProvider");
  }
  return ctx;
}

export function ClientPanelProvider({ children }: { children: ReactNode }) {
  const [userLabel, setUserLabel] = useState("Mi cuenta");
  const [unreadCount, setUnreadCount] = useState(0);
  const [items, setItems] = useState<ClientNotificationItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const listLoadedRef = useRef(false);

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();
    void (async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;
      setUserId(user.id);
      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", user.id)
        .maybeSingle();
      const name = (profile?.full_name as string | undefined)?.trim();
      setUserLabel(name || user.email || "Mi cuenta");
    })();
  }, []);

  const refreshCount = useCallback(async () => {
    try {
      const res = await fetch("/api/notifications?countOnly=1", { cache: "no-store" });
      const data = await res.json();
      if (res.ok) setUnreadCount(data.unreadCount ?? 0);
    } catch {
      /* silencioso */
    }
  }, []);

  const refreshList = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/notifications?sync=1", { cache: "no-store" });
      const data = await res.json();
      if (res.ok) {
        setItems(data.notifications ?? []);
        setUnreadCount(data.unreadCount ?? 0);
        listLoadedRef.current = true;
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refreshCount();
  }, [refreshCount]);

  useEffect(() => {
    if (open && !listLoadedRef.current) {
      void refreshList();
    }
  }, [open, refreshList]);

  useEffect(() => {
    if (!userId) return;

    const supabase = createBrowserSupabaseClient();
    const channel = supabase
      .channel(`notifications:${userId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "client_notifications",
          filter: `user_id=eq.${userId}`,
        },
        () => {
          void refreshCount();
          if (listLoadedRef.current) void refreshList();
        },
      )
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, [userId, refreshCount, refreshList]);

  const markRead = useCallback(async (id: string) => {
    await fetch("/api/notifications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notificationId: id }),
    });
    const now = new Date().toISOString();
    setItems((prev) => prev.map((n) => (n.id === id ? { ...n, readAt: now } : n)));
    setUnreadCount((c) => Math.max(0, c - 1));
  }, []);

  const markAllRead = useCallback(async () => {
    await fetch("/api/notifications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ markAllRead: true }),
    });
    const now = new Date().toISOString();
    setItems((prev) => prev.map((n) => ({ ...n, readAt: n.readAt ?? now })));
    setUnreadCount(0);
  }, []);

  const value = useMemo(
    () => ({
      userLabel,
      unreadCount,
      items,
      loading,
      open,
      setOpen,
      refreshCount,
      refreshList,
      markRead,
      markAllRead,
    }),
    [userLabel, unreadCount, items, loading, open, refreshCount, refreshList, markRead, markAllRead],
  );

  return <ClientPanelContext.Provider value={value}>{children}</ClientPanelContext.Provider>;
}
