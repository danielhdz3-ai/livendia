import {
  ADMINISTRACION_ALQUILER_OPERATIONS_SCOPE,
  getAdministracionAlquilerOnlineScopeIntro,
  type AdministracionAlquilerOnlineScopeVariant,
} from "@/lib/administracion-alquiler-operations-scope";
import { ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL } from "@/lib/catalog.public";
import { CheckCircle, Globe } from "lucide-react";

type Props = {
  variant: AdministracionAlquilerOnlineScopeVariant;
  cityLabel?: string;
  /** id del H2 para accesibilidad / anclas */
  id?: string;
};

export function AdministracionAlquilerOperationsScopeSection({
  variant,
  cityLabel,
  id = "alcance-administracion-alquiler",
}: Props) {
  const intro = getAdministracionAlquilerOnlineScopeIntro(variant, cityLabel);

  return (
    <section
      className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6"
      aria-labelledby={id}
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EFF6FF]">
            <Globe className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
          </div>
          <div>
            <h2 id={id} className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
              {intro.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#475569]">{intro.lead}</p>
            {intro.note ? (
              <p className="mt-3 text-base leading-relaxed text-[#64748b]">{intro.note}</p>
            ) : null}
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200 sm:p-8">
          <h3 className="text-lg font-bold text-[#1E293B] sm:text-xl">
            Acciones que Livendia asume en el mismo servicio ({ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}{" "}
            IVA incl.)
          </h3>
          <p className="mt-2 text-sm text-[#64748b]">
            Un único módulo de administración: mismo panel, mismo gestor y mismo protocolo en toda España.
          </p>
          <ul className="mt-6 space-y-4">
            {ADMINISTRACION_ALQUILER_OPERATIONS_SCOPE.map((item) => (
              <li key={item.title} className="flex gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden />
                <div>
                  <p className="font-semibold text-[#1E293B]">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#475569] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
