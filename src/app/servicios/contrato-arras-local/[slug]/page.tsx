import { ContratoArrasLocalSeoLanding } from "@/components/contrato-arras-local-seo-landing";
import {
  CONTRATO_ARRAS_LOCAL_BASE,
  getContratoArrasLocalCity,
  getPublishedContratoArrasLocalCities,
  isContratoArrasLocalSlugPublished,
  toArrasLandingConfig,
} from "@/lib/contrato-arras-local-cities";
import { CONTRATO_ARRAS_LOCAL_PRICE_LABEL } from "@/lib/catalog.public";
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
    city.metaTitle ??
    (slug === "madrid"
      ? `Contrato de arras Madrid — ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. | Livendia`
      : slug === "asturias"
        ? `Contrato de arras Asturias — ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. | Livendia`
        : `Contrato de arras en ${city.city} — ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} | Livendia`);
  const description =
    city.metaDescription ??
    (slug === "madrid"
      ? `Contrato de arras en Madrid por gestoría: penitenciales o confirmatorias, ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Gestor por teléfono antes de firmar. Entrega 48-72 h. Livendia.`
      : slug === "barcelona"
        ? `Contrato de arras en Barcelona ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Penitenciales o confirmatorias para particulares. Gestor revisa antes de firmar. Eixample, Gràcia. Entrega 48-72 h.`
        : slug === "asturias"
          ? `Contrato de arras en Asturias ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Oviedo, Gijón y Avilés. Penitenciales o confirmatorias revisadas por gestor antes de firmar. Entrega 48-72 h. Livendia.`
          : `Contrato de arras en ${city.city} por profesional: ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl., revisión penitenciales y confirmatorias. Entrega 48-72 h. Gestoría inmobiliaria Livendia.`);

  return {
    title,
    description,
    ...(city.keywords?.length ? { keywords: [...city.keywords] } : {}),
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
