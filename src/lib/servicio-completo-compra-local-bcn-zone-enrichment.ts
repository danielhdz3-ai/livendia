import type { CompraLocalCityEnrichment } from "@/lib/servicio-completo-compra-local-city-enrichment";
import type { CompraValenciaZoneInsight } from "@/lib/servicio-completo-compra-local-valencia-enrichment";

function block(
  sectionTitle: string,
  marketNote: string,
  zones: readonly CompraValenciaZoneInsight[],
): CompraLocalCityEnrichment {
  return { sectionTitle, marketNote, zones };
}

/** Bloques de zonas — distritos Barcelona y AMB (servicio compra 890 €). */
export const COMPRA_LOCAL_BCN_ZONE_ENRICHMENT: Record<string, CompraLocalCityEnrichment> = {
  "barcelona-eixample": block(
    "Compra en l'Eixample — microzonas que revisamos",
    "En l'Eixample el ticket es alto y los borradores suelen venir de agencias del vendedor: 621-49 CCCat, penalizaciones desequilibradas e ITE en fincas señoriales. Revisamos comunidad y registral antes de la señal.",
    [
      { name: "Dreta de l'Eixample", context: "Ticket alto; cláusula 621-49 y plazos de hipoteca realistas." },
      { name: "Esquerra i Sagrada Família", context: "Arras copiadas; coherencia parking–trastero en contrato." },
      { name: "Fort Pienc i Sant Antoni", context: "Rehabilitación; actas de comunidad con obras." },
      { name: "Passeig de Gràcia (entorn)", context: "Operaciones rápidas; revisión pre-reserva." },
    ],
  ),
  "barcelona-gracia": block(
    "Compra en Gràcia — microzonas que revisamos",
    "En Gràcia abundan compras entre particulares: usos en planta baja, fincas protegidas y arras bilingües mal adaptadas. El gestor revisa CCCat antes de transferir señal.",
    [
      { name: "Vila de Gràcia", context: "Locales y vivienda mixta; licencias y estatutos." },
      { name: "Camp d'en Grassot", context: "Primera compra; arras penitenciarias explicadas." },
      { name: "Vallcarca i Penitents", context: "ITE y pendiente de fachada en comunidad." },
      { name: "Salut i El Coll", context: "Coherencia visita–contrato en fincas antiguas." },
    ],
  ),
  "barcelona-poblenou": block(
    "Compra en Poblenou — microzonas que revisamos",
    "Lofts reconvertidos, terrazas comunitarias y promociones post-olímpicas: en el Poblenou conviene cruzar catastro, uso registral y contrato antes de arras.",
    [
      { name: "Rambla del Poblenou", context: "Naves reconvertidas; uso registral vs visita." },
      { name: "Bogatell i Mar Bella", context: "Segunda residencia; plazos de financiación." },
      { name: "22@ (entorn)", context: "Obra nueva y rehabilitación; anexos en contrato." },
      { name: "La Vila Olímpica (entorn)", context: "Comunidades multi-bloque; certificado de deuda." },
    ],
  ),
  "barcelona-les-corts": block(
    "Compra a Les Corts — microzonas que revisamos",
    "Zona universitaria y empresarial: compradores con prisa y vendedores particulares. Revisamos 621-49 CCCat y derramas en bloques de los 70–80.",
    [
      { name: "Les Corts i La Maternitat", context: "Familias; condición suspensiva de hipoteca." },
      { name: "Pedralbes (entorn)", context: "Ticket alto; penalizaciones equilibradas." },
      { name: "Zona Zona Universitària", context: "Reservas en 48 h; revisión documental express." },
      { name: "Entorn Camp Nou", context: "Edificios densos; plazos de comunidad realistas." },
    ],
  ),
  "barcelona-sarria-sant-gervasi": block(
    "Compra a Sarrià–Sant Gervasi — microzonas que revisamos",
    "Ticket muy alto y compradores exigentes: arras mal calibradas o anejos mal descritos generan conflictos pre-escritura.",
    [
      { name: "Sarrià i Vallvidrera", context: "Chalets y pisos señoriales; registral detallado." },
      { name: "Sant Gervasi – Galvany", context: "Operaciones entre particulares por recomendación." },
      { name: "Putxet i Farró", context: "Garaje y trastero en nota simple." },
      { name: "Bonanova i Tres Torres", context: "621-49 CCCat en operaciones financiadas." },
    ],
  ),
  "barcelona-sants-montjuic": block(
    "Compra a Sants–Montjuïc — microzonas que revisamos",
    "Mezcla de barrio obrero consolidado y nueva promoción en la montaña: ITE, obras de comunidad y arras copiadas de otras operaciones.",
    [
      { name: "Sants i Badal (districte)", context: "Bloques grandes; certificado de deuda lento." },
      { name: "Poble-sec", context: "Rehabilitación; actas con derramas." },
      { name: "Hostafrancs i La Bordeta", context: "Precio medio; señal desproporcionada en reserva." },
      { name: "Montjuïc i Zona Franca (entorn)", context: "Coherencia calidades obra nueva." },
    ],
  ),
  "barcelona-ciutat-vella": block(
    "Compra a Ciutat Vella — microzonas que revisamos",
    "Patrimonio, locales turísticos y fincas históricas: checklist reforzado de licencias, cargas y comunidad antes de arras.",
    [
      { name: "Gòtic i Plaça Catalunya", context: "Licencias y protección patrimonial." },
      { name: "El Raval", context: "Rehabilitación; coherencia visita–registro." },
      { name: "La Ribera i El Born", context: "Ticket alto; arras bilingües revisadas." },
      { name: "Barceloneta", context: "Humedades e ITE costera." },
    ],
  ),
  "barcelona-horta-guinardo": block(
    "Compra a Horta-Guinardó — microzonas que revisamos",
    "Barrio residencial con pendiente y edificios en ladera: ITE estricta y plazos de hipoteca negociados en arras.",
    [
      { name: "El Carmel i La Teixonera", context: "Vistas y obras en fachada en actas." },
      { name: "Horta i Vilapicina", context: "Familias; reserva con prisa post-visita." },
      { name: "Guinardó", context: "Edificios en ladera; estado estructural en ITE." },
      { name: "Montbau i Can Baró", context: "Operaciones entre vecinos sin agencia compradora." },
    ],
  ),
  "barcelona-nou-barris": block(
    "Compra a Nou Barris — microzonas que revisamos",
    "Precio más accesible que el centro pero mismos riesgos CCCat: arras desequilibradas y comunidades con obras energéticas.",
    [
      { name: "Verdum i Roquetes", context: "Señal y penalizaciones antes de ingresar." },
      { name: "Trinitat Vella i Bon Pastor", context: "Rehabilitación urbana; derramas." },
      { name: "Porta i La Guineueta", context: "Idealista; plazos de financiación." },
      { name: "Ciutat Meridiana (entorn)", context: "Coherencia reserva–arras en bloques altos." },
    ],
  ),
  "barcelona-sant-andreu": block(
    "Compra a Sant Andreu (districte) — microzonas que revisamos",
    "Distrito en transformación con ITE y derramas de rehabilitación: revisión de actas antes de señal.",
    [
      { name: "Sant Andreu de Palomar", context: "Familias; arras con 621-49 CCCat." },
      { name: "La Sagrera", context: "Obra pública en entorno; no confundir plazos." },
      { name: "Navas i Congrés", context: "Bloques recientes; fondos de reserva." },
      { name: "Trinitat Vella (límit)", context: "Operaciones rápidas; gestor online." },
    ],
  ),
  "barcelona-sant-marti": block(
    "Compra a Sant Martí — microzonas que revisamos",
    "Poblenou, Clot y Diagonal Mar: mezcla de lofts, obra nueva y bloques grandes con certificados de comunidad lentos.",
    [
      { name: "Poblenou (districte)", context: "Lofts; uso registral y terrazas." },
      { name: "El Clot i La Verneda", context: "Comunidad multi-portal; plazos realistas." },
      { name: "Diagonal Mar i Front Marítim", context: "Promociones; anexos de calidades." },
      { name: "Provençals i Poblenou industrial", context: "Rehabilitación; ITE pre-arras." },
    ],
  ),
  "hospitalet-de-llobregat": block(
    "Compra en L'Hospitalet — zonas que revisamos",
    "Densidad alta y borradores copiados de Barcelona: 621-49 CCCat, derramas en bloques de Bellvitge y Collblanc antes de señal.",
    [
      { name: "Collblanc i La Torrassa", context: "Arras equilibradas; certificado de deuda." },
      { name: "Bellvitge", context: "Bloques grandes; plazos de comunidad." },
      { name: "Centre i La Florida", context: "Reservas rápidas; revisión pre-ingreso." },
      { name: "Santa Eulàlia i Granvia Sud", context: "Obra nova; coherencia contrato–visita." },
    ],
  ),
  "baix-llobregat": block(
    "Compra en el Baix Llobregat — municipios que revisamos",
    "Misma tarifa Livendia en Cornellà, Esplugues, Sant Boi, Castelldefels o El Prat: protocolo CCCat online hasta notaría.",
    [
      { name: "Cornellà i Sant Boi", context: "Arras copiadas; 621-49 si hay hipoteca." },
      { name: "Esplugues i Sant Joan Despí", context: "Familias; condición suspensiva." },
      { name: "Castelldefels i Gavà Mar", context: "Segunda residencia; ITE costera." },
      { name: "El Prat i Sant Feliu", context: "Operaciones intermunicipales." },
    ],
  ),
  "sant-andreu": block(
    "Compra en Sant Andreu (Barcelona) — barrios que revisamos",
    "Distrito barcelonés (no Sant Andreu de la Barca): ITE, derramas energéticas y arras penitenciarias CCCat revisadas pre-señal.",
    [
      { name: "Sant Andreu de Palomar", context: "Rehabilitación; actas de comunidad." },
      { name: "La Sagrera", context: "Edificios en renovación; plazos en contrato." },
      { name: "Navas", context: "Compra entre particulares por Idealista." },
      { name: "Congrés i Indians", context: "621-49 CCCat en operaciones financiadas." },
    ],
  ),
  sabadell: block(
    "Compra en Sabadell — zonas que revisamos",
    "Vallès Occidental: herencias, arras copiadas y titularidad registral pendiente antes de entregar señal.",
    [
      { name: "Centre i Creu Alta", context: "Ticket medio; penalizaciones." },
      { name: "Gràcia sabadellenca", context: "Familias; plazos de hipoteca." },
      { name: "Can Rull i Torre-romeu", context: "Obra nueva y segunda mano." },
      { name: "Eixample (Sabadell)", context: "Operaciones sin agencia compradora." },
    ],
  ),
  terrassa: block(
    "Compra en Terrassa — zonas que revisamos",
    "Centre histórico con ITE y barrios residenciales: revisión documental antes de reserva en operaciones entre particulares.",
    [
      { name: "Sant Pere i centre", context: "Edificios antiguos; licencias." },
      { name: "Les Arenes i Ca n'Aurell", context: "Familias; arras con financiación." },
      { name: "Can Palet i Vallparadís", context: "Idealista; coherencia visita–arras." },
      { name: "Ègara i Sant Pere Nord", context: "Herencias; titularidad alineada." },
    ],
  ),
  badalona: block(
    "Compra en Badalona — zonas que revisamos",
    "Barcelonès Nord: arras copiadas de capital, plazos irreales de comunidad en bloques de Montigala o Gorg.",
    [
      { name: "Centre i Montigala", context: "621-49 CCCat; certificado de deuda." },
      { name: "Gorg i La Salut", context: "Reserva rápida; revisión pre-señal." },
      { name: "Llevant i Pomar", context: "Operaciones entre particulares." },
      { name: "Manresà i Bufalà", context: "Misma gestoría online Livendia." },
    ],
  ),
  castelldefels: block(
    "Compra en Castelldefels — zonas que revisamos",
    "Costa del Baix Llobregat: segundas residencias, ITE y comunidades con obras marítimas en actas.",
    [
      { name: "Centre i platja", context: "ITE costera; humedades en visita vs contrato." },
      { name: "Montmar i Bellamar", context: "Familias; arras equilibradas." },
      { name: "El Castell i Poal", context: "Compradores de fuera; plazos amplios." },
      { name: "Baixador i Can Roca", context: "Coherencia reserva–arras CCCat." },
    ],
  ),
};

export function getCompraLocalBcnZoneEnrichment(slug: string): CompraLocalCityEnrichment | null {
  return COMPRA_LOCAL_BCN_ZONE_ENRICHMENT[slug] ?? null;
}
