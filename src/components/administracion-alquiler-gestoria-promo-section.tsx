import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, KeyRound, Scale } from "lucide-react";
import {
  isGestoriaInmobiliariaLocalSlugPublished,
  localGestoriaInmobiliariaHref,
} from "@/lib/gestoria-inmobiliaria-local-cities";
import {
  isVenderPisoSinAgenciaSlugPublished,
  localVenderPisoSinAgenciaHref,
} from "@/lib/vender-piso-sin-agencia-local-cities";
import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";
import { CONTRATO_ARRAS_LOCAL_PRICE_LABEL } from "@/lib/catalog.public";
import { localGestoriaCityVerticalHref, getGestoriaCityVerticalHub } from "@/lib/gestoria-city-vertical-hub";

type CardDef = {
  href: string;
  image: string;
  imageAlt: string;
  icon: typeof Scale;
  badge: string;
  title: string;
  description: string;
  cta: string;
};

export function AdministracionAlquilerGestoriaPromoSection({
  citySlug,
  city,
}: {
  citySlug: string;
  city: string;
}) {
  if (!isGestoriaInmobiliariaLocalSlugPublished(citySlug)) {
    return null;
  }

  const alquilerHub = getGestoriaCityVerticalHub(citySlug, "alquiler");

  const cards: CardDef[] = [
    {
      href: localGestoriaInmobiliariaHref(citySlug),
      image: "/images/gestoria3.jpg",
      imageAlt: `Gestoría inmobiliaria en ${city} — Livendia`,
      icon: Scale,
      badge: "Gestoría inmobiliaria",
      title: `Gestoría completa en ${city}`,
      description: `Compraventa entre particulares, arras, revisión documental y contratos LAU. Tarifas fijas y gestor legal dedicado — sin comisión del 3-5 %.`,
      cta: "Ver gestoría en tu ciudad",
    },
    {
      href: alquilerHub ? localGestoriaCityVerticalHref(citySlug, "alquiler") : "/servicios/contrato-de-arras",
      image: "/images/contratodealquiler.jpg",
      imageAlt: `Contratos de alquiler y arras en ${city}`,
      icon: KeyRound,
      badge: `Contratos · desde ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL}`,
      title: `Contratos y arras en ${city}`,
      description: `Redacción de contrato de alquiler, arras penitenciales y revisión legal antes de firmar. Entrega en 48-72 h con gestor dedicado.`,
      cta: alquilerHub ? `Hub alquiler ${city}` : "Ver contrato de arras",
    },
  ];

  if (isVenderPisoSinAgenciaSlugPublished(citySlug)) {
    cards.push({
      href: localVenderPisoSinAgenciaHref(citySlug),
      image: "/images/servicio-completo-venta-hero.jpg",
      imageAlt: `Vender piso sin comisiones en ${city}`,
      icon: Home,
      badge: `Venta · ${SERVICIO_COMPLETO_CV_PRICE_LABEL}`,
      title: `Vender en ${city} sin comisiones`,
      description: `Ya tienes comprador particular: gestoría de venta completa con trámites, arras y coordinación hasta notaría.`,
      cta: "Vender sin agencia",
    });
  }

  return (
    <section
      className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6"
      aria-labelledby="admin-gestoria-promo-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Gestoría Livendia</p>
          <h2
            id="admin-gestoria-promo-title"
            className="mt-2 text-2xl font-extrabold text-[#1E293B] sm:text-4xl"
          >
            Más servicios de gestoría inmobiliaria en {city}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#64748b]">
            Administras el alquiler aquí; para compraventa, contratos o venta sin inmobiliaria, el mismo equipo y
            precios publicados.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <li key={card.href}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#F8FAFC] shadow-lg ring-1 ring-slate-200 transition hover:shadow-2xl hover:ring-[#1A4FBF]/50"
                >
                  <div className="relative h-44 w-full sm:h-48">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-[#0f172a]/20 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#1A4FBF] shadow">
                      <Icon className="h-3.5 w-3.5" aria-hidden />
                      {card.badge}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#1A4FBF]">{card.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#64748b]">{card.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1A4FBF]">
                      {card.cta}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
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