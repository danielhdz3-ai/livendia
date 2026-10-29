import { AdministracionAlquilerBarcelonaLanding } from "@/components/administracion-alquiler-barcelona-landing";
import { getPublicServices } from "@/lib/catalog";
import { ADMINISTRACION_ALQUILER_SLUG } from "@/lib/catalog.public";
import {
  ADMINISTRACION_ALQUILER_BARCELONA_HUB_META,
  ADMINISTRACION_ALQUILER_BARCELONA_HUB_PATH,
} from "@/lib/administracion-alquiler-barcelona-hub-content";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

export const revalidate = 86400;

const canonical = `${getSiteUrl()}${ADMINISTRACION_ALQUILER_BARCELONA_HUB_PATH}`;

export const metadata: Metadata = {
  title: ADMINISTRACION_ALQUILER_BARCELONA_HUB_META.title,
  description: ADMINISTRACION_ALQUILER_BARCELONA_HUB_META.description,
  keywords: [...ADMINISTRACION_ALQUILER_BARCELONA_HUB_META.keywords],
  alternates: { canonical },
  openGraph: {
    title: ADMINISTRACION_ALQUILER_BARCELONA_HUB_META.title,
    description: ADMINISTRACION_ALQUILER_BARCELONA_HUB_META.description,
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default async function AdministracionAlquilerBarcelonaHubPage() {
  const catalog = await getPublicServices();
  const adminService = catalog.find((s) => s.slug === ADMINISTRACION_ALQUILER_SLUG) ?? null;
  return <AdministracionAlquilerBarcelonaLanding adminService={adminService} />;
}
