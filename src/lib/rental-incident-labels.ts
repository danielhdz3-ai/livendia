export const INCIDENT_STATUS_LABELS: Record<string, { label: string; color: string }> = {
  pending: { label: "Pendiente", color: "bg-yellow-100 text-yellow-800" },
  in_progress: { label: "En Proceso", color: "bg-blue-100 text-blue-800" },
  waiting_approval: { label: "Esperando Aprobación", color: "bg-purple-100 text-purple-800" },
  approved: { label: "Aprobada", color: "bg-green-100 text-green-800" },
  resolved: { label: "Resuelta", color: "bg-gray-100 text-gray-800" },
  rejected: { label: "Rechazada", color: "bg-red-100 text-red-800" },
};

export const INCIDENT_PRIORITY_LABELS: Record<string, { label: string; color: string }> = {
  low: { label: "Baja", color: "text-gray-600" },
  medium: { label: "Media", color: "text-blue-600" },
  high: { label: "Alta", color: "text-orange-600" },
  urgent: { label: "Urgente", color: "text-red-600" },
};

export const INCIDENT_OPEN_STATUSES = ["pending", "in_progress", "waiting_approval"] as const;
