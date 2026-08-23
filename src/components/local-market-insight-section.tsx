import type { LocalCityContextSectionProps } from "@/lib/local-city-landing-fields";

export type { LocalCityContextSectionProps };

/** Sección editorial: mercado, €/m², barrios y servicio Livendia en la ciudad. */
export function LocalCityContextSection({
  city,
  heading,
  insight,
  priceSnapshot,
  neighborhoods,
  serviceNotes,
  serviceNotesHeading,
}: LocalCityContextSectionProps) {
  const hasPrices =
    priceSnapshot &&
    (priceSnapshot.rentalAvgPerSqm ||
      priceSnapshot.saleAvgPerSqm ||
      priceSnapshot.avgSalePrice);

  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
          {heading ?? `Mercado inmobiliario en ${city}`}
        </h2>

        {hasPrices ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {priceSnapshot.rentalAvgPerSqm ? (
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#64748b]">Alquiler</p>
                <p className="mt-1 text-xl font-bold text-[#1A4FBF]">{priceSnapshot.rentalAvgPerSqm}</p>
                {priceSnapshot.rentalRangePerSqm ? (
                  <p className="mt-1 text-sm text-[#475569]">Por barrio: {priceSnapshot.rentalRangePerSqm}</p>
                ) : null}
              </div>
            ) : null}
            {priceSnapshot.saleAvgPerSqm ? (
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#64748b]">Venta</p>
                <p className="mt-1 text-xl font-bold text-[#1A4FBF]">{priceSnapshot.saleAvgPerSqm}</p>
                {priceSnapshot.saleRangePerSqm ? (
                  <p className="mt-1 text-sm text-[#475569]">Rango: {priceSnapshot.saleRangePerSqm}</p>
                ) : null}
              </div>
            ) : null}
            {priceSnapshot.avgSalePrice ? (
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:col-span-2 lg:col-span-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#64748b]">Precio medio vivienda</p>
                <p className="mt-1 text-xl font-bold text-[#1A4FBF]">{priceSnapshot.avgSalePrice}</p>
              </div>
            ) : null}
          </div>
        ) : null}

        {priceSnapshot?.sourceNote ? (
          <p className="mt-4 text-center text-xs text-[#94a3b8]">{priceSnapshot.sourceNote}</p>
        ) : null}

        {insight ? (
          <p className="mt-8 text-lg leading-relaxed text-[#475569]">{insight}</p>
        ) : null}

        {neighborhoods && neighborhoods.length > 0 ? (
          <div className="mt-12">
            <h3 className="text-center text-xl font-bold text-[#1E293B] sm:text-2xl">
              Barrios de {city} donde trabajamos
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {neighborhoods.map((n) => (
                <article
                  key={n.name}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-lg font-bold text-[#1E293B]">{n.name}</h4>
                    <span className="text-sm font-medium text-[#1A4FBF]">
                      {n.rentalPerSqm ? `${n.rentalPerSqm} alquiler` : null}
                      {n.rentalPerSqm && n.salePerSqm ? " · " : null}
                      {n.salePerSqm ? `${n.salePerSqm} venta` : null}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569] sm:text-base">{n.note}</p>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {serviceNotes && serviceNotes.length > 0 ? (
          <div className="mt-12">
            <h3 className="text-center text-xl font-bold text-[#1E293B] sm:text-2xl">
              {serviceNotesHeading ?? `Cómo te ayuda Livendia en ${city}`}
            </h3>
            <ul className="mt-8 space-y-4">
              {serviceNotes.map((note) => (
                <li
                  key={note.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="font-semibold text-[#1E293B]">{note.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569] sm:text-base">{note.body}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}

/** @deprecated Usar LocalCityContextSection */
export function LocalMarketInsightSection(props: {
  city: string;
  heading?: string;
  insight: string;
}) {
  return (
    <LocalCityContextSection
      city={props.city}
      heading={props.heading}
      insight={props.insight}
    />
  );
}
