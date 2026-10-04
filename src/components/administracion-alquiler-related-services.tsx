import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
  ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL,
  SERVICIO_ALQUILER_INTEGRAL_PATH,
  SERVICIO_ALQUILER_INTEGRAL_PRICE_LABEL,
} from "@/lib/catalog.public";

type Variant = "lau" | "temporada";

const cards = {
  lau: [
    {
      title: "Admin. temporada / habitaciones",
      description:
        "Si alquilas por habitaciones o estancias cortas: entradas, salidas, rotación y servicio técnico con más frecuencia.",
      href: "/servicios/administracion-alquiler-temporada",
      price: ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL,
    },
    {
      title: "Alquiler integral (captación)",
      description: "¿Aún no tienes inquilino? Búsqueda, solvencia, contrato y llaves antes de la administración mensual.",
      href: SERVICIO_ALQUILER_INTEGRAL_PATH,
      price: `desde ${SERVICIO_ALQUILER_INTEGRAL_PRICE_LABEL}`,
    },
  ],
  temporada: [
    {
      title: "Administración LAU (larga duración)",
      description: "Un inquilino estable en vivienda habitual: mismo panel, cuota más baja y gestión del día a día.",
      href: "/servicios/administracion-alquiler",
      price: ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
    },
    {
      title: "Alquiler integral (captación)",
      description: "Te buscamos inquilino, pasamos solvencia y firmamos antes de que entres en administración.",
      href: SERVICIO_ALQUILER_INTEGRAL_PATH,
      price: `desde ${SERVICIO_ALQUILER_INTEGRAL_PRICE_LABEL}`,
    },
  ],
} as const;

export function AdministracionAlquilerRelatedServices({ variant }: { variant: Variant }) {
  const items = cards[variant];
  return (
    <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">Servicios relacionados</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[#64748b]">
          Elige la administración que encaja con tu tipo de alquiler o empieza por la captación de inquilino.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 transition hover:border-[#1A4FBF]/40 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#1A4FBF]">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#475569]">{item.description}</p>
              <p className="mt-4 text-sm font-semibold text-[#1A4FBF]">{item.price} · IVA incl.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1A4FBF]">
                Ver servicio
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
