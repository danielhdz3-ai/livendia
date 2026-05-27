"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { ServiceModal } from "@/components/service-modal";
import type { PublicService } from "@/lib/catalog.public";
import { analyticsFromService, checkoutServiceSession } from "@/lib/checkout-service-session";

type SingleCtx = { openCheckout: () => void };

const SinglePurchaseContext = createContext<SingleCtx | null>(null);

export function ServicePurchaseProvider({
  service,
  children,
}: {
  service: PublicService | null;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openCheckout = () => {
    if (service) {
      setOpen(true);
      return;
    }
    window.location.href = "/servicios";
  };

  return (
    <SinglePurchaseContext.Provider value={{ openCheckout }}>
      {children}
      {open && service ? (
        <ServiceModal
          service={service}
          onClose={() => setOpen(false)}
          onCheckout={async (svc, form) => {
            await checkoutServiceSession(svc.id, form, analyticsFromService(svc));
          }}
        />
      ) : null}
    </SinglePurchaseContext.Provider>
  );
}

export function useServicePurchase() {
  const ctx = useContext(SinglePurchaseContext);
  if (!ctx) {
    throw new Error("useServicePurchase debe usarse dentro de ServicePurchaseProvider");
  }
  return ctx;
}

export function ContratarServicioButton({
  className,
  children,
  disabled,
}: {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  const { openCheckout } = useServicePurchase();
  return (
    <button type="button" className={className} disabled={disabled} onClick={openCheckout}>
      {children}
    </button>
  );
}

type MultiCtx = { openCheckoutForSlug: (slug: string) => void };

const MultiPurchaseContext = createContext<MultiCtx | null>(null);

export function MultiServicePurchaseProvider({
  servicesBySlug,
  children,
}: {
  servicesBySlug: Partial<Record<string, PublicService>>;
  children: ReactNode;
}) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const service = activeSlug ? servicesBySlug[activeSlug] : undefined;

  const openCheckoutForSlug = (slug: string) => {
    const next = servicesBySlug[slug];
    if (next) setActiveSlug(slug);
    else window.location.href = "/servicios";
  };

  return (
    <MultiPurchaseContext.Provider value={{ openCheckoutForSlug }}>
      {children}
      {service ? (
        <ServiceModal
          service={service}
          onClose={() => setActiveSlug(null)}
          onCheckout={async (svc, form) => {
            await checkoutServiceSession(svc.id, form, analyticsFromService(svc));
          }}
        />
      ) : null}
    </MultiPurchaseContext.Provider>
  );
}

export function useMultiServicePurchase() {
  const ctx = useContext(MultiPurchaseContext);
  if (!ctx) {
    throw new Error("useMultiServicePurchase debe usarse dentro de MultiServicePurchaseProvider");
  }
  return ctx;
}

export function ContratarSlugButton({
  slug,
  className,
  children,
  disabled,
}: {
  slug: string;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  const { openCheckoutForSlug } = useMultiServicePurchase();
  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      onClick={() => openCheckoutForSlug(slug)}
    >
      {children}
    </button>
  );
}
