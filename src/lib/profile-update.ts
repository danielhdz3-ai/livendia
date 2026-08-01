export type ProfileUpdateInput = {
  fullName: string;
  phone: string;
  dniNie: string;
  fiscalAddress: string;
};

export type NormalizedProfileUpdate = {
  full_name: string;
  phone: string | null;
  dni_nie: string | null;
  fiscal_address: string | null;
};

function normalizePhone(raw: string): string {
  return raw.replace(/\s+/g, "").trim();
}

export function validateProfileUpdate(input: ProfileUpdateInput): string | null {
  const fullName = input.fullName.trim();
  if (fullName.length < 2) {
    return "Introduce tu nombre completo (mínimo 2 caracteres).";
  }
  if (fullName.length > 120) {
    return "El nombre es demasiado largo.";
  }

  const phone = normalizePhone(input.phone);
  if (phone && phone.replace(/\D/g, "").length < 9) {
    return "Introduce un teléfono válido (mínimo 9 dígitos).";
  }

  const dniNie = input.dniNie.trim().toUpperCase();
  if (dniNie.length > 20) {
    return "El NIF/CIF/NIE es demasiado largo.";
  }

  const fiscalAddress = input.fiscalAddress.trim();
  if (fiscalAddress.length > 240) {
    return "La dirección fiscal es demasiado larga.";
  }

  return null;
}

export function normalizeProfileUpdate(input: ProfileUpdateInput): NormalizedProfileUpdate {
  const phone = normalizePhone(input.phone);
  const dniNie = input.dniNie.trim().toUpperCase();
  const fiscalAddress = input.fiscalAddress.trim();

  return {
    full_name: input.fullName.trim(),
    phone: phone || null,
    dni_nie: dniNie || null,
    fiscal_address: fiscalAddress || null,
  };
}
