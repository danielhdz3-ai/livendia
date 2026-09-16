/**
 * Registro de grupos en /blog#guías-por-ciudad (BlogLocalCitiesSection).
 *
 * Checklist al publicar una landing local nueva:
 * 1. Añadir slug a *_LOCAL_PUBLISHED_SLUGS (o metro published keys) en su lib.
 * 2. Si es barrio/municipio AMB de contrato o redactar alquiler, usar slug en barcelona-metro-contrato-alquiler-slugs.ts.
 * 3. El componente *-local-city-links (o BlogLocalCityLinksCard) debe leer getPublished*().
 * 4. Si es un producto nuevo, añadir card en blog-local-cities-section.tsx y entrada aquí abajo.
 */
export const BLOG_LOCAL_LANDING_HUB_PATHS = [
  { id: "ciudades-hub", title: "Índice Ciudades Livendia", hub: "/ciudades" },
  { id: "gestoria", title: "Gestoría inmobiliaria por ciudad", hub: "/gestoria" },
  { id: "contrato-alquiler", title: "Contrato de alquiler por ciudad", hub: "/servicios/contrato-alquiler-local" },
  { id: "redactar-contrato-alquiler", title: "Redactar contrato alquiler por ciudad", hub: "/servicios/redactar-contrato-alquiler" },
  { id: "contrato-habitacion", title: "Contrato alquiler habitación por ciudad", hub: "/servicios/contrato-alquiler-habitacion" },
  { id: "contrato-arras", title: "Contrato de arras por ciudad", hub: "/servicios/contrato-arras-local" },
  { id: "admin-alquiler", title: "Administración de alquiler por ciudad", hub: "/servicios/administracion-alquiler-local" },
  { id: "admin-alquiler-metro", title: "Administración alquiler — AMB Barcelona", hub: "/administracion-alquiler/barcelona" },
  { id: "admin-temporada", title: "Admin. temporada / habitaciones por ciudad", hub: "/servicios/administracion-alquiler-temporada-local" },
  { id: "contrato-temporada", title: "Contrato alquiler temporada por ciudad", hub: "/servicios/contrato-alquiler-temporada-local" },
  { id: "pack-lau-admin", title: "Pack LAU + administración por ciudad", hub: "/servicios/pack-contrato-lau-administracion-alquiler" },
  { id: "pack-arras-gestion", title: "Pack arras + gestión vendedor por ciudad", hub: "/servicios/pack-arras-gestion-documental-vendedor" },
  { id: "revision-contrato-alquiler", title: "Revisión contrato alquiler por ciudad", hub: "/servicios/revision-contrato-alquiler-local" },
  { id: "acompanamiento-alquiler", title: "Acompañamiento de alquiler por ciudad", hub: "/servicios/acompanamiento-alquiler-local" },
  { id: "compra-completa", title: "Servicio completo de compra por ciudad", hub: "/servicios/servicio-completo-compra-local" },
  { id: "venta-completa", title: "Acompañamiento de venta por ciudad", hub: "/servicios/servicio-completo-venta-local" },
  { id: "revision-post-arras", title: "Revisión comprador post-arras por ciudad", hub: "/servicios/revision-documental-post-arras-local" },
  { id: "gestion-vendedor", title: "Gestión vendedor post-arras por ciudad", hub: "/servicios/gestion-documental-vendedor-local" },
  { id: "parking-trastero", title: "Compra parking / trastero por ciudad", hub: "/servicios/acompanamiento-compra-parking-trastero-local" },
  { id: "reserva-arras", title: "Acompañamiento reserva de arras por ciudad", hub: "/servicios/acompanamiento-reserva-arras-local" },
  { id: "contrato-entre-particulares", title: "Contratos entre particulares por ciudad", hub: "/servicios/contrato-entre-particulares-local" },
  { id: "venta-particulares-metro", title: "Venta piso particular sin agencia (AMB)", hub: "/servicios/venta-piso-particular-sin-agencia-local" },
  { id: "vender-sin-agencia-seo", title: "Vender piso sin agencia por ciudad", hub: "/servicios/vender-piso-sin-agencia" },
  { id: "vender-sin-inmobiliaria", title: "Vender piso sin inmobiliaria (pilares)", hub: "/vender-piso-sin-inmobiliaria" },
] as const;
