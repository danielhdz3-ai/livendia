import { ContratoAlquilerHabitacionLocalSeoLanding } from "@/components/contrato-alquiler-habitacion-local-seo-landing";
import {
  getContratoAlquilerHabitacionLocalCity,
  getPublishedContratoAlquilerHabitacionLocalCities,
  isContratoAlquilerHabitacionLocalSlugPublished,
  localContratoAlquilerHabitacionHref,
  toHabitacionLandingConfig,
} from "@/lib/contrato-alquiler-habitacion-local-cities";
import { CONTRATO_ALQUILER_HABITACION_PRICE_LABEL } from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedContratoAlquilerHabitacionLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isContratoAlquilerHabitacionLocalSlugPublished(slug)) {
    return {};
  }
  const city = getContratoAlquilerHabitacionLocalCity(slug);
  if (!city) {
    return {};
  }

  const config = toHabitacionLandingConfig(city);
  const canonical = `${getSiteUrl()}${localContratoAlquilerHabitacionHref(slug)}`;
  const title = config.metaTitle ?? `Contrato alquiler habitación en ${city.city} | Livendia`;
  const description =
    config.metaDescription ??
    `Contrato de alquiler de habitación en ${city.city}. Piso compartido con cláusulas de convivencia. ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl.`;

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

export default async function ContratoAlquilerHabitacionLocalPage({ params }: Props) {
  const { slug } = await params;
  if (!isContratoAlquilerHabitacionLocalSlugPublished(slug)) {
    notFound();
  }
  const city = getContratoAlquilerHabitacionLocalCity(slug);
  if (!city) {
    notFound();
  }

  return <ContratoAlquilerHabitacionLocalSeoLanding config={toHabitacionLandingConfig(city)} />;
}
