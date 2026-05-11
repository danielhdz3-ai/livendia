import Link from "next/link";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600000000";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#1A4FBF] text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight hover:text-cyan-200">
          Livendia
        </Link>
        <nav className="hidden flex-1 flex-wrap items-center justify-center gap-6 text-sm font-medium md:flex">
          <Link href="/servicios" className="hover:text-cyan-300">
            Servicios
          </Link>
          <Link href="/precios" className="hover:text-cyan-300">
            Precios
          </Link>
          <Link href="/contacto" className="hover:text-cyan-300">
            Contacto
          </Link>
          <Link href="/#equipo" className="hover:text-cyan-300">
            Equipo
          </Link>
          <Link href="/#confianza" className="hover:text-cyan-300">
            Confianza
          </Link>
          <Link href="/login" className="hover:text-cyan-300">
            Entrar
          </Link>
        </nav>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-[#06B6D4] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#67E8F9] hover:text-[#1e293b]"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
