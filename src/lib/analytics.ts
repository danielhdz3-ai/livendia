"use client";

/** Eventos estándar para GTM → GA4 (configurar triggers en contenedor GTM-NCDNCRMH). */

export type AnalyticsItem = {
  item_id: string;
  item_name: string;
  price?: number;
  quantity?: number;
  item_category?: string;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushDataLayer(event: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}

export function trackWhatsAppClick(placement: string, linkUrl?: string): void {
  pushDataLayer("whatsapp_click", {
    placement,
    link_url: linkUrl,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
  });
}

export function trackBeginCheckout(params: {
  serviceId: string;
  serviceName: string;
  value: number;
  currency?: string;
  itemCategory?: string;
}): void {
  const value = params.value / 100;
  pushDataLayer("begin_checkout", {
    currency: params.currency ?? "EUR",
    value,
    items: [
      {
        item_id: params.serviceId,
        item_name: params.serviceName,
        price: value,
        quantity: 1,
        item_category: params.itemCategory,
      },
    ],
  });
}

export function trackGenerateLead(source: string): void {
  pushDataLayer("generate_lead", {
    lead_source: source,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
  });
}

export function trackPurchase(params: {
  transactionId: string;
  value: number;
  currency?: string;
  items: AnalyticsItem[];
}): void {
  pushDataLayer("purchase", {
    transaction_id: params.transactionId,
    currency: params.currency ?? "EUR",
    value: params.value,
    items: params.items,
  });
}
