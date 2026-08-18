import type { MetroLandingEnrichment } from "@/lib/administracion-alquiler-metro-enrichment";
import { MapPin, TrendingUp, Users, Scale, Lightbulb } from "lucide-react";

export function MetroLocalMarketSection({
  zoneLabel,
  enrichment,
}: {
  zoneLabel: string;
  enrichment: MetroLandingEnrichment;
}) {
  return (
    <>
      <section
        className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6"
        aria-labelledby="mercado-local-heading"
      >
        <div className="mx-auto max-w-4xl">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EFF6FF]">
              <TrendingUp className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
            </div>
            <div>
              <h2 id="mercado-local-heading" className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Mercado del alquiler en {zoneLabel}
              </h2>
              <p className="mt-2 text-sm text-[#64748b]">
                Datos de oferta pública — {enrichment.rentPriceSourceNote}
              </p>
            </div>
          </div>

          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-sm font-bold uppercase tracking-wide text-[#1A4FBF]">Precio de referencia</dt>
              <dd className="mt-1 leading-relaxed text-[#475569]">{enrichment.rentPricePerSqm}</dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-wide text-[#1A4FBF]">Tipología predominante</dt>
              <dd className="mt-1 leading-relaxed text-[#475569]">{enrichment.dominantHousingType}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#1A4FBF]">
                <Users className="h-4 w-4" aria-hidden />
                Perfil habitual del inquilino
              </dt>
              <dd className="mt-2">
                <ul className="list-inside list-disc space-y-1 text-[#475569]">
                  {enrichment.tenantProfile.map((profile) => (
                    <li key={profile}>{profile}</li>
                  ))}
                </ul>
              </dd>
            </div>
            {enrichment.localRegulatoryNote ? (
              <div>
                <dt className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#1A4FBF]">
                  <Scale className="h-4 w-4" aria-hidden />
                  Matiz normativo local
                </dt>
                <dd className="mt-1 leading-relaxed text-[#475569]">{enrichment.localRegulatoryNote}</dd>
              </div>
            ) : null}
          </dl>

          <p className="mt-8 text-lg leading-relaxed text-[#475569]">{enrichment.marketContext}</p>

          <div className="mt-8">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#64748b]">
              <MapPin className="h-4 w-4" aria-hidden />
              Referencias geográficas
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {enrichment.nearbyLandmarks.map((landmark) => (
                <li
                  key={landmark}
                  className="rounded-full bg-[#F8FAFC] px-3 py-1.5 text-sm font-medium text-[#1E293B] ring-1 ring-slate-200"
                >
                  {landmark}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-14 sm:px-6"
        aria-labelledby="ejemplos-operativos-heading"
      >
        <div className="mx-auto max-w-4xl">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100">
              <Lightbulb className="h-6 w-6 text-amber-800" aria-hidden />
            </div>
            <div>
              <h2 id="ejemplos-operativos-heading" className="text-2xl font-bold text-[#1E293B] sm:text-3xl">
                Cómo actuaría Livendia en {zoneLabel}
              </h2>
              <p className="mt-2 text-sm text-[#64748b]">
                Ejemplos ilustrativos de tipos de incidencia — no son testimonios ni casos reales verificados.
              </p>
            </div>
          </div>
          <ol className="mt-8 space-y-6">
            {enrichment.operationalCases.map((item, idx) => (
              <li key={item.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <p className="text-xs font-bold uppercase tracking-wide text-amber-800">
                  Ejemplo {idx + 1} · Ilustrativo
                </p>
                <h3 className="mt-2 text-lg font-bold text-[#1E293B]">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-[#475569]">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
