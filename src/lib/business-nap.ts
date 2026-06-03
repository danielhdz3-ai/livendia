/**
 * NAP y datos alineados con Google Business Profile (gestoría Livendia).
 * Fuente única para schema.org, footer y metadatos.
 */
import { getContactPhoneDisplay, getContactPhoneE164Plus, getContactPhoneTelHref } from "@/lib/contact";
import { getSiteUrl } from "@/lib/site-url";

export const BUSINESS_NAME = "Livendia";
export const BUSINESS_CATEGORY = "Gestoría inmobiliaria";
export const BUSINESS_EMAIL = "info@livendia.com";

/** Horario coherente con ficha Google (L–V, cierre 19:30) */
export const BUSINESS_OPENING_HOURS = {
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
  opens: "09:00",
  closes: "19:30",
};

export const BUSINESS_AREA_SERVED = ["España", "Portugal"] as const;

/** Dirección postal (ficha Google Business). Configurar en Vercel para LocalBusiness válido. */
export function buildBusinessPostalAddress(): Record<string, string> | null {
  const streetAddress = process.env.NEXT_PUBLIC_BUSINESS_STREET_ADDRESS?.trim();
  const addressLocality = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LOCALITY?.trim();
  const addressRegion = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_REGION?.trim();
  const postalCode = process.env.NEXT_PUBLIC_BUSINESS_POSTAL_CODE?.trim();
  const addressCountry = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_COUNTRY?.trim() || "ES";

  if (!streetAddress && !addressLocality) return null;

  return {
    "@type": "PostalAddress",
    ...(streetAddress ? { streetAddress } : {}),
    ...(addressLocality ? { addressLocality } : {}),
    ...(addressRegion ? { addressRegion } : {}),
    ...(postalCode ? { postalCode } : {}),
    addressCountry,
  };
}

export function getBusinessUrl(): string {
  return getSiteUrl().replace(/\/$/, "");
}

export function getWhatsAppNumberDigits(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
  return raw.replace(/\D/g, "") || "34600367742";
}

export function getWhatsAppHref(text?: string): string {
  const base = `https://wa.me/${getWhatsAppNumberDigits()}`;
  if (!text?.trim()) return base;
  return `${base}?text=${encodeURIComponent(text.trim())}`;
}

export const businessNap = {
  name: BUSINESS_NAME,
  category: BUSINESS_CATEGORY,
  url: getBusinessUrl,
  telephoneDisplay: getContactPhoneDisplay,
  telephoneE164: getContactPhoneE164Plus,
  telephoneTel: getContactPhoneTelHref,
  email: BUSINESS_EMAIL,
  whatsappHref: getWhatsAppHref,
  openingHours: BUSINESS_OPENING_HOURS,
  areaServed: BUSINESS_AREA_SERVED,
  /** Valoración visible en Google (actualizar cuando cambie) */
  aggregateRating: {
    ratingValue: 5,
    reviewCount: 3,
    bestRating: 5,
  },
} as const;
