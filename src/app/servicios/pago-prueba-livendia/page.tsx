import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  PAGO_PRUEBA_LIVENDIA_PRICE_LABEL,
  PAGO_PRUEBA_LIVENDIA_SLUG,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, CreditCard, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: `Pago de prueba — ${PAGO_PRUEBA_LIVENDIA_PRICE_LABEL} | Livendia`,
  description:
    `Servicio temporal de ${PAGO_PRUEBA_LIVENDIA_PRICE_LABEL} para verificar registro, pago con Stripe y confirmación de pedido en Livendia.`,
};

const STEPS = [
  "Regístrate o inicia sesión con un usuario nuevo",
  "Pulsa «Contratar» y completa tus datos",
  "Paga con tarjeta en Stripe (modo live o test según entorno)",
  "Comprueba el email de confirmación y el pedido en tu panel",
];

export default async function PagoPruebaLivendiaPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === PAGO_PRUEBA_LIVENDIA_SLUG) ?? null;
  const priceLabel = resolveServicePriceLabel(service, PAGO_PRUEBA_LIVENDIA_PRICE_LABEL);

  return (
    <ServicePurchaseProvider service={service}>
      <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
        <PublicHeader />
        <main className="flex-1">
          <section className="border-b border-slate-200 bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-16 text-white sm:px-6 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                  <div className="inline-block rounded-full bg-amber-400/90 px-4 py-1.5 text-sm font-semibold text-amber-950">
                    Prueba interna
                  </div>
                  <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                    Pago de prueba Livendia
                  </h1>
                  <p className="mt-5 text-xl leading-relaxed text-blue-100">
                    {service?.description ??
                      "Verifica que el flujo completo — registro, checkout y confirmación — funciona correctamente."}
                  </p>

                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{priceLabel}</span>
                    <span className="text-lg text-blue-200">IVA incluido</span>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarServicioButton
                      disabled={!service}
                      className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50 disabled:opacity-60"
                    >
                      Contratar por {priceLabel}
                    </ContratarServicioButton>
                    <Link
                      href="/register?next=/servicios/pago-prueba-livendia"
                      className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      Crear cuenta nueva
                    </Link>
                  </div>
                </div>

                <div className="relative h-[320px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20 md:h-[400px]">
                  <Image
                    src="/images/gestoria.jpg"
                    alt="Pago de prueba Livendia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
                <CreditCard className="h-8 w-8 text-[#1A4FBF]" />
                <h2 className="mt-4 text-lg font-bold text-[#1E293B]">Checkout real</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  Usa el mismo flujo de pago que el resto de servicios: modal, Stripe Checkout y página de gracias.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
                <Shield className="h-8 w-8 text-[#1A4FBF]" />
                <h2 className="mt-4 text-lg font-bold text-[#1E293B]">Sin prestación</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  No se tramita ningún expediente. Solo sirve para validar que el cobro y el pedido se registran bien.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
                <CheckCircle className="h-8 w-8 text-[#1A4FBF]" />
                <h2 className="mt-4 text-lg font-bold text-[#1E293B]">Qué revisar</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  Email de confirmación, pedido en el panel, webhook de Stripe y estado pagado en Supabase.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-white p-8 shadow ring-1 ring-slate-200">
              <h2 className="text-xl font-bold text-[#1E293B]">Pasos recomendados</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-[#475569]">
                {STEPS.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
