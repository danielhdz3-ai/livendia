import Link from "next/link";
import Image from "next/image";
import {
  BARCELONA_METRO_HUB_LINKS,
  CIUDADES_LOCAL_SERVICES,
  CIUDADES_NATIONAL_SERVICES,
  CITY_HUB_IMAGES,
  CITY_HUB_TAGLINES,
  CITY_PILLAR_PATHS,
  cityHubHref,
  getLocalServiceHref,
} from "@/lib/ciudades-hub";
import { HOME_COVERAGE_CITIES } from "@/lib/home-coverage-cities";

export function CiudadesIndexContent() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[#1E293B] sm:text-3xl">Ciudades donde operamos</h2>
          <p className="mt-3 text-[#475569]">
            Landings locales con precio cerrado, gestor por teléfono y contratación online. El servicio es el mismo en
            cualquier provincia; aquí encontrarás el detalle por mercado.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_COVERAGE_CITIES.map((city) => {
            const image = CITY_HUB_IMAGES[city.slug];
            const pillarHref = CITY_PILLAR_PATHS[city.slug];
            return (
              <li key={city.slug}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:border-[#1A4FBF] hover:shadow-md">
                  <Link href={cityHubHref(city.slug)} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1152px) 33vw, 368px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/70 via-transparent to-transparent" />
                      <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{city.name}</h3>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-[#475569]">{CITY_HUB_TAGLINES[city.slug]}</p>
                      <span className="mt-4 inline-flex text-sm font-semibold text-[#1A4FBF] group-hover:underline">
                        Ver todos los servicios en {city.name} →
                      </span>
                    </div>
                  </Link>
                  {pillarHref ? (
                    <p className="border-t border-slate-100 px-5 py-3 text-xs text-[#64748b]">
                      <Link href={pillarHref} className="font-semibold text-[#1A4FBF] hover:underline">
                        Guía: vender sin inmobiliaria en {city.name}
                      </Link>
                    </p>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="border-y border-slate-200 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#1A4FBF]">Catálogo local</p>
            <h2 className="mt-2 text-2xl font-bold text-[#1E293B] sm:text-3xl">
              Todos los servicios por ciudad
            </h2>
            <p className="mt-3 text-[#475569]">
              Resumen de gestoría inmobiliaria Livendia en Madrid, Barcelona, Valencia, Málaga y Sevilla. Precios IVA
              incl. · gestor asignado · panel online.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {CIUDADES_LOCAL_SERVICES.map((service) => (
              <article
                key={service.id}
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 ring-1 ring-slate-100"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#1E293B]">{service.title}</h3>
                    <p className="mt-1 text-sm text-[#475569]">{service.description}</p>
                  </div>
                  <p className="shrink-0 text-lg font-extrabold text-[#1A4FBF]">{service.price}</p>
                </div>
                <nav
                  aria-label={`${service.title} por ciudad`}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {HOME_COVERAGE_CITIES.map((city) => {
                    const href = getLocalServiceHref(city, service.field);
                    if (!href) {
                      return (
                        <span
                          key={city.slug}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-[#94a3b8] ring-1 ring-slate-200"
                          title={`Sin landing local en ${city.name}`}
                        >
                          {city.name}
                        </span>
                      );
                    }
                    return (
                      <Link
                        key={city.slug}
                        href={href}
                        className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
                      >
                        {city.name}
                      </Link>
                    );
                  })}
                  {service.nationalHref ? (
                    <Link
                      href={service.nationalHref}
                      className="rounded-full px-3 py-1.5 text-xs font-semibold text-[#64748b] hover:text-[#1A4FBF] hover:underline"
                    >
                      Servicio nacional →
                    </Link>
                  ) : null}
                </nav>
              </article>
            ))}
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-sm">
              <caption className="sr-only">
                Matriz de servicios de gestoría inmobiliaria por ciudad
              </caption>
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th scope="col" className="px-4 py-3 font-semibold text-[#1E293B]">
                    Servicio
                  </th>
                  {HOME_COVERAGE_CITIES.map((city) => (
                    <th key={city.slug} scope="col" className="px-3 py-3 font-semibold text-[#1E293B]">
                      <Link href={cityHubHref(city.slug)} className="text-[#1A4FBF] hover:underline">
                        {city.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CIUDADES_LOCAL_SERVICES.map((service) => (
                  <tr key={service.id} className="border-b border-slate-100 last:border-0">
                    <th scope="row" className="px-4 py-3 font-medium text-[#475569]">
                      {service.title}
                    </th>
                    {HOME_COVERAGE_CITIES.map((city) => {
                      const href = getLocalServiceHref(city, service.field);
                      return (
                        <td key={city.slug} className="px-3 py-3 text-center">
                          {href ? (
                            <Link
                              href={href}
                              className="font-semibold text-[#1A4FBF] hover:underline"
                              aria-label={`${service.title} en ${city.name}`}
                            >
                              ✓
                            </Link>
                          ) : (
                            <span className="text-[#cbd5e1]" aria-hidden>
                              —
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="rounded-2xl border border-[#1A4FBF]/20 bg-gradient-to-br from-[#EFF6FF] to-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[#1E293B] sm:text-2xl">
            Área metropolitana de Barcelona
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-[#475569]">
            Además de Barcelona capital, publicamos landings para L&apos;Hospitalet, Cornellà, Badalona, Sant Cugat,
            Sabadell, Terrassa y Esplugues en contrato de arras (CCCat), venta entre particulares, alquiler de
            habitación y servicio completo de compra (Baix Llobregat, L&apos;Hospitalet, Sant Andreu barrio, Sabadell y Terrassa).
          </p>
          <nav aria-label="Servicios área metropolitana Barcelona" className="mt-4 flex flex-wrap gap-2">
            <Link
              href={cityHubHref("barcelona")}
              className="rounded-full bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1E3A8A]"
            >
              Hub Barcelona →
            </Link>
            <Link
              href={BARCELONA_METRO_HUB_LINKS.arras}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              Contrato arras metro
            </Link>
            <Link
              href={BARCELONA_METRO_HUB_LINKS.ventaParticular}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              Venta particular metro
            </Link>
            <Link
              href={BARCELONA_METRO_HUB_LINKS.habitacion}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              Habitación metro
            </Link>
          </nav>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#F8FAFC] py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#1E293B] sm:text-3xl">Servicios en toda España</h2>
            <p className="mt-3 text-[#475569]">
              Contratación online con el mismo gestor y precios cerrados, aunque tu municipio no tenga landing local
              todavía.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {CIUDADES_NATIONAL_SERVICES.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#1A4FBF] hover:shadow-md"
                >
                  <span className="font-bold text-[#1E293B]">{service.title}</span>
                  <span className="mt-1 text-lg font-extrabold text-[#1A4FBF]">{service.price}</span>
                  <span className="mt-2 text-sm text-[#64748b]">{service.description}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center">
            <Link
              href="/servicios"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1E3A8A]"
            >
              Ver catálogo completo de servicios
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="rounded-2xl bg-[#1E3A8A] px-6 py-10 text-center text-white sm:px-10">
          <h2 className="text-2xl font-bold">¿No encuentras tu ciudad?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Operamos en toda España con normativa estatal (LAU, Código Civil, CCCat en Cataluña). Escríbenos y te
            orientamos antes de contratar.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1E3A8A] hover:bg-blue-50"
            >
              Contactar con gestor
            </Link>
            <Link
              href="/precios"
              className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Ver precios
            </Link>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-[#64748b]">
          También puedes explorar{" "}
          <Link href="/gestoria" className="font-semibold text-[#1A4FBF] hover:underline">
            gestoría por ciudad
          </Link>
          , el{" "}
          <Link href="/blog#guías-por-ciudad" className="font-semibold text-[#1A4FBF] hover:underline">
            blog con guías locales
          </Link>{" "}
          o volver al{" "}
          <Link href="/" className="font-semibold text-[#1A4FBF] hover:underline">
            inicio
          </Link>
          .
        </p>
      </section>
    </>
  );
}
