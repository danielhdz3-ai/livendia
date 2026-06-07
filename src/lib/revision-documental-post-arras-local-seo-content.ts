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
  malaga: {
    introParagraph: `Firmaste arras en Málaga, la Costa del Sol o Marbella y entregaste una señal que puede superar los 35.000 € en un piso de 350.000 €. Si eres comprador extranjero — británico, alemán o nórdico — es frecuente firmar arras sin dominar del todo el sistema registral español y descubrir cargas o derramas solo cuando el notario las menciona. En urbanizaciones de Estepona, Benalmádena o Marbella las comunidades con piscina, jardinería y seguridad pueden tener cuotas y derramas de 3.000 a 8.000 € anuales que el vendedor no siempre detalla. Nuestro gestor revisa actas, nota registral, licencias, ITE y tus arras antes de escriturar. Pack Revisión Documental Post-Arras: ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} IVA incluido. Análisis en 48 h, informe en 3-5 días laborables.`,
    problems: [
      {
        title: "Compradores extranjeros sin asesoramiento local",
        body:
          "Málaga capital, la Costa del Sol y Marbella concentran un altísimo porcentaje de compradores del Reino Unido, Alemania, Países Bajos y Escandinavia. Muchos firman arras confiando en el agente o el vendedor y descubren cargas registrales, deudas de comunidad o cláusulas desfavorables cuando el notario repasa la operación. Con la señal ya entregada, cada sorpresa documental se vive con mucha más presión.",
      },
      {
        title: "Urbanizaciones de lujo con comunidades complejas",
        body:
          "En Marbella, Estepona o Benalmádena las urbanizaciones con piscina, jardinería, vigilancia y mantenimiento comunitario generan cuotas elevadas y derramas extraordinarias frecuentes. El vendedor no residente puede deber meses de comunidad o cuotas de urbanización. Si no lo verificas antes de escriturar, heredas deudas o conflictos que el banco español también revisa al formalizar la hipoteca.",
      },
      {
        title: "Licencia turística (VFT) o suelo con limitaciones de uso",
        body:
          "Parte del mercado de segunda residencia en la provincia incluye inmuebles con licencia de alquiler turístico activa (VFT) o en suelo con restricciones que condicionan el uso previsto. El comprador que busca vivienda habitual puede encontrarse con obligaciones o limitaciones que no figuraban con claridad en las arras — y que afectan a reventa o alquiler.",
      },
      {
        title: "ITE y estado del edificio en el Centro Histórico de Málaga",
        body:
          "El Casco Antiguo de Málaga tiene edificios con deficiencias estructurales documentadas en ITE que las actas de comunidad no siempre reflejan con claridad. Comprar en el centro sin revisar el estado técnico del edificio puede dejarte con obligaciones de subsanación compartidas que el vendedor minimizó al vender.",
      },
    ],
    reviewItems: [
      "Revisión completa del contrato de arras firmado — plazos, penalizaciones, condición de hipoteca y coherencia con el precio; especial atención si el comprador es extranjero y las arras se redactaron en castellano.",
      "Revisión de actas de comunidad (últimos 2 años) — urbanizaciones en Marbella, Estepona y Benalmádena con servicios comunitarios amplios suelen generar acuerdos y derramas complejas.",
      "Verificación de derramas pendientes y extraordinarias aprobadas — detectamos cuotas de mantenimiento, piscina o seguridad no liquidadas por el vendedor.",
      "Análisis del ITE si existe — deficiencias en edificios del Centro Histórico de Málaga y obligaciones de subsanación.",
      "Obtención y revisión de nota registral actualizada — titularidad, cargas, hipotecas y coherencia con lo vendido (trastero, plaza de garaje, anejos).",
      "Consulta de información urbanística y licencias — licencia turística VFT, uso del suelo y situación urbanística en segunda residencia o costa.",
      "Informe ejecutivo PDF con hallazgos y recomendaciones — semáforo de riesgo para decidir antes de la firma en notaría.",
      "Llamada de veredicto con gestor especializado — explicación clara de hallazgos; útil para compradores internacionales con dudas sobre documentación española.",
      "Asesoramiento telefónico hasta la escritura — soporte para coordinar con banco español, vendedor o gestoría del vendedor.",
    ],
    targetAudienceParagraph: `Este servicio está pensado para compradores particulares en Málaga que ya firmaron arras. El perfil típico: compradores británicos, alemanes o escandinavos que cerraron en Marbella o Estepona y quieren certeza registral antes de escriturar; jubilados españoles con segunda residencia en la costa; o inversores de alquiler turístico que deben verificar si el inmueble tiene VFT o limitaciones de uso. Si eres comprador extranjero que firmó arras en la Costa del Sol y quieres entender cargas, derramas y comunidad sin depender solo del vendedor, este pack es para ti.`,
    faqLocal: [
      {
        question: "¿El informe sirve si soy comprador extranjero y mi banco pide documentación en España?",
        answer:
          "El informe PDF se emite en español porque la documentación legal y registral lo está. En la llamada de veredicto el gestor te explica los hallazgos de forma clara; muchos compradores internacionales lo usan junto con su asesor o banco en España para validar la operación antes de escriturar.",
      },
      {
        question: "¿Verificáis deudas de comunidad en urbanizaciones de Marbella, Estepona o Benalmádena?",
        answer:
          "Sí. Cruzamos actas de los últimos dos años con certificado de deuda de la comunidad para detectar cuotas impagadas o derramas aprobadas que el vendedor no residente pueda haber omitido.",
      },
    ],
  },
  sevilla: {
    introParagraph: `Firmaste arras en Sevilla y entregaste una señal que puede rondar los 25.000 € en un piso de 250.000 €. Entre hoy y la escritura te asaltan las mismas dudas: ¿hay una derrama de rehabilitación en la comunidad que nadie mencionó? En Triana, el Casco Antiguo o Macarena muchos edificios están catalogados o protegidos y las obras de rehabilitación son más caras — las actas pueden reflejar derramas de 10.000 a 20.000 € por vivienda. Además, en Sevilla es frecuente comprar a herederos con aceptación de herencia o liquidación de sucesiones pendientes. Nuestro gestor revisa actas, nota registral, licencias, ITE y tus arras antes de notaría. Pack Revisión Documental Post-Arras: ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} IVA incluido. Análisis en 48 h, informe en 3-5 días laborables.`,
    problems: [
      {
        title: "Derramas en edificios históricos del Centro y Triana",
        body:
          "El patrimonio edificado de Sevilla concentra inmuebles catalogados o protegidos donde las rehabilitaciones de fachada, estructura o accesibilidad son más costosas y las derramas más frecuentes. Las actas de comunidad en Triana, Casco Antiguo o Macarena pueden reflejar acuerdos de 10.000 a 20.000 € por vivienda que el vendedor no traslada al comprador. Con la señal ya entregada, descubrirlo en notaría deja poco margen para renegociar.",
      },
      {
        title: "Herencias no liquidadas o con defectos registrales",
        body:
          "Muchas operaciones en Sevilla proceden de herencias: varios herederos venden sin haber liquidado correctamente el impuesto de sucesiones o con aceptación de herencia con defectos formales que aparecen en la nota registral. El comprador que no revisa titularidad y cargas antes de escriturar puede encontrarse con un vendedor que no puede transmitir limpiamente — o con retrasos que ponen en riesgo el plazo de arras.",
      },
      {
        title: "Reformas importantes sin licencia municipal",
        body:
          "Es frecuente en Sevilla encontrar inmuebles con ampliaciones, cambios de distribución o terrazas cerradas realizadas sin licencia que no están reflejadas en la ficha catastral ni en el registro. El banco y el notario pueden cuestionar la operación si lo vendido no coincide con la realidad urbanística. Revisar licencias y coherencia catastral antes de escriturar evita bloqueos de última hora.",
      },
      {
        title: "Alquiler turístico en el Centro y obligaciones de comunidad",
        body:
          "Compradores que adquieren en el Centro para alquiler turístico pueden ignorar restricciones de comunidad, licencias o cargas que afectan al uso previsto. Las arras raramente detallan si el edificio limita apartamentos turísticos o si hay sanciones municipales pendientes — información que debe cruzarse en la revisión documental.",
      },
    ],
    reviewItems: [
      "Revisión completa del contrato de arras firmado — plazos, penalizaciones, condición de hipoteca y coherencia con el precio en un mercado sevillano con muchas operaciones entre particulares.",
      "Revisión de actas de comunidad (últimos 2 años) — especial atención a edificios históricos en Triana, Macarena y Casco Antiguo con derramas de rehabilitación frecuentes.",
      "Verificación de derramas pendientes y extraordinarias aprobadas — detectamos cuotas de fachada, estructura o accesibilidad no liquidadas por el vendedor.",
      "Análisis del ITE si existe — deficiencias en edificios antiguos del centro y obligaciones de subsanación compartidas.",
      "Obtención y revisión de nota registral actualizada — titularidad tras herencia, cargas, hipotecas y coherencia con arras.",
      "Consulta de información urbanística y licencias — reformas sin licencia, legalización de obras y situación catastral.",
      "Informe ejecutivo PDF con hallazgos y recomendaciones — semáforo de riesgo para decidir con datos antes de la firma.",
      "Llamada de veredicto con gestor especializado — opciones si detectamos herencia incompleta o cargas ocultas.",
      "Asesoramiento telefónico hasta la escritura — soporte para dudas con banco, vendedor o plazos de arras.",
    ],
    targetAudienceParagraph: `Este servicio está pensado para compradores particulares en Sevilla que ya firmaron arras. El perfil típico: familias locales que compran primera vivienda en Nervión, Los Remedios o Triana; funcionarios de la Junta de Andalucía que cierran con rapidez; o inversores de alquiler turístico en el Centro que deben verificar licencias y comunidad antes de desembolsar el resto del precio. Si compraste a herederos o en un edificio catalogado y quieres certeza documental con la señal ya comprometida, este pack es para ti.`,
    faqLocal: [
      {
        question: "¿Revisáis si el vendedor heredó y la titularidad registral está correcta?",
        answer:
          "Sí. Analizamos la nota registral y la coherencia con la situación de herencia. Si la aceptación no está inscrita o hay cotitulares pendientes de firmar, lo reflejamos en el informe antes de que llegue el día de escritura.",
      },
      {
        question: "¿Detectáis reformas sin licencia en pisos del Centro o Triana?",
        answer:
          "Cruzamos la documentación urbanística disponible con la ficha catastral y lo pactado en arras. Si hay indicios de obras no legalizadas que puedan afectar a la operación o a la hipoteca, lo señalamos con recomendaciones concretas.",
      },
    ],
  },
};

export function getRevisionPostArrasLocalSeoContent(slug: string): RevisionPostArrasSeoContent | undefined {
  return REVISION_POST_ARRAS_LOCAL_SEO_CONTENT[slug];
}
