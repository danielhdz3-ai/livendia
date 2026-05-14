import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

/** Landing pages públicas /servicios/… (orden no crítico) */
const SERVICIO_SLUGS = [
  "administracion-alquiler",
  "contrato-alquiler-habitacion",
  "contrato-alquiler-lau",
  "contrato-alquiler-temporada",
  "contrato-arras-confirmatorias",
  "contrato-arras-penitenciales",
  "servicio-completo-compra",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/servicios`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/precios`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/legal/aviso-legal`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/legal/privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.35 },
    { url: `${base}/legal/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.35 },
  ];

  const servicios: MetadataRoute.Sitemap = SERVICIO_SLUGS.map((slug) => ({
    url: `${base}/servicios/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...core, ...servicios];
}
