"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileUp, Home, LogOut, ShoppingBag } from "lucide-react";
import { performClientLogout } from "@/lib/auth-logout";

const NAV = [
  { href: "/dashboard", label: "Panel", icon: Home, match: (p: string) => p === "/dashboard" },
  {
    href: "/mis-pedidos",
    label: "Documentos",
    icon: FileUp,
    match: (p: string) => p.startsWith("/mis-pedidos"),
  },
  {
    href: "/dashboard/servicios",
    label: "Contratar",
    icon: ShoppingBag,
    match: (p: string) => p.startsWith("/dashboard/servicios"),
  },
] as const;

export function ClientMobileBottomNav() {
  const pathname = usePathname() ?? "";

  return (
    <nav
      className="client-mobile-bottom-nav fixed inset-x-0 bottom-0 z-[60] border-t border-slate-200 bg-white shadow-[0_-4px_24px_rgba(15,23,42,0.08)] lg:hidden"
      aria-label="Panel del cliente"
    >
      <ul className="mx-auto flex max-w-lg items-stretch px-1 pt-1 pb-[max(0.375rem,env(safe-area-inset-bottom))]">
        {NAV.map(({ href, label, icon: Icon, match }) => {
          const active = match(pathname);
          return (
            <li key={href} className="min-w-0 flex-1">
              <Link
                href={href}
                className={`flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-lg px-1 py-1 text-[11px] font-semibold ${
                  active ? "text-[#1A4FBF]" : "text-slate-500"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <Icon className={`h-5 w-5 ${active ? "stroke-[2.5px]" : ""}`} aria-hidden />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
        <li className="min-w-0 flex-1">
          <button
            type="button"
            onClick={() => void performClientLogout()}
            className="flex min-h-12 w-full flex-col items-center justify-center gap-0.5 rounded-lg px-1 py-1 text-[11px] font-semibold text-slate-500"
          >
            <LogOut className="h-5 w-5" aria-hidden />
            <span>Salir</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
