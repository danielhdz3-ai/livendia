"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { PublicService } from "@/lib/catalog.public";
import { ServiceModal } from "@/components/service-modal";
import { ServicePurchaseCard } from "@/components/service-purchase-card";
import { analyticsFromService, checkoutServiceSession } from "@/lib/checkout-service-session";

const INTERVAL_MS = 7200;
const GAP_PX = 24;

interface HomeServicesCarouselProps {
  services: PublicService[];
}

export function HomeServicesCarousel({ services }: HomeServicesCarouselProps) {
  const [selectedService, setSelectedService] = useState<PublicService | null>(null);
  const [visible, setVisible] = useState<1 | 3>(1);
  const [slide, setSlide] = useState(0);
  const [containerW, setContainerW] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => {
      setVisible(mq.matches ? 3 : 1);
      setSlide(0);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setContainerW(el.offsetWidth));
    ro.observe(el);
    setContainerW(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  const len = services.length;
  const maxSlide = visible === 3 ? Math.max(0, len - 3) : Math.max(0, len - 1);
  const activeSlide = Math.min(slide, maxSlide);

  useEffect(() => {
    if (len <= 1) return;
    const t = window.setInterval(() => {
      if (paused.current) return;
      setSlide((s) => {
        const capped = Math.min(s, maxSlide);
        return capped >= maxSlide ? 0 : capped + 1;
      });
    }, INTERVAL_MS);
    return () => window.clearInterval(t);
  }, [maxSlide, len]);

  const handleCheckout = async (
    service: PublicService,
    formData: { fullName: string; email: string; phone: string },
  ) => {
    await checkoutServiceSession(service.id, formData, analyticsFromService(service));
  };

  if (services.length === 0) {
    return (
      <div className="mt-10 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-10 text-center text-[#475569]">
        <p className="font-medium text-[#1E293B]">Catálogo en actualización.</p>
        <p className="mt-2 text-sm">Mientras tanto puedes revisar disponibilidad en la página de servicios.</p>
        <Link
          href="/servicios"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#2563EB]"
        >
          Ver servicios
        </Link>
      </div>
    );
  }

  const basisPx =
    containerW > 0 ? (visible === 1 ? containerW : (containerW - GAP_PX * (visible - 1)) / visible) : 340;

  const stepPx = basisPx + GAP_PX;
  const translateX = activeSlide * stepPx;

  return (
    <>
      <div
        className="mt-10"
        onMouseEnter={() => {
          paused.current = true;
        }}
        onMouseLeave={() => {
          paused.current = false;
        }}
      >
        <div ref={viewportRef} className="relative w-full overflow-hidden pb-1">
          <div
            className="flex gap-6 transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] motion-reduce:transition-none motion-reduce:transform-none"
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {services.map((service, i) => {
              let isCenter = i === activeSlide;
              if (visible === 3) {
                const inWindow = i >= activeSlide && i <= activeSlide + 2;
                isCenter = inWindow && i === activeSlide + 1;
              }
              return (
                <div
                  key={service.id}
                  className="flex h-[32rem] shrink-0 transition-[transform,opacity] duration-300"
                  style={{
                    flex: `0 0 ${basisPx}px`,
                    transform: visible === 3 ? (isCenter ? "scale(1.015)" : "scale(0.985)") : undefined,
                    opacity: visible === 3 ? (isCenter ? 1 : 0.92) : 1,
                  }}
                >
                  <ServicePurchaseCard
                    service={service}
                    onSelect={() => setSelectedService(service)}
                    className={`w-full ${
                      isCenter && visible === 3
                        ? "shadow-[0_28px_50px_-28px_rgb(26_79_191/0.35)] ring-[rgb(26_79_191/0.35)]"
                        : ""
                    }`}
                    imageHeightClass="h-48"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-1">
          {Array.from({ length: maxSlide + 1 }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Grupo ${i + 1} de servicios`}
              aria-current={i === activeSlide ? "true" : undefined}
              className="flex h-11 w-11 items-center justify-center rounded-full"
              onClick={() => setSlide(i)}
            >
              <span
                className={`block rounded-full transition ${
                  i === activeSlide
                    ? "h-3 w-3 scale-100 bg-[#1A4FBF]"
                    : "h-2.5 w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-hidden
              />
            </button>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-[#64748B] motion-reduce:hidden">
          <span className="sm:hidden">Desliza o toca los puntos para ver más servicios.</span>
          <span className="hidden sm:inline">El carrusel avanza solo; mantén el cursor encima para pausarlo.</span>
        </p>
      </div>

      {selectedService ? (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onCheckout={handleCheckout}
        />
      ) : null}
    </>
  );
}
