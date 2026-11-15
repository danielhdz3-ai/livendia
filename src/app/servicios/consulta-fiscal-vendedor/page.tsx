import { FaqSection } from "@/components/faq-section";
import { PublicHeader } from "@/components/public-header";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { SiteFooter } from "@/components/site-footer";
import {
  CONSULTA_FISCAL_VENDEDOR_FAQ,
  FISCAL_SELLER_DISCLAIMER,
  FISCAL_SELLER_RGPD_NOTICE,
} from "@/lib/consulta-fiscal-vendedor-content";
import { getMarketingPublicServices } from "@/lib/catalog";
import {
  CONSULTA_FISCAL_VENDEDOR_COMPLEX_PRICE_EUR,
  CONSULTA_FISCAL_VENDEDOR_EXTRA_OWNER_EUR,
  CONSULTA_FISCAL_VENDEDOR_PATH,
  CONSULTA_FISCAL_VENDEDOR_PRICE_LABEL,
  CONSULTA_FISCAL_VENDEDOR_SLUG,
  REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, CheckCircle2, FileText, Scale, XCircle } from "lucide-react";

export const revalidate = false;

export const metadata: Metadata = {
  title: `Cuánto te queda neto de tu venta — plusvalía e IRPF (${CONSULTA_FISCAL_VENDEDOR_PRICE_LABEL})`,
  description: `Consulta fiscal orientativa para vendedores post-arras: calcular plusvalía municipal en Barcelona y municipios, IRPF por titular y líquido aproximado. ${CONSULTA_FISCAL_VENDEDOR_PRICE_LABEL} IVA incl. Memoria PDF + videollamada.`,
  alternates: { canonical: `${getSiteUrl()}${CONSULTA_FISCAL_VENDEDOR_PATH}` },
  keywords: [
    "cuánto pago de plusvalía al vender",
    "impuestos al vender un piso",
    "calcular IRPF venta vivienda",
    "calculadora plusvalía municipal Barcelona",
    "consulta fiscal vendedor",
  ],
};

const INCLUDED = [
  "Plusvalía municipal (IIVTNU): método objetivo y real; se aplica la menor cuando procede",
  "IRPF orientativo por titular según % en escritura",
  "Escenarios: vivienda habitual, mayores de 65 años y reinversión",
  "Líquido aproximado: venta − hipoteca − gastos − plusvalía − IRPF",
  "Efecto de la fecha de escritura (coeficientes desde 1-dic-2026)",
  "Plazos orientativos tras la venta",
  "Memoria PDF con revisión humana obligatoria",
  "Videollamada de 30–45 min",
] as const;

const EXCLUDED = [
  "Redacción o revisión de reserva, arras o escritura",
  "Gestión de notaría, registro, comunidad o cancelación de hipoteca",
  "Presentación de autoliquidación de plusvalía o declaración de la renta",
  "Asesoramiento fiscal vinculante o representación tributaria",
] as const;

export default async function ConsultaFiscalVendedorPage() {
  const catalog = getMarketingPublicServices();
  const service = catalog.find((s) => s.slug === CONSULTA_FISCAL_VENDEDOR_SLUG) ?? null;
  const priceLabel = resolveServicePriceLabel(service, CONSULTA_FISCAL_VENDEDOR_PRICE_LABEL);

  return (
    <ServicePurchaseProvider service={service}>
      {service ? <ServiceStructuredDataFromCatalog service={service} path={CONSULTA_FISCAL_VENDEDOR_PATH} /> : null}
      <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
        <PublicHeader />
        <main className="flex-1">
          <section className="border-b border-slate-200 bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-16 text-white sm:px-6">
            <div className="mx-auto max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Vendedor · Post-arras</p>
              <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Cuánto te queda neto de tu venta
              </h1>
              <p className="mt-5 text-lg text-blue-100">
                Ya firmaste arras o tienes la venta acordada y quieres una estimación prudente de{" "}
                <strong>plusvalía municipal</strong> e <strong>IRPF</strong> antes de ir a notaría — sin contratar el
                servicio completo de gestión.
              </p>
              <p className="mt-4 text-4xl font-extrabold">
                {priceLabel} <span className="text-lg font-normal text-blue-200">IVA incl. (hasta 2 titulares)</span>
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ContratarServicioButton className="rounded-full bg-white px-8 py-4 font-bold text-[#1A4FBF]">
                  Contratar consulta
                </ContratarServicioButton>
                <Link
                  href="/servicios/servicio-completo-venta"
                  className="inline-flex items-center rounded-full border-2 border-white/80 px-6 py-4 text-sm font-semibold hover:bg-white/10"
                >
                  ¿Necesitas gestión hasta escritura? {SERVICIO_COMPLETO_CV_PRICE_LABEL}
                </Link>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="flex items-center gap-2 text-xl font-bold text-[#1E293B]">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" aria-hidden />
                  Qué incluye
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-[#475569]">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-emerald-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="flex items-center gap-2 text-xl font-bold text-[#1E293B]">
                  <XCircle className="h-6 w-6 text-red-500" aria-hidden />
                  Qué no incluye
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-[#475569]">
                  {EXCLUDED.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-red-500">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="flex items-center gap-2 text-lg font-bold text-[#1E293B]">
                <Scale className="h-5 w-5 text-[#1A4FBF]" aria-hidden />
                Precio y plazo
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-[#475569]">
                <li>
                  <strong>{CONSULTA_FISCAL_VENDEDOR_PRICE_LABEL}</strong> hasta 2 titulares y un inmueble (IVA incl.)
                </li>
                <li>
                  +{CONSULTA_FISCAL_VENDEDOR_EXTRA_OWNER_EUR} € por titular desde el 3.º;{" "}
                  {CONSULTA_FISCAL_VENDEDOR_COMPLEX_PRICE_EUR} € casos complejos
                </li>
                <li>No residentes fiscales: precio a consultar en info@livendia.com</li>
                <li>Plazo: 3–5 días laborables con documentación obligatoria completa</li>
              </ul>
              <p className="mt-4 text-sm text-[#64748b]">
                Complemento natural del catálogo post-arras (como la{" "}
                <Link href="/servicios/revision-documental-post-arras" className="font-semibold text-[#1A4FBF] hover:underline">
                  revisión documental del comprador ({REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL})
                </Link>
                ).
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex gap-3">
                <AlertCircle className="h-6 w-6 shrink-0 text-amber-700" aria-hidden />
                <div className="text-sm text-amber-900">
                  <p className="font-semibold">Disclaimer</p>
                  <p className="mt-2">{FISCAL_SELLER_DISCLAIMER}</p>
                  <p className="mt-2 text-xs">{FISCAL_SELLER_RGPD_NOTICE}</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="flex items-center gap-2 text-lg font-bold text-[#1E293B]">
                <FileText className="h-5 w-5 text-[#1A4FBF]" aria-hidden />
                Documentación necesaria
              </h2>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[#475569]">
                <li>Obligatoria: contrato de arras, escritura o nota simple, IBI/catastro (suelo), liquidación ITP/IVA compra</li>
                <li>Para IRPF: facturas notaría, registro, gestoría compra; facturas reformas</li>
                <li>Vivienda habitual: empadronamiento, suministros, cronología residencia</li>
                <li>Opcional: certificado saldo hipotecario</li>
              </ul>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <FaqSection items={[...CONSULTA_FISCAL_VENDEDOR_FAQ]} autoLinkPaa={false} />
            </div>
          </section>
        </main>

        <ServiceLandingSharedSections
          primarySlug={CONSULTA_FISCAL_VENDEDOR_SLUG}
          serviceLabel="Consulta fiscal vendedor"
          skipGestorPlatform
        />
        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}