import { GestionDocumentalVendedorLocalSeoLanding } from "@/components/gestion-documental-vendedor-local-seo-landing";
import {
  getGestionDocumentalVendedorLocalCity,
  getPublishedGestionDocumentalVendedorLocalCities,
  isGestionDocumentalVendedorLocalSlugPublished,
  localGestionDocumentalVendedorHref,
  toGestionVendedorLandingConfig,
} from "@/lib/gestion-documental-vendedor-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedGestionDocumentalVendedorLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isGestionDocumentalVendedorLocalSlugPublished(slug)) {
    return {};
  }
  const city = getGestionDocumentalVendedorLocalCity(slug);
  if (!city) {
    return {};
  }

  const config = toGestionVendedorLandingConfig(city);
  const canonical = `${getSiteUrl()}${localGestionDocumentalVendedorHref(slug)}`;
  const title = config.metaTitle ?? `Gestor documental vendedor en ${city.city} | Livendia`;
  const description =
    config.metaDescription ??
    `Gestor documental para vendedor en ${city.city}: de arras a escritura. 350 € IVA incl.`;
  const ogImage = config.heroImage ?? "/images/gestoria20.jpg";

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
      images: [{ url: ogImage, alt: `Gestor documental vendedor en ${city.city} — Livendia` }],
    },
  };
}

export default async function GestionDocumentalVendedorLocalPage({ params }: Props) {
  const { slug } = await params;
  if (!isGestionDocumentalVendedorLocalSlugPublished(slug)) {
    notFound();
  }
  const city = getGestionDocumentalVendedorLocalCity(slug);
  if (!city) {
    notFound();
  }

  return <GestionDocumentalVendedorLocalSeoLanding config={toGestionVendedorLandingConfig(city)} />;
}
