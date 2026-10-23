import { ContratosInmobiliariosBarrioLanding } from "@/components/contratos-inmobiliarios-barcelona-barrio-landing";
import { getPublicServices } from "@/lib/catalog";
import type { PublicService } from "@/lib/catalog.public";
import {
  CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIOS,
  contratosInmobiliariosBarrioPath,
  getContratosInmobiliariosBarrio,
  isContratosInmobiliariosBarrioSlug,
} from "@/lib/contratos-inmobiliarios-barcelona-barrios";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 300;

const CHECKOUT_SLUGS = [
  "contrato-arras-penitenciales",
  "contrato-alquiler-lau",
  "contrato-alquiler-temporada",
  "contrato-alquiler-habitacion",
  "servicio-completo-compra",
  "servicio-completo-venta",
  "administracion-alquiler",
] as const;

type Props = { params: Promise<{ barrio: string }> };

export function generateStaticParams() {
  return CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIOS.map((b) => ({ barrio: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { barrio: slug } = await params;
  const barrio = getContratosInmobiliariosBarrio(slug);
  if (!barrio) return {};
  const canonical = `${getSiteUrl()}${contratosInmobiliariosBarrioPath(barrio.slug)}`;
  return {
    title: { absolute: barrio.metaTitle },
    description: barrio.metaDescription,
    keywords: [...barrio.keywords],
    alternates: { canonical },
    openGraph: {
      title: barrio.metaTitle,
      description: barrio.metaDescription,
      url: canonical,
      locale: "es_ES",
      type: "website",
      images: [{ url: barrio.image, alt: barrio.imageAlt }],
    },
  };
}

export default async function ContratosInmobiliariosBarrioPage({ params }: Props) {
  const { barrio: slug } = await params;
  if (!isContratosInmobiliariosBarrioSlug(slug)) notFound();
  const barrio = getContratosInmobiliariosBarrio(slug)!;

  const catalog = await getPublicServices();
  const servicesBySlug: Partial<Record<string, PublicService>> = {};
  for (const s of catalog) {
    if (CHECKOUT_SLUGS.includes(s.slug as (typeof CHECKOUT_SLUGS)[number])) {
      servicesBySlug[s.slug] = s;
    }
  }

  return (
    <ContratosInmobiliariosBarrioLanding
      barrio={barrio}
      servicesBySlug={servicesBySlug}
      allBarrios={CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIOS}
    />
  );
}
