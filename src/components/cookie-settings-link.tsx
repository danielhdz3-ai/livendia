"use client";

import { openCookieSettings } from "@/lib/cookie-consent";

type CookieSettingsLinkProps = {
  className?: string;
  children?: React.ReactNode;
};

/** Abre el panel de cookies (footer y política de cookies). */
export function CookieSettingsLink({ className, children }: CookieSettingsLinkProps) {
  return (
    <button type="button" onClick={() => openCookieSettings()} className={className}>
      {children ?? "Configurar cookies"}
    </button>
  );
}
