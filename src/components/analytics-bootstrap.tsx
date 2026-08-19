"use client";

import { pushDataLayer, trackWhatsAppClick } from "@/lib/analytics";
import { getWhatsAppHref } from "@/lib/business-nap";
import {
  appendAttributionToWhatsAppMessage,
  captureVisitorAttribution,
  getStoredAttribution,
} from "@/lib/utm";
import { getQuickWhatsAppPrefill, resolveWhatsAppPageContext } from "@/lib/whatsapp-prefill";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function attributionForDataLayer() {
  const a = getStoredAttribution();
  return {
    landing_path: a.landing_path,
    referrer_host: a.referrer_host,
    utm_source: a.utm_source,
    utm_medium: a.utm_medium,
    utm_campaign: a.utm_campaign,
  };
}

/**
 * Captura atribución (UTM + landing + referrer) en todas las páginas
 * y enriquece clics wa.me sin handler propio con contexto de origen.
 */
export function AnalyticsBootstrap() {
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    captureVisitorAttribution(pathname);
    pushDataLayer("landing_page_view", {
      page_path: pathname,
      ...attributionForDataLayer(),
    });
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href*='wa.me']") as HTMLAnchorElement | null;
      if (!anchor) return;

      e.preventDefault();

      const placement =
        anchor.getAttribute("data-analytics-placement") ??
        `whatsapp_${pathname.replace(/\//g, "_").replace(/^_|_$/g, "").slice(0, 80) || "root"}`;

      let message = "";
      try {
        const url = new URL(anchor.href);
        const textParam = url.searchParams.get("text");
        if (textParam) message = decodeURIComponent(textParam);
      } catch {
        /* href relativo o malformado */
      }

      if (!message.trim()) {
        message = getQuickWhatsAppPrefill(resolveWhatsAppPageContext(pathname));
      }

      message = appendAttributionToWhatsAppMessage(message);
      const href = getWhatsAppHref(message);
      trackWhatsAppClick(placement, href);
      window.open(href, "_blank", "noopener,noreferrer");
    };

    document.addEventListener("click", onClick, false);
    return () => document.removeEventListener("click", onClick, false);
  }, [pathname]);

  return null;
}
