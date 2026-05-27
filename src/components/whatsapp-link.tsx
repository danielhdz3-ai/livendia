"use client";

import type { ComponentProps } from "react";

type WhatsAppLinkProps = ComponentProps<"a"> & {
  /** Identificador para GTM: fab, hero, footer, servicio_admin, etc. */
  placement: string;
};

/** Enlace WhatsApp con data-analytics-placement para el listener global. */
export function WhatsAppLink({ placement, children, ...rest }: WhatsAppLinkProps) {
  return (
    <a data-analytics-placement={placement} {...rest}>
      {children}
    </a>
  );
}
