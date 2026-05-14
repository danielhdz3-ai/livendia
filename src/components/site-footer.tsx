import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { getSiteUrl } from "@/lib/site-url";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600000000";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      {/* División sombreada superior */}
      <div className="h-8 bg-gradient-to-b from-white via-slate-50 to-slate-100" />
      <div className="h-4 bg-gradient-to-b from-slate-100 to-[#1E3A8A]/5" />
      
      {/* Footer principal con fondo azul */}
      <div className="bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1D4ED8] text-white">
        <div className="grid lg:grid-cols-2">
          {/* Imagen de la chica */}
          <div className="relative h-[280px] lg:h-[380px]">
            <Image
              src="/images/sofa1.jpg"
              alt="Confianza que se construye"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Contenido del footer */}
          <div className="px-6 py-6 lg:px-10 lg:py-8">
            {/* Título principal */}
            <div className="mb-5">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-2 leading-tight">
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
                    <Link href="/precios" className="text-blue-100 hover:text-white transition-colors">
                      Precios
                    </Link>
                  </li>
                  <li>
                    <Link href="/contacto" className="text-blue-100 hover:text-white transition-colors">
                      Contacto
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
              <div className="flex items-start gap-2 text-blue-100">
                <MapPin className="mt-0.5 h-3 w-3 flex-shrink-0 text-cyan-300" />
                <span>Calle Ejemplo 123, 28001 Madrid</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 flex-shrink-0 text-cyan-300" />
                <a href={waHref} className="text-blue-100 hover:text-white transition-colors">
                  {WA}
                </a>
              </div>
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
                © {currentYear} Livendia. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>

        {/* Schema.org para SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Livendia",
              "description": "Gestoría inmobiliaria digital especializada en contratos de alquiler, compraventa y administración de propiedades",
              "url": getSiteUrl(),
              "telephone": WA,
              "email": "info@livendia.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle Ejemplo 123",
                "addressLocality": "Madrid",
                "postalCode": "28001",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.4168",
                "longitude": "-3.7038"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "priceRange": "€€",
              "areaServed": {
                "@type": "Country",
                "name": "España"
              }
            })
          }}
        />
      </div>
    </footer>
  );
}
