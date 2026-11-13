import { ContratosDespachoBarcelonaLanding } from "@/components/contratos-despacho-barcelona-landing";
import {
  CONTRATOS_INMOBILIARIOS_DESPACHO_BARCELONA_META,
  CONTRATOS_INMOBILIARIOS_DESPACHO_BARCELONA_PATH,
} from "@/lib/contratos-inmobiliarios-despacho-barcelona-content";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

/** Estático hasta el siguiente deploy (evita ISR Reads/Writes en Hobby). */
export const revalidate = false;

const canonical = `${getSiteUrl()}${CONTRATOS_INMOBILIARIOS_DESPACHO_BARCELONA_PATH}`;

export const metadata: Metadata = {
  title: { absolute: CONTRATOS_INMOBILIARIOS_DESPACHO_BARCELONA_META.title },
  description: CONTRATOS_INMOBILIARIOS_DESPACHO_BARCELONA_META.description,
  keywords: [...CONTRATOS_INMOBILIARIOS_DESPACHO_BARCELONA_META.keywords],
  alternates: { canonical },
  openGraph: {
    title: CONTRATOS_INMOBILIARIOS_DESPACHO_BARCELONA_META.title,
    description: CONTRATOS_INMOBILIARIOS_DESPACHO_BARCELONA_META.description,
    url: canonical,
    locale: "es_ES",
    type: "website",
    images: [{ url: "/images/zonas barcelona/lescorts4.jpg", alt: "Despacho Livendia Les Corts Barcelona" }],
  },
};

export default function ContratosDespachoBarcelonaPage() {
  return <ContratosDespachoBarcelonaLanding />;
}
