import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { FooterDiscoverabilityLinks } from "@/components/footer-discoverability-links";
import { FooterParticularesTestimonials } from "@/components/footer-particulares-testimonials";
import { GestorContactCta } from "@/components/gestor-contact-cta";
import { ServicioCompletoVentaLocalCityLinks } from "@/components/servicio-completo-venta-local-city-links";
import { businessNap, getWhatsAppHref } from "@/lib/business-nap";
import { getBusinessLegalIdentity } from "@/lib/business-legal";

const waHref = getWhatsAppHref();

type SiteFooterProps = {
  /** En landings locales: footer compacto sin mega-menú de ciudades. */
  variant?: "full" | "landing";
};

export function SiteFooter({ variant = "full" }: SiteFooterProps) {
  const currentYear = new Date().getFullYear();
  const legal = getBusinessLegalIdentity();

  return (
    <footer className="mt-auto">
      <GestorContactCta placement="footer" />
      <FooterParticularesTestimonials />

      {/* Bloque 1: enlaces SEO — separado para no estirar la imagen del footer */}
      {variant === "full" ? (
        <section
          className="border-t border-white/10 bg-[#172554] px-4 py-8 text-white sm:px-6 lg:px-10"
          aria-label="Explora Livendia"
        >
          <div className="mx-auto max-w-7xl">
            <FooterDiscoverabilityLinks />
            <div className="mt-4 border-t border-white/15 pt-4">
              <ServicioCompletoVentaLocalCityLinks variant="footer" />
            </div>
          </div>
        </section>
      ) : (
        <section
          className="border-t border-white/10 bg-[#172554] px-4 py-6 text-white sm:px-6 lg:px-10"
          aria-label="Explora Livendia"
        >
          <div className="mx-auto max-w-7xl text-center sm:text-left">
            <p className="text-sm text-blue-100">
              Livendia opera en decenas de ciudades.{" "}
              <Link href="/ciudades" className="font-semibold text-cyan-300 hover:text-white hover:underline">
                Ver todas las ciudades →
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* Bloque 2: marca, imagen, servicios, contacto y legal */}
      <div className="overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1D4ED8] text-white">
        <div className="grid lg:grid-cols-2 lg:items-start">
          <div className="relative hidden min-[480px]:block lg:bg-[#1a3780]">
            <Image
              src="/images/chicasofa4.png"
              alt="Gestiona tranquila desde casa con Livendia"
              width={1536}
              height={1024}
              className="block h-auto w-full max-h-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>

          <div className="px-4 py-8 sm:px-6 lg:px-10 lg:py-8">
            {/* Título principal */}
            <div className="mb-5">
              <h2 className="text-3xl font-extrabold mb-2 leading-tight sm:text-4xl lg:text-5xl">
                Livendia
              </h2>
              <p className="text-xl lg:text-2xl font-bold mb-3 leading-tight text-blue-100">
                Confianza que se construye
              </p>
              <p className="text-base text-blue-50 mb-4 leading-relaxed">
                Nos importa el trato claro y los plazos. Si tienes dudas sobre qué servicio encaja con tu operación, escríbenos: te orientamos antes de contratar.
              </p>
              <a
                href={waHref}
                data-analytics-placement="footer_whatsapp"
                className="inline-flex items-center gap-2 bg-white text-[#1E3A8A] px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="h-4 w-4" />
                Escríbenos por WhatsApp
              </a>
            </div>

            {/* Grid de información */}
            <div className="grid gap-4 sm:grid-cols-2 border-t border-white/20 pt-4">
              {/* Columna 1: Servicios */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider mb-2 text-cyan-300">
                  Servicios
                </h3>
                <ul className="space-y-1 text-xs">
                  <li>
                    <Link href="/para-propietarios" className="text-blue-100 hover:text-white transition-colors">
                      Para propietarios
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/administracion-alquiler"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      Administración de Alquileres
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/contrato-alquiler-lau"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      Contrato Alquiler LAU
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/servicio-completo-venta"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      Acompañamiento de venta
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/contrato-de-arras"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      Contrato de arras (guía)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios/contrato-de-alquiler"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      Contrato de alquiler (guía)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/servicios"
                      className="font-semibold text-cyan-300 hover:text-white transition-colors"
                    >
                      Ver todos →
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Columna 2: Información */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider mb-2 text-cyan-300">
                  Información
                </h3>
                <ul className="space-y-1 text-xs">
                  <li>
                    <Link href="/blog" className="text-blue-100 hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog#guías-por-ciudad" className="text-blue-100 hover:text-white transition-colors">
                      Guías por ciudad
                    </Link>
                  </li>
                  <li>
                    <Link href="/precios" className="text-blue-100 hover:text-white transition-colors">
                      Precios
                    </Link>
                  </li>
                  <li>
                    <Link href="/equipo" className="text-blue-100 hover:text-white transition-colors">
                      Equipo
                    </Link>
                  </li>
                  <li>
                    <Link href="/contacto" className="text-blue-100 hover:text-white transition-colors">
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link href="/#preguntas-frecuentes" className="text-blue-100 hover:text-white transition-colors">
                      Preguntas frecuentes
                    </Link>
                  </li>
                  <li>
                    <Link href="/login" className="text-blue-100 hover:text-white transition-colors">
                      Área de cliente
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contacto */}
            <div className="mt-4 space-y-1 text-xs border-t border-white/20 pt-4">
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 flex-shrink-0 text-cyan-300" aria-hidden />
                <a href={businessNap.telephoneTel()} className="text-blue-100 hover:text-white transition-colors">
                  Tel. {businessNap.telephoneDisplay()}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-3 w-3 flex-shrink-0 text-cyan-300" aria-hidden />
                <a
                  href={waHref}
                  data-analytics-placement="footer_whatsapp_text"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  WhatsApp {businessNap.telephoneDisplay()}
                </a>
              </div>
              <p className="text-blue-200/90">
                Horario L–V {businessNap.openingHours.opens}–{businessNap.openingHours.closes} · {businessNap.category}
              </p>
              <div className="flex items-center gap-2">
                <Mail className="h-3 w-3 flex-shrink-0 text-cyan-300" />
                <a href="mailto:info@livendia.com" className="text-blue-100 hover:text-white transition-colors">
                  info@livendia.com
                </a>
              </div>
            </div>

            {/* Legal y copyright */}
            <div className="mt-4 border-t border-white/20 pt-3">
              <div className="flex flex-wrap gap-2 text-xs text-blue-200 mb-1">
                <Link href="/legal/aviso-legal" className="hover:text-white transition-colors">
                  Aviso legal
                </Link>
                <Link href="/legal/privacidad" className="hover:text-white transition-colors">
                  Privacidad
                </Link>
                <Link href="/legal/cookies" className="hover:text-white transition-colors">
                  Cookies
                </Link>
              </div>
              <p className="text-xs text-blue-100">
                © {currentYear} {legal.legalName}. Todos los derechos reservados.
                {legal.taxId ? ` · ${legal.taxId}` : null}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
