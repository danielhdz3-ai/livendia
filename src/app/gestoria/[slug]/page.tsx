import { GestoriaInmobiliariaLocalSeoLanding } from "@/components/gestoria-inmobiliaria-local-seo-landing";
import {
  GESTORIA_INMOBILIARIA_LOCAL_BASE,
  getGestoriaInmobiliariaLocalCity,
  getPublishedGestoriaInmobiliariaLocalCities,
  isGestoriaInmobiliariaLocalSlugPublished,
  toGestoriaInmobiliariaLandingConfig,
} from "@/lib/gestoria-inmobiliaria-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedGestoriaInmobiliariaLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isGestoriaInmobiliariaLocalSlugPublished(slug)) {
    return {};
  }
  const city = getGestoriaInmobiliariaLocalCity(slug);
  if (!city) {
    return {};
  }

  const canonical = `${getSiteUrl()}${GESTORIA_INMOBILIARIA_LOCAL_BASE}/${slug}`;

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical },
    ...(city.keywords?.length ? { keywords: [...city.keywords] } : {}),
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: canonical,
      locale: "es_ES",
      type: "website",
    },
  };
}

export default async function GestoriaCiudadPage({ params }: Props) {
  const { slug } = await params;
  if (!isGestoriaInmobiliariaLocalSlugPublished(slug)) {
    notFound();
  }
  const city = getGestoriaInmobiliariaLocalCity(slug);
  if (!city) {
    notFound();
  }

  return <GestoriaInmobiliariaLocalSeoLanding config={toGestoriaInmobiliariaLandingConfig(city)} />;
}
