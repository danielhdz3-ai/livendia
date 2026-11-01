import type { GestorWorkflowContent } from "@/lib/gestor-workflow-content";

export type GestoriaFaqItem = { question: string; answer: string };

export function gestoriaStandardFaqItems(city: string, schemaAdministrativeArea: string): GestoriaFaqItem[] {
  return [
    {
      question: `¿La gestoría inmobiliaria en ${city} es 100 % online?`,
      answer: `Sí. Contratas en livendia.com, pagas con tarjeta, subes documentación al panel de cliente y recibes un gestor inmobiliario asignado que te llama en 24-48 h. Tramitamos en ${city} y ${schemaAdministrativeArea} sin obligarte a acudir a un despacho para iniciar el servicio.`,
    },
    {
      question: `¿En qué se diferencia Livendia de una gestoría administrativa en ${city}?`,
      answer:
        "No tramitamos DNI, herencias genéricas ni tráfico: somos gestoría inmobiliaria para particulares (compraventa entre particulares, contratos LAU y arras, revisión documental y administración de alquileres) con tarifas planas publicadas.",
    },
    {
      question: `¿Puedo contratar solo un contrato o también la gestión completa en ${city}?`,
      answer:
        "Puedes contratar servicios sueltos (arras 145 €, LAU, revisión post-arras, administración mensual) o el servicio completo de compra/venta a 890 € IVA incl. Todo desde el mismo panel y con el mismo gestor asignado a tu expediente.",
    },
  ];
}

export function appendGestoriaStandardFaq(
  existing: readonly GestoriaFaqItem[],
  city: string,
  schemaAdministrativeArea: string,
): GestoriaFaqItem[] {
  const seen = new Set(existing.map((item) => item.question.trim().toLowerCase()));
  const out = [...existing];
  for (const item of gestoriaStandardFaqItems(city, schemaAdministrativeArea)) {
    const key = item.question.trim().toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

export function gestoriaLegalRegion(schemaAdministrativeArea: string): "catalunya" | "espana" {
  return /catalu/i.test(schemaAdministrativeArea) ? "catalunya" : "espana";
}

export const GESTORIA_DIGITAL_ONLINE_BULLETS = [
  "Contratas en livendia.com con tarjeta — precio cerrado publicado, sin sorpresas de comisión.",
  "Gestor inmobiliario asignado a tu expediente: llamada en 24-48 h y seguimiento por WhatsApp.",
  "Panel de cliente 24/7: documentos, estado del trámite y mensajes con tu gestor.",
  "Entrega de contratos en 48-72 h laborables; compraventa y administración con hitos visibles en el panel.",
  "Válido en tu ciudad y provincia: no necesitas acudir a un despacho físico para iniciar el servicio.",
] as const;

const REGION_DIGITAL_NOTE: Record<string, string> = {
  España:
    "Desde cualquier CCAA contratas en livendia.com con el mismo panel, gestor asignado y plazos publicados. Elige la landing de tu ciudad (Madrid, Valencia, Sevilla, Zaragoza, Bilbao…) para copy local; el protocolo digital es el mismo en toda España.",
  "Comunidad de Madrid":
    "En Madrid y área metropolitana muchas operaciones entre particulares se cierran con plazos cortos: el panel Livendia concentra reserva, arras y documentación registral para que no dependas de desplazamientos al centro.",
  Cataluña:
    "En Cataluña (Barcelona, Hospitalet de Llobregat, Badalona, Girona y área metropolitana) adaptamos arras y alquiler al marco aplicable (CCCat, INCASÒl cuando procede) con el mismo flujo digital que en otras CCAA.",
  "Comunitat Valenciana":
    "En Valencia, Alicante y provincia tramitas compraventa y LAU online: ideal si compras desde otra CCAA o gestionas un alquiler en Ruzafa, Benimaclet o la costa sin estar físicamente cada semana.",
  Aragón:
    "En Zaragoza y Aragón el mercado entre particulares suele ser más pausado; el expediente digital te permite subir documentación de herencias o ventas entre conocidos cuando tú puedas, no cuando abre un despacho.",
  Andalucía:
    "En Sevilla, Málaga, Granada y resto de Andalucía combinamos venta residencial, universidad y temporada: un solo panel para contratos, revisión post-arras y administración del alquiler.",
  "País Vasco":
    "En Bilbao y Bizkaia el servicio online evita desplazamientos por operaciones en Deusto, Indautxu o margen izquierda: mismo gestor y mismos plazos que en Madrid o Barcelona.",
  "Región de Murcia":
    "En Murcia capital y área metropolitana centralizamos incidencias de alquiler y ventas entre vecinos en el panel — útil en Espinardo, Vistabella y operaciones familiares.",
};

export function gestoriaRegionalDigitalNote(city: string, schemaAdministrativeArea: string): string {
  const regional =
    REGION_DIGITAL_NOTE[schemaAdministrativeArea] ??
    `En ${city} (${schemaAdministrativeArea}) aplicamos el mismo protocolo digital que en el resto de España: contratas online, subes documentación al panel y tu gestor coordina el trámite sin obligarte a acudir a una oficina en tu provincia.`;

  const legal = gestoriaLegalRegion(schemaAdministrativeArea);
  const catalunyaExtra =
    legal === "catalunya"
      ? " Si necesitas cita presencial en Barcelona (Mejía Lequerica 44, Les Corts), puedes combinarla con el trámite online."
      : "";

  return `${regional}${catalunyaExtra}`;
}

export function buildGestoriaHubDigitalWorkflow(options: {
  city: string;
  schemaAdministrativeArea: string;
  /** Si la landing es vertical alquiler o compraventa, afinamos el paso 3. */
  focus?: "all" | "alquiler" | "compraventa";
}): GestorWorkflowContent {
  const { city, schemaAdministrativeArea, focus = "all" } = options;
  const legal = gestoriaLegalRegion(schemaAdministrativeArea);

  const step3Title =
    focus === "alquiler"
      ? "Contratos LAU, temporada o administración en el panel"
      : focus === "compraventa"
        ? "Reserva, arras y documentación de compraventa"
        : "Contratos, compraventa o administración según tu caso";

  const step3Body =
    focus === "alquiler"
      ? "Redactamos o revisamos el alquiler, activamos administración mensual si la contratas y dejamos inventario, fianza y cláusulas listas antes de firmar — todo visible en tu expediente digital."
      : focus === "compraventa"
        ? "Tu gestor revisa nota simple, cargas, borrador de arras y calendario hasta escritura. Subes PDFs al panel y recibes informes antes de entregar más señal."
        : "Según contrates: arras desde 145 €, LAU, servicio completo 890 € o administración mensual. Cada hito queda registrado en el panel con tu gestor asignado.";

  const introLegal =
    legal === "catalunya"
      ? "Normativa catalana cuando aplica (CCCat, INCASÒl en alquiler), explicada en castellano claro."
      : "Marco del Código Civil y LAU estatal, adaptado a tu CCAA y municipio.";

  return {
    heading: `Gestoría inmobiliaria 100 % online en ${city}`,
    intro: `Contratas desde ${city} o desde cualquier punto de ${schemaAdministrativeArea} con tarifas publicadas en livendia.com. ${introLegal} Tu gestor se asigna al expediente, te llama en 24-48 h y responde por WhatsApp y panel hasta cerrar el trámite — sin colas en mostrador.`,
    steps: [
      {
        title: "Eliges servicio y ciudad en Livendia",
        body: `Seleccionas compraventa, contrato o administración para ${city}. Completas datos básicos del inmueble y las partes; el sistema crea tu expediente digital al instante.`,
      },
      {
        title: "Pago seguro y acceso al panel",
        body: "Pagas con tarjeta (Stripe). Recibes acceso al panel de cliente: documentos, estado, mensajes con tu gestor y recordatorios de plazos.",
      },
      {
        title: step3Title,
        body: step3Body,
      },
      {
        title: "Gestor hasta la firma o la entrega",
        body: "Consultas por WhatsApp, teléfono o panel hasta firmar contrato, cerrar compraventa o activar la gestión del alquiler. En administración, Livendia filtra incidencias con el inquilino por ti.",
      },
    ],
    disclaimer:
      "Información general sobre trámites inmobiliarios en España, no asesoramiento jurídico personalizado. El gestor Livendia adapta documentos y plazos a tu operación concreta.",
    primaryCtaLabel: "Ver servicios y contratar",
    secondaryCtaLabel: "Consultar por WhatsApp",
  };
}
