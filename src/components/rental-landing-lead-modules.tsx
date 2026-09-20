import { RedactarContratoAlquilerAdministracionUpsellSection } from "@/components/redactar-contrato-alquiler-administracion-upsell-section";
import { RedactarContratoAlquilerOnlineGestorSection } from "@/components/redactar-contrato-alquiler-online-gestor-section";
import { RedactarContratoAlquilerRedaccionServicioSection } from "@/components/redactar-contrato-alquiler-redaccion-servicio-section";
import { MultiServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import type { PublicService } from "@/lib/catalog.public";
import {
  ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";

type Props = {
  /** Etiqueta visible: «Cornellà de Llobregat», «El Born», etc. */
  placeLabel: string;
  /** Slug de la landing local (contrato-alquiler-local, redactar, habitación…). */
  citySlug: string;
};

/**
 * Bloques transversales al inicio de landings de alquiler:
 * 1) Servicio de redacción del contrato
 * 2) Upsell administración de alquiler
 * 3) Servicio 100% online + gestor operativo
 */
export async function RentalLandingLeadModules({ placeLabel, citySlug }: Props) {
  const catalog = await getPublicServices();
  const lau = catalog.find((s) => s.slug === "contrato-alquiler-lau");
  const admin = catalog.find((s) => s.slug === "administracion-alquiler");
  const servicesBySlug: Partial<Record<string, PublicService>> = {};
  if (lau) servicesBySlug["contrato-alquiler-lau"] = lau;
  if (admin) servicesBySlug["administracion-alquiler"] = admin;

  const lauPrice = resolveServicePriceLabel(lau, CONTRATO_ALQUILER_LAU_PRICE_LABEL);
  const adminPriceLabel = resolveServicePriceLabel(admin, ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL);

  return (
    <MultiServicePurchaseProvider servicesBySlug={servicesBySlug}>
      <RedactarContratoAlquilerRedaccionServicioSection
        placeLabel={placeLabel}
        contractPriceLabel={lauPrice}
      />
      <RedactarContratoAlquilerAdministracionUpsellSection
        placeLabel={placeLabel}
        citySlug={citySlug}
        adminPriceLabel={adminPriceLabel}
      />
      <RedactarContratoAlquilerOnlineGestorSection city={placeLabel} />
    </MultiServicePurchaseProvider>
  );
}
