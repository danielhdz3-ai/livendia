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
  ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_LOCAL_BASE,
  getPublishedParkingTrasteroLocalCities,
} from "@/lib/acompanamiento-compra-parking-trastero-local-cities";
import {
  ACOMPANAMIENTO_ALQUILER_LOCAL_BASE,
  getPublishedAcompanamientoAlquilerLocalCities,
} from "@/lib/acompanamiento-alquiler-local-cities";
import {
  CONTRATO_ALQUILER_HABITACION_LOCAL_BASE,
  getPublishedContratoAlquilerHabitacionLocalCities,
} from "@/lib/contrato-alquiler-habitacion-local-cities";
import {
  getPublishedVenderPisoSinAgenciaCities,
  localVenderPisoSinAgenciaHref,
} from "@/lib/vender-piso-sin-agencia-local-cities";
import {
  getPublishedVentaPisoParticularCities,
  localVentaPisoParticularSinAgenciaHref,
  VENTA_PISO_PARTICULAR_SIN_AGENCIA_LOCAL_BASE,
} from "@/lib/venta-piso-particular-sin-agencia-local-cities";
import {
  getPublishedVenderPisoSinInmobiliariaCities,
  localVenderPisoSinInmobiliariaHref,
  VENDER_PISO_SIN_INMOBILIARIA_BASE,
} from "@/lib/vender-piso-sin-inmobiliaria-local-cities";
import { PILLAR_BARCELONA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-barcelona";
import { PILLAR_MADRID_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-madrid";
import { PILLAR_VALENCIA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-valencia";
import { PILLAR_SEVILLA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-sevilla";
import { PILLAR_BILBAO_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-bilbao";
import { PILLAR_MALAGA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-malaga";
import { PILLAR_GRANADA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-granada";
import { SITEMAP_LAST_MODIFIED, toSitemapDate } from "@/lib/sitemap-dates";
import { CIUDADES_HUB_BASE, cityHubHref } from "@/lib/ciudades-hub";
import { HOME_COVERAGE_CITY_SLUGS } from "@/lib/home-coverage-cities";
import {
  CONTRATO_ENTRE_PARTICULARES_LOCAL_BASE,
  getPublishedContratoEntreParticularesLocalCities,
} from "@/lib/contrato-entre-particulares-local-cities";

/** Landing pages públicas /servicios/… (orden no crítico) */
const SERVICIO_SLUGS = [
  "administracion-alquiler",
  "contrato-alquiler-habitacion",
  "contrato-alquiler-lau",
  "contrato-alquiler-temporada",
  // contrato-arras-confirmatorias: retirada (301 a /servicios/contrato-de-arras, ver next.config.ts).
  "contrato-arras-penitenciales",
  "vender-piso-sin-agencia",
  "contrato-entre-particulares-local",
  "servicio-completo-compra",
  "acompanamiento-compra-parking-trastero",
  "acompanamiento-compra-parking-trastero-local",
  "servicio-completo-venta",
  "revision-documental-post-arras",
  "revision-contrato-alquiler",
  "acompanamiento-alquiler",
  "acompanamiento-alquiler-local",
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
  "venta-piso-particular-sin-agencia",
  "pago-prueba-livendia",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const coreDate = toSitemapDate(SITEMAP_LAST_MODIFIED.core);
  const serviciosDate = toSitemapDate(SITEMAP_LAST_MODIFIED.servicios);
  const localDate = toSitemapDate(SITEMAP_LAST_MODIFIED.localLandings);
  const gestoriaDate = toSitemapDate(SITEMAP_LAST_MODIFIED.gestoria);
  const ventaSeoDate = toSitemapDate(SITEMAP_LAST_MODIFIED.ventaSeo);
  const venderSinInmobiliariaDate = toSitemapDate(SITEMAP_LAST_MODIFIED.venderSinInmobiliaria);
  const ciudadesDate = toSitemapDate(SITEMAP_LAST_MODIFIED.ciudades);

  const core: MetadataRoute.Sitemap = [
    { url: base, lastModified: coreDate, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/servicios`, lastModified: coreDate, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/precios`, lastModified: coreDate, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/para-propietarios`, lastModified: coreDate, changeFrequency: "weekly", priority: 0.92 },
    { url: `${base}/contacto`, lastModified: coreDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/equipo`, lastModified: coreDate, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog`, lastModified: coreDate, changeFrequency: "weekly", priority: 0.82 },
    // /mapa-del-sitio es noindex (página utilitaria) y no debe listarse en el sitemap.
    { url: `${base}${CIUDADES_HUB_BASE}`, lastModified: ciudadesDate, changeFrequency: "weekly", priority: 0.9 },
  ];

  const servicios: MetadataRoute.Sitemap = SERVICIO_SLUGS.map((slug) => ({
    url: `${base}/servicios/${slug}`,
    lastModified: serviciosDate,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const contratoLocalCiudades: MetadataRoute.Sitemap = getPublishedContratoAlquilerLocalCities().map((c) => ({
    url: `${base}${CONTRATO_ALQUILER_LOCAL_BASE}/${c.slug}`,
    lastModified: localDate,
    changeFrequency: "weekly" as const,
    priority: 0.82,
  }));

  const contratoArrasLocalCiudades: MetadataRoute.Sitemap = getPublishedContratoArrasLocalCities().map((c) => ({
    url: `${base}${CONTRATO_ARRAS_LOCAL_BASE}/${c.slug}`,
    lastModified: localDate,
    changeFrequency: "weekly" as const,
    priority: 0.82,
  }));

  const administracionAlquilerLocalCiudades: MetadataRoute.Sitemap =
    getPublishedAdministracionAlquilerLocalCities().map((c) => ({
      url: `${base}${ADMINISTRACION_ALQUILER_LOCAL_BASE}/${c.slug}`,
      lastModified: localDate,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    }));

  const contratoAlquilerTemporadaLocalCiudades: MetadataRoute.Sitemap =
    getPublishedContratoAlquilerTemporadaLocalCities().map((c) => ({
      url: `${base}${CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE}/${c.slug}`,
      lastModified: localDate,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    }));

  const compraCompletaLocalCiudades: MetadataRoute.Sitemap =
    getPublishedServicioCompletoCompraLocalCities().map((c) => ({
      url: `${base}${SERVICIO_COMPLETO_COMPRA_LOCAL_BASE}/${c.slug}`,
      lastModified: localDate,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    }));

  const ventaCompletaLocalCiudades: MetadataRoute.Sitemap =
    getPublishedServicioCompletoVentaLocalCities().map((c) => ({
      url: `${base}${SERVICIO_COMPLETO_VENTA_LOCAL_BASE}/${c.slug}`,
      lastModified: localDate,
      changeFrequency: "weekly" as const,
      priority: 0.84,
    }));

  const gestoriaHub: MetadataRoute.Sitemap = [
    {
      url: `${base}${GESTORIA_INMOBILIARIA_LOCAL_BASE}`,
      lastModified: gestoriaDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  const gestoriaInmobiliariaLocalCiudades: MetadataRoute.Sitemap =
    getPublishedGestoriaInmobiliariaLocalCities().map((c) => ({
      url: `${base}${GESTORIA_INMOBILIARIA_LOCAL_BASE}/${c.slug}`,
      lastModified: gestoriaDate,
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
    lastModified: ventaSeoDate,
    changeFrequency: "weekly" as const,
    priority: 0.88,
  }));

  const venderSinInmobiliariaHub: MetadataRoute.Sitemap = [
    {
      url: `${base}${VENDER_PISO_SIN_INMOBILIARIA_BASE}`,
      lastModified: venderSinInmobiliariaDate,
      changeFrequency: "weekly" as const,
      priority: 0.92,
    },
  ];

  const pillarPaths: Record<string, string> = {
    barcelona: PILLAR_BARCELONA_PATH,
    madrid: PILLAR_MADRID_PATH,
    valencia: PILLAR_VALENCIA_PATH,
    sevilla: PILLAR_SEVILLA_PATH,
    bilbao: PILLAR_BILBAO_PATH,
    malaga: PILLAR_MALAGA_PATH,
    granada: PILLAR_GRANADA_PATH,
  };

  const venderSinInmobiliariaLocal: MetadataRoute.Sitemap = getPublishedVenderPisoSinInmobiliariaCities().map(
    (c) => ({
      url: `${base}${pillarPaths[c.slug] ?? localVenderPisoSinInmobiliariaHref(c.slug)}`,
      lastModified: venderSinInmobiliariaDate,
      changeFrequency: "weekly" as const,
      priority: pillarPaths[c.slug] ? 0.94 : 0.9,
    }),
  );

  const revisionPostArrasLocalCiudades: MetadataRoute.Sitemap =
    getPublishedRevisionDocumentalPostArrasLocalCities().map((c) => ({
      url: `${base}${REVISION_DOCUMENTAL_POST_ARRAS_LOCAL_BASE}/${c.slug}`,
      lastModified: localDate,
      changeFrequency: "weekly" as const,
      priority: 0.84,
    }));

  const gestionVendedorLocalCiudades: MetadataRoute.Sitemap =
    getPublishedGestionDocumentalVendedorLocalCities().map((c) => ({
      url: `${base}${GESTION_DOCUMENTAL_VENDEDOR_LOCAL_BASE}/${c.slug}`,
      lastModified: localDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const parkingTrasteroLocalCiudades: MetadataRoute.Sitemap =
    getPublishedParkingTrasteroLocalCities().map((c) => ({
      url: `${base}${ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_LOCAL_BASE}/${c.slug}`,
      lastModified: localDate,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    }));

  const acompanamientoAlquilerLocalCiudades: MetadataRoute.Sitemap =
    getPublishedAcompanamientoAlquilerLocalCities().map((c) => ({
      url: `${base}${ACOMPANAMIENTO_ALQUILER_LOCAL_BASE}/${c.slug}`,
      lastModified: localDate,
      changeFrequency: "weekly" as const,
      priority: 0.84,
    }));

  const habitacionLocalCiudades: MetadataRoute.Sitemap =
    getPublishedContratoAlquilerHabitacionLocalCities().map((c) => ({
      url: `${base}${CONTRATO_ALQUILER_HABITACION_LOCAL_BASE}/${c.slug}`,
      lastModified: localDate,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    }));

  const ventaParticularMetroHub: MetadataRoute.Sitemap = [
    {
      url: `${base}${VENTA_PISO_PARTICULAR_SIN_AGENCIA_LOCAL_BASE}`,
      lastModified: ventaSeoDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  const ventaParticularMetroCiudades: MetadataRoute.Sitemap = getPublishedVentaPisoParticularCities().map(
    (c) => ({
      url: `${base}${localVentaPisoParticularSinAgenciaHref(c.slug)}`,
      lastModified: ventaSeoDate,
      changeFrequency: "weekly" as const,
      priority: 0.89,
    }),
  );

  const ciudadesHubPages: MetadataRoute.Sitemap = HOME_COVERAGE_CITY_SLUGS.map((slug) => ({
    url: `${base}${cityHubHref(slug)}`,
    lastModified: ciudadesDate,
    changeFrequency: "weekly" as const,
    priority: 0.88,
  }));

  const contratoEntreParticularesLocalCiudades: MetadataRoute.Sitemap =
    getPublishedContratoEntreParticularesLocalCities().map((c) => ({
      url: `${base}${CONTRATO_ENTRE_PARTICULARES_LOCAL_BASE}/${c.slug}`,
      lastModified: localDate,
      changeFrequency: "weekly" as const,
      priority: 0.86,
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
    ...ventaParticularMetroHub,
    ...ventaParticularMetroCiudades,
    ...venderSinInmobiliariaHub,
    ...venderSinInmobiliariaLocal,
    ...revisionPostArrasLocalCiudades,
    ...gestionVendedorLocalCiudades,
    ...parkingTrasteroLocalCiudades,
    ...acompanamientoAlquilerLocalCiudades,
    ...habitacionLocalCiudades,
    ...contratoEntreParticularesLocalCiudades,
    ...gestoriaHub,
    ...gestoriaInmobiliariaLocalCiudades,
    ...ciudadesHubPages,
    ...blogArticles,
  ];
}
