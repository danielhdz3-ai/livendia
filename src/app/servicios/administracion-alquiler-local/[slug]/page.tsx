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

/** Estático hasta el siguiente deploy (evita ISR Reads/Writes en Hobby). */
export const revalidate = false;

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
      title: `Gestión de alquileres Valencia — ${price} | Gestoría propietarios`,
      description: `Gestoría de gestión de alquileres en Valencia desde ${price} IVA incl. Propietarios: sin llamadas del inquilino, incidencias y renovaciones. Ruzafa, Benimaclet, Campanar. Contrata online.`,
    },
    madrid: {
      title: `Gestión alquileres Madrid — ${price} | Gestoría para propietarios`,
      description: `Gestoría de administración de alquileres en Madrid desde ${price} IVA incl. Canal único con el inquilino, averías y renovaciones. Salamanca, Chamartín, Vallecas. Sin comisión sobre la renta.`,
    },
    barcelona: {
      title: `Gestión alquiler Barcelona — ${price} | Gestoría LAU`,
      description: `Gestoría de gestión de alquileres en Barcelona desde ${price} IVA incl. Zona tensionada, INCASÒL y comunidad: Livendia habla con el inquilino por ti. Eixample, Gràcia, AMB.`,
    },
    malaga: {
      title: `Gestión alquileres Málaga — ${price} | Gestoría propietarios`,
      description: `Administración de alquileres en Málaga desde ${price} IVA incl. Gestoría para propietarios: incidencias, temporada y mediación. Costa del Sol. Sin permanencia.`,
    },
    gijon: {
      title: `Gestión de alquiler Gijón — ${price} | Gestoría Asturias`,
      description: `Gestoría de gestión de alquiler en Gijón desde ${price} IVA incl. Propietarios en Asturias: canal único con el inquilino, incidencias y renovaciones. Contrata online.`,
    },
    zaragoza: {
      title: `Gestión alquileres Zaragoza — ${price} | Gestoría propietarios`,
      description: `Administración de alquileres en Zaragoza desde ${price} IVA incl. Gestoría inmobiliaria Livendia para propietarios: incidencias, mediación e inquilino. Sin permanencia.`,
    },
    mallorca: {
      title: `Administración alquiler Mallorca — ${price} | Gestoría`,
      description: `Gestión de alquileres en Mallorca y Palma desde ${price} IVA incl. Gestoría para propietarios en Baleares: incidencias, temporada y mediación.`,
    },
    oviedo: {
      title: `Administración alquiler Oviedo — ${price} | Gestoría`,
      description: `Gestión de alquileres en Oviedo desde ${price} IVA incl. Gestoría para propietarios asturianos: incidencias, recibos y mediación con el inquilino.`,
    },
    sevilla: {
      title: `Gestión alquileres Sevilla — ${price} | Gestoría propietarios`,
      description: `Administración de alquileres en Sevilla desde ${price} IVA incl. Gestoría Livendia: incidencias, LAU y mediación. Sin comisión sobre la renta.`,
    },
    bilbao: {
      title: `Gestión alquiler Bilbao — ${price} | Gestoría propietarios`,
      description: `Gestoría de administración de alquiler en Bilbao y Bizkaia desde ${price} IVA incl. Propietarios: incidencias y canal único con el inquilino.`,
    },
    murcia: {
      title: `Gestión alquileres Murcia — ${price} | Gestoría`,
      description: `Administración de alquileres en Murcia desde ${price} IVA incl. Gestoría para propietarios: incidencias, renovaciones y mediación profesional.`,
    },
    granada: {
      title: `Gestión alquiler Granada — ${price} | Gestoría`,
      description: `Gestoría de gestión de alquiler en Granada desde ${price} IVA incl. Propietarios: incidencias, universitarios y mediación con el inquilino.`,
    },
    alicante: {
      title: `Gestión alquileres Alicante — ${price} | Gestoría`,
      description: `Administración de alquileres en Alicante desde ${price} IVA incl. Gestoría Livendia para propietarios: incidencias y mediación sin permanencia.`,
    },
    vigo: {
      title: `Gestión alquiler Vigo — ${price} | Gestoría Galicia`,
      description: `Gestoría de administración de alquiler en Vigo desde ${price} IVA incl. Propietarios gallegos: incidencias y canal único con el inquilino.`,
    },
    pamplona: {
      title: `Gestión alquiler Pamplona — ${price} | Gestoría`,
      description: `Administración de alquileres en Pamplona desde ${price} IVA incl. Gestoría para propietarios: incidencias, LAU y mediación profesional.`,
    },
  };

  const custom = metaBySlug[slug];
  const title = custom?.title ?? `Gestión de alquileres ${city.city} — ${price} | Gestoría Livendia`;
  const description =
    custom?.description ??
    `Gestoría de administración de alquileres en ${city.city} desde ${price} sin permanencia. Gestión de incidencias, averías y mediación con el inquilino. Livendia.`;
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
      images: [{ url: ogImage, alt: `Gestión de alquileres en ${city.city} — Livendia` }],
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