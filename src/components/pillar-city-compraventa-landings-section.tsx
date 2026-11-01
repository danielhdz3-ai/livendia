import { SeoCityPrimaryLandingsForCity } from "@/components/seo-city-primary-landings-section";
import type { HomeCoverageCitySlug } from "@/lib/home-coverage-cities";
import { isSeoPrimaryLandingCitySlug } from "@/lib/seo-city-primary-landings";

type Props = {
  citySlug: string;
  cityName: string;
};

/** Bloque canónico compraventa en guías pilar (Valencia, Málaga, etc.). */
export function PillarCityCompraventaLandingsSection({ citySlug, cityName }: Props) {
  if (!isSeoPrimaryLandingCitySlug(citySlug)) return null;

  return (
    <section className="scroll-mt-24 border-b border-slate-100 py-10 sm:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SeoCityPrimaryLandingsForCity citySlug={citySlug as HomeCoverageCitySlug} cityName={cityName} />
      </div>
    </section>
  );
}
