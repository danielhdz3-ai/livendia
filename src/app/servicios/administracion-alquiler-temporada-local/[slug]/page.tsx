import { AdministracionAlquilerTemporadaLocalSeoLanding } from "@/components/administracion-alquiler-temporada-local-seo-landing";
import {
  ADMINISTRACION_ALQUILER_TEMPORADA_LOCAL_BASE,
  getAdministracionAlquilerTemporadaLocalCity,
  getPublishedAdministracionAlquilerTemporadaLocalCities,
  isAdministracionAlquilerTemporadaLocalSlugPublished,
  toAdministracionAlquilerTemporadaLandingConfig,
} from "@/lib/administracion-alquiler-temporada-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const revalidate = 300;

export function generateStaticParams() {
  return getPublishedAdministracionAlquilerTemporadaLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isAdministracionAlquilerTemporadaLocalSlugPublished(slug)) {
    return {};
  }
  const city = getAdministracionAlquilerTemporadaLocalCity(slug);
  if (!city) {
    return {};
  }

  const canonical = `${getSiteUrl()}${ADMINISTRACION_ALQUILER_TEMPORADA_LOCAL_BASE}/${slug}`;

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

export default async function AdministracionAlquilerTemporadaLocalCiudadPage({ params }: Props) {
  const { slug } = await params;
  if (!isAdministracionAlquilerTemporadaLocalSlugPublished(slug)) {
    notFound();
  }
  const city = getAdministracionAlquilerTemporadaLocalCity(slug);
  if (!city) {
    notFound();
  }

  return <AdministracionAlquilerTemporadaLocalSeoLanding config={toAdministracionAlquilerTemporadaLandingConfig(city)} />;
}
