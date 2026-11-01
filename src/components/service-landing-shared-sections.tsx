import Link from "next/link";
import { HomeCoverageCities } from "@/components/home-coverage-cities";
import { HomeParticularesServicios } from "@/components/home-particulares-servicios";
import { LivendiaFoundersBanner } from "@/components/livendia-founders-banner";
import { RentalContractPlatformShowcase } from "@/components/rental-contract-platform-showcase";
import { ServiceCommissionCompareSection } from "@/components/service-commission-compare-section";
import { ServiceGestorPlatformSection } from "@/components/service-gestor-platform-section";
import { ServiceLandingCrossSellSection } from "@/components/service-landing-cross-sell-section";
import { ServiceLandingResourceLinksSection } from "@/components/service-landing-resource-links-section";
import { TrustReviewsBlock } from "@/components/trust-reviews-block";
import {
  buildGestorWorkflowContent,
  inferGestorWorkflowService,
  type GestorWorkflowContent,
} from "@/lib/gestor-workflow-content";
import { resolveServiceLandingModuleProfile } from "@/lib/service-landing-module-profile";

const GESTORIA_PRICING_BLOG_PATH = "/blog/cuanto-cuesta-una-gestoria-inmobiliaria" as const;

type ServiceLandingSharedSectionsProps = {
  /** Ciudad para personalizar copy del showcase */
  city?: string;
  /** Servicio mostrado en el mockup de plataforma */
  serviceLabel?: string;
  /** Proceso gestor + plataforma personalizado (si la landing ya lo incluye en el main) */
  gestorWorkflow?: GestorWorkflowContent;
  /** Slug catálogo para CTA del bloque gestor + plataforma */
  primarySlug?: string;
  /** Tutorial plataforma orientado a compra o venta */
  platformServiceKind?: "compra" | "venta" | "generic";
  /** Omitir bloque gestor + plataforma (cuando ya va en el cuerpo de la landing) */
  skipGestorPlatform?: boolean;
  /** Omitir cobertura si la página ya la incluye dentro del main */
  skipCoverage?: boolean;
  /** Omitir TrustReviewsBlock global si la landing ya tiene testimonios locales */
  skipTestimonials?: boolean;
  /** Omitir banner genérico de fundadores (p. ej. si la landing ya muestra perfiles con foto). */
  skipFoundersBanner?: boolean;
  /** CTA del bloque de testimonios */
  testimonialsCtaHref?: string;
  testimonialsCtaLabel?: string;
  /** Slug landing local (madrid, barcelona-eixample…) para hub gestoría en cross-sell */
  localLandingSlug?: string;
  /** Precio venta ejemplo comparativa comisión */
  commissionCompareSalePrice?: number;
  /** Desactiva comparativa aunque el perfil la sugiera */
  skipCommissionCompare?: boolean;
  skipCrossSell?: boolean;
  skipResourceLinks?: boolean;
  /** Mockup panel cliente en alquiler/admin (si el main no lo incluye). */
  skipRentalPlatformShowcase?: boolean;
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
  platformServiceKind = "generic",
  skipGestorPlatform = false,
  skipCoverage = false,
  skipTestimonials = false,
  skipFoundersBanner = false,
  testimonialsCtaHref = "/servicios",
  testimonialsCtaLabel = "Ver todos los servicios",
  localLandingSlug,
  commissionCompareSalePrice,
  skipCommissionCompare = false,
  skipCrossSell = false,
  skipResourceLinks = false,
  skipRentalPlatformShowcase = false,
}: ServiceLandingSharedSectionsProps) {
  const moduleProfile = resolveServiceLandingModuleProfile({ primarySlug, serviceLabel });
  const showRentalPlatform =
    !skipRentalPlatformShowcase && (moduleProfile.kind === "alquiler" || moduleProfile.kind === "admin");
  const resolvedWorkflow =
    gestorWorkflow ??
    buildGestorWorkflowContent({
      city,
      service: inferGestorWorkflowService(serviceLabel),
      serviceLabel,
    });

  return (
    <>
      {!skipCommissionCompare && moduleProfile.showCommissionCompare ? (
        <ServiceCommissionCompareSection
          city={city}
          salePrice={commissionCompareSalePrice}
          primarySlug={primarySlug ?? "servicio-completo-venta"}
        />
      ) : null}
      {!skipCrossSell ? (
        <ServiceLandingCrossSellSection
          items={moduleProfile.crossSell}
          city={city}
          localLandingSlug={localLandingSlug}
        />
      ) : null}
      {!skipResourceLinks ? <ServiceLandingResourceLinksSection links={moduleProfile.resources} /> : null}
      {showRentalPlatform ? (
        <div id="panel-livendia" className="scroll-mt-24 border-b border-slate-200 bg-white">
          <RentalContractPlatformShowcase
            city={city ?? "España"}
            propertyLine={city ? `Inmueble en ${city} · expediente digital Livendia` : undefined}
          />
        </div>
      ) : null}
      {!skipCoverage ? <HomeCoverageCities variant="teaser" /> : null}
      <HomeParticularesServicios />
      <section className="border-b border-slate-200 bg-[#F8FAFC] py-6 sm:py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-[#64748b] sm:px-6">
          <Link href={GESTORIA_PRICING_BLOG_PATH} className="font-semibold text-[#1A4FBF] hover:underline">
            ¿Cuánto cuesta una gestoría inmobiliaria?
          </Link>
          {" · "}
          <Link href="/contacto" className="font-semibold text-[#1A4FBF] hover:underline">
            Habla con un gestor
          </Link>
        </div>
      </section>
      {skipTestimonials ? null : (
        <section className="border-b border-slate-200 bg-white py-12 sm:py-16" aria-labelledby="landing-testimonios">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <TrustReviewsBlock
              title="Lo que dicen quienes ya trabajan con nosotros"
              subtitle="Experiencias reales de propietarios y compradores que delegaron contratos o administración en Livendia."
              ctaHref={testimonialsCtaHref}
              ctaLabel={testimonialsCtaLabel}
              limit={4}
              serviceFilter={moduleProfile.testimonialService}
            />
          </div>
        </section>
      )}
      {skipFoundersBanner ? null : <LivendiaFoundersBanner />}
      {skipGestorPlatform ? null : (
        <ServiceGestorPlatformSection
          workflow={resolvedWorkflow}
          city={city}
          serviceLabel={serviceLabel}
          primarySlug={primarySlug}
          platformServiceKind={platformServiceKind}
        />
      )}
    </>
  );
}
