"use client";

import {
  applyGtagConsent,
  COOKIE_SETTINGS_EVENT,
  readCookieConsent,
  writeCookieConsent,
} from "@/lib/cookie-consent";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type Panel = "banner" | "preferences" | "hidden";

export function CookieConsentBanner() {
  const [panel, setPanel] = useState<Panel>("hidden");
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  const persist = useCallback((choices: { analytics: boolean; marketing: boolean }) => {
    writeCookieConsent(choices);
    applyGtagConsent(choices);
    setPanel("hidden");
  }, []);

  useEffect(() => {
    const stored = readCookieConsent();
    if (stored) {
      applyGtagConsent(stored);
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
      setPanel("hidden");
    } else {
      setPanel("banner");
    }
  }, []);

  useEffect(() => {
    const onSettings = () => {
      const stored = readCookieConsent();
      if (stored) {
        setAnalytics(stored.analytics);
        setMarketing(stored.marketing);
      }
      setPanel("preferences");
    };
    window.addEventListener(COOKIE_SETTINGS_EVENT, onSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, onSettings);
  }, []);

  if (panel === "hidden") return null;

  const isBanner = panel === "banner";

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/15 sm:p-6">
        <h2 id="cookie-consent-title" className="text-base font-bold text-[#1E293B]">
          {isBanner ? "Cookies y privacidad" : "Configurar cookies"}
        </h2>
        <p id="cookie-consent-desc" className="mt-2 text-sm leading-relaxed text-[#64748B]">
          Usamos cookies técnicas necesarias para el área privada y, con tu permiso, analíticas (Google Analytics) y
          publicitarias (Google Ads) para medir el uso del sitio y campañas. Puedes aceptar, rechazar o personalizar. Más
          información en nuestra{" "}
          <Link href="/legal/cookies" className="font-semibold text-[#1A4FBF] hover:underline">
            política de cookies
          </Link>
          .
        </p>

        {!isBanner ? (
          <div className="mt-4 space-y-3 rounded-xl border border-slate-100 bg-slate-50/80 p-4">
            <label className="flex cursor-pointer items-start gap-3">
              <input type="checkbox" checked disabled className="mt-1 h-4 w-4 rounded border-slate-300" />
              <span>
                <span className="block font-semibold text-[#1E293B]">Técnicas (obligatorias)</span>
                <span className="text-xs text-[#64748B]">Sesión, seguridad y preferencia de consentimiento.</span>
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-[#1A4FBF]"
              />
              <span>
                <span className="block font-semibold text-[#1E293B]">Analíticas</span>
                <span className="text-xs text-[#64748B]">Google Analytics — estadísticas agregadas de navegación.</span>
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-[#1A4FBF]"
              />
              <span>
                <span className="block font-semibold text-[#1E293B]">Publicidad</span>
                <span className="text-xs text-[#64748B]">Google Ads — medición de conversiones y campañas.</span>
              </span>
            </label>
          </div>
        ) : null}

        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
          {isBanner ? (
            <>
              <button
                type="button"
                onClick={() => persist({ analytics: false, marketing: false })}
                className="order-3 sm:order-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-[#475569] hover:bg-slate-50"
              >
                Rechazar no esenciales
              </button>
              <button
                type="button"
                onClick={() => setPanel("preferences")}
                className="order-2 rounded-xl border border-[#1A4FBF]/30 px-4 py-2.5 text-sm font-semibold text-[#1A4FBF] hover:bg-[#EFF6FF]"
              >
                Personalizar
              </button>
              <button
                type="button"
                onClick={() => persist({ analytics: true, marketing: true })}
                className="order-1 sm:order-3 rounded-xl bg-[#1A4FBF] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1642a8]"
              >
                Aceptar todas
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setPanel("hidden")}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-[#475569] hover:bg-slate-50"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => persist({ analytics, marketing })}
                className="rounded-xl bg-[#1A4FBF] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1642a8]"
              >
                Guardar preferencias
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
