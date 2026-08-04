"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { ADMIN_PAGE_BG } from "@/lib/admin-ui";

export function AdminLayoutShell({ adminEmail, children }: { adminEmail: string; children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() ?? "";

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div className={`flex min-h-screen ${ADMIN_PAGE_BG}`}>
      <div className="hidden shrink-0 md:flex">
        <AdminSidebar adminEmail={adminEmail} />
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Cerrar menú"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-10 h-full w-64 overflow-y-auto shadow-xl">
            <AdminSidebar adminEmail={adminEmail} />
          </div>
        </div>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col overflow-y-auto">
        <header className="sticky top-0 z-40 flex items-center gap-3 border-b border-slate-200/80 bg-[#F1F5F9]/95 px-4 py-3 backdrop-blur md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-lg border border-slate-200 bg-white p-2"
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link href="/admin" className="text-sm font-bold text-[#1E293B]">
            Livendia Admin
          </Link>
          <span className="ml-auto truncate text-xs text-[#64748B]">{pathname.split("/").pop()}</span>
        </header>
        <div className="mx-auto w-full max-w-7xl flex-1 p-5 sm:p-8">{children}</div>
      </div>
    </div>
  );
}
