import Link from "next/link";
import { Building2, FileText, KeyRound, MapPin } from "lucide-react";
import { OfficeMap } from "@/components/office-map";
import {
  BARCELONA_PACK_COMPRADOR_HUB_LINK,
  BARCELONA_REGIONAL_HUB_DOORS,
  BARCELONA_REGIONAL_HUB_SECTION_ID,
} from "@/lib/barcelona-regional-hub";
import {
  getBusinessAddressDisplayLine,
  getBusinessMapsExternalUrl,
  getBusinessPostalCode,
  getBusinessStreetAddress,
} from "@/lib/business-nap";
import {
  ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
  PACK_COMPRADOR_BARCELONA_PRICE_LABEL,
} from "@/lib/catalog.public";

const DOOR_ICONS = {
  contratos: FileText,
  compraventa: Building2,
  admin: KeyRound,
  despacho: MapPin,
} as const;

type Props = {
  /** Título de sección (hub ciudades vs home). */
  title?: string;
  lead?: string;
  showPackComprador?: boolean;
  /** Mapa embebido + dirección del despacho Les Corts. */
  showOfficeMapBanner?: boolean;
};

export function BarcelonaRegionalHubCards({
  title = "Barcelona: sede Les Corts + cobertura metropolitana",
  lead = "Única ciudad con despacho físico Livendia. El resto de España es 100 % online; aquí sumamos contratos por barrio, compraventa, administración de alquiler con gestor en campo y cita en Mejía Lequerica 44.",
  showPackComprador = true,
  showOfficeMapBanner = true,
}: Props) {
  const despachoDoor = BARCELONA_REGIONAL_HUB_DOORS.find((d) => d.id === "despacho");
  const mapsUrl = getBusinessMapsExternalUrl();
  const addressLine = getBusinessAddressDisplayLine();
  const street = getBusinessStreetAddress();
  const postal = getBusinessPostalCode();

  return (
    <section
      id={BARCELONA_REGIONAL_HUB_SECTION_ID}
      className="scroll-mt-24 rounded-2xl border-2 border-[#1A4FBF]/20 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F8FAFC] p-6 shadow-sm ring-1 ring-slate-100 sm:p-8"
      aria-labelledby="barcelona-regional-hub-title"
    >
      <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Hub Barcelona · Cataluña</p>
      <h2 id="barcelona-regional-hub-title" className="mt-2 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#64748b] sm:text-base">{lead}</p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {BARCELONA_REGIONAL_HUB_DOORS.map((door) => {
          const Icon = DOOR_ICONS[door.id as keyof typeof DOOR_ICONS] ?? FileText;
          return (
            <li key={door.id}>
              <Link
                href={door.href}
                className={`group flex h-full flex-col rounded-xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                  door.highlight ? "border-[#1A4FBF]/40 ring-1 ring-[#1A4FBF]/15" : "border-slate-200"
                }`}
              >
                <Icon className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
                <h3 className="mt-3 text-lg font-bold text-[#1E293B]">{door.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748b]">{door.description}</p>
                <span className="mt-4 text-sm font-semibold text-[#1A4FBF] group-hover:underline">{door.cta} →</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {showOfficeMapBanner ? (
        <div
          className="mt-8 overflow-hidden rounded-2xl border border-[#1A4FBF]/20 bg-white shadow-md ring-1 ring-slate-100"
          aria-labelledby="barcelona-regional-hub-map-title"
        >
          <span id="barcelona-regional-hub-map-title" className="sr-only">
            Ubicación del despacho Livendia en Les Corts
          </span>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-stretch">
            <div className="flex flex-col justify-center border-b border-slate-200 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Sede física · Barcelona</p>
              <h3 className="mt-2 text-xl font-extrabold text-[#1E293B] sm:text-2xl">Despacho Livendia — Les Corts</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#64748b] sm:text-base">
                Cita presencial con tu gestor inmobiliario. El mismo equipo que tramita tu contrato online puede
                revisar arras, LAU o compraventa contigo en persona.
              </p>
              <address className="mt-5 not-italic text-sm text-[#334155] sm:text-base">
                <span className="flex items-start gap-3 font-semibold text-[#1E293B]">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden />
                  <span>
                    {street}
                    <br />
                    {postal} Barcelona · distrito Les Corts
                  </span>
                </span>
              </address>
              <p className="mt-3 text-sm text-[#64748b]">
                Metro L3 Les Corts / Zona Universitària · FGC · aparcamiento en calle Mejía Lequerica.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#1A4FBF]/30 bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1A4FBF] hover:bg-[#DBEAFE]"
                >
                  <MapPin className="h-4 w-4" aria-hidden />
                  Abrir en Google Maps
                </a>
                {despachoDoor ? (
                  <Link
                    href={despachoDoor.href}
                    className="inline-flex min-h-11 items-center rounded-full bg-[#1A4FBF] px-4 py-2 text-sm font-bold text-white hover:bg-[#2563EB]"
                  >
                    Reservar cita en despacho
                  </Link>
                ) : null}
              </div>
              <p className="mt-4 text-xs text-[#64748b]">{addressLine}</p>
            </div>
            <OfficeMap
              minHeightClassName="min-h-[220px] sm:min-h-[260px] lg:min-h-[320px]"
              title={`Mapa: ${addressLine}`}
              className="h-full lg:min-h-[320px]"
            />
          </div>
        </div>
      ) : null}

      {showPackComprador ? (
        <div className="mt-6 rounded-xl border border-cyan-200/80 bg-cyan-50/60 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
          <div>
            <p className="text-sm font-bold text-[#1E293B]">Comprador en Barcelona</p>
            <p className="mt-1 text-sm text-[#64748b]">
              {BARCELONA_PACK_COMPRADOR_HUB_LINK.label} — {PACK_COMPRADOR_BARCELONA_PRICE_LABEL} IVA incl. (informe
              post-arras + cita en despacho Les Corts).
            </p>
          </div>
          <Link
            href={BARCELONA_PACK_COMPRADOR_HUB_LINK.href}
            className="mt-3 inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#2563EB] sm:mt-0"
          >
            Ver pack comprador
          </Link>
        </div>
      ) : null}

      <p className="mt-4 text-xs text-[#64748b]">
        Administración desde {ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl. · Mismo catálogo nacional en{" "}
        <Link href="/servicios" className="font-semibold text-[#1A4FBF] hover:underline">
          /servicios
        </Link>
      </p>
    </section>
  );
}
