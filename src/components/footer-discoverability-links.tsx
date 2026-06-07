import Link from "next/link";
import {
  ADMINISTRACION_ALQUILER_LOCAL_BASE,
  getPublishedAdministracionAlquilerLocalCities,
} from "@/lib/administracion-alquiler-local-cities";
import {
  CONTRATO_ALQUILER_LOCAL_BASE,
  getPublishedContratoAlquilerLocalCities,
} from "@/lib/contrato-alquiler-local-cities";
import {
  CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE,
  getPublishedContratoAlquilerTemporadaLocalCities,
} from "@/lib/contrato-alquiler-temporada-local-cities";
import {
  CONTRATO_ARRAS_LOCAL_BASE,
  getPublishedContratoArrasLocalCities,
} from "@/lib/contrato-arras-local-cities";
import {
  SERVICIO_COMPLETO_COMPRA_LOCAL_BASE,
  getPublishedServicioCompletoCompraLocalCities,
} from "@/lib/servicio-completo-compra-local-cities";
import {
  SERVICIO_COMPLETO_VENTA_LOCAL_BASE,
  getPublishedServicioCompletoVentaLocalCities,
} from "@/lib/servicio-completo-venta-local-cities";
import { getHomeCoverageCityFlatLinks } from "@/lib/home-coverage-cities";
import {
  getPublishedVenderPisoSinAgenciaCities,
  localVenderPisoSinAgenciaHref,
} from "@/lib/vender-piso-sin-agencia-local-cities";

const CORE_SERVICES: { href: string; label: string }[] = [
  { href: "/servicios", label: "Todos los servicios" },
  { href: "/servicios/administracion-alquiler", label: "Administración de alquiler" },
  { href: "/servicios/servicio-completo-compra", label: "Acompañamiento de compra" },
  { href: "/servicios/servicio-completo-venta", label: "Acompañamiento de venta" },
  { href: "/servicios/contrato-alquiler-habitacion", label: "Contrato alquiler habitación" },
  { href: "/servicios/contrato-alquiler-temporada-local", label: "Contrato alquiler temporada" },
  { href: "/servicios/contrato-arras-confirmatorias", label: "Arras confirmatorias" },
  { href: "/gestoria", label: "Gestoría por ciudad" },
  { href: "/blog", label: "Blog y guías" },
  { href: "/equipo", label: "Equipo" },
  { href: "/mapa-del-sitio", label: "Mapa del sitio" },
];

/** Otras ciudades de venta sin agencia (fuera del trío prioritario). */
function getExtendedVentaSinAgenciaLinks(): { href: string; label: string }[] {
  const priority = new Set(["madrid", "valencia", "barcelona"]);
  return getPublishedVenderPisoSinAgenciaCities()
    .filter((c) => !priority.has(c.slug))
    .map((c) => ({
      href: localVenderPisoSinAgenciaHref(c.slug),
      label: `Vender piso sin agencia ${c.city}`,
    }));
}

/** Enlaces a hubs y ciudades publicadas — refuerzo de rastreo (footer global). */
export function FooterDiscoverabilityLinks() {
  const alquilerLocal = getPublishedContratoAlquilerLocalCities();
  const arrasLocal = getPublishedContratoArrasLocalCities();
  const adminLocal = getPublishedAdministracionAlquilerLocalCities();
  const compraLocal = getPublishedServicioCompletoCompraLocalCities();
  const ventaLocal = getPublishedServicioCompletoVentaLocalCities();
  const temporadaLocal = getPublishedContratoAlquilerTemporadaLocalCities();
  const cityPriorityLinks = getHomeCoverageCityFlatLinks();
  const extendedVentaLinks = getExtendedVentaSinAgenciaLinks();

  return (
    <nav
      className="mt-4 border-t border-white/20 pt-4 text-xs"
      aria-label="Servicios y guías locales"
    >
      <h3 className="mb-2 font-bold uppercase tracking-wider text-cyan-300">Explora Livendia</h3>
      <ul className="flex flex-wrap gap-x-3 gap-y-1 text-blue-100">
        {CORE_SERVICES.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-3">
        <p className="font-semibold text-blue-50">Madrid, Valencia, Barcelona, Málaga y Sevilla</p>
        <ul className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-blue-100">
          {cityPriorityLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {extendedVentaLinks.length > 0 ? (
        <div className="mt-3">
          <p className="font-semibold text-blue-50">Venta sin agencia — más ciudades</p>
          <ul className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-blue-100">
            {extendedVentaLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <LocalGroup
          title="Contrato alquiler por ciudad"
          hub={`${CONTRATO_ALQUILER_LOCAL_BASE}`}
          cities={alquilerLocal.map((c) => ({ slug: c.slug, name: c.city }))}
        />
        <LocalGroup
          title="Arras por ciudad"
          hub={`${CONTRATO_ARRAS_LOCAL_BASE}`}
          cities={arrasLocal.map((c) => ({ slug: c.slug, name: c.city }))}
        />
        <LocalGroup
          title="Administración alquiler por ciudad"
          hub={`${ADMINISTRACION_ALQUILER_LOCAL_BASE}`}
          cities={adminLocal.map((c) => ({ slug: c.slug, name: c.city }))}
        />
        <LocalGroup
          title="Compra completa por ciudad"
          hub={`${SERVICIO_COMPLETO_COMPRA_LOCAL_BASE}`}
          cities={compraLocal.map((c) => ({ slug: c.slug, name: c.city }))}
        />
        <LocalGroup
          title="Venta entre particulares por ciudad"
          hub={`${SERVICIO_COMPLETO_VENTA_LOCAL_BASE}`}
          cities={ventaLocal.map((c) => ({ slug: c.slug, name: c.city }))}
        />
        <LocalGroup
          title="Contrato alquiler temporada por ciudad"
          hub={CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE}
          cities={temporadaLocal.map((c) => ({
            slug: c.slug,
            name: c.city === "Palma de Mallorca" ? "Mallorca" : c.city,
          }))}
        />
      </div>
    </nav>
  );
}

function LocalGroup({
  title,
  hub,
  cities,
}: {
  title: string;
  hub: string;
  cities: { slug: string; name: string }[];
}) {
  if (cities.length === 0) return null;
  return (
    <div>
      <p className="font-semibold text-blue-50">{title}</p>
      <p className="mt-0.5">
        <Link href={hub} className="text-cyan-200 hover:text-white hover:underline">
          Ver todas
        </Link>
      </p>
      <ul className="mt-1 flex flex-wrap gap-x-2 gap-y-0.5 text-blue-200/95">
        {cities.map((c) => (
          <li key={c.slug}>
            <Link href={`${hub}/${c.slug}`} className="hover:text-white transition-colors">
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
