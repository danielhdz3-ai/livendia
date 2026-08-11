import Image from "next/image";
import Link from "next/link";
import { CheckCircle, MessageCircle } from "lucide-react";
import { getWhatsAppHref } from "@/lib/business-nap";

const COMPANY_SEALS = [
  {
    src: "/images/sello confianza/Sello-Confianza-Online.png",
    alt: "Sello Confianza Online",
  },
  {
    src: "/images/sello confianza/pyme_innovadora_meic-SP_web.png",
    alt: "PYME Innovadora del Ministerio de Economía",
  },
  {
    src: "/images/sello confianza/efqm500.png",
    alt: "Certificación EFQM 500+",
  },
  {
    src: "/images/sello confianza/RGPD.jpg",
    alt: "Cumplimiento RGPD",
  },
  {
    src: "/images/sello confianza/api.jpg",
    alt: "Asociación Profesional Inmobiliaria (API)",
  },
  {
    src: "/images/sello confianza/Logo-ICAB-2023-scaled.jpg",
    alt: "Il·lustre Col·legi de l'Advocacia de Barcelona (ICAB)",
  },
  {
    src: "/images/sello confianza/banner-consejo.jpg",
    alt: "Consejo General de Colegios de Gestores Administrativos de España",
  },
] as const;

/** Bloque de confianza en el pie (sin reseñas ni estrellas — evita errores Review snippets en GSC). */
export function FooterParticularesTestimonials() {
  const waHref = getWhatsAppHref(
    "Hola, me gustaría información sobre gestoría inmobiliaria Livendia para particulares.",
  );

  const points = [
    "Precios fijos publicados: sin comisión de agencia.",
    "Gestor inmobiliario dedicado a tu expediente.",
    "Contratación y documentación 100 % online.",
    "Compraventa, arras, alquiler y administración entre particulares.",
  ];

  return (
    <section
      className="border-y border-slate-200/80 bg-white px-4 py-10 sm:px-6 sm:py-14"
      aria-label="Gestoría inmobiliaria para particulares"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-xl font-bold text-[#1E293B] sm:text-2xl">
            Gestoría de particulares, con proceso claro
          </h2>
          <p className="mt-2 text-sm text-[#475569] sm:text-base">
            Si compras, vendes o alquilas sin agencia, te orientamos antes de contratar. Escríbenos o revisa el
            servicio que encaje con tu caso.
          </p>
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {points.map((line) => (
            <li key={line} className="flex items-start gap-2 text-sm text-[#475569]">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#06B6D4]" aria-hidden />
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={waHref}
            className="inline-flex items-center gap-2 rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1E40AF]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Consultar por WhatsApp
          </a>
          <Link
            href="/servicios"
            className="inline-flex items-center rounded-full border-2 border-[#1A4FBF] px-6 py-3 text-sm font-semibold text-[#1A4FBF] hover:bg-blue-50"
          >
            Ver servicios
          </Link>
        </div>
        <div
          className="mt-8 flex flex-wrap items-center gap-5 sm:gap-8"
          aria-label="Sellos y certificaciones de empresa"
        >
          {COMPANY_SEALS.map((seal) => (
            <Image
              key={seal.src}
              src={seal.src}
              alt={seal.alt}
              width={240}
              height={108}
              className="h-16 w-auto max-w-[11rem] object-contain sm:h-24 sm:max-w-[14rem]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
