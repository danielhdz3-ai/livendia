"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const SERVICIO_LINKS = [
  { href: "/servicios/administracion-alquiler", label: "Administración de alquiler" },
  { href: "/servicios/servicio-completo-compra", label: "Acompañamiento de compra" },
  { href: "/servicios/contrato-de-arras", label: "Contrato de arras" },
  { href: "/servicios/revision-documental-post-arras", label: "Revisión documental post-arras" },
  { href: "/servicios/contrato-de-alquiler", label: "Contrato de alquiler" },
] as const;

const MAIN_LINKS = [
  { href: "/para-propietarios", label: "Para propietarios" },
  { href: "/servicios", label: "Contratos" },
  { href: "/precios", label: "Precios" },
  { href: "/contacto", label: "Contacto" },
  { href: "/equipo", label: "Equipo" },
  { href: "/blog", label: "Blog" },
] as const;

export function PublicHeaderMobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
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

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="-mr-1 flex h-11 w-11 items-center justify-center rounded-lg text-white hover:bg-white/10"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[45] bg-black/40"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-nav-panel"
            className="fixed inset-x-0 top-16 z-[50] max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-white/10 bg-[#1A4FBF] px-4 py-4 shadow-xl"
            aria-label="Menú principal"
          >
            <ul className="space-y-1">
              {MAIN_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 px-3 text-xs font-bold uppercase tracking-wider text-cyan-200/90">Servicios</p>
            <ul className="mt-2 space-y-1">
              {SERVICIO_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-sm text-blue-50 hover:bg-white/10 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-white/15 pt-4">
              <Link
                href="/login"
                className="flex min-h-11 w-full items-center justify-center rounded-full bg-[#06B6D4] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#67E8F9] hover:text-[#1e293b]"
                onClick={() => setOpen(false)}
              >
                Acceder
              </Link>
            </div>
          </nav>
        </>
      ) : null}
    </div>
  );
}
