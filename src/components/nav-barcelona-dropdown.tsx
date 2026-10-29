"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BARCELONA_REGIONAL_HUB_DOORS, BARCELONA_PACK_COMPRADOR_HUB_LINK } from "@/lib/barcelona-regional-hub";
import { cityHubHref } from "@/lib/ciudades-hub";

const EXTRA_LINKS = [
  { href: cityHubHref("barcelona"), label: "Hub Barcelona (ciudades)" },
  BARCELONA_PACK_COMPRADOR_HUB_LINK,
  { href: "/gestoria/les-corts", label: "Gestoría Les Corts" },
] as const;

export function NavBarcelonaDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
    <div ref={ref} className="relative">
      <button
        type="button"
        className="-m-2 flex items-center gap-1 rounded-lg px-2 py-2 text-sm font-medium text-white hover:text-cyan-300 aria-expanded:bg-white/10"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        title="Servicios y despacho en Barcelona"
      >
        Barcelona
        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>

      {open ? (
        <div
          className="absolute left-1/2 top-full z-[60] mt-2 w-[min(100vw-2rem,22rem)] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl ring-1 ring-slate-100"
          role="menu"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-[#64748b]">Sede Les Corts · AMB</p>
          <ul className="mt-3 space-y-1">
            {BARCELONA_REGIONAL_HUB_DOORS.map((door) => (
              <li key={door.id}>
                <Link
                  href={door.href}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#1E293B] hover:bg-[#EFF6FF] hover:text-[#1A4FBF]"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                >
                  {door.title}
                </Link>
              </li>
            ))}
            {EXTRA_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm text-[#475569] hover:bg-slate-50 hover:text-[#1A4FBF]"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
