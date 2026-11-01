import type { CompraLocalCityEnrichment } from "@/lib/servicio-completo-compra-local-city-enrichment";

export function CompraLocalCityZonesSection({ enrichment }: { enrichment: CompraLocalCityEnrichment }) {
  return (
    <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">{enrichment.sectionTitle}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#475569]">{enrichment.marketNote}</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enrichment.zones.map((zone) => (
            <li key={zone.name} className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-4">
              <p className="font-bold text-[#1E293B]">{zone.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{zone.context}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
