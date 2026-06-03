import { ContratoAlquilerTemporadaLocalSeoLanding } from "@/components/contrato-alquiler-temporada-local-seo-landing";
import {
  CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE,
  getContratoAlquilerTemporadaLocalCity,
  getPublishedContratoAlquilerTemporadaLocalCities,
  isContratoAlquilerTemporadaLocalSlugPublished,
  toContratoAlquilerTemporadaLandingConfig,
} from "@/lib/contrato-alquiler-temporada-local-cities";
import { CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL } from "@/lib/catalog.public";
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

  const config = toContratoAlquilerTemporadaLandingConfig(city);
  const canonical = `${getSiteUrl()}${CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE}/${slug}`;
  const title =
    config.metaTitle ??
    (slug === "mallorca"
      ? `Contrato alquiler por temporada Mallorca — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} | Livendia`
      : `Contrato alquiler por temporada en ${city.city} — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} | Livendia`);
  const description =
    config.metaDescription ??
    (slug === "mallorca"
      ? `Contrato de alquiler por temporada en Mallorca y Palma desde ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl. Estancias estacionales, desplazamiento laboral o segunda residencia. Redacción gestor + inventario. Livendia.`
      : `Contrato de alquiler por temporada en ${city.city} desde ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl. Redacción profesional, inventario y asesoramiento hasta la firma. Livendia.`);

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
