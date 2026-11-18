import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, KeyRound, Scale } from "lucide-react";
import {
  ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
} from "@/lib/catalog.public";

type OfferCard = {
  href: string;
  image: string;
  imageAlt: string;
  icon: typeof Scale;
  badge: string;
  title: string;
  description: string;
  cta: string;
};

type Props = {
  city: string;
  gestoriaHref: string;
  administracionHref?: string;
  ventaHref?: string;
  className?: string;
};

export function GestoriaPremiumOfferCards({
  city,
  gestoriaHref,
  administracionHref,
  ventaHref,
  className = "",
}: Props) {
  const cards: OfferCard[] = [
    {
      href: gestoriaHref,
      image: "/images/gestoria5.jpg",
      imageAlt: `Gestoría inmobiliaria en ${city}`,
      icon: Scale,
      badge: ventaHref ? `Venta · ${SERVICIO_COMPLETO_CV_PRICE_LABEL}` : "Gestoría local",
      title: ventaHref ? `Gestoría y venta en ${city}` : `Gestoría inmobiliaria en ${city}`,
      description: ventaHref
        ? `Hub local con compraventa, contratos y alquiler. Venta entre particulares desde ${SERVICIO_COMPLETO_CV_PRICE_LABEL} sin comisión del 3–5 %.`
        : "Compraventa entre particulares, reserva, arras y revisión documental con gestor dedicado.",
      cta: ventaHref ? "Ver gestoría local" : "Ver gestoría",
    },
    {
      href: ventaHref ?? "/servicios/contrato-de-arras",
      image: ventaHref ? "/images/servicio-completo-venta-hero.jpg" : "/images/contratodearras.jpg",
      imageAlt: ventaHref ? `Vender sin comisiones en ${city}` : `Contratos en ${city}`,
      icon: KeyRound,
      badge: ventaHref ? `Sin comisiones · ${SERVICIO_COMPLETO_CV_PRICE_LABEL}` : `Contratos · desde ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL}`,
      title: ventaHref ? `Vender en ${city} sin comisiones` : "Contratos LAU, temporada y arras",
      description: ventaHref
        ? "Ya tienes comprador: reserva, arras, trámites y coordinación con notaría con gestor legal."
        : "Redacción en 48–72 h con cláusulas revisadas por gestor antes de firmar.",
      cta: ventaHref ? "Vender sin agencia" : "Ver contratos",
    },
    {
      href: administracionHref ?? "/servicios/administracion-alquiler",
      image: "/images/contratodealquiler.jpg",
      imageAlt: `Gestión de alquiler en ${city}`,
      icon: Home,
      badge: `Alquiler · ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
      title: administracionHref ? `Gestión de alquiler en ${city}` : "Administración de alquileres",
      description:
        "Canal único con el inquilino, incidencias y renovaciones. Sin permanencia ni comisión sobre la renta.",
      cta: administracionHref ? `Contratar en ${city}` : "Ver administración",
    },
  ];

  return (
    <section
      className={`border-b border-slate-200 bg-[#0B1F4A] px-4 py-16 text-white sm:px-6 lg:py-20 ${className}`}
      aria-labelledby="gestoria-offers-heading"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Tarifas fijas · Gestor dedicado</p>
        <h2 id="gestoria-offers-heading" className="mt-3 text-center text-2xl font-extrabold sm:text-4xl">
          Contrata gestoría inmobiliaria en {city}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-blue-100/90 sm:text-lg">
          Elige servicio, paga online y habla con tu gestor por panel o WhatsApp.
        </p>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <li key={card.title}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white/5 shadow-xl ring-1 ring-white/15 backdrop-blur-sm transition hover:bg-white/10 hover:ring-cyan-400/40"
                >
                  <div className="relative h-44 sm:h-52">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F4A] via-[#0B1F4A]/40 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#1A4FBF] shadow-lg">
                      <Icon className="h-3.5 w-3.5" aria-hidden />
                      {card.badge}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-lg font-bold text-white sm:text-xl">{card.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-blue-100/90 sm:text-base">{card.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300">
                      {card.cta}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}