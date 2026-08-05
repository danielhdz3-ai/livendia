import { ClientPlatformShowcase } from "@/components/client-platform-showcase";
import { HomeCoverageCities } from "@/components/home-coverage-cities";
import { HomeParticularesServicios } from "@/components/home-particulares-servicios";
import { LivendiaFoundersBanner } from "@/components/livendia-founders-banner";
import { TrustReviewsBlock } from "@/components/trust-reviews-block";

type ServiceLandingSharedSectionsProps = {
  /** Ciudad para personalizar copy del showcase */
  city?: string;
  /** Servicio mostrado en el mockup de plataforma */
  serviceLabel?: string;
  /** Omitir cobertura si la página ya la incluye dentro del main */
  skipCoverage?: boolean;
  /** CTA del bloque de testimonios */
  testimonialsCtaHref?: string;
  testimonialsCtaLabel?: string;
};

/**
 * Secciones compartidas al pie de landings de servicio: cobertura, particulares,
 * testimonios, quiénes somos y plataforma cliente.
 */
export function ServiceLandingSharedSections({
  city,
  serviceLabel,
  skipCoverage = false,
  testimonialsCtaHref = "/servicios",
  testimonialsCtaLabel = "Ver todos los servicios",
}: ServiceLandingSharedSectionsProps) {
  return (
    <>
      {!skipCoverage ? <HomeCoverageCities variant="teaser" /> : null}
      <HomeParticularesServicios />
      <section className="border-b border-slate-200 bg-white py-12 sm:py-16" aria-labelledby="landing-testimonios">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <TrustReviewsBlock
            title="Lo que dicen quienes ya trabajan con nosotros"
            subtitle="Experiencias reales de propietarios y compradores que delegaron contratos o administración en Livendia."
            ctaHref={testimonialsCtaHref}
            ctaLabel={testimonialsCtaLabel}
            limit={4}
          />
        </div>
      </section>
      <LivendiaFoundersBanner />
      <ClientPlatformShowcase city={city} serviceLabel={serviceLabel} />
    </>
  );
}
