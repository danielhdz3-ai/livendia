"use client";

import { trackBeginCheckout } from "@/lib/analytics";
import { utmForStripeMetadata } from "@/lib/utm";

type CheckoutBody = {
  fullName: string;
  email: string;
  phone: string;
};

export type CheckoutAnalytics = {
  serviceId: string;
  serviceName: string;
  serviceSlug: string;
  priceCents: number;
  category?: string | null;
};

/** Inicia Stripe Checkout desde el navegador. */
export async function checkoutServiceSession(
  serviceId: string,
  formData: CheckoutBody,
  analytics?: CheckoutAnalytics,
): Promise<void> {
  if (analytics) {
    trackBeginCheckout({
      serviceId: analytics.serviceId,
      serviceName: analytics.serviceName,
      value: analytics.priceCents,
      itemCategory: analytics.category ?? undefined,
    });
  }

  try {
    const response = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        serviceId,
        email: formData.email,
        fullName: formData.fullName,
        phone: formData.phone,
        utm: utmForStripeMetadata(),
      }),
    });

    const data = (await response.json()) as { url?: string; error?: string };

    if (!response.ok) {
      window.alert(data.error ?? "No se pudo iniciar el pago.");
      return;
    }

    if (data.url) {
      window.location.href = data.url;
    }
  } catch {
    console.error("Error al iniciar checkout");
    window.alert("Error al procesar el pago. Por favor, intenta de nuevo.");
  }
}

export function analyticsFromService(service: {
  id: string;
  name: string;
  slug: string;
  price_cents: number;
  category?: string | null;
}): CheckoutAnalytics {
  return {
    serviceId: service.id,
    serviceName: service.name,
    serviceSlug: service.slug,
    priceCents: service.price_cents,
    category: service.category,
  };
}
