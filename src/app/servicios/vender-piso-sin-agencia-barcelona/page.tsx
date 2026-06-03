import { VenderPisoSinAgenciaLocalSeoLanding } from "@/components/vender-piso-sin-agencia-local-seo-landing";
import {
  getVenderPisoSinAgenciaLandingConfig,
  localVenderPisoSinAgenciaHref,
} from "@/lib/vender-piso-sin-agencia-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const slug = "barcelona";
const config = getVenderPisoSinAgenciaLandingConfig(slug)!;
const canonical = `${getSiteUrl()}${localVenderPisoSinAgenciaHref(slug)}`;

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

export default function VenderPisoSinAgenciaBarcelonaPage() {
  return <VenderPisoSinAgenciaLocalSeoLanding config={config} />;
}
