import { AdministracionAlquilerMetroSeoLanding } from "@/components/administracion-alquiler-metro-seo-landing";
import {
  getMetroLandingBySegments,
  getMetroLandingSegments,
} from "@/lib/administracion-alquiler-metro-landings";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ segments?: string[] }> };

export const dynamicParams = false;
export const revalidate = 300;

export function generateStaticParams() {
  return getMetroLandingSegments();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { segments } = await params;
  if (!segments?.length) return {};
  const landing = getMetroLandingBySegments(segments);
  if (!landing) return {};

  const canonical = `${getSiteUrl()}${landing.path}`;

  return {
    title: landing.metaTitle,
    description: landing.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: landing.metaTitle,
      description: landing.metaDescription,
      url: canonical,
      locale: "es_ES",
      type: "website",
      images: [{ url: landing.heroImage, alt: landing.h1 }],
    },
  };
}

export default async function AdministracionAlquilerMetroPage({ params }: Props) {
  const { segments } = await params;
  if (!segments?.length) {
    notFound();
  }
  const landing = getMetroLandingBySegments(segments);
  if (!landing) {
    notFound();
  }

  return <AdministracionAlquilerMetroSeoLanding config={landing} />;
}
