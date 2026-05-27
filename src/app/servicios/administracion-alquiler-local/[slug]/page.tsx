import { AdministracionAlquilerLocalSeoLanding } from "@/components/administracion-alquiler-local-seo-landing";
import {
  ADMINISTRACION_ALQUILER_LOCAL_BASE,
  getAdministracionAlquilerLocalCity,
  getPublishedAdministracionAlquilerLocalCities,
  isAdministracionAlquilerLocalSlugPublished,
  toAdministracionLandingConfig,
} from "@/lib/administracion-alquiler-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedAdministracionAlquilerLocalCities().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isAdministracionAlquilerLocalSlugPublished(slug)) {
    return {};
  }
  const city = getAdministracionAlquilerLocalCity(slug);
  if (!city) {
    return {};
  }

  const canonical = `${getSiteUrl()}${ADMINISTRACION_ALQUILER_LOCAL_BASE}/${slug}`;
  const title =
    slug === "valencia"
      ? `Gestión de alquileres Valencia — 49 €/mes | Livendia`
      : slug === "mallorca"
        ? `Administración de alquileres Mallorca — 49 €/mes | Livendia`
        : `Administración del alquiler en ${city.city} — 49 €/mes`;
  const description =
    slug === "valencia"
      ? `Gestión de alquileres en Valencia desde 49 €/mes IVA incl. sin permanencia. Incidencias, averías y mediación: el propietario no habla con el inquilino. Livendia.`
      : slug === "mallorca"
        ? `Administración de alquileres en Mallorca y Palma desde 49 €/mes IVA incl. sin permanencia. Incidencias, mediación e inquilino: gestión profesional para propietarios en Baleares. Livendia.`
        : `Administración de alquileres en ${city.city} desde 49 €/mes sin permanencia. Gestión integral de incidencias, averías y mediación con el inquilino. Livendia.`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: "es_ES",
      type: "website",
    },
  };
}

export default async function AdministracionAlquilerLocalCiudadPage({ params }: Props) {
  const { slug } = await params;
  if (!isAdministracionAlquilerLocalSlugPublished(slug)) {
    notFound();
  }
  const city = getAdministracionAlquilerLocalCity(slug);
  if (!city) {
    notFound();
  }

  return <AdministracionAlquilerLocalSeoLanding config={toAdministracionLandingConfig(city)} />;
}
