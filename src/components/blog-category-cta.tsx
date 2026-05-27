import Link from "next/link";
import { MessageCircle, CreditCard, ArrowRight } from "lucide-react";
import { getCategoryCta } from "@/lib/blog-cta";
import type { BlogCategory } from "@/lib/blog-types";

type BlogCategoryCtaProps = {
  category: BlogCategory;
};

export function BlogCategoryCta({ category }: BlogCategoryCtaProps) {
  const cta = getCategoryCta(category);
  const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
  const waHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(cta.whatsappPrefill)}`;

  return (
    <div className="mt-12 rounded-2xl border border-white/20 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1D4ED8] p-8 text-white shadow-xl">
      <p className="text-xl font-extrabold leading-tight">{cta.headline}</p>
      <p className="mt-3 text-sm leading-relaxed text-blue-100">{cta.subline}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href={cta.contratarHref}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] px-8 py-4 text-center text-base font-bold text-[#1E293B] shadow-lg transition hover:scale-[1.02]"
        >
          <CreditCard className="h-5 w-5 shrink-0" aria-hidden />
          {cta.contratarLabel}
        </Link>
        <Link
          href={cta.infoHref}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-white bg-white/10 px-8 py-4 text-center text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
          {cta.infoLabel}
        </Link>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-placement="blog_cta_whatsapp"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-cyan-300/80 bg-cyan-400/15 px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-cyan-400/25"
        >
          <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
