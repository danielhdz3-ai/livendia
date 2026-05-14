import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = getSiteUrl();
const googleVerify = process.env.GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Livendia — Gestoría inmobiliaria digital",
    template: "%s — Livendia",
  },
  description:
    "Administración de alquiler y servicios inmobiliarios profesionales. Contratos, arras, reservas y acompañamiento hasta escritura.",
  robots: { index: true, follow: true },
  ...(googleVerify ? { verification: { google: googleVerify } } : {}),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Livendia",
    title: "Livendia — Gestoría inmobiliaria digital",
    description:
      "Administración de alquiler y servicios inmobiliarios profesionales. Contratos, arras, reservas y acompañamiento hasta escritura.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Livendia — Gestoría inmobiliaria digital",
    description:
      "Gestoría inmobiliaria: contratos LAU, arras, compraventa y administración de alquiler.",
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
        {children}
      </body>
    </html>
  );
}
