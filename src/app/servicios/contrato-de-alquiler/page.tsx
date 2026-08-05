import { PublicHeader } from "@/components/public-header";
import { ClientPlatformShowcase } from "@/components/client-platform-showcase";
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
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
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

/**
 * ISR: revalida cada 5 min para que los precios/estado del catalogo
 * (getPublicServices, cliente Supabase anonimo) no queden fijados hasta
 * el proximo despliegue. Cambiar este numero (segundos) si se necesita
 * otra frecuencia -- ver SEO_ROADMAP.md.
 */
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Contrato de alquiler con revisión LAU profesional",
  description:
    "Gestor inmobiliario especializado en LAU revisa tu contrato de alquiler: cláusulas, garantías e inventario del inmueble. Asesoramiento cercano para firmar con seguridad.",
  alternates: { canonical: `${getSiteUrl()}/servicios/contrato-de-alquiler` },
};

export default async function ContratoDeAlquilerPage() {
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

  const testimonials = [
    {
      quote:
        "Firmamos por una plantilla que nos dio la agencia y Livendia nos frenó: había una cláusula silenciosa sobre obras que nos hubiera salido cara. Lo corrigieron sin dramas.",
      author: "Paula & Hugo",
      role: "Arrendatarios, Alicante",
    },
    {
      quote:
        "Como propietaria quería tranquilidad fiscal y registral clara. El inventario fotográfico nos salvó cuando el inquilino discutió el estado del parquet.",
      author: "Isabel R.",
      role: "Propietaria, Zaragoza",
    },
  ];

  const stepImages = [
    "/images/contratodealquiler.jpg",
    "/images/contratos.jpg",
    "/images/contratos2.jpg",
    "/images/gestoria3.jpg",
  ];

  return (
    <MultiServicePurchaseProvider servicesBySlug={servicesBySlug}>
      <div className="flex min-h-screen flex-col bg-white">
        <PublicHeader />

        <main className="flex-1">
          <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[650px]">
                <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
                  <div className="mb-8 inline-block self-start rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
                    Alquiler y LAU
                  </div>

                  <h1 className="text-2xl font-bold leading-snug sm:text-4xl lg:text-7xl">
                    Contrato de alquiler con respaldo gestor especializado
                  </h1>

                  <p className="mt-6 text-xl leading-relaxed text-blue-50">
                    Un gestor inmobiliario centrado en la LAU revisa tu contrato, ordena las cláusulas sensibles y deja
                    documentado el estado del inmueble para que propiedad e inquilino firmen con garantías claras y
                    asesoramiento cercano.
                  </p>

                  <div className="mt-10 rounded-xl bg-white/10 px-5 py-4 backdrop-blur-sm">
                    <p className="text-lg font-semibold text-white">Contrata la modalidad que necesites</p>
                    <p className="mt-1 text-sm text-blue-100">
                      Pagas con tarjeta en Stripe desde el modal; cuando el cobro se confirma, entras al panel para
                      documentación y expediente.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3 text-sm">
                      <ContratarSlugButton
                        slug="contrato-alquiler-lau"
                        className="rounded-full bg-white/90 px-4 py-2 font-semibold text-[#1E3A8A] hover:bg-white"
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

                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 shrink-0 text-cyan-300" aria-hidden />
                      <span className="text-lg">Revisión profesional según LAU vigente</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 shrink-0 text-cyan-300" aria-hidden />
                      <span className="text-lg">Cláusulas alineadas con tu situación real</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 shrink-0 text-cyan-300" aria-hidden />
                      <span className="text-lg">Inventario del inmueble incluido en el pack gestor</span>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarSlugButton
                      slug="contrato-alquiler-lau"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1E3A8A] shadow-xl transition hover:scale-105 hover:bg-blue-50"
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
                    alt="Gestor revisando contrato de alquiler con cliente"
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
                  ¿Por qué pasar tu contrato de alquiler por Livendia?
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-[#64748b]">
                  El arrendamiento mal cerrado es una de las fuentes más habituales de litigios entre vecinos económicos.
                  Anticipamos fricciones legales con lectura gestora honesta y documentación útil desde el día uno.
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
                  ¿Cómo trabajamos tu contrato de alquiler?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-[#64748b]">
                  Cuatro hitos claros desde que nos cuentas tu caso hasta que ambas partes firman con seguridad
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

          <section className="border-b border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
                  Quienes ya confían en nuestra revisión LAU
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
              <h2 className="text-2xl font-extrabold sm:text-4xl lg:text-5xl">¿Listo para alquilar sin sustos?</h2>
              <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-blue-50">
                Elige LAU, temporada o habitación y completa el pago seguro en segundos. Tu expediente queda ordenado con
                inventario y revisiones lista para firma informada.
              </p>

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
        <ClientPlatformShowcase />


        <SiteFooter />
      </div>
    </MultiServicePurchaseProvider>
  );
}
