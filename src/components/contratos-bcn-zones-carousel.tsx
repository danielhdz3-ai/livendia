"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { BarcelonaZoneLink } from "@/lib/contratos-inmobiliarios-barcelona-content";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_MS = 7000;

export function ContratosBcnZonesCarousel({ zones }: { zones: readonly BarcelonaZoneLink[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const paused = useRef(false);

  const syncButtons = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth - 4;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    syncButtons();
    el.addEventListener("scroll", syncButtons, { passive: true });
    const ro = new ResizeObserver(syncButtons);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", syncButtons);
      ro.disconnect();
    };
  }, [zones.length]);

  const scrollByCard = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-zone-card]");
    const step = (card?.offsetWidth ?? 320) + 20;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || zones.length <= 1) return;
    const t = window.setInterval(() => {
      if (paused.current) return;
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 8) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByCard(1);
      }
    }, AUTO_MS);
    return () => window.clearInterval(t);
  }, [zones.length]);

  return (
    <div
      className="relative mt-8"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
    >
      <div className="mb-4 flex justify-end gap-2 sm:absolute sm:-top-14 sm:right-0 sm:mb-0">
        <button
          type="button"
          disabled={!canPrev}
          aria-label="Barrio anterior"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#1A4FBF] disabled:opacity-40"
          onClick={() => scrollByCard(-1)}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          disabled={!canNext}
          aria-label="Barrio siguiente"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#1A4FBF] disabled:opacity-40"
          onClick={() => scrollByCard(1)}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {zones.map((z) => (
          <Link
            key={z.slug}
            href={z.href}
            data-zone-card
            className="group w-[min(100%,320px)] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:ring-[#1A4FBF]/30 sm:w-[340px]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={z.image}
                alt={`${z.heading} — Livendia`}
                fill
                className="object-cover object-center transition duration-500 group-hover:scale-105"
                sizes="340px"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#1A4FBF]/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-200">{z.areaLabel}</p>
                <p className="mt-1 text-xl font-bold text-white">{z.name}</p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-base font-bold text-[#1E293B] group-hover:text-[#1A4FBF]">{z.heading}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-[#64748B]">{z.blurb}</p>
              <span className="mt-3 inline-flex text-sm font-semibold text-[#1A4FBF]">Ver landing local →</span>
            </div>
          </Link>
        ))}
      </div>
      <p className="mt-2 text-center text-xs text-[#64748B] motion-reduce:hidden">
        Carrusel de barrios — desliza en móvil o deja que avance solo
      </p>
    </div>
  );
}
