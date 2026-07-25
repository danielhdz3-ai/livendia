import Link from "next/link";
import {
  isContratoAlquilerLocalSlugPublished,
  localContratoAlquilerHref,
} from "@/lib/contrato-alquiler-local-cities";
import {
  isContratoAlquilerTemporadaLocalSlugPublished,
  localContratoAlquilerTemporadaHref,
} from "@/lib/contrato-alquiler-temporada-local-cities";
import {
  isGestoriaInmobiliariaLocalSlugPublished,
  localGestoriaInmobiliariaHref,
} from "@/lib/gestoria-inmobiliaria-local-cities";
import {
  isVenderPisoSinAgenciaSlugPublished,
  localVenderPisoSinAgenciaHref,
} from "@/lib/vender-piso-sin-agencia-local-cities";
import {
  isGestionDocumentalVendedorLocalSlugPublished,
  localGestionDocumentalVendedorHref,
} from "@/lib/gestion-documental-vendedor-local-cities";
import {
  isServicioCompletoCompraLocalSlugPublished,
  localServicioCompletoCompraHref,
} from "@/lib/servicio-completo-compra-local-cities";
import {
  isContratoArrasLocalSlugPublished,
  localContratoArrasHref,
} from "@/lib/contrato-arras-local-cities";
import {
  isContratoAlquilerHabitacionLocalSlugPublished,
  localContratoAlquilerHabitacionHref,
} from "@/lib/contrato-alquiler-habitacion-local-cities";

type RelatedItem = { href: string; label: string; description: string };

type Props = {
  slug: string;
  city: string;
};

/**
 * "Servicios relacionados en tu ciudad" para /servicios/administracion-alquiler-local/[slug].
 * Solo enlaza a landings de ciudad que existen y están publicadas para ese slug exacto —
 * nunca a una landing regional (ej. "asturias") con texto ancla de otra ciudad.
 */
export function AdministracionAlquilerLocalRelatedServices({ slug, city }: Props) {
  const candidates: RelatedItem[] = [];

  if (isContratoAlquilerLocalSlugPublished(slug)) {
    candidates.push({
      href: localContratoAlquilerHref(slug),
      label: `Contrato de alquiler LAU en ${city}`,
      description: "Redacción y revisión legal del contrato antes de firmarlo.",
    });
  }
  if (isGestoriaInmobiliariaLocalSlugPublished(slug)) {
    candidates.push({
      href: localGestoriaInmobiliariaHref(slug),
      label: `Gestoría inmobiliaria en ${city}`,
      description: "Compraventa, contratos y administración en un mismo hub.",
    });
  }
  if (isContratoAlquilerTemporadaLocalSlugPublished(slug)) {
    candidates.push({
      href: localContratoAlquilerTemporadaHref(slug),
      label: `Contrato de alquiler de temporada en ${city}`,
      description: "Para alquileres de meses concretos, fuera de la LAU de vivienda habitual.",
    });
  }
  if (isVenderPisoSinAgenciaSlugPublished(slug)) {
    candidates.push({
      href: localVenderPisoSinAgenciaHref(slug),
      label: `Vender piso sin agencia en ${city}`,
      description: "Si te planteas vender la vivienda alquilada sin pagar comisión.",
    });
  }
  if (isGestionDocumentalVendedorLocalSlugPublished(slug)) {
    candidates.push({
      href: localGestionDocumentalVendedorHref(slug),
      label: `Gestión documental para vendedores en ${city}`,
      description: "Documentación y trámites tras firmar arras de venta.",
    });
  }
  if (isServicioCompletoCompraLocalSlugPublished(slug)) {
    candidates.push({
      href: localServicioCompletoCompraHref(slug),
      label: `Acompañamiento de compra en ${city}`,
      description: "Para propietarios que amplían cartera con una nueva compra.",
    });
  }
  if (isContratoArrasLocalSlugPublished(slug)) {
    candidates.push({
      href: localContratoArrasHref(slug),
      label: `Contrato de arras en ${city}`,
      description: "Si además gestionas una compraventa en la misma ciudad.",
    });
  }
  if (isContratoAlquilerHabitacionLocalSlugPublished(slug)) {
    candidates.push({
      href: localContratoAlquilerHabitacionHref(slug),
      label: `Contrato de alquiler de habitación en ${city}`,
      description: "Si alquilas habitaciones sueltas en lugar de la vivienda completa.",
    });
  }

  const items = candidates.slice(0, 4);
  if (items.length === 0) return null;

  return (
    <section className="border-t border-slate-200 bg-slate-50 px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-xl font-bold text-[#1E293B]">Servicios relacionados en {city}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:ring-[#1A4FBF]"
            >
              <p className="font-semibold text-[#1E293B]">{item.label}</p>
              <p className="mt-1 text-sm text-[#64748b]">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
