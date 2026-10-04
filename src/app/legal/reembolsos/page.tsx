import { LegalPageShell, LegalSection } from "@/components/legal-page-shell";
import { getBusinessLegalIdentity } from "@/lib/business-legal";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";

const canonical = `${getSiteUrl()}/legal/reembolsos`;

export const metadata: Metadata = {
  title: "Política de reembolsos y desistimiento",
  description:
    "Derecho de desistimiento de 14 días, reembolsos, excepciones para servicios ya ejecutados y procedimiento de solicitud en Livendia.",
  alternates: { canonical },
  robots: { index: true, follow: true },
};

export default function ReembolsosPage() {
  const legal = getBusinessLegalIdentity();

  return (
    <LegalPageShell title="Política de reembolsos y desistimiento" intro="Última actualización: 4 de octubre de 2026.">
      <LegalSection title="1. Ámbito">
        <p>
          Esta política aplica a consumidores (personas físicas que actúan fuera de su actividad empresarial) que contraten
          servicios a distancia con Livendia. Si contratas como empresa o profesional, rigen las condiciones pactadas en el
          pedido; puedes contactarnos para aclarar tu supuesto.
        </p>
      </LegalSection>

      <LegalSection title="2. Derecho de desistimiento (14 días)">
        <p>
          Dispones de <strong>14 días naturales</strong> desde la contratación para desistir sin necesidad de justificación
          y sin penalización, conforme al Real Decreto Legislativo 1/2007 (LGDCU) y normativa de consumo aplicable.
        </p>
        <p>
          Para ejercerlo, envía una comunicación inequívoca a{" "}
          <a href={`mailto:${legal.email}`} className="font-semibold text-[#1A4FBF] hover:underline">
            {legal.email}
          </a>{" "}
          indicando tu nombre, email de pedido, número de pedido o referencia Stripe y servicio contratado. Puedes usar el
          siguiente modelo (no obligatorio):
        </p>
        <blockquote className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-xs text-[#64748B]">
          «Por la presente comunico que desisto de mi contrato de prestación de servicios [nombre del servicio], pedido el
          [fecha], a nombre de [nombre completo]. Fecha y firma.»
        </blockquote>
      </LegalSection>

      <LegalSection title="3. Excecciones al desistimiento">
        <p>No procede el desistimiento cuando, conforme a la ley, aplique alguna de estas situaciones:</p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong>Servicio plenamente ejecutado</strong> con tu consentimiento expreso previo y reconocimiento de que
            pierdes el derecho de desistimiento una vez completada la prestación con conformidad tuya.
          </li>
          <li>
            <strong>Contenido digital o documentación personalizada</strong> ya entregada (p. ej. contrato redactado a
            medida) cuando hayas solicitado expresamente su elaboración inmediata.
          </li>
          <li>
            <strong>Servicios de urgencia</strong> solicitados expresamente con plazo inferior al legal de desistimiento.
          </li>
        </ul>
        <p className="mt-2">
          En checkout o al iniciar el expediente podemos pedirte confirmación expresa cuando el servicio vaya a comenzar de
          inmediato y pueda quedar excluido el desistimiento.
        </p>
      </LegalSection>

      <LegalSection title="4. Reembolsos">
        <p>
          Si procede el desistimiento o un reembolso acordado, devolveremos los importes abonados por el mismo medio de
          pago en un plazo máximo de <strong>14 días</strong> desde la comunicación de desistimiento, salvo retención
          proporcional por servicios ya prestados con tu consentimiento.
        </p>
        <p>
          Los reembolsos se procesan a través de Stripe al mismo instrumento de pago cuando sea posible. Los plazos de
          abono en tu cuenta pueden depender de tu entidad bancaria.
        </p>
      </LegalSection>

      <LegalSection title="5. Cancelaciones antes de iniciar el trabajo">
        <p>
          Si solicitas cancelación antes de que el gestor haya comenzado la prestación (sin documentación revisada ni
          entrega), reembolsaremos el importe íntegro salvo costes de pasarela no recuperables cuando la ley lo permita.
          Si el trabajo ya está avanzado, aplicaremos criterio proporcional y te informaremos antes de confirmar el
          reembolso.
        </p>
      </LegalSection>

      <LegalSection title="6. Suscripciones">
        <p>
          Puedes cancelar la renovación de una suscripción desde el panel o por email. La cancelación evita cargos
          futuros; no obliga a reembolsar periodos ya devengados salvo desistimiento dentro de los 14 días iniciales sin
          uso material del servicio.
        </p>
      </LegalSection>

      <LegalSection title="7. Incidencias de pago duplicado o error">
        <p>
          Si detectas un cargo duplicado o erróneo, escribe a {legal.email} con comprobante. Tras verificación, procederemos
          a la devolución correspondiente.
        </p>
      </LegalSection>

      <LegalSection title="8. Más información">
        <p>
          Condiciones contractuales generales:{" "}
          <Link href="/legal/condiciones" className="font-semibold text-[#1A4FBF] hover:underline">
            /legal/condiciones
          </Link>
          . Protección de datos:{" "}
          <Link href="/legal/privacidad" className="font-semibold text-[#1A4FBF] hover:underline">
            /legal/privacidad
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
