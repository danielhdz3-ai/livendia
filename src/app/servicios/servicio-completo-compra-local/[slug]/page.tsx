import { ServicioCompletoCompraLocalSeoLanding } from "@/components/servicio-completo-compra-local-seo-landing";
import {
  SERVICIO_COMPLETO_COMPRA_LOCAL_BASE,
  getServicioCompletoCompraLocalCity,
  getPublishedServicioCompletoCompraLocalCities,
  isServicioCompletoCompraLocalSlugPublished,
  toCompraCompletaLandingConfig,
} from "@/lib/servicio-completo-compra-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedServicioCompletoCompraLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isServicioCompletoCompraLocalSlugPublished(slug)) {
    return {};
  }
  const city = getServicioCompletoCompraLocalCity(slug);
  if (!city) {
    return {};
  }

  const canonical = `${getSiteUrl()}${SERVICIO_COMPLETO_COMPRA_LOCAL_BASE}/${slug}`;
  const config = toCompraCompletaLandingConfig(city);
  const title =
    config.metaTitle ?? `Comprar con garantías en ${city.city} | Servicio completo Livendia`;
  const description =
    config.metaDescription ??
    `¿Necesitas comprar con todas las garantías en ${city.city}? Gestor inmobiliario experto: reserva, arras y escritura revisadas. Servicio completo 890 €.`;

  return {
    title,
    description,
    ...(config.keywords?.length ? { keywords: [...config.keywords] } : {}),
    alternates: { canonical },
    openGraph: {
      title: `Compra con gestor experto en ${city.city} | Livendia`,
      description,
      url: canonical,
      locale: "es_ES",
      type: "website",
    },
  };
}

export default async function ServicioCompletoCompraLocalCiudadPage({ params }: Props) {
  const { slug } = await params;
  if (!isServicioCompletoCompraLocalSlugPublished(slug)) {
    notFound();
  }
  const city = getServicioCompletoCompraLocalCity(slug);
  if (!city) {
    notFound();
  }

  return <ServicioCompletoCompraLocalSeoLanding config={toCompraCompletaLandingConfig(city)} />;
}
