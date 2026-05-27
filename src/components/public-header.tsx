import Link from "next/link";
import { NavServicesDropdown } from "@/components/nav-services-dropdown";
import { PublicHeaderMobileMenu } from "@/components/public-header-mobile-menu";

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#1A4FBF] text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-white hover:text-cyan-200 sm:text-2xl">
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
            className="inline-flex min-h-11 items-center rounded-full bg-[#06B6D4] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#67E8F9] hover:text-[#1e293b] sm:px-4"
            title="Acceder al área de cliente"
          >
            Acceder
          </Link>
        </div>
      </div>
    </header>
  );
}
