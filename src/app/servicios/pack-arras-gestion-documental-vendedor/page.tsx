import { PackComercialSeoLanding } from "@/components/pack-comercial-seo-landing";
import { getPublicServices } from "@/lib/catalog";
import { PACK_ARRAS_GESTION_LANDING } from "@/lib/pack-comercial-landings";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

export const revalidate = 300;

const config = PACK_ARRAS_GESTION_LANDING;

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  keywords: [...config.keywords],
  alternates: { canonical: `${getSiteUrl()}${config.path}` },
  openGraph: {
    title: config.metaTitle,
    description: config.metaDescription,
    url: `${getSiteUrl()}${config.path}`,
    locale: "es_ES",
    type: "website",
  },
};

export default async function PackArrasGestionVendedorPage() {
  const services = await getPublicServices();
  const servicesBySlug = Object.fromEntries(
    config.serviceSlugs
      .map((slug) => {
        const s = services.find((x) => x.slug === slug);
        return s ? [slug, s] : null;
      })
      .filter(Boolean) as [string, (typeof services)[number]][],
  );

  return <PackComercialSeoLanding config={config} servicesBySlug={servicesBySlug} />;
}
