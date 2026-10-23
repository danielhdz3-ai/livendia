"use client";

import { useEffect, useState } from "react";
import { LIVENDIA_PROCESS_STEPS } from "@/lib/contratos-inmobiliarios-barcelona-content";

const STEP_MS = 4500;

export function ContratosBcnProcessAnimated() {
  const [active, setActive] = useState(0);
  const steps = LIVENDIA_PROCESS_STEPS;
  const len = steps.length;

  useEffect(() => {
    const t = window.setInterval(() => setActive((a) => (a + 1) % len), STEP_MS);
    return () => window.clearInterval(t);
  }, [len]);

  return (
    <div className="mt-12">
      <div className="hidden lg:block">
        <div className="relative flex justify-between gap-2">
          <div className="absolute left-0 right-0 top-5 h-1 rounded-full bg-slate-200" aria-hidden />
          <div
            className="absolute left-0 top-5 h-1 rounded-full bg-gradient-to-r from-[#1A4FBF] to-cyan-400 transition-all duration-700 ease-out motion-reduce:transition-none"
            style={{ width: `${((active + 1) / len) * 100}%` }}
            aria-hidden
          />
          {steps.map((step, i) => {
            const isActive = i === active;
            const isPast = i < active;
            return (
              <button
                key={step.title}
                type="button"
                className="relative z-10 flex max-w-[11rem] flex-1 flex-col items-center text-center"
                onClick={() => setActive(i)}
                aria-current={isActive ? "step" : undefined}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-extrabold transition-all duration-500 ${
                    isActive
                      ? "scale-110 bg-[#1A4FBF] text-white shadow-lg shadow-[#1A4FBF]/40 ring-4 ring-cyan-200/60"
                      : isPast
                        ? "bg-[#1A4FBF] text-white"
                        : "bg-white text-[#64748B] ring-2 ring-slate-200"
                  }`}
                >
                  {i + 1}
                </span>
                <span
                  className={`mt-3 text-sm font-bold transition-colors ${isActive ? "text-[#1A4FBF]" : "text-[#334155]"}`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>
        <div className="livendia-panel-enter mx-auto mt-10 max-w-2xl rounded-2xl bg-white p-8 text-center shadow-xl ring-1 ring-slate-200/80">
          <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">
            Paso {active + 1} de {len}
          </p>
          <p className="mt-3 text-lg leading-relaxed text-[#475569]">{steps[active]?.body}</p>
        </div>
      </div>

      <ol className="grid gap-6 sm:grid-cols-2 lg:hidden">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className={`relative flex flex-col rounded-2xl p-6 shadow-lg ring-1 transition-all duration-500 ${
              i === active
                ? "scale-[1.02] bg-white shadow-[#1A4FBF]/15 ring-[#1A4FBF]/35"
                : "bg-white/80 ring-slate-200/80"
            }`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A4FBF] text-lg font-extrabold text-white">
              {i + 1}
            </span>
            <h3 className="mt-4 text-base font-bold text-[#1E293B]">{step.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748B]">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
