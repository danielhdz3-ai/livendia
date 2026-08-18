"use client";

import Link from "next/link";
import {
  ContratarSlugButton,
  MultiServicePurchaseProvider,
} from "@/components/service-purchase-provider";
import type { PublicService } from "@/lib/catalog.public";
import {
  ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL,
  LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL,
  LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL,
  PACK_ARRAS_GESTION_VENDEDOR_SLUGS,
  PACK_LAU_ADMIN_SLUGS,
  servicePublicLandingPath,
} from "@/lib/catalog.public";

type Props = {
  servicesBySlug: Partial<Record<string, PublicService>>;
};

function PackLine({ label, price }: { label: string; price: string }) {
  return (
    <li className="flex items-start justify-between gap-3 border-b border-slate-100 py-2 last:border-0">
      <span className="text-sm text-[#475569]">{label}</span>
      <span className="shrink-0 text-sm font-semibold text-[#1E293B]">{price}</span>
    </li>
  );
}

export function PreciosPackOffers({ servicesBySlug }: Props) {
  const lauAvailable = Boolean(servicesBySlug[PACK_LAU_ADMIN_SLUGS[0]]);
  const adminAvailable = Boolean(servicesBySlug[PACK_LAU_ADMIN_SLUGS[1]]);
  const arrasAvailable = Boolean(servicesBySlug[PACK_ARRAS_GESTION_VENDEDOR_SLUGS[0]]);
  const gestionAvailable = Boolean(servicesBySlug[PACK_ARRAS_GESTION_VENDEDOR_SLUGS[1]]);

  return (
    <MultiServicePurchaseProvider servicesBySlug={servicesBySlug}>
      <section aria-labelledby="precios-packs-heading" className="mb-12">
        <h2 id="precios-packs-heading" className="text-2xl font-bold text-[#1E293B]">
          Packs recomendados
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#64748b] sm:text-base">
          Combinaciones habituales para arrancar un alquiler o cerrar una venta entre particulares. Cada partida
          se contrata por separado con pago seguro; el total del pack es la suma de tarifas publicadas (IVA incl.).
        </p>

        <ul className="mt-6 grid list-none gap-6 p-0 lg:grid-cols-2">
          <li className="flex min-h-0 flex-col rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#1A4FBF]">Alquiler · Propietarios</p>
            <h3 className="mt-2 text-xl font-bold text-[#1E293B]">Contrato LAU + primer mes de administración</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748b]">
              Redacta el contrato conforme a la LAU y activa la gestión mensual desde el día uno: cobro de renta,
              canal único con el inquilino e incidencias documentadas en panel.
            </p>
            <ul className="mt-4 space-y-0">
              <PackLine label="Contrato de alquiler LAU" price={CONTRATO_ALQUILER_LAU_PRICE_LABEL} />
              <PackLine label="Administración de alquiler (1.er mes)" price={ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} />
            </ul>
            <p className="mt-4 text-2xl font-extrabold text-[#1A4FBF]">
              {LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL}{" "}
              <span className="text-sm font-normal text-[#64748b]">total estimado</span>
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {lauAvailable ? (
                <ContratarSlugButton
                  slug={PACK_LAU_ADMIN_SLUGS[0]}
                  className="inline-flex min-h-11 items-center rounded-full bg-[#1A4FBF] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#2563EB]"
                >
                  Contratar contrato LAU
                </ContratarSlugButton>
              ) : null}
              {adminAvailable ? (
                <ContratarSlugButton
                  slug={PACK_LAU_ADMIN_SLUGS[1]}
                  className="inline-flex min-h-11 items-center rounded-full border border-[#1A4FBF] px-5 py-2.5 text-sm font-semibold text-[#1A4FBF] hover:bg-[#1A4FBF]/5"
                >
                  Contratar administración
                </ContratarSlugButton>
              ) : null}
              <Link
                href={servicePublicLandingPath(PACK_LAU_ADMIN_SLUGS[0])}
                className="inline-flex min-h-11 items-center text-sm font-semibold text-[#64748b] underline-offset-2 hover:underline"
              >
                Ver ficha LAU
              </Link>
            </div>
            <p className="mt-3 text-xs text-[#94a3b8]">
              Orden recomendado: primero contrato LAU, después suscripción mensual de administración (49 €/mes, sin
              permanencia).
            </p>
          </li>

          <li className="flex min-h-0 flex-col rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#1A4FBF]">Venta · Propietarios</p>
            <h3 className="mt-2 text-xl font-bold text-[#1E293B]">Arras + gestión documental vendedor</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748b]">
              Para vender entre particulares con comprador ya encontrado: contrato de arras equilibrado y gestor
              que recopila comunidad, nota simple, ITE y coherencia documental hasta notaría.
            </p>
            <ul className="mt-4 space-y-0">
              <PackLine label="Contrato de arras (penitenciales)" price={CONTRATO_ARRAS_LOCAL_PRICE_LABEL} />
              <PackLine label="Gestión documental vendedor post-arras" price={GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} />
            </ul>
            <p className="mt-4 text-2xl font-extrabold text-[#1A4FBF]">
              {LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL}{" "}
              <span className="text-sm font-normal text-[#64748b]">total estimado</span>
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {arrasAvailable ? (
                <ContratarSlugButton
                  slug={PACK_ARRAS_GESTION_VENDEDOR_SLUGS[0]}
                  className="inline-flex min-h-11 items-center rounded-full bg-[#1A4FBF] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#2563EB]"
                >
                  Contratar arras
                </ContratarSlugButton>
              ) : null}
              {gestionAvailable ? (
                <ContratarSlugButton
                  slug={PACK_ARRAS_GESTION_VENDEDOR_SLUGS[1]}
                  className="inline-flex min-h-11 items-center rounded-full border border-[#1A4FBF] px-5 py-2.5 text-sm font-semibold text-[#1A4FBF] hover:bg-[#1A4FBF]/5"
                >
                  Contratar gestión documental
                </ContratarSlugButton>
              ) : null}
              <Link
                href="/servicios/servicio-completo-venta"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-[#64748b] underline-offset-2 hover:underline"
              >
                ¿Prefieres pack completo 890 €?
              </Link>
            </div>
            <p className="mt-3 text-xs text-[#94a3b8]">
              Orden habitual: arras primero; la gestión documental arranca tras la firma de arras.
            </p>
          </li>
        </ul>
      </section>
    </MultiServicePurchaseProvider>
  );
}
