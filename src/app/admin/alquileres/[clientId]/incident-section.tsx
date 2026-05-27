"use client";

import { useState } from "react";
import { AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { CreateIncidentForm } from "./create-incident-form";

interface IncidentSectionProps {
  propertyId: string;
  propertyAddress: string;
}

export function IncidentSection({ propertyId, propertyAddress }: IncidentSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 rounded-lg bg-orange-50 p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left"
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-orange-900">
          <AlertCircle className="h-4 w-4" />
          Reportar Incidencia
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-orange-700" />
        ) : (
          <ChevronDown className="h-5 w-5 text-orange-700" />
        )}
      </button>
      
      {isOpen && (
        <div className="mt-4">
          <CreateIncidentForm
            propertyId={propertyId}
            propertyAddress={propertyAddress}
            onSuccess={() => {
              setIsOpen(false);
              setTimeout(() => {
                window.location.reload();
              }, 1500);
            }}
          />
        </div>
      )}
    </div>
  );
}
