import Link from "next/link";
import {
  CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL,
} from "@/lib/catalog.public";

const SERVICIOS_PARTICULARES = [
  {
    href: "/servicios/contrato-alquiler-habitacion/barcelona",
    title: "Contrato de habitación",
    price: CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
    note: "Piso compartido · gestor por teléfono",
  },
  {
    href: "/servicios/contrato-arras-local/barcelona",
    title: "Contrato de arras",
    price: CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
    note: "Penitenciales o confirmatorias",
  },
  {
    href: "/servicios/vender-piso-sin-agencia-barcelona",
    title: "Vender sin agencia",
    price: "890 €",
    note: "Venta entre particulares",
  },
  {
    href: "/servicios/contrato-de-alquiler",
    title: "Contrato LAU",
    price: CONTRATO_ALQUILER_LAU_PRICE_LABEL,
    note: "Piso completo",
  },
  {
    href: "/servicios/revision-documental-post-arras",
    title: "Revisión post-arras",
    price: REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL,
    note: "Compradores particulares",
  },
  {
    href: "/para-propietarios",
    title: "Administración alquiler",
    price: "49 €/mes",
    note: "Sin permanencia",
  },
  {
    href: "/precios",
    title: "Todos los precios",
    price: "IVA incl.",
    note: "Tarifas cerradas",
  },
  {
    href: "/blog/particular-alquila-habitacion-guia-contrato-2026",
    title: "Guía habitación 2026",
    price: "Blog",
    note: "Para propietarios e inquilinos",
  },
] as const;

const CIUDADES_HABITACION = [
  { name: "Barcelona", href: "/servicios/contrato-alquiler-habitacion/barcelona" },
  { name: "Madrid", href: "/servicios/contrato-alquiler-habitacion/madrid" },
  { name: "Valencia", href: "/servicios/contrato-alquiler-habitacion/valencia" },
  { name: "Málaga", href: "/servicios/contrato-alquiler-habitacion/malaga" },
  { name: "Sevilla", href: "/servicios/contrato-alquiler-habitacion/sevilla" },
  { name: "Bilbao", href: "/servicios/contrato-alquiler-habitacion/bilbao" },
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
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#1A4FBF] hover:shadow-md"
              >
                <span className="font-bold text-[#1E293B]">{item.title}</span>
                <span className="mt-1 text-lg font-extrabold text-[#1A4FBF]">{item.price}</span>
                <span className="mt-2 text-sm text-[#64748b]">{item.note}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#1A4FBF]">
            Servicios más buscados por ciudad
          </p>
          <p className="mt-2 text-sm text-[#475569]">
            Landings locales con precio cerrado, gestor por teléfono y contratación online.
          </p>
          <nav aria-label="Servicios locales destacados" className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/servicios/administracion-alquiler-local/valencia"
              className="rounded-full bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1E3A8A]"
            >
              Gestión alquileres Valencia — 49 €/mes
            </Link>
            <Link
              href="/servicios/vender-piso-sin-agencia-barcelona"
              className="rounded-full bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1E3A8A]"
            >
              Vender sin comisiones Barcelona — 890 €
            </Link>
            <Link
              href="/servicios/contrato-alquiler-habitacion/barcelona"
              className="rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              Contrato habitación Barcelona
            </Link>
          </nav>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#1A4FBF]">
            Contrato de arras — área metropolitana de Barcelona
          </p>
          <p className="mt-2 text-sm text-[#475569]">
            Gestor asignado a tu caso · CCCat: arras (621-4 a 621-9) y financiación (621-49) · arras justas sin perder la señal.
          </p>
          <nav aria-label="Contrato arras área metropolitana Barcelona" className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/servicios/contrato-arras-local/barcelona"
              className="rounded-full bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1E3A8A]"
            >
              Barcelona
            </Link>
            <Link
              href="/servicios/contrato-arras-local/hospitalet-de-llobregat"
              className="rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              L&apos;Hospitalet
            </Link>
            <Link
              href="/servicios/contrato-arras-local/cornella-de-llobregat"
              className="rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              Cornellà
            </Link>
            <Link
              href="/servicios/contrato-arras-local/badalona"
              className="rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              Badalona
            </Link>
            <Link
              href="/servicios/contrato-arras-local/sant-cugat-del-valles"
              className="rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              Sant Cugat
            </Link>
            <Link
              href="/servicios/contrato-arras-local/sabadell"
              className="rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              Sabadell
            </Link>
            <Link
              href="/servicios/contrato-arras-local/terrassa"
              className="rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              Terrassa
            </Link>
          </nav>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#1A4FBF]">
            Venta entre particulares — ya tienes comprador
          </p>
          <p className="mt-2 text-sm text-[#475569]">
            Gestor inmobiliario Livendia: arras, documentación y notaría. Sin comisión de agencia · 890 € IVA incl.
          </p>
          <nav aria-label="Venta piso particular sin agencia área metropolitana" className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/servicios/vender-piso-sin-agencia-barcelona"
              className="rounded-full bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1E3A8A]"
            >
              Barcelona
            </Link>
            <Link
              href="/servicios/venta-piso-particular-sin-agencia/hospitalet-de-llobregat"
              className="rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              L&apos;Hospitalet
            </Link>
            <Link
              href="/servicios/venta-piso-particular-sin-agencia/cornella-de-llobregat"
              className="rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              Cornellà
            </Link>
            <Link
              href="/servicios/venta-piso-particular-sin-agencia/esplugues-de-llobregat"
              className="rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              Esplugues
            </Link>
            <Link
              href="/servicios/venta-piso-particular-sin-agencia/sabadell"
              className="rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              Sabadell
            </Link>
            <Link
              href="/servicios/venta-piso-particular-sin-agencia/terrassa"
              className="rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              Terrassa
            </Link>
          </nav>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#1A4FBF]">
            Contrato habitación — área metropolitana de Barcelona
          </p>
          <p className="mt-2 text-sm text-[#475569]">
            ¿Necesitas un contrato de alquiler de habitación? Gestor especializado te ayuda y asesora por teléfono
            antes de firmar.
          </p>
          <nav aria-label="Contrato habitación área metropolitana Barcelona" className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/servicios/contrato-alquiler-habitacion/barcelona"
              className="rounded-full bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1E3A8A]"
            >
              Barcelona
            </Link>
            <Link
              href="/servicios/contrato-alquiler-habitacion/hospitalet-de-llobregat"
              className="rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              L&apos;Hospitalet
            </Link>
            <Link
              href="/servicios/contrato-alquiler-habitacion/cornella-de-llobregat"
              className="rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              Cornellà
            </Link>
            <Link
              href="/servicios/contrato-alquiler-habitacion/sabadell"
              className="rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              Sabadell
            </Link>
            <Link
              href="/servicios/contrato-alquiler-habitacion/terrassa"
              className="rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
            >
              Terrassa
            </Link>
          </nav>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#1A4FBF]">
            Contrato de habitación por ciudad
          </p>
          <p className="mt-2 text-sm text-[#475569]">
            Landings locales con barrios, casos típicos de piso compartido y asesoramiento del gestor.
          </p>
          <nav aria-label="Contrato habitación por ciudad" className="mt-4 flex flex-wrap gap-2">
            {CIUDADES_HABITACION.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
              >
                {c.name}
              </Link>
            ))}
            <Link
              href="/servicios/contrato-alquiler-habitacion"
              className="rounded-full px-4 py-2 text-sm font-semibold text-[#64748b] hover:text-[#1A4FBF] hover:underline"
            >
              Servicio nacional →
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
