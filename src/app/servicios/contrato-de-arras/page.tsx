import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataMultiOffer } from "@/components/service-structured-data";
import {
  ContratarSlugButton,
  MultiServicePurchaseProvider,
} from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import type { PublicService } from "@/lib/catalog.public";
import { REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL } from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  FileText,
  Eye,
  Scale,
  FileSearch,
  ClipboardCheck,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

/**
 * ISR: revalida cada 5 min para que los precios/estado del catalogo
 * (getPublicServices, cliente Supabase anonimo) no queden fijados hasta
 * el proximo despliegue. Cambiar este numero (segundos) si se necesita
 * otra frecuencia -- ver SEO_ROADMAP.md.
 */
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Contrato de arras con revisión profesional",
  description:
    "Gestor inmobiliario que revisa tu contrato de arras: fechas, objeto, penalidades y malas prácticas antes de firmar. Blindaje jurídico-práctico para compradores y vendedores.",
  alternates: { canonical: `${getSiteUrl()}/servicios/contrato-de-arras` },
};

export default async function ContratoDeArrasPage() {
  const catalog = await getPublicServices();
  const pen = catalog.find((s) => s.slug === "contrato-arras-penitenciales");
  const conf = catalog.find((s) => s.slug === "contrato-arras-confirmatorias");
  const revision = catalog.find((s) => s.slug === "revision-documental-post-arras");
  const servicesBySlug: Partial<Record<string, PublicService>> = {};
  if (pen) servicesBySlug["contrato-arras-penitenciales"] = pen;
  if (conf) servicesBySlug["contrato-arras-confirmatorias"] = conf;
  if (revision) servicesBySlug["revision-documental-post-arras"] = revision;

  const howItWorks = [
    {
      icon: FileSearch,
      step: "1",
      title: "Diagnóstico global del borrador",
      description:
        "Leemos el contrato como lo haría un despacho especializado: tipo de arras, identificación del inmueble, forma de pago y cada obligación que te compromete antes de escritura.",
    },
    {
      icon: Shield,
      step: "2",
      title: "Detección de riesgos y malas prácticas",
      description:
        "Señalamos plazos irreales, penalidades desequilibradas, cargas ignoradas o redacciones ambiguas que suelen aparecer en plantillas copiadas sin contrastar con tu caso.",
    },
    {
      icon: ClipboardCheck,
      step: "3",
      title: "Propuesta de correcciones claras",
      description:
        "No solo marcamos problemas: te decimos cómo redactarlo mejor y priorizamos lo negociable frente a lo imprescindible para cerrar sin tensiones innecesarias.",
    },
    {
      icon: Users,
      step: "4",
      title: "Decisión informada hasta la firma",
      description:
        "Resolvemos dudas en lenguaje directo y coordinamos los últimos flecos para que llegues al día de las firmas entendiendo cada coma legalmente relevante.",
    },
  ];

  const benefits = [
    {
      icon: Eye,
      title: "Arras más que una firma rápida",
      description:
        "Este contrato decide cómo sales si algo falla: cantidades, plazos y consecuencias del incumplimiento. Un segundo par experto evita lecturas optimistas.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Shield,
      title: "Menos plantillas peligrosas",
      description:
        "Muchos borradores arrastran cláusulas del año pasado o de otro tipo de operación. Las contrastamos con tu situación para que la obligación coincida con lo pactado verbalmente.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Scale,
      title: "Simetría comprador–vendedor",
      description:
        "Detectamos condiciones que cargan todo el peso sobre una sola parte y sugerimos equilibrios defendibles ante incumplimientos o demoras registrales.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: FileText,
      title: "Coherencia documental",
      description:
        "Cruzamos objetos literales, superficies y situaciones registrales mínimas para reducir grietas entre lo que lees en arras y lo que aparecerá en escritura.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: AlertCircle,
      title: "Alerta ante ‘mini-cláusulas’ conflictivas",
      description:
        "Mantenimiento extraordinario, gastos ocultos, penalidades escalonadas… Sabemos qué puntos disparan disputas después y los tratamos antes del primer ingreso.",
      color: "from-violet-500 to-violet-600",
    },
    {
      icon: Clock,
      title: "Timing seguro",
      description:
        "Validamos calendarios de entrega de documentación y cobros para que nadie quede vendido entre promesas verbales y plazos por escrito.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const testimonials = [
    {
      quote:
        "Nos querían hacer firmar arras en 48 horas con una plantilla genérica. Livendia frenó la firma, pidió dos matices sobre cargas y nos ahorró una discusión gigante más adelante.",
      author: "Laura G.",
      role: "Compradora, Sevilla",
    },
    {
      quote:
        "Vendía herencia familiar y no dominaba la jerga. El equipo nos tradujo cada escenario de impago y dejamos el contrato blindado sin enfadar al comprador.",
      author: "Ricardo T.",
      role: "Vendedor, Bilbao",
    },
  ];

  const schemaOffers = [pen, conf, revision]
    .filter((s): s is PublicService => s != null)
    .map((s) => ({ priceCents: s.price_cents }));

  return (
    <MultiServicePurchaseProvider servicesBySlug={servicesBySlug}>
      <ServiceStructuredDataMultiOffer
        path="/servicios/contrato-de-arras"
        name="Contrato de arras con revisión profesional"
        description={metadata.description ?? "Revisión profesional de contratos de arras antes de firmar."}
        category="compraventa"
        serviceType="Asesoría jurídica"
        offers={schemaOffers.length > 0 ? schemaOffers : [{ priceCents: 14500 }]}
      />
      <div className="flex min-h-screen flex-col bg-white">
        <PublicHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] text-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[650px]">
              <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
                <div className="mb-8 inline-block self-start rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
                  Compraventa segura
                </div>

                <h1 className="text-2xl font-bold leading-snug sm:text-4xl lg:text-7xl">
                  Contrato de arras — revisión que vale antes de firmar
                </h1>

                <p className="mt-6 text-xl leading-relaxed text-blue-50">
                  Tu gestor inmobiliario analiza los puntos críticos del contrato de arras: penalidades, plazos,
                  objeto y coherencia registral. Detectamos errores, lagunas y malas prácticas antes de que el
                  compromiso económico sea irreversible.
                </p>

                <div className="mt-10 rounded-xl bg-white/10 px-5 py-4 backdrop-blur-sm">
                  <p className="text-lg font-semibold text-white">Contrata arras con tarjeta — panel después del pago</p>
                  <p className="mt-1 text-sm text-blue-100">
                    Elige tipo de arras, completa datos y paga en Stripe; al confirmarse el cobro accedes al panel para
                    documentación y expediente.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    <ContratarSlugButton
                      slug="contrato-arras-penitenciales"
                      className="rounded-full bg-white/90 px-4 py-2 font-semibold text-[#1E3A8A] hover:bg-white"
                    >
                      Contratar penitenciales
                    </ContratarSlugButton>
                    <ContratarSlugButton
                      slug="contrato-arras-confirmatorias"
                      className="rounded-full border border-white/60 px-4 py-2 font-semibold text-white hover:bg-white/10"
                    >
                      Contratar confirmatorias
                    </ContratarSlugButton>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-cyan-300" aria-hidden />
                    <span className="text-lg">Análisis jurídico-gestor centrado en tu operación real</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-cyan-300" aria-hidden />
                    <span className="text-lg">Informe entendible + líneas rojas negociables</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-cyan-300" aria-hidden />
                    <span className="text-lg">Menos sustos entre arras y escritura</span>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <ContratarSlugButton
                    slug="contrato-arras-penitenciales"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1E3A8A] shadow-xl transition hover:scale-105 hover:bg-blue-50"
                  >
                    Contratar arras penitenciales
                  </ContratarSlugButton>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold transition hover:bg-white/10"
                  >
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="relative order-2 h-44 sm:h-56 lg:order-none lg:h-auto lg:min-h-[520px]">
                <Image
                  src="/images/contratodearras.jpg"
                  alt="Revisión profesional de contrato de arras entre profesional y cliente"
                  fill
                  className="object-cover object-[center_25%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 pb-20 pt-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
                ¿Por qué revisar las arras con un gestor inmobiliario?
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-[#64748b]">
                Las arras cierran confianzas económicas enormes en pocas páginas. Cuanto antes detectemos una mala
                práctica o un error silencioso, menos probabilidad de litigios caros y estrés innecesario.
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-[#475569]">
                Pensamos como despacho especializado en operaciones entre particulares: lectura crítica + sentido común
                comercial.
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
                    <p className="mt-3 leading-relaxed text-[#475569]">{benefit.description}</p>
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-[#1A4FBF]/5 to-transparent" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
                ¿Cómo trabajamos tu contrato de arras?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#64748b]">
                Cuatro fases para pasar del borrador nervioso al compromiso firme y defendible
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
                      <p className="mt-4 text-lg leading-relaxed text-[#475569]">{item.description}</p>
                    </div>

                    <div className={`relative ${isEven ? "" : "lg:order-1"}`}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
                        <Image
                          src={
                            [
                              "/images/contratodearras.jpg",
                              "/images/contratos7.jpg",
                              "/images/contratos1.jpg",
                              "/images/contratos6.jpg",
                            ][idx] ?? "/images/contratodearras.jpg"
                          }
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
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

        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
                Quienes ya nos han delegado las arras
              </h2>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
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
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#1A4FBF] to-[#06B6D4]" />
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

        <section className="border-b border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-200">
                  <AlertCircle className="h-6 w-6 text-amber-900" strokeWidth={2} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1E293B]">Transparencia</h3>
                <p className="mt-2 leading-relaxed text-[#475569]">
                  Nuestro foco es la lectura profesional del contrato de arras y la coordinación gestora. Cada caso
                  tiene matices urbanísticos o fiscales que pueden requerir otros especialistas; si detectamos un
                  límite, te lo decimos antes de comprometernos más allá de nuestro ámbito.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
                <Image
                  src="/images/gestoria20.jpg"
                  alt="Gestor revisando documentación con lupa antes de la escritura"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#1A4FBF]">
                  Compraventa · Post-arras
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
                  ¿Ya firmaste las arras? Revisión documental antes de escriturar
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#475569]">
                  Pack de verificación integral: actas de comunidad, derramas, ITE, nota registral e informe con
                  llamada de veredicto. Ideal si quieres un segundo control profesional entre arras y notaría.
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-[#1A4FBF]">{REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL}</span>
                  <span className="text-sm text-[#64748b]">IVA incluido</span>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <ContratarSlugButton
                    slug="revision-documental-post-arras"
                    className="inline-flex items-center gap-2 rounded-full bg-[#1A4FBF] px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#2563EB]"
                  >
                    Contratar revisión documental
                  </ContratarSlugButton>
                  <Link
                    href="/servicios/revision-documental-post-arras"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#1A4FBF] px-8 py-4 text-base font-semibold text-[#1A4FBF] transition hover:bg-[#1A4FBF]/5"
                  >
                    Ver detalles del pack
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-20 text-white sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-extrabold sm:text-4xl lg:text-5xl">¿Listo para firmar arras con criterio?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-blue-50">
              Elige penitenciales o confirmatorias y completa el checkout en segundos. Adjuntas documentación desde tu
              panel y seguimos el expediente contigo con el mismo rigor que en despacho.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ContratarSlugButton
                slug="contrato-arras-penitenciales"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] px-10 py-5 text-lg font-bold text-[#1E293B] shadow-2xl transition hover:scale-105"
              >
                Contratar penitenciales
              </ContratarSlugButton>
              <ContratarSlugButton
                slug="contrato-arras-confirmatorias"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-10 py-5 text-lg font-semibold transition hover:bg-white/10"
              >
                Contratar confirmatorias
              </ContratarSlugButton>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-10 py-5 text-lg font-semibold transition hover:bg-white/10"
              >
                <span>Consultar por WhatsApp</span>
              </a>
            </div>

            <p className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-blue-200">
              <MessageCircle className="h-4 w-4" aria-hidden />
              <span>¿Dudas entre penitenciales y confirmatorias? Te orientamos sin compromiso.</span>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
      </div>
    </MultiServicePurchaseProvider>
  );
}
