import { FaqSection } from "@/components/faq-section";
import { LandingLocalTestimonialsSection } from "@/components/landing-local-sections";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import {
  ContratarSlugButton,
  MultiServicePurchaseProvider,
} from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import type { PublicService } from "@/lib/catalog.public";
import {
  CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import type { ContratoAlquilerLocalLandingConfig } from "@/lib/contrato-alquiler-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import Image from "next/image";
import {
  Shield,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Eye,
  Home,
  FileSearch,
  ClipboardList,
  KeyRound,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

function LocalServiceJsonLd({
  path,
  city,
  administrativeArea,
}: {
  path: string;
  city: string;
  administrativeArea: string;
}) {
  const base = getSiteUrl().replace(/\/$/, "");
  const graph = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Contrato de alquiler por expertos en ${city}`,
    description:
      "Redacción y revisión profesional de contratos de arrendamiento urbano (LAU), con inventario del inmueble y asesoramiento hasta la firma.",
    serviceType: "Revisión y redacción de contratos de arrendamiento urbano",
    provider: {
      "@type": "Organization",
      name: "Livendia",
      url: base,
    },
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: administrativeArea,
      },
    },
    url: `${base}${path}`,
    inLanguage: "es-ES",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export async function ContratoAlquilerLocalSeoLanding({
  config,
}: {
  config: ContratoAlquilerLocalLandingConfig;
}) {
  const catalog = await getPublicServices();
  const lau = catalog.find((s) => s.slug === "contrato-alquiler-lau");
  const temp = catalog.find((s) => s.slug === "contrato-alquiler-temporada");
  const hab = catalog.find((s) => s.slug === "contrato-alquiler-habitacion");
  const servicesBySlug: Partial<Record<string, PublicService>> = {};
  if (lau) servicesBySlug["contrato-alquiler-lau"] = lau;
  if (temp) servicesBySlug["contrato-alquiler-temporada"] = temp;
  if (hab) servicesBySlug["contrato-alquiler-habitacion"] = hab;

  const lauPrice = resolveServicePriceLabel(lau, CONTRATO_ALQUILER_LAU_PRICE_LABEL);
  const tempPrice = resolveServicePriceLabel(temp, CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL);
  const habPrice = resolveServicePriceLabel(hab, CONTRATO_ALQUILER_HABITACION_PRICE_LABEL);

  const howItWorks = [
    {
      icon: FileSearch,
      step: "1",
      title: "Briefing completo del arrendamiento",
      description:
        "Identificamos tipo de arrendamiento (vivienda habitual, temporada o habitación), partes, renta, duración y cualquier pacto especial para que el contrato refleje exactamente lo que habéis negociado.",
    },
    {
      icon: Shield,
      step: "2",
      title: "Revisión jurídico-gestora bajo LAU vigente",
      description:
        "Cruzamos cada cláusula con la Ley de Arrendamientos Urbanos actualizada y la práctica habitual del mercado: actualización de renta, gastos comunes, depósitos, obras y causas de extinción.",
    },
    {
      icon: ClipboardList,
      step: "3",
      title: "Inventario del inmueble integrado",
      description:
        "Incorporamos inventario descriptivo y fotográfico del estado del bien para que la entrada y la salida estén documentadas: menos discusiones sobre desperfectos o elementos incluidos.",
    },
    {
      icon: Users,
      step: "4",
      title: "Asesoramiento personalizado hasta firmar",
      description:
        "Te respondemos en lenguaje claro, resolvemos dudas entre propiedad e inquilino cuando sea necesario y dejamos cerrado el texto antes de comprometer firma ni transferencias.",
    },
  ];

  const benefits = [
    {
      icon: KeyRound,
      title: "LAU aplicada a tu caso real",
      description:
        "No vale cualquier PDF genérico: adaptamos obligaciones de cada parte según tu tipología contractual y lo que establece la normativa aplicable.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Eye,
      title: "Cláusulas revisadas punto por punto",
      description:
        "Detectamos lagunas sobre mantenimiento, suministros, subarriendos o penalidades mal redactadas que suelen convertirse en conflictos meses después.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: ClipboardList,
      title: "Inventario incluido en el expediente",
      description:
        "Salvaguardamos el estado del piso con inventario ordenado para que ambos sepáis qué había el día de las llaves y cómo debe devolverse el uso.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Users,
      title: "Gestor dedicado al mismo expediente",
      description:
        "Un único interlocutor gestor que conoce tu operación de principio a fin y coordina revisiones sin que pierdas tiempo en bucles administrativos.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Home,
      title: "Alquilar con garantías jurídicas",
      description:
        "Blindamos rentas, plazos de actualización, entrega de llaves y documentación para que tanto propiedad como inquilino firmen con criterio informado.",
      color: "from-violet-500 to-violet-600",
    },
    {
      icon: Clock,
      title: "Entrega ágil tras validación",
      description:
        "En cuanto tenemos todos los datos contrastados, redactamos o pulimos el contrato con los tiempos que marca nuestra gestoría sin sacrificar rigor.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const stepImages = [
    "/images/contratodealquiler.jpg",
    "/images/contratos.jpg",
    "/images/contratos2.jpg",
    "/images/gestoria3.jpg",
  ];

  const benefitStyle = [
    { icon: KeyRound, color: "from-blue-500 to-blue-600" },
    { icon: Eye, color: "from-cyan-500 to-cyan-600" },
    { icon: ClipboardList, color: "from-teal-500 to-teal-600" },
    { icon: Users, color: "from-indigo-500 to-indigo-600" },
    { icon: Home, color: "from-violet-500 to-violet-600" },
    { icon: Clock, color: "from-purple-500 to-purple-600" },
  ] as const;

  const displayBenefits =
    config.localBenefits?.map((b, idx) => {
      const style = benefitStyle[idx % benefitStyle.length];
      return { ...b, icon: style.icon, color: style.color };
    }) ?? benefits;

  const heroBullets = config.heroBullets ?? [
    "Revisión profesional según LAU vigente",
    "Cláusulas alineadas con tu situación real",
    "Inventario del inmueble incluido en el pack gestor",
  ];

  return (
    <MultiServicePurchaseProvider servicesBySlug={servicesBySlug}>
      <LocalServiceJsonLd
        path={config.path}
        city={config.city}
        administrativeArea={config.schemaAdministrativeArea}
      />
      <div className="flex min-h-screen flex-col bg-white">
        <PublicHeader />

        <main className="flex-1">
          <section className="relative overflow-hidden bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[650px]">
                <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
                  <div className="mb-8 inline-block self-start rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
                    {config.heroBadge ?? `Contrato de alquiler · ${config.city}`}
                  </div>

                  <h1 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-6xl">
                    {config.heroH1 ?? "¿Quieres redactar un contrato de alquiler por expertos?"}
                  </h1>

                  <p className="mt-6 text-xl leading-relaxed text-blue-50">{config.heroLead}</p>

                  <div className="mt-10 rounded-xl bg-white/10 px-5 py-4 backdrop-blur-sm">
                    <p className="text-lg font-semibold text-white">Contrata la modalidad que necesites</p>
                    <p className="mt-1 text-sm text-blue-100">
                      Pagas con tarjeta en Stripe desde el modal; cuando el cobro se confirma, entras al panel para
                      documentación y expediente.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3 text-sm">
                      <ContratarSlugButton
                        slug="contrato-alquiler-lau"
                        className="rounded-full bg-white/90 px-4 py-2 font-semibold text-[#1A4FBF] hover:bg-white"
                      >
                        Contratar LAU · {lauPrice}
                      </ContratarSlugButton>
                      <ContratarSlugButton
                        slug="contrato-alquiler-temporada"
                        className="rounded-full border border-white/60 px-4 py-2 font-semibold text-white hover:bg-white/10"
                      >
                        Contratar temporada · {tempPrice}
                      </ContratarSlugButton>
                      <ContratarSlugButton
                        slug="contrato-alquiler-habitacion"
                        className="rounded-full border border-white/60 px-4 py-2 font-semibold text-white hover:bg-white/10"
                      >
                        Contratar habitación · {habPrice}
                      </ContratarSlugButton>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {heroBullets.map((line) => (
                      <li key={line} className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 shrink-0 text-cyan-300" aria-hidden />
                        <span className="text-lg">{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarSlugButton
                      slug="contrato-alquiler-lau"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-xl transition hover:scale-105 hover:bg-blue-50"
                    >
                      Contratar LAU · {lauPrice}
                    </ContratarSlugButton>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold transition hover:bg-white/10"
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>

                <div className="relative order-2 h-44 sm:h-56 lg:order-none lg:h-auto lg:min-h-[520px]">
                  <Image
                    src="/images/contratodealquiler.jpg"
                    alt={`Gestor revisando contrato de alquiler en ${config.city}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
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
                  {config.whyTitle ?? `¿Por qué pasar tu contrato de alquiler por Livendia en ${config.city}?`}
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-[#64748b]">
                  {config.whySubtitle ?? config.whyIntro}
                </p>
              </div>

              <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {displayBenefits.map((benefit) => {
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

          {config.localZones ? (
            <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  {config.localZonesHeading ?? `Zonas de ${config.city} donde revisamos contratos`}
                </h2>
                <p className="mt-4 text-center text-lg leading-relaxed text-[#475569]">{config.localZones}</p>
              </div>
            </section>
          ) : null}

          <section className="border-b border-slate-200 bg-white px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
                  ¿Cómo trabajamos tu contrato de alquiler?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-[#64748b]">{config.howIntro}</p>
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
                          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] text-2xl font-extrabold text-white shadow-lg">
                            {item.step}
                          </div>
                          <h3 className="text-2xl font-bold text-[#1E293B] lg:text-3xl">{item.title}</h3>
                        </div>
                        <p className="mt-4 text-lg leading-relaxed text-[#475569]">{item.description}</p>
                      </div>

                      <div className={`relative ${isEven ? "" : "lg:order-1"}`}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
                          <Image
                            src={stepImages[idx] ?? "/images/contratodealquiler.jpg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
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

          <LandingLocalTestimonialsSection
            title={config.testimonialsTitle}
            testimonials={config.testimonials}
          />

          {config.faq && config.faq.length > 0 ? (
            <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-3xl">
                <FaqSection
                  title={`Preguntas frecuentes — contrato de alquiler en ${config.city}`}
                  items={config.faq.map((f) => ({ question: f.question, answer: f.answer }))}
                />
              </div>
            </section>
          ) : null}


          <ServiceMidPageContactSection serviceLabel={`Contrato de alquiler en ${config.city}`} />

          <section className="border-b border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-200">
                    <AlertCircle className="h-6 w-6 text-amber-900" strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1E293B]">Honestidad profesional</h3>
                  <p className="mt-2 leading-relaxed text-[#475569]">
                    Cubrimos revisión contractual y inventario desde la óptica gestora-inmobiliaria. Si tu caso exige
                    visión fiscal profunda u otros especialistas externos, te lo comunicamos antes de comprometer el
                    servicio más allá de nuestro alcance habitual.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-20 text-white sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-2xl font-extrabold sm:text-4xl lg:text-5xl">
                ¿Listo para alquilar sin sustos en {config.city}?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-blue-50">{config.finalCtaLead}</p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <ContratarSlugButton
                  slug="contrato-alquiler-lau"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] px-10 py-5 text-lg font-bold text-[#1E293B] shadow-2xl transition hover:scale-105"
                >
                  Contratar LAU · {lauPrice}
                </ContratarSlugButton>
                <ContratarSlugButton
                  slug="contrato-alquiler-temporada"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-10 py-5 text-lg font-semibold transition hover:bg-white/10"
                >
                  Contratar temporada · {tempPrice}
                </ContratarSlugButton>
                <ContratarSlugButton
                  slug="contrato-alquiler-habitacion"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-10 py-5 text-lg font-semibold transition hover:bg-white/10"
                >
                  Contratar habitación · {habPrice}
                </ContratarSlugButton>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-10 py-5 text-lg font-semibold transition hover:bg-white/10"
                >
                  WhatsApp
                </a>
              </div>

              <p className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-blue-200">
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                <span>¿No sabes qué modalidad encaja contigo? Te orientamos antes de pagar.</span>
              </p>
            </div>
          </section>
        </main>
        <ServiceLandingSharedSections
          city={config.city}
          serviceLabel="Contrato alquiler LAU"
          primarySlug="contrato-alquiler-lau"
          skipTestimonials
        />


        <SiteFooter />
      </div>
    </MultiServicePurchaseProvider>
  );
}
