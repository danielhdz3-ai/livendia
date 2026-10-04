import { CookieSettingsLink } from "@/components/cookie-settings-link";
import { LegalPageShell, LegalSection } from "@/components/legal-page-shell";
import { LEGAL_COOKIE_TABLE } from "@/lib/legal-processors";
import { getGaMeasurementId } from "@/lib/ga-measurement-id";
import { getGoogleAdsId } from "@/lib/google-ads-id";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";

const canonical = `${getSiteUrl()}/legal/cookies`;

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Información sobre cookies y tecnologías similares en livendia.com: tipos, proveedores Google Analytics y Google Ads, duración y cómo gestionarlas.",
  alternates: { canonical },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  const gaId = getGaMeasurementId() ?? "G-J2SZJ5V6H6";
  const adsId = getGoogleAdsId() ?? "AW-18221518655";

  return (
    <LegalPageShell title="Política de cookies" intro="Última actualización: 4 de octubre de 2026.">
      <LegalSection title="1. ¿Qué son las cookies?">
        <p>
          Las cookies son ficheros que el navegador almacena en tu dispositivo. También usamos almacenamiento local
          (localStorage) para preferencias técnicas. Las cookies técnicas son necesarias para el funcionamiento del sitio;
          las analíticas y publicitarias solo se activan si las aceptas en el banner o en{" "}
          <CookieSettingsLink className="font-semibold text-[#1A4FBF] hover:underline" />.
        </p>
      </LegalSection>

      <LegalSection title="2. Responsable">
        <p>
          El responsable es Livendia (ver datos en{" "}
          <Link href="/legal/aviso-legal" className="font-semibold text-[#1A4FBF] hover:underline">
            aviso legal
          </Link>
          ). Para cookies con tratamiento de datos personales, aplica también la{" "}
          <Link href="/legal/privacidad" className="font-semibold text-[#1A4FBF] hover:underline">
            política de privacidad
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="3. Cookies y tecnologías que utilizamos">
        <div className="overflow-x-auto">
          <table className="mt-2 w-full min-w-[640px] border-collapse text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-white">
                <th className="py-2 pr-3 font-semibold text-[#1E293B]">Nombre / tipo</th>
                <th className="py-2 pr-3 font-semibold text-[#1E293B]">Proveedor</th>
                <th className="py-2 pr-3 font-semibold text-[#1E293B]">Finalidad</th>
                <th className="py-2 pr-3 font-semibold text-[#1A4FBF]">Duración</th>
                <th className="py-2 font-semibold text-[#1E293B]">Consentimiento</th>
              </tr>
            </thead>
            <tbody>
              {LEGAL_COOKIE_TABLE.map((row) => (
                <tr key={row.name} className="border-b border-slate-100 align-top">
                  <td className="py-3 pr-3">
                    <span className="font-medium text-[#1E293B]">{row.name}</span>
                    <span className="mt-0.5 block text-[#64748B]">({row.type})</span>
                  </td>
                  <td className="py-3 pr-3">{row.provider}</td>
                  <td className="py-3 pr-3">{row.purpose}</td>
                  <td className="py-3 pr-3">{row.duration}</td>
                  <td className="py-3">{row.consentRequired ? "Sí" : "No (necesaria)"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection title="4. Google Analytics (GA4)">
        <p>
          Identificador de medición configurado: <strong>{gaId}</strong>. Finalidad: estadísticas agregadas de visitas,
          páginas vistas y eventos de interacción. Base legal: consentimiento. Google puede tratar datos en EE. UU. bajo
          sus garantías contractuales.
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Información:{" "}
            <a
              href="https://support.google.com/analytics/answer/6004245?hl=es"
              className="text-[#1A4FBF] hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Cómo usa Google los datos de sitios que utilizan Analytics
            </a>
            .
          </li>
          <li>
            Complemento de inhabilitación:{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout?hl=es"
              className="text-[#1A4FBF] hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Google Ads">
        <p>
          Identificador de cuenta/conversión: <strong>{adsId}</strong>. Finalidad: medir conversiones (p. ej. clic en
          WhatsApp, teléfono o compra) y optimizar campañas. Base legal: consentimiento de cookies publicitarias.
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Configuración de anuncios personalizados:{" "}
            <a
              href="https://adssettings.google.com/"
              className="text-[#1A4FBF] hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Configuración de anuncios de Google
            </a>
            .
          </li>
          <li>
            Política de privacidad de Google:{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-[#1A4FBF] hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              policies.google.com/privacy
            </a>
            .
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Consent Mode">
        <p>
          Implementamos Google Consent Mode v2: las etiquetas de Analytics y Ads se cargan con almacenamiento denegado
          hasta que aceptes las categorías correspondientes. Puedes cambiar tu elección en cualquier momento desde{" "}
          <CookieSettingsLink className="font-semibold text-[#1A4FBF] hover:underline" /> (también accesible desde el
          pie de página).
        </p>
      </LegalSection>

      <LegalSection title="7. Cómo gestionar cookies desde el navegador">
        <p>
          Puedes bloquear o eliminar cookies desde la configuración de tu navegador. Desactivar cookies técnicas puede
          impedir el inicio de sesión o el uso del panel de cliente. Consulta la ayuda de Chrome, Firefox, Safari o Edge
          para más detalle.
        </p>
      </LegalSection>

      <LegalSection title="8. Actualización">
        <p>
          Esta política se revisará cuando incorporemos nuevas herramientas o cambie la normativa. La fecha de la versión
          vigente figura al inicio del documento.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
