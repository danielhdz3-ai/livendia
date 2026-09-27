import { ComprarPisoSinAgenciaLocalSeoLanding } from "@/components/comprar-piso-sin-agencia-local-seo-landing";
import type { ComprarPisoSinAgenciaBcnMetroSlug } from "@/lib/comprar-piso-sin-agencia-bcn-metro-cities";
import {
  getComprarPisoSinAgenciaLandingConfig,
  localComprarPisoSinAgenciaHref,
} from "@/lib/comprar-piso-sin-agencia-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

export function comprarPisoMetroPageMetadata(slug: ComprarPisoSinAgenciaBcnMetroSlug): Metadata {
  const config = getComprarPisoSinAgenciaLandingConfig(slug)!;
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

export function ComprarPisoMetroPage({ slug }: { slug: ComprarPisoSinAgenciaBcnMetroSlug }) {
  const config = getComprarPisoSinAgenciaLandingConfig(slug)!;
  return <ComprarPisoSinAgenciaLocalSeoLanding config={config} />;
}
