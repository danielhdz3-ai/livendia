import { VenderPisoSinAgenciaLocalSeoLanding } from "@/components/vender-piso-sin-agencia-local-seo-landing";
import {
  getVenderPisoSinAgenciaCity,
  localVenderPisoSinAgenciaHref,
  toVenderPisoSinAgenciaConfig,
} from "@/lib/vender-piso-sin-agencia-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const city = getVenderPisoSinAgenciaCity("barcelona")!;
const canonical = `${getSiteUrl()}${localVenderPisoSinAgenciaHref("barcelona")}`;

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
        alt: city.copy?.imageAlt ?? "Venta entre particulares en Barcelona con Livendia",
      },
    ],
  },
};

export default function VenderPisoSinAgenciaBarcelonaPage() {
  return <VenderPisoSinAgenciaLocalSeoLanding config={toVenderPisoSinAgenciaConfig(city)} />;
}
