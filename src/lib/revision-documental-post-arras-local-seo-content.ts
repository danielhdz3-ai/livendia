import { REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL } from "@/lib/catalog.public";

export type RevisionPostArrasProblem = {
  title: string;
  body: string;
};

export type RevisionPostArrasSeoContent = {
  introParagraph: string;
  problems: readonly RevisionPostArrasProblem[];
  reviewItems: readonly string[];
  targetAudienceParagraph: string;
  faqLocal: readonly { question: string; answer: string }[];
};

export const REVISION_POST_ARRAS_LOCAL_SEO_CONTENT: Record<string, RevisionPostArrasSeoContent> = {
  madrid: {
    introParagraph: `Firmaste arras en Madrid y entregaste una señal que puede rondar los 30.000 € en un piso de 300.000 €. Entre hoy y la escritura tienes entre 30 y 90 días — y la pregunta que muchos compradores no se hacen a tiempo es: ¿hay derramas pendientes en la comunidad que el vendedor no mencionó? En distritos como Carabanchel, Vallecas, Tetuán o Usera es habitual encontrar derramas de rehabilitación de fachada, ascensor o instalaciones por 5.000 a 15.000 € por vivienda, aprobadas en junta pero aún no liquidadas. Nuestro gestor revisa actas de comunidad, ITE, nota registral, urbanismo y las cláusulas de tus arras antes de que vayas a notaría. Pack Revisión Documental Post-Arras: ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} IVA incluido. Análisis en 48 h, informe en 3-5 días laborables.`,
    problems: [
      {
        title: "Derramas en comunidades de edificios grandes (años 60-80)",
        body:
          "En Carabanchel, Vallecas, Tetuán y Usera abundan bloques de los años 60 a 80 con comunidades numerosas. Las juntas aprueban con frecuencia derramas de rehabilitación de fachada, ascensor o instalaciones por importes de 5.000 a 15.000 € por piso. El vendedor no siempre las declara al comprador. Si no las detectas antes de escriturar, heredas la deuda o llegas a notaría con un conflicto que puede retrasar la hipoteca.",
      },
      {
        title: "Cargas urbanísticas en zonas de desarrollo reciente",
        body:
          "En áreas como Valdebebas, Los Berrocales o PAUs del sur de Madrid pueden existir afecciones urbanísticas o cargas de urbanización que la nota simple no refleja con la claridad que necesitas como comprador. Un comprador que no cruza registro, planeamiento y arras puede descubrir limitaciones días antes de la firma, cuando ya tiene la señal comprometida.",
      },
      {
        title: "ITE con deficiencias en el Ensanche y distritos históricos",
        body:
          "Edificios anteriores a 1970 en Chamberí, Salamanca o Centro tienen ITE obligatoria. Deficiencias calificadas obligan al propietario a subsanarlas; si el vendedor las minimizó o no las trasladó, el comprador puede quedar atrapado en un inmueble con obligaciones estructurales que desconocía. Revisar el ITE antes de escriturar evita sorpresas que cuestan mucho más que el pack de revisión.",
      },
    ],
    reviewItems: [
      "Revisión completa del contrato de arras firmado — comprobamos plazos, penalizaciones, condición de hipoteca y coherencia con el precio pactado en un mercado madrileño donde las operaciones suelen ir rápido.",
      "Revisión de actas de comunidad (últimos 2 años) — especial atención a edificios de gran tamaño en Carabanchel, Vallecas, Tetuán y Usera donde las juntas mueven volumen de acuerdos.",
      "Verificación de derramas pendientes y extraordinarias aprobadas — detectamos cuotas de rehabilitación de fachada, ascensor o instalaciones que el vendedor no haya comunicado.",
      "Análisis del ITE si existe — en Chamberí, Salamanca o Centro verificamos si el edificio tiene ITE vigente, deficiencias calificadas y obligaciones de subsanación del vendedor.",
      "Obtención y revisión de nota registral actualizada — titularidad, cargas, hipotecas pendientes de cancelación y coherencia con lo que figura en arras.",
      "Consulta de información urbanística y licencias — relevante en Valdebebas, Los Berrocales y PAUs del sur donde las afecciones pueden no ser evidentes en un vistazo rápido al registro.",
      "Informe ejecutivo PDF con hallazgos y recomendaciones — semáforo de riesgo por área documental para que decidas con datos antes de notaría.",
      "Llamada de veredicto con gestor especializado — te explicamos hallazgos y próximos pasos sin tecnicismos innecesarios.",
      "Asesoramiento telefónico hasta la escritura — línea abierta para dudas con el banco, el vendedor o el calendario de firma.",
    ],
    targetAudienceParagraph: `Este servicio está pensado para compradores particulares en Madrid que ya firmaron arras y tienen entre 30 y 90 días hasta escritura. El perfil típico: funcionarios o parejas jóvenes que compran su primera vivienda en distritos como Tetuán, Usera o el ensanche norte; o un inversor que adquiere un piso para alquilar en Vallecas o Carabanchel y quiere certeza documental antes de desembolsar el resto del precio. Si acabas de entregar una señal de 20.000 a 50.000 € y te preocupa una derrama oculta o un ITE desactualizado en Chamberí, este pack es para ti — no sustituye al notario, pero te da margen para actuar antes de la firma definitiva.`,
    faqLocal: [
      {
        question: "¿Revisáis derramas pendientes en comunidades de Carabanchel, Vallecas o Tetuán?",
        answer:
          "Sí. Cruzamos actas de los últimos dos años con certificado de deuda de la comunidad para detectar derramas aprobadas, en curso o impagadas por el vendedor que puedan trasladarse al comprador.",
      },
      {
        question: "¿Verificáis afecciones urbanísticas en Valdebebas, Los Berrocales o PAUs del sur?",
        answer:
          "Revisamos la información urbanística disponible y la coherencia con nota registral y arras. Si hay indicios de cargas de urbanización o afecciones, lo reflejamos en el informe con recomendaciones concretas.",
      },
    ],
  },
  barcelona: {
    introParagraph: `Firmaste arras en Barcelona y entregaste una señal que puede rondar los 40.000 € en un piso de 400.000 €. Antes de ir a notaría, hay una pregunta que muchos compradores no se hacen a tiempo: ¿el edificio tiene el ITE al día y sin deficiencias graves? En Barcelona, la inspección técnica es de las más exigentes de España: en el Eixample, Gràcia, Sant Andreu o Nou Barris es frecuente encontrar edificios anteriores a 1970 con deficiencias calificadas que obligan al propietario a subsanar — y el vendedor no siempre lo menciona. Nuestro gestor revisa ITE, actas de comunidad, nota registral, elementos privativos inscritos y las cláusulas de tus arras. Pack Revisión Documental Post-Arras: ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} IVA incluido. Análisis en 48 h, informe en 3-5 días laborables.`,
    problems: [
      {
        title: "ITE con deficiencias graves o muy graves",
        body:
          "Barcelona aplica una de las normativas de ITE más estrictas del país. En el Eixample, Gràcia, Sant Andreu y Nou Barris abundan edificios con deficiencias calificadas como graves o muy graves que obligan al propietario a subsanarlas. Si firmaste arras sin revisar el ITE, puedes quedar atrapado en un inmueble con problemas estructurales que el vendedor minimizó — y subsanarlos puede costar decenas de miles de euros después de haber entregado la señal.",
      },
      {
        title: "Derramas para eficiencia energética y rehabilitación",
        body:
          "La normativa catalana empuja certificados energéticos y rehabilitaciones en bloques antiguos. Muchos edificios tienen derramas aprobadas en junta para mejoras de envolvente o instalaciones que aún no se han ejecutado ni pagado. El comprador que no revisa actas de los últimos dos años puede heredar una cuota extraordinaria de varios miles de euros justo cuando ya comprometió el 10 % del precio en arras.",
      },
      {
        title: "Elementos privativos no inscritos (terraza, trastero, parking)",
        body:
          "En Barcelona es frecuente que terrazas, trasteros o plazas de parking figuren en la escritura del vendedor o en el contrato de compraventa verbal, pero no en la nota registral actualizada por falta de inscripción. El comprador lo descubre en notaría — a veces días antes de la firma — y el banco puede frenar la hipoteca si lo que compras no coincide con el registro.",
      },
      {
        title: "Contención de rentas y vivienda de protección oficial (VPO)",
        body:
          "Algunos inmuebles en zonas de contención de rentas o con régimen de VPO tienen limitaciones de precio y uso que afectan a futuras ventas o alquileres. No siempre constan con claridad en el anuncio ni en las arras. Verificarlo antes de escriturar evita comprar un piso con restricciones que no encajan con tu plan (alquiler libre, reforma o reventa).",
      },
    ],
    reviewItems: [
      "Revisión completa del contrato de arras firmado — plazos, penalizaciones, condición de hipoteca y coherencia con el precio en un mercado barcelonés donde compradores internacionales y financiación bancaria exigen documentación impecable.",
      "Revisión de actas de comunidad (últimos 2 años) — atención a juntas en Eixample, Gràcia y Sant Andreu donde las derramas de rehabilitación energética son cada vez más frecuentes.",
      "Verificación de derramas pendientes y extraordinarias aprobadas — detectamos cuotas de eficiencia energética o fachada aprobadas pero no liquidadas por el vendedor.",
      "Análisis del ITE si existe — comprobamos vigencia, deficiencias graves o muy graves y obligaciones de subsanación del propietario en edificios anteriores a 1970.",
      "Obtención y revisión de nota registral actualizada — titularidad, cargas, hipotecas y coherencia entre lo inscrito y lo pactado (terraza, trastero, parking).",
      "Consulta de información urbanística y licencias — licencias de obra, cédula de habitabilidad y situación urbanística en edificios del Ensanche o casco antiguo.",
      "Informe ejecutivo PDF con hallazgos y recomendaciones — semáforo de riesgo para decidir con datos antes de la firma en notaría catalana.",
      "Llamada de veredicto con gestor especializado — explicación clara de hallazgos y opciones si detectamos incidencias.",
      "Asesoramiento telefónico hasta la escritura — soporte para dudas con banco, vendedor o calendario de firma.",
    ],
    targetAudienceParagraph: `Este servicio está pensado para compradores particulares en Barcelona que ya firmaron arras y tienen entre 30 y 90 días hasta escritura. El perfil típico: compradores internacionales (Francia, Italia, LATAM) que cerraron en el Eixample o Poblenou y quieren certeza registral sin depender solo del vendedor; jóvenes con ayudas o hipoteca que compran en Gràcia o Sant Andreu; o inversores de alquiler que necesitan saber si el piso está en zona de contención de rentas antes de desembolsar el resto del precio. Si entregaste una señal de 30.000 a 50.000 € y te preocupa el ITE del edificio o un trastero que no figura en el registro, este pack es para ti.`,
    faqLocal: [
      {
        question: "¿Revisáis si el piso está en zona de contención de rentas?",
        answer:
          "Sí. Cruzamos la información urbanística y registral disponible con lo pactado en arras. Si hay indicios de contención de rentas o limitaciones de uso, lo reflejamos en el informe para que valores el impacto en tu plan de alquiler o reventa.",
      },
      {
        question: "¿Comprobáis que terraza, trastero o parking coinciden con la nota registral?",
        answer:
          "Es una de las casuísticas más frecuentes en Barcelona. Contrastamos escritura, arras y nota registral para detectar elementos privativos no inscritos antes de que el notario o el banco lo detecten a última hora.",
      },
    ],
  },
  valencia: {
    introParagraph: `Firmaste arras en Valencia y entregaste una señal que puede rondar los 25.000 € en un piso de 250.000 €. Tienes entre 30 y 90 días hasta escritura — y en muchas operaciones valencianas la duda no es solo la comunidad: ¿el inmueble sufrió daños por la DANA de noviembre de 2024 sin que conste en actas ni en la nota registral? En municipios del área metropolitana sur como Paiporta, Sedaví, Catarroja, Alfafar o Massanassa hay viviendas con daños estructurales o humedades que el vendedor no siempre declara. Nuestro gestor revisa actas, derramas, licencias, nota registral, urbanismo y tus arras antes de notaría. Pack Revisión Documental Post-Arras: ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} IVA incluido. Análisis en 48 h, informe en 3-5 días laborables.`,
    problems: [
      {
        title: "Inmuebles afectados por la DANA (noviembre 2024)",
        body:
          "El área metropolitana sur de Valencia — Paiporta, Sedaví, Catarroja, Alfafar, Massanassa y otros municipios — sufrió inundaciones severas. Puede haber daños estructurales, humedades persistentes o afectación a instalaciones que no figuran en la nota registral ni en actas de comunidad recientes. Un comprador que no revisa la documentación post-arras puede llevarse una sorpresa mayúscula días antes de escriturar, con la señal ya comprometida y el banco revisando de nuevo el inmueble.",
      },
      {
        title: "Licencia de primera ocupación o certificado de fin de obra",
        body:
          "Valencia y su área metropolitana tienen muchos inmuebles de obra nueva de los 2000-2010 donde la licencia de primera ocupación o el certificado de fin de obra no se gestionó correctamente. Sin documentación urbanística en regla, el banco puede negarse a formalizar la hipoteca a última hora — justo cuando ya firmaste arras y entregaste la señal.",
      },
      {
        title: "Cargas de promotoras extintas en urbanizaciones de los 2000",
        body:
          "Urbanizaciones de la expansión valenciana pueden conservar afecciones o cargas de promotoras en quiebra que nunca se cancelaron registralmente. La nota simple aislada no siempre basta: hay que cruzar registro, planeamiento y lo pactado en arras. Si no lo detectas antes de escriturar, el conflicto aparece en notaría cuando ya no tienes margen para renegociar con calma.",
      },
      {
        title: "Derramas y comunidades en barrios consolidados",
        body:
          "En Ciutat Vella, Ruzafa, Benimaclet o municipios del cinturón (Mislata, Torrent) las comunidades aprueban con frecuencia derramas de rehabilitación o ascensor que el vendedor no comunica. Heredar una cuota de varios miles de euros tras haber entregado el 10 % en arras es uno de los motivos más habituales por los que los compradores contratan revisión documental en Valencia.",
      },
    ],
    reviewItems: [
      "Revisión completa del contrato de arras firmado — plazos, penalizaciones, condición de hipoteca y coherencia con el precio en un mercado donde familias locales y compradores de Madrid o Barcelona cierran con rapidez.",
      "Revisión de actas de comunidad (últimos 2 años) — especial atención a edificios en zona metropolitana sur y barrios con rehabilitaciones recientes.",
      "Verificación de derramas pendientes y extraordinarias aprobadas — detectamos cuotas aprobadas en junta que el vendedor no haya liquidado.",
      "Análisis del ITE si existe — vigencia y deficiencias en edificios antiguos del centro o ensanche.",
      "Obtención y revisión de nota registral actualizada — titularidad, cargas, hipotecas y coherencia con arras.",
      "Consulta de información urbanística y licencias — primera ocupación, fin de obra y situación catastral en promociones de los 2000-2010.",
      "Informe ejecutivo PDF con hallazgos y recomendaciones — semáforo de riesgo, incluidos indicios de afectación por DANA si la documentación lo sugiere.",
      "Llamada de veredicto con gestor especializado — opciones concretas si detectamos incidencias graves.",
      "Asesoramiento telefónico hasta la escritura — soporte para dudas con banco, vendedor o calendario de firma.",
    ],
    targetAudienceParagraph: `Este servicio está pensado para compradores particulares en Valencia que ya firmaron arras. El perfil típico: familias locales que compran primera o segunda vivienda en Ruzafa, Campanar o el área metropolitana; inversores de zona costera o alfoz; o compradores que se trasladan desde Madrid o Barcelona y no conocen las particularidades documentales valencianas. Si compraste en Paiporta, Sedaví o municipios afectados por la DANA y quieres certeza antes de desembolsar el resto del precio — o si tu banco pide licencia de primera ocupación y no la tienes clara — este pack es para ti.`,
    faqLocal: [
      {
        question: "¿Podéis verificar si el inmueble tuvo daños por la DANA de noviembre de 2024?",
        answer:
          "Revisamos actas de comunidad, informes disponibles, coherencia registral y la documentación que aportes. Si hay indicios de afectación por inundación o daños no declarados por el vendedor, lo reflejamos en el informe con recomendaciones antes de escriturar.",
      },
      {
        question: "¿Comprobáis si existe licencia de primera ocupación o certificado de fin de obra?",
        answer:
          "Sí. Cruzamos la documentación urbanística con lo pactado en arras. La ausencia de primera ocupación es una causa frecuente de bloqueo hipotecario días antes de la firma en promociones de los 2000-2010.",
      },
    ],
  },
};

export function getRevisionPostArrasLocalSeoContent(slug: string): RevisionPostArrasSeoContent | undefined {
  return REVISION_POST_ARRAS_LOCAL_SEO_CONTENT[slug];
}
