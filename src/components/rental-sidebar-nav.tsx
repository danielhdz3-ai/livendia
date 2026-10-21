"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RentalChatNavBadge } from "@/components/rental-chat-nav-badge";
import { rentalClientDashboardPaths } from "@/lib/rental-admin-paths";
import {
  Home,
  Building2,
  Users,
  MessageSquare,
  AlertCircle,
  ShoppingBag,
  User,
  CreditCard,
  Settings,
  Wallet,
  FileText,
} from "lucide-react";

const navBase =
  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white";
const navActive =
  "flex items-center gap-3 rounded-lg bg-white/[0.17] px-3 py-2 text-sm font-semibold text-white shadow-[inset_4px_0_0_0_#06B6D4]";

export function RentalSidebarNav({
  activePropertyId,
  chatUnreadCount,
}: {
  activePropertyId?: string;
  chatUnreadCount: number;
}) {
  const pathname = usePathname() ?? "";
  const p = rentalClientDashboardPaths();
  const linkClass = (href: string, exact?: boolean) =>
    (exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`))
      ? navActive
      : navBase;

  return (
    <nav className="flex-1 space-y-1 p-4">
      <Link href={p.panel} className={linkClass(p.panel, true)}>
        <Home className="h-5 w-5 shrink-0 text-white" />
        <span>Panel principal</span>
      </Link>

      <Link href={p.inmueble} className={linkClass(p.inmueble)}>
        <Building2 className="h-5 w-5 shrink-0 opacity-95" />
        <span>Datos del inmueble</span>
      </Link>

      <Link href={p.inquilino} className={linkClass(p.inquilino)}>
        <Users className="h-5 w-5 shrink-0 opacity-95" />
        <span>Datos del inquilino</span>
      </Link>

      <Link href={p.incidencias} className={linkClass(p.incidencias)}>
        <AlertCircle className="h-5 w-5 shrink-0 opacity-95" />
        <span>Portal de incidencias</span>
      </Link>

      <Link href={p.pagos} className={linkClass(p.pagos)}>
        <Wallet className="h-5 w-5 shrink-0 opacity-95" />
        <span>Pagos y gastos</span>
      </Link>

      <Link href={p.documentos} className={linkClass(p.documentos)}>
        <FileText className="h-5 w-5 shrink-0 opacity-95" />
        <span>Documentación</span>
      </Link>

      <Link href={p.chat} className={`${linkClass(p.chat)} relative`}>
        <MessageSquare className="h-5 w-5 shrink-0 opacity-95" />
        <span>Chat unificado</span>
        <RentalChatNavBadge propertyId={activePropertyId} initialUnread={chatUnreadCount} />
      </Link>

      <Link href="/dashboard/servicios" className={navBase}>
        <ShoppingBag className="h-5 w-5 shrink-0 opacity-95" />
        <span>Servicios</span>
      </Link>

      <div className="my-4 border-t border-white/15" />

      <Link href="/dashboard/perfil" className={navBase}>
        <User className="h-5 w-5 shrink-0 opacity-95" />
        <span>Mi perfil</span>
      </Link>

      <Link href="/dashboard/pagos" className={navBase}>
        <CreditCard className="h-5 w-5 shrink-0 opacity-95" />
        <span>Métodos de pago</span>
      </Link>
    </nav>
  );
}
