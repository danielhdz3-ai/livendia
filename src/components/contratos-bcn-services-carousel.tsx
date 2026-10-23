"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ContratarSlugButton } from "@/components/service-purchase-provider";
import type { ContratosBcnServiceSection } from "@/lib/contratos-inmobiliarios-barcelona-content";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_MS = 6500;

export function ContratosBcnServicesCarousel({ sections }: { sections: readonly ContratosBcnServiceSection[] }) {
  const [active, setActive] = useState(0);
  const paused = useRef(false);
  const len = sections.length;

  useEffect(() => {
    if (len <= 1) return;
    const t = window.setInterval(() => {
      if (paused.current) return;
      setActive((a) => (a + 1) % len);
    }, AUTO_MS);
    return () => window.clearInterval(t);
  }, [len]);

  const go = (dir: -1 | 1) => {
    setActive((a) => (a + dir + len) % len);
  };

  const slide = sections[active];
  if (!slide) return null;

  return (
    <section
      className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-[#F8FAFC] to-[#EFF6FF] px-4 py-14 sm:px-6 lg:py-20"
      aria-labelledby="contratos-bcn-carousel-title"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
    >
      <div className="pointer-events-none absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#1A4FBF]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-0 h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Explora servicios</p>
            <h2 id="contratos-bcn-carousel-title" className="mt-2 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
              Todos los contratos inmobiliarios en un carrusel
            </h2>
            <p className="mt-3 max-w-xl text-sm text-[#64748B] sm:text-base">
              Desliza, usa las flechas o déjalo avanzar solo. Cada tarjeta enlaza al apartado completo y a contratar online.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Servicio anterior"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#1A4FBF] shadow-sm transition hover:bg-[#EFF6FF]"
              onClick={() => go(-1)}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Servicio siguiente"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#1A4FBF] shadow-sm transition hover:bg-[#EFF6FF]"
              onClick={() => go(1)}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-2xl shadow-[#1A4FBF]/10 ring-1 ring-slate-200/90">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] motion-reduce:transition-none"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {sections.map((s, i) => (
              <article
                key={s.id}
                className="grid w-full shrink-0 grid-cols-1 lg:grid-cols-2"
                aria-hidden={i !== active}
              >
                <div className="relative aspect-[16/10] w-full lg:aspect-auto lg:min-h-[320px]">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width:1024px) 100vw, 560px"
                    quality={92}
                  />
                  <div className="absolute left-4 top-4 rounded-xl bg-[#1A4FBF] px-3 py-1.5 text-xs font-bold uppercase text-white shadow-lg">
                    {s.priceLabel}
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#06B6D4]">{s.eyebrow}</p>
                  <h3 className="mt-2 text-2xl font-extrabold text-[#1E293B]">{s.title}</h3>
                  <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-[#64748B]">{s.lead}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <ContratarSlugButton
                      slug={s.serviceSlug}
                      className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#1A4FBF] px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#2563EB]"
                    >
                      Contratar
                      <ArrowRight className="h-4 w-4" />
                    </ContratarSlugButton>
                    <Link
                      href={`#${s.id}`}
                      className="inline-flex min-h-11 items-center rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-[#1A4FBF] hover:bg-slate-50"
                    >
                      Leer apartado
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {sections.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={s.navLabel}
              aria-current={i === active ? "true" : undefined}
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                i === active
                  ? "bg-[#1A4FBF] text-white shadow-md"
                  : "bg-white text-[#475569] ring-1 ring-slate-200 hover:bg-[#EFF6FF]"
              }`}
            >
              {s.navLabel}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
