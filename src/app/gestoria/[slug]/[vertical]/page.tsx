import { GestoriaCityVerticalHubLanding } from "@/components/gestoria-city-vertical-hub-landing";
import { getPublicServices } from "@/lib/catalog";
import type { PublicService } from "@/lib/catalog.public";
import {
  getGestoriaCityVerticalHub,
  getGestoriaCityVerticalStaticParams,
  isGestoriaCityVertical,
  type GestoriaCityVertical,
} from "@/lib/gestoria-city-vertical-hub";
import { buildGestoriaServicesCarouselSections } from "@/lib/gestoria-services-carousel-sections";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string; vertical: string }> };

export const dynamicParams = false;
/** Estático hasta el siguiente deploy (evita ISR Reads/Writes en Hobby). */
export const revalidate = false;

export function generateStaticParams() {
  return getGestoriaCityVerticalStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, vertical } = await params;
  if (!isGestoriaCityVertical(vertical)) return {};
  const config = getGestoriaCityVerticalHub(slug, vertical);
  if (!config) return {};

  const canonical = `${getSiteUrl()}${config.path}`;

  return {
    title: { absolute: config.metaTitle },
    description: config.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: canonical,
      locale: "es_ES",
      type: "website",
    },
  };
}

export default async function GestoriaCityVerticalPage({ params }: Props) {
  const { slug, vertical } = await params;
  if (!isGestoriaCityVertical(vertical)) notFound();

  const config = getGestoriaCityVerticalHub(slug, vertical);
  if (!config) notFound();

  const catalog = await getPublicServices();
  const carouselScope: GestoriaCityVertical = vertical === "alquiler" ? "alquiler" : "compraventa";
  const carouselSections = buildGestoriaServicesCarouselSections(
    slug,
    config.city,
    carouselScope,
    config.schemaAdministrativeArea,
  );
  const neededSlugs = new Set(
    config.serviceShowcases.map((s) => s.contratarSlug).filter(Boolean) as string[],
  );
  for (const section of carouselSections) {
    if (section.serviceSlug) neededSlugs.add(section.serviceSlug);
  }
  const servicesBySlug: Partial<Record<string, PublicService>> = {};
  for (const s of catalog) {
    if (neededSlugs.has(s.slug)) servicesBySlug[s.slug] = s;
  }

  return <GestoriaCityVerticalHubLanding config={config} servicesBySlug={servicesBySlug} />;
}
