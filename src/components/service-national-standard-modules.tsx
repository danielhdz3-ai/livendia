import { ContratoArrasOnlineGestorSection } from "@/components/contrato-arras-online-gestor-section";
import { GestoriaOnlineDigitalSection } from "@/components/gestoria-online-digital-section";
import { LivendiaExpertGestorsSection } from "@/components/livendia-expert-gestors-section";
import { RedactarContratoAlquilerOnlineGestorSection } from "@/components/redactar-contrato-alquiler-online-gestor-section";
import { VentaSinAgenciaPasoAPasoSection } from "@/components/venta-sin-agencia-paso-a-paso-section";
import {
  resolveNationalServicePasoAPaso,
  type NationalExpertGestorsVariant,
} from "@/lib/national-service-paso-a-paso";
import { resolveServiceLandingModuleProfile } from "@/lib/service-landing-module-profile";

const CITY_LABEL = "toda España";

type Props = {
  primarySlug: string;
  priceLabel: string;
  serviceLabel?: string;
  skipPasoAPaso?: boolean;
  skipOnlineSinDesplazamientos?: boolean;
  skipExpertGestors?: boolean;
};

export function ServiceNationalStandardModules({
  primarySlug,
  priceLabel,
  serviceLabel,
  skipPasoAPaso = false,
  skipOnlineSinDesplazamientos = false,
  skipExpertGestors = false,
}: Props) {
  const profile = resolveServiceLandingModuleProfile({ primarySlug, serviceLabel });
  const bundle = resolveNationalServicePasoAPaso(primarySlug, priceLabel, serviceLabel ?? "Servicio Livendia", profile.kind);

  return (
    <>
      {!skipPasoAPaso ? (
        <VentaSinAgenciaPasoAPasoSection
          city={CITY_LABEL}
          priceLabel={priceLabel}
          eyebrow={bundle.meta.eyebrow}
          title={bundle.meta.title}
          intro={bundle.meta.intro}
          steps={bundle.steps}
          alwaysWithYouTitle={bundle.meta.alwaysWithYouTitle}
          alwaysWithYouBody={bundle.meta.alwaysWithYouBody}
          serviceLine={bundle.meta.serviceLine}
          feeNote={bundle.meta.feeNote}
          stepImageObjectFit="cover"
        />
      ) : null}

      {!skipExpertGestors ? (
        <LivendiaExpertGestorsSection variant={bundle.expertVariant} className="bg-[#F8FAFC]" />
      ) : null}

      {!skipOnlineSinDesplazamientos ? (
        bundle.onlineModule === "alquiler-gestor" ? (
          <RedactarContratoAlquilerOnlineGestorSection />
        ) : bundle.onlineModule === "arras-gestor" ? (
          <ContratoArrasOnlineGestorSection legalRegion="espana" />
        ) : (
          <GestoriaOnlineDigitalSection
            city="toda España"
            schemaAdministrativeArea="España"
            focus={bundle.gestoriaFocus}
            primarySlug={primarySlug}
          />
        )
      ) : null}
    </>
  );
}