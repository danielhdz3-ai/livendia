import { PackComercialSeoLanding } from "@/components/pack-comercial-seo-landing";
import { getPublicServices } from "@/lib/catalog";
import { PACK_ARRAS_GESTION_VENDEDOR_SLUGS } from "@/lib/catalog.public";
import {
  isPackArrasGestionLocalSlugPublished,
  getPublishedPackArrasGestionLocalSlugs,
  toPackArrasGestionLocalConfig,
} from "@/lib/pack-comercial-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const revalidate = 300;

export function generateStaticParams() {
  return getPublishedPackArrasGestionLocalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isPackArrasGestionLocalSlugPublished(slug)) return {};
  const config = toPackArrasGestionLocalConfig(slug);
  if (!config) return {};

  const canonical = `${getSiteUrl()}${config.path}`;
  return {
    title: config.metaTitle,
    description: config.metaDescription,
    keywords: [...config.keywords],
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: canonical,
      locale: "es_ES",
      type: "website",
      images: [{ url: config.heroImage, alt: config.heroImageAlt }],
    },
  };
}

export default async function PackArrasGestionLocalPage({ params }: Props) {
  const { slug } = await params;
  if (!isPackArrasGestionLocalSlugPublished(slug)) notFound();
  const config = toPackArrasGestionLocalConfig(slug);
  if (!config) notFound();

  const services = await getPublicServices();
  const servicesBySlug = Object.fromEntries(
    PACK_ARRAS_GESTION_VENDEDOR_SLUGS.map((s) => {
      const svc = services.find((x) => x.slug === s);
      return svc ? [s, svc] : null;
    }).filter(Boolean) as [string, (typeof services)[number]][],
  );

  return <PackComercialSeoLanding config={config} servicesBySlug={servicesBySlug} />;
}
