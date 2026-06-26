import { VenderPisoSinInmobiliariaMadridPillarPage } from "@/components/pillar-pages/vender-piso-sin-inmobiliaria-madrid-page";
import {
  PILLAR_MADRID_META,
  PILLAR_MADRID_PATH,
} from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-madrid";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${PILLAR_MADRID_PATH}`;

export const metadata: Metadata = {
  title: PILLAR_MADRID_META.title,
  description: PILLAR_MADRID_META.description,
  alternates: { canonical },
  keywords: [...PILLAR_MADRID_META.keywords],
  openGraph: {
    title: PILLAR_MADRID_META.title,
    description: PILLAR_MADRID_META.description,
    url: canonical,
    locale: "es_ES",
    type: "article",
    images: [
      {
        url: "/images/servicio-completo-venta-hero.jpg",
        alt: "Guía para vender piso sin comisiones en Madrid entre particulares",
      },
    ],
  },
};

export default function VenderPisoSinInmobiliariaMadridPage() {
  return <VenderPisoSinInmobiliariaMadridPillarPage />;
}
