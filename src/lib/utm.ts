const STORAGE_KEY = "livendia_utm_v1";

export type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
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

export function captureUtmFromLocation(): void {
  if (typeof window === "undefined") return;
  const fresh = parseUtmFromSearch(window.location.search);
  if (Object.keys(fresh).length === 0) return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ ...fresh, captured_at: Date.now() }));
  } catch {
    /* quota / private mode */
  }
}

export function getStoredUtm(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as UtmParams & { captured_at?: number };
    const out: UtmParams = {};
    for (const key of UTM_KEYS) {
      if (parsed[key]) out[key] = parsed[key];
    }
    return out;
  } catch {
    return {};
  }
}

/** Para metadata Stripe (máx. ~500 chars por valor; solo strings cortas). */
export function utmForStripeMetadata(): Record<string, string> {
  const u = getStoredUtm();
  const meta: Record<string, string> = {};
  if (u.utm_source) meta.utm_source = u.utm_source.slice(0, 200);
  if (u.utm_medium) meta.utm_medium = u.utm_medium.slice(0, 200);
  if (u.utm_campaign) meta.utm_campaign = u.utm_campaign.slice(0, 200);
  if (u.utm_term) meta.utm_term = u.utm_term.slice(0, 200);
  if (u.utm_content) meta.utm_content = u.utm_content.slice(0, 200);
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
