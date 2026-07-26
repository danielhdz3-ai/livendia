import { RevisionDocumentalPostArrasLocalSeoLanding } from "@/components/revision-documental-post-arras-local-seo-landing";
import {
  getRevisionDocumentalPostArrasLocalCity,
  getPublishedRevisionDocumentalPostArrasLocalCities,
  isRevisionDocumentalPostArrasLocalSlugPublished,
  localRevisionDocumentalPostArrasHref,
  toRevisionPostArrasLandingConfig,
} from "@/lib/revision-documental-post-arras-local-cities";
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
  return getPublishedRevisionDocumentalPostArrasLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isRevisionDocumentalPostArrasLocalSlugPublished(slug)) {
    return {};
  }
  const city = getRevisionDocumentalPostArrasLocalCity(slug);
  if (!city) {
    return {};
  }

  const config = toRevisionPostArrasLandingConfig(city);
  const canonical = `${getSiteUrl()}${localRevisionDocumentalPostArrasHref(slug)}`;
  const title = config.metaTitle ?? `Revisión documental post-arras en ${city.city} | Livendia`;
  const description =
    config.metaDescription ??
    `Revisión documental post-arras en ${city.city} para compradores particulares. 350 € IVA incl. Informe en 48h.`;

  return {
    title,
    description,
    keywords: config.keywords ? [...config.keywords] : undefined,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: "es_ES",
      type: "website",
    },
  };
}

export default async function RevisionDocumentalPostArrasLocalPage({ params }: Props) {
  const { slug } = await params;
  if (!isRevisionDocumentalPostArrasLocalSlugPublished(slug)) {
    notFound();
  }
  const city = getRevisionDocumentalPostArrasLocalCity(slug);
  if (!city) {
    notFound();
  }

  return <RevisionDocumentalPostArrasLocalSeoLanding config={toRevisionPostArrasLandingConfig(city)} />;
}
