import Link from "next/link";
import type { HomeCoverageCity } from "@/lib/home-coverage-cities";
import {
  ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL,
  CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
} from "@/lib/catalog.public";
import {
  BARCELONA_METRO_HABITACION_CITIES,
  barcelonaMetroHabitacionHref,
} from "@/lib/contrato-alquiler-habitacion-barcelona-metro";
import {
  BARCELONA_METRO_ARRAS_CITIES,
  barcelonaMetroArrasHref,
} from "@/lib/contrato-arras-barcelona-metro";
import {
  BARCELONA_METRO_VENTA_PARTICULAR_CITIES,
  barcelonaMetroVentaParticularHref,
} from "@/lib/venta-piso-particular-barcelona-metro";
import { CITY_PILLAR_PATHS } from "@/lib/ciudades-hub";

type CityHubServicesProps = {
  city: HomeCoverageCity;
};

/** Listado completo de servicios locales por ciudad (hub /ciudades/[slug]). */
export function CityHubServices({ city }: CityHubServicesProps) {
  const pillarHref = CITY_PILLAR_PATHS[city.slug];

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100">
        <h2 className="text-lg font-bold text-[#1E293B]">Servicios en {city.name}</h2>
        <ul className="mt-4 flex flex-col gap-2 text-sm">
          <li>
            <Link href={city.gestoriaHref} className="font-semibold text-[#1A4FBF] hover:underline">
              Gestoría inmobiliaria
            </Link>
          </li>
          <li>
            <Link href={city.venderSinAgenciaHref} className="font-semibold text-[#1A4FBF] hover:underline">
              Vender sin agencia
            </Link>
          </li>
          <li>
            <Link href={city.ventaLocalHref} className="font-semibold text-[#1A4FBF] hover:underline">
              Servicio completo de venta
            </Link>
          </li>
          <li>
            <Link href={city.compraHref} className="font-semibold text-[#1A4FBF] hover:underline">
              Comprar con garantías
            </Link>
          </li>
          <li>
            <Link href={city.administracionHref} className="font-semibold text-[#1A4FBF] hover:underline">
              Administración de alquiler — 49 €/mes
            </Link>
          </li>
          {city.temporadaHref ? (
            <li>
              <Link href={city.temporadaHref} className="font-semibold text-[#1A4FBF] hover:underline">
                Contrato alquiler temporada — 200 €
              </Link>
            </li>
          ) : null}
          {city.parkingTrasteroHref ? (
            <li>
              <Link href={city.parkingTrasteroHref} className="font-semibold text-[#1A4FBF] hover:underline">
                Compra parking o trastero — {ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL}
              </Link>
            </li>
          ) : null}
          {city.habitacionHref ? (
            <li>
              <Link href={city.habitacionHref} className="font-semibold text-[#1A4FBF] hover:underline">
                Contrato alquiler habitación — {CONTRATO_ALQUILER_HABITACION_PRICE_LABEL}
              </Link>
            </li>
          ) : null}
          {city.arrasLocalHref ? (
            <li>
              <Link href={city.arrasLocalHref} className="font-semibold text-[#1A4FBF] hover:underline">
                Contrato de arras — 145 €
              </Link>
            </li>
          ) : null}
          {city.slug === "barcelona" ? (
            <li>
              <Link
                href="/servicios/vender-piso-sin-agencia-barcelona"
                className="font-semibold text-[#1A4FBF] hover:underline"
              >
                Venta particular sin agencia — 890 €
              </Link>
            </li>
          ) : null}
          {pillarHref ? (
            <li>
              <Link href={pillarHref} className="font-semibold text-[#1A4FBF] hover:underline">
                Guía: vender piso sin inmobiliaria en {city.name}
              </Link>
            </li>
          ) : null}
        </ul>
      </section>

      {city.slug === "barcelona" ? (
        <>
          <MetroSection
            title="Contrato de arras — área metropolitana"
            description="Gestor asignado · CCCat (621-4 a 621-9) y financiación (621-49) · arras justas sin perder la señal."
            cities={BARCELONA_METRO_ARRAS_CITIES.map((metro) => ({
              name: metro.shortName,
              href: barcelonaMetroArrasHref(metro.slug),
            }))}
            primaryHref="/servicios/contrato-arras-local/barcelona"
            primaryLabel="Barcelona"
          />
          <MetroSection
            title="Venta entre particulares — ya tienes comprador"
            description="Arras, documentación y notaría sin comisión de agencia · 890 € IVA incl."
            cities={BARCELONA_METRO_VENTA_PARTICULAR_CITIES.map((metro) => ({
              name: metro.shortName,
              href: barcelonaMetroVentaParticularHref(metro.slug),
            }))}
            primaryHref="/servicios/vender-piso-sin-agencia-barcelona"
            primaryLabel="Barcelona"
          />
          <MetroSection
            title="Contrato habitación — área metropolitana"
            description="Piso compartido con gestor especializado por teléfono antes de firmar."
            cities={BARCELONA_METRO_HABITACION_CITIES.map((metro) => ({
              name: metro.shortName,
              href: barcelonaMetroHabitacionHref(metro.slug),
            }))}
            primaryHref="/servicios/contrato-alquiler-habitacion/barcelona"
            primaryLabel="Barcelona"
          />
        </>
      ) : null}
    </div>
  );
}

function MetroSection({
  title,
  description,
  cities,
  primaryHref,
  primaryLabel,
}: {
  title: string;
  description: string;
  cities: { name: string; href: string }[];
  primaryHref: string;
  primaryLabel: string;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100">
      <h2 className="text-base font-bold text-[#1E293B]">{title}</h2>
      <p className="mt-2 text-sm text-[#475569]">{description}</p>
      <nav aria-label={title} className="mt-4 flex flex-wrap gap-2">
        <Link
          href={primaryHref}
          className="rounded-full bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1E3A8A]"
        >
          {primaryLabel}
        </Link>
        {cities.map((metro) => (
          <Link
            key={metro.href}
            href={metro.href}
            className="rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
          >
            {metro.name}
          </Link>
        ))}
      </nav>
    </section>
  );
}
