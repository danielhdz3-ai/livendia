import { ContratoAlquilerOpcionCompraLocalSeoLanding } from "@/components/contrato-alquiler-opcion-compra-local-seo-landing";
import {
  CONTRATO_ALQUILER_OPCION_COMPRA_LOCAL_BASE,
  getContratoAlquilerOpcionCompraLocalCity,
  getPublishedContratoAlquilerOpcionCompraLocalCities,
  isContratoAlquilerOpcionCompraLocalSlugPublished,
  toContratoAlquilerOpcionCompraLandingConfig,
} from "@/lib/contrato-alquiler-opcion-compra-local-cities";
import { CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL } from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const revalidate = 300;

export function generateStaticParams() {
  return getPublishedContratoAlquilerOpcionCompraLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isContratoAlquilerOpcionCompraLocalSlugPublished(slug)) {
    return {};
  }
  const city = getContratoAlquilerOpcionCompraLocalCity(slug);
  if (!city) {
    return {};
  }

  const config = toContratoAlquilerOpcionCompraLandingConfig(city);
  const canonical = `${getSiteUrl()}${CONTRATO_ALQUILER_OPCION_COMPRA_LOCAL_BASE}/${slug}`;
  const title =
    config.metaTitle ??
    `Alquiler con opción a compra ${city.city} — ${CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL} IVA incl.`;
  const description =
    config.metaDescription ??
    `Contrato de alquiler con opción a compra entre particulares en ${city.city}. ${CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL} IVA incl. Gestor Livendia.`;

  return {
    title,
    description,
    ...(config.keywords?.length ? { keywords: [...config.keywords] } : {}),
    alternates: { canonical },
    openGraph: { title, description, url: canonical, locale: "es_ES", type: "website" },
  };
}

export default async function ContratoAlquilerOpcionCompraLocalCiudadPage({ params }: Props) {
  const { slug } = await params;
  if (!isContratoAlquilerOpcionCompraLocalSlugPublished(slug)) {
    notFound();
  }
  const city = getContratoAlquilerOpcionCompraLocalCity(slug);
  if (!city) {
    notFound();
  }

  return (
    <ContratoAlquilerOpcionCompraLocalSeoLanding
      config={toContratoAlquilerOpcionCompraLandingConfig(city)}
    />
  );
}
