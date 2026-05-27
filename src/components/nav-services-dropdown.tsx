"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SERVICIO_LINKS = [
  { href: "/servicios/administracion-alquiler", label: "Administración de alquiler" },
  { href: "/servicios/servicio-completo-compra", label: "Acompañamiento de compra" },
  { href: "/servicios/contrato-de-arras", label: "Contrato de arras" },
  { href: "/servicios/revision-documental-post-arras", label: "Revisión documental post-arras" },
  { href: "/servicios/contrato-de-alquiler", label: "Contrato de alquiler" },
] as const;

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
          className="absolute left-1/2 top-full z-[60] mt-3 min-w-[min(280px,calc(100vw-2rem))] -translate-x-1/2 rounded-xl border border-slate-200 bg-white py-2 shadow-xl md:left-0 md:translate-x-0"
          role="menu"
        >
          {SERVICIO_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className="block px-5 py-3 text-sm font-medium text-[#1E293B] hover:bg-slate-50 hover:text-[#1A4FBF]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
