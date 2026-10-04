/** Encargados del tratamiento citados en privacidad y cookies (información pública). */

export type LegalDataProcessor = {
  name: string;
  role: string;
  location: string;
  privacyUrl: string;
  /** Finalidad principal en Livendia */
  purpose: string;
};

export const LEGAL_DATA_PROCESSORS: readonly LegalDataProcessor[] = [
  {
    name: "Supabase, Inc.",
    role: "Base de datos, autenticación y almacenamiento de documentos del área privada",
    location: "Estados Unidos (UE vía cláusulas contractuales tipo / DPF cuando aplique)",
    privacyUrl: "https://supabase.com/privacy",
    purpose: "Hosting de datos de clientes, expedientes y sesiones",
  },
  {
    name: "Stripe, Inc.",
    role: "Pasarela de pago y facturación",
    location: "Estados Unidos / Irlanda (Stripe Payments Europe)",
    privacyUrl: "https://stripe.com/es/privacy",
    purpose: "Cobro de servicios, suscripciones y gestión de clientes de pago",
  },
  {
    name: "Resend, Inc.",
    role: "Envío de correo transaccional",
    location: "Estados Unidos",
    privacyUrl: "https://resend.com/legal/privacy-policy",
    purpose: "Notificaciones, accesos y comunicaciones operativas por email",
  },
  {
    name: "Vercel Inc.",
    role: "Alojamiento y entrega del sitio web",
    location: "Estados Unidos",
    privacyUrl: "https://vercel.com/legal/privacy-policy",
    purpose: "Infraestructura web, logs técnicos y rendimiento",
  },
  {
    name: "Google Ireland Limited (Analytics / Ads)",
    role: "Medición de audiencia y publicidad",
    location: "Irlanda / EE. UU. (Google LLC)",
    privacyUrl: "https://policies.google.com/privacy",
    purpose: "Estadísticas agregadas y medición de campañas (solo con consentimiento)",
  },
] as const;

export type LegalCookieRow = {
  name: string;
  provider: string;
  type: "técnica" | "analítica" | "publicitaria" | "preferencia";
  purpose: string;
  duration: string;
  consentRequired: boolean;
};

export const LEGAL_COOKIE_TABLE: readonly LegalCookieRow[] = [
  {
    name: "Cookies de sesión Supabase (auth)",
    provider: "Supabase",
    type: "técnica",
    purpose: "Mantener la sesión del usuario en el área privada",
    duration: "Sesión / según configuración del proveedor",
    consentRequired: false,
  },
  {
    name: "livendia_cookie_consent (localStorage)",
    provider: "Livendia",
    type: "preferencia",
    purpose: "Recordar tus preferencias de cookies",
    duration: "12 meses (renovable al volver a elegir)",
    consentRequired: false,
  },
  {
    name: "livendia_visitor_attribution (localStorage)",
    provider: "Livendia",
    type: "técnica",
    purpose: "Atribución UTM interna para orientar consultas comerciales (sin perfilado publicitario)",
    duration: "30 días",
    consentRequired: false,
  },
  {
    name: "_ga, _ga_*",
    provider: "Google Analytics",
    type: "analítica",
    purpose: "Distinguir usuarios y medir uso agregado del sitio",
    duration: "Hasta 24 meses (_ga)",
    consentRequired: true,
  },
  {
    name: "_gid",
    provider: "Google Analytics",
    type: "analítica",
    purpose: "Distinguir usuarios en ventana corta",
    duration: "24 horas",
    consentRequired: true,
  },
  {
    name: "_gcl_* , IDE, test_cookie (según configuración)",
    provider: "Google Ads",
    type: "publicitaria",
    purpose: "Medición de conversiones y atribución de campañas",
    duration: "Variable (consultar política de Google)",
    consentRequired: true,
  },
] as const;
