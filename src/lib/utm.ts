const STORAGE_KEY = "livendia_utm_v1";

export type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

/** Atribución de sesión: UTM + landing de entrada + referrer. */
export type VisitorAttribution = UtmParams & {
  landing_path?: string;
  referrer?: string;
  referrer_host?: string;
  last_path?: string;
  session_started_at?: number;
  utm_captured_at?: number;
};

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export function parseUtmFromSearch(search: string): UtmParams {
  const params = new URLSearchParams(search);
  const out: UtmParams = {};
  for (const key of UTM_KEYS) {
    const v = params.get(key)?.trim();
    if (v) out[key] = v;
  }
  return out;
}

function readStoredAttribution(): VisitorAttribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as VisitorAttribution;
  } catch {
    return {};
  }
}

function writeStoredAttribution(data: VisitorAttribution): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* quota / private mode */
  }
}

/**
 * Captura UTM, landing de entrada (first-touch) y referrer en cada visita/navegación.
 * Llamar en layout con el pathname actual.
 */
export function captureVisitorAttribution(currentPath: string): void {
  if (typeof window === "undefined") return;

  const existing = readStoredAttribution();
  const freshUtm = parseUtmFromSearch(window.location.search);
  const now = Date.now();
  const next: VisitorAttribution = { ...existing };

  if (!next.landing_path) {
    next.landing_path = currentPath;
    next.session_started_at = now;
    const ref = document.referrer?.trim();
    if (ref) {
      next.referrer = ref.slice(0, 500);
      try {
        next.referrer_host = new URL(ref).hostname;
      } catch {
        /* referrer malformado */
      }
    }
  }

  next.last_path = currentPath;

  if (Object.keys(freshUtm).length > 0) {
    for (const key of UTM_KEYS) {
      if (freshUtm[key]) next[key] = freshUtm[key];
    }
    next.utm_captured_at = now;
  }

  writeStoredAttribution(next);
}

/** @deprecated Usar captureVisitorAttribution — mantiene compatibilidad. */
export function captureUtmFromLocation(): void {
  if (typeof window === "undefined") return;
  captureVisitorAttribution(window.location.pathname);
}

export function getStoredAttribution(): VisitorAttribution {
  return readStoredAttribution();
}

export function getStoredUtm(): UtmParams {
  const a = readStoredAttribution();
  const out: UtmParams = {};
  for (const key of UTM_KEYS) {
    if (a[key]) out[key] = a[key];
  }
  return out;
}

/** Payload seguro para APIs (contacto, etc.). */
export function getStoredAttributionForApi(): VisitorAttribution {
  const a = readStoredAttribution();
  return {
    utm_source: a.utm_source?.slice(0, 200),
    utm_medium: a.utm_medium?.slice(0, 200),
    utm_campaign: a.utm_campaign?.slice(0, 200),
    utm_term: a.utm_term?.slice(0, 200),
    utm_content: a.utm_content?.slice(0, 200),
    landing_path: a.landing_path?.slice(0, 300),
    referrer_host: a.referrer_host?.slice(0, 200),
    last_path: a.last_path?.slice(0, 300),
  };
}

/** Resumen legible para el comercial (WhatsApp). */
export function formatAttributionForWhatsApp(attribution?: VisitorAttribution): string | null {
  if (typeof window === "undefined") return null;
  const a = attribution ?? readStoredAttribution();
  const lines: string[] = [];

  const campaign: string[] = [];
  if (a.utm_source) campaign.push(a.utm_source);
  if (a.utm_medium) campaign.push(a.utm_medium);
  if (a.utm_campaign) campaign.push(a.utm_campaign);
  if (campaign.length > 0) lines.push(`Campaña: ${campaign.join(" · ")}`);

  if (a.landing_path) lines.push(`Landing: ${a.landing_path}`);

  if (a.referrer_host) {
    try {
      const ownHost = window.location.hostname;
      if (a.referrer_host !== ownHost) {
        lines.push(`Ref: ${a.referrer_host}`);
      }
    } catch {
      lines.push(`Ref: ${a.referrer_host}`);
    }
  }

  if (lines.length === 0) return null;
  return `\n\n(${lines.join(" | ")})`;
}

/** Resumen para emails internos (formulario contacto). */
export function formatAttributionForAdmin(attribution: VisitorAttribution): string {
  const lines: string[] = ["--- Origen del visitante ---"];
  if (attribution.landing_path) lines.push(`Landing de entrada: ${attribution.landing_path}`);
  if (attribution.last_path) lines.push(`Última página: ${attribution.last_path}`);
  if (attribution.utm_source) lines.push(`utm_source: ${attribution.utm_source}`);
  if (attribution.utm_medium) lines.push(`utm_medium: ${attribution.utm_medium}`);
  if (attribution.utm_campaign) lines.push(`utm_campaign: ${attribution.utm_campaign}`);
  if (attribution.utm_term) lines.push(`utm_term: ${attribution.utm_term}`);
  if (attribution.utm_content) lines.push(`utm_content: ${attribution.utm_content}`);
  if (attribution.referrer_host) lines.push(`Referrer: ${attribution.referrer_host}`);
  if (lines.length === 1) return "";
  return `\n\n${lines.join("\n")}`;
}

export function appendAttributionToWhatsAppMessage(message: string): string {
  const suffix = formatAttributionForWhatsApp();
  if (!suffix) return message;
  if (message.includes(suffix.trim())) return message;
  return `${message}${suffix}`;
}

/** Para metadata Stripe (máx. ~500 chars por valor; solo strings cortas). */
export function utmForStripeMetadata(): Record<string, string> {
  return attributionForStripeMetadata();
}

export function attributionForStripeMetadata(): Record<string, string> {
  const a = readStoredAttribution();
  const meta: Record<string, string> = {};
  if (a.utm_source) meta.utm_source = a.utm_source.slice(0, 200);
  if (a.utm_medium) meta.utm_medium = a.utm_medium.slice(0, 200);
  if (a.utm_campaign) meta.utm_campaign = a.utm_campaign.slice(0, 200);
  if (a.utm_term) meta.utm_term = a.utm_term.slice(0, 200);
  if (a.utm_content) meta.utm_content = a.utm_content.slice(0, 200);
  if (a.landing_path) meta.landing_path = a.landing_path.slice(0, 200);
  if (a.referrer_host) meta.referrer_host = a.referrer_host.slice(0, 200);
  return meta;
}

/** Enlaces de campaña (Ads, posts, GBP). */
export function buildCampaignUrl(
  path: string,
  campaign: {
    source: string;
    medium: string;
    campaign: string;
    content?: string;
    term?: string;
  },
): string {
  const base = path.startsWith("http") ? path : path.startsWith("/") ? path : `/${path}`;
  const url = new URL(base, "https://livendia.com");
  url.searchParams.set("utm_source", campaign.source);
  url.searchParams.set("utm_medium", campaign.medium);
  url.searchParams.set("utm_campaign", campaign.campaign);
  if (campaign.content) url.searchParams.set("utm_content", campaign.content);
  if (campaign.term) url.searchParams.set("utm_term", campaign.term);
  return url.pathname + url.search;
}
