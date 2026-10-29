import {
  CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIOS,
  contratosInmobiliariosBarrioPath,
} from "@/lib/contratos-inmobiliarios-barcelona-barrios";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContratosBcnFeaturedBarrios({ currentSlug }: { currentSlug?: string } = {}) {
  return (
    <section
      id="barrios-destacados"
      className="scroll-mt-28 border-b border-slate-200 bg-white px-4 py-14 sm:px-6 lg:py-20"
      aria-labelledby="contratos-bcn-barrios-destacados-title"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Diez barrios</p>
        <h2 id="contratos-bcn-barrios-destacados-title" className="mt-2 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
          Contratos inmobiliarios por barrio y zona en Barcelona
        </h2>
        <p className="mt-4 max-w-3xl text-[#64748B]">
          Landings dedicadas con contexto local (LAU, arras, habitación, temporada) y enlace a contratar online. Elige
          tu zona o{" "}
          <Link href="#zonas" className="font-semibold text-[#1A4FBF] hover:underline">
            explora todos los municipios
          </Link>
          .
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {CONTRATOS_INMOBILIARIOS_BARCELONA_BARRIOS.map((b) => (
            <Link
              key={b.slug}
              href={contratosInmobiliariosBarrioPath(b.slug)}
              className={`group flex flex-col overflow-hidden rounded-2xl bg-[#F8FAFC] shadow-md ring-1 transition hover:-translate-y-1 hover:shadow-xl ${
                b.slug === currentSlug
                  ? "ring-2 ring-[#1A4FBF] shadow-[#1A4FBF]/20"
                  : "ring-slate-200 hover:ring-[#1A4FBF]/30"
              }`}
              aria-current={b.slug === currentSlug ? "page" : undefined}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={b.image}
                  alt={b.imageAlt}
                  fill
                  className="object-cover object-center transition duration-500 group-hover:scale-105"
                  sizes="(max-width:640px) 50vw, 20vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#1A4FBF]/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-200">{b.districtLabel}</p>
                  <p className="mt-1 text-lg font-bold text-white">{b.name}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-[#64748B]">{b.lead.slice(0, 120)}…</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#1A4FBF]">
                  Contratos en {b.name}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
