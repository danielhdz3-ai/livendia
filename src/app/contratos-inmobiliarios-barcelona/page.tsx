import { ContratosInmobiliariosBarcelonaLanding } from "@/components/contratos-inmobiliarios-barcelona-landing";
import {
  CONTRATOS_INMOBILIARIOS_BARCELONA_META,
  CONTRATOS_INMOBILIARIOS_BARCELONA_PATH,
} from "@/lib/contratos-inmobiliarios-barcelona-content";
import { getPublicServices } from "@/lib/catalog";
import type { PublicService } from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

export const revalidate = 86400;

const canonical = `${getSiteUrl()}${CONTRATOS_INMOBILIARIOS_BARCELONA_PATH}`;

export const metadata: Metadata = {
  title: { absolute: CONTRATOS_INMOBILIARIOS_BARCELONA_META.title },
  description: CONTRATOS_INMOBILIARIOS_BARCELONA_META.description,
  keywords: [...CONTRATOS_INMOBILIARIOS_BARCELONA_META.keywords],
  alternates: { canonical },
  openGraph: {
    title: CONTRATOS_INMOBILIARIOS_BARCELONA_META.title,
    description: CONTRATOS_INMOBILIARIOS_BARCELONA_META.description,
    url: canonical,
    locale: "es_ES",
    type: "website",
    images: [{ url: "/images/contratos.jpg", width: 1200, height: 630, alt: "Contratos inmobiliarios Barcelona Livendia" }],
  },
};

const CHECKOUT_SLUGS = [
  "contrato-arras-penitenciales",
  "contrato-alquiler-lau",
  "contrato-alquiler-temporada",
  "contrato-alquiler-habitacion",
  "servicio-completo-compra",
  "servicio-completo-venta",
  "administracion-alquiler",
] as const;

export default async function ContratosInmobiliariosBarcelonaPage() {
  const catalog = await getPublicServices();
  const servicesBySlug: Partial<Record<string, PublicService>> = {};
  for (const s of catalog) {
    if (CHECKOUT_SLUGS.includes(s.slug as (typeof CHECKOUT_SLUGS)[number])) {
      servicesBySlug[s.slug] = s;
    }
  }
  return <ContratosInmobiliariosBarcelonaLanding servicesBySlug={servicesBySlug} />;
}
