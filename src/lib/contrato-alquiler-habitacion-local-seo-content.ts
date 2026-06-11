export type HabitacionCityComparisonRow = {
  aspect: string;
  enEstaCiudad: string;
  otrasCiudades: string;
};

export type HabitacionTypicalProfile = {
  title: string;
  body: string;
  barrios: string;
};

export type HabitacionLocalSeoContent = {
  heroSubtitle: string;
  localMarketIntro: string;
  zonesHeading: string;
  zonesParagraph: string;
  zoneGroups: readonly { district: string; areas: string }[];
  whyContractMatters: readonly { title: string; body: string }[];
  typicalProfiles: {
    title: string;
    intro: string;
    profiles: readonly HabitacionTypicalProfile[];
  };
  cityComparison: {
    title: string;
    intro: string;
    rows: readonly HabitacionCityComparisonRow[];
  };
  localRisks: readonly { title: string; body: string }[];
  faqLocal: readonly { question: string; answer: string }[];
};

export const HABITACION_LOCAL_SEO_CONTENT: Record<string, HabitacionLocalSeoContent> = {
  barcelona: {
    heroSubtitle:
      "¿Alquilas o alquilas una habitación en Barcelona? Un contrato verbal o un PDF de piso entero no cubre convivencia, gastos compartidos ni preaviso. Por 120 € un gestor Livendia redacta un contrato específico para habitación en piso compartido, con normas claras para propietario e inquilino, en 48-72 h laborables.",
    localMarketIntro:
      "Barcelona concentra uno de los mercados de habitaciones más dinámicos de España: estudiantes en zona universitaria, jóvenes profesionales en el 22@ o Poblenou, expatriados en Eixample y propietarios que comparten piso en Gràcia o Sants. La demanda es alta y la rotación también — por eso firmar sin contrato adaptado es el error más caro.",
    zonesHeading: "Contrato de habitación en todos los distritos de Barcelona",
    zonesParagraph:
      "Redactamos contratos para habitaciones en Barcelona ciudad y área metropolitana inmediata. El inmueble puede estar en cualquiera de estos distritos y barrios:",
    zoneGroups: [
      { district: "Ciutat Vella", areas: "El Raval, Barri Gòtic, El Born, La Barceloneta" },
      { district: "Eixample", areas: "Esquerra de l'Eixample, Dreta, Sagrada Família, Sant Antoni" },
      { district: "Gràcia", areas: "Vila de Gràcia, Camp d'en Grassot, La Salut" },
      { district: "Sants-Montjuïc", areas: "Sants, Hostafrancs, Poble-sec, Montjuïc" },
      { district: "Les Corts", areas: "Les Corts, Pedralbes, Zona Universitària" },
      { district: "Sarrià-Sant Gervasi", areas: "Sarrià, Sant Gervasi, Les Tres Torres" },
      { district: "Horta-Guinardó", areas: "El Carmel, La Teixonera, Horta, Guinardó" },
      { district: "Nou Barris", areas: "Vilapicina, Porta, Roquetes, Trinitat Vella" },
      { district: "Sant Andreu", areas: "Sant Andreu de Palomar, La Sagrera, Navas" },
      { district: "Sant Martí", areas: "Poblenou, El Clot, La Verneda, Diagonal Mar" },
      { district: "Área metropolitana", areas: "L'Hospitalet, Badalona, Cornellà, Esplugues" },
    ],
    whyContractMatters: [
      {
        title: "Rotación altísima de inquilinos",
        body: "En Barcelona la rotación es una de las más altas de España. Sin contrato escrito, disputas sobre fianza, gastos o preaviso acaban en conflicto en el segundo mes.",
      },
      {
        title: "No es un contrato LAU de piso entero",
        body: "Usar una plantilla de vivienda completa deja fuera convivencia, zonas comunes y reparto de suministros — lo que más se litiga en pisos compartidos del Eixample o Gràcia.",
      },
      {
        title: "Pisos con 3-4 inquilinos",
        body: "En Poblenou, Sants o Sant Martí es habitual convivir con varias personas. El contrato debe definir quién paga qué y qué pasa si uno se va antes del curso o del contrato.",
      },
    ],
    typicalProfiles: {
      title: "Particulares que más necesitan contrato de habitación en Barcelona",
      intro:
        "Si eres propietario o inquilino particular — sin agencia de por medio — estos son los casos que más vemos en Barcelona:",
      profiles: [
        {
          title: "Propietario que alquila 2-3 habitaciones en su piso",
          body: "Compartes vivienda habitual y necesitas normas claras de cocina, visitas y limpieza sin pisar derechos de cada inquilino.",
          barrios: "Gràcia, Sants, Eixample, Poblenou",
        },
        {
          title: "Inquilino que entra en piso ya habitado",
          body: "Llegas por trabajo o estudios y el arrendador solo tiene un acuerdo verbal. Quieres fianza, preaviso y gastos por escrito antes de pagar la primera mensualidad.",
          barrios: "Zona Universitària, El Clot, Sant Antoni",
        },
        {
          title: "Estudiante o becario de estancia corta",
          body: "Curso universitario o prácticas de 6-12 meses. El contrato debe fijar duración, depósito y qué pasa si abandonas antes.",
          barrios: "Les Corts, Ciutat Vella, Horta-Guinardó",
        },
      ],
    },
    cityComparison: {
      title: "Alquiler de habitación en Barcelona frente a otras ciudades",
      intro:
        "Barcelona compite con Madrid y Valencia por demanda de habitaciones, pero el perfil del inquilino y los riesgos sin contrato cambian según la ciudad:",
      rows: [
        {
          aspect: "Precio medio habitación",
          enEstaCiudad: "Entre los más altos de España (Eixample, Gràcia, 22@).",
          otrasCiudades: "Madrid similar; Valencia, Sevilla y Málaga suelen ser 15-25 % más bajas.",
        },
        {
          aspect: "Perfil del inquilino",
          enEstaCiudad: "Estudiantes, expatriados y teletrabajadores en pisos de 3-4 habitaciones.",
          otrasCiudades: "En Madrid predominan jóvenes profesionales; en Valencia y Sevilla, más universitarios.",
        },
        {
          aspect: "Riesgo sin contrato",
          enEstaCiudad: "Alta rotación + convivencia multicultural → disputas de gastos y preaviso.",
          otrasCiudades: "En ciudades más pequeñas el mercado es más informal, pero el riesgo legal es el mismo.",
        },
        {
          aspect: "Cláusulas imprescindibles",
          enEstaCiudad: "Reparto de suministros, normas de zonas comunes, visitas y estancias cortas.",
          otrasCiudades: "En todas las ciudades; en Barcelona se exigen con más frecuencia por escrito.",
        },
      ],
    },
    localRisks: [
      {
        title: "Pisos con 3-4 inquilinos sin reparto de gastos claro",
        body: "En Poblenou, Sants o el Eixample es habitual alquilar varias habitaciones. Sin cláusula de suministros e internet, las discusiones empiezan en el segundo mes.",
      },
      {
        title: "Estudiantes y estancias cortas",
        body: "Cerca de la Zona Universitària o Ciutat Vella muchos alquileres duran un curso. El contrato debe fijar preaviso, fianza y qué pasa si alguien se va antes.",
      },
      {
        title: "Coliving y pisos ya habitados",
        body: "Si entras en un piso con inquilinos previos, el contrato debe regular visitas, limpieza de zonas comunes y uso de cocina sin pisar derechos de quien ya vive ahí.",
      },
      {
        title: "Plantillas LAU copiadas de internet",
        body: "Un contrato de vivienda completa no protege al arrendador que sigue viviendo en el piso ni al inquilino que solo alquila una habitación.",
      },
    ],
    faqLocal: [
      {
        question: "¿Puedo usar el mismo contrato LAU que para un piso entero en Barcelona?",
        answer:
          "No es recomendable. El alquiler de habitación en vivienda compartida tiene régimen y cláusulas distintas: convivencia, zonas comunes, gastos y preaviso.",
      },
      {
        question: "¿El contrato vale si el piso está en L'Hospitalet o Badalona?",
        answer:
          "Sí. El gestor adapta el contrato a la dirección real del inmueble, ya esté en Barcelona capital o en municipios del área metropolitana.",
      },
      {
        question: "¿Qué pasa si alquilo dos habitaciones del mismo piso en Gràcia?",
        answer:
          "Cada habitación puede llevar contrato individual o un documento marco con anexos. El gestor te orienta según convivan varios inquilinos.",
      },
      {
        question: "¿Es obligatorio un contrato por escrito para alquilar una habitación en Barcelona?",
        answer:
          "La ley no exige forma escrita en todos los casos, pero sin contrato no tienes prueba de renta, fianza, preaviso ni normas de convivencia.",
      },
    ],
  },

  madrid: {
    heroSubtitle:
      "¿Alquilas una habitación en Madrid como particular? En Chamberí, Moncloa o Tetuán miles de pisos compartidos funcionan sin contrato adaptado — hasta que hay conflicto con la fianza o los gastos. Por 120 € un gestor Livendia redacta un contrato de habitación con convivencia, suministros y preaviso claros, en 48-72 h.",
    localMarketIntro:
      "Madrid es la ciudad con más demanda de habitaciones de España: universitarios en Moncloa y Ciudad Universitaria, jóvenes profesionales en Chamberí y Salamanca, trabajadores temporales en Usera o Tetuán y propietarios que rentabilizan una o dos habitaciones de su vivienda. La rotación es rápida; un PDF genérico o un acuerdo verbal no aguanta.",
    zonesHeading: "Contrato de habitación por distritos y barrios de Madrid",
    zonesParagraph:
      "Tramitamos contratos para habitaciones en Madrid capital y municipios del área metropolitana. Cubrimos estos distritos y zonas habituales de piso compartido:",
    zoneGroups: [
      { district: "Centro", areas: "Sol, Lavapiés, Malasaña, Chueca, La Latina" },
      { district: "Chamberí", areas: "Almagro, Trafalgar, Vallehermoso, Gaztambide" },
      { district: "Salamanca", areas: "Recoletos, Goya, Lista, Castellana" },
      { district: "Moncloa-Aravaca", areas: "Argüelles, Ciudad Universitaria, Moncloa" },
      { district: "Tetuán", areas: "Cuatro Caminos, Bellas Vistas, Valdeacederas" },
      { district: "Chamartín", areas: "Prosperidad, Ciudad Jardín, Hispanoamérica" },
      { district: "Retiro", areas: "Pacífico, Adelfas, Ibiza, Jerónimos" },
      { district: "Arganzuela", areas: "Delicias, Acacias, Chopera, Legazpi" },
      { district: "Usera", areas: "Orcasitas, Orcasur, San Fermín, Almendrales" },
      { district: "Carabanchel", areas: "Puerta Bonita, Vista Alegre, San Isidro" },
      { district: "Fuencarral-El Pardo", areas: "Tres Olivos, Mirasierra, El Pardo" },
      { district: "Área metropolitana", areas: "Getafe, Móstoles, Alcorcón, Leganés, Pozuelo" },
    ],
    whyContractMatters: [
      {
        title: "Mercado con máxima rotación",
        body: "En Madrid entran y salen inquilinos cada curso o cada cambio de trabajo. Sin contrato, recuperar la fianza o exigir preaviso se convierte en una discusión sin pruebas.",
      },
      {
        title: "Propietario que vive en el piso",
        body: "Muchos arrendadores en Tetuán, Usera o Chamberí alquilan habitaciones en su vivienda habitual. Un contrato LAU de piso entero no regula convivencia ni zonas comunes.",
      },
      {
        title: "Varias habitaciones, un solo piso",
        body: "En pisos de 80-100 m² con 3-4 habitaciones hace falta definir reparto de luz, gas, internet y limpieza — sobre todo si un inquilino se va a mitad de contrato.",
      },
    ],
    typicalProfiles: {
      title: "Particulares que contratan contrato de habitación en Madrid",
      intro:
        "Sin agencia, sin intermediarios: estos son los perfiles que más nos consultan en Madrid:",
      profiles: [
        {
          title: "Propietario particular con habitación libre",
          body: "Tienes una habitación en tu piso y quieres alquilarla con normas de convivencia, fianza y preaviso sin depender de una plantilla de internet.",
          barrios: "Chamberí, Tetuán, Moncloa, Retiro",
        },
        {
          title: "Inquilino que llega a Madrid por trabajo",
          body: "Entras en un piso compartido y necesitas que conste por escrito la renta, los gastos incluidos y el plazo de permanencia antes de transferir la fianza.",
          barrios: "Nuevos Ministerios, Cuatro Caminos, Delicias",
        },
        {
          title: "Arrendador con dos habitaciones en el mismo piso",
          body: "Alquilas dos habitaciones a personas distintas y necesitas contratos coherentes entre sí sobre cocina, baños y visitas.",
          barrios: "Lavapiés, Argüelles, Pacífico",
        },
      ],
    },
    cityComparison: {
      title: "Alquiler de habitación en Madrid frente a otras ciudades",
      intro:
        "Madrid lidera la demanda de habitaciones en España, pero no es igual alquilar en Chamberí que en Valencia o Málaga:",
      rows: [
        {
          aspect: "Demanda y rotación",
          enEstaCiudad: "La más alta del país; pisos de 3-4 habitaciones siempre llenos.",
          otrasCiudades: "Barcelona similar; Valencia y Sevilla más estacionales (curso universitario).",
        },
        {
          aspect: "Precio de habitación",
          enEstaCiudad: "Salamanca y Chamberí entre las más caras; Usera o Carabanchel más asequibles.",
          otrasCiudades: "Barcelona comparable; Bilbao y Málaga suelen ser más baratas en zona centro.",
        },
        {
          aspect: "Tipo de arrendador",
          enEstaCiudad: "Muchos propietarios particulares que viven en el piso y alquilan 1-2 habitaciones.",
          otrasCiudades: "En Málaga y Valencia más pisos enteros convertidos en coliving.",
        },
        {
          aspect: "Sin contrato adaptado",
          enEstaCiudad: "Conflictos frecuentes por fianza y gastos compartidos entre desconocidos.",
          otrasCiudades: "El riesgo es el mismo; en Madrid el volumen hace que el problema sea más visible.",
        },
      ],
    },
    localRisks: [
      {
        title: "Fianza y depósito sin inventario",
        body: "En Malasaña o Argüelles es habitual pedir dos meses de fianza. Sin inventario de la habitación y cláusula de devolución, la disputa al salir es casi segura.",
      },
      {
        title: "Gastos incluidos mal definidos",
        body: "«Todo incluido» sin cifra máxima de luz o calefacción genera conflictos en invierno, sobre todo en pisos antiguos de Chamberí o Tetuán.",
      },
      {
        title: "Entrada a piso ya habitado",
        body: "Si convives con inquilinos previos, el contrato debe regular horarios, visitas del arrendador y limpieza de zonas comunes desde el primer día.",
      },
      {
        title: "Contrato de agencia reutilizado",
        body: "Muchos particulares copian contratos LAU de agencias. No cubren régimen de habitación ni convivencia en vivienda compartida.",
      },
    ],
    faqLocal: [
      {
        question: "¿El contrato vale para habitaciones en Getafe, Móstoles o Alcorcón?",
        answer:
          "Sí. Contratas online y el gestor adapta el documento a la dirección real del inmueble en Madrid capital o área metropolitana.",
      },
      {
        question: "¿Puedo alquilar dos habitaciones con contratos distintos en el mismo piso?",
        answer:
          "Sí. Cada habitación puede llevar contrato individual. El gestor alinea cláusulas de gastos comunes y convivencia entre ambos.",
      },
      {
        question: "¿Sirve si ya tengo un borrador del propietario?",
        answer:
          "Sí. Lo revisamos, corregimos lagunas sobre convivencia, fianza y gastos, y lo dejamos listo para firmar.",
      },
      {
        question: "¿Atendéis solo a propietarios o también a inquilinos?",
        answer:
          "A ambos. Si eres inquilino y el arrendador no tiene contrato, puedes contratar el servicio para que el gestor redacte un documento equilibrado.",
      },
    ],
  },

  valencia: {
    heroSubtitle:
      "¿Alquilas una habitación en Valencia? En Ruzafa, Benimaclet o Ciutat Vella muchos particulares comparten piso sin contrato específico. Por 120 € Livendia redacta un contrato de habitación con normas de convivencia, gastos y fianza adaptados a tu piso, en 48-72 h laborables.",
    localMarketIntro:
      "Valencia mezcla universitarios en Benimaclet y Tarongers, jóvenes profesionales en Ruzafa y El Carmen, y propietarios que alquilan habitaciones en pisos de Extramurs o Campanar. El mercado es más asequible que Madrid o Barcelona, pero la informalidad sin contrato genera los mismos conflictos de fianza y preaviso.",
    zonesHeading: "Contrato de habitación por distritos y barrios de Valencia",
    zonesParagraph:
      "Redactamos contratos para habitaciones en Valencia ciudad y área metropolitana. Estas son las zonas donde más tramitamos pisos compartidos:",
    zoneGroups: [
      { district: "Ciutat Vella", areas: "El Carmen, La Seu, El Mercat, La Xerea" },
      { district: "Eixample", areas: "Ruzafa, Pla del Remei, Gran Vía" },
      { district: "Extramurs", areas: "El Botànic, La Petxina, Arrancapins" },
      { district: "Campanar", areas: "Campanar, Nou Moles, Sant Antoni" },
      { district: "Benicalap", areas: "Benicalap, Ciutat Fallera, Sant Antoni" },
      { district: "Benimaclet", areas: "Benimaclet, Camins al Grau (zona universitaria)" },
      { district: "Algirós", areas: "Algirós, Amistat, Ciutat Jardí" },
      { district: "Poblats Marítims", areas: "El Cabanyal, Malvarrosa, Beteró" },
      { district: "Patraix", areas: "Patraix, Favara, Safranar" },
      { district: "Quatre Carreres", areas: "Mont-Olivet, En Corts, Malilla" },
      { district: "Área metropolitana", areas: "Mislata, Paterna, Burjassot, Torrent" },
    ],
    whyContractMatters: [
      {
        title: "Universidad y rotación anual",
        body: "Benimaclet y zona Tarongers concentran miles de estudiantes. Sin contrato, el preaviso de verano y la devolución de fianza se discuten cada curso.",
      },
      {
        title: "Pisos compartidos en Ruzafa y El Carmen",
        body: "La demanda de habitaciones en el centro histórico crece cada año. Hace falta regular visitas, ruido y limpieza de zonas comunes por escrito.",
      },
      {
        title: "Propietarios particulares sin plantilla",
        body: "En Valencia muchos arrendadores son particulares que nunca han redactado un contrato de habitación. Un LAU de piso entero no sirve.",
      },
    ],
    typicalProfiles: {
      title: "Particulares que necesitan contrato de habitación en Valencia",
      intro: "Casos habituales entre propietarios e inquilinos sin agencia en Valencia:",
      profiles: [
        {
          title: "Estudiante de la UPV o UV",
          body: "Buscas habitación en Benimaclet o cerca de Tarongers y quieres un contrato con duración de curso, fianza y gastos claros.",
          barrios: "Benimaclet, Algirós, Ciutat Vella",
        },
        {
          title: "Propietario con habitación en piso propio",
          body: "Alquilas una habitación en tu vivienda y necesitas normas de convivencia sin conflictos con tu familia o con otros inquilinos.",
          barrios: "Campanar, Patraix, Extramurs",
        },
        {
          title: "Joven profesional en Ruzafa",
          body: "Entras en un piso compartido de 3 personas y quieres que conste internet, limpieza y preaviso antes de firmar.",
          barrios: "Ruzafa, Gran Vía, El Carmen",
        },
      ],
    },
    cityComparison: {
      title: "Alquiler de habitación en Valencia frente a otras ciudades",
      intro:
        "Valencia ofrece habitaciones más asequibles que Madrid o Barcelona, pero el contrato sigue siendo imprescindible:",
      rows: [
        {
          aspect: "Precio medio",
          enEstaCiudad: "15-25 % más bajo que Madrid y Barcelona en zonas céntricas.",
          otrasCiudades: "Málaga sube en temporada; Sevilla similar en precio.",
        },
        {
          aspect: "Perfil dominante",
          enEstaCiudad: "Estudiantes UPV/UV y jóvenes en Ruzafa y Cabanyal.",
          otrasCiudades: "Madrid más profesional; Málaga más turística y estacional.",
        },
        {
          aspect: "Estacionalidad",
          enEstaCiudad: "Picos en septiembre (curso) y verano (Cabanyal, playa).",
          otrasCiudades: "Málaga muy marcada por temporada; Madrid más estable todo el año.",
        },
        {
          aspect: "Formalidad del contrato",
          enEstaCiudad: "Muchos acuerdos verbales entre particulares; el riesgo es alto.",
          otrasCiudades: "En Madrid y Barcelona más conciencia, pero el problema persiste.",
        },
      ],
    },
    localRisks: [
      {
        title: "Estancias de un curso sin cláusula de salida",
        body: "En Benimaclet muchos alquileres duran 9-10 meses. Sin preaviso y fianza regulados, junio se convierte en conflicto.",
      },
      {
        title: "Pisos en El Carmen con varios inquilinos",
        body: "Pisos antiguos con 3-4 habitaciones necesitan normas de ruido, visitas y limpieza — sobre todo en temporada de fallas y turismo.",
      },
      {
        title: "Gastos de comunidad y suministros",
        body: "En Extramurs y Campanar es frecuente incluir comunidad en la renta. Debe constar qué pasa si un inquilino consume de más.",
      },
      {
        title: "Borradores copiados de otras ciudades",
        body: "Plantillas de Madrid o Barcelona no contemplan particularidades de convivencia valenciana ni duración de curso universitario.",
      },
    ],
    faqLocal: [
      {
        question: "¿Tramitáis contratos en Mislata, Paterna o Burjassot?",
        answer: "Sí. El servicio es online y el gestor adapta el contrato a la dirección real del inmueble.",
      },
      {
        question: "¿Puedo poner duración de curso universitario?",
        answer: "Sí. El gestor incluye plazo, preaviso de salida en junio y condiciones de prórroga si aplica.",
      },
      {
        question: "¿Sirve para pisos en el Cabanyal o Malvarrosa?",
        answer: "Sí. Incluimos cláusulas de convivencia adaptadas a pisos compartidos cerca de la playa o zona universitaria.",
      },
      {
        question: "¿Puedo contratar si soy inquilino y el propietario no tiene contrato?",
        answer: "Sí. Muchos inquilinos contratan para tener un documento profesional antes de pagar fianza.",
      },
    ],
  },

  malaga: {
    heroSubtitle:
      "¿Alquilas una habitación en Málaga? En Teatinos, El Palo o el centro muchos pisos compartidos funcionan sin contrato de habitación. Por 120 € un gestor Livendia redacta cláusulas de convivencia, gastos y fianza para particulares, en 48-72 h.",
    localMarketIntro:
      "Málaga combina estudiantes de la UMA en Teatinos, jóvenes profesionales en el centro y temporada alta en El Palo o La Malagueta. Propietarios particulares alquilan habitaciones todo el año; en verano la rotación se dispara. Sin contrato adaptado, la fianza y los gastos compartidos son el primer foco de conflicto.",
    zonesHeading: "Contrato de habitación por zonas de Málaga",
    zonesParagraph:
      "Tramitamos contratos de habitación en Málaga capital y área metropolitana. Zonas habituales de piso compartido:",
    zoneGroups: [
      { district: "Centro Histórico", areas: "Centro, La Merced, San Julián" },
      { district: "Teatinos-Universidad", areas: "Teatinos, Hacienda Pública, Cruz de Humilladero norte" },
      { district: "Este", areas: "El Palo, Pedregalejo, Baños del Carmen" },
      { district: "Ciudad Jardín", areas: "La Malagueta, Monte Sancha, El Limonar" },
      { district: "Carretera de Cádiz", areas: "Huelin, La Luz, Cruz de Humilladero" },
      { district: "Bailén-Miraflores", areas: "Miraflores, La Goleta, Haza de Cuevas" },
      { district: "Puerto de la Torre", areas: "Puerto de la Torre, Maqueda" },
      { district: "Churriana", areas: "Churriana, San Julián extramuros" },
      { district: "Área metropolitana", areas: "Rincón de la Victoria, Torremolinos, Alhaurín" },
    ],
    whyContractMatters: [
      {
        title: "Temporada y rotación en verano",
        body: "En El Palo y el centro muchos inquilinos cambian en verano. Sin contrato, el preaviso y la devolución de fianza se discuten cada temporada.",
      },
      {
        title: "Estudiantes UMA en Teatinos",
        body: "Pisos de 3-4 habitaciones cerca del campus necesitan normas de convivencia, gastos y duración de curso por escrito.",
      },
      {
        title: "Particulares sin experiencia",
        body: "Muchos propietarios malagueños alquilan su primera habitación sin saber qué cláusulas poner. Un LAU de piso entero no cubre el régimen de habitación.",
      },
    ],
    typicalProfiles: {
      title: "Particulares que contratan en Málaga",
      intro: "Perfiles frecuentes en el mercado de habitaciones de Málaga:",
      profiles: [
        {
          title: "Estudiante de la UMA",
          body: "Buscas habitación en Teatinos con contrato de curso, fianza y gastos de luz e internet definidos.",
          barrios: "Teatinos, Cruz de Humilladero, Bailén",
        },
        {
          title: "Propietario con habitación libre",
          body: "Alquilas una habitación en tu piso y quieres normas claras de convivencia y visitas.",
          barrios: "Centro, La Malagueta, Carretera de Cádiz",
        },
        {
          title: "Inquilino en piso compartido junto al mar",
          body: "Entras en El Palo o Pedregalejo y necesitas contrato antes de pagar depósito y primera renta.",
          barrios: "El Palo, Pedregalejo, Ciudad Jardín",
        },
      ],
    },
    cityComparison: {
      title: "Alquiler de habitación en Málaga frente a otras ciudades",
      intro: "Málaga tiene un mercado más estacional que Madrid o Bilbao, con particularidades propias:",
      rows: [
        {
          aspect: "Estacionalidad",
          enEstaCiudad: "Fuerte rotación en verano y curso universitario (septiembre).",
          otrasCiudades: "Madrid más estable; Sevilla similar en perfil universitario.",
        },
        {
          aspect: "Perfil inquilino",
          enEstaCiudad: "Estudiantes UMA, teletrabajadores y perfiles internacionales.",
          otrasCiudades: "Valencia más universitario puro; Barcelona más expatriado corporativo.",
        },
        {
          aspect: "Precio",
          enEstaCiudad: "Centro y playa más caros; Teatinos más asequible para estudiantes.",
          otrasCiudades: "Por debajo de Madrid y Barcelona; similar a Sevilla.",
        },
        {
          aspect: "Riesgo sin contrato",
          enEstaCiudad: "Conflictos por temporada, fianza y gastos en pisos de 3-4 habitaciones.",
          otrasCiudades: "Mismo riesgo legal; en Málaga la estacionalidad lo agrava.",
        },
      ],
    },
    localRisks: [
      {
        title: "Contratos verbales de temporada",
        body: "En verano muchos acuerdos duran 2-3 meses sin documento. Sin cláusulas de salida y fianza, las disputas son inevitables.",
      },
      {
        title: "Pisos convertidos en coliving",
        body: "En el centro y Teatinos hay pisos con 4 habitaciones. Hace falta reparto de gastos y normas de cocina por escrito.",
      },
      {
        title: "Inquilinos internacionales",
        body: "Si el inquilino no domina el español, el contrato debe ser claro en renta, fianza y preaviso para evitar malentendidos.",
      },
      {
        title: "Plantillas genéricas de internet",
        body: "Modelos descargados no contemplan régimen de habitación ni convivencia en vivienda compartida.",
      },
    ],
    faqLocal: [
      {
        question: "¿Hacéis contratos para Teatinos y zona universidad?",
        answer: "Sí. Incluimos duración de curso, preaviso y cláusulas de convivencia para pisos compartidos.",
      },
      {
        question: "¿Vale para habitaciones en Torremolinos o Rincón?",
        answer: "Sí. Adaptamos el contrato a la dirección real del inmueble en el área metropolitana.",
      },
      {
        question: "¿Puedo regular una estancia de verano?",
        answer: "Sí. El gestor fija plazo, fianza, gastos y condiciones de salida para estancias cortas.",
      },
      {
        question: "¿Atendéis a inquilinos que piden el contrato al propietario?",
        answer: "Sí. Puedes contratar el servicio para que el gestor redacte un documento equilibrado.",
      },
    ],
  },

  sevilla: {
    heroSubtitle:
      "¿Alquilas una habitación en Sevilla? En Nervión, Triana o Los Remedios miles de particulares comparten piso sin contrato de habitación. Por 120 € Livendia redacta normas de convivencia, gastos y fianza adaptadas a tu caso, en 48-72 h laborables.",
    localMarketIntro:
      "Sevilla vive del mercado universitario en Reina Mercedes y Macarena, jóvenes profesionales en Nervión y Los Remedios, y propietarios que alquilan habitaciones en Triana o el centro. Los precios son más bajos que en Madrid o Barcelona, pero la informalidad sin contrato genera los mismos problemas de fianza, preaviso y gastos compartidos.",
    zonesHeading: "Contrato de habitación por distritos y barrios de Sevilla",
    zonesParagraph:
      "Redactamos contratos para habitaciones en Sevilla capital y área metropolitana. Zonas donde más tramitamos pisos compartidos:",
    zoneGroups: [
      { district: "Casco Antiguo", areas: "Santa Cruz, San Vicente, El Arenal, Feria" },
      { district: "Triana", areas: "Triana, Triana Este, Triana Oeste" },
      { district: "Nervión", areas: "Nervión, San Bernardo, Huerta del Valle" },
      { district: "Los Remedios", areas: "Los Remedios, Tablada, La Carrasca" },
      { district: "Macarena", areas: "Macarena, San Julián, Feria de Abril" },
      { district: "Este-Alcosa-Torreblanca", areas: "Torreblanca, Cerro-Amate, La Plata" },
      { district: "Norte", areas: "Macarena norte, San Jerónimo, Pino Montano" },
      { district: "Sur", areas: "Heliópolis, Bellavista, Padre Pío" },
      { district: "Universidad", areas: "Reina Mercedes, Viapol, Princesa Juana" },
      { district: "Área metropolitana", areas: "Dos Hermanas, Alcalá de Guadaíra, Camas" },
    ],
    whyContractMatters: [
      {
        title: "Mercado universitario",
        body: "En Reina Mercedes y Macarena la rotación es anual. Sin contrato, junio trae disputas de fianza y preaviso cada curso.",
      },
      {
        title: "Pisos compartidos en Triana y Nervión",
        body: "Pisos de 3-4 habitaciones necesitan normas de convivencia, visitas y limpieza — no un LAU de vivienda completa.",
      },
      {
        title: "Particulares sin intermediarios",
        body: "En Sevilla muchos alquileres son entre particulares. Un gestor adapta el contrato a la realidad del piso, no a una plantilla genérica.",
      },
    ],
    typicalProfiles: {
      title: "Particulares que necesitan contrato en Sevilla",
      intro: "Casos típicos de propietarios e inquilinos en Sevilla:",
      profiles: [
        {
          title: "Estudiante de US, UPO o Pablo de Olavide",
          body: "Buscas habitación cerca del campus con contrato de curso, fianza y gastos claros.",
          barrios: "Reina Mercedes, Macarena, Nervión",
        },
        {
          title: "Propietario con una habitación libre",
          body: "Alquilas en tu vivienda habitual y necesitas normas de convivencia con tu familia u otros inquilinos.",
          barrios: "Triana, Los Remedios, Este",
        },
        {
          title: "Inquilino en piso compartido del centro",
          body: "Entras en Santa Cruz o Feria y quieres documento escrito antes de transferir la fianza.",
          barrios: "Santa Cruz, Nervión, Heliópolis",
        },
      ],
    },
    cityComparison: {
      title: "Alquiler de habitación en Sevilla frente a otras ciudades",
      intro: "Sevilla ofrece habitaciones más económicas, con un mercado muy marcado por la universidad:",
      rows: [
        {
          aspect: "Precio",
          enEstaCiudad: "Por debajo de Madrid, Barcelona y Bilbao; similar a Valencia.",
          otrasCiudades: "Málaga sube en verano; Madrid la más cara en conjunto.",
        },
        {
          aspect: "Perfil",
          enEstaCiudad: "Estudiantes y jóvenes profesionales; menos expatriado que Málaga.",
          otrasCiudades: "Madrid más corporativo; Valencia más mixta universidad-playa.",
        },
        {
          aspect: "Rotación",
          enEstaCiudad: "Picos en septiembre y salidas en junio (curso).",
          otrasCiudades: "Madrid rotación continua; costa más estacional.",
        },
        {
          aspect: "Formalidad",
          enEstaCiudad: "Alto porcentaje de acuerdos verbales entre particulares.",
          otrasCiudades: "Mismo riesgo legal en todas; el contrato de habitación es la protección.",
        },
      ],
    },
    localRisks: [
      {
        title: "Curso universitario sin preaviso",
        body: "En junio muchos inquilinos se van sin avisar. Sin cláusula de preaviso y fianza, el propietario no tiene palancas.",
      },
      {
        title: "Gastos de luz y aire acondicionado",
        body: "En verano sevillano el consumo dispara. Debe constar si la luz está incluida o repartida y con qué límites.",
      },
      {
        title: "Pisos antiguos en el centro",
        body: "En Santa Cruz y Triana, pisos con varias habitaciones necesitan inventario y normas de convivencia detalladas.",
      },
      {
        title: "Contratos LAU inadecuados",
        body: "Plantillas de piso entero no regulan habitación en vivienda compartida ni convivencia real.",
      },
    ],
    faqLocal: [
      {
        question: "¿Tramitáis contratos en Dos Hermanas o Alcalá?",
        answer: "Sí. El gestor adapta el documento a la dirección real en Sevilla o área metropolitana.",
      },
      {
        question: "¿Puedo incluir cláusula de curso escolar?",
        answer: "Sí. Fijamos duración, preaviso de salida en junio y condiciones de depósito.",
      },
      {
        question: "¿Sirve para pisos en Triana o Los Remedios?",
        answer: "Sí. Redactamos para cualquier barrio de Sevilla capital.",
      },
      {
        question: "¿Puedo contratar como inquilino?",
        answer: "Sí. Si el propietario no tiene contrato, puedes encargar la redacción para protegerte antes de pagar.",
      },
    ],
  },

  bilbao: {
    heroSubtitle:
      "¿Alquilas una habitación en Bilbao? En Deusto, Indautxu o el Casco Viejo muchos pisos compartidos van sin contrato de habitación adaptado. Por 120 € un gestor Livendia redacta convivencia, gastos y fianza para particulares, en 48-72 h.",
    localMarketIntro:
      "Bilbao concentra estudiantes en Deusto y Basurto, jóvenes profesionales en Indautxu y Abando, y propietarios que alquilan habitaciones en Santutxu o el Casco Viejo. El mercado es más pequeño que Madrid o Barcelona, pero la convivencia en pisos compartidos exige las mismas cláusulas por escrito.",
    zonesHeading: "Contrato de habitación por zonas de Bilbao y Gran Bilbao",
    zonesParagraph:
      "Tramitamos contratos de habitación en Bilbao y municipios del Gran Bilbao. Zonas habituales:",
    zoneGroups: [
      { district: "Deusto", areas: "Deusto, Universidad, Arangoiti" },
      { district: "Abando", areas: "Indautxu, Abandoibarra, Uribitarte" },
      { district: "Casco Viejo", areas: "Siete Calles, Bilbao La Vieja, Solokoetxe" },
      { district: "Rekalde", areas: "Santutxu, San Adrián, Otxarkoaga" },
      { district: "Basurto-Zorroza", areas: "Basurto, Zorrotzaurre, Altamira" },
      { district: "Ensanche", areas: "Ensanche, Ibaiondo, Atxuri" },
      { district: "Begoña", areas: "Begoña, Santutxu alto, Otxarkoaga" },
      { district: "Uribarri", areas: "Uribarri, Miraflores, Zurbaranbarri" },
      { district: "Gran Bilbao", areas: "Getxo, Portugalete, Santurtzi, Barakaldo" },
    ],
    whyContractMatters: [
      {
        title: "Universidad de Deusto y rotación",
        body: "Pisos compartidos cerca del campus rotan cada curso. Sin contrato, la fianza y el preaviso se discuten cada junio.",
      },
      {
        title: "Pisos pequeños con varias habitaciones",
        body: "En Indautxu y Santutxu es habitual maximizar habitaciones. Hace falta reparto de gastos y normas de cocina por escrito.",
      },
      {
        title: "Particulares sin plantilla",
        body: "El mercado bilbaíno es más informal que Madrid. Un contrato LAU de piso entero no cubre régimen de habitación.",
      },
    ],
    typicalProfiles: {
      title: "Particulares que contratan contrato de habitación en Bilbao",
      intro: "Perfiles frecuentes en el mercado de habitaciones del Gran Bilbao:",
      profiles: [
        {
          title: "Estudiante de Deusto o UPV/EHU",
          body: "Buscas habitación cerca del campus con contrato de curso, fianza y gastos definidos.",
          barrios: "Deusto, Basurto, Rekalde",
        },
        {
          title: "Propietario con habitación en su piso",
          body: "Alquilas una habitación en tu vivienda y necesitas normas de convivencia claras.",
          barrios: "Indautxu, Uribarri, Begoña",
        },
        {
          title: "Profesional joven en Indautxu",
          body: "Entras en un piso compartido y quieres documento escrito de renta, gastos y preaviso.",
          barrios: "Abando, Ensanche, Casco Viejo",
        },
      ],
    },
    cityComparison: {
      title: "Alquiler de habitación en Bilbao frente a otras ciudades",
      intro: "Bilbao tiene un mercado más contenido que Madrid o Barcelona, con dinámica propia:",
      rows: [
        {
          aspect: "Tamaño del mercado",
          enEstaCiudad: "Menor volumen que Madrid, BCN o Valencia; alta demanda en Deusto.",
          otrasCiudades: "Madrid y Barcelona mucho más masivos; Málaga más turístico.",
        },
        {
          aspect: "Precio",
          enEstaCiudad: "Indautxu y Abando más caros; Santutxu y Otxarkoaga más asequibles.",
          otrasCiudades: "Por encima de Sevilla; por debajo de Madrid centro.",
        },
        {
          aspect: "Perfil inquilino",
          enEstaCiudad: "Estudiantes y jóvenes profesionales del Gran Bilbao.",
          otrasCiudades: "Valencia y Sevilla más universitarios; Málaga más internacional.",
        },
        {
          aspect: "Sin contrato",
          enEstaCiudad: "Acuerdos verbales frecuentes entre particulares; mismo riesgo legal.",
          otrasCiudades: "En todas las ciudades el contrato de habitación evita conflictos.",
        },
      ],
    },
    localRisks: [
      {
        title: "Pisos en Zorrotzaurre y rehabilitación",
        body: "Zonas en transformación con pisos compartidos nuevos. El contrato debe incluir inventario y normas de convivencia desde el inicio.",
      },
      {
        title: "Gastos de calefacción en invierno",
        body: "En Bilbao el consumo invernal es alto. Debe constar si la calefacción está incluida o repartida.",
      },
      {
        title: "Varios inquilinos en piso pequeño",
        body: "En Deusto y Santutxu, pisos de 3 habitaciones necesitan cláusulas de cocina, baño y limpieza detalladas.",
      },
      {
        title: "Plantillas de otras comunidades",
        body: "Modelos de Madrid o Cataluña no contemplan particularidades del mercado vasco ni convivencia local.",
      },
    ],
    faqLocal: [
      {
        question: "¿Tramitáis contratos en Getxo o Barakaldo?",
        answer: "Sí. Adaptamos el contrato a la dirección real en Bilbao o Gran Bilbao.",
      },
      {
        question: "¿Puedo contratar para piso en Deusto?",
        answer: "Sí. Incluimos cláusulas de curso universitario, fianza y convivencia.",
      },
      {
        question: "¿Sirve si ya tengo un borrador?",
        answer: "Sí. Lo revisamos y adaptamos al régimen de habitación en piso compartido.",
      },
      {
        question: "¿Atendéis a propietarios e inquilinos?",
        answer: "Sí. Cualquier particular puede contratar el servicio online.",
      },
    ],
  },
};

export function getHabitacionLocalSeoContent(slug: string): HabitacionLocalSeoContent | undefined {
  return HABITACION_LOCAL_SEO_CONTENT[slug];
}
