import Link from "next/link";

import { HOME_COVERAGE_CITIES } from "@/lib/home-coverage-cities";
import { SITE_GENERAL_SITELINKS } from "@/lib/sitelinks";

/** Enlaces prioritarios en móvil (el resto en menú hamburguesa y /servicios). */
const MOBILE_PRIORITY_PATHS = new Set([
  "/para-propietarios",
  "/servicios/administracion-alquiler",
  "/servicios/contrato-alquiler-habitacion/madrid",
  "/servicios",
  "/precios",
  "/servicios/contrato-de-arras",
  "/contacto",
  "/blog",
]);

/**
 * Enlaces principales visibles en la home: refuerzan estructura interna para candidatos a sitelinks.
 */
export function HomeSitelinksNav() {
  const mobileLinks = SITE_GENERAL_SITELINKS.filter((item) => MOBILE_PRIORITY_PATHS.has(item.path));

  return (
    <section
      className="border-b border-slate-200 bg-[#F8FAFC] py-4 sm:py-8"
      aria-label="Acceso rápido a secciones principales"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-[#64748b]">Acceso rápido</p>

        {/* Móvil: secciones principales (candidatas a sitelinks) */}
        <nav
          className="mt-3 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 scroll-smooth snap-x snap-mandatory sm:hidden"
          aria-label="Acceso rápido móvil"
        >
          {mobileLinks.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="snap-start shrink-0 rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-[#1A4FBF] shadow-sm ring-1 ring-slate-200 transition hover:bg-blue-50 hover:ring-[#1A4FBF]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Tablet/desktop: secciones generales */}
        <nav className="mt-3 hidden flex-wrap justify-center gap-2 sm:flex sm:gap-3">
          {SITE_GENERAL_SITELINKS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1A4FBF] shadow-sm ring-1 ring-slate-200 transition hover:bg-blue-50 hover:ring-[#1A4FBF]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Ciudades prioritarias — debajo de secciones generales */}
        <nav className="mt-4" aria-label="Gestoría por ciudad">
          <p className="text-center text-xs font-semibold text-[#475569]">Madrid · Valencia · Barcelona · toda España</p>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {HOME_COVERAGE_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={city.gestoriaHref}
                className="rounded-full bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1A4FBF]"
              >
                Gestoría {city.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}
