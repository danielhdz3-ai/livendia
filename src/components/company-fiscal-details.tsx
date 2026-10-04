import { CookieSettingsLink } from "@/components/cookie-settings-link";

export type CompanyFiscalDetailsProps = {
  legalName: string;
  taxId?: string;
  addressLine?: string;
  /** Muestra enlace para abrir preferencias de cookies (mismo bloque). */
  showCookieSettings?: boolean;
  className?: string;
};

/** NIF y domicilio fiscal — solo en área de configuración / panel de cookies, no en home. */
export function CompanyFiscalDetails({
  legalName,
  taxId,
  addressLine,
  showCookieSettings = true,
  className = "",
}: CompanyFiscalDetailsProps) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-[#475569] ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">Datos de la empresa</p>
      <p className="mt-2 font-semibold text-[#1E293B]">{legalName}</p>
      {taxId ? (
        <p className="mt-1">
          <span className="text-[#64748B]">NIF:</span> {taxId}
        </p>
      ) : null}
      {addressLine ? (
        <p className="mt-1">
          <span className="text-[#64748B]">Domicilio fiscal:</span> {addressLine}
        </p>
      ) : null}
      {showCookieSettings ? (
        <p className="mt-3 border-t border-slate-200 pt-3">
          <CookieSettingsLink className="font-semibold text-[#1A4FBF] hover:underline">
            Configurar cookies
          </CookieSettingsLink>
        </p>
      ) : null}
    </div>
  );
}
