import type { LucideIcon } from "lucide-react";
import { FileText, MapPin, MessageCircle, Users, Wrench } from "lucide-react";

export type AdminAlquilerHowItWorksStep = {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
};

/** Cinco pasos — administración LAU (online + presencial Barcelona/AMB). */
export function buildAdministracionAlquilerHowItWorksSteps(zoneLabel: string): AdminAlquilerHowItWorksStep[] {
  return [
    {
      icon: Users,
      step: "1",
      title: "Nos convertimos en tu intermediario",
      description: `Desde el primer día en ${zoneLabel}, Livendia es el punto de contacto entre tú y tu inquilino. Cero mensajes directos a tu móvil.`,
    },
    {
      icon: MessageCircle,
      step: "2",
      title: "Gestionamos todas las comunicaciones",
      description:
        "Consultas, averías y reclamaciones las atiende tu gestor con tiempos de respuesta publicados.",
    },
    {
      icon: Wrench,
      step: "3",
      title: "Coordinamos reparaciones e impagos",
      description:
        "Industriales de confianza, protocolo de seguimiento ante impago desde el día 3 y mediación antes de escalar.",
    },
    {
      icon: FileText,
      step: "4",
      title: "Te informamos solo de lo crítico",
      description: `Rentas con seguimiento al día, decisiones que requieren tu firma o novedades legales en ${zoneLabel}.`,
    },
    {
      icon: MapPin,
      step: "5",
      title: "Gestor presencial cuando la operación lo exige",
      description: `Check-in, inventario, visitas con industrial o mediación in situ en ${zoneLabel}: incluido en la misma cuota mensual, sin extra por desplazamiento en el AMB.`,
    },
  ];
}
