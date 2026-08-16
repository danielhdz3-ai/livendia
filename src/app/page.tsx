import { FaqSection } from "@/components/faq-section";
import { HomeCoverageCities } from "@/components/home-coverage-cities";
import { HomeHowItWorks } from "@/components/home-how-it-works";
import { ServiceGestorPlatformSection } from "@/components/service-gestor-platform-section";
import { buildGestorWorkflowContent } from "@/lib/gestor-workflow-content";
import { HomeParticularesServicios } from "@/components/home-particulares-servicios";
import { HomeMobileHero } from "@/components/home-mobile-hero";
import { HomeMobileQuickActions } from "@/components/home-mobile-quick-actions";
import { HomeSitelinksNav } from "@/components/home-sitelinks-nav";
import { HomeServicesCarousel } from "@/components/home-services-carousel";
import { MobileServicesList } from "@/components/mobile-services-list";
import { HOME_FAQ_ITEMS } from "@/lib/home-faq";
import { MultiServicePurchaseProvider, ContratarSlugButton } from "@/components/service-purchase-provider";
import { PublicHeader } from "@/components/public-header";
import type { PublicService } from "@/lib/catalog.public";
import { getPublicServices } from "@/lib/catalog";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { SITE_DEFAULT_DESCRIPTION } from "@/lib/site-default-description";

/**
 * ISR: revalida cada 5 min para que los precios/estado del catalogo
 * (getPublicServices, cliente Supabase anonimo) no queden fijados hasta
 * el proximo despliegue. Cambiar este numero (segundos) si se necesita
 * otra frecuencia -- ver SEO_ROADMAP.md.
 */
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Gestoría inmobiliaria para particulares — contratos y venta sin agencia",
  description: SITE_DEFAULT_DESCRIPTION,
  alternates: { canonical: getSiteUrl() },
  openGraph: {
    title: "Livendia — Gestoría inmobiliaria online",
    url: getSiteUrl(),
    type: "website",
    locale: "es_ES",
  },
};

const HOME_SERVICES_ORDER = [
  "acompanamiento-alquiler",
  "contrato-alquiler-lau",
  "contrato-arras-penitenciales",
  "revision-documental-post-arras",
  "contrato-alquiler-temporada",
  "contrato-alquiler-habitacion",
  "servicio-completo-compra",
  "administracion-alquiler",
] as const;

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

export default async function Home() {
  const catalog = await getPublicServices();
  const homeCarouselServices = HOME_SERVICES_ORDER.map((slug) => catalog.find((s) => s.slug === slug)).filter(
    (s): s is PublicService => s != null,
  );

  const rental = catalog.find((s) => s.slug === "administracion-alquiler");
  const compraCompleta = catalog.find((s) => s.slug === "servicio-completo-compra");
  const homeCheckoutBySlug: Partial<Record<string, PublicService>> = {};
  if (rental) homeCheckoutBySlug["administracion-alquiler"] = rental;
  if (compraCompleta) homeCheckoutBySlug["servicio-completo-compra"] = compraCompleta;

  return (
    <MultiServicePurchaseProvider servicesBySlug={homeCheckoutBySlug}>
    <div className="flex flex-col">
      <PublicHeader />

      <main>
        {/* Hero — móvil: imagen protagonista + tarjeta flotante; desktop: grid clásico */}
        <HomeMobileHero waHref={waHref} />

        <section className="relative hidden overflow-hidden bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] text-white lg:block">
          <div className="mx-auto max-w-7xl">
            <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[650px]">
              <div className="livendia-hero-stagger flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
                <h1 className="mb-4 text-3xl font-bold leading-snug sm:mb-6 sm:text-4xl sm:leading-tight md:text-5xl lg:mb-8 lg:text-7xl">
                  La gestoría inmobiliaria que cuida de los tuyos
                </h1>
                <p className="mt-4 text-base leading-relaxed text-blue-50 sm:mt-6 sm:text-lg lg:text-xl">
                  Gestoría inmobiliaria online en Madrid, Valencia, Barcelona y toda España. Contratos, venta entre
                  particulares y administración de alquileres con gestores expertos.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                  <Link
                    href="#servicios"
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-bold text-[#1A4FBF] shadow-xl transition hover:bg-blue-50 hover:scale-105 sm:w-auto sm:px-8 sm:py-4"
                  >
                    Ver servicios
                  </Link>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-semibold transition hover:bg-white/10"
                  >
                    Hablar por WhatsApp
                  </a>
                </div>
              </div>

              <div className="relative h-auto min-h-[650px]">
                <Image
                  src="/images/chicavertical.png"
                  alt="Tranquilidad en casa: revisas tu gestión inmobiliaria desde el sofá"
                  fill
                  priority
                  fetchPriority="high"
                  className="object-cover object-center"
                  sizes="(max-width: 1280px) 50vw, 640px"
                />
              </div>
            </div>
          </div>
        </section>

        <HomeMobileQuickActions />

        <HomeCoverageCities />

        <HomeParticularesServicios />

        <div className="hidden sm:block">
          <HomeSitelinksNav />
        </div>

        <HomeHowItWorks />

        <ServiceGestorPlatformSection workflow={buildGestorWorkflowContent({ service: "generic" })} />

        <section className="relative overflow-hidden bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] text-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[650px]">
              {/* Imagen izquierda */}
              <div className="relative h-48 sm:h-64 lg:h-auto">
                <Image
                  src="/images/modelo3.jpg"
                  alt="Administración de Alquileres"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                />
              </div>

              {/* Contenido derecha */}
              <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-300 sm:mb-6">
                  Servicio destacado
                </p>
                <h2 className="text-2xl font-bold leading-snug sm:text-4xl sm:leading-tight lg:text-6xl">
                  Administración de Alquileres
                </h2>
                <p className="mt-4 text-base leading-relaxed text-blue-50 sm:text-lg lg:text-xl">
                  Olvídate de llamadas, reclamaciones y gestiones. Nosotros somos el punto de contacto con tu inquilino.
                </p>
                <div className="mt-4 flex items-baseline gap-2 sm:mt-6">
                  <span className="text-4xl font-extrabold sm:text-5xl">49 €</span>
                  <span className="text-base text-blue-100 sm:text-lg">/ mes · IVA incluido</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm text-blue-50 sm:mt-8 sm:space-y-3 sm:text-base">
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Cero contacto con el inquilino</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Gestión de incidencias y reparaciones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Seguimiento de renovaciones y mediación</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                  <Link
                    href="/para-propietarios"
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-bold text-[#1A4FBF] shadow-xl transition hover:bg-blue-50 hover:scale-105 sm:w-auto sm:px-8 sm:py-4"
                  >
                    Soy propietario
                  </Link>
                  <Link
                    href="/servicios/administracion-alquiler"
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-full border-2 border-white px-6 py-3.5 text-base font-semibold transition hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4"
                  >
                    Ficha del servicio
                  </Link>
                  <ContratarSlugButton
                    slug="administracion-alquiler"
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-full border-2 border-white px-6 py-3.5 text-base font-semibold transition hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4"
                  >
                    Contratar ahora
                  </ContratarSlugButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="border-b border-slate-200/80 bg-[#EFF3F9] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center text-3xl font-bold text-[#1E293B] sm:text-4xl">
              Servicios de gestoría inmobiliaria
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base text-[#475569] sm:text-lg">
              Gestoría inmobiliaria experta en derecho inmobiliario con un gestor asignado y un amplio abanico
              de servicios adaptado a tus necesidades.
            </p>
            <MobileServicesList services={homeCarouselServices} />
            <div className="hidden sm:block">
              <HomeServicesCarousel services={homeCarouselServices} />
            </div>
          </div>
        </section>

        {/* Servicio Completo de Compra - Producto Estrella */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] text-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[650px]">
              {/* Contenido izquierda */}
              <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-300 sm:mb-6">
                  Producto estrella
                </p>
                <h2 className="text-2xl font-bold leading-snug sm:text-4xl sm:leading-tight lg:text-6xl">
                  Servicio Completo de Compra: Reserva a Escritura
                </h2>
                <p className="mt-4 text-base leading-relaxed text-blue-50 sm:text-lg lg:text-xl">
                  Un gestor experto te acompaña en todo el proceso documental: desde la reserva hasta la escritura. Evita cláusulas abusivas, controla cada paso y resuelve tus dudas en cualquier momento.
                </p>
                <div className="mt-4 flex items-baseline gap-2 sm:mt-6">
                  <span className="text-4xl font-extrabold sm:text-5xl">890 €</span>
                  <span className="text-base text-blue-100 sm:text-lg">IVA incluido</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm text-blue-50 sm:mt-8 sm:space-y-3 sm:text-base">
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Gestor personal que cuida de tus intereses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Control total: reserva, arras y escritura</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Protección contra cláusulas abusivas de agencias</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                  <Link
                    href="/servicios/servicio-completo-compra"
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-bold text-[#1A4FBF] shadow-xl transition hover:bg-blue-50 hover:scale-105 sm:w-auto sm:px-8 sm:py-4"
                  >
                    Más información
                  </Link>
                  <ContratarSlugButton
                    slug="servicio-completo-compra"
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-full border-2 border-white px-6 py-3.5 text-base font-semibold transition hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4"
                  >
                    Contratar ahora
                  </ContratarSlugButton>
                </div>
              </div>

              {/* Imagen derecha */}
              <div className="relative h-48 sm:h-64 lg:h-auto">
                <Image
                  src="/images/gestoria3.jpg"
                  alt="Servicio Completo de Compra"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#1A4FBF]">Quiénes somos</p>
                <h2 className="mt-3 text-3xl font-bold text-[#1E293B]">Gestoría inmobiliaria digital en toda España</h2>
                <p className="mt-4 text-[#475569]">
                  <strong className="text-[#1E293B]">Livendia</strong> nace para que comprar, vender o alquilar entre
                  particulares no implique ir a ciegas ni depender de una agencia tradicional. Somos una gestoría
                  inmobiliaria digital con cobertura en <strong className="text-[#1E293B]">toda España</strong>: expediente
                  online, gestor dedicado y seguimiento continuo, estés donde estés.
                </p>
                <p className="mt-4 text-[#475569]">
                  Detrás de cada operación hay profesionales colegiados — abogados, gestores y API — con experiencia real
                  en arras, alquiler, compraventa y administración de alquiler.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Tramitación 100 % online en todo el territorio",
                    "Gestor inmobiliario dedicado a tu expediente",
                    "Precios fijos publicados, sin comisión de agencia",
                    "Profesionales colegiados con experiencia real",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-[#475569] sm:text-base">
                      <span className="mt-0.5 font-bold text-[#06B6D4]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/equipo"
                  className="mt-8 inline-flex min-h-11 items-center rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2563EB]"
                >
                  Conoce a los fundadores
                </Link>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
                <Image
                  src="/images/fundadores-oficina.png"
                  alt="Fundadores de Livendia en el despacho"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 556px"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="equipo" className="bg-[#1A4FBF] py-16 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold">Nuestro equipo</h2>
            <p className="mt-3 max-w-2xl text-blue-100">
              Profesionales que conocen el ritmo real del mercado inmobiliario.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { src: "/images/equipo1.jpg", alt: "Miembro del equipo Livendia" },
                { src: "/images/equipo2.jpg", alt: "Miembro del equipo Livendia" },
                { src: "/images/equipo3.jpg", alt: "Miembro del equipo Livendia" },
                { src: "/images/equipo4.jpg", alt: "Miembro del equipo Livendia" },
              ].map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white/10 shadow-lg ring-1 ring-white/20"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1152px) 25vw, 270px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F1F5F9] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-[#1E293B]">
              Gestores personalizados, una filosofía cercana
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-[#475569]">
              En Livendia creemos que un contrato importante merece tiempo, claridad y alguien que conozca
              tu historia. Por eso cada cliente cuenta con gestores dedicados que siguen tu expediente de
              principio a fin: ordenan pasos y plazos, responden con rigor profesional sin jerga innecesaria
              y se implican contigo hasta dejar cerrado cada acuerdo. Legalidad bien hecha con el trato
              cercano que esperas de quien lleva tus intereses.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "/images/gestoria2.jpg",
                "/images/gestoria3.jpg",
                "/images/gestoria4.jpg",
                "/images/gestoria5.jpg",
              ].map((src) => (
                <div
                  key={src}
                  className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200"
                >
                  <Image
                    src={src}
                    alt="Vida en la gestoría Livendia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1152px) 25vw, 270px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner contratos — mismo lenguaje visual que hero / servicio destacado */}
        <section
          id="contratos-tranquilidad"
          aria-label="Contratos inmobiliarios con respaldo profesional"
          className="relative overflow-hidden bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] text-white"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[560px]">
              <div className="order-2 flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:order-1 lg:px-12 lg:py-20">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-300">
                  Contratos redactados por gestores
                </p>
                <h2 className="text-2xl font-bold leading-snug sm:text-3xl sm:leading-tight lg:text-[2.75rem] lg:leading-[1.15]">
                  Arras, alquiler y acuerdos entre particulares — con la tranquilidad de tenerlo bien hecho
                </h2>
                <p className="mt-4 text-base leading-relaxed text-blue-50 sm:mt-5 sm:text-lg">
                  En cualquier intermediación inmobiliaria, te acompañamos con trato claro y documentación sólida:
                  tú te centras en tu operación y nosotros cuidamos la parte contractual.
                </p>
                <ul className="mt-8 space-y-3 text-blue-50">
                  {[
                    "Contrato de arras y revisión de condiciones clave",
                    "Contratos de alquiler (LAU, temporada, habitación…)",
                    "Redacción y asesoramiento en acuerdos entre particulares",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#06B6D4]" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                  <Link
                    href="/servicios"
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-bold text-[#1A4FBF] shadow-xl transition hover:bg-blue-50 hover:scale-[1.02] sm:w-auto sm:px-8 sm:py-4"
                  >
                    Ver servicios de contratos
                  </Link>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden min-h-11 items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-semibold transition hover:bg-white/10 lg:inline-flex"
                  >
                    Hablar por WhatsApp
                  </a>
                </div>
              </div>

              <div className="relative order-1 h-44 min-h-0 sm:h-56 lg:order-2 lg:h-auto">
                <Image
                  src="/images/contratos2.jpg"
                  alt="Gestor revisando contratos y documentación inmobiliaria"
                  fill
                  className="object-cover object-[center_right] sm:object-center lg:object-center"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="confianza" className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
              <Image
                src="/images/amigos.jpg"
                alt="Clientes y equipo en un encuentro"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 556px"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1E293B]">Confianza que se construye</h2>
              <p className="mt-4 text-[#475569]">
                Nos importa el trato claro y los plazos. Si tienes dudas sobre qué servicio encaja con
                tu operación, escríbenos: te orientamos antes de contratar.
              </p>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-placement="confianza_whatsapp"
                className="mt-8 inline-flex min-h-11 rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#06B6D4]"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section
          aria-label="Gestoría cercana, proceso digital"
          className="relative overflow-hidden bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] py-16 text-white sm:py-20"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20">
              <Image
                src="/images/gestoria1.jpg"
                alt="Atención personalizada en gestoría Livendia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 556px"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Gestoría cercana, proceso digital</h2>
              <p className="mt-4 text-lg leading-relaxed text-blue-50">
                Combinamos trato directo en despacho con herramientas online para que no pierdas el hilo de tu
                expediente: estados del pedido, mensajes y documentos en un solo lugar.
              </p>
              <ul className="mt-6 space-y-3 text-blue-50">
                {[
                  "Redacción y revisión de contratos al día de la normativa",
                  "Compraventa: reservas, arras y acompañamiento hasta notaría",
                  "Alquiler: contratos LAU, habitación, local y packs",
                ].map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="mt-1 font-bold text-cyan-300">✓</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-[#F8FAFC] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <FaqSection
              id="preguntas-frecuentes"
              title="Preguntas frecuentes"
              subtitle="Todo lo que suelen preguntarnos antes del primer contrato o la administración del piso."
              items={HOME_FAQ_ITEMS}
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
    </MultiServicePurchaseProvider>
  );
}
