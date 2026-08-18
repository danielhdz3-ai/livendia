import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import {
  LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL,
  LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL,
} from "@/lib/catalog.public";

export const PACK_LAU_ADMIN_LOCAL_DIFFERENTIATION: Record<string, LocalCityLandingFields> = {
  madrid: {
    metaTitle: `Pack LAU + administración alquiler Madrid — ${LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL} IVA incl.`,
    metaDescription:
      "Pack alquiler Madrid: contrato LAU (145 €) + 1.er mes administración (49 €). Propietarios particulares sin agencia. IVIMA, gestor dedicado, panel 24/7. Chamberí, Salamanca, Vallecas.",
    keywords: [
      "pack alquiler madrid LAU administración",
      "contrato alquiler y gestión inquilino madrid",
      "alquilar piso madrid sin agencia gestoría",
      "administración alquiler madrid particular",
      "contrato LAU madrid 145 euros",
    ],
    heroBadge: "Alquiler · Madrid · Propietarios",
    heroH1: "Pack contrato LAU + administración de alquiler en Madrid",
    heroBullets: [
      "Chamberí, Salamanca, Tetuán, Vallecas y cinturón sur",
      `${LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL} IVA incl. · Sin comisión sobre renta`,
      "Depósito IVIMA · LAU general sin IRAV",
    ],
    whyTitle: "Alquilar en Madrid con contrato LAU y gestor desde el día uno",
    whySubtitle:
      "Mercado líquido, rotación rápida y propietarios que evitan el 10 % anual de las inmobiliarias de gestión. Livendia blinda el contrato y asume cobros e incidencias.",
    localZonesHeading: "Zonas del pack LAU + administración en Madrid",
    localZones:
      "Distrito Centro, Salamanca, Chamberí, Tetuán, Carabanchel, Vallecas, Fuencarral y municipios del cinturón (Móstoles, Getafe, Leganés, Alcorcón). Misma gestoría online con gestor dedicado.",
    heroImage: "/images/madrid.jpg",
    finalCtaTitle: "Alquila en Madrid con LAU profesional y administración Livendia",
  },
  barcelona: {
    metaTitle: `Pack LAU + administración alquiler Barcelona — ${LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL} IVA incl.`,
    metaDescription:
      "Pack alquiler Barcelona: contrato LAU zona tensionada, INCASÒL, IRAV (145 €) + administración 49 €/mes. Eixample, Gràcia, L'Hospitalet. Sin comisión de agencia.",
    keywords: [
      "pack alquiler barcelona LAU administración",
      "contrato alquiler eixample gestoría",
      "alquilar piso barcelona sin agencia",
      "INCASÒL contrato LAU administración",
      "zona tensionada alquiler barcelona pack",
    ],
    heroBadge: "Alquiler · Barcelona · Propietarios",
    heroH1: "Pack contrato LAU + administración de alquiler en Barcelona",
    heroBullets: [
      "Eixample, Gràcia, Les Corts, L'Hospitalet, Cornellà",
      "Zona tensionada · IRAV · depósito Incasòl",
      `${LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL} · Sin comisión sobre renta`,
    ],
    whyTitle: "Barcelona: LAU conforme a normativa catalana + administración",
    whySubtitle:
      "IRAV, Incasòl y edificios con obras en comunidad exigen contrato preciso. Livendia redacta el LAU y gestiona cobros e incidencias desde el primer mes.",
    localZonesHeading: "Barrios y municipios del pack en Barcelona",
    localZones:
      "Eixample, Gràcia, Sant Martí, Sants, Les Corts, L'Hospitalet, Badalona, Cornellà y área metropolitana. Revisión LAU con IRAV, Incasòl e inventario integrado.",
    heroImage: "/images/barcelona.jpg",
    finalCtaTitle: "Alquila en Barcelona con LAU, IRAV y gestor Livendia",
  },
  valencia: {
    metaTitle: `Pack LAU + administración alquiler Valencia — ${LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL} IVA incl.`,
    metaDescription:
      "Pack alquiler Valencia: contrato LAU (145 €) + administración 49 €/mes. Ruzafa, Benimaclet, Ciutat Vella. Propietarios particulares sin agencia. Gestor y panel Livendia.",
    keywords: [
      "pack alquiler valencia LAU administración",
      "contrato alquiler ruzafa gestoría",
      "alquilar piso valencia sin agencia",
      "administración alquiler valencia particular",
      "contrato LAU valencia 145 euros",
    ],
    heroBadge: "Alquiler · Valencia · Propietarios",
    heroH1: "Pack contrato LAU + administración de alquiler en Valencia",
    heroBullets: [
      "Ciutat Vella, Ruzafa, Benimaclet, Mislata, Torrent",
      "Rotación rápida · LAU a medida en 48–72 h",
      `${LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_LABEL} · Sin comisión sobre renta`,
    ],
    whyTitle: "Valencia: contrato LAU y administración para propietarios particulares",
    whySubtitle:
      "Reservas en 48 h y promesas verbales exigen un contrato que las recoja por escrito. Livendia + administración desde 49 €/mes sin permanencia.",
    localZonesHeading: "Zonas del pack en Valencia y área metropolitana",
    localZones:
      "Ciutat Vella, Ruzafa, Benimaclet, Malvarrosa, Patraix, Mislata, Torrent, Paterna y l'Horta. Gestoría digital con mismos precios que en toda España.",
    heroImage: "/images/valencia.jpg",
    finalCtaTitle: "Alquila en Valencia con LAU y gestor desde el primer mes",
  },
};

export const PACK_ARRAS_GESTION_LOCAL_DIFFERENTIATION: Record<string, LocalCityLandingFields> = {
  madrid: {
    metaTitle: `Pack arras + gestión documental vendedor Madrid — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
    metaDescription:
      "Vender piso Madrid entre particulares: arras (145 €) + gestión documental (350 €). 495 € IVA incl. Sin comisión agencia. Salamanca, Chamberí, comunidad, ITE, notaría.",
    keywords: [
      "pack arras gestión documental madrid",
      "vender piso madrid sin agencia arras",
      "venta entre particulares madrid documentación",
      "gestoría venta madrid post arras",
      "vender sin inmobiliaria madrid 495 euros",
    ],
    heroBadge: "Venta · Madrid · Propietarios",
    heroH1: "Pack arras + gestión documental vendedor en Madrid",
    heroBullets: [
      "Salamanca, Chamberí, Retiro, Vallecas, cinturón",
      `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl. · 0 % comisión`,
      "Arras + documentación hasta notaría",
    ],
    whyTitle: "Vende en Madrid entre particulares con arras y gestor documental",
    whySubtitle:
      "Plazos cortos y compradores exigentes: la documentación de comunidad e ITE no puede retrasar la escritura. Pack 495 € vs miles en comisión de agencia.",
    localZonesHeading: "Zonas de venta entre particulares en Madrid",
    localZones:
      "Madrid capital, cinturón sur y municipios del área metropolitana. Mismo pack 495 € con gestor documental dedicado online.",
    heroImage: "/images/madrid.jpg",
    finalCtaTitle: "Vende en Madrid con arras profesionales y gestor Livendia",
  },
  barcelona: {
    metaTitle: `Pack arras + gestión documental vendedor Barcelona — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
    metaDescription:
      "Vender piso Barcelona entre particulares: arras + gestión documental 495 € IVA incl. Cèdula, ITE, comunidad Eixample. Sin comisión agencia. Gestor dedicado Livendia.",
    keywords: [
      "pack arras gestión documental barcelona",
      "vender piso barcelona sin agencia",
      "venta entre particulares barcelona arras",
      "gestoría vendedor barcelona post arras",
      "cèdula habitabilitat venta barcelona",
    ],
    heroBadge: "Venta · Barcelona · Propietarios",
    heroH1: "Pack arras + gestión documental vendedor en Barcelona",
    heroBullets: [
      "Eixample, Gràcia, L'Hospitalet, área metropolitana",
      "Cèdula d'habitabilitat · ITE · comunidad",
      `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} · Sin comisión`,
    ],
    whyTitle: "Vende en Barcelona con arras y trámites catalanes cubiertos",
    whySubtitle:
      "Comunidades lentas, cèdula obligatoria e ITE en edificios antiguos: el gestor Livendia persigue certificados mientras tú cierras con el comprador.",
    localZonesHeading: "Barrios y municipios del pack venta en Barcelona",
    localZones:
      "Barcelona ciudad, Eixample, Gràcia, L'Hospitalet, Cornellà, Badalona y área metropolitana. Normativa catalana cubierta por gestor Livendia.",
    heroImage: "/images/barcelona.jpg",
    finalCtaTitle: "Vende en Barcelona con arras y documentación hasta notaría",
  },
  valencia: {
    metaTitle: `Pack arras + gestión documental vendedor Valencia — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
    metaDescription:
      "Vender piso Valencia entre particulares: pack arras + gestión 495 € IVA incl. Ruzafa, Benimaclet. Cédula valenciana, comunidad, notaría. Sin comisión agencia.",
    keywords: [
      "pack arras gestión documental valencia",
      "vender piso valencia sin agencia",
      "venta entre particulares valencia arras",
      "gestoría vendedor valencia documentación",
      "vender sin inmobiliaria valencia 495",
    ],
    heroBadge: "Venta · Valencia · Propietarios",
    heroH1: "Pack arras + gestión documental vendedor en Valencia",
    heroBullets: [
      "Ruzafa, Benimaclet, Ciutat Vella, área metropolitana",
      "Cèdula Llei 8/2004 · comunidades sin administrador",
      `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
    ],
    whyTitle: "Vende en Valencia entre particulares con pack 495 €",
    whySubtitle:
      "Mercado en alza y vendedores primerizos: entre arras y notaría la documentación sorprende. Gestor Livendia desde 24 h laborables.",
    localZonesHeading: "Zonas del pack venta en Valencia",
    localZones:
      "Valencia capital, Ruzafa, Benimaclet, Ciutat Vella, Mislata, Torrent, Paterna y l'Horta. Venta entre particulares con gestoría online.",
    heroImage: "/images/valencia.jpg",
    finalCtaTitle: "Vende en Valencia con arras y gestor documental Livendia",
  },
};
