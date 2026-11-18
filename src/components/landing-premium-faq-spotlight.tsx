import Image from "next/image";
import type { FaqItem } from "@/lib/faq-types";
import { enrichFaqItems } from "@/lib/paa-enrich-faq";

type Props = {
  city: string;
  title: string;
  subtitle?: string;
  items: readonly FaqItem[];
  imageSrc?: string;
  imageAlt?: string;
  id?: string;
  /** Mostrar solo las N primeras (el resto puede ir en otra sección). */
  maxItems?: number;
};

export function LandingPremiumFaqSpotlight({
  city,
  title,
  subtitle,
  items,
  imageSrc = "/images/gestoria20.jpg",
  imageAlt,
  id = "faq-spotlight",
  maxItems = 6,
}: Props) {
  const resolvedItems = enrichFaqItems([...items]).slice(0, maxItems);
  if (resolvedItems.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: resolvedItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const alt = imageAlt ?? `Gestoría inmobiliaria y preguntas frecuentes en ${city}`;

  return (
    <section
      id={id}
      className="border-b border-slate-200 bg-gradient-to-b from-white via-[#F8FAFC] to-white px-4 py-16 sm:px-6 lg:py-20"
      aria-labelledby={`${id}-heading`}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-200/80 sm:aspect-[5/6] lg:min-h-[520px]">
              <Image
                src={imageSrc}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/85 via-[#0f172a]/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">Gestoría Livendia · {city}</p>
                <p className="mt-2 text-lg font-semibold leading-snug text-white sm:text-xl">
                  Respuestas claras antes de contratar — mismos precios publicados en toda España.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Preguntas frecuentes</p>
            <h2 id={`${id}-heading`} className="mt-2 text-2xl font-extrabold text-[#1E293B] sm:text-4xl">
              {title}
            </h2>
            {subtitle ? <p className="mt-4 text-lg leading-relaxed text-[#64748b]">{subtitle}</p> : null}

            <ul className="mt-8 space-y-3">
              {resolvedItems.map((item) => (
                <li key={item.question}>
                  <details className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md ring-1 ring-slate-100 open:border-[#1A4FBF]/30 open:shadow-lg open:ring-[#1A4FBF]/20">
                    <summary className="cursor-pointer list-none px-5 py-4 text-base font-semibold text-[#1E293B] marker:content-none [&::-webkit-details-marker]:hidden sm:px-6 sm:py-5">
                      <span className="flex items-start justify-between gap-4">
                        <span>{item.question}</span>
                        <span
                          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-lg font-bold text-[#1A4FBF] transition group-open:rotate-45 group-open:bg-[#1A4FBF] group-open:text-white"
                          aria-hidden
                        >
                          +
                        </span>
                      </span>
                    </summary>
                    <div className="border-t border-slate-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-[#475569] sm:px-6 sm:pb-6 sm:text-base">
                      {item.answer}
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}