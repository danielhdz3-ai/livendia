import { GestoriaCityVerticalHubLanding } from "@/components/gestoria-city-vertical-hub-landing";
import {
  getGestoriaCityVerticalHub,
  getGestoriaCityVerticalStaticParams,
  isGestoriaCityVertical,
} from "@/lib/gestoria-city-vertical-hub";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string; vertical: string }> };

export const dynamicParams = false;
export const revalidate = 300;

export function generateStaticParams() {
  return getGestoriaCityVerticalStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, vertical } = await params;
  if (!isGestoriaCityVertical(vertical)) return {};
  const config = getGestoriaCityVerticalHub(slug, vertical);
  if (!config) return {};

  const canonical = `${getSiteUrl()}${config.path}`;

  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: canonical,
      locale: "es_ES",
      type: "website",
    },
  };
}

export default async function GestoriaCityVerticalPage({ params }: Props) {
  const { slug, vertical } = await params;
  if (!isGestoriaCityVertical(vertical)) notFound();

  const config = getGestoriaCityVerticalHub(slug, vertical);
  if (!config) notFound();

  return <GestoriaCityVerticalHubLanding config={config} />;
}
