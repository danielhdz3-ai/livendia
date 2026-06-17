import { sendWelcomeEmail } from "@/lib/email/send";
import { createServiceRoleClient } from "@/lib/supabase/service";
import { randomBytes } from "crypto";

export type CheckoutCustomerInput = {
  email: string;
  fullName: string;
  phone: string;
};

export type ResolvedCheckoutUser = {
  userId: string;
  email: string;
  isNewUser: boolean;
};

function normalizeEmail(raw: string): string {
  return raw.trim().toLowerCase();
}

function normalizePhone(raw: string): string {
  return raw.replace(/\s+/g, "").trim();
}

export function validateCheckoutCustomer(input: CheckoutCustomerInput): string | null {
  const email = normalizeEmail(input.email);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Introduce un email válido.";
  }
  const fullName = input.fullName.trim();
  if (fullName.length < 2) {
    return "Introduce tu nombre completo.";
  }
  const phone = normalizePhone(input.phone);
  if (phone.replace(/\D/g, "").length < 9) {
    return "Introduce un teléfono de contacto válido.";
  }
  return null;
}

async function findUserIdByEmail(email: string): Promise<string | null> {
  const admin = createServiceRoleClient();
  let page = 1;
  const perPage = 200;
  while (page <= 20) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage });
    if (error) {
      console.error("[checkout-account] listUsers", error.message);
      return null;
    }
    const match = data.users.find((u) => u.email?.toLowerCase() === email);
    if (match?.id) return match.id;
    if (data.users.length < perPage) break;
    page += 1;
  }
  return null;
}

async function upsertProfileContact(userId: string, fullName: string, phone: string) {
  const admin = createServiceRoleClient();
  await admin
    .from("profiles")
    .update({
      full_name: fullName.trim(),
      phone: normalizePhone(phone),
    })
    .eq("id", userId);
}

/** Crea o reutiliza cuenta Livendia a partir del formulario de checkout (email confirmado). */
export async function resolveOrCreateCheckoutUser(
  input: CheckoutCustomerInput,
): Promise<ResolvedCheckoutUser> {
  const validationError = validateCheckoutCustomer(input);
  if (validationError) {
    throw new Error(validationError);
  }

  const email = normalizeEmail(input.email);
  const fullName = input.fullName.trim();
  const phone = normalizePhone(input.phone);
  const admin = createServiceRoleClient();

  const existingId = await findUserIdByEmail(email);
  if (existingId) {
    await upsertProfileContact(existingId, fullName, phone);
    return { userId: existingId, email, isNewUser: false };
  }

  const password = randomBytes(24).toString("base64url");
  const { data, error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: fullName },
  });

  if (error || !data.user?.id) {
    if (error?.message?.toLowerCase().includes("already")) {
      const retryId = await findUserIdByEmail(email);
      if (retryId) {
        await upsertProfileContact(retryId, fullName, phone);
        return { userId: retryId, email, isNewUser: false };
      }
    }
    throw new Error(error?.message ?? "No se pudo crear la cuenta.");
  }

  const userId = data.user.id;
  await upsertProfileContact(userId, fullName, phone);

  void sendWelcomeEmail({ to: email, customerName: fullName }).catch(() => {
    /* no bloquear checkout */
  });

  return { userId, email, isNewUser: true };
}
