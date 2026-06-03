import Link from "next/link";
import { Search } from "lucide-react";
import { NavServicesDropdown } from "@/components/nav-services-dropdown";
import { PublicHeaderMobileMenu } from "@/components/public-header-mobile-menu";

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 bg-[#1A4FBF] text-white shadow-md pt-[env(safe-area-inset-top,0px)]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-4 sm:h-16 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight text-white hover:text-cyan-200 sm:text-2xl"
        >
          Livendia
        </Link>
        <nav className="hidden flex-1 flex-wrap items-center justify-center gap-6 sm:flex" aria-label="Principal">
          <Link
            href="/para-propietarios"
            className="text-sm font-medium hover:text-cyan-300"
            title="Administración de alquiler para propietarios"
          >
            Propietarios
          </Link>
          <Link
            href="/servicios"
            className="text-sm font-medium hover:text-cyan-300"
            title="Servicios: contratos de alquiler, compraventa y packs"
          >
            Contratos
          </Link>
          <NavServicesDropdown />
          <Link
            href="/precios"
            className="text-sm font-medium hover:text-cyan-300"
            title="Precios de servicios de gestoría inmobiliaria"
          >
            Precios
          </Link>
          <Link
            href="/contacto"
            className="text-sm font-medium hover:text-cyan-300"
            title="Contacto y soporte — Livendia"
          >
            Contacto
          </Link>
          <Link href="/equipo" className="text-sm font-medium hover:text-cyan-300" title="Equipo y gestores Livendia">
            Equipo
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium hover:text-cyan-300"
            title="Blog de gestoría inmobiliaria y contratos"
          >
            Blog
          </Link>
        </nav>
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <PublicHeaderMobileMenu />
          <Link
            href="/login"
            className="hidden min-h-10 items-center rounded-full bg-[#06B6D4] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#67E8F9] hover:text-[#1e293b] sm:inline-flex"
            title="Acceder al área de cliente"
          >
            Acceder
          </Link>
        </div>
      </div>

      {/* Barra de búsqueda móvil — acceso rápido al catálogo */}
      <div className="border-t border-white/10 px-4 pb-2 pt-1.5 sm:hidden">
        <Link
          href="/servicios"
          className="flex min-h-10 items-center gap-3 rounded-xl bg-white/10 px-3.5 ring-1 ring-white/15 active:bg-white/15"
        >
          <Search className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
          <span className="text-sm text-blue-100">Buscar servicio o contrato…</span>
        </Link>
      </div>
    </header>
  );
}
