"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from "@/app/dashboard/logout-button";
import {
  PANEL_NAV_ACTIVE,
  PANEL_NAV_IDLE,
  PANEL_NAV_QUICK,
  PANEL_SIDEBAR_BG,
} from "@/lib/client-panel-ui";
import {
  Building,
  CreditCard,
  FileText,
  Home,
  Settings,
  ShoppingBag,
  Sparkles,
  User,
} from "lucide-react";
import type { ClientShellProps } from "@/lib/client-shell-props";

type NavItem = {
  href: string;
  label: string;
  icon: typeof Home;
  match: (path: string) => boolean;
  badge?: number;
};

function navClass(active: boolean) {
  return active ? PANEL_NAV_ACTIVE : PANEL_NAV_IDLE;
}

export function ClientSidebar({ firstName, pendingOrders, isAdmin }: ClientShellProps) {
  const pathname = usePathname() ?? "";

  const mainNav: NavItem[] = [
    {
      href: "/dashboard",
      label: "Panel principal",
      icon: Home,
      match: (p) => p === "/dashboard",
    },
    {
      href: "/mis-pedidos",
      label: "Mis pedidos",
      icon: ShoppingBag,
      match: (p) => p === "/mis-pedidos" || p.startsWith("/mis-pedidos/"),
      badge: pendingOrders > 0 ? pendingOrders : undefined,
    },
    {
      href: "/dashboard/servicios",
      label: "Servicios",
      icon: Sparkles,
      match: (p) => p.startsWith("/dashboard/servicios"),
    },
    {
      href: "/mis-pedidos",
      label: "Documentos",
      icon: FileText,
      match: (p) => p === "/mis-pedidos" || p.startsWith("/mis-pedidos/"),
    },
  ];

  const accountNav: NavItem[] = [
    {
      href: "/dashboard/perfil",
      label: "Mi perfil",
      icon: User,
      match: (p) => p.startsWith("/dashboard/perfil"),
    },
    {
      href: "/dashboard/pagos",
      label: "Métodos de pago",
      icon: CreditCard,
      match: (p) => p.startsWith("/dashboard/pagos"),
    },
    {
      href: "/dashboard/configuracion",
      label: "Configuración",
      icon: Settings,
      match: (p) => p.startsWith("/dashboard/configuracion"),
    },
  ];

  return (
    <aside className={`hidden w-64 shrink-0 lg:flex ${PANEL_SIDEBAR_BG}`}>
      <div className="flex h-full min-h-screen w-full flex-col">
        <div className="border-b border-white/15 p-6">
          <Link href="/dashboard" className="block outline-none ring-white/40 focus-visible:ring-2">
            <span className="text-2xl font-extrabold leading-tight tracking-tight text-white">Livendia</span>
            <span className="mt-1 block text-sm font-semibold text-white/80">Gestoría Digital</span>
          </Link>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {mainNav.map((item) => {
            const Icon = item.icon;
            const active = item.match(pathname);
            return (
              <Link key={item.label} href={item.href} className={navClass(active)}>
                <Icon className="h-5 w-5 shrink-0 opacity-95" aria-hidden />
                <span>{item.label}</span>
                {item.badge ? (
                  <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-[#06B6D4] px-1 text-xs font-bold text-white">
                    {item.badge}
                  </span>
                ) : null}
              </Link>
            );
          })}

          <div className="my-4 border-t border-white/15" />

          {accountNav.map((item) => {
            const Icon = item.icon;
            const active = item.match(pathname);
            return (
              <Link key={item.href} href={item.href} className={navClass(active)}>
                <Icon className="h-5 w-5 shrink-0 opacity-95" aria-hidden />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/15 p-4">
          <div className="mb-4 space-y-2">
            <p className="text-xs font-semibold uppercase text-white/50">Acciones rápidas</p>
            <Link href="/dashboard/servicios" className={PANEL_NAV_QUICK}>
              Contratar servicios
            </Link>
            <Link href="/dashboard/perfil" className={PANEL_NAV_QUICK}>
              Editar perfil
            </Link>
          </div>

          {isAdmin ? (
            <Link
              href="/admin"
              className="mb-3 flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              <Building className="h-4 w-4" aria-hidden />
              Panel Admin
            </Link>
          ) : null}

          <div className="mb-3 flex items-center gap-3 rounded-lg bg-white/[0.1] p-3 ring-1 ring-white/10">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-sm font-bold text-white">
              {firstName.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">{firstName}</p>
              <p className="text-xs text-white/65">Área cliente</p>
            </div>
          </div>

          <LogoutButton variant="on-brand" />
        </div>
      </div>
    </aside>
  );
}
