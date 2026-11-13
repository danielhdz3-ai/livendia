import { VenderPisoSinInmobiliariaZaragozaPillarPage } from "@/components/pillar-pages/vender-piso-sin-inmobiliaria-zaragoza-page";
import {
  PILLAR_ZARAGOZA_META,
  PILLAR_ZARAGOZA_PATH,
} from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-zaragoza";
import { VENDER_PISO_SIN_INMOBILIARIA_HERO_IMAGE } from "@/components/vender-piso-sin-inmobiliaria-images";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${PILLAR_ZARAGOZA_PATH}`;

/** Estático hasta el siguiente deploy (evita ISR Reads/Writes en Hobby). */
export const revalidate = false;

export const metadata: Metadata = {
  title: PILLAR_ZARAGOZA_META.title,
  description: PILLAR_ZARAGOZA_META.description,
  alternates: { canonical },
  keywords: [...PILLAR_ZARAGOZA_META.keywords],
  openGraph: {
    title: PILLAR_ZARAGOZA_META.title,
    description: PILLAR_ZARAGOZA_META.description,
    url: canonical,
    locale: "es_ES",
    type: "article",
    images: [
      {
        url: VENDER_PISO_SIN_INMOBILIARIA_HERO_IMAGE,
        alt: "Guía para vender piso sin comisiones en Zaragoza entre particulares",
      },
    ],
  },
};

export default function VenderPisoSinInmobiliariaZaragozaPage() {
  return <VenderPisoSinInmobiliariaZaragozaPillarPage />;
}
