import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import { AnalyticsBootstrap } from "@/components/analytics-bootstrap";
import { GoogleAnalytics } from "@/components/google-analytics";
import { GtmScripts } from "@/components/gtm-scripts";
import { WebsiteStructuredData } from "@/components/website-structured-data";
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button";
import { PublicMobileChrome } from "@/components/public-mobile-chrome";
import { ClientPanelShellRoot } from "@/components/client-panel-shell-root";
import { PwaRegister } from "@/components/pwa-register";
import { ToastProvider } from "@/components/toast-provider";
import { SITE_DEFAULT_DESCRIPTION } from "@/lib/site-default-description";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const siteUrl = getSiteUrl();
const googleVerify = process.env.GOOGLE_SITE_VERIFICATION?.trim();

const siteDescription = SITE_DEFAULT_DESCRIPTION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gestoría inmobiliaria online: contratos y administración de alquiler | Livendia",
    template: "%s | Livendia",
  },
  description: siteDescription,
  robots: { index: true, follow: true },
  ...(googleVerify ? { verification: { google: googleVerify } } : {}),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Livendia",
    title: "Gestoría inmobiliaria online | Livendia",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestoría inmobiliaria online | Livendia",
    description: siteDescription,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml", sizes: "any" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Livendia",
    statusBarStyle: "black-translucent",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full w-full max-w-full overflow-x-clip flex flex-col bg-white text-[#1E293B]">
        <WebsiteStructuredData />
        <GoogleAnalytics />
        <GtmScripts />
        <AnalyticsBootstrap />
        <ToastProvider>
          <ClientPanelShellRoot>
            {children}
          </ClientPanelShellRoot>
        </ToastProvider>
        <PwaRegister />
        <PublicMobileChrome />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
