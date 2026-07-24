import {
  BUSINESS_EMAIL,
  BUSINESS_NAME,
  businessNap,
  getBusinessAddressDisplayLine,
} from "@/lib/business-nap";

/** Datos legales publicables (configurar en Vercel / .env). */
export function getBusinessLegalIdentity() {
  const legalName =
    process.env.NEXT_PUBLIC_BUSINESS_LEGAL_NAME?.trim() || `${BUSINESS_NAME} — Gestoría inmobiliaria`;
  const taxId = process.env.NEXT_PUBLIC_BUSINESS_TAX_ID?.trim() || null;
  const addressLine = getBusinessAddressDisplayLine();

  return {
    legalName,
    taxId,
    addressLine,
    email: BUSINESS_EMAIL,
    phoneDisplay: businessNap.telephoneDisplay(),
    phoneTel: businessNap.telephoneTel(),
    whatsappHref: businessNap.whatsappHref(),
    openingHours: `L–V ${businessNap.openingHours.opens}–${businessNap.openingHours.closes}`,
    hasFullTaxId: Boolean(taxId),
  };
}

export function getBusinessLegalSummary(): string {
  const id = getBusinessLegalIdentity();
  const parts = [id.legalName];
  if (id.taxId) parts.push(id.taxId);
  if (id.addressLine) parts.push(id.addressLine);
  parts.push(id.email);
  return parts.join(" · ");
}
