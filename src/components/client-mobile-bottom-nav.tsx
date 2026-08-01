"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FileUp, Home, ShoppingBag } from "lucide-react";
import {
  ClientMobileMoreMenu,
  ClientMobileMoreMenuTrigger,
} from "@/components/client-mobile-more-menu";

const NAV = [
  { href: "/dashboard", label: "Panel", icon: Home, match: (p: string) => p === "/dashboard" },
  {
    href: "/mis-pedidos",
    label: "Expedientes",
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
  const [moreOpen, setMoreOpen] = useState(false);

  const moreActive =
    pathname.startsWith("/dashboard/perfil") ||
    pathname.startsWith("/dashboard/pagos") ||
    pathname.startsWith("/dashboard/configuracion");

  return (
    <>
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
            <ClientMobileMoreMenuTrigger active={moreActive || moreOpen} onClick={() => setMoreOpen(true)} />
          </li>
        </ul>
      </nav>
      <ClientMobileMoreMenu open={moreOpen} onClose={() => setMoreOpen(false)} />
    </>
  );
}
