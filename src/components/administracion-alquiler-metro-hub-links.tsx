import Link from "next/link";
import {
  ADMINISTRACION_ALQUILER_BARCELONA_CITY_HUB,
  ADMINISTRACION_ALQUILER_BARCELONA_METRO_LANDINGS,
  administracionAlquilerMetroHref,
} from "@/lib/administracion-alquiler-barcelona-metro";
import { isAdministracionAlquilerMetroSegmentPublished } from "@/lib/administracion-alquiler-metro-landings";

type Props = {
  /** Si true, muestra titular breve encima del listado */
  showTitle?: boolean;
  variant?: "default" | "compact";
};

/** Enlaces barrio/municipio AMB desde la landing de ciudad Barcelona. */
export function AdministracionAlquilerMetroHubLinks({ showTitle = true, variant = "default" }: Props) {
  const isCompact = variant === "compact";
  const linkClass = isCompact
    ? "rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#1A4FBF] ring-1 ring-[#BFDBFE] transition hover:bg-blue-100"
    : "rounded-full bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-[#BFDBFE] transition hover:bg-blue-100";

  const published = ADMINISTRACION_ALQUILER_BARCELONA_METRO_LANDINGS.filter((l) =>
    isAdministracionAlquilerMetroSegmentPublished(l.segments),
  );
  const barrios = published.filter((l) => l.kind === "barrio");
  const subbarrios = published.filter((l) => l.kind === "subbarrio");
  const municipios = published.filter((l) => l.kind === "municipio");

  return (
    <div className="space-y-4">
      {showTitle ? (
        <div>
          <h2 className="text-xl font-bold text-[#1E293B] sm:text-2xl">
            Administración de alquiler por barrio y municipio (área metropolitana)
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#64748b] sm:text-base">
            Landings hiperlocales con cobertura de barrios y municipios del AMB. La página general de{" "}
            <Link href={ADMINISTRACION_ALQUILER_BARCELONA_CITY_HUB} className="font-semibold text-[#1A4FBF] hover:underline">
              administración de alquiler en Barcelona
            </Link>{" "}
            resume normativa, precio medio y servicio para toda la ciudad.
          </p>
        </div>
      ) : null}

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#64748b]">Distritos de Barcelona</p>
        <nav aria-label="Administración de alquiler por distrito en Barcelona" className="flex flex-wrap gap-2">
          {barrios.map((l) => (
            <Link key={l.slug} href={administracionAlquilerMetroHref(l.segments)} className={linkClass}>
              {l.shortName}
            </Link>
          ))}
        </nav>
      </div>

      {subbarrios.length > 0 ? (
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#64748b]">Barrios destacados</p>
          <nav aria-label="Administración de alquiler por barrio en Barcelona" className="flex flex-wrap gap-2">
            {subbarrios.map((l) => (
              <Link key={l.slug} href={administracionAlquilerMetroHref(l.segments)} className={linkClass}>
                {l.shortName}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#64748b]">Municipios del área metropolitana</p>
        <nav aria-label="Administración de alquiler por municipio AMB" className="flex flex-wrap gap-2">
          {municipios.map((l) => (
            <Link key={l.slug} href={administracionAlquilerMetroHref(l.segments)} className={linkClass}>
              {l.shortName}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
