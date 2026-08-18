"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavGroupColumn } from "@/components/nav-services-group-column";
import { ServicesNavMobileSections } from "@/components/nav-services-mobile-sections";
import { SERVICE_LANDING_NAV_GROUPS } from "@/lib/service-landing-nav-links";

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
          {/* Tablet (sm–lg): panel ancho 2×2 */}
          <div
            className="fixed inset-x-0 top-14 z-[60] max-h-[calc(100dvh-3.5rem)] overflow-y-auto px-3 pb-4 pt-2 sm:top-16 sm:px-4 lg:hidden"
            role="menu"
          >
            <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl ring-1 ring-slate-100">
              <p className="mb-3 text-sm font-semibold text-[#1E293B]">Servicios Livendia</p>
              <ServicesNavMobileSections onNavigate={close} layout="grid" />
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
