import { LocalCityContextSection } from "@/components/local-market-insight-section";
import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";

type Props = {
  city: string;
  heading?: string;
  serviceNotesHeading?: string;
} & Pick<
  LocalCityLandingFields,
  "localMarketInsight" | "localPriceSnapshot" | "localNeighborhoods" | "localServiceNotes"
>;

/** Renderiza la sección de contexto local si hay datos de mercado, barrios o servicio. */
export function LocalCityContextSectionFromConfig({
  city,
  heading,
  serviceNotesHeading,
  localMarketInsight,
  localPriceSnapshot,
  localNeighborhoods,
  localServiceNotes,
}: Props) {
  if (
    !localMarketInsight &&
    !localPriceSnapshot &&
    !(localNeighborhoods && localNeighborhoods.length > 0)
  ) {
    return null;
  }

  return (
    <LocalCityContextSection
      city={city}
      heading={heading}
      serviceNotesHeading={serviceNotesHeading}
      insight={localMarketInsight}
      priceSnapshot={localPriceSnapshot}
      neighborhoods={localNeighborhoods}
      serviceNotes={localServiceNotes}
    />
  );
}
