"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { PublicService } from "@/lib/catalog.public";
import { CATEGORY_LABEL, SERVICE_IMAGES } from "@/lib/catalog.public";

function categoryBadgeLabel(service: PublicService): string {
  const c = service.category ?? "otro";
  return CATEGORY_LABEL[c] ?? "Servicio";
}

export type ServicePurchaseCardProps = {
  service: PublicService;
  /** Abre el modal de contratación (nombre/email/teléfono → Stripe). Ignorado si se pasa `href`. */
  onSelect?: () => void;
  /** Si se indica, la tarjeta es un enlace a esta ruta (ficha informativa) en vez de abrir el modal. */
  href?: string;
  /** Texto del botón inferior. Por defecto: "Ver detalles y contratar" (modal) o "Ver información" (enlace). */
  ctaLabel?: string;
  className?: string;
  style?: CSSProperties;
  /** Altura de la franja de imagen (grid estándar: h-48; carrusel: h-52) */
  imageHeightClass?: string;
};

/**
 * Tarjeta única de servicio (mismo diseño en /servicios, /precios, /dashboard/servicios y home).
 * - Con `onSelect` (por defecto): clic → abre ServiceModal en el contenedor padre (contratación directa).
 * - Con `href`: clic → navega a la ficha informativa del servicio (landing SEO), sin abrir el modal.
 */
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
  const cardClassName = `group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition-all hover:shadow-xl hover:ring-[#1A4FBF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A4FBF] ${className}`;

  const content = (
    <>
      <div className={`relative overflow-hidden bg-slate-100 ${imageHeightClass}`}>
        <Image
          src={imageUrl}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 420px"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] px-3 py-1 text-xs font-bold text-[#1E293B] shadow-lg">
            {categoryBadgeLabel(service)}
          </span>
          {service.badge ? (
            <span className="rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0E7490] px-3 py-1 text-xs font-bold text-white shadow-lg">
              {service.badge}
            </span>
          ) : null}
        </div>
        <div className="absolute bottom-4 right-4">
          <div className="rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm">
            <span className="text-xl font-bold text-[#1A4FBF]">
              {(service.price_cents / 100).toFixed(0)} €
            </span>
            {service.is_recurring ? <span className="ml-1 text-xs text-[#64748b]">/mes</span> : null}
            <p className="text-xs text-[#64748b]">IVA incluido</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#1A4FBF]">{service.name}</h3>
          {service.description ? (
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#475569]">{service.description}</p>
          ) : null}

          {service.features && service.features.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {service.features.map((feature, index) => (
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
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="mt-5 flex w-full min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-4 py-3 text-sm font-semibold text-white shadow-md pointer-events-none sm:mt-6">
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
