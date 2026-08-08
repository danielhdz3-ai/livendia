import { HomeCoverageCities } from "@/components/home-coverage-cities";
import { HomeParticularesServicios } from "@/components/home-particulares-servicios";
import { LivendiaFoundersBanner } from "@/components/livendia-founders-banner";
import { ServiceGestorPlatformSection } from "@/components/service-gestor-platform-section";
import { TrustReviewsBlock } from "@/components/trust-reviews-block";
import {
  buildGestorWorkflowContent,
  inferGestorWorkflowService,
  type GestorWorkflowContent,
} from "@/lib/gestor-workflow-content";

type ServiceLandingSharedSectionsProps = {
  /** Ciudad para personalizar copy del showcase */
  city?: string;
  /** Servicio mostrado en el mockup de plataforma */
  serviceLabel?: string;
  /** Proceso gestor + plataforma personalizado (si la landing ya lo incluye en el main) */
  gestorWorkflow?: GestorWorkflowContent;
  /** Slug catálogo para CTA del bloque gestor + plataforma */
  primarySlug?: string;
  /** Omitir bloque gestor + plataforma (cuando ya va en el cuerpo de la landing) */
  skipGestorPlatform?: boolean;
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
  gestorWorkflow,
  primarySlug,
  skipGestorPlatform = false,
  skipCoverage = false,
  testimonialsCtaHref = "/servicios",
  testimonialsCtaLabel = "Ver todos los servicios",
}: ServiceLandingSharedSectionsProps) {
  const resolvedWorkflow =
    gestorWorkflow ??
    buildGestorWorkflowContent({
      city,
      service: inferGestorWorkflowService(serviceLabel),
      serviceLabel,
    });

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
      {skipGestorPlatform ? null : (
        <ServiceGestorPlatformSection
          workflow={resolvedWorkflow}
          city={city}
          serviceLabel={serviceLabel}
          primarySlug={primarySlug}
        />
      )}
    </>
  );
}
