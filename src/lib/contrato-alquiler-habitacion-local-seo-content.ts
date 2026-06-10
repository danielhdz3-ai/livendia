export type HabitacionLocalSeoContent = {
  heroSubtitle: string;
  localMarketIntro: string;
  zonesParagraph: string;
  zoneGroups: readonly { district: string; areas: string }[];
  localRisks: readonly { title: string; body: string }[];
  faqLocal: readonly { question: string; answer: string }[];
};

export const HABITACION_LOCAL_SEO_CONTENT: Record<string, HabitacionLocalSeoContent> = {
  barcelona: {
    heroSubtitle:
      "¿Alquilas o alquilas una habitación en Barcelona? Un contrato verbal o un PDF de piso entero no cubre convivencia, gastos compartidos ni preaviso. Por 120 € un gestor Livendia redacta un contrato específico para habitación en piso compartido, con normas claras para propietario e inquilino, en 48-72 h laborables.",
    localMarketIntro:
      "Barcelona concentra uno de los mercados de habitaciones más dinámicos de España: estudiantes en zona universitaria, jóvenes profesionales en el 22@ o Poblenou, expatriados en Eixample y propietarios que comparten piso en Gràcia o Sants. La demanda es alta y la rotación también — por eso firmar sin contrato adaptado es el error más caro.",
    zonesParagraph:
      "Redactamos contratos para habitaciones en Barcelona ciudad y área metropolitana inmediata. El inmueble puede estar en cualquiera de estos distritos y barrios:",
    zoneGroups: [
      {
        district: "Ciutat Vella",
        areas: "El Raval, Barri Gòtic, El Born, La Barceloneta",
      },
      {
        district: "Eixample",
        areas: "Esquerra de l'Eixample, Dreta de l'Eixample, Sagrada Família, Sant Antoni",
      },
      {
        district: "Gràcia",
        areas: "Vila de Gràcia, Camp d'en Grassot, La Salut",
      },
      {
        district: "Sants-Montjuïc",
        areas: "Sants, Hostafrancs, Poble-sec, Montjuïc",
      },
      {
        district: "Les Corts",
        areas: "Les Corts, Pedralbes, Zona Universitària",
      },
      {
        district: "Sarrià-Sant Gervasi",
        areas: "Sarrià, Sant Gervasi, Les Tres Torres, Vallvidrera",
      },
      {
        district: "Horta-Guinardó",
        areas: "El Carmel, La Teixonera, Horta, Guinardó",
      },
      {
        district: "Nou Barris",
        areas: "Vilapicina, Porta, Roquetes, Trinitat Vella",
      },
      {
        district: "Sant Andreu",
        areas: "Sant Andreu de Palomar, La Sagrera, Navas",
      },
      {
        district: "Sant Martí",
        areas: "Poblenou, El Clot, La Verneda, Diagonal Mar, Provençals",
      },
      {
        district: "Área metropolitana",
        areas: "L'Hospitalet, Badalona, Cornellà, Esplugues, Sant Adrià",
      },
    ],
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
        body: "Un contrato de vivienda completa no protege al arrendador que sigue viviendo en el piso ni al inquilino que solo alquila una habitación. En Barcelona los juzgados miran lo pactado por escrito.",
      },
    ],
    faqLocal: [
      {
        question: "¿Puedo usar el mismo contrato LAU que para un piso entero en Barcelona?",
        answer:
          "No es recomendable. El alquiler de habitación en vivienda compartida tiene régimen y cláusulas distintas: convivencia, zonas comunes, gastos y preaviso. Este servicio redacta un contrato específico para habitación, no una plantilla de piso completo.",
      },
      {
        question: "¿El contrato vale si el piso está en L'Hospitalet o Badalona?",
        answer:
          "Sí. Contratas el servicio online y el gestor adapta el contrato a la dirección real del inmueble, ya esté en Barcelona capital o en municipios del área metropolitana.",
      },
      {
        question: "¿Qué pasa si alquilo dos habitaciones del mismo piso en Gràcia?",
        answer:
          "Cada habitación puede llevar contrato individual o un documento marco con anexos por habitación. El gestor te orienta según convivan varios inquilinos y cómo repartís gastos.",
      },
      {
        question: "¿Es obligatorio un contrato por escrito para alquilar una habitación en Barcelona?",
        answer:
          "La ley no exige forma escrita en todos los casos, pero sin contrato no tienes prueba de renta, fianza, preaviso ni normas de convivencia. En un mercado con tanta rotación como Barcelona, firmar sin documento profesional es asumir un riesgo evitable.",
      },
    ],
  },
};

export function getHabitacionLocalSeoContent(slug: string): HabitacionLocalSeoContent | undefined {
  return HABITACION_LOCAL_SEO_CONTENT[slug];
}
