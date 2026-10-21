"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Building2,
  Users,
  MessageSquare,
  AlertCircle,
  Wallet,
  FileText,
  Wrench,
} from "lucide-react";
import { rentalAdminClientMirrorPaths } from "@/lib/rental-admin-paths";

const tabClass = (active: boolean) =>
  active
    ? "flex items-center gap-2 rounded-lg bg-[#1A4FBF] px-3 py-2 text-sm font-semibold text-white shadow-sm"
    : "flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-[#475569] transition hover:border-[#1A4FBF]/40 hover:text-[#1A4FBF]";

export function AdminRentalMirrorNav({
  clientId,
  clientLabel,
}: {
  clientId: string;
  clientLabel: string;
}) {
  const pathname = usePathname() ?? "";
  const p = rentalAdminClientMirrorPaths(clientId);

  const items = [
    { href: p.panel, label: "Panel principal", icon: Home, match: (path: string) => path === p.panel },
    { href: p.inmueble, label: "Inmueble", icon: Building2, match: (path: string) => path.startsWith(p.inmueble) },
    { href: p.inquilino, label: "Inquilino", icon: Users, match: (path: string) => path.startsWith(p.inquilino) },
    { href: p.incidencias, label: "Incidencias", icon: AlertCircle, match: (path: string) => path.startsWith(p.incidencias) },
    { href: p.pagos, label: "Pagos y gastos", icon: Wallet, match: (path: string) => path.startsWith(p.pagos) },
    { href: p.documentos, label: "Documentación", icon: FileText, match: (path: string) => path.startsWith(p.documentos) },
    { href: p.chat, label: "Chat", icon: MessageSquare, match: (path: string) => path.startsWith(p.chat) },
    { href: p.gestion, label: "Gestión interna", icon: Wrench, match: (path: string) => path.startsWith(p.gestion) },
  ];

  return (
    <div className="mb-6 rounded-xl border border-[#1A4FBF]/20 bg-gradient-to-r from-[#EFF6FF] to-white p-4 ring-1 ring-[#1A4FBF]/10">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">Vista del cliente</p>
          <p className="text-sm font-semibold text-[#1E293B]">{clientLabel}</p>
        </div>
        <Link href="/admin/alquileres" className="text-xs font-semibold text-[#1A4FBF] hover:underline">
          ← Todos los clientes
        </Link>
      </div>
      <nav className="flex flex-wrap gap-2">
        {items.map(({ href, label, icon: Icon, match }) => (
          <Link key={href} href={href} className={tabClass(match(pathname))}>
            <Icon className="h-4 w-4 shrink-0" />
            <span className="whitespace-nowrap">{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
