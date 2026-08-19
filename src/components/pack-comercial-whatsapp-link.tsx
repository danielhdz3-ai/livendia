"use client";

import type { ComponentProps, ReactNode } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { getWhatsAppHref } from "@/lib/business-nap";
import {
  appendUtmToWhatsAppMessage,
  getPackCommercialWhatsAppPlacement,
  getPackCommercialWhatsAppPrefill,
  type PackCommercialWhatsAppContext,
} from "@/lib/pack-comercial-whatsapp";
import { getStoredUtm } from "@/lib/utm";

type Props = PackCommercialWhatsAppContext & {
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"a">, "children" | "href" | "onClick">;

/**
 * Enlace wa.me con mensaje de pack (producto + ciudad + precio).
 * En clic añade UTM de sesión al texto si existe, para trazabilidad comercial.
 */
export function PackCommercialWhatsAppLink({
  variant,
  city,
  slug,
  children,
  className,
  ...rest
}: Props) {
  const baseMessage = getPackCommercialWhatsAppPrefill({ variant, city, slug });
  const placement = getPackCommercialWhatsAppPlacement({ variant, slug });
  const fallbackHref = getWhatsAppHref(baseMessage);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const message = appendUtmToWhatsAppMessage(baseMessage, getStoredUtm());
    const href = getWhatsAppHref(message);
    trackWhatsAppClick(placement, href);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <a
      href={fallbackHref}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-analytics-placement={placement}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  );
}
