"use client";

import { HOME_DECRETOS_BANNER_LEAD, VIVIENDA_DECRETOS_ACTUALIZACION_2026 } from "@/lib/vivienda-decretos-actualizacion";
import { ChevronLeft, ChevronRight, Scale, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const INTERVAL_MS = 6500;

type Slide =
  | { kind: "lead" }
  | { kind: "decreto"; index: number };

const SLIDES: Slide[] = [{ kind: "lead" }, ...VIVIENDA_DECRETOS_ACTUALIZACION_2026.map((_, index) => ({ kind: "decreto" as const, index }))];

export function HomeDecretosBannerCarousel() {
  const [active, setActive] = useState(0);
  const paused = useRef(false);
  const len = SLIDES.length;

  const go = useCallback(
    (delta: number) => {
      setActive((i) => (i + delta + len) % len);
    },
    [len],
  );

  useEffect(() => {
    const t = window.setInterval(() => {
      if (paused.current) return;
      setActive((i) => (i + 1) % len);
    }, INTERVAL_MS);
    return () => window.clearInterval(t);
  }, [len]);

  const slide = SLIDES[active];

  return (
    <section
      className="border-b border-[#1A4FBF]/20 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#1A4FBF] text-white"
      aria-label="Actualización normativa de vivienda"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
      onFocusCapture={() => {
        paused.current = true;
      }}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) paused.current = false;
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-6 sm:py-3">
        <div
          className="hidden shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-200 sm:inline-flex sm:text-[11px]"
          aria-hidden
        >
          <ShieldCheck className="h-3.5 w-3.5 text-cyan-300" />
          Normativa 2026
        </div>

        <div className="relative min-h-[3.25rem] min-w-0 flex-1 sm:min-h-[2.75rem]" aria-live="polite">
          {slide.kind === "lead" ? (
            <div className="flex h-full items-center gap-2 pr-1 sm:gap-3">
              <Scale className="hidden h-4 w-4 shrink-0 text-cyan-300 sm:block" aria-hidden />
              <p className="text-xs leading-snug text-blue-50 sm:text-sm">
                <span className="font-semibold text-white">{HOME_DECRETOS_BANNER_LEAD}</span>{" "}
                <Link
                  href="/blog/ley-vivienda-2026-zonas-tensionadas-limite-alquiler"
                  className="font-semibold text-cyan-200 underline decoration-cyan-200/40 underline-offset-2 hover:text-white"
                >
                  Guía Ley de Vivienda
                </Link>
              </p>
            </div>
          ) : (
            (() => {
              const d = VIVIENDA_DECRETOS_ACTUALIZACION_2026[slide.index];
              return (
                <div className="flex h-full flex-col justify-center gap-0.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3 sm:gap-y-0">
                  <p className="text-xs font-bold text-white sm:text-sm">{d.label}</p>
                  <p className="text-[11px] leading-snug text-blue-100/95 sm:text-xs">
                    Aprobado {d.approvedOn}
                    {d.boePublishedOn ? ` · BOE ${d.boePublishedOn}` : ""} · Vigencia: {d.effectiveFrom}
                  </p>
                  <p className="hidden text-xs text-blue-100/80 lg:inline">{d.summary}</p>
                  {d.boeUrl ? (
                    <a
                      href={d.boeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-cyan-200 underline decoration-cyan-200/30 underline-offset-2 hover:text-white sm:text-xs"
                    >
                      Texto BOE
                    </a>
                  ) : null}
                </div>
              );
            })()
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={() => go(-1)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/15"
            aria-label="Aviso anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="hidden items-center gap-1 sm:flex" role="tablist" aria-label="Seleccionar aviso">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Aviso ${i + 1} de ${len}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition ${
                  i === active ? "w-5 bg-cyan-300" : "w-1.5 bg-white/35 hover:bg-white/55"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/15"
            aria-label="Siguiente aviso"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
