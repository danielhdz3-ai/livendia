"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { SERVICE_LANDING_NAV_GROUPS } from "@/lib/service-landing-nav-links";

type Props = {
  onNavigate: () => void;
  /** Acordeón apilado (drawer móvil) vs rejilla 2×2 (tablet). */
  layout?: "accordion" | "grid";
};

function ServicesNavFooter({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="mt-3 space-y-2 border-t border-slate-100 pt-3">
      <Link
        href="/para-propietarios"
        onClick={onNavigate}
        className="flex min-h-11 items-center justify-between rounded-xl bg-[#EFF6FF] px-4 py-2.5 text-sm font-semibold text-[#1A4FBF] active:bg-blue-100"
      >
        Para propietarios
        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
      </Link>
      <div className="grid grid-cols-2 gap-2">
        <Link
          href="/servicios"
          onClick={onNavigate}
          className="flex min-h-11 items-center justify-center rounded-xl border border-slate-200 px-3 text-center text-sm font-semibold text-[#1E293B] active:bg-slate-50"
        >
          Catálogo
        </Link>
        <Link
          href="/precios"
          onClick={onNavigate}
          className="flex min-h-11 items-center justify-center rounded-xl bg-[#1A4FBF] px-3 text-center text-sm font-semibold text-white active:bg-[#2563EB]"
        >
          Contratar
        </Link>
      </div>
    </div>
  );
}

function ServiceLinksList({
  links,
  onNavigate,
}: {
  links: readonly { href: string; label: string }[];
  onNavigate: () => void;
}) {
  return (
    <ul className="divide-y divide-slate-100 border-t border-slate-100">
      {links.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            onClick={onNavigate}
            className="block px-4 py-3 text-sm font-medium text-[#1E293B] active:bg-slate-50"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Secciones Compraventa / Vendedor / Comprador / Alquiler — móvil y tablet. */
export function ServicesNavMobileSections({ onNavigate, layout = "accordion" }: Props) {
  const [openSection, setOpenSection] = useState<string | null>(SERVICE_LANDING_NAV_GROUPS[0]?.title ?? null);

  if (layout === "grid") {
    return (
      <div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {SERVICE_LANDING_NAV_GROUPS.map((group) => (
            <div
              key={group.title}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#1A4FBF]">{group.title}</p>
                <p className="mt-0.5 text-xs text-slate-500">{group.subtitle}</p>
              </div>
              <ul className="divide-y divide-slate-50">
                {group.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className="block px-4 py-2.5 text-sm font-medium text-[#1E293B] hover:bg-[#EFF6FF] hover:text-[#1A4FBF]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <ServicesNavFooter onNavigate={onNavigate} />
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {SERVICE_LANDING_NAV_GROUPS.map((group) => {
        const isOpen = openSection === group.title;
        return (
          <div key={group.title} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left active:bg-slate-50"
              aria-expanded={isOpen}
              onClick={() => setOpenSection((s) => (s === group.title ? null : group.title))}
            >
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#1A4FBF]">
                  {group.title}
                </span>
                <span className="mt-0.5 block text-xs text-[#64748B]">{group.subtitle}</span>
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {isOpen ? <ServiceLinksList links={group.links} onNavigate={onNavigate} /> : null}
          </div>
        );
      })}
      <ServicesNavFooter onNavigate={onNavigate} />
    </div>
  );
}
