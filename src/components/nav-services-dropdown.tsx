"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SERVICE_LANDING_NAV_GROUPS } from "@/lib/service-landing-nav-links";

export function NavServicesDropdown() {
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
      >
        Servicios
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open ? (
        <div
          className="absolute left-1/2 top-full z-[60] mt-3 max-h-[min(70vh,28rem)] min-w-[min(320px,calc(100vw-2rem))] -translate-x-1/2 overflow-y-auto rounded-xl border border-slate-200 bg-white py-2 shadow-xl md:left-0 md:translate-x-0"
          role="menu"
        >
          {SERVICE_LANDING_NAV_GROUPS.map((group, groupIndex) => (
            <div key={group.title}>
              {groupIndex > 0 ? <div className="my-1 border-t border-slate-100" aria-hidden /> : null}
              <p className="px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {group.title}
              </p>
              {group.links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className="block px-5 py-2.5 text-sm font-medium text-[#1E293B] hover:bg-slate-50 hover:text-[#1A4FBF]"
                  onClick={() => setOpen(false)}
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
              className="block px-5 py-3 text-sm font-semibold text-[#1A4FBF] hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              Ver catálogo completo
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
