import { ServicioCompletoVentaLocalSeoLanding } from "@/components/servicio-completo-venta-local-seo-landing";
import {
  SERVICIO_COMPLETO_VENTA_LOCAL_BASE,
  getServicioCompletoVentaLocalCity,
  getPublishedServicioCompletoVentaLocalCities,
  isServicioCompletoVentaLocalSlugPublished,
  toVentaCompletaLandingConfig,
} from "@/lib/servicio-completo-venta-local-cities";
import { VENDER_PISO_SIN_AGENCIA_MADRID_PATH } from "@/lib/vender-piso-sin-agencia-madrid-seo";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedServicioCompletoVentaLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isServicioCompletoVentaLocalSlugPublished(slug)) {
    return {};
  }
  const city = getServicioCompletoVentaLocalCity(slug);
  if (!city) {
    return {};
  }

  const canonical = `${getSiteUrl()}${SERVICIO_COMPLETO_VENTA_LOCAL_BASE}/${slug}`;
  const isMadrid = slug === "madrid";
  const title = isMadrid
    ? "Vender piso en Madrid sin agencia | Gestor inmobiliario Livendia"
    : `Vender piso en ${city.city} sin agencia | Gestor inmobiliario Livendia`;
  const description = isMadrid
    ? "Vende en Madrid entre particulares si ya tienes comprador: trámites, reserva, arras y escritura. 890 € IVA incl. Sin comisiones del 3–5 %."
    : `Vende en ${city.city} entre particulares con gestor especializado en la venta: reserva, arras, documentación y escritura. 890 € IVA incl. Sin comisiones del 3–5 %.`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `Venta con gestor en ${city.city} | Livendia`,
      description,
      url: canonical,
      locale: "es_ES",
      type: "website",
      images: [{ url: "/images/servicio-completo-venta-hero.jpg", alt: `Vender piso en ${city.city} con Livendia` }],
    },
  };
}

export default async function ServicioCompletoVentaLocalCiudadPage({ params }: Props) {
  const { slug } = await params;
  if (!isServicioCompletoVentaLocalSlugPublished(slug)) {
    notFound();
  }
  const city = getServicioCompletoVentaLocalCity(slug);
  if (!city) {
    notFound();
  }

  return <ServicioCompletoVentaLocalSeoLanding config={toVentaCompletaLandingConfig(city)} />;
}
