"use client";

import { LivendiaReveal } from "@/components/livendia-reveal";
import { FileText, CreditCard, ShieldCheck } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: FileText,
    title: "Eliges",
    body: "Servicio o pack según tu operación: alquiler, compraventa o administración.",
  },
  {
    step: "02",
    icon: CreditCard,
    title: "Pagas",
    body: "Checkout seguro. Recibes acceso a tu área privada y próximos pasos claros.",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Gestionamos",
    body: "Subes documentación; nosotros redactamos, revisamos y te acompañamos.",
  },
] as const;

export function HomeHowItWorks() {
  return (
    <section id="como-funciona" className="border-b border-slate-200 bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <LivendiaReveal>
          <h2 className="text-center text-2xl font-bold text-[#1E293B] sm:text-3xl">Cómo funciona</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[#475569]">
            Tres pasos para dejar la parte legal y administrativa en manos expertas.
          </p>
        </LivendiaReveal>

        <div className="relative mt-12">
          <div
            className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-8 hidden h-0.5 bg-gradient-to-r from-[#1A4FBF]/20 via-[#1A4FBF] to-[#1A4FBF]/20 md:block"
            aria-hidden
          />

          <ol className="grid gap-8 md:grid-cols-3">
            {STEPS.map((item, index) => {
              const Icon = item.icon;
              return (
                <LivendiaReveal key={item.step} delay={index * 100}>
                  <li className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm transition hover:border-[#1A4FBF]/25 hover:shadow-md">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1A4FBF]">
                        Paso {item.step}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A4FBF] text-white shadow-md">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-[#1E293B]">{item.title}</h3>
                    <p className="mt-2 flex-1 text-[#475569]">{item.body}</p>
                    <div className="mt-6 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#1A4FBF]/30 bg-white">
                      <span className="livendia-stamp-dot h-2.5 w-2.5 rounded-full bg-[#1A4FBF]" aria-hidden />
                    </div>
                  </li>
                </LivendiaReveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
