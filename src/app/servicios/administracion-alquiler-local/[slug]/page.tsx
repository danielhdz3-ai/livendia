import { AdministracionAlquilerLocalSeoLanding } from "@/components/administracion-alquiler-local-seo-landing";
import {
  ADMINISTRACION_ALQUILER_LOCAL_BASE,
  getAdministracionAlquilerLocalCity,
  getPublishedAdministracionAlquilerLocalCities,
  isAdministracionAlquilerLocalSlugPublished,
  toAdministracionLandingConfig,
} from "@/lib/administracion-alquiler-local-cities";
import { ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL } from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

/**
 * ISR: revalida cada 5 min para que los precios/estado del catalogo
 * (getPublicServices, cliente Supabase anonimo) no queden fijados hasta
 * el proximo despliegue. Cambiar este numero (segundos) si se necesita
 * otra frecuencia -- ver SEO_ROADMAP.md.
 */
export const revalidate = 300;

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
  const price = ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL;
  const title =
    slug === "valencia"
      ? `Gestión de alquileres en Valencia — ${price} | Admin. para propietarios`
      : slug === "mallorca"
        ? `Administración de alquileres Mallorca — ${price}`
        : `Administración del alquiler en ${city.city} — ${price}`;
  const description =
    slug === "valencia"
      ? `Gestión de alquileres en Valencia desde ${price} IVA incl. Gestión de alquiler para propietarios: incidencias, averías e inquilino — tú no hablas con el arrendatario. Ruzafa, Campanar, Benimaclet, Mislata. Sin permanencia.`
      : slug === "mallorca"
        ? `Administración de alquileres en Mallorca y Palma desde ${price} IVA incl. sin permanencia. Incidencias, mediación e inquilino: gestión profesional para propietarios en Baleares. Livendia.`
        : slug === "oviedo"
          ? `Administración de alquileres en Oviedo desde ${price} IVA incl. sin permanencia. Incidencias, mediación e inquilino: gestión profesional para propietarios en Asturias. Livendia.`
          : slug === "gijon"
            ? `Administración de alquileres en Gijón desde ${price} IVA incl. sin permanencia. Incidencias, mediación e inquilino: gestión profesional para propietarios en Asturias. Livendia.`
            : `Administración de alquileres en ${city.city} desde ${price} sin permanencia. Gestión integral de incidencias, averías y mediación con el inquilino. Livendia.`;
  const ogImage = city.heroImage ?? "/images/modelo3.jpg";

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
      images: [{ url: ogImage, alt: `Administración de alquiler en ${city.city} — Livendia` }],
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
