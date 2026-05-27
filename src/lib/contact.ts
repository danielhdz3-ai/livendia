/**
 * Teléfono de contacto (voz y referencia visible). Override: NEXT_PUBLIC_CONTACT_PHONE=34600367742
 * Por defecto: 600 367 742
 */

function contactPhoneDigits(): string {
  const raw = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "34600367742";
  const d = raw.replace(/\D/g, "");
  if (d.startsWith("34")) return d;
  if (/^\d{9}$/.test(d)) return `34${d}`;
  return d || "34600367742";
}

export function getContactPhoneTelHref(): string {
  return `tel:+${contactPhoneDigits()}`;
}

export function getContactPhoneDisplay(): string {
  const d = contactPhoneDigits();
  const n = d.startsWith("34") ? d.slice(2) : d;
  if (/^\d{9}$/.test(n)) {
    return `${n.slice(0, 3)} ${n.slice(3, 6)} ${n.slice(6)}`;
  }
  return n || d;
}

/** Para JSON-LD y metadatos */
export function getContactPhoneE164Plus(): string {
  return `+${contactPhoneDigits()}`;
}
