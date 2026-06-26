import { VenderPisoSinInmobiliariaBarcelonaPillarPage } from "@/components/pillar-pages/vender-piso-sin-inmobiliaria-barcelona-page";
import {
  PILLAR_BARCELONA_META,
  PILLAR_BARCELONA_PATH,
} from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-barcelona";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${PILLAR_BARCELONA_PATH}`;

export const metadata: Metadata = {
  title: PILLAR_BARCELONA_META.title,
  description: PILLAR_BARCELONA_META.description,
  alternates: { canonical },
  keywords: [...PILLAR_BARCELONA_META.keywords],
  openGraph: {
    title: PILLAR_BARCELONA_META.title,
    description: PILLAR_BARCELONA_META.description,
    url: canonical,
    locale: "es_ES",
    type: "article",
    images: [
      {
        url: "/images/servicio-completo-venta-hero.jpg",
        alt: "Guía para vender piso sin comisiones en Barcelona entre particulares",
      },
    ],
  },
};

export default function VenderPisoSinInmobiliariaBarcelonaPage() {
  return <VenderPisoSinInmobiliariaBarcelonaPillarPage />;
}
