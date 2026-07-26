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

/**
 * ISR: revalida cada 5 min para que los precios/estado del catalogo
 * (getPublicServices, cliente Supabase anonimo) no queden fijados hasta
 * el proximo despliegue. Cambiar este numero (segundos) si se necesita
 * otra frecuencia -- ver SEO_ROADMAP.md.
 */
export const revalidate = 300;

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

  const config = toVentaCompletaLandingConfig(city);
  const canonical = `${getSiteUrl()}${SERVICIO_COMPLETO_VENTA_LOCAL_BASE}/${slug}`;
  const title =
    config.metaTitle ?? `Vender piso en ${city.city} sin agencia | Gestor inmobiliario Livendia`;
  const description =
    config.metaDescription ??
    `Vende en ${city.city} entre particulares con gestor especializado en la venta: reserva, arras, documentación y escritura. 890 € IVA incl. Sin comisiones del 3–5 %.`;

  return {
    title,
    description,
    ...(config.keywords?.length ? { keywords: [...config.keywords] } : {}),
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
