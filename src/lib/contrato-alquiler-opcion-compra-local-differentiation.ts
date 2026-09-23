import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL } from "@/lib/catalog.public";

type TitleVariant = "redactamos" | "gestor";

type OpcionCompraCitySpec = {
  slug: string;
  place: string;
  region: string;
  image: string;
  zones: string;
  titleVariant: TitleVariant;
  marketHook: string;
  keywords: readonly string[];
  heroBullets: readonly string[];
  localBenefits: readonly { title: string; description: string }[];
};

function heroH1For(spec: OpcionCompraCitySpec): string {
  if (spec.titleVariant === "redactamos") {
    return `Livendia redacta tu contrato de alquiler con opción a compra en ${spec.place}`;
  }
  return `Gestor experto redacta contrato de alquiler con opción a compra en ${spec.place}`;
}

function metaTitleFor(spec: OpcionCompraCitySpec): string {
  return `Alquiler opción compra ${spec.place} — ${CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL} IVA incl.`;
}

function metaDescriptionFor(spec: OpcionCompraCitySpec): string {
  return `Contrato de alquiler con opción a compra entre particulares en ${spec.place}: precio de ejercicio, plazo, rentas e inventario. ${CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL} IVA incl. Gestor Livendia sin comisión.`;
}

function buildDiff(spec: OpcionCompraCitySpec): LocalCityLandingFields {
  return {
    metaTitle: metaTitleFor(spec),
    metaDescription: metaDescriptionFor(spec),
    keywords: spec.keywords,
    heroBadge: `Entre particulares · Opción a compra · ${spec.place}`,
    heroH1: heroH1For(spec),
    heroImage: spec.image,
    heroBullets: spec.heroBullets,
    whyTitle: `${spec.place}: alquilar hoy, comprar mañana — contrato bien cerrado`,
    whySubtitle: spec.marketHook,
    localZonesHeading: `Dónde redactamos alquiler con opción a compra en ${spec.place}`,
    localZones: spec.zones,
    localBenefits: spec.localBenefits,
    finalCtaTitle: `Contrato con opción a compra en ${spec.place}`,
  };
}

const PRICE = CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL;

const OPCION_COMPRA_CITY_SPECS: OpcionCompraCitySpec[] = [
  {
    slug: "madrid",
    place: "Madrid",
    region: "Comunidad de Madrid",
    image: "/images/madrid1.jpg",
    titleVariant: "redactamos",
    marketHook:
      "En Madrid capital y cinturón sur conviven propietarios que prefieren alquilar con derecho futuro a venta y familias que quieren probar barrio antes de comprar. El pacto debe cuadrar con LAU, AVS y precio de ejercicio.",
    zones:
      "Salamanca, Chamberí, Retiro, Moncloa, Tetuán, Vallecas, Carabanchel, Getafe, Leganés, Móstoles y Alcobendas. Gestoría online en toda la Comunidad de Madrid.",
    keywords: [
      "contrato alquiler opcion compra madrid",
      "alquiler con opcion a compra madrid particulares",
      "rent to own madrid contrato",
    ],
    heroBullets: [
      "Precio de ejercicio y plazo de la opción por escrito",
      "Tratamiento de rentas si se imputan al precio final",
      `${PRICE} IVA incl. · sin comisión de agencia`,
    ],
    localBenefits: [
      { title: "Pacto opción + LAU coherente", description: "Arrendamiento habitual y derecho futuro a comprar sin contradicciones." },
      { title: "Barrios de alta rotación", description: "Salamanca, Chamberí o Usera: cada acuerdo con cláusulas a medida." },
      { title: "Imputación de rentas", description: "Si parte de la mensualidad descuenta el precio final, queda definido." },
      { title: "Inventario incluido", description: "Estado del piso documentado para alquiler y futura compra." },
      { title: "Gestor hasta la firma", description: "Un interlocutor que conoce vuestro expediente de principio a fin." },
      { title: "100 % online", description: "Contratas, subes docs y cierras el texto sin ir al despacho." },
    ],
  },
  {
    slug: "barcelona",
    place: "Barcelona",
    region: "Cataluña",
    image: "/images/barcelona.jpg",
    titleVariant: "gestor",
    marketHook:
      "En Barcelona y área metropolitana el rent-to-own entre particulares crece entre propietarios sin prisa de vender y inquilinos que quieren anclar precio futuro. Hay que encajar opción de compra, LAU y normativa autonómica.",
    zones:
      "Eixample, Gràcia, Sant Martí, Poblenou, Sants, Les Corts, L'Hospitalet, Badalona y Cornellà. Gestoría digital para propietarios en Cataluña o fuera.",
    keywords: ["contrato alquiler opcion compra barcelona", "alquiler opcion compra barcelona particulares"],
    heroBullets: ["Gestor experto en LAU + opción de compra", "Erasmus, familias y teletrabajadores", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Opción de compra definida", description: "Precio futuro, plazo y condiciones si no se ejerce la opción." },
      { title: "Mercado metropolitano", description: "Pisos en Eixample, Gràcia o L'Hospitalet con pactos distintos." },
      { title: "Tanteo y retracto", description: "Asesoramiento sobre derechos del inquilino si el propietario vende." },
      { title: "Inventario fotográfico", description: "Entrada y salida documentadas antes de escriturar." },
      { title: "Sin comisión inmobiliaria", description: `${PRICE} tarifa plana gestoría.` },
      { title: "Entrega 48-72 h", description: "Tras validar datos de inmueble y partes." },
    ],
  },
  {
    slug: "barcelona-les-corts",
    place: "Les Corts (Barcelona)",
    region: "Cataluña",
    image: "/images/barcelona.jpg",
    titleVariant: "redactamos",
    marketHook:
      "En Les Corts — Pedralbes, Zona Universitària o Les Corts propiamente — propietarios e inquilinos pactan alquiler con opción en pisos familiares y estudios. El contrato debe reflejar barrio y acuerdo real.",
    zones: "Pedralbes, Zona Universitària, Les Corts, La Maternitat, Collblanc y entorno Camp Nou.",
    keywords: ["contrato alquiler opcion compra les corts", "alquiler opcion compra pedralbes"],
    heroBullets: ["Redacción entre particulares en Les Corts", "Precio ejercicio y rentas claros", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Pisos familiares y estudios", description: "Cláusulas según tipología y duración del arrendamiento." },
      { title: "Zona universitaria", description: "Acuerdos con inquilinos que pueden ejercer opción a medio plazo." },
      { title: "Inventario incluido", description: "Mobiliario y estado del piso al día de las llaves." },
      { title: "Gestor dedicado", description: "Resolución de dudas hasta la firma." },
      { title: "Online sin desplazarte", description: "Tramitación 100 % digital Livendia." },
      { title: "Tarifa plana", description: `${PRICE} IVA incl., sin comisión.` },
    ],
  },
  {
    slug: "barcelona-eixample",
    place: "Eixample (Barcelona)",
    region: "Cataluña",
    image: "/images/barcelona.jpg",
    titleVariant: "gestor",
    marketHook:
      "En el Eixample — Dreta, Esquerra, Sagrada Família — el alquiler con opción a compra suele cerrarse entre particulares sin agencia. Hace falta un gestor que domine LAU y pacto de compra futura.",
    zones: "Eixample Esquerra, Eixample Dreta, Sagrada Família, Fort Pienc y Sant Antoni limítrofe.",
    keywords: ["contrato alquiler opcion compra eixample barcelona"],
    heroBullets: ["Gestor experto en Eixample", "LAU + opción de compra", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Edificios reglamentarios", description: "Comunidad, ITE y cargas revisadas en el briefing." },
      { title: "Precio de ejercicio", description: "Importe futuro y plazo sin ambigüedades." },
      { title: "Imputación de rentas", description: "Si aplica, porcentaje o importe mensual definido." },
      { title: "Inventario profesional", description: "Estado del piso antes de alquilar y comprar." },
      { title: "Entre particulares", description: "Sin comisión inmobiliaria." },
      { title: "48-72 h laborables", description: "Entrega del contrato tras validar datos." },
    ],
  },
  {
    slug: "hospitalet-de-llobregat",
    place: "L'Hospitalet de Llobregat",
    region: "Cataluña",
    image: "/images/barcelona.jpg",
    titleVariant: "redactamos",
    marketHook:
      "En L'Hospitalet muchos propietarios alquilan con opción de compra a inquilinos que ya conocen el piso. Livendia redacta el pacto completo sin confundirlo con un LAU estándar.",
    zones: "Centre, Collblanc, La Torrassa, Santa Eulàlia, Bellvitge y Pubilla Cases.",
    keywords: ["alquiler opcion compra hospitalet de llobregat"],
    heroBullets: ["Redacción rent-to-own en L'Hospitalet", "Particulares sin agencia", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Acuerdo directo entre partes", description: "Contrato que refleja lo pactado en la visita." },
      { title: "Opción de compra", description: "Precio futuro y plazo para ejercerla." },
      { title: "LAU adaptada", description: "Duración, fianza y actualización de renta." },
      { title: "Inventario", description: "Anexo con estado del inmueble." },
      { title: "Gestor online", description: "Sin desplazamientos al despacho." },
      { title: "Tarifa fija", description: `${PRICE} IVA incl.` },
    ],
  },
  {
    slug: "cornella-de-llobregat",
    place: "Cornellà de Llobregat",
    region: "Cataluña",
    image: "/images/barcelona.jpg",
    titleVariant: "gestor",
    marketHook:
      "En Cornellà de Llobregat el alquiler con opción a compra encaja con familias que quieren estabilidad antes de escriturar. Un gestor experto redacta LAU y pacto de compra en un solo documento coherente.",
    zones: "Centre, Sant Ildefons, Almeda y zona Fira / metro.",
    keywords: ["contrato alquiler opcion compra cornella"],
    heroBullets: ["Gestor experto en Cornellà", "Rent-to-own entre particulares", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Pacto compra futura", description: "Precio de ejercicio y condiciones." },
      { title: "Tratamiento rentas", description: "Imputación al precio si lo acordáis." },
      { title: "Inventario incluido", description: "Protección propietario e inquilino." },
      { title: "Asesoramiento tanteo", description: "Derechos del inquilino explicados." },
      { title: "100 % online", description: "Panel Livendia y gestor dedicado." },
      { title: "Sin comisión", description: `${PRICE} gestoría.` },
    ],
  },
  {
    slug: "valencia",
    place: "Valencia",
    region: "Comunidad Valenciana",
    image: "/images/valencia.jpg",
    titleVariant: "redactamos",
    marketHook:
      "En Valencia y área metropolitana crecen acuerdos rent-to-own en Ruzafa, Benimaclet o la costa: alquilar unos años y comprar después a precio cerrado. Hay que dejarlo bien escrito.",
    zones: "Ciutat Vella, Ruzafa, Benimaclet, Campanar, Mislata, Burjassot, Paterna y playas metropolitanas.",
    keywords: ["contrato alquiler opcion compra valencia", "alquiler opcion compra valencia particulares"],
    heroBullets: ["Redacción LAU + opción en Valencia", "Precio ejercicio y rentas", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Mercado valenciano", description: "Estudiantes, familias y teletrabajadores con opción futura." },
      { title: "Cláusulas a medida", description: "No plantilla copiada de otro municipio." },
      { title: "Inventario fotográfico", description: "Estado del piso documentado." },
      { title: "Gestor dedicado", description: "Hasta entrega del contrato firmable." },
      { title: "Online", description: "Sin comisión de agencia." },
      { title: "Tarifa plana", description: `${PRICE} IVA incl.` },
    ],
  },
  {
    slug: "sevilla",
    place: "Sevilla",
    region: "Andalucía",
    image: "/images/sevilla.jpg",
    titleVariant: "gestor",
    marketHook:
      "En Sevilla capital y metropolitana el alquiler con opción a compra permite a inquilinos anclar precio en Nervión, Triana o Los Remedios. Un gestor experto redacta arrendamiento y opción sin lagunas.",
    zones: "Centro, Triana, Nervión, Los Remedios, Macarena, Cartuja, Dos Hermanas y Alcalá de Guadaíra.",
    keywords: ["contrato alquiler opcion compra sevilla"],
    heroBullets: ["Gestor experto en Sevilla", "Rent-to-own entre particulares", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Opción bien definida", description: "Plazo, precio y escenarios si no se compra." },
      { title: "LAU andaluza en la práctica", description: "Fianza, renta y duración adaptadas." },
      { title: "Inventario", description: "Anexo con mobiliario y estado." },
      { title: "Sin agencia", description: `${PRICE} gestoría.` },
      { title: "48-72 h", description: "Entrega tras validar información." },
      { title: "Panel Livendia", description: "Documentación centralizada." },
    ],
  },
  {
    slug: "malaga",
    place: "Málaga",
    region: "Andalucía",
    image: "/images/malaga.jpg",
    titleVariant: "redactamos",
    marketHook:
      "En Málaga y Costa del Sol propietarios e inquilinos usan la opción de compra para combinar alquiler temporal largo con compra futura. Livendia redacta el contrato completo en Teatinos, El Palo o la costa.",
    zones: "Centro, Teatinos, El Palo, Rincón de la Victoria, Torremolinos y Benalmádena.",
    keywords: ["alquiler opcion compra malaga", "rent to own malaga contrato"],
    heroBullets: ["Redacción opción compra Málaga", "LAU + precio futuro", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Costa y capital", description: "Acuerdos distintos en piso urbano o segunda residencia." },
      { title: "Imputación rentas", description: "Si parte de la renta descuenta precio final." },
      { title: "Inventario incluido", description: "Mobiliario en pisos amueblados." },
      { title: "Gestor online", description: "Propietarios fuera de Andalucía bien atendidos." },
      { title: "Sin comisión", description: `${PRICE} IVA incl.` },
      { title: "Asesoramiento", description: "Tanteo y derechos del inquilino." },
    ],
  },
  {
    slug: "bilbao",
    place: "Bilbao",
    region: "País Vasco",
    image: "/images/bilbao1.jpg",
    titleVariant: "gestor",
    marketHook:
      "En Bilbao y Gran Bilbao el rent-to-own entre particulares exige claridad en precio de ejercicio y convivencia con normativa foral. Un gestor experto redacta LAU y opción de compra.",
    zones: "Abando, Indautxu, Deusto, Santutxu, Basurto y Getxo limítrofe.",
    keywords: ["contrato alquiler opcion compra bilbao"],
    heroBullets: ["Gestor experto en Bilbao", "Opción de compra + LAU", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Pacto compra futura", description: "Precio y plazo sin ambigüedades." },
      { title: "Mercado urbano", description: "Pisos en Abando o Deusto con acuerdos a medida." },
      { title: "Inventario", description: "Estado del inmueble documentado." },
      { title: "100 % online", description: "Tramitación digital Livendia." },
      { title: "Tarifa plana", description: `${PRICE} sin comisión.` },
      { title: "Entrega ágil", description: "48-72 h laborables." },
    ],
  },
  {
    slug: "zaragoza",
    place: "Zaragoza",
    region: "Aragón",
    image: "/images/zaragoza.jpg",
    titleVariant: "redactamos",
    marketHook:
      "En Zaragoza propietarios e inquilinos cierran alquiler con opción en Delicias, Actur o Casco Histórico. Livendia redacta el contrato que une arrendamiento y derecho futuro a comprar.",
    zones: "Delicias, Actur, Casco Histórico, Valdespartera, Las Fuentes y Torrero.",
    keywords: ["alquiler opcion compra zaragoza contrato"],
    heroBullets: ["Redacción rent-to-own Zaragoza", "Entre particulares", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "LAU + opción", description: "Un solo contrato coherente." },
      { title: "Precio ejercicio", description: "Importe futuro y condiciones." },
      { title: "Rentas imputables", description: "Si lo pactáis, queda por escrito." },
      { title: "Inventario", description: "Anexo profesional incluido." },
      { title: "Gestor dedicado", description: "Hasta la firma." },
      { title: "Sin agencia", description: `${PRICE} IVA incl.` },
    ],
  },
  {
    slug: "alicante",
    place: "Alicante",
    region: "Comunidad Valenciana",
    image: "/images/valencia1.jpg",
    titleVariant: "gestor",
    marketHook:
      "En Alicante y playa muchos acuerdos mezclan alquiler largo con opción de compra en pisos con vistas al mar o en el centro. Un gestor experto adapta cláusulas al acuerdo real.",
    zones: "Centro, Playa de San Juan, Carolinas, San Blas y San Vicente del Raspeig.",
    keywords: ["contrato alquiler opcion compra alicante"],
    heroBullets: ["Gestor experto en Alicante", "Rent-to-own particulares", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Opción de compra", description: "Plazo y precio futuro definidos." },
      { title: "Costa y centro", description: "Contrato según tipología de inmueble." },
      { title: "Inventario fotográfico", description: "Entrada y salida claras." },
      { title: "Online", description: "Sin desplazamientos." },
      { title: "Tarifa fija", description: `${PRICE} gestoría.` },
      { title: "Asesoramiento LAU", description: "Fianza, renta y duración." },
    ],
  },
  {
    slug: "granada",
    place: "Granada",
    region: "Andalucía",
    image: "/images/granada.jpg",
    titleVariant: "redactamos",
    marketHook:
      "En Granada capital y área metropolitana el alquiler con opción encaja con familias e investigadores que quieren estabilidad antes de comprar. Livendia redacta LAU y pacto de opción.",
    zones: "Centro, Realejo, Zaidín, Chana, Armilla y La Zubia.",
    keywords: ["alquiler opcion compra granada contrato"],
    heroBullets: ["Redacción opción compra Granada", "Universidad y familias", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Pacto a medida", description: "Precio ejercicio y plazo acordados." },
      { title: "Imputación rentas", description: "Cláusulas claras si aplica." },
      { title: "Inventario", description: "Estado del piso documentado." },
      { title: "Gestor online", description: "100 % digital." },
      { title: "Sin comisión", description: `${PRICE} IVA incl.` },
      { title: "48-72 h", description: "Entrega del contrato." },
    ],
  },
  {
    slug: "palma",
    place: "Palma de Mallorca",
    region: "Islas Baleares",
    image: "/images/mallorca2.jpg",
    titleVariant: "gestor",
    marketHook:
      "En Palma y Mallorca propietarios en península o isla pactan alquiler con opción de compra en segundas residencias o pisos urbanos. Un gestor experto redacta el contrato sin confundirlo con temporada turística.",
    zones: "Palma centro, Portixol, Son Espanyolet, Calvià, Marratxí y Manacor.",
    keywords: ["contrato alquiler opcion compra mallorca", "alquiler opcion compra palma"],
    heroBullets: ["Gestor experto en Palma", "LAU + opción compra", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Baleares", description: "Contrato civil entre particulares bien cerrado." },
      { title: "Precio futuro", description: "Ejercicio de opción y plazos." },
      { title: "Inventario", description: "Mobiliario en pisos amueblados." },
      { title: "Propietarios fuera", description: "Tramitación online completa." },
      { title: "Sin agencia", description: `${PRICE} gestoría.` },
      { title: "Asesoramiento", description: "Diferencia rent-to-own vs otras figuras." },
    ],
  },
  {
    slug: "murcia",
    place: "Murcia",
    region: "Región de Murcia",
    image: "/images/murcia.jpg",
    titleVariant: "redactamos",
    marketHook:
      "En Murcia capital y área metropolitana el rent-to-own crece entre propietarios que prefieren ingresos de alquiler antes de vender. Livendia redacta el contrato con opción de compra.",
    zones: "Centro, Vistabella, El Carmen, Espinardo, Alcantarilla y Churra.",
    keywords: ["alquiler opcion compra murcia contrato"],
    heroBullets: ["Redacción Murcia rent-to-own", "Particulares sin agencia", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Opción definida", description: "Precio y plazo de compra futura." },
      { title: "LAU coherente", description: "Arrendamiento y opción en un texto." },
      { title: "Inventario", description: "Anexo incluido." },
      { title: "Gestor dedicado", description: "Hasta firma." },
      { title: "Online", description: `${PRICE} IVA incl.` },
      { title: "48-72 h", description: "Entrega laborables." },
    ],
  },
  {
    slug: "valladolid",
    place: "Valladolid",
    region: "Castilla y León",
    image: "/images/valladolid.jpg",
    titleVariant: "gestor",
    marketHook:
      "En Valladolid el alquiler con opción a compra permite a inquilinos probar vivienda antes de escriturar. Un gestor experto redacta el pacto completo entre particulares.",
    zones: "Centro, Delicias, Parquesol, La Victoria, Pajarillos y Laguna de Duero.",
    keywords: ["contrato alquiler opcion compra valladolid"],
    heroBullets: ["Gestor experto Valladolid", "Rent-to-own", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Pacto compra", description: "Precio ejercicio y condiciones." },
      { title: "Universidad y familias", description: "Acuerdos según perfil inquilino." },
      { title: "Inventario", description: "Estado del piso." },
      { title: "Sin comisión", description: `${PRICE} gestoría.` },
      { title: "Panel Livendia", description: "Docs centralizados." },
      { title: "Asesoramiento", description: "Tanteo y LAU." },
    ],
  },
  {
    slug: "vigo",
    place: "Vigo",
    region: "Galicia",
    image: "/images/vigo.jpg",
    titleVariant: "redactamos",
    marketHook:
      "En Vigo y área metropolitana propietarios e inquilinos pactan alquiler con opción en Bouzas, Coia o el centro. Livendia redacta LAU y cláusulas de compra futura.",
    zones: "Centro, Coia, Bouzas, Teis, Navia y Moaña limítrofe.",
    keywords: ["alquiler opcion compra vigo"],
    heroBullets: ["Redacción Vigo opción compra", "Entre particulares", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Galicia", description: "Contrato adaptado al acuerdo local." },
      { title: "Opción de compra", description: "Plazo y precio futuro." },
      { title: "Inventario", description: "Fotográfico incluido." },
      { title: "Gestor online", description: "Sin ir al despacho." },
      { title: "Tarifa plana", description: `${PRICE} IVA incl.` },
      { title: "48-72 h", description: "Entrega contrato." },
    ],
  },
  {
    slug: "gijon",
    place: "Gijón",
    region: "Asturias",
    image: "/images/oviedo.jpg",
    titleVariant: "gestor",
    marketHook:
      "En Gijón el rent-to-own encaja con familias que quieren estabilidad en La Arena, El Natahoyo o el centro. Un gestor experto redacta arrendamiento y opción.",
    zones: "Centro, Cimadevilla, La Arena, El Natahoyo, Llano y Villielmini.",
    keywords: ["contrato alquiler opcion compra gijon"],
    heroBullets: ["Gestor experto Gijón", "LAU + opción", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Costa asturiana", description: "Cláusulas según tipología." },
      { title: "Precio ejercicio", description: "Compra futura definida." },
      { title: "Inventario", description: "Estado documentado." },
      { title: "Online", description: "100 % Livendia." },
      { title: "Sin agencia", description: `${PRICE} gestoría.` },
      { title: "Asesoramiento", description: "Hasta firma." },
    ],
  },
  {
    slug: "cordoba",
    place: "Córdoba",
    region: "Andalucía",
    image: "/images/cordoba.jpg",
    titleVariant: "redactamos",
    marketHook:
      "En Córdoba capital el alquiler con opción a compra une patrimonio histórico y acuerdos entre particulares. Livendia redacta el contrato con precio de ejercicio y rentas claras.",
    zones: "Centro Histórico, Levante, Poniente Sur, Brillante y Patiño.",
    keywords: ["alquiler opcion compra cordoba contrato"],
    heroBullets: ["Redacción Córdoba rent-to-own", "Particulares", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Opción compra", description: "Plazo e importe futuro." },
      { title: "LAU", description: "Arrendamiento coherente." },
      { title: "Inventario", description: "Anexo incluido." },
      { title: "Gestor", description: "Dedicado al expediente." },
      { title: "Online", description: `${PRICE} IVA incl.` },
      { title: "Sin comisión", description: "Gestoría, no agencia." },
    ],
  },
  {
    slug: "las-palmas",
    place: "Las Palmas de Gran Canaria",
    region: "Canarias",
    image: "/images/laspalmas.jpg",
    titleVariant: "gestor",
    marketHook:
      "En Las Palmas propietarios e inquilinos usan la opción de compra en Vegueta, Triana o la playa. Un gestor experto redacta el contrato entre particulares.",
    zones: "Vegueta, Triana, Alcaravaneras, Tafira y Telde limítrofe.",
    keywords: ["alquiler opcion compra las palmas contrato"],
    heroBullets: ["Gestor experto Las Palmas", "Rent-to-own", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Canarias", description: "Contrato civil bien cerrado." },
      { title: "Opción definida", description: "Precio y plazo." },
      { title: "Inventario", description: "Estado del piso." },
      { title: "Online", description: "Sin desplazamientos." },
      { title: "Tarifa fija", description: `${PRICE} IVA incl.` },
      { title: "48-72 h", description: "Entrega laborables." },
    ],
  },
  {
    slug: "santander",
    place: "Santander",
    region: "Cantabria",
    image: "/images/santander.jpg",
    titleVariant: "redactamos",
    marketHook:
      "En Santander el alquiler con opción a compra aparece en el centro, Sardinero o Cueto. Livendia redacta LAU y pacto de compra futura entre particulares.",
    zones: "Centro, Sardinero, Cueto, El Alisal y Cazoña.",
    keywords: ["contrato alquiler opcion compra santander"],
    heroBullets: ["Redacción Santander opción compra", "Sin agencia", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Cantabria", description: "Acuerdo a medida." },
      { title: "Precio ejercicio", description: "Compra futura clara." },
      { title: "Inventario", description: "Incluido." },
      { title: "Gestor online", description: "Panel Livendia." },
      { title: "Sin comisión", description: `${PRICE} gestoría.` },
      { title: "Asesoramiento", description: "Tanteo y rentas." },
    ],
  },
  {
    slug: "pamplona",
    place: "Pamplona",
    region: "Navarra",
    image: "/images/tipo2.jpg",
    titleVariant: "gestor",
    marketHook:
      "En Pamplona y comarca el rent-to-own entre particulares exige claridad en precio futuro y duración del alquiler. Un gestor experto redacta el contrato completo.",
    zones: "Casco Antiguo, Iturrama, Rochapea, Buztintxuri y Burlada.",
    keywords: ["alquiler opcion compra pamplona"],
    heroBullets: ["Gestor experto Pamplona", "LAU + opción", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Navarra", description: "Contrato entre particulares." },
      { title: "Opción compra", description: "Plazo e importe." },
      { title: "Inventario", description: "Documentado." },
      { title: "Online", description: "100 % digital." },
      { title: "Tarifa plana", description: `${PRICE} IVA incl.` },
      { title: "48-72 h", description: "Entrega contrato." },
    ],
  },
  {
    slug: "oviedo",
    place: "Oviedo",
    region: "Asturias",
    image: "/images/oviedo.jpg",
    titleVariant: "redactamos",
    marketHook:
      "En Oviedo familias e inquilinos pactan alquiler con opción en el centro, Teatinos o La Ería. Livendia redacta el contrato que une arrendamiento y compra futura.",
    zones: "Centro, Teatinos, La Ería, Llamaquique y Tudela de Duero.",
    keywords: ["contrato alquiler opcion compra oviedo"],
    heroBullets: ["Redacción Oviedo rent-to-own", "Particulares", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Asturias", description: "Pacto a medida." },
      { title: "LAU + opción", description: "Texto coherente." },
      { title: "Inventario", description: "Incluido." },
      { title: "Gestor", description: "Hasta firma." },
      { title: "Sin agencia", description: `${PRICE} IVA incl.` },
      { title: "Online", description: "Livendia digital." },
    ],
  },
  {
    slug: "asturias",
    place: "Asturias",
    region: "Principado de Asturias",
    image: "/images/oviedo.jpg",
    titleVariant: "gestor",
    marketHook:
      "En Asturias — Oviedo, Gijón, Avilés y costa — el alquiler con opción a compra ayuda a vender sin prisa. Un gestor experto redacta el contrato entre particulares.",
    zones: "Oviedo, Gijón, Avilés, Langreo, Siero, costa y interior rural.",
    keywords: ["alquiler opcion compra asturias contrato", "rent to own oviedo gijon"],
    heroBullets: ["Gestor experto Asturias", "Opción de compra + LAU", `${PRICE} IVA incl.`],
    localBenefits: [
      { title: "Principado", description: "Urbano, costa y rural." },
      { title: "Precio futuro", description: "Ejercicio de opción definido." },
      { title: "Inventario", description: "Estado del inmueble." },
      { title: "Propietarios fuera", description: "Tramitación online." },
      { title: "Sin comisión", description: `${PRICE} gestoría.` },
      { title: "Asesoramiento", description: "Rentas imputables." },
    ],
  },
];

export const OPCION_COMPRA_LOCAL_DIFFERENTIATION: Record<string, LocalCityLandingFields> =
  Object.fromEntries(OPCION_COMPRA_CITY_SPECS.map((spec) => [spec.slug, buildDiff(spec)]));

export const OPCION_COMPRA_LOCAL_CITY_SPECS = OPCION_COMPRA_CITY_SPECS;

export function getOpcionCompraCitySpec(slug: string): OpcionCompraCitySpec | undefined {
  return OPCION_COMPRA_CITY_SPECS.find((s) => s.slug === slug);
}
