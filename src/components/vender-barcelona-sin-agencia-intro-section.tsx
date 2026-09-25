type Props = {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
};

export function VenderBarcelonaSinAgenciaIntroSection({ eyebrow, title, paragraphs }: Props) {
  return (
    <section
      className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="vender-barcelona-intro-heading"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-sm font-bold uppercase tracking-wider text-[#1A4FBF]">{eyebrow}</p>
        <h2
          id="vender-barcelona-intro-heading"
          className="mt-3 text-center text-2xl font-extrabold text-[#1E293B] sm:text-4xl"
        >
          {title}
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-[#475569] sm:text-lg">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
