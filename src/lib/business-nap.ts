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

/** Despacho Livendia (Barcelona · Les Corts). Env vars pueden sobrescribir. */
export const BUSINESS_ADDRESS_DEFAULTS = {
  streetAddress: "Carrer de Mejía Lequerica, 44",
  addressLocality: "Barcelona",
  addressRegion: "Barcelona",
  postalCode: "08028",
  addressCountry: "ES",
  neighborhood: "Les Corts",
} as const;

/** Coordenadas aproximadas del despacho (Mejía Lequerica 44). */
export const BUSINESS_GEO = {
  latitude: 41.383037,
  longitude: 2.1259378,
} as const;

function envOrDefault(envKey: string, fallback: string): string {
  const value = process.env[envKey]?.trim();
  return value || fallback;
}

export function getBusinessStreetAddress(): string {
  return envOrDefault("NEXT_PUBLIC_BUSINESS_STREET_ADDRESS", BUSINESS_ADDRESS_DEFAULTS.streetAddress);
}

export function getBusinessAddressLocality(): string {
  return envOrDefault("NEXT_PUBLIC_BUSINESS_ADDRESS_LOCALITY", BUSINESS_ADDRESS_DEFAULTS.addressLocality);
}

export function getBusinessAddressRegion(): string {
  return envOrDefault("NEXT_PUBLIC_BUSINESS_ADDRESS_REGION", BUSINESS_ADDRESS_DEFAULTS.addressRegion);
}

export function getBusinessPostalCode(): string {
  return envOrDefault("NEXT_PUBLIC_BUSINESS_POSTAL_CODE", BUSINESS_ADDRESS_DEFAULTS.postalCode);
}

export function getBusinessAddressCountry(): string {
  return envOrDefault("NEXT_PUBLIC_BUSINESS_ADDRESS_COUNTRY", BUSINESS_ADDRESS_DEFAULTS.addressCountry);
}

/** Línea legible para UI: Calle, barrio, CP Ciudad */
export function getBusinessAddressDisplayLine(): string {
  const street = getBusinessStreetAddress();
  const locality = getBusinessAddressLocality();
  const postal = getBusinessPostalCode();
  const neighborhood = BUSINESS_ADDRESS_DEFAULTS.neighborhood;
  return `${street}, ${neighborhood}, ${postal} ${locality}`;
}

/** Query para Google Maps / OpenStreetMap. */
export function getBusinessMapsQuery(): string {
  return `${getBusinessStreetAddress()}, ${getBusinessPostalCode()} ${getBusinessAddressLocality()}, Spain`;
}

export function getBusinessMapsEmbedUrl(): string {
  const q = encodeURIComponent(getBusinessMapsQuery());
  return `https://www.google.com/maps?q=${q}&hl=es&z=16&output=embed`;
}

export function getBusinessMapsExternalUrl(): string {
  const q = encodeURIComponent(getBusinessMapsQuery());
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

/** Dirección postal (ficha Google Business / LocalBusiness). */
export function buildBusinessPostalAddress(): Record<string, string> {
  return {
    "@type": "PostalAddress",
    streetAddress: getBusinessStreetAddress(),
    addressLocality: getBusinessAddressLocality(),
    addressRegion: getBusinessAddressRegion(),
    postalCode: getBusinessPostalCode(),
    addressCountry: getBusinessAddressCountry(),
  };
}

export function buildBusinessGeoCoordinates(): Record<string, string | number> {
  return {
    "@type": "GeoCoordinates",
    latitude: BUSINESS_GEO.latitude,
    longitude: BUSINESS_GEO.longitude,
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
