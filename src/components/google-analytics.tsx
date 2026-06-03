import Script from "next/script";
import { getGaMeasurementId } from "@/lib/ga-measurement-id";

/**
 * Google tag (gtag.js) → GA4. Tiene prioridad sobre GTM (ver gtm-scripts.tsx).
 */
export function GoogleAnalytics() {
  const gaId = getGaMeasurementId();
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="beforeInteractive"
      />
      <Script id="google-analytics-init" strategy="beforeInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');
        `.trim()}
      </Script>
    </>
  );
}
