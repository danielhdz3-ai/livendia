import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Shield, Clock, Users, AlertTriangle, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "Administración de Alquileres — Livendia",
  description:
    "Gestión completa de tu alquiler por 49€/mes. Sin contacto con el inquilino, gestión de incidencias, renovaciones y mediación.",
};

export default function AdministracionAlquilerPage() {
  const features = [
    {
      icon: Users,
      title: "Cero contacto con el inquilino",
      description: "Todas las comunicaciones pasan por nosotros. Tú te mantienes al margen.",
    },
    {
      icon: AlertTriangle,
      title: "Gestión de incidencias",
      description: "Coordinamos reparaciones y contratamos empresas cuando algo necesita arreglarse.",
    },
    {
      icon: Clock,
      title: "Seguimiento del contrato",
      description: "Controlamos fechas de renovación, actualizaciones de renta y vencimientos.",
    },
    {
      icon: Shield,
      title: "Mediación de conflictos",
      description: "Si surge cualquier discrepancia con el inquilino, lo gestionamos nosotros.",
    },
    {
      icon: CheckCircle,
      title: "Alertas y avisos",
      description:
        "Te informamos solo de lo que importa: pagos, novedades relevantes o decisiones que requieran tu OK.",
    },
    {
      icon: Headphones,
      title: "Atención al inquilino",
      description: "Respondemos dudas, tramitamos peticiones y gestionamos la relación día a día.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
      <PublicHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-slate-200 bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-16 text-white sm:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Administración de Alquileres
              </h1>
              <p className="mt-5 text-xl leading-relaxed text-blue-100">
                Olvídate de llamadas, reclamaciones y gestiones. Nosotros somos el punto de contacto
                entre tú y tu inquilino. <strong className="text-white">Tú solo cobras.</strong>
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold">49 €</span>
                  <span className="text-lg text-blue-200">/ mes · IVA incluido</span>
                </div>
              </div>

              <p className="mt-4 text-sm text-blue-200">
                Sin permanencia. Sin costes ocultos. Sin sorpresas.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/login?next=/dashboard"
                  className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50"
                >
                  Contratar por 49 €/mes
                </Link>
                <a
                  href="https://wa.me/34XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Características */}
        <section className="px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-[#1E293B]">
              ¿Qué incluye el servicio?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#64748b]">
              Una gestión completa para que te despreocupes de todo lo relacionado con tu alquiler.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200 transition-shadow hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06B6D4]/10">
                          <Icon className="h-6 w-6 text-[#06B6D4]" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#1E293B]">{feature.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Nota legal */}
        <section className="border-t border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-200">
                  <span className="text-sm font-bold text-amber-900">!</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#1E293B]">Exclusiones del servicio</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                  * El servicio no incluye procesos judiciales. Para impagos o desahucios disponemos
                  de servicio adicional de asesoramiento legal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-8 py-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold">¿Listo para despreocuparte?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Contrata ahora y empieza a disfrutar de tu alquiler sin complicaciones.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/login?next=/dashboard"
                className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50"
              >
                Contratar ahora
              </Link>
              <Link
                href="/servicios"
                className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
              >
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
