"use client";

import Link from "next/link";
import { ClientNotificationCenter } from "@/components/client-notification-center";
import { useClientPanel } from "@/components/client-panel-provider";

export function ClientMobileTopBar() {
  const { userLabel } = useClientPanel();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur lg:hidden">
      <div className="flex min-h-14 items-center justify-between gap-3 px-4">
        <Link href="/dashboard" className="min-w-0 flex-1">
          <span className="block text-lg font-extrabold leading-tight text-[#1A4FBF]">Livendia</span>
          <span className="block truncate text-xs text-[#64748B]">{userLabel}</span>
        </Link>
        <ClientNotificationCenter compact />
      </div>
    </header>
  );
}
