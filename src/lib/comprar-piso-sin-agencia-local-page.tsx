import { ComprarPisoSinAgenciaLocalSeoLanding } from "@/components/comprar-piso-sin-agencia-local-seo-landing";
import {
  getComprarPisoSinAgenciaLandingConfig,
  isComprarPisoSinAgenciaSlugPublished,
  localComprarPisoSinAgenciaHref,
} from "@/lib/comprar-piso-sin-agencia-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function comprarPisoSinAgenciaLocalPageMetadata(slug: string): Metadata {
  if (!isComprarPisoSinAgenciaSlugPublished(slug)) {
    return { title: "No encontrado" };
  }
  const config = getComprarPisoSinAgenciaLandingConfig(slug);
  if (!config) {
    return { title: "No encontrado" };
  }
  const canonical = `${getSiteUrl()}${localComprarPisoSinAgenciaHref(slug)}`;
  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: { canonical },
    keywords: [...config.keywords],
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: canonical,
      locale: "es_ES",
      type: "website",
      images: [
        {
          url: "/images/gestoria3.jpg",
          alt: config.copy?.imageAlt ?? `Comprar piso sin agencia en ${config.city} con Livendia`,
        },
      ],
    },
  };
}

export function ComprarPisoSinAgenciaLocalPage({ slug }: { slug: string }) {
  if (!isComprarPisoSinAgenciaSlugPublished(slug)) {
    notFound();
  }
  const config = getComprarPisoSinAgenciaLandingConfig(slug);
  if (!config) {
    notFound();
  }
  return <ComprarPisoSinAgenciaLocalSeoLanding config={config} />;
}
