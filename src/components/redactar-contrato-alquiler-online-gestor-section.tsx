import Link from "next/link";
import { REDACTAR_CONTRATO_ONLINE_GESTOR } from "@/lib/redactar-contrato-alquiler-content";
import { CheckCircle, Headphones, Laptop, MessageCircle, User } from "lucide-react";

type Props = {
  city?: string;
};

export function RedactarContratoAlquilerOnlineGestorSection({ city }: Props) {
  const copy = REDACTAR_CONTRATO_ONLINE_GESTOR;
  const place = city ? ` en ${city}` : "";

  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-white to-[#F8FAFC] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">
              <Laptop className="h-4 w-4" aria-hidden />
              100% online
            </div>
            <h2 className="mt-4 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
              {copy.sectionTitle}
              {city ? ` desde ${city}` : ""}
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
          </div>

          <div className="rounded-2xl bg-[#1A4FBF] p-6 text-white shadow-lg sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <User className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold">{copy.gestorTitle}</h3>
                <p className="mt-1 text-sm text-blue-100">Gestoría inmobiliaria Livendia{place}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-blue-100">{copy.gestorIntro}</p>
            <ol className="mt-6 space-y-4">
              {copy.gestorSteps.map((step, idx) => (
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

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#1A4FBF]">
              <Headphones className="h-6 w-6" aria-hidden />
            </span>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#1E293B]">{copy.postRentalTitle}</h3>
              <p className="mt-3 leading-relaxed text-[#64748b]">{copy.postRentalBody}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/servicios/administracion-alquiler"
                  className="inline-flex items-center gap-2 rounded-full border border-[#1A4FBF] px-5 py-2.5 text-sm font-semibold text-[#1A4FBF] hover:bg-[#EFF6FF]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Administración de alquiler (49 €/mes)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
