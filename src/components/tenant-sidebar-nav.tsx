"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlertCircle, Home, MessageCircle } from "lucide-react";

const links = [
  { href: "/inquilino", label: "Inicio", icon: Home, exact: true },
  { href: "/inquilino/incidencias", label: "Incidencias", icon: AlertCircle },
  { href: "/inquilino/chat", label: "Chat", icon: MessageCircle },
];

export function TenantSidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 space-y-1 p-4">
      {links.map(({ href, label, icon: Icon, exact }) => {
        const active = exact ? pathname === href : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
              active
                ? "bg-white/15 text-white"
                : "text-white/80 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Icon className="h-5 w-5" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
