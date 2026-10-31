import type { ContratosInmobiliariosBarrioSlug } from "@/lib/contratos-inmobiliarios-barcelona-barrios";
import { getBusinessAddressDisplayLine } from "@/lib/business-nap";

export type ContratosDespachoBarrioSeo = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroLead: string;
  /** Qué revisamos en cita — copy único (no repetir lead de hub contratos). */
  citaFocus: string;
  checklist: readonly string[];
  faq: readonly { q: string; a: string }[];
};

const ADDRESS = getBusinessAddressDisplayLine();

/** SEO y copy de cita presencial — distinto de `/contratos-inmobiliarios-barcelona/[barrio]`. */
export const CONTRATOS_DESPACHO_BARRIO_SEO: Record<
  ContratosInmobiliariosBarrioSlug,
  ContratosDespachoBarrioSeo
> = {
  eixample: {
    metaTitle: "Cita despacho Les Corts — contratos Eixample (Dreta, Sagrada Família) | Livendia",
    metaDescription: `Reserva cita en ${ADDRESS} para revisar LAU, arras o habitación en l'Eixample. Metro ~15 min desde Passeig de Gràcia. Gestor inmobiliario Livendia.`,
    h1: "Cita en despacho para contratos inmobiliarios en el Eixample",
    heroLead:
      "Si alquilas o vendes en Dreta, Esquerra o zona Sagrada Família, puedes cerrar el borrador online y reservar una cita en Les Corts para repasar cláusulas ZMRT, SERPAVI e inventario antes de firmar.",
    citaFocus:
      "En cita revisamos sobre todo edificios señorials del Ensanche: ITE pendiente, derramas en junta, coherencia entre renta de habitaciones y tope del piso en ZMRT, y arras CCCat cuando hay parking anexo.",
    checklist: [
      "Trae borrador LAU o arras (o pide uno previo por WhatsApp)",
      "Cèdula, último recibo IBI y acta de comunidad reciente si hay obras",
      "Renta anterior e informe SERPAVI si el inmueble está en Barcelona capital",
    ],
    faq: [
      {
        q: "¿Cuánto tardo desde Passeig de Gràcia hasta el despacho?",
        a: "En metro L3 (Diagonal o Passeig de Gràcia → Les Corts o Zona Universitària) suele ser 15–20 minutos. Confirmamos hora L–V 9:00–19:30.",
      },
      {
        q: "¿La cita sustituye al panel online?",
        a: "No: el expediente sigue en el panel Livendia. La cita sirve para aclarar dudas presenciales en operaciones complejas del Eixample.",
      },
    ],
  },
  gracia: {
    metaTitle: "Cita despacho Les Corts — contratos Gràcia (habitación y LAU) | Livendia",
    metaDescription: `Cita presencial en ${ADDRESS} para propietarios de Gràcia: piso compartido, LAU familiar, arras. Metro Fontana/Lesseps + L3 · ~20 min.`,
    h1: "Reserva cita en Les Corts — contratos inmobiliarios en Gràcia",
    heroLead:
      "Gràcia concentra habitación en piso compartido y LAU en fincas con patio: en despacho repasamos reparto de suministros, inventario por habitación y anexo SERPAVI sin mezclarlo con plantillas de otras ciudades.",
    citaFocus:
      "Casos típicos en cita desde Gràcia: coliving de 4–5 habitaciones, terrazas compartidas en Camp d'en Grassot y arras en fincas de principios de siglo en Vila de Gràcia.",
    checklist: [
      "Listado de habitaciones con rentas pactadas (si aplica ZMRT)",
      "Normas de convivencia y limpieza que quieras incorporar al contrato",
      "Fotos o inventario previo si el piso está amueblado",
    ],
    faq: [
      {
        q: "¿Puedo revisar un contrato de habitación en cita?",
        a: "Sí. Es uno de los motivos más frecuentes desde Gràcia: comprobamos topes, fianza INCASÒL y cláusulas de uso de cocina y baño.",
      },
      {
        q: "¿Hace falta acudir dos veces?",
        a: "Normalmente una cita basta para revisar borrador; la firma puede ser posterior en notaría o donde acordéis.",
      },
    ],
  },
  poblenou: {
    metaTitle: "Cita despacho Les Corts — contratos Poblenou y 22@ | Livendia",
    metaDescription: `Cita en ${ADDRESS} para LAU, temporada acreditada o arras en Poblenou/22@. Lofts, teletrabajo y parking anexo. Cita previa L–V.`,
    h1: "Cita en despacho — contratos inmobiliarios en Poblenou y 22@",
    heroLead:
      "En Poblenou mezclas lofts, terrazas en edificios reconvertidos y contratos de temporada profesional: en Les Corts contrastamos que la modalidad elegida (LAU vs Decreto 147/1997) encaja con el uso real antes de firmar.",
    citaFocus:
      "Revisamos descripción de terraza comunitaria, parking en planta, instalaciones 22@ y cláusulas de arras cuando compras o vendes entre particulares en la Rambla del Poblenou.",
    checklist: [
      "Plano o descripción de terraza/parking incluidos en la operación",
      "Justificante de causa de temporada si no es LAU habitual",
      "Borrador de arras con referencias registrales del inmueble",
    ],
    faq: [
      {
        q: "¿Atendéis solo compraventa o también alquiler en 22@?",
        a: "Ambos: LAU, temporada delimitada, habitación y arras penitenciales con gestor inmobiliario Livendia.",
      },
      {
        q: "¿Desde Llacuna cuánto tarda la cita?",
        a: "Unos 25 min en metro (L4 + L3). Muchos clientes envían el borrador antes por WhatsApp y la cita es solo para resolver dudas.",
      },
    ],
  },
  "el-born": {
    metaTitle: "Cita despacho Les Corts — contratos El Born (Ciutat Vella) | Livendia",
    metaDescription: `Cita en ${ADDRESS} para arras, LAU o habitación en El Born. Fincas históricas, cargas y uso turístico mal calificado. Gestor Livendia Les Corts.`,
    h1: "Cita en despacho — contratos inmobiliarios en El Born",
    heroLead:
      "El Born exige precisión en arras sobre fincas protegidas y en distinguir LAU de temporada turística: en cita repasamos cargas, licencias y coherencia entre señal y estado real del piso.",
    citaFocus:
      "Suele entrar en agenda desde El Born: arras CCCat con calendario de escritura, cláusulas de ruido en terrazas interiores y habitación en edificios con restricciones de junta.",
    checklist: [
      "Nota simple o borrador de arras ya redactado",
      "Acta de comunidad si hay limitación de alquiler turístico",
      "Documentación de obras o licencias en planta baja",
    ],
    faq: [
      {
        q: "¿Podéis revisar arras antes de entregar la señal en El Born?",
        a: "Sí, es el escenario habitual: reservas cita con el borrador de arras y la documentación del vendedor.",
      },
      {
        q: "¿El despacho está lejos del Born?",
        a: "Unos 20–25 min en metro (L4 Jaume I → L3 Les Corts). También puedes hacer la primera revisión 100 % online.",
      },
    ],
  },
  "sants-montjuic": {
    metaTitle: "Cita despacho Les Corts — contratos Sants, Poble-sec y Montjuïc | Livendia",
    metaDescription: `Cita en ${ADDRESS} para LAU, habitación o arras en Sants-Montjuïc. Trayecto corto desde Sants Estació (~10–15 min L3). Livendia.`,
    h1: "Cita en despacho — contratos inmobiliarios en Sants y Montjuïc",
    heroLead:
      "Desde Sants Estació o Poble-sec llegas rápido a Mejía Lequerica 44: ideal para revisar LAU con rotación de inquilinos, pisos compartidos cerca del campus y arras entre particulares en Hostafrancs.",
    citaFocus:
      "En cita desde Sants-Montjuïc revisamos prórrogas LAU 2026 (RDL 28/2026), inventario en bloques altos y cláusulas de terrazas comunitarias en Poble-sec.",
    checklist: [
      "Contrato anterior o renta de referencia para SERPAVI",
      "Inventario firmado o lista de mobiliario pendiente",
      "DNI/CIF de las partes y IBAN para depósito INCASÒL",
    ],
    faq: [
      {
        q: "¿Es el barrio más cercano al despacho además de Les Corts?",
        a: "Sí, Sants y Hostafrancs están entre los trayectos más cortos en L3 hasta nuestro despacho.",
      },
      {
        q: "¿Gestionáis también administración de alquiler?",
        a: "Sí, con precio mensual publicado; la cita puede ser solo para contrato o para explicarte la gestión posterior.",
      },
    ],
  },
  "les-corts": {
    metaTitle: "Cita en despacho Livendia Les Corts — Mejía Lequerica 44 | Contratos inmobiliarios",
    metaDescription: `Despacho en tu distrito: ${ADDRESS}. Cita para LAU, arras, habitación y compraventa entre particulares. Zona Universitària, Maternitat, Pedralbes.`,
    h1: "Despacho Livendia en Les Corts — cita para contratos inmobiliarios",
    heroLead:
      "Estamos en el propio distrito: sin desplazamientos largos para revisar LAU familiar, habitación universitaria o arras en Pedralbes y Maternitat. Mismo gestor que tu panel online.",
    citaFocus:
      "Citas locales en Les Corts: parking incluido en LAU, arras de alto importe con revisión registral previa y habitación en bloques de la Zona Universitària.",
    checklist: [
      "Indica si vienes por LAU, arras u otro servicio al reservar",
      "Trae documentación del inmueble en el distrito si ya la tienes",
      "Si vienes en coche, confirma aparcamiento en Mejía Lequerica",
    ],
    faq: [
      {
        q: "¿Cuál es la dirección exacta del despacho?",
        a: `${ADDRESS}. Atención con cita previa de lunes a viernes.`,
      },
      {
        q: "¿Puedo pasar sin cita?",
        a: "Preferimos cita para dedicarte el tiempo del gestor; escríbenos por WhatsApp y te proponemos hueco el mismo día si hay disponibilidad.",
      },
    ],
  },
  "sarria-sant-gervasi": {
    metaTitle: "Cita despacho Les Corts — contratos Sarrià, Sant Gervasi y Bonanova | Livendia",
    metaDescription: `Cita en ${ADDRESS} para arras de alto ticket, LAU con parking y revisión pre-señal en Sarrià-Sant Gervasi. FGC + L3 · ~15–20 min.`,
    h1: "Cita en despacho — contratos inmobiliarios en Sarrià y Sant Gervasi",
    heroLead:
      "En distritos de alto precio m² conviene revisar arras y anejos de parking en persona: en Les Corts cruzamos tres referencias registrales, ITE y calendario de escritura antes de la señal.",
    citaFocus:
      "Agenda frecuente desde Sarrià: arras CCCat en chalets y bajos con patio, LAU con plaza de garaje separada y cláusulas de actualización de renta con SERPAVI.",
    checklist: [
      "Nota simple de vivienda, parking y trastero si se incluyen",
      "Último acta de comunidad con conserje u obras aprobadas",
      "Borrador de arras o LAU enviado 24 h antes si es posible",
    ],
    faq: [
      {
        q: "¿Revisáis operaciones solo de compraventa?",
        a: "No: también LAU de alto standing, administración premium y revisión documental pre-arras.",
      },
      {
        q: "¿Desde Tres Torres cómo llego?",
        a: "FGC Sarrià o L6 y transbordo a L3 Zona Universitària; el despacho queda a pocos minutos a pie del metro.",
      },
    ],
  },
  "el-raval": {
    metaTitle: "Cita despacho Les Corts — contratos El Raval (LAU y habitación) | Livendia",
    metaDescription: `Cita en ${ADDRESS} para LAU, habitación ZMRT y arras en El Raval. Revisión de cláusulas abusivas y depósito INCASÒL. Metro L3 ~15 min.`,
    h1: "Cita en despacho — contratos inmobiliarios en el Raval",
    heroLead:
      "En el Raval priorizamos borradores claros de convivencia, depósito legal y distinción entre uso habitual y temporada ficticia: en cita repasamos puntos conflictivos antes de que entre el inquilino.",
    citaFocus:
      "Motivos de cita desde el Raval: habitación cerca de MACBA, LAU en fincas centenarias y arras con cargas ocultas en edificios del Gòtic limítrofe.",
    checklist: [
      "Borrador con cláusulas de fianza (evitar meses en efectivo ilegales)",
      "Fotos de estado de la vivienda para inventario",
      "Informe SERPAVI si el alquiler es habitual en Barcelona",
    ],
    faq: [
      {
        q: "¿Ayudáis si ya tengo un contrato firmado con cláusulas dudosas?",
        a: "Podemos revisarlo en cita o online y orientarte sobre impugnación; lo ideal es revisar antes de firmar.",
      },
      {
        q: "¿Atendéis en castellano y catalán?",
        a: "Sí, el gestor explica LAU, INCASÒL y CCCat en la lengua que prefieras.",
      },
    ],
  },
  barceloneta: {
    metaTitle: "Cita despacho Les Corts — contratos La Barceloneta (temporada vs LAU) | Livendia",
    metaDescription: `Cita en ${ADDRESS} para distinguir temporada legal de LAU en La Barceloneta. Comunidad, humedad y arras marítimas. Livendia Les Corts.`,
    h1: "Cita en despacho — contratos inmobiliarios en La Barceloneta",
    heroLead:
      "Junto al mar muchos borradores intentan etiquetar LAU como temporada: en cita verificamos causa legal, normas de comunidad sobre alquiler temporal y cláusulas de humedad en plantas bajas.",
    citaFocus:
      "Desde La Barceloneta traemos a menudo contratos de 11 meses mal calificados, arras con estado de fachada marítima y habitación en pisos estrechos del Passeig Marítim.",
    checklist: [
      "Restricciones de la junta sobre alquiler turístico o temporal",
      "Informe de humedad o ITE si la planta baja es dudosa",
      "Inventario con electrodomésticos expuestos al ambiente marino",
    ],
    faq: [
      {
        q: "¿Un contrato de 11 meses en la Barceloneta evita la LAU?",
        a: "No necesariamente; en cita te explicamos si corresponde LAU con SERPAVI o temporada acreditada.",
      },
      {
        q: "¿Cuánto tardo desde Barceloneta en metro?",
        a: "Unos 25 min (L4 Barceloneta + L3). Puedes alternar con videollamada previa.",
      },
    ],
  },
  "vila-olimpica": {
    metaTitle: "Cita despacho Les Corts — contratos Vila Olímpica y Port Olímpic | Livendia",
    metaDescription: `Cita en ${ADDRESS} para LAU con terraza, temporada profesional y arras en Vila Olímpica. Comunidades con piscina y portería. Livendia.`,
    h1: "Cita en despacho — contratos inmobiliarios en la Vila Olímpica",
    heroLead:
      "Bloques olímpicos con piscina comunitaria y segundas residencias: en Les Corts detallamos acceso a trasteros, reparto de IBI y arras cuando el propietario no vive en Barcelona.",
    citaFocus:
      "Citas desde Vila Olímpica: LAU con terraza, normas de comunidad sobre alquiler temporal y packs con administración a distancia tras la firma.",
    checklist: [
      "Reglamento de comunidad sobre alquileres temporales",
      "Claves de trastero y parking en anexo al contrato",
      "Si vendes: arras con calendario compatible con comprador foráneo",
    ],
    faq: [
      {
        q: "¿La Vila Olímpica comparte gestor con Poblenou?",
        a: "Sí, mismo equipo Livendia; esta landing de cita está orientada al entorno olímpico y Port Olímpic.",
      },
      {
        q: "¿Puedo delegar todo online sin cita?",
        a: "Sí; la cita es opcional para quien quiere repasar el borrador cara a cara.",
      },
    ],
  },
  pedralbes: {
    metaTitle: "Cita despacho Les Corts — contratos Pedralbes (Reina Elisenda, Diagonal) | Livendia",
    metaDescription: `A pocos minutos de Pedralbes: cita en ${ADDRESS} para arras de alto importe y LAU con parking. Revisión documental pre-escritura. Livendia.`,
    h1: "Cita en despacho desde Pedralbes — arras y LAU en Les Corts",
    heroLead:
      "Pedralbes concentra operaciones de ticket alto: reserva cita en el despacho del propio distrito (Les Corts) para repasar arras CCCat, parking anexo y plazos de escritura con calma.",
    citaFocus:
      "En cita desde Pedralbes revisamos coherencia registral entre vivienda y plaza, ITE reciente y cláusula 621-49 si el comprador financia.",
    checklist: [
      "Nota simple actualizada de todos los inmuebles incluidos en la operación",
      "Borrador de arras con importe de señal y penalizaciones",
      "Documentación de comunidad con conserje si aplica",
    ],
    faq: [
      {
        q: "¿El despacho está cerca de Reina Elisenda?",
        a: "Sí: Mejía Lequerica 44 está en Les Corts, a pocos minutos en metro L3 o coche desde Pedralbes.",
      },
      {
        q: "¿Es distinto de la landing de contratos de Les Corts?",
        a: "Sí: esta página es solo para reservar cita orientada a propietarios en Pedralbes; el hub de servicios completos está en contratos inmobiliarios Barcelona.",
      },
    ],
  },
  "sant-antoni": {
    metaTitle: "Cita despacho Les Corts — contratos Sant Antoni (Mercat, Ronda) | Livendia",
    metaDescription: `Cita en ${ADDRESS} para LAU, habitación y arras en Sant Antoni. Mercat, Ronda de Sant Antoni y Ensanche sur. Metro L2/L3 · ~15–20 min.`,
    h1: "Cita en despacho — contratos inmobiliarios en Sant Antoni",
    heroLead:
      "Entre el Mercat de Sant Antoni y la Ronda, muchas operaciones mezclan locales en planta baja y pisos reformados: en cita aclaramos SERPAVI, INCASÒL y cláusulas tras obra reciente.",
    citaFocus:
      "Agenda desde Sant Antoni: LAU en fincas del Ensanche sur, habitación en Comte Borrell y arras cuando compras piso reformado con licencia de obra.",
    checklist: [
      "Licencia o final de obra si el piso se reformó recientemente",
      "Estado del local comercial en planta baja si afecta al LAU",
      "Borrador con topes ZMRT si la vivienda está en Barcelona capital",
    ],
    faq: [
      {
        q: "¿Puedo combinar cita con contratar online el LAU?",
        a: "Sí: contratas en livendia.com, subes documentos al panel y la cita sirve para revisar el PDF antes de firmar.",
      },
      {
        q: "¿Atendéis arras de compraventa en Sant Antoni?",
        a: "Sí, con honorarios fijos de arras penitenciales publicados en precios.",
      },
    ],
  },
  "fort-pienc": {
    metaTitle: "Cita despacho Les Corts — contratos Fort Pienc (Arc de Triomf) | Livendia",
    metaDescription: `Cita en ${ADDRESS} para LAU, arras CCCat y habitación en Fort Pienc. Arc de Triomf, Estació del Nord · L1+L3 ~15–20 min. Livendia.`,
    h1: "Cita en despacho — contratos inmobiliarios en Fort Pienc",
    heroLead:
      "Fort Pienc enlaza Eixample y Ciutat Vella: en Les Corts repasamos terrazas, locales reconvertidos y compraventas rápidas con borrador CCCat antes de entregar señal en Arc de Triomf o Marina.",
    citaFocus:
      "Citas frecuentes: arras entre particulares con plazo corto de escritura, LAU en edificios con locales reconvertidos y habitación con alta rotación cerca de Estació del Nord.",
    checklist: [
      "Borrador de arras o LAU (podemos generarlo antes online)",
      "Cèdula de habitabilidad si el uso cambió recientemente",
      "Listado de cargas si la finca es antigua",
    ],
    faq: [
      {
        q: "¿Qué metro uso desde Arc de Triomf?",
        a: "L1 Arc de Triomf + L3 hasta Les Corts o Zona Universitària; suele ser 15–20 minutos.",
      },
      {
        q: "¿Revisáis prórrogas LAU 2026 en cita?",
        a: "Sí, explicamos RDL 28/2026 y preaviso de 6 meses si aplica a tu caso.",
      },
    ],
  },
  mataro: {
    metaTitle: "Cita despacho Barcelona — contratos Mataró (Maresme) | Livendia Les Corts",
    metaDescription: `Propietarios en Mataró: cita en ${ADDRESS} (Barcelona) o 100 % online. LAU, arras CCCat. RENFE Mataró → Sants + L3 · ~45–55 min.`,
    h1: "Cita en despacho Barcelona — contratos inmobiliarios para Mataró",
    heroLead:
      "Si vives o tienes inmueble en Mataró y quieres sede física en Barcelona capital, reserva cita en Les Corts tras enviar el borrador por WhatsApp: muchos clientes del Maresme revisan online y solo vienen a firmar o a arras importantes.",
    citaFocus:
      "Desde Mataró suele pedirse cita para arras de compraventa en Catalunya, LAU con cèdula catalana y coordinación con notaría del Maresme o Barcelona.",
    checklist: [
      "Indica que vienes desde Mataró al reservar (te proponemos franja larga si vienes en RENFE)",
      "Documentación del inmueble en Catalunya (cèdula, IBI)",
      "Borrador enviado antes para aprovechar la cita presencial",
    ],
    faq: [
      {
        q: "¿Tiene sentido ir a Barcelona si estoy en Mataró?",
        a: "Para arras de importe o primera operación compleja, sí; para LAU estándar muchos clientes lo cierran 100 % online.",
      },
      {
        q: "¿El contrato es distinto por ser Mataró?",
        a: "El gestor es el mismo; adaptamos documentación al municipio donde está el inmueble (CCCat en arras, etc.).",
      },
    ],
  },
  rubi: {
    metaTitle: "Cita despacho Barcelona — contratos Rubí (Vallès) | Livendia Les Corts",
    metaDescription: `Propietarios en Rubí: cita en ${ADDRESS} o videollamada. LAU, arras y administración. FGC Rubí + L3 · ~30–40 min hasta Les Corts.`,
    h1: "Cita en despacho Barcelona — contratos inmobiliarios para Rubí",
    heroLead:
      "Desde Centre Rubí o Can Jardí puedes tramitar LAU y arras online con gestor dedicado y reservar cita en Les Corts solo cuando quieras repasar borradores en persona (FGC + L3).",
    citaFocus:
      "Clientes de Rubí suelen usar cita para arras antes de señal, revisión de LAU con inquilino del Vallès y explicación del panel Livendia en directo.",
    checklist: [
      "Acceso FGC Rubí → Barcelona (te indicamos mejor conexión L3)",
      "Expediente iniciado en panel si ya contrataste online",
      "Preguntas escritas por WhatsApp para agilizar la cita",
    ],
    faq: [
      {
        q: "¿Puedo hacer solo videollamada desde Rubí?",
        a: "Sí; la cita presencial es opcional. Muchos combinan videollamada + firma posterior sin desplazarse.",
      },
      {
        q: "¿Gestionáis inmuebles ubicados en Rubí?",
        a: "Sí, con la misma calidad de borrador; la cèdula y normativa aplican al municipio del inmueble.",
      },
    ],
  },
};

export function getContratosDespachoBarrioSeo(slug: ContratosInmobiliariosBarrioSlug): ContratosDespachoBarrioSeo {
  return CONTRATOS_DESPACHO_BARRIO_SEO[slug];
}
