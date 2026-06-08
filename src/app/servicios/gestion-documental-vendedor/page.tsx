import Link from "next/link";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL,
  GESTION_DOCUMENTAL_VENDEDOR_SLUG,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import {
  GESTION_DOCUMENTAL_VENDEDOR_LOCAL_BASE,
  getPublishedGestionDocumentalVendedorLocalCities,
  localGestionDocumentalVendedorHref,
} from "@/lib/gestion-documental-vendedor-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { CheckCircle, MessageCircle } from "lucide-react";

const canonical = `${getSiteUrl()}${GESTION_DOCUMENTAL_VENDEDOR_LOCAL_BASE}`;
const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hola, vendí mi piso entre particulares y quiero contratar el gestor documental Livendia (350 €) de arras a escritura.",
)}`;

export const metadata: Metadata = {
  title: `Gestor documental vendedor — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
  description:
    "Vendiste entre particulares y ya tienes comprador: un gestor obtiene y verifica toda la documentación de arras a escritura. 350 € IVA incl. Gestor dedicado en 24 h.",
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Gestor documental vendedor — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
    description:
      "Gestión documental para vendedores particulares: nota simple, comunidad, ITE, energético, hipoteca e informe semáforo hasta notaría.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

const HIGHLIGHTS = [
  "Gestor dedicado asignado en 24 h laborables",
  "Checklist personalizado según tu inmueble",
  "Nota simple, comunidad, ITE y certificado energético",
  "Coordinación hipoteca pendiente con tu banco",
  "Informe semáforo y asesoramiento hasta escritura",
] as const;

export default async function GestionDocumentalVendedorPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === GESTION_DOCUMENTAL_VENDEDOR_SLUG) ?? null;
  const priceLabel = resolveServicePriceLabel(service, GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL);
  const publishedCities = getPublishedGestionDocumentalVendedorLocalCities();

  return (
    <ServicePurchaseProvider service={service}>
      {service ? <ServiceStructuredDataFromCatalog service={service} /> : null}
      <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
        <PublicHeader />
        <main className="flex-1">
          <section className="border-b border-slate-200 bg-gradient-to-br from-[#1E3A8A] via-[#1A4FBF] to-[#2563EB] px-4 py-16 text-white sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
                Vendedor particular · Arras a escritura
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Gestor documental para vendedor — de arras a escritura
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                Ya tienes comprador y has firmado (o vas a firmar) arras. Nosotros gestionamos toda la
                documentación para que llegues a notaría sin retrasos ni sorpresas.
              </p>
              <div className="mt-6 text-4xl font-extrabold">{priceLabel}</div>
              <p className="text-blue-200">IVA incluido · Pago único</p>
              <ul className="mx-auto mt-8 max-w-lg space-y-2 text-left text-blue-50">
                {HIGHLIGHTS.map((line) => (
                  <li key={line} className="flex gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                  Contratar gestor — {priceLabel}
                </ContratarServicioButton>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </section>

          {publishedCities.length > 0 ? (
            <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
              <h2 className="text-2xl font-bold text-[#1E293B]">Gestor documental por ciudad</h2>
              <p className="mt-2 max-w-3xl text-[#64748b]">
                Contenido local con casuística documental específica de cada mercado. Publicamos ciudades de
                forma gradual.
              </p>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {publishedCities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={localGestionDocumentalVendedorHref(c.slug)}
                      className="block rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-[#1A4FBF]"
                    >
                      <span className="text-lg font-bold text-[#1E293B]">{c.city}</span>
                      <span className="mt-1 block text-sm text-[#64748b]">{c.schemaAdministrativeArea}</span>
                      <span className="mt-3 inline-flex text-sm font-semibold text-[#1A4FBF]">
                        Ver landing en {c.city} →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="border-t border-slate-200 bg-white px-4 py-10 sm:px-6">
            <p className="mx-auto max-w-3xl text-center text-sm text-[#64748b]">
              El contrato de arras no está incluido. Si lo necesitas,{" "}
              <Link href="/servicios/contrato-arras-local/barcelona" className="font-semibold text-[#1A4FBF] hover:underline">
                contrátalo por separado (145 €)
              </Link>
              . Para compradores, ver{" "}
              <Link
                href="/servicios/revision-documental-post-arras"
                className="font-semibold text-[#1A4FBF] hover:underline"
              >
                revisión documental post-arras
              </Link>
              .
            </p>
          </section>
        </main>
        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
