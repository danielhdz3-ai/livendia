import Image from "next/image";
import Link from "next/link";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600000000";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#1A4FBF] text-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="text-lg font-bold tracking-tight text-white hover:text-cyan-200">
            Livendia
          </Link>
          <nav className="hidden gap-8 text-sm font-medium sm:flex">
            <Link href="/servicios" className="hover:text-cyan-300 transition-colors">
              Servicios
            </Link>
            <Link href="/precios" className="hover:text-cyan-300 transition-colors">
              Precios
            </Link>
            <a href="#equipo" className="hover:text-cyan-300 transition-colors">
              Equipo
            </a>
            <a href="#confianza" className="hover:text-cyan-300 transition-colors">
              Confianza
            </a>
            <Link href="/login" className="hover:text-cyan-300 transition-colors">
              Entrar
            </Link>
          </nav>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#06B6D4] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#67E8F9] hover:text-[#1e293b]"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#1A4FBF] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
            <div className="relative z-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#67E8F9]">
                Gestoría inmobiliaria digital
              </p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Tu alquiler y tus contratos, bajo control profesional
              </h1>
              <p className="mt-6 max-w-xl text-lg text-blue-100">
                Administración de alquiler, contratos LAU, arras, reservas y packs a la carta.
                Pagas online y seguimos el expediente contigo desde tu panel.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#servicios"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A4FBF] shadow-lg transition hover:bg-[#F1F5F9]"
                >
                  Ver servicios
                </Link>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#06B6D4] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#06B6D4]"
                >
                  Hablar por WhatsApp
                </a>
              </div>
            </div>
            <div className="relative min-h-[280px] md:min-h-[420px]">
              <Image
                src="/images/gestoria.jpg"
                alt="Equipo de Livendia en la gestoría"
                fill
                priority
                className="rounded-2xl object-cover shadow-2xl ring-1 ring-white/20"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section id="como-funciona" className="border-b border-slate-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center text-3xl font-bold text-[#1E293B]">Cómo funciona</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[#475569]">
              Tres pasos para dejar la parte legal y administrativa en manos expertas.
            </p>
            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { step: "1", title: "Eliges", body: "Servicio o pack según tu operación: alquiler, compraventa o administración." },
                { step: "2", title: "Pagas", body: "Checkout seguro. Recibes acceso a tu área privada y próximos pasos claros." },
                { step: "3", title: "Gestionamos", body: "Subes documentación; nosotros redactamos, revisamos y te acompañamos." },
              ].map((item) => (
                <li
                  key={item.step}
                  className="rounded-2xl border border-slate-200 bg-[#F1F5F9] p-8 shadow-sm"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A4FBF] text-sm font-bold text-white">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-[#1E293B]">{item.title}</h3>
                  <p className="mt-2 text-[#475569]">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="servicios" className="bg-[#F1F5F9] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-[#1E293B]">Contratos y documentación</h2>
            <p className="mt-3 max-w-2xl text-[#475569]">
              Imágenes reales de nuestro trabajo con documentación y firma de contratos.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { src: "/images/contratos.jpg", alt: "Revisión de contratos inmobiliarios" },
                { src: "/images/contratos1.jpg", alt: "Formalización de documentación" },
                { src: "/images/contratos2.jpg", alt: "Contratos y tramitación" },
              ].map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition duration-300 hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
                <Image
                  src="/images/gestoria1.jpg"
                  alt="Atención personalizada en gestoría"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1E293B]">Gestoría cercana, proceso digital</h2>
                <p className="mt-4 text-[#475569]">
                  Combinamos trato directo en despacho con herramientas online para que no pierdas
                  el hilo de tu expediente: estados del pedido, mensajes y documentos en un solo lugar.
                </p>
                <ul className="mt-6 space-y-3 text-[#475569]">
                  <li className="flex gap-2">
                    <span className="mt-1 font-bold text-[#06B6D4]">✓</span>
                    Redacción y revisión de contratos al día de la normativa
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 font-bold text-[#06B6D4]">✓</span>
                    Compraventa: reservas, arras y acompañamiento hasta notaría
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 font-bold text-[#06B6D4]">✓</span>
                    Alquiler: contratos LAU, habitación, local y packs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="equipo" className="bg-[#1A4FBF] py-16 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold">Nuestro equipo</h2>
            <p className="mt-3 max-w-2xl text-blue-100">
              Profesionales que conocen el ritmo real del mercado inmobiliario.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { src: "/images/equipo1.jpg", alt: "Miembro del equipo Livendia" },
                { src: "/images/equipo2.jpg", alt: "Miembro del equipo Livendia" },
                { src: "/images/equipo3.jpg", alt: "Miembro del equipo Livendia" },
                { src: "/images/equipo4.jpg", alt: "Miembro del equipo Livendia" },
              ].map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white/10 shadow-lg ring-1 ring-white/20"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F1F5F9] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-[#1E293B]">En el día a día del despacho</h2>
            <p className="mt-3 text-[#475569]">Momentos de trabajo y encuentros con clientes.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "/images/gestoria2.jpg",
                "/images/gestoria3.jpg",
                "/images/gestoria4.jpg",
                "/images/gestoria5.jpg",
              ].map((src) => (
                <div
                  key={src}
                  className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200"
                >
                  <Image
                    src={src}
                    alt="Vida en la gestoría Livendia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="confianza" className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
              <Image
                src="/images/amigos.jpg"
                alt="Clientes y equipo en un encuentro"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1E293B]">Confianza que se construye</h2>
              <p className="mt-4 text-[#475569]">
                Nos importa el trato claro y los plazos. Si tienes dudas sobre qué servicio encaja con
                tu operación, escríbenos: te orientamos antes de contratar.
              </p>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#06B6D4]"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-slate-200 bg-[#F1F5F9] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="font-bold text-[#1E293B]">Livendia</p>
            <p className="mt-1 text-sm text-[#475569]">Gestoría inmobiliaria digital · livendia.com</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[#475569]">
            <a href={waHref} className="font-medium text-[#1A4FBF] hover:text-[#06B6D4]">
              WhatsApp
            </a>
            <span aria-hidden>·</span>
            <span>Aviso legal (próximamente)</span>
          </div>
        </div>
      </footer>

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
        aria-label="Abrir WhatsApp"
      >
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
