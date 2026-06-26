export type GestionVendedorCasuistica = { title: string; body: string };

export type GestionVendedorSeoContent = {
  heroSubtitle: string;
  localProblemIntro: string;
  step2LocalNote: string;
  casuistica: readonly GestionVendedorCasuistica[];
  faqLocal: readonly { question: string; answer: string }[];
  precioMedio: number;
  /** Barrios y zonas atendidas — chips en la landing. */
  barrios?: readonly string[];
  barriosIntro?: string;
};

export const GESTION_VENDEDOR_SEO_CONTENT: Record<string, GestionVendedorSeoContent> = {
  barcelona: {
    precioMedio: 420_000,
    heroSubtitle:
      "Vendiste tu piso en Barcelona y ya tienes comprador. Ahora empieza la parte más compleja: recopilar toda la documentación antes de la escritura. En Barcelona, los plazos de comunidad se alargan, el ITE puede dar sorpresas y la nota registral necesita estar al día antes de que el notario confirme la fecha. Tu gestor Livendia lo gestiona todo desde el día siguiente a contratar.",
    localProblemIntro:
      "En Barcelona, el principal retraso en ventas entre particulares es la documentación de comunidad: obtener el certificado de deuda cero firmado por el administrador puede tardar 10-20 días si la comunidad tiene muchos propietarios o el administrador está saturado.",
    step2LocalNote:
      "Verificación de derramas y estado de ITE en edificios del Eixample o Gràcia, donde los plazos de comunidad pueden alargarse.",
    casuistica: [
      {
        title: "ITE con deficiencias en Eixample, Gràcia y Nou Barris",
        body:
          "Muchos edificios anteriores a 1970 tienen ITE con deficiencias graves. Si no está al día, el notario lo pedirá el día de la firma. Tu gestor lo verifica en la primera semana.",
      },
      {
        title: "Certificado energético caducado",
        body:
          "Pisos que llevan años sin venderse suelen tener el certificado caducado (validez 10 años). Sin él no se escritura. El gestor lo detecta en el checklist inicial.",
      },
      {
        title: "Derramas aprobadas no reflejadas",
        body:
          "En el Eixample y Sarrià-Sant Gervasi hay derramas de fachada o ascensor aprobadas en junta. El gestor cruza certificado de comunidad con actas de los últimos 2 años.",
      },
      {
        title: "Terrazas, trasteros o parkings no inscritos",
        body:
          "Elementos que figuran en tu escritura pero no en el registro deben regularizarse antes de transmitir. Se detectan en la nota simple.",
      },
    ],
    faqLocal: [
      {
        question: "¿Cuánto tarda la comunidad en dar el certificado de deuda cero en Barcelona?",
        answer:
          "En comunidades pequeñas puede salir en 3-5 días; en bloques grandes con administradores saturados puede alargarse 2-3 semanas. Por eso conviene contratar el gestor justo tras firmar arras.",
      },
      {
        question: "¿Hay algún documento específico de la normativa catalana que deba aportar el vendedor?",
        answer:
          "Sí: la Cèdula d'habitabilitat vigente es obligatoria para transmitir en Barcelona. Si está caducada, debe renovarse antes de escriturar. Tu gestor lo verifica en el checklist inicial.",
      },
    ],
  },
  madrid: {
    precioMedio: 350_000,
    heroSubtitle:
      "Vendiste tu piso en Madrid y ya tienes comprador en el mercado más activo de España. Aquí los plazos de escritura suelen ser más cortos por la alta demanda: si la documentación no está lista, pierdes la ventana con el comprador. Tu gestor Livendia gestiona nota simple, comunidad, ITE y hipoteca desde 24 h para que no se retrase la firma.",
    localProblemIntro:
      "En Madrid, el cuello de botella habitual son las comunidades grandes de Salamanca y Chamberí: administradores saturados que tardan semanas en emitir el certificado de deuda cero, y edificios de los 60-70 con derramas de rehabilitación de fachada o ascensor que el vendedor no había previsto.",
    step2LocalNote:
      "Solicitud prioritaria de certificado de comunidad en bloques de Salamanca y Chamberí, y coordinación hipotecaria con el banco del vendedor.",
    casuistica: [
      {
        title: "Comunidades saturadas en Salamanca y Chamberí",
        body:
          "Bloques con decenas de propietarios y gestores externos pueden tardar 2-3 semanas en el certificado de deuda. El gestor lo solicita en la semana 1 para no perder la fecha de escritura.",
      },
      {
        title: "Derramas de rehabilitación en edificios de los 60-70",
        body:
          "En Carabanchel, Tetuán o Usera es habitual encontrar derramas de 5.000-15.000 € por piso aprobadas en junta. El gestor cruza actas y certificado antes de ir a notaría.",
      },
      {
        title: "ITE obligatoria en edificios de más de 50 años",
        body:
          "Madrid no exige cédula de habitabilidad, pero sí ITE en muchos edificios antiguos del centro. El gestor verifica vigencia y deficiencias antes de fijar fecha.",
      },
      {
        title: "Hipoteca pendiente y plazos ajustados",
        body:
          "Con compradores que compiten por el piso, un retraso del banco en el certificado de deuda puede tumbar la operación. El gestor coordina cancelación el día de la venta.",
      },
    ],
    faqLocal: [
      {
        question: "¿Hace falta cédula de habitabilidad para vender en Madrid?",
        answer:
          "No. Madrid eliminó la exigencia de cédula de habitabilidad para transmitir vivienda. Lo que sí puede ser obligatorio es la ITE en edificios de más de 50 años y el certificado energético vigente. Tu gestor lo comprueba en el checklist inicial.",
      },
      {
        question: "¿Cuánto tarda el banco en dar el certificado de deuda pendiente de la hipoteca en Madrid?",
        answer:
          "Legalmente hasta 7 días hábiles, aunque en la práctica puede alargarse 2-3 semanas. Tu gestor lo solicita en los primeros días del servicio para no comprometer la fecha de escritura.",
      },
    ],
  },
  valencia: {
    precioMedio: 220_000,
    heroSubtitle:
      "Vendiste tu piso en Valencia en un mercado en fuerte alza donde muchos vendedores son particulares sin experiencia previa. Entre arras y notaría descubres que hay más papeles de los que pensabas: comunidad, cédula de habitabilidad, energético y nota registral. Tu gestor Livendia lo organiza desde 24 h para que la operación no se enfríe.",
    localProblemIntro:
      "En Valencia abundan fincas con régimen de propiedad horizontal y estatutos antiguos, sobre todo en Ruzafa o Benimaclet, donde la comunidad no tiene administrador profesional y conseguir el certificado de deuda cero depende de un vecino que tarda semanas en responder.",
    step2LocalNote:
      "Gestión de certificado de comunidad en bloques sin administrador profesional y verificación de cédula según la Llei 8/2004 de la Comunitat Valenciana.",
    casuistica: [
      {
        title: "Estatutos antiguos y comunidades sin administrador",
        body:
          "En Ruzafa, Benimaclet o Ciutat Vella el presidente de la comunidad gestiona el papeleo a tiempo parcial. El gestor contacta, hace seguimiento y evita que el certificado de deuda frene la escritura.",
      },
      {
        title: "Cédula de habitabilidad (Llei 8/2004)",
        body:
          "En la Comunitat Valenciana es obligatoria para transmitir. Si está caducada (validez 10 años), debe renovarse antes de escriturar. El gestor lo verifica en la primera semana.",
      },
      {
        title: "Certificado energético caducado",
        body:
          "Muchos vendedores primerizos no saben que sin certificado vigente no se puede ir a notaría. El gestor lo detecta en el checklist y orienta la renovación si hace falta.",
      },
      {
        title: "Zonas del área metropolitana con licencias pendientes",
        body:
          "Promociones de los 2000-2010 en municipios del cinturón pueden carecer de licencia de primera ocupación correctamente tramitada. El gestor lo revisa antes de que el banco del comprador lo pida.",
      },
    ],
    faqLocal: [
      {
        question: "¿Es obligatoria la cédula de habitabilidad en Valencia para vender?",
        answer:
          "Sí. La Llei 8/2004 de la Comunitat Valenciana exige la cèdula d'habitabilitat vigente para transmitir la propiedad. Si está caducada, debe renovarse antes de escriturar. Tu gestor Livendia lo verifica en el checklist inicial.",
      },
      {
        question: "¿Qué pasa si mi comunidad en Ruzafa no tiene administrador de fincas?",
        answer:
          "El certificado de deuda cero lo debe firmar el presidente o el administrador designado por la junta. Tu gestor contacta a la comunidad, hace seguimiento y te indica qué documentación adicional puede pedir el notario.",
      },
    ],
  },
  malaga: {
    precioMedio: 280_000,
    heroSubtitle:
      "Vendiste en Málaga, la Costa del Sol o Marbella con comprador ya encontrado. Entre arras y notaría debes demostrar que la comunidad está al día, que el certificado energético es válido y —si aplica— que la licencia turística o el ITE no bloquean la operación. Tu gestor Livendia lo gestiona desde 24 h.",
    localProblemIntro:
      "En Marbella y Estepona el comprador suele ser extranjero y su banco puede pedir documentación con plazos ajustados. El vendedor no residente a menudo desconoce qué papeles debe tener listos.",
    step2LocalNote:
      "Verificación de cuotas comunitarias en urbanizaciones de lujo y orientación sobre traducción jurada si el comprador es extranjero.",
    casuistica: [
      {
        title: "Compradores extranjeros y plazos de documentación",
        body:
          "El gestor orienta qué documentos pueden requerir traducción jurada para que el banco del comprador acepte el expediente sin retrasar la escritura.",
      },
      {
        title: "Cuotas altas en urbanizaciones",
        body:
          "Marbella y Benalmádena tienen comunidades con cuotas de 3.000-8.000 € anuales. El certificado de deuda cero debe reflejar que estás al corriente.",
      },
      {
        title: "Licencia turística VFT",
        body:
          "Si tu piso tiene VFT activa, el gestor verifica si es transmisible y lo refleja en el informe antes de escriturar.",
      },
      {
        title: "ITE en el Centro Histórico",
        body:
          "Edificios con deficiencias documentadas donde el vendedor puede no conocer el estado exacto del edificio.",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis la documentación si el comprador es extranjero?",
        answer:
          "El gestor te orienta sobre qué documentos requieren traducción jurada y en qué plazo. La traducción la contrata quien acuerde en arras, pero tú sabrás exactamente qué necesitas.",
      },
      {
        question: "¿Mi piso tiene licencia turística activa — afecta a la venta?",
        answer:
          "Puede afectar. El gestor verifica si la VFT consta en registro, si es transmisible y te informa antes de la escritura.",
      },
    ],
  },
  sevilla: {
    precioMedio: 200_000,
    heroSubtitle:
      "Vendiste en Sevilla con comprador particular y firmaste arras. Ahora toca reunir nota simple, certificado de comunidad, ITE si aplica, energético vigente y coordinar la hipoteca si la tienes. En Triana o el Casco las derramas y las herencias complican el calendario. Tu gestor Livendia lo organiza desde 24 h.",
    localProblemIntro:
      "En Sevilla muchas ventas vienen de herencias: varios herederos, aceptación pendiente de inscripción o sucesiones no liquidadas pueden retrasar la documentación que el notario exige.",
    step2LocalNote:
      "Revisión de titularidad tras herencia y certificados de comunidad en edificios históricos de Triana o Macarena.",
    casuistica: [
      {
        title: "Derramas en edificios históricos",
        body:
          "Triana, Casco Antiguo y Macarena tienen rehabilitaciones costosas con derramas de 10.000-20.000 €. El gestor cruza actas y certificado de deuda.",
      },
      {
        title: "Herencias no liquidadas",
        body:
          "Titularidad registral imperfecta tras herencia puede impedir escriturar a tiempo. El gestor lo detecta en la nota simple de la primera semana.",
      },
      {
        title: "Reformas sin licencia",
        body:
          "Ampliaciones no reflejadas en catastro pueden bloquear la hipoteca del comprador. Se verifica en urbanismo.",
      },
      {
        title: "Alquiler turístico en el Centro",
        body:
          "Si vendes piso que tuvo uso turístico, el gestor comprueba licencias y restricciones de comunidad.",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis la documentación si vendo como heredero en Sevilla?",
        answer:
          "Sí. Verificamos que la aceptación de herencia esté inscrita y que todos los cotitulares pueden transmitir antes de la fecha de escritura.",
      },
      {
        question: "¿Cuánto tarda la comunidad en dar el certificado de deuda en el Centro o Triana?",
        answer:
          "En comunidades pequeñas, días; en edificios con administrador externo y muchas derramas pendientes, puede tardar 2-3 semanas. Por eso conviene contratar pronto.",
      },
    ],
  },
  bilbao: {
    precioMedio: 310_000,
    heroSubtitle:
      "Vendiste en Bilbao o el Gran Bilbao con comprador ya encontrado. Entre arras y notaría necesitas nota simple, comunidad, ITE, energético y —si tienes hipoteca— coordinar al banco. En Casco Viejo las derramas RENOVE y el régimen foral añaden complejidad. Tu gestor Livendia lo gestiona desde 24 h.",
    localProblemIntro:
      "En Bizkaia el vendedor que viene de fuera puede no anticipar particularidades forales en la transmisión. El gestor revisa titularidad y cargas con ese contexto.",
    step2LocalNote:
      "Seguimiento de derramas RENOVE en Casco Viejo, Indautxu y Abando y coordinación hipotecaria con entidades vascas.",
    casuistica: [
      {
        title: "Derramas RENOVE",
        body:
          "Bloques de los 50-70 con rehabilitación energética pueden tener derramas elevadas aunque parcialmente subvencionadas. El gestor verifica actas y certificado.",
      },
      {
        title: "Régimen foral y cargas",
        body:
          "Comunicación foral de bienes u otras limitaciones pueden afectar la transmisión. Se revisan en la nota simple.",
      },
      {
        title: "ITE en Casco Viejo",
        body:
          "Deficiencias estructurales documentadas que el notario puede exigir subsanadas o declaradas.",
      },
      {
        title: "Garaje o trastero en la operación",
        body:
          "En tickets altos es frecuente que anejos no estén correctamente inscritos. El gestor cruza registro y arras.",
      },
    ],
    faqLocal: [
      {
        question: "¿Revisáis las particularidades del régimen foral vasco como vendedor?",
        answer:
          "Sí. Analizamos titularidad y cargas teniendo en cuenta normativa foral que pueda afectar a la venta.",
      },
      {
        question: "¿Gestionáis el certificado de deuda si hay derrama RENOVE aprobada?",
        answer:
          "Cruzamos certificado con actas de los últimos dos años para que conste el estado real de derramas aprobadas o en curso.",
      },
    ],
  },
  zaragoza: {
    precioMedio: 180_000,
    heroSubtitle:
      "Vendiste en Zaragoza con comprador particular. Entre arras y escritura hay que ordenar nota simple, comunidad, ITE, energético e hipoteca. En Valdespartera o Parque Goya las cargas de urbanización y las herencias familiares suelen ser el cuello de botella. Tu gestor Livendia lo gestiona desde 24 h.",
    localProblemIntro:
      "En Zaragoza el retraso habitual es la documentación de PAUs recientes: cargas de urbanización que no figuran canceladas en registro cuando el vendedor no las conoce.",
    step2LocalNote:
      "Verificación de cargas de urbanización en Valdespartera, Parque Goya y Rosales del Canal.",
    casuistica: [
      {
        title: "Cargas en PAUs",
        body:
          "Promociones recientes pueden tener urbanización no totalmente cancelada registralmente. El gestor lo verifica antes de fijar fecha de notaría.",
      },
      {
        title: "ITE en Casco Histórico",
        body:
          "Edificios antiguos con deficiencias y derramas de subsanación frecuentes.",
      },
      {
        title: "Ventas entre herederos",
        body:
          "Alta proporción de operaciones familiares con titularidad registral que debe estar perfecta antes de escriturar.",
      },
      {
        title: "Coherencia arras–registro",
        body:
          "Operaciones rápidas entre particulares donde el comprador pide documentación impecable en poco tiempo.",
      },
    ],
    faqLocal: [
      {
        question: "¿Verificáis cargas de urbanización en Valdespartera o Parque Goya?",
        answer:
          "Sí. Revisamos registro y documentación urbanística disponible y lo reflejamos en el informe semáforo.",
      },
      {
        question: "¿Gestionáis ventas entre varios herederos?",
        answer:
          "Comprobamos que todos los cotitulares pueden firmar escritura y que la herencia está correctamente inscrita.",
      },
    ],
  },
  alicante: {
    precioMedio: 190_000,
    heroSubtitle:
      "Vendiste en Alicante o la Costa Blanca con comprador ya encontrado. Si no vives en la urbanización, conseguir el certificado de comunidad y demostrar que estás al corriente puede ser un quebradero de cabeza. Tu gestor Livendia solicita, revisa y organiza todo el expediente desde 24 h.",
    localProblemIntro:
      "En Torrevieja, Benidorm, Altea y Jávea los vendedores no residentes a menudo deben meses de comunidad sin saberlo. El certificado de deuda cero es imprescindible.",
    step2LocalNote:
      "Certificado de deuda en urbanizaciones costeras y verificación de licencia VFT si aplica.",
    casuistica: [
      {
        title: "Deudas de comunidad en urbanizaciones",
        body:
          "Cuotas impagadas del vendedor no residente bloquean la escritura. El gestor solicita certificado y cruza con actas.",
      },
      {
        title: "Licencia turística o suelo irregular",
        body:
          "Inmuebles con VFT o situación urbanística irregular deben documentarse antes de transmitir.",
      },
      {
        title: "Compradores extranjeros",
        body:
          "Plazos ajustados y documentación que el banco del comprador revisa con rigor. El gestor mantiene el calendario.",
      },
      {
        title: "Anejos mal inscritos",
        body:
          "Trastero, garaje o terraza en la venta pero no en registro — se detecta en nota simple.",
      },
    ],
    faqLocal: [
      {
        question: "¿Verificáis deudas de comunidad si yo no vivo en la urbanización?",
        answer:
          "Sí. Solicitamos certificado de deuda y revisamos actas para detectar cuotas o derramas impagadas.",
      },
      {
        question: "¿Gestionáis la documentación si el comprador es británico o alemán?",
        answer:
          "El gestor mantiene el expediente en regla para que el notario y el banco del comprador no retrasen la fecha de firma.",
      },
    ],
  },
  murcia: {
    precioMedio: 160_000,
    heroSubtitle:
      "Vendiste en Murcia capital o la huerta con comprador particular. Entre arras y notaría necesitas nota simple, comunidad, certificado energético y coordinar hipoteca si la hay. En operaciones entre familias o segunda residencia, la documentación suele ser el cuello de botella. Tu gestor Livendia lo organiza desde 24 h.",
    localProblemIntro:
      "En Murcia es habitual vender entre particulares en urbanizaciones o herencias donde varios propietarios deben alinear titularidad y certificados antes de la fecha de escritura.",
    step2LocalNote:
      "Gestión de certificados en urbanizaciones de la huerta y verificación de titularidad en ventas por herencia.",
    casuistica: [
      {
        title: "Herencias y cotitularidad",
        body:
          "Varios herederos deben tener la titularidad inscrita correctamente. El gestor lo verifica en la primera semana.",
      },
      {
        title: "Urbanizaciones y comunidades",
        body:
          "Certificado de deuda y derramas en promociones de expansión de los 2000-2010.",
      },
      {
        title: "Certificado energético",
        body:
          "Frecuente en pisos de segunda mano sin renovar. Obligatorio para escriturar.",
      },
      {
        title: "Hipoteca pendiente",
        body:
          "Coordinación con el banco para certificado de deuda y cancelación el día de la venta.",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis ventas en Cartagena o municipios de la huerta?",
        answer:
          "Sí. El servicio cubre Murcia capital y operaciones en la provincia con el mismo checklist adaptado al inmueble.",
      },
      {
        question: "¿Cuándo debo pedir el certificado de comunidad en Murcia?",
        answer:
          "Tu gestor lo solicita en la primera semana del servicio para no comprometer el plazo de escritura pactado en arras.",
      },
    ],
  },
  valladolid: {
    precioMedio: 150_000,
    heroSubtitle:
      "Vendiste en Valladolid con comprador que ya conocías — vecino, familiar o contacto de Idealista. Entre arras y notaría hay que reunir nota simple, comunidad, ITE si aplica y liquidar hipoteca. En herencias y ventas entre particulares el papeleo suele retrasar la firma. Tu gestor Livendia lo gestiona desde 24 h.",
    localProblemIntro:
      "En Valladolid abundan ventas por herencia entre hermanos: la aceptación debe estar inscrita y la documentación alineada antes de que el comprador exija fecha en notaría.",
    step2LocalNote:
      "Verificación de titularidad tras herencia y certificados en comunidades de Delicias o Parquesol.",
    casuistica: [
      {
        title: "Herencia pendiente de inscripción",
        body:
          "No se puede escriturar con titularidad incorrecta. El gestor revisa registro en la semana 1.",
      },
      {
        title: "Comunidad en bloques de los 90",
        body:
          "Derramas de mantenimiento en Delicias y Parquesol que deben constar en certificado de deuda.",
      },
      {
        title: "Vendedor senior o en otra provincia",
        body:
          "Piso en Valladolid pero tú vives en Madrid: el gestor centraliza trámites sin que desplazarte a cada oficina.",
      },
      {
        title: "Coherencia con arras entre conocidos",
        body:
          "Operaciones de confianza donde el contrato debe coincidir con la documentación que aportarás al notario.",
      },
    ],
    faqLocal: [
      {
        question: "¿Puedo contratar si vivo en Madrid pero el piso está en Valladolid?",
        answer:
          "Sí. Todo el expediente se gestiona online: el gestor solicita documentos y tú los subes al área de cliente.",
      },
      {
        question: "¿Gestionáis si vendemos varios hermanos como herederos?",
        answer:
          "Verificamos titularidad de todos los cotitulares y que la herencia esté inscrita antes de la escritura.",
      },
    ],
  },
  granada: {
    precioMedio: 170_000,
    heroSubtitle:
      "Vendiste en Granada con comprador particular. Entre arras y notaría necesitas nota simple, comunidad, ITE en edificios antiguos, energético vigente y —si hay inquilino— aclarar la situación de arrendamiento. En el Albaicín la documentación es especialmente delicada. Tu gestor Livendia lo organiza desde 24 h.",
    localProblemIntro:
      "En Granada es frecuente vender pisos de inversión universitaria o herencias en el casco histórico donde la protección patrimonial y el registro complican el calendario documental.",
    step2LocalNote:
      "Documentación en Albaicín y Realejo, y verificación de contratos de alquiler vigentes con inquilino.",
    casuistica: [
      {
        title: "Protección patrimonial en Albaicín",
        body:
          "Fincas con registro complejo o indivisiones históricas. El gestor revisa nota simple y urbanismo.",
      },
      {
        title: "Servidumbres de regantes en la Vega",
        body:
          "Cargas de paso o comunidades de regantes que deben constar antes de transmitir.",
      },
      {
        title: "Piso con inquilino",
        body:
          "Contrato vigente y derecho de tanteo pueden afectar la operación. El gestor lo señala en el informe.",
      },
      {
        title: "Derramas en comunidades del centro",
        body:
          "Obras de accesibilidad o rehabilitación aprobadas en junta que deben reflejarse en certificado de deuda.",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis la documentación si hay un inquilino con contrato vigente?",
        answer:
          "Revisamos la situación de arrendamiento y lo reflejamos en el informe para que sepas qué constar en escritura según lo pactado en arras.",
      },
      {
        question: "¿Vendo en el Albaicín — hay requisitos documentales extra?",
        answer:
          "Sí. Protección patrimonial y registro pueden exigir documentación adicional. Tu gestor lo incluye en el checklist desde el día 1.",
      },
    ],
  },
  oviedo: {
    precioMedio: 195_000,
    heroSubtitle:
      "Vendiste tu piso en Oviedo entre particulares — vecino, compañero de trabajo o comprador de Idealista — y ya firmaste arras. Ahora toca demostrar que la comunidad está al día, que la cédula de habitabilidad y el certificado energético son válidos y que la nota simple no esconde cargas. En Oviedo, donde muchas ventas son sin agencia, el cuello de botella casi siempre es el papeleo. Tu gestor Livendia lo organiza desde 24 h.",
    localProblemIntro:
      "En Oviedo el retraso más habitual en ventas entre particulares es el certificado de deuda cero de la comunidad: en bloques de La Ería, Los Pilares o Pumarín, con administradores saturados o comunidades sin gestor profesional, pueden pasar dos o tres semanas hasta tener el documento que el notario y el banco del comprador exigen.",
    step2LocalNote:
      "Seguimiento de certificados en comunidades de La Ería, Los Pilares, Ciudad Naranco y edificios del Ensanche con ITE o derramas de rehabilitación energética.",
    barriosIntro:
      "Atendemos ventas entre particulares en todo Oviedo capital y municipios del área metropolitana donde el comprador ya está y la documentación frena la firma.",
    barrios: [
      "Centro",
      "El Cristo",
      "La Florida",
      "Tenderina",
      "Los Pilares",
      "Ciudad Naranco",
      "Pumarín",
      "La Ería",
      "Fonsovel",
      "Ventanueva",
      "Corredoria",
      "Vallobín",
      "La Manjoya",
      "Trubia",
      "Lugones",
      "Siero",
      "Langreo",
    ],
    casuistica: [
      {
        title: "Comunidades sin administrador en La Ería y Pumarín",
        body:
          "Muchos bloques de los 70-80 dependen del presidente vecinal para emitir el certificado de deuda. El gestor contacta, hace seguimiento y evita que la operación se enfríe mientras el comprador espera fecha en notaría.",
      },
      {
        title: "Cédula de habitabilidad en el Principado de Asturias",
        body:
          "Para transmitir vivienda en Oviedo hace falta cédula vigente (Decreto 85/2006). Si caducó, debe renovarse antes de escriturar. El gestor lo detecta en el checklist de la primera semana.",
      },
      {
        title: "ITE y derramas en el Ensanche y Ciudad Naranco",
        body:
          "Edificios de más de 50 años con inspección técnica pendiente o derramas de fachada aprobadas en junta. El gestor cruza actas, certificado de comunidad e informe de edificio antes de fijar fecha.",
      },
      {
        title: "Ventas entre familiares y herencias en el casco",
        body:
          "Operaciones en El Cristo, La Florida o el Centro donde varios herederos deben alinear titularidad registral. La nota simple se revisa al inicio para no llegar tarde al notario.",
      },
      {
        title: "Garaje o trastero no inscritos",
        body:
          "En promociones de Ciudad Naranco o Ensanche es frecuente vender plaza o trastero junto al piso. El gestor verifica que consten en registro y coincidan con lo pactado en arras.",
      },
    ],
    faqLocal: [
      {
        question: "¿Cuánto tarda la comunidad en Oviedo en dar el certificado de deuda cero?",
        answer:
          "En comunidades pequeñas del centro puede salir en 3-5 días; en bloques grandes de La Ería, Los Pilares o Pumarín con administrador externo, suele tardar 2-3 semanas. Por eso conviene contratar el gestor justo tras firmar arras.",
      },
      {
        question: "¿Gestionáis ventas en Siero, Lugones o el área metropolitana?",
        answer:
          "Sí. El servicio cubre Oviedo capital y operaciones en municipios del área donde el inmueble esté en el Principado de Asturias, con el mismo checklist adaptado al edificio.",
      },
      {
        question: "¿Hace falta cédula de habitabilidad para vender en Oviedo?",
        answer:
          "Sí. En Asturias es obligatoria para transmitir la vivienda. Si está caducada (validez 10 años), debe renovarse antes de la escritura. Tu gestor Livendia lo verifica en el diagnóstico inicial.",
      },
    ],
  },
  gijon: {
    precioMedio: 185_000,
    heroSubtitle:
      "Vendiste tu piso en Gijón sin inmobiliaria y ya tienes comprador. Entre arras y notaría descubres que el banco pide comunidad al día, certificado energético, cédula de habitabilidad y nota simple reciente — y que en edificios de La Arena, El Natahoyo o Cimadevilla los plazos de administrador se alargan. Tu gestor Livendia centraliza todo el expediente desde 24 h para que la venta entre particulares no se caiga.",
    localProblemIntro:
      "En Gijón abundan ventas directas entre particulares en barrios consolidados como Laviada, Cimadevilla o El Natahoyo, donde edificios antiguos tienen ITE con deficiencias o derramas de rehabilitación que el vendedor no había previsto y el comprador financiado descubre tarde.",
    step2LocalNote:
      "Gestión de certificados en bloques de La Arena, El Natahoyo, Montevil y verificación de cargas en promociones de Somió y Viesques.",
    barriosIntro:
      "Cubrimos ventas entre particulares en Gijón capital, el litoral y concejos limítrofes donde el comprador ya está y falta ordenar la documentación hacia escritura.",
    barrios: [
      "Centro",
      "Cimadevilla",
      "La Arena",
      "El Natahoyo",
      "Laviada",
      "Somió",
      "Viesques",
      "Montevil",
      "La Calzada",
      "Pumarín",
      "El Llano",
      "Ceares",
      "Contrueces",
      "Roces",
      "Carreño",
      "Villaviciosa",
      "Avilés",
    ],
    casuistica: [
      {
        title: "Edificios históricos en Cimadevilla y el Centro",
        body:
          "Fincas con registro complejo, terrazas o anejos mal descritos. El gestor revisa nota simple y coherencia con arras antes de que el notario fije fecha.",
      },
      {
        title: "Derramas en La Arena y El Natahoyo",
        body:
          "Rehabilitaciones de fachada o ascensor aprobadas en junta con cuotas de miles de euros. El gestor cruza actas de los últimos dos años con el certificado de deuda cero.",
      },
      {
        title: "Compradores con hipoteca y plazos cortos",
        body:
          "En Somió, Viesques o Montevil el comprador suele financiar. Sin documentación lista, el banco retrasa la aprobación y puede renegociar condiciones. El gestor mantiene el calendario alineado.",
      },
      {
        title: "Certificado energético caducado en pisos de reventa",
        body:
          "Muchos vendedores particulares en Gijón no saben que sin certificado vigente no hay escritura. Se detecta en la primera semana y se orienta la renovación si hace falta.",
      },
      {
        title: "Segunda residencia o vendedor fuera de Asturias",
        body:
          "Piso en Gijón pero vives en Madrid u otra provincia: el gestor solicita certificados y tú los subes al área de cliente sin desplazarte a cada oficina.",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis la documentación si vendo en La Arena o El Natahoyo?",
        answer:
          "Sí. El checklist se adapta al edificio: comunidad, ITE si aplica, cédula, energético, hipoteca pendiente y coherencia con tu contrato de arras. Mismo servicio y tarifa en todo Gijón.",
      },
      {
        question: "¿Puedo contratar si vivo fuera de Gijón pero el piso está ahí?",
        answer:
          "Sí. Todo el expediente es online: tu gestor solicita documentos, hace seguimiento con la comunidad y tú centralizas archivos en el panel Livendia.",
      },
      {
        question: "¿El contrato de arras está incluido?",
        answer:
          "No. Este servicio va de arras firmadas a escritura. Si aún no tienes arras, puedes contratarlas en /servicios/contrato-arras-local/asturias por 145 € IVA incluido.",
      },
    ],
  },
};

export function getGestionVendedorSeoContent(slug: string): GestionVendedorSeoContent | undefined {
  return GESTION_VENDEDOR_SEO_CONTENT[slug];
}
