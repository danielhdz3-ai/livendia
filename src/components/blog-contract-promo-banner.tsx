import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type { BlogContractPromo } from "@/lib/blog-contract-promos";

type BlogContractPromoBannerProps = {
  promo: BlogContractPromo;
  placement: string;
};

export function BlogContractPromoBanner({ promo, placement }: BlogContractPromoBannerProps) {
  return (
    <aside
      className="my-10 overflow-hidden rounded-2xl bg-[#F8FAFC] shadow-lg ring-1 ring-slate-200"
      aria-label={`Oferta Livendia: ${promo.eyebrow}`}
      data-analytics-placement={`${placement}_contract_promo_${promo.id}`}
    >
      <div className="grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="relative min-h-[200px] md:min-h-[240px]">
          <Image
            src={promo.imageSrc}
            alt={promo.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 420px"
            quality={88}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/85 via-[#1A4FBF]/25 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#0f172a]/10" />
          <div className="absolute bottom-0 left-0 right-0 p-5 md:hidden">
            <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-200">{promo.eyebrow}</p>
            <p className="mt-1 text-lg font-extrabold text-white">{promo.priceLabel}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#06B6D4]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Livendia · {promo.eyebrow}
          </p>
          <h3 className="mt-2 text-xl font-extrabold leading-snug text-[#1E293B] sm:text-2xl">{promo.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#64748B] sm:text-base">{promo.body}</p>
          <p className="mt-4 hidden text-sm font-bold text-[#1A4FBF] md:block">{promo.priceLabel}</p>
          <Link
            href={promo.href}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:scale-[1.02] sm:w-auto"
          >
            {promo.ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </aside>
  );
}
