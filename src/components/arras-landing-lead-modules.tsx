import { ContratoArrasOnlineGestorSection } from "@/components/contrato-arras-online-gestor-section";
import { ContratoArrasRedaccionServicioSection } from "@/components/contrato-arras-redaccion-servicio-section";
import { CONTRATO_ARRAS_LOCAL_PRICE_LABEL, resolveServicePriceLabel } from "@/lib/catalog.public";
import { getPublicServices } from "@/lib/catalog";

type Props = {
  placeLabel: string;
  legalRegion: "catalunya" | "espana";
};

/**
 * Bloques transversales tras el hero en landings locales de contrato de arras:
 * 1) Servicio de redacción del contrato de arras
 * 2) Servicio 100% online + gestor operativo
 */
export async function ArrasLandingLeadModules({ placeLabel, legalRegion }: Props) {
  const catalog = await getPublicServices();
  const pen = catalog.find((s) => s.slug === "contrato-arras-penitenciales");
  const arrasPriceLabel = resolveServicePriceLabel(pen, CONTRATO_ARRAS_LOCAL_PRICE_LABEL);

  return (
    <>
      <ContratoArrasRedaccionServicioSection
        placeLabel={placeLabel}
        arrasPriceLabel={arrasPriceLabel}
        legalRegion={legalRegion}
      />
      <ContratoArrasOnlineGestorSection city={placeLabel} legalRegion={legalRegion} />
    </>
  );
}
