import { RevisionContratoAlquilerLocalSeoLanding } from "@/components/revision-contrato-alquiler-local-seo-landing";
import {
  getRevisionContratoAlquilerLocalCity,
  getPublishedRevisionContratoAlquilerLocalCities,
  isRevisionContratoAlquilerLocalSlugPublished,
  REVISION_CONTRATO_ALQUILER_LOCAL_BASE,
  toRevisionContratoAlquilerLandingConfig,
} from "@/lib/revision-contrato-alquiler-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const revalidate = 300;

export function generateStaticParams() {
  return getPublishedRevisionContratoAlquilerLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isRevisionContratoAlquilerLocalSlugPublished(slug)) return {};
  const city = getRevisionContratoAlquilerLocalCity(slug);
  if (!city) return {};

  const canonical = `${getSiteUrl()}${REVISION_CONTRATO_ALQUILER_LOCAL_BASE}/${slug}`;
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

export default async function RevisionContratoAlquilerLocalCiudadPage({ params }: Props) {
  const { slug } = await params;
  if (!isRevisionContratoAlquilerLocalSlugPublished(slug)) notFound();
  const city = getRevisionContratoAlquilerLocalCity(slug);
  if (!city) notFound();

  return <RevisionContratoAlquilerLocalSeoLanding config={toRevisionContratoAlquilerLandingConfig(city)} />;
}
