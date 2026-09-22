import Link from "next/link";
import {
  ADMINISTRACION_ALQUILER_ONLINE_ONLY_CONTENT,
  getAdministracionAlquilerOnlineOnlyHeading,
  getAdministracionAlquilerOnlineOnlyLead,
} from "@/lib/administracion-alquiler-online-only-content";
import { ADMINISTRACION_ALQUILER_METRO_BASE } from "@/lib/administracion-alquiler-metro-landings";
import { ADMINISTRACION_ALQUILER_LOCAL_BASE } from "@/lib/administracion-alquiler-local-cities";
import { ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL } from "@/lib/catalog.public";
import { CheckCircle, Laptop, MapPin, Shield } from "lucide-react";

type Props = {
  /** Ciudad de la landing local; omitir en página nacional. */
  cityLabel?: string;
};

/**
 * Módulo fuera de Barcelona: servicio 100% online, perfil propietario con inquilino,
 * sin actuaciones presenciales de Livendia en otras provincias.
 */
export function AdministracionAlquilerOnlineOnlySection({ cityLabel }: Props) {
  const copy = ADMINISTRACION_ALQUILER_ONLINE_ONLY_CONTENT;
  const placeSuffix = cityLabel ? ` · ${cityLabel}` : "";

  return (
    <section
      className="border-b border-slate-200 bg-gradient-to-b from-[#F8FAFC] to-white px-4 py-16 sm:px-6"
      aria-labelledby="admin-online-only-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">
              <Laptop className="h-4 w-4" aria-hidden />
              {copy.badge}
            </div>
            <h2 id="admin-online-only-heading" className="mt-4 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
              {getAdministracionAlquilerOnlineOnlyHeading(cityLabel)}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#64748b]">
              {getAdministracionAlquilerOnlineOnlyLead(cityLabel)}
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h3 className="text-lg font-bold text-[#1E293B]">{copy.audienceTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#475569] sm:text-base">{copy.audienceIntro}</p>
              <ul className="mt-5 space-y-3">
                {copy.audienceBullets.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-[#475569] sm:text-base">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#06B6D4]" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-[#1E293B] p-6 text-white shadow-lg sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Shield className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold">{copy.remoteTitle}</h3>
                <p className="mt-1 text-sm text-slate-300">
                  {ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.{placeSuffix}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{copy.remoteIntro}</p>
            <ol className="mt-6 space-y-4">
              {copy.remoteSteps.map((step, idx) => (
                <li key={step.title} className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF] text-sm font-bold text-white">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <p className="flex items-start gap-2 text-sm leading-relaxed text-[#78350f] sm:text-base">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden />
            <span>
              <strong className="font-semibold text-[#92400e]">Alcance geográfico:</strong> {copy.boundaryNote}{" "}
              <Link href={`${ADMINISTRACION_ALQUILER_LOCAL_BASE}/barcelona`} className="font-semibold text-[#1A4FBF] hover:underline">
                Administración en Barcelona
              </Link>{" "}
              ·{" "}
              <Link href={ADMINISTRACION_ALQUILER_METRO_BASE} className="font-semibold text-[#1A4FBF] hover:underline">
                Barrios y municipios AMB
              </Link>
            </span>
          </p>
        </div>

        <p className="mt-6 text-center text-sm leading-relaxed text-[#64748b] sm:text-base">{copy.closingNote}</p>
      </div>
    </section>
  );
}
