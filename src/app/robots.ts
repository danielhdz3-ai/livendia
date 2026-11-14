import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  const site = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/dashboard/",
          "/mis-pedidos/",
          "/api/",
          "/auth/",
          "/login",
          "/register",
          "/favicon.ico",
        ],
      },
    ],
    sitemap: `${site}/sitemap.xml`,
    host: site,
  };
}
