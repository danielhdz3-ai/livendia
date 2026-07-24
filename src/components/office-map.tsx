import {
  getBusinessAddressDisplayLine,
  getBusinessMapsEmbedUrl,
  getBusinessMapsExternalUrl,
} from "@/lib/business-nap";

type OfficeMapProps = {
  className?: string;
  /** Altura mínima del contenedor. */
  minHeightClassName?: string;
  title?: string;
};

/** Mapa embebido del despacho Livendia (sin API key). */
export function OfficeMap({
  className = "",
  minHeightClassName = "min-h-[240px]",
  title = "Mapa del despacho Livendia en Barcelona",
}: OfficeMapProps) {
  const address = getBusinessAddressDisplayLine();
  const embedUrl = getBusinessMapsEmbedUrl();
  const externalUrl = getBusinessMapsExternalUrl();

  return (
    <div className={`relative overflow-hidden bg-[#0f274f] ${minHeightClassName} ${className}`}>
      <iframe
        title={title}
        src={embedUrl}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 left-3 right-3 z-10 truncate rounded-lg bg-white/95 px-3 py-2 text-xs font-semibold text-[#1E3A8A] shadow-md backdrop-blur-sm transition hover:bg-white sm:right-auto sm:max-w-[min(100%,28rem)]"
      >
        {address} · Abrir en Google Maps
      </a>
    </div>
  );
}
