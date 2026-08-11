/**
 * Tokens visuales compartidos para landings públicas Livendia.
 * Azul canónico: #1A4FBF (evitar #1E3A8A en heroes nuevos).
 */

/** Color primario de marca (texto/bordes en Tailwind: text-[#1A4FBF]) */
export const LANDING_BRAND_BLUE = "#1A4FBF" as const;

/** Gradiente estándar del hero en landings de servicio */
export const LANDING_HERO_GRADIENT =
  "bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB]" as const;

/** Gradiente de bloques CTA final (card o sección) */
export const LANDING_CTA_GRADIENT = "bg-gradient-to-br from-[#1A4FBF] to-[#2563EB]" as const;

/** Gradiente footer / bloques amplios de marca */
export const LANDING_FOOTER_GRADIENT =
  "bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#1D4ED8]" as const;

/** Fondo de página en landings (shell min-h-screen) */
export const LANDING_PAGE_BG = "bg-[#F8FAFC]" as const;

/** Sección «por qué» / beneficios (modelo arras · alquiler · venta) */
export const LANDING_WHY_SECTION =
  "border-b border-slate-200 bg-[#F1F5F9] px-4 pb-20 pt-16 sm:px-6" as const;

/** Sección testimonios locales (modelo estándar) */
export const LANDING_TESTIMONIALS_SECTION =
  "border-b border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-20 sm:px-6" as const;

/** Cabecera de tablas comparativas */
export const LANDING_TABLE_HEAD = "bg-[#1A4FBF] text-white" as const;

/** Clase del eyebrow / badge sobre el H1 en heroes */
export const LANDING_HERO_EYEBROW = "text-sm font-semibold uppercase tracking-wide text-cyan-200" as const;

/**
 * Orden de secciones en landings locales modelo (arras · LAU · venta):
 * 1 Hero split · 2 Por qué/beneficios · 3 Cómo funciona · 4 Comparativa/contexto local
 * 5 Testimonios · 6 FAQ · 7 Contacto mid-page · 8 Disclaimer · 9 CTA final · 10 SharedSections
 */
export const LANDING_MODEL_SECTION_ORDER = [
  "hero",
  "why",
  "howItWorks",
  "comparison",
  "testimonials",
  "faq",
  "midContact",
  "disclaimer",
  "finalCta",
  "sharedSections",
] as const;

/** Badges profesionales para índices / hubs (sin «SEO local» ni «piloto») */
export const LANDING_HUB_EYEBROW = {
  gestoria: "Gestoría inmobiliaria · España",
  arras: "Contrato de arras · Entre particulares",
  alquiler: "Contrato LAU · Entre particulares",
  temporada: "Alquiler de temporada · Entre particulares",
  compra: "Compra entre particulares · España",
  venta: "Venta entre particulares · España",
  admin: "Administración de alquiler · España",
  parking: "Compra parking o trastero · España",
  ciudades: "Gestoría inmobiliaria · Por ciudad",
  contratoEntreParticulares: "Contratos entre particulares · España",
  acompanamientoAlquiler: "Acompañamiento de alquiler · España",
} as const;
