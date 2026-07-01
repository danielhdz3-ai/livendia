import { VentaPisoParticularSinAgenciaLocalSeoLanding } from "@/components/venta-piso-particular-sin-agencia-local-seo-landing";
import {
  getPublishedVentaPisoParticularCities,
  getVentaPisoParticularLocalCity,
  isVentaPisoParticularSlugPublished,
  localVentaPisoParticularSinAgenciaHref,
  toVentaPisoParticularLandingConfig,
} from "@/lib/venta-piso-particular-sin-agencia-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedVentaPisoParticularCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isVentaPisoParticularSlugPublished(slug)) {
    return {};
  }
  const city = getVentaPisoParticularLocalCity(slug);
  if (!city) {
    return {};
  }

  const canonical = `${getSiteUrl()}${localVentaPisoParticularSinAgenciaHref(slug)}`;

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: [...city.keywords],
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: canonical,
      locale: "es_ES",
      type: "website",
      images: [{ url: "/images/contratodealquiler.jpg", alt: city.metaTitle }],
    },
  };
}

export default async function VentaPisoParticularLocalPage({ params }: Props) {
  const { slug } = await params;
  if (!isVentaPisoParticularSlugPublished(slug)) {
    notFound();
  }
  const city = getVentaPisoParticularLocalCity(slug);
  if (!city) {
    notFound();
  }

  return <VentaPisoParticularSinAgenciaLocalSeoLanding config={toVentaPisoParticularLandingConfig(city)} />;
}
