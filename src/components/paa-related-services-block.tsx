import Link from "next/link";
import { MultiServicePurchaseProvider } from "@/components/service-purchase-provider";
import { ServiceShowcaseSection } from "@/components/service-showcase-section";
import type { BlogCategory } from "@/lib/blog-types";
import type { PublicService } from "@/lib/catalog.public";
import { buildNationalGestoriaServiceShowcases } from "@/lib/gestoria-city-vertical-hub-enrichment";
import { enrichShowcasesForPaa } from "@/lib/paa-showcase-enrichment";
import { getPaaRelatedServiceKeys, getPaaServiceCatalogCopy } from "@/lib/paa-related-services";

type PaaRelatedServicesBlockProps = {
  slug: string;
  category: BlogCategory;
  servicesBySlug: Partial<Record<string, PublicService>>;
};

function PaaRelatedServicesInner({
  slug,
  category,
  servicesBySlug,
}: PaaRelatedServicesBlockProps) {
  const keys = getPaaRelatedServiceKeys(slug, category);
  const showcases = enrichShowcasesForPaa(buildNationalGestoriaServiceShowcases(keys));
  const copy = getPaaServiceCatalogCopy(category);

  if (showcases.length === 0) return null;

  const locationLabel = "España";

  return (
    <section
      className="border-t border-slate-200 bg-[#EFF3F9] px-4 py-14 sm:px-6"
      aria-labelledby="paa-servicios-title"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#1A4FBF]">
          {copy.eyebrow}
        </p>
        <h2
          id="paa-servicios-title"
          className="mt-3 text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl"
        >
          {copy.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-[#64748b]">{copy.subtitle}</p>

        <nav className="mt-10 flex flex-wrap justify-center gap-2" aria-label="Servicios relacionados">
          {showcases.map((svc) => (
            <a
              key={svc.key}
              href={`#servicio-${svc.key}`}
              className="rounded-full border-2 border-[#1A4FBF]/40 bg-white px-4 py-2 text-sm font-semibold text-[#1A4FBF] shadow-sm transition hover:bg-blue-50"
            >
              {svc.cardTitle}
            </a>
          ))}
        </nav>

        <div className="mt-8">
          {showcases.map((showcase, index) => (
            <ServiceShowcaseSection
              key={showcase.key}
              showcase={showcase}
              locationLabel={locationLabel}
              index={index}
              variant="paa"
              contratarEnabled={Boolean(
                showcase.contratarSlug && servicesBySlug[showcase.contratarSlug],
              )}
              primaryLinkLabel="Ver landing del servicio"
            />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[#64748b]">
          Landings locales con el mismo apartado por ciudad en{" "}
          <Link href="/gestoria" className="font-semibold text-[#1A4FBF] hover:underline">
            gestoría Livendia
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

export function PaaRelatedServicesBlock(props: PaaRelatedServicesBlockProps) {
  const slugs = props.servicesBySlug;
  const hasContratar = Object.keys(slugs).length > 0;

  if (!hasContratar) {
    return <PaaRelatedServicesInner {...props} servicesBySlug={{}} />;
  }

  return (
    <MultiServicePurchaseProvider servicesBySlug={slugs}>
      <PaaRelatedServicesInner {...props} />
    </MultiServicePurchaseProvider>
  );
}
