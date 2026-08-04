"use client";

import Image from "next/image";
import { LivendiaReveal } from "@/components/livendia-reveal";
import { CreditCard, FileText, ShieldCheck } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: FileText,
    title: "Eliges",
    body: "Servicio o pack según tu operación: alquiler, compraventa o administración.",
    image: "/images/contratos5.jpg",
    imageAlt: "Documentos y contratos inmobiliarios sobre un escritorio",
  },
  {
    step: "02",
    icon: CreditCard,
    title: "Pagas",
    body: "Checkout seguro. Recibes acceso a tu área privada y próximos pasos claros.",
    image: "/images/chica-mobile.jpg",
    imageAlt: "Cliente contratando un servicio desde el móvil",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Gestionamos",
    body: "Subes documentación; nosotros redactamos, revisamos y te acompañamos.",
    image: "/images/gestora1.jpg",
    imageAlt: "Gestora inmobiliaria revisando documentación",
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
            className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-[7.5rem] hidden h-0.5 bg-gradient-to-r from-[#1A4FBF]/20 via-[#1A4FBF] to-[#1A4FBF]/20 md:block"
            aria-hidden
          />

          <ol className="grid auto-rows-fr items-stretch gap-8 md:grid-cols-3">
            {STEPS.map((item, index) => {
              const Icon = item.icon;
              return (
                <LivendiaReveal key={item.step} delay={index * 100} className="h-full">
                  <li className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-[#1A4FBF]/25 hover:shadow-md">
                    <div className="relative h-40 shrink-0 overflow-hidden bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/50 via-transparent to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-[#1A4FBF] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                        Paso {item.step}
                      </span>
                    </div>

                    <div className="flex min-h-[11.5rem] flex-1 flex-col p-6 sm:p-7">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-bold text-[#1E293B]">{item.title}</h3>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF]/10 text-[#1A4FBF]">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                      </div>
                      <p className="mt-3 min-h-[4.75rem] flex-1 text-sm leading-relaxed text-[#475569] sm:text-base">
                        {item.body}
                      </p>
                      <div className="mt-5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#1A4FBF]/30 bg-[#F8FAFC]">
                        <span className="livendia-stamp-dot h-2.5 w-2.5 rounded-full bg-[#1A4FBF]" aria-hidden />
                      </div>
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
