import Link from "next/link";
import { Star } from "lucide-react";
import { businessNap } from "@/lib/business-nap";
import { LIVENDIA_TESTIMONIALS } from "@/lib/testimonials";

type TrustReviewsBlockProps = {
  title?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
  className?: string;
  /** Mostrar solo N testimonios (por defecto todos) */
  limit?: number;
};

export function TrustReviewsBlock({
  title = "Lo que dicen quienes ya trabajan con nosotros",
  subtitle = "Experiencias reales de propietarios y compradores que delegaron contratos o administración en Livendia.",
  ctaHref = "/servicios/administracion-alquiler",
  ctaLabel = "Ver administración de alquiler",
  className = "",
  limit,
}: TrustReviewsBlockProps) {
  const { ratingValue, reviewCount } = businessNap.aggregateRating;
  const items = limit ? LIVENDIA_TESTIMONIALS.slice(0, limit) : LIVENDIA_TESTIMONIALS;

  return (
    <section className={`${className}`} aria-label="Testimonios de clientes">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h2 className="text-xl font-bold text-[#1E293B] sm:text-2xl">{title}</h2>
          {subtitle ? <p className="mt-2 text-sm text-[#475569] sm:text-base">{subtitle}</p> : null}
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[#F8FAFC] px-4 py-2 ring-1 ring-slate-200">
          <div className="flex text-amber-400" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="text-sm font-semibold text-[#1E293B]">
            {ratingValue.toFixed(1)} en Google
            <span className="font-normal text-[#64748B]"> · {reviewCount} reseñas</span>
          </p>
        </div>
      </div>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((t) => (
          <li
            key={`${t.author}-${t.context}`}
            className="flex flex-col rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
          >
            <div className="flex text-amber-400" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#475569]">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-3 text-xs font-semibold text-[#1E293B]">{t.author}</p>
            <p className="text-xs text-[#64748B]">{t.context}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-center text-xs text-[#64748B]">
        Valoración en Google Business Profile. ¿Quieres el mismo trato?{" "}
        <Link href={ctaHref} className="font-semibold text-[#1A4FBF] hover:underline">
          {ctaLabel}
        </Link>
      </p>
    </section>
  );
}
