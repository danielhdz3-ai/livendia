"use client";

import { HomeDecretosBannerCarousel } from "@/components/home-decretos-banner-carousel";
import { usePathname } from "next/navigation";

/** Muestra el carrusel RDL 28/29/2026 bajo el header en fichas de servicio. */
export function ServiciosNormativaBannerGate() {
  const pathname = usePathname() ?? "";
  if (!pathname.startsWith("/servicios")) return null;
  return <HomeDecretosBannerCarousel />;
}