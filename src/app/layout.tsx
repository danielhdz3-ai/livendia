import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import { AnalyticsBootstrap } from "@/components/analytics-bootstrap";
import { GtmScripts } from "@/components/gtm-scripts";
import { WebsiteStructuredData } from "@/components/website-structured-data";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = getSiteUrl();
const googleVerify = process.env.GOOGLE_SITE_VERIFICATION?.trim();

const siteDescription =
  "Contratos de alquiler (LAU, habitación, temporada), arras y compraventa, y administración de alquileres. Gestores expertos, proceso digital y pago seguro en España.";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1E293B]">
        <WebsiteStructuredData />
        <GtmScripts />
        <AnalyticsBootstrap />
        {children}
      </body>
    </html>
  );
}
