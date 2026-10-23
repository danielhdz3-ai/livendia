"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ContratosBcnServiceSection } from "@/lib/contratos-inmobiliarios-barcelona-content";
import { CheckCircle2 } from "lucide-react";

const ROTATE_MS = 5200;

export function ContratosBcnHeroVisual({ sections }: { sections: readonly ContratosBcnServiceSection[] }) {
  const [index, setIndex] = useState(0);
  const len = sections.length;
  const current = sections[index] ?? sections[0];

  useEffect(() => {
    if (len <= 1) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % len), ROTATE_MS);
    return () => window.clearInterval(t);
  }, [len]);

  if (!current) return null;

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div className="livendia-float-slow pointer-events-none absolute -right-4 top-8 z-20 rounded-2xl bg-white/95 px-4 py-3 shadow-xl ring-1 ring-white/50 backdrop-blur">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#06B6D4]">Entrega media</p>
        <p className="text-xl font-extrabold text-[#1A4FBF]">~48 h</p>
        <p className="text-xs text-[#64748B]">con documentación completa</p>
      </div>
      <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[#0B2D7A]/40 ring-2 ring-white/20">
        <div className="relative aspect-[3/4] w-full max-w-[340px] sm:max-w-[380px] lg:ml-auto lg:max-w-[420px]">
          {sections.map((s, i) => (
            <div
              key={s.id}
              className={`absolute inset-0 transition-all duration-700 ease-out motion-reduce:transition-none ${
                i === index ? "z-10 scale-100 opacity-100" : "z-0 scale-105 opacity-0"
              }`}
            >
              <Image
                src={s.heroImage}
                alt={s.heroImageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width:1024px) 90vw, 480px"
                quality={90}
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#1A4FBF]/25 to-transparent" />
            </div>
          ))}
          <div className="absolute inset-x-0 bottom-0 z-20 p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">{current.eyebrow}</p>
            <p className="mt-2 text-lg font-extrabold leading-snug text-white sm:text-xl">{current.navLabel}</p>
            <p className="mt-2 inline-flex rounded-lg bg-white/15 px-3 py-1 text-sm font-bold text-white backdrop-blur">
              {current.priceLabel}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 border-t border-white/10 bg-[#0B2D7A]/95 px-4 py-3">
          <div className="flex gap-1.5">
            {sections.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Ver ${s.navLabel}`}
                aria-current={i === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-cyan-300" : "w-2 bg-white/35 hover:bg-white/55"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <span className="flex items-center gap-1 text-xs font-medium text-blue-100">
            <CheckCircle2 className="h-3.5 w-3.5 text-cyan-300" aria-hidden />
            IVA incluido
          </span>
        </div>
      </div>
    </div>
  );
}
