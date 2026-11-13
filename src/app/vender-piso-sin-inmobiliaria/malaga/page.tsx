import { VenderPisoSinInmobiliariaMalagaPillarPage } from "@/components/pillar-pages/vender-piso-sin-inmobiliaria-malaga-page";
import {
  PILLAR_MALAGA_META,
  PILLAR_MALAGA_PATH,
} from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-malaga";
import { VENDER_PISO_SIN_INMOBILIARIA_HERO_IMAGE } from "@/components/vender-piso-sin-inmobiliaria-images";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${PILLAR_MALAGA_PATH}`;

/** Estático hasta el siguiente deploy (evita ISR Reads/Writes en Hobby). */
export const revalidate = false;

export const metadata: Metadata = {
  title: PILLAR_MALAGA_META.title,
  description: PILLAR_MALAGA_META.description,
  alternates: { canonical },
  keywords: [...PILLAR_MALAGA_META.keywords],
  openGraph: {
    title: PILLAR_MALAGA_META.title,
    description: PILLAR_MALAGA_META.description,
    url: canonical,
    locale: "es_ES",
    type: "article",
    images: [
      {
        url: VENDER_PISO_SIN_INMOBILIARIA_HERO_IMAGE,
        alt: "Guía para vender piso sin comisiones en Malaga entre particulares",
      },
    ],
  },
};

export default function VenderPisoSinInmobiliariaMalagaPage() {
  return <VenderPisoSinInmobiliariaMalagaPillarPage />;
}
