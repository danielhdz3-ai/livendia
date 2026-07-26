import { VenderPisoSinInmobiliariaMadridPillarPage } from "@/components/pillar-pages/vender-piso-sin-inmobiliaria-madrid-page";
import {
  PILLAR_MADRID_META,
  PILLAR_MADRID_PATH,
} from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-madrid";
import { VENDER_PISO_SIN_INMOBILIARIA_HERO_IMAGE } from "@/components/vender-piso-sin-inmobiliaria-images";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${PILLAR_MADRID_PATH}`;

/**
 * ISR: revalida cada 5 min para que los precios/estado del catalogo
 * (getPublicServices, cliente Supabase anonimo) no queden fijados hasta
 * el proximo despliegue. Cambiar este numero (segundos) si se necesita
 * otra frecuencia -- ver SEO_ROADMAP.md.
 */
export const revalidate = 300;

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
        url: VENDER_PISO_SIN_INMOBILIARIA_HERO_IMAGE,
        alt: "Guía para vender piso sin comisiones en Madrid entre particulares",
      },
    ],
  },
};

export default function VenderPisoSinInmobiliariaMadridPage() {
  return <VenderPisoSinInmobiliariaMadridPillarPage />;
}
