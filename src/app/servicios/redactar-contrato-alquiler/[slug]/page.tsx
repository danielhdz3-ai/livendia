import { RedactarContratoAlquilerLocalSeoLanding } from "@/components/redactar-contrato-alquiler-local-seo-landing";
import {
  getPublishedRedactarContratoAlquilerLocalCities,
  getRedactarContratoAlquilerLocalCity,
  isRedactarContratoAlquilerLocalSlugPublished,
  localRedactarContratoAlquilerHref,
  toRedactarContratoAlquilerLandingConfig,
} from "@/lib/redactar-contrato-alquiler-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const revalidate = 300;

export function generateStaticParams() {
  return getPublishedRedactarContratoAlquilerLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isRedactarContratoAlquilerLocalSlugPublished(slug)) {
    return {};
  }
  const city = getRedactarContratoAlquilerLocalCity(slug);
  if (!city) {
    return {};
  }

  const canonical = `${getSiteUrl()}${localRedactarContratoAlquilerHref(slug)}`;

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

export default async function RedactarContratoAlquilerLocalPage({ params }: Props) {
  const { slug } = await params;
  if (!isRedactarContratoAlquilerLocalSlugPublished(slug)) {
    notFound();
  }
  const city = getRedactarContratoAlquilerLocalCity(slug);
  if (!city) {
    notFound();
  }

  return <RedactarContratoAlquilerLocalSeoLanding config={toRedactarContratoAlquilerLandingConfig(city)} />;
}
