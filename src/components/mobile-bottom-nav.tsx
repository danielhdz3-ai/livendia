"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, CircleUser, Home, MessageCircle, Tag } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Inicio", icon: Home, match: (p: string) => p === "/" },
  {
    href: "/servicios",
    label: "Servicios",
    icon: Briefcase,
    match: (p: string) => p.startsWith("/servicios"),
  },
  { href: "/precios", label: "Precios", icon: Tag, match: (p: string) => p === "/precios" },
  { href: "/contacto", label: "Contacto", icon: MessageCircle, match: (p: string) => p === "/contacto" },
  {
    href: "/login",
    label: "Cuenta",
    icon: CircleUser,
    match: (p: string) => p.startsWith("/login") || p.startsWith("/dashboard"),
  },
] as const;

export function MobileBottomNav() {
  const pathname = usePathname() ?? "";

  return (
    <nav
      className="mobile-bottom-nav fixed inset-x-0 bottom-0 z-[60] border-t border-slate-200/90 bg-white/95 backdrop-blur-md sm:hidden"
      aria-label="Navegación principal móvil"
    >
      <ul className="mx-auto flex max-w-lg items-stretch justify-around px-1 pt-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]">
        {NAV_ITEMS.map(({ href, label, icon: Icon, match }) => {
          const active = match(pathname);
          return (
            <li key={href} className="min-w-0 flex-1">
              <Link
                href={href}
                className={`flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-lg px-1 py-1 text-[11px] font-semibold transition-colors ${
                  active ? "text-[#1A4FBF]" : "text-slate-500 hover:text-[#1A4FBF]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <Icon className={`h-5 w-5 shrink-0 ${active ? "stroke-[2.5px]" : ""}`} aria-hidden />
                <span className="truncate">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
