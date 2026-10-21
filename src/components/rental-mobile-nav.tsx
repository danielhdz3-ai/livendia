"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Building2,
  Users,
  AlertCircle,
  Wallet,
  FileText,
  MessageSquare,
} from "lucide-react";
import { RentalChatNavBadge } from "@/components/rental-chat-nav-badge";
import { rentalClientDashboardPaths } from "@/lib/rental-admin-paths";

const tabClass = (active: boolean) =>
  active
    ? "flex shrink-0 items-center gap-1.5 rounded-full bg-[#1A4FBF] px-3 py-2 text-xs font-semibold text-white shadow-sm"
    : "flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-[#475569]";

/** Navegación horizontal del panel alquiler en móvil (sidebar solo en lg+). */
export function RentalMobileNav({
  activePropertyId,
  chatUnreadCount,
}: {
  activePropertyId?: string;
  chatUnreadCount: number;
}) {
  const pathname = usePathname() ?? "";
  const p = rentalClientDashboardPaths();

  const items = [
    { href: p.panel, label: "Panel", icon: Home, match: (path: string) => path === p.panel },
    { href: p.inmueble, label: "Inmueble", icon: Building2, match: (path: string) => path.startsWith(p.inmueble) },
    { href: p.inquilino, label: "Inquilino", icon: Users, match: (path: string) => path.startsWith(p.inquilino) },
    {
      href: p.incidencias,
      label: "Incidencias",
      icon: AlertCircle,
      match: (path: string) => path.startsWith(p.incidencias),
    },
    { href: p.pagos, label: "Pagos", icon: Wallet, match: (path: string) => path.startsWith(p.pagos) },
    {
      href: p.documentos,
      label: "Docs",
      icon: FileText,
      match: (path: string) => path.startsWith(p.documentos),
    },
    {
      href: p.chat,
      label: "Chat",
      icon: MessageSquare,
      match: (path: string) => path.startsWith(p.chat),
      badge: true,
    },
  ];

  return (
    <nav
      className="flex gap-2 overflow-x-auto border-b border-slate-200 bg-white px-3 py-2.5 lg:hidden"
      aria-label="Secciones del panel de alquiler"
    >
      {items.map(({ href, label, icon: Icon, match, badge }) => {
        const active = match(pathname);
        return (
          <Link key={href} href={href} className={`${tabClass(active)} relative`}>
            <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span>{label}</span>
            {badge ? (
              <RentalChatNavBadge propertyId={activePropertyId} initialUnread={chatUnreadCount} />
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}
