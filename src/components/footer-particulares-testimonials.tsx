import { TrustReviewsBlock } from "@/components/trust-reviews-block";

/** Testimonios entre el panel de contacto y el pie azul (todas las páginas públicas). */
export function FooterParticularesTestimonials() {
  return (
    <section
      className="border-y border-slate-200/80 bg-white px-4 py-10 sm:px-6 sm:py-14"
      aria-label="Testimonios de gestoría inmobiliaria para particulares"
    >
      <div className="mx-auto max-w-6xl">
        <TrustReviewsBlock
          title="Gestoría de particulares: lo que dicen quienes ya operaron con nosotros"
          subtitle="Compradores, vendedores y propietarios que gestionan alquiler o compraventa entre particulares, sin depender de una inmobiliaria."
          ctaHref="/servicios"
          ctaLabel="Ver servicios para particulares"
          limit={4}
        />
      </div>
    </section>
  );
}
