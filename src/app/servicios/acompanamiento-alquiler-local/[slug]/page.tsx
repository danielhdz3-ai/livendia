import { AcompanamientoAlquilerLocalSeoLanding } from "@/components/acompanamiento-alquiler-local-seo-landing";
import {
  ACOMPANAMIENTO_ALQUILER_LOCAL_BASE,
  getAcompanamientoAlquilerLocalCity,
  getPublishedAcompanamientoAlquilerLocalCities,
  isAcompanamientoAlquilerLocalSlugPublished,
  toAcompanamientoAlquilerLandingConfig,
} from "@/lib/acompanamiento-alquiler-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const revalidate = 300;

export function generateStaticParams() {
  return getPublishedAcompanamientoAlquilerLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isAcompanamientoAlquilerLocalSlugPublished(slug)) return {};
  const city = getAcompanamientoAlquilerLocalCity(slug);
  if (!city) return {};

  const canonical = `${getSiteUrl()}${ACOMPANAMIENTO_ALQUILER_LOCAL_BASE}/${slug}`;
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: canonical,
      locale: "es_ES",
      type: "website",
      images: [{ url: city.heroImage, alt: city.heroImageAlt }],
    },
  };
}

export default async function AcompanamientoAlquilerLocalCiudadPage({ params }: Props) {
  const { slug } = await params;
  if (!isAcompanamientoAlquilerLocalSlugPublished(slug)) notFound();
  const city = getAcompanamientoAlquilerLocalCity(slug);
  if (!city) notFound();

  return <AcompanamientoAlquilerLocalSeoLanding config={toAcompanamientoAlquilerLandingConfig(city)} />;
}
