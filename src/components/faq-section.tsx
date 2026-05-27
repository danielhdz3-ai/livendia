import type { FaqItem } from "@/lib/home-faq";

type FaqSectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  items: FaqItem[];
  className?: string;
};

export function FaqSection({
  id = "faq",
  title = "Preguntas frecuentes",
  subtitle = "Respuestas claras antes de contratar.",
  items,
  className = "",
}: FaqSectionProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id={id} className={className} aria-labelledby={`${id}-heading`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="text-center">
        <h2 id={`${id}-heading`} className="text-2xl font-bold text-[#1E293B] sm:text-3xl">
          {title}
        </h2>
        {subtitle ? <p className="mt-3 text-[#475569]">{subtitle}</p> : null}
      </div>
      <ul className="mt-8 space-y-3">
        {items.map((item) => (
          <li key={item.question}>
            <details className="group rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-100 open:ring-[#1A4FBF]/25">
              <summary className="cursor-pointer list-none px-5 py-4 text-base font-semibold text-[#1E293B] marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span
                    className="mt-0.5 shrink-0 text-[#1A4FBF] transition group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <div className="border-t border-slate-100 px-5 pb-4 pt-3 text-sm leading-relaxed text-[#475569]">
                {item.answer}
              </div>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
