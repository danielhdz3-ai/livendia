import Image from "next/image";
import Link from "next/link";
import {
  CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL,
} from "@/lib/catalog.public";
import { CIUDADES_HUB_BASE, cityHubHref } from "@/lib/ciudades-hub";
import { CITY_HUB_TAGLINES } from "@/lib/ciudades-hub";
import { HOME_COVERAGE_CITIES, HOME_CITY_CARD_IMAGES } from "@/lib/home-coverage-cities";

const SERVICIOS_PARTICULARES = [
  {
    href: "/servicios/contrato-alquiler-habitacion/barcelona",
    title: "Contrato de habitación",
    price: CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
    note: "Piso compartido · gestor por teléfono",
    image: "/images/contratos6.jpg",
    imageAlt: "Contrato de alquiler de habitación",
  },
  {
    href: "/servicios/contrato-arras-local/barcelona",
    title: "Contrato de arras",
    price: CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
    note: "Penitenciales o confirmatorias",
    image: "/images/contratodearras.jpg",
    imageAlt: "Contrato de arras penitenciales",
  },
  {
    href: "/servicios/vender-piso-sin-agencia-barcelona",
    title: "Vender sin agencia",
    price: "890 €",
    note: "Venta entre particulares",
    image: "/images/servicio-completo-venta-hero.jpg",
    imageAlt: "Venta de piso entre particulares",
  },
  {
    href: "/servicios/servicio-completo-venta-local/barcelona",
    title: "Venta completa Barcelona",
    price: "890 €",
    note: "Hasta escritura y notaría",
    image: "/images/barcelona2.jpg",
    imageAlt: "Servicio completo de venta en Barcelona",
  },
  {
    href: "/servicios/contrato-de-alquiler",
    title: "Contrato LAU",
    price: CONTRATO_ALQUILER_LAU_PRICE_LABEL,
    note: "Piso completo",
    image: "/images/contratodealquiler.jpg",
    imageAlt: "Contrato de alquiler LAU",
  },
  {
    href: "/servicios/revision-documental-post-arras",
    title: "Revisión post-arras",
    price: REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL,
    note: "Compradores particulares",
    image: "/images/gestoria20.jpg",
    imageAlt: "Revisión documental post-arras",
  },
  {
    href: "/para-propietarios",
    title: "Administración alquiler",
    price: "49 €/mes",
    note: "Sin permanencia",
    image: "/images/GESTORIA9.jpg",
    imageAlt: "Administración de alquileres",
  },
  {
    href: "/precios",
    title: "Contratar",
    price: "IVA incl.",
    note: "Todas las tarifas",
    image: "/images/contratos5.jpg",
    imageAlt: "Contratos inmobiliarios Livendia",
  },
  {
    href: "/blog/particular-alquila-habitacion-guia-contrato-2026",
    title: "Guía habitación 2026",
    price: "Blog",
    note: "Para propietarios e inquilinos",
    image: "/images/contratos7.jpg",
    imageAlt: "Guía contrato de habitación",
  },
] as const;

/**
 * Enlaces internos desde la home hacia servicios de gestoría para particulares (SEO + conversión).
 */
export function HomeParticularesServicios() {
  return (
    <section className="border-b border-slate-200 bg-[#F8FAFC] py-12 sm:py-16" aria-labelledby="particulares-servicios">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="particulares-servicios" className="text-2xl font-bold text-[#1E293B] sm:text-3xl">
            Gestoría inmobiliaria para particulares
          </h2>
          <p className="mt-3 text-[#475569]">
            Sin agencia de por medio: contratos, venta entre particulares y administración de alquiler con gestor
            asignado. Precio cerrado y llamada antes de contratar.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICIOS_PARTICULARES.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-[#1A4FBF] hover:shadow-md"
              >
                <div className="relative h-36 overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/40 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <span className="font-bold text-[#1E293B] group-hover:text-[#1A4FBF]">{item.title}</span>
                  <span className="mt-1 text-lg font-extrabold text-[#1A4FBF]">{item.price}</span>
                  <span className="mt-2 text-sm text-[#64748b]">{item.note}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#1A4FBF]">Servicios por ciudad</p>
            <p className="mx-auto mt-2 max-w-xl text-sm text-[#475569]">
              Arras, habitación, venta sin agencia y área metropolitana de Barcelona — con precio cerrado y gestor por
              teléfono.
            </p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {HOME_COVERAGE_CITIES.map((city) => (
              <li key={city.slug}>
                <Link
                  href={cityHubHref(city.slug)}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-[#1A4FBF] hover:shadow-md"
                >
                  <div className="relative h-24 overflow-hidden bg-slate-100">
                    <Image
                      src={HOME_CITY_CARD_IMAGES[city.slug]}
                      alt={`Gestoría inmobiliaria en ${city.name}`}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A6B]/55 via-[#0F2A6B]/10 to-transparent" />
                    <span className="absolute bottom-2 left-3 text-sm font-bold text-white drop-shadow">
                      {city.name}
                    </span>
                  </div>
                  <p className="line-clamp-2 flex-1 p-3 text-xs leading-snug text-[#64748b]">
                    {CITY_HUB_TAGLINES[city.slug]}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-center">
            <Link href={CIUDADES_HUB_BASE} className="text-sm font-semibold text-[#1A4FBF] hover:underline">
              Ver índice completo de ciudades →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
