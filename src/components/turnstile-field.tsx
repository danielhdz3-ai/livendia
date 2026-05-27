"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
        },
      ) => string;
      remove: (widgetId: string) => void;
    };
  }
}

type Props = {
  siteKey: string;
  onToken: (token: string | null) => void;
};

/**
 * Widget Cloudflare Turnstile (modo explicit).
 * SITE: NEXT_PUBLIC_TURNSTILE_SITE_KEY · SERVIDOR: TURNSTILE_SECRET_KEY en /api/contact
 */
export function TurnstileField({ siteKey, onToken }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!siteKey) return undefined;
    const el = containerRef.current;
    if (!el) return undefined;

    let widgetId: string | null = null;
    let cancelled = false;

    const mount = () => {
      if (cancelled || !containerRef.current || !window.turnstile) return;
      widgetId = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token) => onToken(token),
        "expired-callback": () => onToken(null),
        "error-callback": () => onToken(null),
      });
    };

    if (window.turnstile) {
      mount();
    } else {
      const scr = document.createElement("script");
      scr.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      scr.async = true;
      scr.onload = mount;
      document.body.appendChild(scr);
    }

    return () => {
      cancelled = true;
      if (widgetId && window.turnstile) {
        try {
          window.turnstile.remove(widgetId);
        } catch {
          /* noop */
        }
      }
      widgetId = null;
    };
  }, [siteKey, onToken]);

  return (
    <div>
      <p className="mb-2 text-xs text-slate-500">Verificación anti-spam</p>
      <div ref={containerRef} className="min-h-[70px]" />
    </div>
  );
}
