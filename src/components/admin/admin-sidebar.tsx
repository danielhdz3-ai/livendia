"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlertCircle,
  Building2,
  Database,
  FileText,
  FolderOpen,
  LayoutDashboard,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import { AdminExitActions } from "@/components/admin-exit-actions";
import { ADMIN_NAV_ACTIVE, ADMIN_NAV_IDLE, ADMIN_SIDEBAR_BG } from "@/lib/admin-ui";

const MAIN_NAV = [
  { href: "/admin", label: "Dashboard", subtitle: "Visión general", icon: LayoutDashboard, exact: true },
  { href: "/admin/ventas", label: "Ventas", subtitle: "Ingresos y pedidos", icon: TrendingUp },
  { href: "/admin/expedientes", label: "Expedientes", subtitle: "Clientes de gestoría", icon: FolderOpen },
  { href: "/admin/base-datos", label: "Base de datos", subtitle: "Particulares e inmuebles", icon: Database },
  { href: "/admin/documentos", label: "Documentos", subtitle: "Archivos subidos", icon: FileText },
] as const;

const OPS_NAV = [
  { href: "/admin/alquileres", label: "Alquileres", icon: Building2 },
  { href: "/admin/incidencias", label: "Incidencias", icon: AlertCircle },
  { href: "/admin/chat", label: "Chat", icon: MessageCircle },
] as const;

function navActive(pathname: string, href: string, exact?: boolean) {
  if (exact) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AdminSidebar({ adminEmail }: { adminEmail: string }) {
  const pathname = usePathname() ?? "";

  return (
    <aside className={`flex w-64 shrink-0 flex-col ${ADMIN_SIDEBAR_BG} text-white`}>
      <div className="border-b border-white/10 px-5 py-6">
        <Link href="/admin" className="block">
          <span className="text-xl font-extrabold tracking-tight text-white">Livendia</span>
          <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#60A5FA]">
            Administración
          </span>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {MAIN_NAV.map((item) => {
          const { href, label, subtitle, icon: Icon } = item;
          const exact = "exact" in item ? item.exact : false;
          const active = navActive(pathname, href, exact);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-start gap-3 rounded-xl px-3 py-3 ${active ? ADMIN_NAV_ACTIVE : ADMIN_NAV_IDLE}`}
            >
              <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${active ? "text-[#60A5FA]" : ""}`} aria-hidden />
              <span>
                <span className="block text-sm font-semibold">{label}</span>
                <span className="block text-[11px] text-slate-500">{subtitle}</span>
              </span>
            </Link>
          );
        })}

        <div className="my-4 border-t border-white/10 pt-4">
          <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Operaciones</p>
          {OPS_NAV.map(({ href, label, icon: Icon }) => {
            const active = navActive(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${active ? ADMIN_NAV_ACTIVE : ADMIN_NAV_IDLE}`}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                {label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-white/10 p-4">
        <div className="rounded-xl bg-white/5 px-3 py-3 ring-1 ring-white/10">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Administrador</p>
          <p className="mt-1 truncate text-sm text-slate-200">{adminEmail}</p>
        </div>
        <div className="mt-3">
          <AdminExitActions variant="sidebar" />
        </div>
      </div>
    </aside>
  );
}
