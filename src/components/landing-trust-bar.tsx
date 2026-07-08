import { CheckCircle } from "lucide-react";

const DEFAULT_ITEMS = [
  "Sin compromiso previo",
  "Respuesta en 24 h",
  "Profesionales colegiados",
] as const;

type Props = {
  items?: readonly string[];
  className?: string;
};

export function LandingTrustBar({ items = DEFAULT_ITEMS, className = "" }: Props) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#475569] ${className}`}
    >
      {items.map((label) => (
        <span key={label} className="inline-flex items-center gap-2">
          <CheckCircle className="h-4 w-4 shrink-0 text-[#06B6D4]" aria-hidden />
          {label}
        </span>
      ))}
    </div>
  );
}
