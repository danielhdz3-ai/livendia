import { VenderPisoSinAgenciaLocalSeoLanding } from "@/components/vender-piso-sin-agencia-local-seo-landing";
import {
  getVenderPisoSinAgenciaCity,
  localVenderPisoSinAgenciaHref,
  toVenderPisoSinAgenciaConfig,
} from "@/lib/vender-piso-sin-agencia-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const city = getVenderPisoSinAgenciaCity("malaga")!;
const canonical = `${getSiteUrl()}${localVenderPisoSinAgenciaHref("malaga")}`;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical },
  keywords: [...city.keywords],
  openGraph: {
    title: city.metaTitle,
    description: city.metaDescription,
    url: canonical,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/servicio-completo-venta-hero.jpg",
        alt: "Vender piso sin agencia en Málaga con Livendia",
      },
    ],
  },
};

export default function VenderPisoSinAgenciaMalagaPage() {
  return <VenderPisoSinAgenciaLocalSeoLanding config={toVenderPisoSinAgenciaConfig(city)} />;
}
