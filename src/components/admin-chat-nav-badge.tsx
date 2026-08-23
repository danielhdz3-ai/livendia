"use client";

import { useEffect, useState } from "react";

export function AdminChatNavBadge({ className }: { className?: string }) {
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    const poll = async () => {
      try {
        const res = await fetch("/api/messages/admin-unread", { cache: "no-store" });
        const data = (await res.json()) as { total?: number };
        if (res.ok) setUnread(data.total ?? 0);
      } catch {
        /* silencioso */
      }
    };
    void poll();
    const id = setInterval(() => void poll(), 15000);
    return () => clearInterval(id);
  }, []);

  if (unread <= 0) return null;

  return (
    <span
      className={
        className ??
        "ml-auto rounded-full bg-cyan-400 px-2 py-0.5 text-[10px] font-bold text-[#0F2A6B]"
      }
    >
      {unread > 9 ? "9+" : unread}
    </span>
  );
}

export function UnreadCountPill({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <span className="rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-bold text-white">
      {count > 9 ? "9+" : count}
    </span>
  );
}
