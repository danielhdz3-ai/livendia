import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { getLocalCityCardImage } from "@/lib/local-city-card-images";
import {
  localGestoriaInmobiliariaHref,
  isGestoriaInmobiliariaLocalSlugPublished,
} from "@/lib/gestoria-inmobiliaria-local-cities";
import { localAdministracionAlquilerHref, isAdministracionAlquilerLocalSlugPublished } from "@/lib/administracion-alquiler-local-cities";
import {
  localVenderPisoSinAgenciaHref,
  isVenderPisoSinAgenciaSlugPublished,
} from "@/lib/vender-piso-sin-agencia-local-cities";
import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";

const PRIORITY = [
  { slug: "barcelona", city: "Barcelona", blurb: "Zona tensionada, venta sin comisiones y gestión LAU." },
  { slug: "valencia", city: "Valencia", blurb: "Alta rotación de alquiler y venta entre particulares." },
  { slug: "madrid", city: "Madrid", blurb: "Compraventa capital y administración sin llamadas del inquilino." },
] as const;

export function HomeGestoriaCitiesPremiumSection() {
  const cities = PRIORITY.filter((c) => isGestoriaInmobiliariaLocalSlugPublished(c.slug));

  return (
    <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6 lg:py-20" aria-labelledby="home-gestoria-cities">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Gestoría sin comisiones abusivas</p>
            <h2 id="home-gestoria-cities" className="mt-2 text-2xl font-extrabold text-[#1E293B] sm:text-4xl">
              Gestoría inmobiliaria en las ciudades que más buscan
            </h2>
            <p className="mt-4 text-lg text-[#64748b]">
              Compraventa desde {SERVICIO_COMPLETO_CV_PRICE_LABEL}, contratos y gestión de alquiler con gestor dedicado y panel online.
            </p>
          </div>
          <Link
            href="/gestoria"
            className="inline-flex items-center gap-2 self-start rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#1E40AF] lg:self-auto"
          >
            Ver todas las ciudades
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <ul className="mt-12 grid gap-8 lg:grid-cols-3">
          {cities.map((entry) => {
            const venta = isVenderPisoSinAgenciaSlugPublished(entry.slug)
              ? localVenderPisoSinAgenciaHref(entry.slug)
              : null;
            const admin = isAdministracionAlquilerLocalSlugPublished(entry.slug)
              ? localAdministracionAlquilerHref(entry.slug)
              : null;

            return (
              <li key={entry.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-[#F8FAFC] shadow-xl ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl hover:ring-[#1A4FBF]/40">
                  <div className="relative h-48 sm:h-56">
                    <Image
                      src={getLocalCityCardImage(entry.slug)}
                      alt={`Gestoría inmobiliaria en ${entry.city}`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                        <MapPin className="h-3.5 w-3.5" aria-hidden />
                        Gestoría local
                      </p>
                      <p className="text-2xl font-bold text-white">{entry.city}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-sm leading-relaxed text-[#64748b]">{entry.blurb}</p>
                    <CityQuickLinks
                      gestoria={localGestoriaInmobiliariaHref(entry.slug)}
                      venta={venta}
                      admin={admin}
                      city={entry.city}
                    />
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function CityQuickLinks({
  gestoria,
  venta,
  admin,
  city,
}: {
  gestoria: string;
  venta: string | null;
  admin: string | null;
  city: string;
}) {
  return (
    <div className="mt-6 flex flex-1 flex-col gap-2">
      <Link href={gestoria} className="rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#1A4FBF] ring-1 ring-slate-200 transition hover:ring-[#1A4FBF]/50">
        Gestoría en {city} →
      </Link>
      {venta ? (
        <Link href={venta} className="rounded-xl px-4 py-3 text-sm font-semibold text-[#475569] ring-1 ring-slate-200 transition hover:bg-white hover:text-[#1A4FBF]">
          Vender sin comisiones
        </Link>
      ) : null}
      {admin ? (
        <Link href={admin} className="rounded-xl px-4 py-3 text-sm font-semibold text-[#475569] ring-1 ring-slate-200 transition hover:bg-white hover:text-[#1A4FBF]">
          Gestión de alquiler
        </Link>
      ) : null}
    </div>
  );
}