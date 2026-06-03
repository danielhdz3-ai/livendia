import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_LABEL_COMPACT,
} from "@/lib/catalog.public";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Users, Clock, CheckCircle, AlertCircle, MessageCircle, FileText, Home, Eye, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicio completo de compra: de la reserva a la escritura",
  description:
    "Acompañamiento profesional completo en tu compra inmobiliaria. Desde la reserva hasta la escritura con gestor experto que cuida de tus intereses. 890€ todo incluido.",
};

const WA_SERVICIO_COMPLETO = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHrefServicioCompleto = `https://wa.me/${WA_SERVICIO_COMPLETO.replace(/\D/g, "")}`;

export default async function ServicioCompletoCompraPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "servicio-completo-compra") ?? null;
  const priceLabel = service
    ? `${(service.price_cents / 100).toFixed(0)} €`
    : SERVICIO_COMPLETO_CV_PRICE_LABEL;
  const priceLabelCompact = service
    ? `${(service.price_cents / 100).toFixed(0)}€`
    : SERVICIO_COMPLETO_CV_PRICE_LABEL_COMPACT;

  const howItWorks = [
    {
      icon: FileText,
      step: "1",
      title: "Revisión completa de la documentación",
      description:
        "Analizamos exhaustivamente el contrato de reserva, nota registral, cédula de habitabilidad y toda la documentación urbanística antes de que firmes nada.",
    },
    {
      icon: Shield,
      step: "2",
      title: "Te protegemos de cláusulas abusivas",
      description:
        "Revisamos contratos con agencias inmobiliarias, notas de encargo y honorarios. Identificamos y eliminamos cláusulas que perjudiquen tus intereses.",
    },
    {
      icon: Users,
      step: "3",
      title: "Gestor personal a tu disposición",
      description:
        "Tendrás un gestor experto asignado que resolverá tus dudas en cualquier momento. Estamos en contacto permanente durante todo el proceso de compra.",
    },
    {
      icon: Home,
      step: "4",
      title: "Acompañamiento hasta la escritura",
      description:
        "Te acompañamos desde la reserva, pasando por las arras, hasta el día de la firma en notaría. Coordinamos con todas las partes para que todo sea seguro.",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Gestor experto que cuida de ti",
      description: "Un profesional dedicado exclusivamente a proteger tus intereses durante toda la operación.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FileText,
      title: "Control documental completo",
      description: "Revisión y redacción de reserva, arras y coordinación de escritura. Todo bajo control profesional.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Eye,
      title: "Detección de cláusulas abusivas",
      description: "Identificamos y eliminamos cláusulas de agencias que puedan perjudicarte económicamente.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Scale,
      title: "Seguridad jurídica total",
      description: "Cada paso revisado por expertos en derecho inmobiliario para evitar sorpresas desagradables.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: MessageCircle,
      title: "Contacto permanente",
      description: "Resuelve tus dudas cuando las tengas. Tu gestor está disponible durante todo el proceso.",
      color: "from-violet-500 to-violet-600",
    },
    {
      icon: Clock,
      title: "Acompañamiento hasta el final",
      description: "Desde el primer día hasta la firma en notaría. Un proceso de compra más seguro y tranquilo.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const testimonials = [
    {
      quote: "Gracias a Livendia detectamos cláusulas en el contrato de la agencia que nos hubieran costado más de 3.000€. Valió cada euro del servicio.",
      author: "María L.",
      role: "Compradora, Valencia",
    },
    {
      quote: "Fue la primera vez que comprábamos. Nuestro gestor nos explicó todo paso a paso y nos dio seguridad en un proceso que nos daba miedo. Muy recomendable.",
      author: "Pedro y Carmen",
      role: "Compradores, Madrid",
    },
  ];

  return (
    <ServicePurchaseProvider service={service}>
      {service ? <ServiceStructuredDataFromCatalog service={service} /> : null}
      <div className="flex min-h-screen flex-col bg-white">
      <PublicHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] text-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[650px]">
              {/* Contenido izquierda */}
              <div className="px-6 py-16 lg:px-12 lg:py-24 flex flex-col justify-center">
                <div className="inline-block self-start rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-sm mb-8">
                  Producto estrella
                </div>
                
                <h1 className="text-2xl font-bold leading-snug sm:text-4xl lg:text-7xl">
                  Servicio Completo de Compra
                </h1>
                
                <p className="mt-6 text-xl leading-relaxed text-blue-50">
                  Un gestor experto te acompaña en todo el proceso: desde la reserva hasta la escritura. Control total, cláusulas revisadas y tranquilidad garantizada.
                </p>

                <div className="mt-10 flex items-baseline gap-3">
                  <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{priceLabel}</span>
                  <div className="text-lg text-blue-100">
                    <div>IVA incluido · Pago único</div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-cyan-300 flex-shrink-0" />
                    <span className="text-lg">Gestor personal dedicado a tu compra</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-cyan-300 flex-shrink-0" />
                    <span className="text-lg">Protección contra prácticas abusivas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-cyan-300 flex-shrink-0" />
                    <span className="text-lg">Revisión completa: reserva, arras y escritura</span>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <ContratarServicioButton className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1E3A8A] shadow-xl transition hover:scale-105 hover:bg-blue-50">
                    <span>Contratar ahora</span>
                  </ContratarServicioButton>
                  <a
                    href={waHrefServicioCompleto}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold transition hover:bg-white/10"
                  >
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Imagen derecha */}
              <div className="relative h-44 sm:h-56 lg:h-auto">
                <Image
                  src="/images/gestoria3.jpg"
                  alt="Servicio Completo de Compra"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 pb-20 pt-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
                ¿Por qué necesitas este servicio?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#64748b]">
                Un gestor experto hace que tu compra sea segura, controlada y sin sorpresas
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-[#475569]">
                Un proceso de compra más seguro. Inversión que se paga sola evitando cláusulas abusivas.
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
                ¿Cómo trabajamos contigo?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#64748b]">
                Cuatro fases de acompañamiento profesional para que tu compra sea segura
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
                            "/images/contratos.jpg",
                            "/images/contratos1.jpg",
                            "/images/gestoria.jpg",
                            "/images/contratos2.jpg"
                          ][idx]}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
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

        {/* Testimonios */}
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
                Experiencias reales de clientes
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

        {/* Información importante */}
        <section className="border-b border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-200">
                  <AlertCircle className="h-6 w-6 text-amber-900" strokeWidth={2} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1E293B]">Importante saber</h3>
                <p className="mt-2 leading-relaxed text-[#475569]">
                  Este servicio cubre el acompañamiento profesional y revisión documental completa. No incluye tasas notariales, registrales ni gestorías de compraventa (estas son responsabilidad del comprador según normativa). Te informamos de todos los costes adicionales desde el inicio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-20 text-white sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-extrabold sm:text-4xl lg:text-5xl">
              ¿Listo para comprar con seguridad?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-blue-50">
              Contrata ahora y empieza a trabajar con tu gestor personal. Inversión que se paga sola evitando cláusulas abusivas y sorpresas.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ContratarServicioButton className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] px-10 py-5 text-lg font-bold text-[#1E293B] shadow-2xl transition hover:scale-105">
                <span>Contratar ahora · {priceLabelCompact}</span>
              </ContratarServicioButton>
              <a
                href={waHrefServicioCompleto}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-10 py-5 text-lg font-semibold transition hover:bg-white/10"
              >
                <span>Consultar por WhatsApp</span>
              </a>
            </div>

                <p className="mt-6 text-sm text-blue-200">
              ¿Vendes tu piso entre particulares?{" "}
              <Link href="/servicios/servicio-completo-venta" className="font-semibold underline hover:text-white">
                Ver servicio completo de venta
              </Link>
            </p>
            <p className="mt-2 text-sm text-blue-200">
              ¿Tienes dudas? Escríbenos y te asesoramos sin compromiso
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
    </ServicePurchaseProvider>
  );
}
