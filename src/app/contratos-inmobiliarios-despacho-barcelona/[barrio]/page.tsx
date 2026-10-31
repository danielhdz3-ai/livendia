import { ContratosDespachoBarrioLanding } from "@/components/contratos-despacho-barrio-landing";
import {
  CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIOS,
  getContratosInmobiliariosBarrio,
  isContratosInmobiliariosBarrioSlug,
} from "@/lib/contratos-inmobiliarios-barcelona-barrios";
import { contratosInmobiliariosDespachoBarrioPath } from "@/lib/contratos-inmobiliarios-despacho-barcelona-content";
import { getContratosBcnOfficeContent } from "@/lib/contratos-bcn-office-barrio";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 86400;
export const dynamicParams = false;

type Props = { params: Promise<{ barrio: string }> };

export function generateStaticParams() {
  return CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIOS.map((b) => ({ barrio: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { barrio: slug } = await params;
  const barrio = getContratosInmobiliariosBarrio(slug);
  if (!barrio) return {};
  const office = getContratosBcnOfficeContent(barrio);
  const title = `${office.title} | Livendia`;
  const description = `${office.lead} ${office.transport}`;
  const canonical = `${getSiteUrl()}${contratosInmobiliariosDespachoBarrioPath(barrio.slug)}`;
  return {
    title: { absolute: title },
    description: description.slice(0, 160),
    keywords: [...barrio.keywords, "despacho les corts", "cita gestor inmobiliario"],
    alternates: { canonical },
    openGraph: {
      title,
      description: description.slice(0, 160),
      url: canonical,
      locale: "es_ES",
      type: "website",
      images: [{ url: barrio.image, alt: barrio.imageAlt }],
    },
  };
}

export default async function ContratosDespachoBarrioPage({ params }: Props) {
  const { barrio: slug } = await params;
  if (!isContratosInmobiliariosBarrioSlug(slug)) notFound();
  const barrio = getContratosInmobiliariosBarrio(slug)!;
  return <ContratosDespachoBarrioLanding barrio={barrio} />;
}
