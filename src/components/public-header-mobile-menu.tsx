"use client";

import Link from "next/link";
import { ChevronRight, MessageCircle, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { getWhatsAppHref } from "@/lib/business-nap";
import { SERVICE_LANDING_NAV_LINKS } from "@/lib/service-landing-nav-links";

const SERVICIO_LINKS = [
  { href: "/para-propietarios", label: "Para propietarios", hint: "Administración 49 €/mes" },
  ...SERVICE_LANDING_NAV_LINKS,
] as const;

const INFO_LINKS = [
  { href: "/servicios", label: "Todos los contratos" },
  { href: "/ciudades", label: "Ciudades", hint: "Servicios por ciudad" },
  { href: "/precios", label: "Contratar" },
  { href: "/blog", label: "Blog y guías" },
  { href: "/equipo", label: "Equipo" },
  { href: "/contacto", label: "Contacto" },
] as const;

function MenuCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/80">
      <h2 className="border-b border-slate-100 bg-slate-50 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
        {title}
      </h2>
      <ul className="divide-y divide-slate-100">{children}</ul>
    </section>
  );
}

function MenuLink({
  href,
  label,
  hint,
  onNavigate,
}: {
  href: string;
  label: string;
  hint?: string;
  onNavigate: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onNavigate}
        className="flex min-h-12 items-center justify-between gap-3 px-4 py-3 active:bg-slate-50"
      >
        <span>
          <span className="block text-sm font-semibold text-[#1E293B]">{label}</span>
          {hint ? <span className="mt-0.5 block text-xs text-[#64748B]">{hint}</span> : null}
        </span>
        <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
      </Link>
    </li>
  );
}

export function PublicHeaderMobileMenu() {
  const [open, setOpen] = useState(false);
  const waHref = getWhatsAppHref("Hola, me gustaría información sobre los servicios de Livendia.");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) document.body.classList.add("livendia-menu-open");
    else document.body.classList.remove("livendia-menu-open");
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("livendia-menu-open");
    };
  }, [open]);

  useEffect(() => {
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (!open) return;
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-xl text-white hover:bg-white/10"
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X className="h-6 w-6" aria-hidden /> : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open ? (
        <div id="mobile-nav-drawer" className="fixed inset-0 z-[70] flex flex-col bg-[#0f172a]" role="dialog" aria-modal="true">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
            <span className="text-lg font-extrabold text-white">Livendia</span>
            <button
              type="button"
              onClick={close}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white hover:bg-white/10"
              aria-label="Cerrar menú"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <div className="rounded-2xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] p-5 text-white shadow-xl">
              <p className="text-sm font-semibold text-blue-100">Gestoría inmobiliaria online</p>
              <p className="mt-2 text-lg font-bold leading-snug">
                Contratos, arras y administración con gestor asignado
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={close}
                  className="flex min-h-11 items-center justify-center rounded-xl bg-white text-sm font-bold text-[#1A4FBF]"
                >
                  Entrar en tu cuenta
                </Link>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/40 text-sm font-semibold"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  WhatsApp con gestor
                </a>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <MenuCard title="Servicios">
                {SERVICIO_LINKS.map((item) => (
                  <MenuLink key={item.href} {...item} onNavigate={close} />
                ))}
              </MenuCard>

              <MenuCard title="Información">
                {INFO_LINKS.map((item) => (
                  <MenuLink key={item.href} {...item} onNavigate={close} />
                ))}
              </MenuCard>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
