import { PublicHeader } from "@/components/public-header";
import { ConsultaFiscalExamplePrintBar } from "@/components/consulta-fiscal-example-print-bar";
import { SiteFooter } from "@/components/site-footer";
import { CONSULTA_FISCAL_VENDEDOR_PATH } from "@/lib/catalog.public";
import { computeFiscalSellerEstimate } from "@/lib/fiscal-seller-calculator";
import { FISCAL_SELLER_PUBLIC_EXAMPLE_FIXTURE } from "@/lib/fiscal-seller-example-fixture";
import { renderFiscalMemoriaDocumentHtml } from "@/lib/fiscal-seller-memoria-render";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Ejemplo memoria consulta fiscal vendedor (ficticio) | Livendia",
  description:
    "Vista previa de memoria tributaria orientativa con datos ficticios. Barcelona, dos titulares. No es una plantilla editable ni una calculadora pública.",
  alternates: { canonical: `${getSiteUrl()}${CONSULTA_FISCAL_VENDEDOR_PATH}/ejemplo-memoria` },
};

export default function ConsultaFiscalEjemploMemoriaPage() {
  const result = computeFiscalSellerEstimate(FISCAL_SELLER_PUBLIC_EXAMPLE_FIXTURE);
  const html = renderFiscalMemoriaDocumentHtml(FISCAL_SELLER_PUBLIC_EXAMPLE_FIXTURE, result, {
    publicExample: true,
    watermark: "Ejemplo con datos ficticios",
  });

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <PublicHeader />
      <ConsultaFiscalExamplePrintBar backHref={CONSULTA_FISCAL_VENDEDOR_PATH} />
      <main className="flex-1">
        <div className="no-print border-b border-amber-200 bg-amber-50 px-4 py-2 text-center text-xs text-amber-900">
          Documento de muestra con datos inventados — no uses estas cifras para tu operación.{" "}
          <Link href={CONSULTA_FISCAL_VENDEDOR_PATH} className="font-semibold underline">
            Volver a la consulta fiscal
          </Link>
        </div>
        <iframe
          title="Ejemplo de memoria fiscal ficticia Livendia"
          srcDoc={html}
          className="min-h-[1400px] w-full border-0"
          sandbox=""
        />
      </main>
      <SiteFooter />
    </div>
  );
}