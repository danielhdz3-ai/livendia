import { ContratoAlquilerTemporadaLocalSeoLanding } from "@/components/contrato-alquiler-temporada-local-seo-landing";
import {
  CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE,
  getContratoAlquilerTemporadaLocalCity,
  getPublishedContratoAlquilerTemporadaLocalCities,
  isContratoAlquilerTemporadaLocalSlugPublished,
  toContratoAlquilerTemporadaLandingConfig,
} from "@/lib/contrato-alquiler-temporada-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedContratoAlquilerTemporadaLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isContratoAlquilerTemporadaLocalSlugPublished(slug)) {
    return {};
  }
  const city = getContratoAlquilerTemporadaLocalCity(slug);
  if (!city) {
    return {};
  }

  const canonical = `${getSiteUrl()}${CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE}/${slug}`;
  const title =
    slug === "mallorca"
      ? `Contrato alquiler por temporada Mallorca — 120 € | Livendia`
      : `Contrato alquiler por temporada en ${city.city} — 120 € | Livendia`;
  const description =
    slug === "mallorca"
      ? `Contrato de alquiler por temporada en Mallorca y Palma desde 120 € IVA incl. Estancias estacionales, desplazamiento laboral o segunda residencia. Redacción gestor + inventario. Livendia.`
      : `Contrato de alquiler por temporada en ${city.city} desde 120 € IVA incl. Redacción profesional, inventario y asesoramiento hasta la firma. Livendia.`;

  return {
    title,
    description,
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

export default async function ContratoAlquilerTemporadaLocalCiudadPage({ params }: Props) {
  const { slug } = await params;
  if (!isContratoAlquilerTemporadaLocalSlugPublished(slug)) {
    notFound();
  }
  const city = getContratoAlquilerTemporadaLocalCity(slug);
  if (!city) {
    notFound();
  }

  return (
    <ContratoAlquilerTemporadaLocalSeoLanding config={toContratoAlquilerTemporadaLandingConfig(city)} />
  );
}
