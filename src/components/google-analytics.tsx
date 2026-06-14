import Script from "next/script";
import { getGaMeasurementId } from "@/lib/ga-measurement-id";
import { getGoogleAdsId } from "@/lib/google-ads-id";

/**
 * Google tag (gtag.js) → GA4 + Google Ads (AW-). Un solo gtag, sin doble carga.
 * GTM solo si no hay GA4 directo (ver gtm-scripts.tsx).
 */
export function GoogleAnalytics() {
  const gaId = getGaMeasurementId();
  const adsId = getGoogleAdsId();
  // Google Ads verifica que gtag/js?id=AW-… esté en el HTML (no basta con gtag config).
  const loaderId = adsId ?? gaId;
  if (!loaderId) return null;

  const configLines = [
    gaId ? `gtag('config', '${gaId}');` : null,
    adsId ? `gtag('config', '${adsId}');` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
        strategy="beforeInteractive"
      />
      <Script id="google-analytics-init" strategy="beforeInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${configLines}
        `.trim()}
      </Script>
    </>
  );
}
