import { LegalDraftNote } from "@/components/legal-draft-note";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies — Livendia",
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
      <PublicHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <h1 className="text-3xl font-bold text-[#1E293B]">Política de cookies</h1>
          <div className="mt-6 space-y-6 text-sm leading-relaxed text-[#475569]">
            <LegalDraftNote />
            <section>
              <h2 className="text-lg font-semibold text-[#1E293B]">¿Qué son las cookies?</h2>
              <p className="mt-2">
                Las cookies son pequeños archivos que se almacenan en el dispositivo del usuario cuando visita un
                sitio web. Permiten recordar preferencias, mantener sesiones o obtener datos estadísticos
                agregados.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-[#1E293B]">Cookies que podemos utilizar</h2>
              <ul className="mt-2 list-inside list-disc space-y-2">
                <li>
                  <strong>Técnicas / necesarias:</strong> por ejemplo, las relacionadas con el inicio de sesión y
                  la seguridad del área privada (incluidas cookies o mecanismos similares utilizados por el
                  proveedor de autenticación).
                </li>
                <li>
                  <strong>Preferencias:</strong> idioma u opciones de interfaz, si se implementan.
                </li>
                <li>
                  <strong>Analíticas o de terceros:</strong> solo si se incorporan y previa información y, en su
                  caso, consentimiento según la normativa aplicable.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-[#1E293B]">Gestión y desactivación</h2>
              <p className="mt-2">
                Puedes bloquear o eliminar cookies desde la configuración de tu navegador. Ten en cuenta que
                desactivar cookies técnicas puede impedir el correcto funcionamiento del inicio de sesión o del
                panel de cliente.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-[#1E293B]">Actualización</h2>
              <p className="mt-2">
                Esta política podrá modificarse para adaptarse a cambios en el sitio o en la normativa. Se
                recomienda revisarla periódicamente.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
