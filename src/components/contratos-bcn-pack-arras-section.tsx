import { CONTRATOS_BCN_PACK_ARRAS_SECTION } from "@/lib/contratos-inmobiliarios-barcelona-content";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContratosBcnPackArrasSection() {
  const s = CONTRATOS_BCN_PACK_ARRAS_SECTION;
  return (
    <section
      id="pack-arras-gestion"
      className="scroll-mt-28 border-b border-slate-200 bg-gradient-to-br from-[#EFF6FF] to-white px-4 py-14 sm:px-6 lg:py-20"
      aria-labelledby="contratos-bcn-pack-arras-title"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">{s.eyebrow}</p>
        <h2 id="contratos-bcn-pack-arras-title" className="mt-2 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
          {s.title}
        </h2>
        <p className="mt-4 max-w-3xl text-[#64748B]">{s.lead}</p>
        <Link
          href={s.hubHref}
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#1A4FBF] px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#2563EB]"
        >
          Ver pack en Barcelona
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <nav aria-label="Pack arras por barrio" className="mt-8 flex flex-wrap gap-2">
          {s.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 transition hover:bg-blue-50 hover:ring-[#1A4FBF]/30"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
