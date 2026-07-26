import { GestoriaInmobiliariaLocalSeoLanding } from "@/components/gestoria-inmobiliaria-local-seo-landing";
import {
  GESTORIA_INMOBILIARIA_LOCAL_BASE,
  getGestoriaInmobiliariaLocalCity,
  getPublishedGestoriaInmobiliariaLocalCities,
  isGestoriaInmobiliariaLocalSlugPublished,
  toGestoriaInmobiliariaLandingConfig,
} from "@/lib/gestoria-inmobiliaria-local-cities";
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
  return getPublishedGestoriaInmobiliariaLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isGestoriaInmobiliariaLocalSlugPublished(slug)) {
    return {};
  }
  const city = getGestoriaInmobiliariaLocalCity(slug);
  if (!city) {
    return {};
  }

  const canonical = `${getSiteUrl()}${GESTORIA_INMOBILIARIA_LOCAL_BASE}/${slug}`;

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical },
    ...(city.keywords?.length ? { keywords: [...city.keywords] } : {}),
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: canonical,
      locale: "es_ES",
      type: "website",
    },
  };
}

export default async function GestoriaCiudadPage({ params }: Props) {
  const { slug } = await params;
  if (!isGestoriaInmobiliariaLocalSlugPublished(slug)) {
    notFound();
  }
  const city = getGestoriaInmobiliariaLocalCity(slug);
  if (!city) {
    notFound();
  }

  return <GestoriaInmobiliariaLocalSeoLanding config={toGestoriaInmobiliariaLandingConfig(city)} />;
}
