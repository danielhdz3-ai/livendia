import { AdministracionAlquilerLocalCityLinks } from "@/components/administracion-alquiler-local-city-links";
import { ContratoAlquilerTemporadaLocalCityLinks } from "@/components/contrato-alquiler-temporada-local-city-links";
import { ContratoAlquilerHabitacionLocalCityLinks } from "@/components/contrato-alquiler-habitacion-local-city-links";
import { ContratoAlquilerLocalCityLinks } from "@/components/contrato-alquiler-local-city-links";
import { ContratoArrasLocalCityLinks } from "@/components/contrato-arras-local-city-links";
import { GestoriaInmobiliariaLocalCityLinks } from "@/components/gestoria-inmobiliaria-local-city-links";
import { ServicioCompletoCompraLocalCityLinks } from "@/components/servicio-completo-compra-local-city-links";
import { GestionDocumentalVendedorLocalCityLinks } from "@/components/gestion-documental-vendedor-local-city-links";
import { RevisionDocumentalPostArrasLocalCityLinks } from "@/components/revision-documental-post-arras-local-city-links";
import { VentaParticularesLocalCityLinks } from "@/components/venta-particulares-local-city-links";

/**
 * Enlaces a landings locales: viven en el blog, no en Servicios (estructura comercial limpia).
 */
export function BlogLocalCitiesSection() {
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
          Contenido local con precios fijos: compraventa,{" "}
          <strong className="font-semibold text-[#1E293B]">revisión comprador post-arras</strong> y{" "}
          <strong className="font-semibold text-[#1E293B]">gestión vendedor post-arras</strong>, contratos LAU,{" "}
          <strong className="font-semibold text-[#1E293B]">alquiler por temporada</strong> y administración de
          alquileres adaptados a cada mercado. Las páginas de contratación siguen en{" "}
          <a href="/servicios" className="font-semibold text-[#1A4FBF] hover:underline">
            Servicios
          </a>
          ; aquí encontrarás el detalle territorial.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <GestoriaInmobiliariaLocalCityLinks />
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <ContratoAlquilerLocalCityLinks />
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
            <ContratoAlquilerTemporadaLocalCityLinks />
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <ServicioCompletoCompraLocalCityLinks />
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <RevisionDocumentalPostArrasLocalCityLinks />
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
            <GestionDocumentalVendedorLocalCityLinks />
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200 sm:col-span-2 lg:col-span-1">
            <VentaParticularesLocalCityLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
