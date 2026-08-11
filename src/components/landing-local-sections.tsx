import type { ReactNode } from "react";
import Image from "next/image";
import {
  LANDING_CTA_GRADIENT,
  LANDING_HERO_GRADIENT,
  LANDING_TESTIMONIALS_SECTION,
} from "@/lib/landing-design-system";

export type LandingLocalTestimonial = {
  quote: string;
  author: string;
  role: string;
};

type LandingLocalHeroSplitProps = {
  badge?: ReactNode;
  title: ReactNode;
  lead: ReactNode;
  bullets?: ReactNode;
  actions?: ReactNode;
  belowActions?: ReactNode;
  image: { src: string; alt: string; objectPosition?: string };
  minHeightClass?: string;
};

/** Hero split imagen + copy — patrón arras · LAU · venta */

export function LandingLocalHeroSplit({
  badge,
  title,
  lead,
  bullets,
  actions,
  belowActions,
  image,
  minHeightClass = "lg:min-h-[650px]",
}: LandingLocalHeroSplitProps) {
  return (
    <section className={`relative overflow-hidden ${LANDING_HERO_GRADIENT} text-white`}>
      <div className="mx-auto max-w-7xl">
        <div className={`grid min-h-0 lg:grid-cols-2 ${minHeightClass}`}>
          <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
            {badge}
            {title}
            {lead}
            {bullets}
            {actions}
            {belowActions}
          </div>
          <div className="relative order-2 h-44 sm:h-56 lg:order-none lg:h-auto lg:min-h-[520px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover ${image.objectPosition ?? "object-center"}`}
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type LandingLocalTestimonialsSectionProps = {
  title: string;
  testimonials: LandingLocalTestimonial[];
  subtitle?: string;
};

/** Testimonios locales — tarjetas blancas sobre fondo slate (modelo estándar) */

export function LandingLocalTestimonialsSection({
  title,
  testimonials,
  subtitle,
}: LandingLocalTestimonialsSectionProps) {
  if (!testimonials.length) return null;

  return (
    <section className={LANDING_TESTIMONIALS_SECTION}>
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">{title}</h2>
          {subtitle ? <p className="mx-auto mt-4 max-w-2xl text-lg text-[#64748b]">{subtitle}</p> : null}
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={`${testimonial.author}-${testimonial.role}`}
              className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200"
            >
              <div className="flex gap-1 text-[#D4AF37]" aria-hidden>
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
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#1A4FBF] to-[#06B6D4]" aria-hidden />
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
  );
}

type LandingLocalFinalCtaSectionProps = {
  children: ReactNode;
  className?: string;
};

/** Banda CTA final azul — patrón arras · LAU · venta */

export function LandingLocalFinalCtaSection({ children, className = "" }: LandingLocalFinalCtaSectionProps) {
  return (
    <section className={`${LANDING_CTA_GRADIENT} px-4 py-20 text-white sm:px-6 ${className}`.trim()}>
      {children}
    </section>
  );
}
