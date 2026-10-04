import Script from "next/script";
import { GTAG_CONSENT_DENIED } from "@/lib/cookie-consent";
import { getGaMeasurementId } from "@/lib/ga-measurement-id";
import { getGoogleAdsId } from "@/lib/google-ads-id";

/**
 * Google tag (gtag.js) → GA4 + Google Ads (AW-). Consent Mode v2: denegado por defecto hasta banner.
 */
export function GoogleAnalytics() {
  const gaId = getGaMeasurementId();
  const adsId = getGoogleAdsId();
  const loaderId = adsId ?? gaId;
  if (!loaderId) return null;

  const configLines = [
    gaId ? `gtag('config', '${gaId}', { anonymize_ip: true });` : null,
    adsId ? `gtag('config', '${adsId}');` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const denied = GTAG_CONSENT_DENIED;

  return (
    <>
      <Script id="google-consent-default" strategy="beforeInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: '${denied.analytics_storage}',
  ad_storage: '${denied.ad_storage}',
  ad_user_data: '${denied.ad_user_data}',
  ad_personalization: '${denied.ad_personalization}',
  wait_for_update: 500
});
        `.trim()}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
gtag('js', new Date());
${configLines}
        `.trim()}
      </Script>
    </>
  );
}
