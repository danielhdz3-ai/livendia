import Link from "next/link";
import {
  ADMINISTRACION_ALQUILER_PRESENCIAL_CONTENT,
  getAdministracionAlquilerPresencialHeading,
} from "@/lib/administracion-alquiler-presencial-content";
import { ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL } from "@/lib/catalog.public";
import { getBusinessAddressDisplayLine } from "@/lib/business-nap";
import { CheckCircle, Laptop, MapPin, User } from "lucide-react";

type Props = {
  zoneLabel: string;
  /** Enlace opcional a la landing madre Barcelona */
  parentCityHubPath?: string;
  parentCityHubLabel?: string;
};

/** Módulo Barcelona/AMB: operativa online + gestor presencial en inmueble cuando hace falta. */
export function AdministracionAlquilerPresencialSection({
  zoneLabel,
  parentCityHubPath,
  parentCityHubLabel,
}: Props) {
  const copy = ADMINISTRACION_ALQUILER_PRESENCIAL_CONTENT;

  return (
    <section
      className="border-b border-slate-200 bg-gradient-to-b from-white to-[#F8FAFC] px-4 py-16 sm:px-6"
      aria-labelledby="admin-presencial-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">
              <Laptop className="h-4 w-4" aria-hidden />
              {copy.badge}
            </div>
            <h2 id="admin-presencial-heading" className="mt-4 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
              {getAdministracionAlquilerPresencialHeading(zoneLabel)}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#64748b]">{copy.sectionIntro}</p>
            <ul className="mt-8 space-y-3">
              {copy.onlineBullets.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-[#475569] sm:text-base">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#06B6D4]" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-start gap-2 text-sm text-[#64748b]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1A4FBF]" aria-hidden />
              <span>
                Despacho Livendia: <strong className="font-semibold text-[#1E293B]">{getBusinessAddressDisplayLine()}</strong>
                {parentCityHubPath && parentCityHubLabel ? (
                  <>
                    {" "}
                    ·{" "}
                    <Link href={parentCityHubPath} className="font-semibold text-[#1A4FBF] hover:underline">
                      {parentCityHubLabel}
                    </Link>
                  </>
                ) : null}
              </span>
            </p>
          </div>

          <div className="rounded-2xl bg-[#1A4FBF] p-6 text-white shadow-lg sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <User className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold">{copy.presencialTitle}</h3>
                <p className="mt-1 text-sm text-blue-100">
                  {zoneLabel} · {ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-blue-100">{copy.presencialIntro}</p>
            <ol className="mt-6 space-y-4">
              {copy.presencialSteps.map((step, idx) => (
                <li key={step.title} className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-bold text-[#1E293B]">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-blue-100">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="mt-10 text-center text-sm leading-relaxed text-[#64748b] sm:text-base">
          {copy.closingNote}
        </p>
      </div>
    </section>
  );
}
