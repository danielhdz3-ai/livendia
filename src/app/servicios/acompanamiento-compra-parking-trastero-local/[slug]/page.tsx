import { AcompanamientoCompraParkingTrasteroLocalSeoLanding } from "@/components/acompanamiento-compra-parking-trastero-local-seo-landing";
import {
  getParkingTrasteroLocalCity,
  getPublishedParkingTrasteroLocalCities,
  isParkingTrasteroLocalSlugPublished,
  localAcompanamientoCompraParkingTrasteroHref,
  toParkingTrasteroLandingConfig,
} from "@/lib/acompanamiento-compra-parking-trastero-local-cities";
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
  return getPublishedParkingTrasteroLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isParkingTrasteroLocalSlugPublished(slug)) {
    return {};
  }
  const city = getParkingTrasteroLocalCity(slug);
  if (!city) {
    return {};
  }

  const config = toParkingTrasteroLandingConfig(city);
  const canonical = `${getSiteUrl()}${localAcompanamientoCompraParkingTrasteroHref(slug)}`;
  const title =
    config.metaTitle ?? `Comprar parking o trastero en ${city.city} | Gestor Livendia 298 €`;
  const description =
    config.metaDescription ??
    `Gestor integral para comprar plaza o trastero en ${city.city}. 298 € IVA incl. Notaría, ITP y registro.`;

  return {
    title,
    description,
    keywords: config.keywords ? [...config.keywords] : undefined,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: "es_ES",
      type: "website",
    },
  };
}

export default async function AcompanamientoCompraParkingTrasteroLocalPage({ params }: Props) {
  const { slug } = await params;
  if (!isParkingTrasteroLocalSlugPublished(slug)) {
    notFound();
  }
  const city = getParkingTrasteroLocalCity(slug);
  if (!city) {
    notFound();
  }

  return <AcompanamientoCompraParkingTrasteroLocalSeoLanding config={toParkingTrasteroLandingConfig(city)} />;
}
