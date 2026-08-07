import { ContratoEntreParticularesLocalSeoLanding } from "@/components/contrato-entre-particulares-local-seo-landing";
import {
  CONTRATO_ENTRE_PARTICULARES_LOCAL_BASE,
  getContratoEntreParticularesLocalCity,
  getPublishedContratoEntreParticularesLocalCities,
  isContratoEntreParticularesLocalSlugPublished,
  toContratoEntreParticularesLandingConfig,
} from "@/lib/contrato-entre-particulares-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const revalidate = 300;

export function generateStaticParams() {
  return getPublishedContratoEntreParticularesLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isContratoEntreParticularesLocalSlugPublished(slug)) return {};
  const city = getContratoEntreParticularesLocalCity(slug);
  if (!city) return {};

  const canonical = `${getSiteUrl()}${CONTRATO_ENTRE_PARTICULARES_LOCAL_BASE}/${slug}`;
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: [...city.keywords],
    alternates: { canonical },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: canonical,
      locale: "es_ES",
      type: "website",
      images: [{ url: "/images/contratos.jpg", alt: `Contratos entre particulares en ${city.city}` }],
    },
  };
}

export default async function ContratoEntreParticularesLocalCiudadPage({ params }: Props) {
  const { slug } = await params;
  if (!isContratoEntreParticularesLocalSlugPublished(slug)) notFound();
  const city = getContratoEntreParticularesLocalCity(slug);
  if (!city) notFound();

  return <ContratoEntreParticularesLocalSeoLanding config={toContratoEntreParticularesLandingConfig(city)} />;
}
