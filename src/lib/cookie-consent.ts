/** Preferencias de cookies (RGPD / LSSI-CE + Consent Mode v2). */

export const COOKIE_CONSENT_STORAGE_KEY = "livendia_cookie_consent";
export const COOKIE_CONSENT_VERSION = 1;

export type CookieConsentChoices = {
  version: number;
  /** Medición (GA4). */
  analytics: boolean;
  /** Publicidad y conversiones (Google Ads). */
  marketing: boolean;
  updatedAt: string;
};

export type GtagConsentParams = {
  analytics_storage: "granted" | "denied";
  ad_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
};

export function choicesToGtagConsent(choices: Pick<CookieConsentChoices, "analytics" | "marketing">): GtagConsentParams {
  const analytics = choices.analytics ? "granted" : "denied";
  const marketing = choices.marketing ? "granted" : "denied";
  return {
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
  };
}

export const GTAG_CONSENT_DENIED: GtagConsentParams = choicesToGtagConsent({
  analytics: false,
  marketing: false,
});

export function readCookieConsent(): CookieConsentChoices | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsentChoices;
    if (parsed.version !== COOKIE_CONSENT_VERSION) return null;
    if (typeof parsed.analytics !== "boolean" || typeof parsed.marketing !== "boolean") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeCookieConsent(choices: Pick<CookieConsentChoices, "analytics" | "marketing">): CookieConsentChoices {
  const record: CookieConsentChoices = {
    version: COOKIE_CONSENT_VERSION,
    analytics: choices.analytics,
    marketing: choices.marketing,
    updatedAt: new Date().toISOString(),
  };
  if (typeof window !== "undefined") {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(record));
  }
  return record;
}

export function applyGtagConsent(choices: Pick<CookieConsentChoices, "analytics" | "marketing">): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("consent", "update", choicesToGtagConsent(choices));
}

export function hasAnalyticsConsent(): boolean {
  return readCookieConsent()?.analytics === true;
}

export function hasMarketingConsent(): boolean {
  return readCookieConsent()?.marketing === true;
}

export const COOKIE_SETTINGS_EVENT = "livendia:cookie-settings";

export function openCookieSettings(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(COOKIE_SETTINGS_EVENT));
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
