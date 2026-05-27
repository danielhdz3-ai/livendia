"use client";

import { captureUtmFromLocation, parseUtmFromSearch } from "@/lib/utm";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useEffect } from "react";

/**
 * Captura UTM en sesión y registra clics en enlaces wa.me (delegación).
 * Montar una vez en layout raíz.
 */
export function AnalyticsBootstrap() {
  useEffect(() => {
    captureUtmFromLocation();

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href*='wa.me']") as HTMLAnchorElement | null;
      if (!anchor) return;
      const placement = anchor.getAttribute("data-analytics-placement") ?? "whatsapp_link";
      trackWhatsAppClick(placement, anchor.href);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    const utm = parseUtmFromSearch(window.location.search);
    if (Object.keys(utm).length > 0) {
      captureUtmFromLocation();
    }
  }, []);

  return null;
}
