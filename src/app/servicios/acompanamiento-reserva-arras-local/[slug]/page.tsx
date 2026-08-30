import { AcompanamientoReservaArrasLocalSeoLanding } from "@/components/acompanamiento-reserva-arras-local-seo-landing";
import {
  ACOMPANAMIENTO_RESERVA_ARRAS_LOCAL_BASE,
  getAcompanamientoReservaArrasLocalCity,
  getPublishedAcompanamientoReservaArrasLocalCities,
  isAcompanamientoReservaArrasLocalSlugPublished,
  toAcompanamientoReservaArrasLandingConfig,
} from "@/lib/acompanamiento-reserva-arras-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const revalidate = 300;

export function generateStaticParams() {
  return getPublishedAcompanamientoReservaArrasLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isAcompanamientoReservaArrasLocalSlugPublished(slug)) return {};
  const city = getAcompanamientoReservaArrasLocalCity(slug);
  if (!city) return {};

  const canonical = `${getSiteUrl()}${ACOMPANAMIENTO_RESERVA_ARRAS_LOCAL_BASE}/${slug}`;
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

export default async function AcompanamientoReservaArrasLocalCiudadPage({ params }: Props) {
  const { slug } = await params;
  if (!isAcompanamientoReservaArrasLocalSlugPublished(slug)) notFound();
  const city = getAcompanamientoReservaArrasLocalCity(slug);
  if (!city) notFound();

  return (
    <AcompanamientoReservaArrasLocalSeoLanding config={toAcompanamientoReservaArrasLandingConfig(city)} />
  );
}
