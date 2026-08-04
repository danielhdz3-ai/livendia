"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ChevronRight,
  CreditCard,
  LogOut,
  MessageCircle,
  Settings,
  User,
  X,
} from "lucide-react";
import { BUSINESS_EMAIL, getWhatsAppHref } from "@/lib/business-nap";
import { performClientLogout } from "@/lib/auth-logout";

const LINKS = [
  { href: "/dashboard/perfil", label: "Mi perfil", icon: User },
  { href: "/dashboard/pagos", label: "Métodos de pago", icon: CreditCard },
  { href: "/dashboard/configuracion", label: "Configuración", icon: Settings },
] as const;

export function ClientMobileMoreMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname() ?? "";
  const waHref = getWhatsAppHref("Hola, necesito ayuda con mi panel de cliente Livendia.");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] lg:hidden" role="dialog" aria-modal="true" aria-label="Más opciones">
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        aria-label="Cerrar menú"
        onClick={onClose}
      />
      <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-[#F8FAFC] shadow-2xl">
        <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4">
          <h2 className="text-lg font-bold text-[#1E293B]">Más opciones</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <section className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
            <ul className="divide-y divide-slate-100">
              {LINKS.map(({ href, label, icon: Icon }) => {
                const active = pathname === href || pathname.startsWith(`${href}/`);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={onClose}
                      className={`flex min-h-14 items-center justify-between gap-3 px-4 py-3 ${
                        active ? "bg-[#EFF6FF]" : "active:bg-slate-50"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className={`h-5 w-5 ${active ? "text-[#1A4FBF]" : "text-slate-500"}`} aria-hidden />
                        <span className={`text-sm font-semibold ${active ? "text-[#1A4FBF]" : "text-[#1E293B]"}`}>
                          {label}
                        </span>
                      </span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
            <ul className="divide-y divide-slate-100">
              <li>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-placement="client_menu_whatsapp"
                  onClick={onClose}
                  className="flex min-h-14 items-center gap-3 px-4 py-3 active:bg-slate-50"
                >
                  <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden />
                  <span className="text-sm font-semibold text-[#1E293B]">WhatsApp con gestor</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  onClick={onClose}
                  className="flex min-h-14 items-center gap-3 px-4 py-3 active:bg-slate-50"
                >
                  <span className="flex h-5 w-5 items-center justify-center text-sm font-bold text-[#1A4FBF]">@</span>
                  <span className="text-sm font-semibold text-[#1E293B]">Enviar docs a {BUSINESS_EMAIL}</span>
                </a>
              </li>
            </ul>
          </section>

          <button
            type="button"
            onClick={() => {
              onClose();
              void performClientLogout();
            }}
            className="flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-[#64748B] shadow-sm transition hover:border-[#1A4FBF]/30 hover:text-[#1A4FBF]"
          >
            <LogOut className="h-5 w-5" aria-hidden />
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export function ClientMobileMoreMenuTrigger({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-[3.75rem] w-full flex-col items-center justify-center gap-1 px-1 py-1.5 ${
        active ? "text-[#1A4FBF]" : "text-slate-500"
      }`}
      aria-current={active ? "page" : undefined}
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold ${
          active ? "bg-[#1A4FBF]/10 text-[#1A4FBF]" : "bg-slate-100 text-slate-500"
        }`}
      >
        ···
      </span>
      <span className="max-w-full truncate text-center text-[10px] font-bold leading-none">Más</span>
    </button>
  );
}
