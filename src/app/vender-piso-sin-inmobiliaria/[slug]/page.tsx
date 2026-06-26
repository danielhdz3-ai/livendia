import { VenderPisoSinInmobiliariaSeoLanding } from "@/components/vender-piso-sin-inmobiliaria-seo-landing";
import { VENDER_PISO_SIN_INMOBILIARIA_HERO_IMAGE } from "@/components/vender-piso-sin-inmobiliaria-images";
import {
  getPublishedVenderPisoSinInmobiliariaCities,
  getVenderPisoSinInmobiliariaLandingConfig,
  isVenderPisoSinInmobiliariaPillarSlug,
  isVenderPisoSinInmobiliariaSlugPublished,
  localVenderPisoSinInmobiliariaHref,
  VENDER_PISO_SIN_INMOBILIARIA_BASE,
} from "@/lib/vender-piso-sin-inmobiliaria-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedVenderPisoSinInmobiliariaCities()
    .filter((c) => !isVenderPisoSinInmobiliariaPillarSlug(c.slug))
    .map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isVenderPisoSinInmobiliariaSlugPublished(slug)) {
    return {};
  }
  const config = getVenderPisoSinInmobiliariaLandingConfig(slug);
  if (!config) {
    return {};
  }

  const canonical = `${getSiteUrl()}${localVenderPisoSinInmobiliariaHref(slug)}`;

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
          url: VENDER_PISO_SIN_INMOBILIARIA_HERO_IMAGE,
          alt: config.imageAlt,
        },
      ],
    },
  };
}

export default async function VenderPisoSinInmobiliariaCiudadPage({ params }: Props) {
  const { slug } = await params;
  // Ciudades con guía pilar editorial dedicada (/barcelona, /madrid, …)
  if (isVenderPisoSinInmobiliariaPillarSlug(slug)) {
    notFound();
  }
  if (!isVenderPisoSinInmobiliariaSlugPublished(slug)) {
    notFound();
  }
  const config = getVenderPisoSinInmobiliariaLandingConfig(slug);
  if (!config) {
    notFound();
  }

  return <VenderPisoSinInmobiliariaSeoLanding config={config} />;
}
