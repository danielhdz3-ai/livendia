"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileUp, Home, LogOut, ShoppingBag } from "lucide-react";
import { performClientLogout } from "@/lib/auth-logout";

const NAV = [
  { href: "/dashboard", label: "Panel", icon: Home, match: (p: string) => p === "/dashboard" },
  {
    href: "/mis-pedidos",
    label: "Docs",
    icon: FileUp,
    match: (p: string) => p.startsWith("/mis-pedidos"),
  },
  {
    href: "/dashboard/servicios",
    label: "Servicios",
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
      <ul className="grid w-full grid-cols-4 items-stretch gap-0 px-0 pt-1 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {NAV.map(({ href, label, icon: Icon, match }) => {
          const active = match(pathname);
          return (
            <li key={href} className="min-w-0">
              <Link
                href={href}
                className={`flex min-h-[3.75rem] flex-col items-center justify-center gap-1 px-1 py-1.5 ${
                  active ? "text-[#1A4FBF]" : "text-slate-500"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <Icon className={`h-6 w-6 shrink-0 ${active ? "stroke-[2.5px]" : ""}`} aria-hidden />
                <span className="max-w-full truncate text-center text-[10px] font-bold leading-none">
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
        <li className="min-w-0">
          <button
            type="button"
            onClick={() => void performClientLogout()}
            className="flex min-h-[3.75rem] w-full flex-col items-center justify-center gap-1 px-1 py-1.5 text-slate-500"
          >
            <LogOut className="h-6 w-6 shrink-0" aria-hidden />
            <span className="max-w-full truncate text-center text-[10px] font-bold leading-none">Salir</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
