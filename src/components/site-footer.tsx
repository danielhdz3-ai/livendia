import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600000000";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-[#F1F5F9]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Columna 1: Información de la empresa */}
          <div>
            <h3 className="text-lg font-bold text-[#1E293B]">Livendia</h3>
            <p className="mt-2 text-sm text-[#475569]">
              Gestoría inmobiliaria digital. Contratos, administración y gestión profesional para
              alquileres y compraventas.
            </p>
            <div className="mt-4 space-y-2 text-sm text-[#475569]">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#06B6D4]" />
                <span>Calle Ejemplo 123, 28001 Madrid</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-[#06B6D4]" />
                <a href={waHref} className="hover:text-[#1A4FBF]">
                  {WA}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-[#06B6D4]" />
                <a href="mailto:info@livendia.com" className="hover:text-[#1A4FBF]">
                  info@livendia.com
                </a>
              </div>
            </div>
          </div>

          {/* Columna 2: Servicios destacados */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1E293B]">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[#475569]">
              <li>
                <Link
                  href="/servicios/administracion-alquiler"
                  className="hover:text-[#1A4FBF] hover:underline"
                >
                  Administración de Alquileres
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/contrato-alquiler-lau"
                  className="hover:text-[#1A4FBF] hover:underline"
                >
                  Contrato Alquiler LAU
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/contrato-arras-penitenciales"
                  className="hover:text-[#1A4FBF] hover:underline"
                >
                  Arras Penitenciales
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/contrato-arras-confirmatorias"
                  className="hover:text-[#1A4FBF] hover:underline"
                >
                  Arras Confirmatorias
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="font-medium text-[#06B6D4] hover:underline">
                  Ver todos los servicios →
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Enlaces útiles */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1E293B]">
              Información
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[#475569]">
              <li>
                <Link href="/precios" className="hover:text-[#1A4FBF] hover:underline">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#1A4FBF] hover:underline">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-[#1A4FBF] hover:underline">
                  Área de cliente
                </Link>
              </li>
              <li>
                <a href={waHref} className="hover:text-[#1A4FBF] hover:underline">
                  WhatsApp
                </a>
              </li>
              <li>
                <Link href="/#equipo" className="hover:text-[#1A4FBF] hover:underline">
                  Nuestro equipo
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Horario y legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1E293B]">
              Horario de atención
            </h3>
            <div className="mt-4 space-y-1 text-sm text-[#475569]">
              <p>Lunes a Viernes</p>
              <p className="font-medium text-[#1E293B]">9:00 - 18:00</p>
              <p className="mt-3 text-xs text-[#64748b]">
                Consultas por WhatsApp 24/7
              </p>
            </div>
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">
                Legal
              </h4>
              <ul className="mt-2 space-y-1 text-xs text-[#475569]">
                <li>
                  <Link href="/legal/aviso-legal" className="hover:text-[#1A4FBF] hover:underline">
                    Aviso legal
                  </Link>
                </li>
                <li>
                  <Link href="/legal/privacidad" className="hover:text-[#1A4FBF] hover:underline">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/legal/cookies" className="hover:text-[#1A4FBF] hover:underline">
                    Política de cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Barra inferior con copyright */}
        <div className="mt-10 border-t border-slate-200 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#64748b] sm:flex-row">
            <p>© {currentYear} Livendia. Todos los derechos reservados.</p>
            <p className="text-xs">
              CIF: B-12345678 | Gestoría Inmobiliaria Digital
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
            "url": "https://livendia.com",
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
    </footer>
  );
}
