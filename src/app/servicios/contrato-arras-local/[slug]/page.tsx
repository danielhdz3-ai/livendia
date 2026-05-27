import { ContratoArrasLocalSeoLanding } from "@/components/contrato-arras-local-seo-landing";
import {
  CONTRATO_ARRAS_LOCAL_BASE,
  getContratoArrasLocalCity,
  getPublishedContratoArrasLocalCities,
  isContratoArrasLocalSlugPublished,
  toArrasLandingConfig,
} from "@/lib/contrato-arras-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedContratoArrasLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isContratoArrasLocalSlugPublished(slug)) {
    return {};
  }
  const city = getContratoArrasLocalCity(slug);
  if (!city) {
    return {};
  }

  const canonical = `${getSiteUrl()}${CONTRATO_ARRAS_LOCAL_BASE}/${slug}`;
  const title =
    slug === "madrid"
      ? `Contrato de arras Madrid — 145 € IVA incl. | Livendia`
      : `Contrato de arras en ${city.city} — 145 € | Livendia`;
  const description =
    slug === "madrid"
      ? `Contrato de arras en Madrid por gestoría profesional: penitenciales o confirmatorias, 145 € IVA incl. Revisión legal antes de firmar. Entrega 48-72 h. Livendia.`
      : `Contrato de arras en ${city.city} por profesional: 145 € IVA incl., revisión penitenciales y confirmatorias. Entrega 48-72 h. Gestoría inmobiliaria Livendia.`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `Contrato de arras en ${city.city} por un profesional | Livendia`,
      description,
      url: canonical,
      locale: "es_ES",
      type: "website",
    },
  };
}

export default async function ContratoArrasLocalCiudadPage({ params }: Props) {
  const { slug } = await params;
  if (!isContratoArrasLocalSlugPublished(slug)) {
    notFound();
  }
  const city = getContratoArrasLocalCity(slug);
  if (!city) {
    notFound();
  }

  return <ContratoArrasLocalSeoLanding config={toArrasLandingConfig(city)} />;
}
