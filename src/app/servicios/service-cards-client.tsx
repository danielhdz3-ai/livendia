"use client";

import { useState } from "react";
import { ServiceModal } from "@/components/service-modal";
import { ServicePurchaseCard } from "@/components/service-purchase-card";
import { analyticsFromService, checkoutServiceSession } from "@/lib/checkout-service-session";
import type { PublicService } from "@/lib/catalog.public";

interface ServiceCardsClientProps {
  services: PublicService[];
}

export function ServiceCardsClient({ services }: ServiceCardsClientProps) {
  const [selectedService, setSelectedService] = useState<PublicService | null>(null);

  const handleCheckout = async (
    service: PublicService,
    formData: { fullName: string; email: string; phone: string },
  ) => {
    await checkoutServiceSession(service.id, formData, analyticsFromService(service));
  };

  return (
    <>
      <ul className="mt-6 grid list-none items-stretch gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li key={service.id} className="min-w-0">
            <ServicePurchaseCard
              service={service}
              onSelect={() => setSelectedService(service)}
              className="h-full w-full"
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
