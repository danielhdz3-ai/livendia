import { PublicHeader } from "@/components/public-header";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { SiteFooter } from "@/components/site-footer";
import { getPublicServices } from "@/lib/catalog";
import { getContactPhoneDisplay, getContactPhoneTelHref } from "@/lib/contact";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Shield, Users, Clock, CheckCircle, AlertCircle, MessageCircle, Phone, FileText, Wrench } from "lucide-react";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";

/**
 * ISR: revalida cada 5 min para que los precios/estado del catalogo
 * (getPublicServices, cliente Supabase anonimo) no queden fijados hasta
 * el proximo despliegue. Cambiar este numero (segundos) si se necesita
 * otra frecuencia -- ver SEO_ROADMAP.md.
 */
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Administración de alquileres para propietarios desde 49 €/mes",
  description:
    "Delega el contacto con el inquilino: incidencias, reparaciones, renovaciones y mediación. Sin permanencia. Gestoría inmobiliaria Livendia.",
  alternates: { canonical: `${getSiteUrl()}/servicios/administracion-alquiler` },
};

export default async function AdministracionAlquilerPage() {
  const services = await getPublicServices();
  const rentalService = services.find((s) => s.slug === "administracion-alquiler") ?? null;
  const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
  const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

  const howItWorks = [
    {
      icon: Users,
      step: "1",
      title: "Nos convertimos en tu intermediario",
      description:
        "Desde el primer día, Livendia es el único punto de contacto entre tú y tu inquilino. No recibirás llamadas, emails ni mensajes directos.",
    },
    {
      icon: MessageCircle,
      step: "2",
      title: "Gestionamos todas las comunicaciones",
      description:
        "El inquilino se comunica exclusivamente con nosotros para cualquier consulta, petición o incidencia. Filtros profesionales garantizan tu tranquilidad.",
    },
    {
      icon: Wrench,
      step: "3",
      title: "Resolvemos y coordinamos",
      description:
        "Cuando surge un problema, contactamos empresas, coordinamos reparaciones y hacemos seguimiento hasta que todo esté resuelto.",
    },
    {
      icon: FileText,
      step: "4",
      title: "Te mantenemos informado",
      description:
        "Solo te contactamos para lo importante: pagos recibidos, decisiones que requieren tu aprobación o novedades relevantes del contrato.",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Cero contacto con el inquilino",
      description: "Todas las comunicaciones pasan por nosotros. Tú te mantienes completamente al margen.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Wrench,
      title: "Gestión de incidencias",
      description: "Coordinamos reparaciones, contratamos empresas y hacemos seguimiento hasta la resolución.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Clock,
      title: "Control de fechas clave",
      description: "Seguimiento de renovaciones, actualizaciones de renta, vencimientos y plazos legales.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Users,
      title: "Mediación profesional",
      description: "Si surge cualquier conflicto o discrepancia, nuestro equipo lo gestiona con criterio profesional.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: AlertCircle,
      title: "Alertas inteligentes",
      description: "Te informamos solo de lo crítico: pagos, decisiones importantes o novedades que requieran acción.",
      color: "from-violet-500 to-violet-600",
    },
    {
      icon: Phone,
      title: "Atención continua al inquilino",
      description: "Respondemos dudas, tramitamos peticiones y gestionamos la relación día a día de forma profesional.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const testimonials = [
    {
      quote: "Llevaba meses con un inquilino conflictivo. Desde que Livendia gestiona el alquiler, no he vuelto a tener ningún problema directo. Ellos median todo.",
      author: "Carlos M.",
      role: "Propietario, Madrid",
    },
    {
      quote: "Lo mejor es no tener que estar pendiente. Me notifican cuando hay algo importante, pero el resto lo llevan ellos. Merecen cada euro.",
      author: "Ana P.",
      role: "Propietaria, Barcelona",
    },
  ];

  return (
    <ServicePurchaseProvider service={rentalService}>
      {rentalService ? <ServiceStructuredDataFromCatalog service={rentalService} /> : null}
      <div className="flex min-h-screen flex-col bg-white">
        <PublicHeader />

        <main className="flex-1">
        {/* Hero Section - Estilo Inmonest */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] text-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[650px]">
              {/* Contenido izquierda */}
              <div className="px-6 py-16 lg:px-12 lg:py-24 flex flex-col justify-center">
                <div className="inline-block self-start rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-sm mb-8">
                  Servicio destacado
                </div>
                
                <h1 className="text-2xl font-bold leading-snug sm:text-4xl lg:text-7xl">
                  Administración de Alquileres
                </h1>
                
                <p className="mt-6 text-xl leading-relaxed text-blue-50">
                  Olvídate de llamadas, reclamaciones y gestiones. Nosotros somos el punto de contacto con tu inquilino.
                </p>

                <div className="mt-10 flex items-baseline gap-3">
                  <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">49 €</span>
                  <div className="text-lg text-blue-100">
                    <div>/mes · IVA incluido</div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-cyan-300 flex-shrink-0" />
                    <span className="text-lg">Cero contacto con el inquilino</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-cyan-300 flex-shrink-0" />
                    <span className="text-lg">Gestión de incidencias y reparaciones</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-cyan-300 flex-shrink-0" />
                    <span className="text-lg">Seguimiento de renovaciones y mediación</span>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <ContratarServicioButton className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1E3A8A] shadow-xl transition hover:scale-105 hover:bg-blue-50">
                    Contratar ahora
                  </ContratarServicioButton>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold transition hover:bg-white/10"
                  >
                    Más información — WhatsApp
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-blue-100">
                  <a
                    href={getContactPhoneTelHref()}
                    className="inline-flex items-center gap-2 font-semibold text-white hover:text-cyan-200"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                    <span>Llamar: {getContactPhoneDisplay()}</span>
                  </a>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Imagen derecha */}
              <div className="relative h-44 sm:h-56 lg:h-auto">
                <Image
                  src="/images/modelo3.jpg"
                  alt="Confianza que se construye"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Qué incluye el servicio */}
        <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 pb-20 pt-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
                ¿Qué incluye el servicio?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#64748b]">
                Una gestión completa para que te despreocupes de todo lo relacionado con tu alquiler
              </p>
              <p className="mx-auto mt-3 text-sm font-medium text-[#475569]">
                Sin permanencia. Sin costes ocultos. Sin sorpresas.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200 transition-all hover:shadow-2xl hover:ring-[#1A4FBF]"
                  >
                    <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${benefit.color} p-4`}>
                      <Icon className="h-8 w-8 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-[#1E293B]">{benefit.title}</h3>
                    <p className="mt-3 leading-relaxed text-[#475569]">
                      {benefit.description}
                    </p>
                    {/* Decorative corner */}
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-[#1A4FBF]/5 to-transparent"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="border-b border-slate-200 bg-white px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
                ¿Cómo funciona?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#64748b]">
                Cuatro pasos simples para delegar toda la gestión de tu alquiler
              </p>
            </div>

            <div className="mt-16 space-y-12">
              {howItWorks.map((item, idx) => {
                const Icon = item.icon;
                const isEven = idx % 2 === 0;
                
                return (
                  <div
                    key={item.step}
                    className={`grid items-center gap-8 lg:grid-cols-2 ${!isEven ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] text-2xl font-extrabold text-white shadow-lg">
                          {item.step}
                        </div>
                        <h3 className="text-2xl font-bold text-[#1E293B] lg:text-3xl">{item.title}</h3>
                      </div>
                      <p className="mt-4 text-lg leading-relaxed text-[#475569]">
                        {item.description}
                      </p>
                    </div>

                    <div className={`relative ${isEven ? "" : "lg:order-1"}`}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
                        <Image
                          src={[
                            "/images/gestoria.jpg",
                            "/images/familia2.jpg",
                            "/images/equipo1.jpg",
                            "/images/gestoria5.jpg"
                          ][idx]}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                        />
                      </div>
                      {/* Icon badge */}
                      <div className="absolute -right-4 -top-4 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-200">
                        <Icon className="h-8 w-8 text-[#06B6D4]" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Plataforma cliente */}

        {/* Testimonios */}
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
                Lo que dicen nuestros clientes
              </h2>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200"
                >
                  <div className="flex gap-1 text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-lg italic leading-relaxed text-[#475569]">
                    <span aria-hidden>&ldquo;</span>
                    {testimonial.quote}
                    <span aria-hidden>&rdquo;</span>
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#1A4FBF] to-[#06B6D4]"></div>
                    <div>
                      <p className="font-semibold text-[#1E293B]">{testimonial.author}</p>
                      <p className="text-sm text-[#64748b]">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exclusiones */}
        <section className="border-b border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-200">
                  <AlertCircle className="h-6 w-6 text-amber-900" strokeWidth={2} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1E293B]">Exclusiones del servicio</h3>
                <p className="mt-2 leading-relaxed text-[#475569]">
                  * El servicio no incluye procesos judiciales. Para impagos o desahucios disponemos de servicio adicional de asesoramiento legal que podemos coordinar según necesidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6">
          <p className="mx-auto max-w-6xl text-center text-sm text-[#64748B]">
            ¿Primera vez? Lee la guía{" "}
            <Link href="/para-propietarios" className="font-semibold text-[#1A4FBF] hover:underline">
              Para propietarios
            </Link>
            .
          </p>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-20 text-white sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-extrabold sm:text-4xl lg:text-5xl">
              ¿Listo para despreocuparte?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-blue-50">
              Contrata ahora y empieza a disfrutar de tu alquiler sin complicaciones. Sin permanencia, puedes cancelar cuando quieras.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ContratarServicioButton className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] px-10 py-5 text-lg font-bold text-[#1E293B] shadow-2xl transition hover:scale-105">
                <span>Contratar por 49 €/mes</span>
                <CheckCircle className="h-6 w-6" aria-hidden />
              </ContratarServicioButton>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-10 py-5 text-lg font-semibold hover:bg-white/10"
              >
                <span>Ver todos los servicios</span>
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Sin permanencia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Cancela cuando quieras</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>+500 contratos gestionados</span>
              </div>
            </div>
          </div>
        </section>
        </main>
        <ServiceLandingSharedSections />


        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
