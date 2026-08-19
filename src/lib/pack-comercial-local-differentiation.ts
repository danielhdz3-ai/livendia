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
  malaga: {
    metaTitle: "Pack Contrato Alquiler y Administración en Málaga (194 €) | Livendia",
    metaDescription:
      "Redacción de contrato LAU/Temporada, depósito de fianza en AVRA y 1er mes de gestión de alquiler en Málaga por 194 €.",
    keywords: [
      "pack alquiler malaga LAU administración",
      "contrato alquiler malaga AVRA",
      "alquilar piso malaga sin agencia",
      "depósito fianza AVRA andalucía",
      "administración alquiler malaga expats",
      "contrato LAU teatinos soho",
    ],
    heroBadge: "Alquiler · Málaga · Propietarios",
    heroH1: "Pack contrato LAU + administración de alquiler en Málaga",
    heroBullets: [
      "Teatinos, Carretera de Cádiz, Centro, El Limonar, Soho",
      "Depósito fianza en AVRA · LAU y media estancia",
      "194 € IVA incl. · Sin comisión sobre renta",
    ],
    whyTitle: "Alquilar en Málaga con contrato LAU, AVRA y gestor desde el día uno",
    whySubtitle:
      "Costa del Sol, perfil internacional y media estancia: el contrato debe reflejar LAU, depósito en AVRA y cláusulas sobre suministros. Livendia redacta y administra desde 49 €/mes.",
    localZonesHeading: "Zonas del pack LAU + administración en Málaga",
    localZones:
      "Centro Histórico, Soho, El Limonar, Teatinos, Carretera de Cádiz, La Malagueta, Pedregalejo y área metropolitana (Torremolinos, Rincón de la Victoria). Gestoría online con normativa andaluza.",
    heroImage: "/images/malaga.jpg",
    finalCtaTitle: "Alquila en Málaga con LAU, AVRA y administración Livendia",
  },
  sevilla: {
    metaTitle: "Pack Contrato de Alquiler y Gestión en Sevilla (194 €) | Livendia",
    metaDescription:
      "Contrato de arrendamiento, depósito de fianza en AVRA y administración de inquilinos en Sevilla por 194 €. Sin permanencia.",
    keywords: [
      "pack alquiler sevilla LAU administración",
      "contrato alquiler sevilla AVRA",
      "alquilar piso sevilla sin agencia",
      "administración alquiler nervión triana",
      "depósito fianza AVRA sevilla",
      "contrato temporada académica sevilla",
    ],
    heroBadge: "Alquiler · Sevilla · Propietarios",
    heroH1: "Pack contrato LAU + administración de alquiler en Sevilla",
    heroBullets: [
      "Nervión, Triana, Macarena, Los Remedios, Sevilla Este",
      "AVRA · inventario detallado · temporada académica",
      "194 € IVA incl. · Admin sin permanencia",
    ],
    whyTitle: "Alquilar en Sevilla con LAU, depósito AVRA e inventario profesional",
    whySubtitle:
      "Demanda universitaria, sanitarios y familias: contrato LAU o temporada con anexo de inventario y trámite AVRA cubierto. Administración Livendia desde el primer mes.",
    localZonesHeading: "Zonas del pack en Sevilla capital y área metropolitana",
    localZones:
      "Nervión, Triana, Macarena, Los Remedios, Sevilla Este, Heliópolis, Cerro-Amate y municipios del área (Dos Hermanas, Alcalá de Guadaíra, Camas). Mismos precios nacionales Livendia.",
    heroImage: "/images/sevilla.jpg",
    finalCtaTitle: "Alquila en Sevilla con contrato LAU, AVRA y gestor Livendia",
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
  malaga: {
    metaTitle: "Pack Venta Piso Entre Particulares en Málaga (495 €) | Livendia",
    metaDescription:
      "Contrato de arras penitenciales y gestión documental completa para vender tu piso en Málaga sin comisiones de agencia por 495 €.",
    keywords: [
      "pack arras gestión documental malaga",
      "vender piso malaga sin agencia",
      "venta entre particulares malaga arras",
      "nota simple registro propiedad malaga",
      "ITP AJD andalucía venta particular",
      "vender piso malaga 495 euros",
    ],
    heroBadge: "Venta · Málaga · Propietarios",
    heroH1: "Pack arras + gestión documental vendedor en Málaga",
    heroBullets: [
      "Centro, Teatinos, Este, Costa del Sol metropolitana",
      "Nota Simple Registro Málaga · energético · cargas",
      "495 € IVA incl. · 0 % comisión agencia",
    ],
    whyTitle: "Vende en Málaga entre particulares con arras y gestión documental",
    whySubtitle:
      "Compradores locales e internacionales exigen documentación impecable. Pack 495 € con nota simple, comunidad, ITE y orientación ITP/AJD andaluz para la parte compradora.",
    localZonesHeading: "Zonas de venta entre particulares en Málaga",
    localZones:
      "Málaga capital, Teatinos, Carretera de Cádiz, El Palo, Rincón de la Victoria, Torremolinos y Benalmádena. Gestor documental Livendia online.",
    heroImage: "/images/malaga.jpg",
    finalCtaTitle: "Vende en Málaga con arras profesionales y gestor Livendia",
  },
  sevilla: {
    metaTitle: "Pack Contrato Arras y Gestión de Venta en Sevilla (495 €) | Livendia",
    metaDescription:
      "Vende tu casa en Sevilla sin inmobiliaria. Redacción de arras, preparación documental y acompañamiento a notaría por 495 €.",
    keywords: [
      "pack arras gestión documental sevilla",
      "vender piso sevilla sin agencia",
      "venta entre particulares sevilla arras",
      "gestoría vendedor sevilla notaría",
      "cancelación cargas venta sevilla",
      "vender casa sevilla 495 euros",
    ],
    heroBadge: "Venta · Sevilla · Propietarios",
    heroH1: "Pack arras + gestión documental vendedor en Sevilla",
    heroBullets: [
      "Nervión, Triana, Macarena, Los Remedios, área metro",
      "Comunidad · IBI · cancelación hipoteca",
      "495 € precio cerrado vs 3–5 % agencia",
    ],
    whyTitle: "Vende en Sevilla sin inmobiliaria con pack 495 €",
    whySubtitle:
      "Herencias, derramas en el Casco y plazos con el comprador: el gestor Livendia prepara arras y documentación hasta notaría en capital y área metropolitana.",
    localZonesHeading: "Sevilla capital y área metropolitana",
    localZones:
      "Triana, Nervión, Macarena, Los Remedios, Sevilla Este, Casco Antiguo, Dos Hermanas, Alcalá de Guadaíra y Tomares. Venta entre particulares con gestoría Livendia.",
    heroImage: "/images/sevilla.jpg",
    finalCtaTitle: "Vende en Sevilla con arras y documentación hasta notaría",
  },
};
