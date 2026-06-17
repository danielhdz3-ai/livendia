"use client";

import { useState } from "react";
import type { PublicService } from "@/lib/catalog.public";
import { ServiceModal } from "@/components/service-modal";
import { ServicePurchaseCard } from "@/components/service-purchase-card";
import { checkoutServiceSession, ensureLoggedInForCheckout } from "@/lib/checkout-service-session";

interface MobileServicesListProps {
  services: PublicService[];
}

/** Lista vertical de servicios en móvil (sustituye al carrusel en pantallas pequeñas). */
export function MobileServicesList({ services }: MobileServicesListProps) {
  const [selectedService, setSelectedService] = useState<PublicService | null>(null);

  const handleCheckout = async (
    service: PublicService,
    formData: { fullName: string; email: string; phone: string },
  ) => {
    await checkoutServiceSession(service.id, formData);
  };

  if (services.length === 0) return null;

  return (
    <>
      <ul className="mt-6 space-y-4 sm:hidden">
        {services.map((service) => (
          <li key={service.id}>
            <ServicePurchaseCard
              service={service}
              onSelect={() => {
                void (async () => {
                  if (await ensureLoggedInForCheckout()) setSelectedService(service);
                })();
              }}
              className="shadow-sm"
              imageHeightClass="h-40"
            />
          </li>
        ))}
      </ul>

      {selectedService ? (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onCheckout={handleCheckout}
        />
      ) : null}
    </>
  );
}
