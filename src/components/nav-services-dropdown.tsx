"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SERVICE_LANDING_NAV_GROUPS } from "@/lib/service-landing-nav-links";

function NavGroupColumn({
  title,
  subtitle,
  links,
  onNavigate,
}: {
  title: string;
  subtitle: string;
  links: readonly { href: string; label: string }[];
  onNavigate: () => void;
}) {
  return (
    <div className="min-w-0">
      <p className="text-[11px] font-bold uppercase tracking-wider text-[#1A4FBF]">{title}</p>
      <p className="mt-0.5 text-xs leading-snug text-slate-500">{subtitle}</p>
      <ul className="mt-3 space-y-0.5">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              role="menuitem"
              className="block rounded-lg px-2 py-2 text-sm font-medium leading-snug text-[#1E293B] transition hover:bg-[#EFF6FF] hover:text-[#1A4FBF]"
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NavServicesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const close = () => setOpen(false);
  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  };

  useEffect(() => {
    function handlePointerDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (!open) return;
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);

  useEffect(() => {
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (!open) return;
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => {
        if (typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches) {
          openMenu();
        }
      }}
      onMouseLeave={() => {
        if (typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches) {
          scheduleClose();
        }
      }}
    >
      <button
        type="button"
        className="-m-2 flex items-center gap-1 rounded-lg px-2 py-2 text-sm font-medium text-white hover:text-cyan-300 aria-expanded:bg-white/10"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
      >
        Servicios
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open ? (
        <>
          {/* Panel móvil / tablet: lista vertical compacta */}
          <div
            className="absolute left-1/2 top-full z-[60] mt-3 max-h-[min(70vh,28rem)] w-[min(340px,calc(100vw-2rem))] -translate-x-1/2 overflow-y-auto rounded-xl border border-slate-200 bg-white py-2 shadow-xl lg:hidden"
            role="menu"
          >
            {SERVICE_LANDING_NAV_GROUPS.map((group, groupIndex) => (
              <div key={group.title}>
                {groupIndex > 0 ? <div className="my-1 border-t border-slate-100" aria-hidden /> : null}
                <p className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-[#1A4FBF]">
                  {group.title}
                </p>
                <p className="px-4 pb-1 text-xs text-slate-500">{group.subtitle}</p>
                {group.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className="block px-4 py-2.5 text-sm font-medium text-[#1E293B] hover:bg-slate-50 hover:text-[#1A4FBF]"
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="mt-1 border-t border-slate-100 pt-1">
              <Link
                href="/servicios"
                role="menuitem"
                className="block px-4 py-3 text-sm font-semibold text-[#1A4FBF] hover:bg-slate-50"
                onClick={close}
              >
                Ver catálogo completo
              </Link>
              <Link
                href="/precios"
                role="menuitem"
                className="block px-4 py-3 text-sm font-semibold text-[#1A4FBF] hover:bg-slate-50"
                onClick={close}
              >
                Contratar con precios
              </Link>
            </div>
          </div>

          {/* Mega-menú horizontal — PC (lg+) */}
          <div
            className="fixed inset-x-0 top-14 z-[60] hidden px-4 pt-1 lg:block sm:top-16"
            role="menu"
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
          >
            <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-100">
              <div className="grid grid-cols-4 gap-0 divide-x divide-slate-100 px-2 py-5">
                {SERVICE_LANDING_NAV_GROUPS.map((group) => (
                  <div key={group.title} className="px-4">
                    <NavGroupColumn
                      title={group.title}
                      subtitle={group.subtitle}
                      links={group.links}
                      onNavigate={close}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-slate-50 px-5 py-3">
                <p className="text-xs text-slate-500">
                  Gestoría inmobiliaria online · IVA incluido · Contrata al momento
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/para-propietarios"
                    role="menuitem"
                    className="text-sm font-semibold text-[#475569] hover:text-[#1A4FBF]"
                    onClick={close}
                  >
                    Para propietarios
                  </Link>
                  <Link
                    href="/servicios"
                    role="menuitem"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#1A4FBF] hover:underline"
                    onClick={close}
                  >
                    Ver catálogo completo
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link
                    href="/precios"
                    role="menuitem"
                    className="inline-flex min-h-9 items-center rounded-full bg-[#1A4FBF] px-4 text-sm font-semibold text-white hover:bg-[#2563EB]"
                    onClick={close}
                  >
                    Contratar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
