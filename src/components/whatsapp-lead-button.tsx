"use client";

import type { ComponentProps, ReactNode } from "react";
import { useWhatsAppLeadOptional } from "@/components/whatsapp-lead-provider";
import { trackWhatsAppClick } from "@/lib/analytics";
import { getWhatsAppHref } from "@/lib/business-nap";
import {
  getQuickWhatsAppPrefill,
  mergeWhatsAppContext,
  type WhatsAppNeedType,
} from "@/lib/whatsapp-prefill";
import { usePathname } from "next/navigation";

type WhatsAppLeadButtonProps = {
  placement: string;
  serviceLabel?: string;
  needType?: WhatsAppNeedType;
  city?: string;
  mode?: "modal" | "direct";
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"button">, "children" | "onClick" | "type">;

export function WhatsAppLeadButton({
  placement,
  serviceLabel,
  needType,
  city,
  mode = "modal",
  children,
  className = "",
  ...rest
}: WhatsAppLeadButtonProps) {
  const pathname = usePathname() ?? "/";
  const lead = useWhatsAppLeadOptional();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (mode === "modal" && lead) {
      lead.openLeadModal({ placement, serviceLabel, needType, city });
      return;
    }
    const context = mergeWhatsAppContext(pathname, { serviceLabel, needType, city });
    const href = getWhatsAppHref(getQuickWhatsAppPrefill(context));
    trackWhatsAppClick(placement, href);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <button type="button" className={className} data-analytics-placement={placement} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
}

type WhatsAppLeadLinkProps = {
  placement: string;
  serviceLabel?: string;
  needType?: WhatsAppNeedType;
  city?: string;
  mode?: "modal" | "direct";
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"a">, "children" | "href" | "onClick">;

export function WhatsAppLeadLink({
  placement,
  serviceLabel,
  needType,
  city,
  mode = "direct",
  children,
  className = "",
  ...rest
}: WhatsAppLeadLinkProps) {
  const pathname = usePathname() ?? "/";
  const lead = useWhatsAppLeadOptional();
  const context = mergeWhatsAppContext(pathname, { serviceLabel, needType, city });
  const href = getWhatsAppHref(getQuickWhatsAppPrefill(context));

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (mode === "modal" && lead) {
      e.preventDefault();
      lead.openLeadModal({ placement, serviceLabel, needType, city });
    }
  }

  return (
    <a
      href={href}
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
