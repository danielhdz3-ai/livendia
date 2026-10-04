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

  const metaBySlug: Record<string, { title: string; description: string }> = {
    valencia: {
      title: `Gestión de alquileres Valencia — ${price}/mes 2026`,
      description: `Gestión de alquileres en Valencia desde ${price} IVA incl. Propietarios: incidencias, averías e inquilino — tú no atiendes llamadas. Ruzafa, Benimaclet, Campanar. Sin permanencia. Contrata online.`,
    },
    madrid: {
      title: `Gestión de alquileres Madrid — ${price}/mes | Propietarios`,
      description: `Administración de alquileres en Madrid desde ${price} IVA incl. Canal único con el inquilino, averías y renovaciones. Salamanca, Vallecas, Getafe. Sin permanencia ni comisión sobre la renta.`,
    },
    barcelona: {
      title: `Administración alquiler Barcelona — ${price}/mes`,
      description: `Gestión de alquileres en Barcelona desde ${price} IVA incl. Zona tensionada, INCASÒL y comunidad: Livendia habla con el inquilino por ti. Eixample, Gràcia, AMB. Sin permanencia.`,
    },
    mallorca: {
      title: `Administración alquileres Mallorca — ${price}`,
      description: `Administración de alquileres en Mallorca y Palma desde ${price} IVA incl. sin permanencia. Incidencias, mediación e inquilino. Gestión para propietarios en Baleares.`,
    },
    oviedo: {
      title: `Administración alquileres Oviedo — ${price}`,
      description: `Administración de alquileres en Oviedo desde ${price} IVA incl. sin permanencia. Incidencias, mediación e inquilino. Gestión profesional para propietarios en Asturias.`,
    },
    gijon: {
      title: `Administración alquileres Gijón — ${price}`,
      description: `Administración de alquileres en Gijón desde ${price} IVA incl. sin permanencia. Incidencias, mediación e inquilino. Gestión profesional para propietarios en Asturias.`,
    },
  };

  const custom = metaBySlug[slug];
  const title = custom?.title ?? `Administración del alquiler en ${city.city} — ${price}`;
  const description =
    custom?.description ??
    `Administración de alquileres en ${city.city} desde ${price} sin permanencia. Gestión integral de incidencias, averías y mediación con el inquilino. Livendia.`;
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
