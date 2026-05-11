"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ServiceModal } from "@/components/service-modal";
import type { PublicService } from "@/lib/catalog";

interface ServiceCardsClientProps {
  services: PublicService[];
}

// Mapa de imágenes por slug de servicio
const SERVICE_IMAGES: Record<string, string> = {
  "administracion-alquiler": "/images/gestoria.jpg",
  "contrato-alquiler-lau": "/images/contratos.jpg",
  "contrato-alquiler-temporada": "/images/contratos5.jpg",
  "contrato-alquiler-habitacion": "/images/contratos2.jpg",
  "contrato-arras-penitenciales": "/images/contratos1.jpg",
  "contrato-arras-confirmatorias": "/images/contratos7.jpg",
  "reserva-de-compra": "/images/contratos6.jpg",
};

export function ServiceCardsClient({ services }: ServiceCardsClientProps) {
  const [selectedService, setSelectedService] = useState<PublicService | null>(null);
  const router = useRouter();

  const handleCheckout = async (
    service: PublicService,
    formData: { fullName: string; email: string; phone: string }
  ) => {
    try {
      // Crear sesión de Stripe con los datos del usuario
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId: service.id,
          email: formData.email,
          fullName: formData.fullName,
          phone: formData.phone,
        }),
      });

      const { url } = await response.json();
      
      if (url) {
        // Redirigir a Stripe
        window.location.href = url;
      }
    } catch (error) {
      console.error("Error al iniciar checkout:", error);
      alert("Error al procesar el pago. Por favor, intenta de nuevo.");
    }
  };

  return (
    <>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const imageUrl = SERVICE_IMAGES[service.slug] || "/images/gestoria.jpg";
          
          return (
            <li
              key={service.id}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition-all hover:shadow-xl hover:ring-[#1A4FBF]"
              onClick={() => setSelectedService(service)}
            >
              {/* Imagen */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <Image
                  src={imageUrl}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Badge de categoría */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] px-3 py-1 text-xs font-bold text-[#1E293B] shadow-lg">
                    {service.category === "compraventa" ? "Compraventa" : service.category === "alquiler" ? "Alquiler" : service.category === "administracion_alquiler" ? "Gestión" : "Servicio"}
                  </span>
                </div>
                {/* Precio badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm">
                    <span className="text-xl font-bold text-[#1A4FBF]">
                      {(service.price_cents / 100).toFixed(0)} €
                    </span>
                    {service.is_recurring && (
                      <span className="ml-1 text-xs text-[#64748b]">/mes</span>
                    )}
                    <p className="text-xs text-[#64748b]">IVA incluido</p>
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#1A4FBF]">
                  {service.name}
                </h3>
                {service.description && (
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#475569]">
                    {service.description}
                  </p>
                )}

                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg">
                  <span>Ver detalles y contratar</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          imageUrl={SERVICE_IMAGES[selectedService.slug] || "/images/gestoria.jpg"}
          onClose={() => setSelectedService(null)}
          onCheckout={handleCheckout}
        />
      )}
    </>
  );
}
