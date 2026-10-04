import {
  ADMINISTRACION_ALQUILER_RENT_MONITORING_TITLE,
  ADMINISTRACION_ALQUILER_RENT_NOT_GUARANTEED_NOTE,
  ADMINISTRACION_ALQUILER_TEMPORADA_RENT_BULLETS,
  ADMINISTRACION_ALQUILER_TEMPORADA_RENT_PAYMENT_EXPLAINER,
} from "@/lib/administracion-alquiler-rent-copy";
import { CheckCircle, Landmark } from "lucide-react";

type Props = {
  /** Título H2 opcional (landings locales suelen personalizar la ciudad). */
  heading?: string;
};

export function AdministracionAlquilerTemporadaRentSection({ heading }: Props) {
  return (
    <section
      className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6"
      aria-labelledby="temporada-rent-payment-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EFF6FF]">
            <Landmark className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
          </div>
          <div>
            <h2 id="temporada-rent-payment-heading" className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
              {heading ?? "Cómo se paga la renta (temporada y habitaciones)"}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#475569]">
              {ADMINISTRACION_ALQUILER_TEMPORADA_RENT_PAYMENT_EXPLAINER}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
              {ADMINISTRACION_ALQUILER_RENT_NOT_GUARANTEED_NOTE}
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200 sm:p-8">
          <h3 className="text-lg font-bold text-[#1E293B]">{ADMINISTRACION_ALQUILER_RENT_MONITORING_TITLE}</h3>
          <ul className="mt-4 space-y-3">
            {ADMINISTRACION_ALQUILER_TEMPORADA_RENT_BULLETS.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed text-[#475569] sm:text-base">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
