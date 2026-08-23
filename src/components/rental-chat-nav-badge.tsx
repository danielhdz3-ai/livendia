"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function RentalChatNavBadge({
  propertyId,
  initialUnread,
}: {
  propertyId?: string;
  initialUnread: number;
}) {
  const [unread, setUnread] = useState(initialUnread);

  useEffect(() => {
    if (!propertyId) return;
    setUnread(initialUnread);
  }, [initialUnread, propertyId]);

  useEffect(() => {
    if (!propertyId) return;
    const poll = async () => {
      try {
        const res = await fetch(
          `/api/messages/unread-count?propertyId=${encodeURIComponent(propertyId)}`,
          { cache: "no-store" },
        );
        const data = (await res.json()) as { unreadCount?: number };
        if (res.ok) setUnread(data.unreadCount ?? 0);
      } catch {
        /* silencioso */
      }
    };
    void poll();
    const id = setInterval(() => void poll(), 15000);
    return () => clearInterval(id);
  }, [propertyId]);

  if (!propertyId || unread <= 0) return null;

  return (
    <Link
      href="/dashboard/rental/chat"
      className="ml-auto rounded-full bg-cyan-400 px-2 py-0.5 text-[10px] font-bold text-[#0F2A6B]"
    >
      {unread > 9 ? "9+" : unread}
    </Link>
  );
}
