import Link from "next/link";
import { AdministracionAlquilerLocalCityLinks } from "@/components/administracion-alquiler-local-city-links";
import { AdministracionAlquilerMetroBlogLinks } from "@/components/administracion-alquiler-metro-blog-links";
import {
  ACOMPANAMIENTO_ALQUILER_LOCAL_BASE,
  getPublishedAcompanamientoAlquilerLocalCities,
  localAcompanamientoAlquilerHref,
} from "@/lib/acompanamiento-alquiler-local-cities";
import { AcompanamientoCompraParkingTrasteroLocalCityLinks } from "@/components/acompanamiento-compra-parking-trastero-local-city-links";
import { BlogLocalCityLinksCard } from "@/components/blog-local-city-links-card";
import { ContratoAlquilerTemporadaLocalCityLinks } from "@/components/contrato-alquiler-temporada-local-city-links";
import { ContratoAlquilerHabitacionLocalCityLinks } from "@/components/contrato-alquiler-habitacion-local-city-links";
import { ContratoAlquilerLocalCityLinks } from "@/components/contrato-alquiler-local-city-links";
import { ContratoArrasLocalCityLinks } from "@/components/contrato-arras-local-city-links";
import { GestoriaInmobiliariaLocalCityLinks } from "@/components/gestoria-inmobiliaria-local-city-links";
import { RedactarContratoAlquilerLocalCityLinks } from "@/components/redactar-contrato-alquiler-local-city-links";
import { ServicioCompletoCompraLocalCityLinks } from "@/components/servicio-completo-compra-local-city-links";
import { ServicioCompletoVentaLocalCityLinks } from "@/components/servicio-completo-venta-local-city-links";
import { GestionDocumentalVendedorLocalCityLinks } from "@/components/gestion-documental-vendedor-local-city-links";
import { RevisionDocumentalPostArrasLocalCityLinks } from "@/components/revision-documental-post-arras-local-city-links";
import { VentaParticularesLocalCityLinks } from "@/components/venta-particulares-local-city-links";
import { VenderPisoSinInmobiliariaLocalCityLinks } from "@/components/vender-piso-sin-inmobiliaria-local-city-links";
import {
  ACOMPANAMIENTO_RESERVA_ARRAS_LOCAL_BASE,
  getPublishedAcompanamientoReservaArrasLocalCities,
  localAcompanamientoReservaArrasHref,
} from "@/lib/acompanamiento-reserva-arras-local-cities";
import {
  ADMINISTRACION_ALQUILER_TEMPORADA_LOCAL_BASE,
  getPublishedAdministracionAlquilerTemporadaLocalCities,
  localAdministracionAlquilerTemporadaHref,
} from "@/lib/administracion-alquiler-temporada-local-cities";
import {
  CONTRATO_ENTRE_PARTICULARES_LOCAL_BASE,
  getPublishedContratoEntreParticularesLocalCities,
  localContratoEntreParticularesHref,
} from "@/lib/contrato-entre-particulares-local-cities";
import {
  REVISION_CONTRATO_ALQUILER_LOCAL_BASE,
  getPublishedRevisionContratoAlquilerLocalCities,
  localRevisionContratoAlquilerHref,
} from "@/lib/revision-contrato-alquiler-local-cities";

/**
 * Enlaces a landings locales: viven en el blog, no en Servicios (estructura comercial limpia).
 * Inventario de hubs: src/lib/blog-local-landing-index.ts
 */
export function BlogLocalCitiesSection() {
  const adminTemporada = getPublishedAdministracionAlquilerTemporadaLocalCities();
  const revisionContrato = getPublishedRevisionContratoAlquilerLocalCities();
  const reservaArras = getPublishedAcompanamientoReservaArrasLocalCities();
  const contratoEntreParticulares = getPublishedContratoEntreParticularesLocalCities();
  const acompanamientoAlquiler = getPublishedAcompanamientoAlquilerLocalCities();

  return (
    <section
      id="guías-por-ciudad"
      className="border-t border-slate-200 bg-white px-4 py-14 sm:px-6"
      aria-labelledby="blog-ciudades-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="blog-ciudades-heading" className="text-2xl font-bold text-[#1E293B] sm:text-3xl">
          Guías y servicios por ciudad
        </h2>
        <p className="mt-3 max-w-3xl text-[#64748b]">
          Contenido local con precios fijos:{" "}
          <strong className="font-semibold text-[#1E293B]">vender piso sin inmobiliaria</strong>, compraventa,{" "}
          <strong className="font-semibold text-[#1E293B]">revisión comprador post-arras</strong> y{" "}
          <strong className="font-semibold text-[#1E293B]">gestión vendedor post-arras</strong>, contratos LAU,{" "}
          <strong className="font-semibold text-[#1E293B]">redactar contrato entre particulares</strong>,{" "}
          <strong className="font-semibold text-[#1E293B]">alquiler por temporada</strong> y administración de
          alquileres adaptados a cada mercado. El índice por ciudad está en{" "}
          <Link href="/ciudades" className="font-semibold text-[#1A4FBF] hover:underline">
            Ciudades
          </Link>
          ; las páginas de contratación siguen en{" "}
          <Link href="/servicios" className="font-semibold text-[#1A4FBF] hover:underline">
            Servicios
          </Link>
          .
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <GestoriaInmobiliariaLocalCityLinks />
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <ContratoAlquilerLocalCityLinks />
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <RedactarContratoAlquilerLocalCityLinks />
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <ContratoAlquilerHabitacionLocalCityLinks />
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <ContratoArrasLocalCityLinks />
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <AdministracionAlquilerLocalCityLinks />
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <AdministracionAlquilerMetroBlogLinks />
          </div>
          {adminTemporada.length > 0 ? (
            <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
              <BlogLocalCityLinksCard
                title="Admin. temporada / habitaciones por ciudad"
                hubHref={ADMINISTRACION_ALQUILER_TEMPORADA_LOCAL_BASE}
                hubLinkLabel="Ver página índice →"
                ariaLabel="Administración temporada y habitaciones por ciudad"
                items={adminTemporada.map((c) => ({
                  slug: c.slug,
                  label: c.placeLabel,
                  href: localAdministracionAlquilerTemporadaHref(c.slug),
                }))}
              />
            </div>
          ) : null}
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <ContratoAlquilerTemporadaLocalCityLinks />
          </div>
          {revisionContrato.length > 0 ? (
            <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
              <BlogLocalCityLinksCard
                title="Revisión contrato de alquiler por ciudad"
                hubHref={REVISION_CONTRATO_ALQUILER_LOCAL_BASE}
                hubLinkLabel="Ver página índice →"
                ariaLabel="Revisión de contrato de alquiler por ciudad"
                items={revisionContrato.map((c) => ({
                  slug: c.slug,
                  label: c.placeLabel,
                  href: localRevisionContratoAlquilerHref(c.slug),
                }))}
              />
            </div>
          ) : null}
          {acompanamientoAlquiler.length > 0 ? (
            <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
              <BlogLocalCityLinksCard
                title="Acompañamiento de alquiler por ciudad"
                hubHref={ACOMPANAMIENTO_ALQUILER_LOCAL_BASE}
                hubLinkLabel="Ver página índice →"
                ariaLabel="Acompañamiento de alquiler por ciudad"
                items={acompanamientoAlquiler.map((c) => ({
                  slug: c.slug,
                  label: c.placeLabel,
                  href: localAcompanamientoAlquilerHref(c.slug),
                }))}
              />
            </div>
          ) : null}
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <ServicioCompletoCompraLocalCityLinks />
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <ServicioCompletoVentaLocalCityLinks />
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <RevisionDocumentalPostArrasLocalCityLinks />
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <GestionDocumentalVendedorLocalCityLinks />
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <AcompanamientoCompraParkingTrasteroLocalCityLinks />
          </div>
          {reservaArras.length > 0 ? (
            <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
              <BlogLocalCityLinksCard
                title="Acompañamiento reserva de arras por ciudad"
                hubHref={ACOMPANAMIENTO_RESERVA_ARRAS_LOCAL_BASE}
                hubLinkLabel="Ver página índice →"
                ariaLabel="Acompañamiento reserva de arras por ciudad"
                items={reservaArras.map((c) => ({
                  slug: c.slug,
                  label: c.placeLabel,
                  href: localAcompanamientoReservaArrasHref(c.slug),
                }))}
              />
            </div>
          ) : null}
          {contratoEntreParticulares.length > 0 ? (
            <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
              <BlogLocalCityLinksCard
                title="Contratos entre particulares por ciudad"
                hubHref={CONTRATO_ENTRE_PARTICULARES_LOCAL_BASE}
                hubLinkLabel="Ver página índice →"
                ariaLabel="Contratos entre particulares por ciudad"
                items={contratoEntreParticulares.map((c) => ({
                  slug: c.slug,
                  label: c.city,
                  href: localContratoEntreParticularesHref(c.slug),
                }))}
              />
            </div>
          ) : null}
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <VentaParticularesLocalCityLinks />
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200 sm:col-span-2 lg:col-span-1">
            <VenderPisoSinInmobiliariaLocalCityLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
