"use client";

import { useState } from "react";
import { ServiceModal } from "@/components/service-modal";
import { ServicePurchaseCard } from "@/components/service-purchase-card";
import { analyticsFromService, checkoutServiceSession } from "@/lib/checkout-service-session";
import { servicePublicLandingPath } from "@/lib/catalog.public";
import type { PublicService } from "@/lib/catalog.public";

interface ServiceCardsClientProps {
  services: PublicService[];
  /**
   * "checkout" (por defecto; usado en /precios y /dashboard/servicios): la tarjeta abre
   * el modal de contratación (nombre/email/teléfono → Stripe) directamente.
   * "landing" (usado en /servicios): la tarjeta enlaza a la ficha informativa del
   * servicio; el botón "Contratar" real vive en esa ficha y en /precios.
   */
  mode?: "checkout" | "landing";
}

export function ServiceCardsClient({ services, mode = "checkout" }: ServiceCardsClientProps) {
  const [selectedService, setSelectedService] = useState<PublicService | null>(null);

  const handleCheckout = async (
    service: PublicService,
    formData: { fullName: string; email: string; phone: string },
  ) => {
    await checkoutServiceSession(service.id, formData, analyticsFromService(service));
  };

  return (
    <>
      <ul className="mt-6 grid list-none auto-rows-fr items-stretch gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li key={service.id} className="flex min-h-0 min-w-0">
            {mode === "landing" ? (
              <ServicePurchaseCard
                service={service}
                href={servicePublicLandingPath(service.slug)}
                className="w-full"
              />
            ) : (
              <ServicePurchaseCard
                service={service}
                onSelect={() => setSelectedService(service)}
                className="w-full"
              />
            )}
          </li>
        ))}
      </ul>

      {mode === "checkout" && selectedService ? (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onCheckout={handleCheckout}
        />
      ) : null}
    </>
  );
}
