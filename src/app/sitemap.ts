import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog-content";
import {
  CONTRATO_ALQUILER_LOCAL_BASE,
  getPublishedContratoAlquilerLocalCities,
} from "@/lib/contrato-alquiler-local-cities";
import {
  CONTRATO_ARRAS_LOCAL_BASE,
  getPublishedContratoArrasLocalCities,
} from "@/lib/contrato-arras-local-cities";
import {
  ADMINISTRACION_ALQUILER_LOCAL_BASE,
  getPublishedAdministracionAlquilerLocalCities,
} from "@/lib/administracion-alquiler-local-cities";
import {
  CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE,
  getPublishedContratoAlquilerTemporadaLocalCities,
} from "@/lib/contrato-alquiler-temporada-local-cities";
import {
  SERVICIO_COMPLETO_COMPRA_LOCAL_BASE,
  getPublishedServicioCompletoCompraLocalCities,
} from "@/lib/servicio-completo-compra-local-cities";
import {
  SERVICIO_COMPLETO_VENTA_LOCAL_BASE,
  getPublishedServicioCompletoVentaLocalCities,
} from "@/lib/servicio-completo-venta-local-cities";
import {
  GESTORIA_INMOBILIARIA_LOCAL_BASE,
  getPublishedGestoriaInmobiliariaLocalCities,
} from "@/lib/gestoria-inmobiliaria-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import {
  REVISION_DOCUMENTAL_POST_ARRAS_LOCAL_BASE,
  getPublishedRevisionDocumentalPostArrasLocalCities,
} from "@/lib/revision-documental-post-arras-local-cities";
import {
  GESTION_DOCUMENTAL_VENDEDOR_LOCAL_BASE,
  getPublishedGestionDocumentalVendedorLocalCities,
} from "@/lib/gestion-documental-vendedor-local-cities";
import {
  CONTRATO_ALQUILER_HABITACION_LOCAL_BASE,
  getPublishedContratoAlquilerHabitacionLocalCities,
} from "@/lib/contrato-alquiler-habitacion-local-cities";
import {
  getPublishedVenderPisoSinAgenciaCities,
  localVenderPisoSinAgenciaHref,
} from "@/lib/vender-piso-sin-agencia-local-cities";

/** Landing pages públicas /servicios/… (orden no crítico) */
const SERVICIO_SLUGS = [
  "administracion-alquiler",
  "contrato-alquiler-habitacion",
  "contrato-alquiler-lau",
  "contrato-alquiler-temporada",
  "contrato-arras-confirmatorias",
  "contrato-arras-penitenciales",
  "servicio-completo-compra",
  "acompanamiento-compra-parking-trastero",
  "servicio-completo-venta",
  "revision-documental-post-arras",
  "gestion-documental-vendedor",
  "reserva-de-compra",
  "acompanamiento-reserva-arras",
  "contrato-de-arras",
  "contrato-de-alquiler",
  "contrato-alquiler-local",
  "contrato-arras-local",
  "administracion-alquiler-local",
  "contrato-alquiler-temporada-local",
  "servicio-completo-compra-local",
  "servicio-completo-venta-local",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/servicios`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/precios`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/para-propietarios`, lastModified: now, changeFrequency: "weekly", priority: 0.92 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/equipo`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.82 },
    { url: `${base}/mapa-del-sitio`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const servicios: MetadataRoute.Sitemap = SERVICIO_SLUGS.map((slug) => ({
    url: `${base}/servicios/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const contratoLocalCiudades: MetadataRoute.Sitemap = getPublishedContratoAlquilerLocalCities().map((c) => ({
    url: `${base}${CONTRATO_ALQUILER_LOCAL_BASE}/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.82,
  }));

  const contratoArrasLocalCiudades: MetadataRoute.Sitemap = getPublishedContratoArrasLocalCities().map((c) => ({
    url: `${base}${CONTRATO_ARRAS_LOCAL_BASE}/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.82,
  }));

  const administracionAlquilerLocalCiudades: MetadataRoute.Sitemap =
    getPublishedAdministracionAlquilerLocalCities().map((c) => ({
      url: `${base}${ADMINISTRACION_ALQUILER_LOCAL_BASE}/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    }));

  const contratoAlquilerTemporadaLocalCiudades: MetadataRoute.Sitemap =
    getPublishedContratoAlquilerTemporadaLocalCities().map((c) => ({
      url: `${base}${CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE}/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    }));

  const compraCompletaLocalCiudades: MetadataRoute.Sitemap =
    getPublishedServicioCompletoCompraLocalCities().map((c) => ({
      url: `${base}${SERVICIO_COMPLETO_COMPRA_LOCAL_BASE}/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    }));

  const ventaCompletaLocalCiudades: MetadataRoute.Sitemap =
    getPublishedServicioCompletoVentaLocalCities().map((c) => ({
      url: `${base}${SERVICIO_COMPLETO_VENTA_LOCAL_BASE}/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.84,
    }));

  const gestoriaHub: MetadataRoute.Sitemap = [
    {
      url: `${base}${GESTORIA_INMOBILIARIA_LOCAL_BASE}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  const gestoriaInmobiliariaLocalCiudades: MetadataRoute.Sitemap =
    getPublishedGestoriaInmobiliariaLocalCities().map((c) => ({
      url: `${base}${GESTORIA_INMOBILIARIA_LOCAL_BASE}/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.88,
    }));

  const blogArticles: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.modified + "T12:00:00Z"),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const ventaSeoLocal: MetadataRoute.Sitemap = getPublishedVenderPisoSinAgenciaCities().map((c) => ({
    url: `${base}${localVenderPisoSinAgenciaHref(c.slug)}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.88,
  }));

  const revisionPostArrasLocalCiudades: MetadataRoute.Sitemap =
    getPublishedRevisionDocumentalPostArrasLocalCities().map((c) => ({
      url: `${base}${REVISION_DOCUMENTAL_POST_ARRAS_LOCAL_BASE}/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.84,
    }));

  const gestionVendedorLocalCiudades: MetadataRoute.Sitemap =
    getPublishedGestionDocumentalVendedorLocalCities().map((c) => ({
      url: `${base}${GESTION_DOCUMENTAL_VENDEDOR_LOCAL_BASE}/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const habitacionLocalCiudades: MetadataRoute.Sitemap =
    getPublishedContratoAlquilerHabitacionLocalCities().map((c) => ({
      url: `${base}${CONTRATO_ALQUILER_HABITACION_LOCAL_BASE}/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    }));

  return [
    ...core,
    ...servicios,
    ...contratoLocalCiudades,
    ...contratoArrasLocalCiudades,
    ...administracionAlquilerLocalCiudades,
    ...contratoAlquilerTemporadaLocalCiudades,
    ...compraCompletaLocalCiudades,
    ...ventaCompletaLocalCiudades,
    ...ventaSeoLocal,
    ...revisionPostArrasLocalCiudades,
    ...gestionVendedorLocalCiudades,
    ...habitacionLocalCiudades,
    ...gestoriaHub,
    ...gestoriaInmobiliariaLocalCiudades,
    ...blogArticles,
  ];
}
