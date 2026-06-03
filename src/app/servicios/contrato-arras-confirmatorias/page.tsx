import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Lock, FileText, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contrato de arras confirmatorias",
  description:
    "Mayor seguridad jurídica para ambas partes. Obliga a completar la compraventa. 145€ IVA incluido.",
};

export default async function ArrasConfirmatoriasPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "contrato-arras-confirmatorias") ?? null;

  const features = [
    {
      icon: Lock,
      title: "Obligación de compra",
      description:
        "Ninguna de las partes puede desistir. La compraventa debe formalizarse obligatoriamente.",
    },
    {
      icon: FileText,
      title: "Mayor seguridad jurídica",
      description: "Proporciona certeza total de que la operación se completará en los términos pactados.",
    },
    {
      icon: Clock,
      title: "Entrega rápida",
      description: "Documento listo en 24-48h laborables tras recibir toda la información.",
    },
    {
      icon: CheckCircle,
      title: "Asesoramiento completo",
      description: "Te explicamos las implicaciones y te ayudamos a elegir el mejor tipo de arras.",
    },
  ];

  return (
    <ServicePurchaseProvider service={service}>
    <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
      <PublicHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-slate-200 bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-16 text-white sm:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <div className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
                  Compraventa inmobiliaria
                </div>
                <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Contrato de Arras Confirmatorias
                </h1>
                <p className="mt-5 text-xl leading-relaxed text-blue-100">
                  Mayor seguridad jurídica para ambas partes. Obliga a completar la compraventa.
                </p>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">145 €</span>
                  <span className="text-lg text-blue-200">IVA incluido</span>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                    Contratar por 145 €
                  </ContratarServicioButton>
                  <Link
                    href="/servicios"
                    className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                  >
                    Ver todos los servicios
                  </Link>
                </div>
              </div>

              <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20">
                <Image
                  src="/images/contratos7.jpg"
                  alt="Contrato de arras confirmatorias"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Características */}
        <section className="px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-[#1E293B]">
              ¿Qué incluye este servicio?
            </h2>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200 transition-shadow hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06B6D4]/10">
                      <Icon className="h-6 w-6 text-[#06B6D4]" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Info adicional */}
        <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1E293B]">
              ¿Cuándo usar arras confirmatorias?
            </h2>
            <div className="mt-6 space-y-4 text-[#475569]">
              <p>
                Las arras confirmatorias vinculan de forma firme a ambas partes a completar la
                compraventa. A diferencia de las penitenciales, ninguna de las partes puede desistir
                del acuerdo:
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-green-50 p-6">
                  <h3 className="font-semibold text-[#1E293B]">Ventajas:</h3>
                  <ul className="mt-2 ml-6 list-disc space-y-2 text-sm">
                    <li>Certeza total de que la operación se completará</li>
                    <li>Ideal cuando ambas partes están totalmente seguras de la compra</li>
                    <li>Evita sorpresas de última hora</li>
                    <li>El comprador puede hacer inversiones o gestiones con total tranquilidad</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-amber-50 p-6">
                  <h3 className="font-semibold text-[#1E293B]">Importante:</h3>
                  <p className="mt-2 text-sm">
                    Si alguna de las partes incumple, la otra puede exigir el cumplimiento forzoso del
                    contrato mediante procedimiento judicial, o reclamar daños y perjuicios además de la
                    devolución de las arras.
                  </p>
                </div>
              </div>
              <p className="mt-6 rounded-lg border border-[#06B6D4] bg-cyan-50 p-4 text-sm">
                <strong>¿No estás seguro?</strong> Te asesoramos sobre qué tipo de arras es más
                adecuado según tu situación: penitenciales si quieres flexibilidad, o confirmatorias si
                buscas seguridad total.
              </p>
            </div>
          </div>
        </section>

        {/* Comparativa */}
        <section className="border-t border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1E293B]">Arras penitenciales vs confirmatorias</h2>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-6 py-4 text-left font-semibold text-[#1E293B]">Aspecto</th>
                    <th className="px-6 py-4 text-left font-semibold text-[#1E293B]">Penitenciales</th>
                    <th className="px-6 py-4 text-left font-semibold text-[#1E293B]">Confirmatorias</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-6 py-4 font-medium text-[#475569]">Derecho a desistir</td>
                    <td className="px-6 py-4 text-[#475569]">Sí, con penalización</td>
                    <td className="px-6 py-4 text-[#475569]">No</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-[#475569]">Obligación de compra</td>
                    <td className="px-6 py-4 text-[#475569]">No vinculante</td>
                    <td className="px-6 py-4 text-[#475569]">Vinculante</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-[#475569]">Seguridad</td>
                    <td className="px-6 py-4 text-[#475569]">Media</td>
                    <td className="px-6 py-4 text-[#475569]">Máxima</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-[#475569]">Flexibilidad</td>
                    <td className="px-6 py-4 text-[#475569]">Alta</td>
                    <td className="px-6 py-4 text-[#475569]">Baja</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Galería */}
        <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-[#1E293B]">Nuestro equipo</h2>
            <p className="mt-3 text-[#475569]">
              Profesionales especializados en compraventa inmobiliaria.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {["/images/familia2.jpg", "/images/gestoria.jpg", "/images/amigos.jpg"].map(
                (src, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200"
                  >
                    <Image
                      src={src}
                      alt={`Equipo Livendia ${idx + 1}`}
                      fill
                      className="object-cover transition hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-8 py-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold">¿Necesitas arras confirmatorias?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Máxima seguridad jurídica para tu compraventa inmobiliaria.
            </p>
            <div className="mt-8">
              <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                Contratar ahora
              </ContratarServicioButton>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
    </ServicePurchaseProvider>
  );
}
