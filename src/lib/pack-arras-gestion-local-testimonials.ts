import type { PackCommercialLocalSeoContent } from "@/lib/pack-comercial-local-seo-content";

type T = NonNullable<PackCommercialLocalSeoContent["testimonials"]>[number];

/** Testimonios únicos por slug (solo si la landing no los define ya en SEO). */
const PACK_ARRAS_GESTION_TESTIMONIALS_BY_SLUG: Record<string, readonly T[]> = {
  "barcelona-les-corts": [
    {
      quote:
        "Vendí en Pedralbes con plaza de parking incluida. Las arras reflejaron anexo y cláusula 621-49 — el comprador no pidió rebaja en notaría.",
      author: "Elena V.",
      role: "Vendedora particular · Les Corts",
    },
    {
      quote:
        "Desde Zurich seguí todo en el panel: certificado de comunidad en un bloque de la Zona Universitària tardó 18 días, pero el gestor lo persiguió.",
      author: "Marc T.",
      role: "Propietario no residente · Pedralbes",
    },
  ],
  "barcelona-eixample": [
    {
      quote:
        "Terraza no inscrita en Dreta de l'Eixample: lo detectaron en la semana 1 y lo dejamos reflejado en arras antes de la señal.",
      author: "Silvia R.",
      role: "Vendedora entre particulares · Eixample",
    },
    {
      quote:
        "Derrama de fachada aprobada en junta: el informe semáforo evitó sorpresa el día de la firma en Esquerra.",
      author: "Joan M.",
      role: "Vendedor particular · Barcelona",
    },
  ],
  "hospitalet-de-llobregat": [
    {
      quote:
        "Comprador de Barcelona capital, piso en Collblanc: recalibraron plazos de comunidad en arras — 495 € y sin comisión.",
      author: "Rosa P.",
      role: "Vendedora particular · L'Hospitalet",
    },
    {
      quote:
        "Bellvitge, bloque grande: certificado de deuda a las tres semanas, pero la escritura se mantuvo gracias al seguimiento del gestor.",
      author: "Iván G.",
      role: "Vendedor entre particulares · L'Hospitalet",
    },
  ],
  madrid: [
    {
      quote:
        "Venta en Chamberí con ITE pendiente: el gestor coordinó deficiencias menores antes de que el banco del comprador pidiera más papeles.",
      author: "Lucía F.",
      role: "Vendedora particular · Madrid",
    },
    {
      quote:
        "Ya tenía comprador por Idealista. 495 € frente a ~10.000 € de comisión — arras equilibradas en Salamanca.",
      author: "Diego A.",
      role: "Vendedor entre particulares · Madrid",
    },
  ],
  barcelona: [
    {
      quote:
        "Herencia en Barcelona ciudad: pack arras + gestión desde el panel sin ir a tres gestorías distintas.",
      author: "Núria C.",
      role: "Vendedora particular · Barcelona",
    },
    {
      quote:
        "Cèdula caducada detectada antes de firmar arras — en Catalunya eso puede tumbar la operación.",
      author: "Oriol B.",
      role: "Vendedor entre particulares · Barcelona",
    },
  ],
  valencia: [
    {
      quote:
        "Vendí en Campanar con comprador de la zona. Comunidad lenta pero arras bien redactadas — cero rebaja tardía.",
      author: "Marina L.",
      role: "Vendedora particular · Valencia",
    },
    {
      quote:
        "Segunda residencia en la Malvarrosa: todo por WhatsApp hasta notaría en Valencia capital.",
      author: "Carlos H.",
      role: "Propietario no residente · Valencia",
    },
  ],
  malaga: [
    {
      quote:
        "Comprador británico en Teatinos: documentación en castellano claro y arras con plazos realistas — 495 € IVA incl.",
      author: "Patricia S.",
      role: "Vendedora particular · Málaga",
    },
    {
      quote:
        "Cancelación hipotecaria alineada con lo pactado en arras. El gestor persiguió al banco mientras yo cerraba mudanza.",
      author: "Francisco J.",
      role: "Vendedor entre particulares · Málaga",
    },
  ],
  "barcelona-poblenou": [
    {
      quote:
        "Loft en 22@ vendido entre particulares: parking anexo en arras y terraza comunitaria descrita — pack Livendia.",
      author: "Aina D.",
      role: "Vendedora particular · Poblenou",
    },
  ],
  "barcelona-born": [
    {
      quote:
        "Finca en El Born con inquilino turístico en planta baja: el gestor separó qué transmitía y qué no en el contrato de arras.",
      author: "Quim S.",
      role: "Vendedor particular · El Born",
    },
  ],
  "barcelona-sarria-sant-gervasi": [
    {
      quote:
        "Operación de importe alto en Sarrià: señal calibrada conforme CCCat — mucho más barato que una agencia.",
      author: "Montse V.",
      role: "Vendedora particular · Sarrià",
    },
  ],
  "cornella-de-llobregat": [
    {
      quote:
        "Sant Ildefons, venta a vecino del edificio: arras en una semana y comunidad en paralelo — 495 €.",
      author: "Javier N.",
      role: "Vendedor entre particulares · Cornellà",
    },
  ],
  sabadell: [
    {
      quote:
        "Creu Alta, comprador con hipoteca: cláusula suspensiva bien redactada y certificado de comunidad a tiempo.",
      author: "Mireia O.",
      role: "Vendedora particular · Sabadell",
    },
  ],
  terrassa: [
    {
      quote:
        "Venta familiar en Terrassa centre: varios vendedores en herencia — el gestor alineó titularidad antes de arras.",
      author: "Albert R.",
      role: "Vendedor entre particulares · Terrassa",
    },
  ],
  "barcelona-sant-marti": [
    {
      quote:
        "Piso en Diagonal Mar con trastero: todo reflejado en precio y arras. Gestor Livendia hasta notaría.",
      author: "Clara W.",
      role: "Vendedora particular · Sant Martí",
    },
  ],
  sevilla: [
    {
      quote:
        "Triana, herencia con varios herederos: titularidad alineada antes de arras — 495 € frente a comisión de agencia.",
      author: "Carmen R.",
      role: "Vendedora particular · Sevilla",
    },
    {
      quote:
        "Macarena, derrama en edificio histórico: el gestor cruzó actas antes de la señal. Mismo pack en Dos Hermanas.",
      author: "Antonio M.",
      role: "Vendedor entre particulares · Sevilla",
    },
  ],
  "barcelona-pedralbes": [
    {
      quote:
        "Señal elevada en Pedralbes: arras CCCat equilibradas y parking anexo en contrato — operación de 480.000 € sin agencia.",
      author: "Isabel K.",
      role: "Vendedora particular · Pedralbes",
    },
    {
      quote:
        "Despacho Livendia en Les Corts a 10 min: revisé dudas presenciales y firmé arras con tranquilidad.",
      author: "Robert H.",
      role: "Vendedor entre particulares · Les Corts",
    },
  ],
  badalona: [
    {
      quote:
        "Venta en Gorg o centre de Badalona: comprador de Barcelona, plazos de comunidad realistas en arras — 495 €.",
      author: "Sonia T.",
      role: "Vendedora particular · Badalona",
    },
  ],
  "barcelona-barceloneta": [
    {
      quote:
        "Piso en Barceloneta con humedad conocida: quedó descrita en arras y en informe semáforo antes de la señal.",
      author: "Enric P.",
      role: "Vendedor particular · La Barceloneta",
    },
  ],
  "barcelona-ciutat-vella": [
    {
      quote:
        "Venta en el Gòtic con protección patrimonial: el gestor revisó coherencia registral antes de arras penitenciales.",
      author: "Laia F.",
      role: "Vendedora particular · Ciutat Vella",
    },
  ],
  "barcelona-el-raval": [
    {
      quote:
        "Comprador extranjero en El Raval: documentación clara en castellano y arras con cláusula 621-49 — pack Livendia.",
      author: "Mohamed A.",
      role: "Vendedor entre particulares · El Raval",
    },
  ],
  "barcelona-fort-pienc": [
    {
      quote:
        "Piso en Fort Pienc vendido entre conocidos: cèdula y comunidad persiguió el gestor mientras yo negociaba mudanza.",
      author: "Helena C.",
      role: "Vendedora particular · Fort Pienc",
    },
  ],
  "barcelona-gotic": [
    {
      quote:
        "Finca en el Barri Gòtic: arras no copiadas del ensanche — plazos CCCat adaptados al edificio.",
      author: "Pere J.",
      role: "Vendedor particular · Gòtic",
    },
  ],
  "barcelona-horta-guinardo": [
    {
      quote:
        "Venta en El Carmel con ITE desfavorable leve: plan de regularización reflejado antes de notaría.",
      author: "Teresa G.",
      role: "Vendedora particular · Horta-Guinardó",
    },
  ],
  "barcelona-nou-barris": [
    {
      quote:
        "Roquetes o Verdun: comunidad numerosa, certificado lento — seguimiento semanal del gestor post-arras.",
      author: "Víctor M.",
      role: "Vendedor entre particulares · Nou Barris",
    },
  ],
  "barcelona-sant-andreu": [
    {
      quote:
        "Vendí en Sant Andreu de Palomar a un particular: 495 € IVA incl. y cero comisión sobre el precio.",
      author: "Glòria S.",
      role: "Vendedora particular · Sant Andreu",
    },
  ],
  "barcelona-sant-antoni": [
    {
      quote:
        "Sant Antoni, edificio con obras en patio: derrama aprobada reflejada en arras — sin sorpresa en notaría.",
      author: "Andrea L.",
      role: "Vendedora particular · Sant Antoni",
    },
  ],
  "barcelona-sants-montjuic": [
    {
      quote:
        "Sants, comprador con hipoteca: cláusula suspensiva CCCat desde el borrador Livendia — pack 495 €.",
      author: "Raúl D.",
      role: "Vendedor entre particulares · Sants",
    },
  ],
  "barcelona-sarria": [
    {
      quote:
        "Operación en Sarrià con trastero comunitario: anexo en arras y nota simple revisada — tarifa plana.",
      author: "Christine W.",
      role: "Vendedora particular · Sarrià",
    },
  ],
  "barcelona-vila-olimpica": [
    {
      quote:
        "Piso en Vila Olímpica post-Olimpiada: terraza comunitaria descrita en arras antes de firmar señal.",
      author: "Ferran B.",
      role: "Vendedor particular · Vila Olímpica",
    },
  ],
  castelldefels: [
    {
      quote:
        "Venta en Castelldefels con comprador de Madrid: panel Livendia y gestor por WhatsApp hasta notaría.",
      author: "Eva R.",
      role: "Vendedora particular · Castelldefels",
    },
  ],
  "esplugues-de-llobregat": [
    {
      quote:
        "Esplugues, venta entre familias: arras equilibradas y certificado de deuda cero a tiempo.",
      author: "Sergi V.",
      role: "Vendedor entre particulares · Esplugues",
    },
  ],
  gava: [
    {
      quote:
        "Gavà Mar, segunda residencia: vendí sin agencia con pack arras + gestión — ahorro frente al 3 %.",
      author: "Manuel P.",
      role: "Vendedor particular · Gavà",
    },
  ],
  mataro: [
    {
      quote:
        "Mataró centre, comprador local: gestión documental desde Barcelona online — 495 € precio cerrado.",
      author: "Montserrat A.",
      role: "Vendedora particular · Mataró",
    },
  ],
  "mollet-del-valles": [
    {
      quote:
        "Mollet del Vallès, herencia: nota simple detectó carga antes de arras — el gestor la gestionó.",
      author: "Jordi N.",
      role: "Vendedor entre particulares · Mollet",
    },
  ],
  rubi: [
    {
      quote:
        "Rubí, venta rápida por recomendación: arras firmadas en días y comunidad en paralelo.",
      author: "Ana I.",
      role: "Vendedora particular · Rubí",
    },
  ],
  "sant-adria-de-besos": [
    {
      quote:
        "Sant Adrià, piso con vistas al Besòs: pack Livendia cubrió arras CCCat y trámite hasta notaría.",
      author: "Pol E.",
      role: "Vendedor particular · Sant Adrià",
    },
  ],
  "sant-boi-de-llobregat": [
    {
      quote:
        "Sant Boi, bloque de los 70: ITE y cèdula coordinadas en la primera quincena post-arras.",
      author: "Ruth C.",
      role: "Vendedora particular · Sant Boi",
    },
  ],
  "sant-cugat-del-valles": [
    {
      quote:
        "Sant Cugat, ticket alto: señal calibrada conforme CCCat — mucho menos que comisión de agencia.",
      author: "Olga Z.",
      role: "Vendedora particular · Sant Cugat",
    },
  ],
  "sant-joan-despi": [
    {
      quote:
        "Sant Joan Despí, venta a vecino: arras simples pero bien redactadas — 495 € IVA incl.",
      author: "Marc L.",
      role: "Vendedor entre particulares · Sant Joan Despí",
    },
  ],
  "barcelona-gracia": [
    {
      quote:
        "Vila de Gràcia, inquilino LAU vigente: reflejado en arras antes de señal — pack 495 €.",
      author: "Marta S.",
      role: "Vendedora particular · Gràcia",
    },
    {
      quote:
        "Camp d'en Grassot: certificado de comunidad tardó, pero la escritura se mantuvo.",
      author: "Pau L.",
      role: "Vendedor entre particulares · Gràcia",
    },
  ],
};

export function withPackArrasGestionTestimonials(
  slug: string,
  seo: PackCommercialLocalSeoContent,
): PackCommercialLocalSeoContent {
  if (seo.testimonials?.length) return seo;
  const extra = PACK_ARRAS_GESTION_TESTIMONIALS_BY_SLUG[slug];
  if (!extra?.length) return seo;
  return { ...seo, testimonials: extra };
}
