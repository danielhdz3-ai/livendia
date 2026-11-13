import { ContratoAlquilerLocalSeoLanding } from "@/components/contrato-alquiler-local-seo-landing";
import {
  CONTRATO_ALQUILER_LOCAL_BASE,
  getContratoAlquilerLocalCity,
  getPublishedContratoAlquilerLocalCities,
  isContratoAlquilerLocalSlugPublished,
  toLandingConfig,
} from "@/lib/contrato-alquiler-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

/** Estático hasta el siguiente deploy (evita ISR Reads/Writes en Hobby). */
export const revalidate = false;

export function generateStaticParams() {
  return getPublishedContratoAlquilerLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isContratoAlquilerLocalSlugPublished(slug)) {
    return {};
  }
  const city = getContratoAlquilerLocalCity(slug);
  if (!city) {
    return {};
  }

  const config = toLandingConfig(city);
  const canonical = `${getSiteUrl()}${CONTRATO_ALQUILER_LOCAL_BASE}/${slug}`;
  const title =
    config.metaTitle ?? `Contrato de alquiler en ${city.city} por expertos | Revisión LAU`;
  const description =
    config.metaDescription ??
    `¿Quieres redactar un contrato de alquiler por expertos en ${city.city}? Revisión LAU, inventario del piso y asesoramiento hasta la firma. Livendia, gestoría inmobiliaria digital.`;

  return {
    title,
    description,
    ...(config.keywords?.length ? { keywords: [...config.keywords] } : {}),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: "es_ES",
      type: "website",
    },
  };
}

export default async function ContratoAlquilerLocalCiudadPage({ params }: Props) {
  const { slug } = await params;
  if (!isContratoAlquilerLocalSlugPublished(slug)) {
    notFound();
  }
  const city = getContratoAlquilerLocalCity(slug);
  if (!city) {
    notFound();
  }

  return <ContratoAlquilerLocalSeoLanding config={toLandingConfig(city)} />;
}
