"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { PublicService } from "@/lib/catalog.public";
import { CATEGORY_LABEL, SERVICE_IMAGES } from "@/lib/catalog.public";

/** Máximo de bullets en tarjeta — mantiene altura uniforme en grillas. */
const MAX_CARD_FEATURES = 4;
/** Altura total fija de la tarjeta (imagen h-48 + cuerpo blanco). */
const CARD_HEIGHT_CLASS = "h-[32rem]";
/** Bloques de texto con altura reservada fija para alinear filas. */
const CARD_TITLE_CLASS = "mt-2 line-clamp-2 h-[2.5rem] shrink-0 text-lg font-bold leading-snug text-[#1E293B] group-hover:text-[#1A4FBF]";
const CARD_DESC_CLASS = "mt-2 line-clamp-1 h-[1.25rem] shrink-0 text-sm leading-relaxed text-[#475569]";
const CARD_FEATURES_CLASS = "mt-3 h-[8.5rem] shrink-0 overflow-hidden";

function categoryBadgeLabel(service: PublicService): string {
  const c = service.category ?? "otro";
  return CATEGORY_LABEL[c] ?? "Servicio";
}

export type ServicePurchaseCardProps = {
  service: PublicService;
  onSelect?: () => void;
  href?: string;
  ctaLabel?: string;
  className?: string;
  style?: CSSProperties;
  imageHeightClass?: string;
};

export function ServicePurchaseCard({
  service,
  onSelect,
  href,
  ctaLabel,
  className = "",
  style,
  imageHeightClass = "h-48",
}: ServicePurchaseCardProps) {
  const imageUrl = SERVICE_IMAGES[service.slug] || "/images/gestoria.jpg";
  const label = ctaLabel ?? (href ? "Ver información" : "Ver detalles y contratar");
  const features = service.features ?? [];
  const visibleFeatures = features.slice(0, MAX_CARD_FEATURES);
  const extraFeatures = features.length - visibleFeatures.length;

  const cardClassName = `group flex ${CARD_HEIGHT_CLASS} cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:ring-[#1A4FBF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A4FBF] motion-reduce:transform-none ${className}`;

  const content = (
    <>
      <div className={`relative shrink-0 overflow-hidden bg-slate-100 ${imageHeightClass}`}>
        <Image
          src={imageUrl}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 420px"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-3 py-1 text-xs font-bold text-white shadow-lg">
            {categoryBadgeLabel(service)}
          </span>
          {service.badge ? (
            <span className="rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0E7490] px-3 py-1 text-xs font-bold text-white shadow-lg">
              {service.badge}
            </span>
          ) : null}
        </div>
        <div className="absolute bottom-4 right-4">
          <div className="rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm ring-1 ring-slate-200/80">
            <span className="text-xl font-bold text-[#1A4FBF]">{(service.price_cents / 100).toFixed(0)} €</span>
            {service.is_recurring ? <span className="ml-1 text-xs text-[#64748b]">/mes</span> : null}
            <p className="text-xs text-[#64748b]">IVA incluido</p>
          </div>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden border-t-4 border-[#1A4FBF] p-4 sm:p-6">
        <p className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#94A3B8]">
          EXP · {service.slug}
        </p>
        <h3 className={CARD_TITLE_CLASS}>
          {service.name}
        </h3>
        <p className={CARD_DESC_CLASS}>
          {service.description ?? "\u00A0"}
        </p>

        <div className={CARD_FEATURES_CLASS}>
          {visibleFeatures.length > 0 ? (
            <>
              <ul className="space-y-1.5">
                {visibleFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-[#475569]">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#06B6D4]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="line-clamp-1">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 h-5 text-xs font-semibold text-[#1A4FBF]">
                {extraFeatures > 0 ? `+${extraFeatures} más en la ficha completa` : "\u00A0"}
              </p>
            </>
          ) : (
            <div className="h-full" aria-hidden />
          )}
        </div>

        <div className="mt-auto flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-4 py-3 text-sm font-semibold text-white shadow-md pointer-events-none">
          <span>{label}</span>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} style={style} className={cardClassName} aria-label={`${label}: ${service.name}`}>
        {content}
      </Link>
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect?.();
        }
      }}
      style={style}
      className={cardClassName}
      aria-label={`${label}: ${service.name}`}
    >
      {content}
    </div>
  );
}
