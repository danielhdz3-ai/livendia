import { Mail, MapPin, Phone } from "lucide-react";
import { OfficeMap } from "@/components/office-map";
import {
  BUSINESS_EMAIL,
  getBusinessAddressDisplayLine,
  getBusinessMapsExternalUrl,
} from "@/lib/business-nap";
import { getContactPhoneDisplay, getContactPhoneTelHref } from "@/lib/contact";

type OfficeContactBannerProps = {
  className?: string;
  heading?: string;
};

/** Banner blanco con mapa del despacho, dirección, teléfono y email. */
export function OfficeContactBanner({
  className = "",
  heading = "Despacho Livendia",
}: OfficeContactBannerProps) {
  const address = getBusinessAddressDisplayLine();
  const phoneDisplay = getContactPhoneDisplay();
  const phoneTel = getContactPhoneTelHref();
  const mapsUrl = getBusinessMapsExternalUrl();

  return (
    <section
      className={`bg-white px-4 py-10 sm:px-6 sm:py-12 ${className}`}
      aria-labelledby="office-contact-banner-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col justify-center">
          <h2
            id="office-contact-banner-heading"
            className="text-xl font-extrabold text-[#1E293B] sm:text-2xl"
          >
            {heading}
          </h2>
          <p className="mt-2 text-sm text-[#64748b] sm:text-base">
            Estamos en Les Corts, Barcelona. También puedes escribirnos o llamarnos en horario laboral.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-[#475569] sm:text-base">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden />
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#1A4FBF] hover:underline"
              >
                {address}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden />
              <a href={phoneTel} className="font-semibold text-[#1E293B] hover:text-[#1A4FBF]">
                {phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden />
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="font-medium text-[#1A4FBF] hover:underline"
              >
                {BUSINESS_EMAIL}
              </a>
            </li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-xl ring-1 ring-slate-200">
          <OfficeMap showCaption={false} minHeightClassName="min-h-[220px] sm:min-h-[260px]" />
        </div>
      </div>
    </section>
  );
}
