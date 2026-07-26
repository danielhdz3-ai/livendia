import { VenderPisoSinAgenciaLocalSeoLanding } from "@/components/vender-piso-sin-agencia-local-seo-landing";
import {
  getVenderPisoSinAgenciaLandingConfig,
  localVenderPisoSinAgenciaHref,
} from "@/lib/vender-piso-sin-agencia-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const slug = "madrid";
const config = getVenderPisoSinAgenciaLandingConfig(slug)!;
const canonical = `${getSiteUrl()}${localVenderPisoSinAgenciaHref(slug)}`;

/**
 * ISR: revalida cada 5 min para que los precios/estado del catalogo
 * (getPublicServices, cliente Supabase anonimo) no queden fijados hasta
 * el proximo despliegue. Cambiar este numero (segundos) si se necesita
 * otra frecuencia -- ver SEO_ROADMAP.md.
 */
export const revalidate = 300;

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  alternates: { canonical },
  keywords: [...config.keywords],
  openGraph: {
    title: config.metaTitle,
    description: config.metaDescription,
    url: canonical,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/servicio-completo-venta-hero.jpg",
        alt: config.copy?.imageAlt ?? `Vender piso sin agencia en ${config.city} con Livendia`,
      },
    ],
  },
};

export default function VenderPisoSinAgenciaMadridPage() {
  return <VenderPisoSinAgenciaLocalSeoLanding config={config} />;
}
