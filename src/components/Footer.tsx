"use client";

import { useToast } from "./ToastProvider";

export function Footer() {
  const { showToast } = useToast();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showToast("Suscripción simulada. Gracias por tu interés en el Hotel Marcos Gamero.");
    e.currentTarget.reset();
  }

  return (
    <footer className="bg-bottle text-[#e4ded2]">
      <div className="border-b border-[#d9a68f]/22 py-11">
        <div className="max-w-[1180px] mx-auto px-6 flex justify-between items-center gap-8 flex-wrap">
          <div>
            <h3 className="text-linen text-[1.3rem] font-normal uppercase tracking-[0.03em]">
              Recepción directa
            </h3>
            <p className="text-[#b9c4bc] text-[13.5px] mt-2 max-w-[40ch]">
              Escríbenos y una persona de nuestro equipo —no un sistema
              automático— te responde el mismo día.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex gap-2.5 flex-wrap w-full md:w-auto"
          >
            <label htmlFor="newsletterEmail" className="sr-only">
              Correo electrónico
            </label>
            <input
              type="email"
              id="newsletterEmail"
              name="newsletterEmail"
              placeholder="Tu correo electrónico"
              required
              className="text-[13.5px] px-4 py-3 border border-linen/25 rounded bg-linen/6 text-linen placeholder:text-[#8fa199] min-w-0 flex-1 md:min-w-[240px] focus:outline focus:outline-terracotta focus:outline-offset-1"
            />
            <button
              type="submit"
              className="rounded bg-terracotta text-linen px-5 py-2.5 text-[11.5px] font-semibold tracking-[0.1em] transition-all duration-300 hover:bg-terracotta-deep"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </div>

      <div className="py-[52px]">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-8">
          <div>
            <div className="text-linen font-display text-base tracking-[0.1em] uppercase">
              Marcos Gamero
            </div>
            <p className="text-[13px] text-[#a9b7ae] mt-3.5 max-w-[30ch]">
              Una casona familiar de Talca desde 1998, hoy convertida en
              hotel. Historia y diseño bajo el mismo techo.
            </p>
            <div className="flex gap-3.5 mt-2">
              {["IG", "FB", "WA"].map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-linen/22 flex items-center justify-center text-[13px] text-[#e4ded2] transition-colors hover:border-[#d9a68f] hover:text-[#d9a68f]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn
            title="Habitaciones"
            links={[
              { label: "Habitación Patio", href: "#habitaciones" },
              { label: "Habitación Galería", href: "#habitaciones" },
              { label: "Suite Fundadores", href: "#habitaciones" },
              { label: "Reservar ahora", href: "#reservar" },
            ]}
          />

          <FooterColumn
            title="Gastronomía"
            links={[
              { label: "El Fogón de la Abuela", href: "#servicios" },
              { label: "Spa & piscina", href: "#servicios" },
              { label: "Galería", href: "#galeria" },
              { label: "Nuestra historia", href: "#historia" },
            ]}
          />

          <div>
            <h5 className="font-display text-[10.5px] tracking-[0.14em] uppercase text-[#c9a06f] mb-4 font-semibold relative pb-2.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[22px] after:h-px after:bg-[#c9a06f] after:opacity-60">
              Talca / Maule
            </h5>
            <ul className="list-none m-0 p-0 flex flex-col gap-[11px]">
              <li>
                <a href="#ubicacion" className="text-[#c3ccc6] text-[13px] no-underline transition-colors hover:text-[#d9a68f]">
                  Cómo llegar
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="text-[#c3ccc6] text-[13px] no-underline transition-colors hover:text-[#d9a68f]">
                  Ruta del Vino del Maule
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-[#c3ccc6] text-[13px] no-underline transition-colors hover:text-[#d9a68f]">
                  Contacto
                </a>
              </li>
              <li>
                <span className="text-[#c3ccc6] text-[13px] cursor-default">
                  Políticas del hotel
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-linen/12 py-5">
        <div className="max-w-[1180px] mx-auto px-6 flex justify-between text-[11.5px] text-[#8fa199] flex-wrap gap-2.5 tracking-wide">
          <span>© 2026 Hotel Marcos Gamero, Talca. Sitio de demostración.</span>
          <div className="flex gap-5 flex-wrap">
            <span className="cursor-default">Términos</span>
            <span className="cursor-default">Privacidad</span>
            <span className="cursor-default">Políticas de cancelación</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h5 className="font-display text-[10.5px] tracking-[0.14em] uppercase text-[#c9a06f] mb-4 font-semibold relative pb-2.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[22px] after:h-px after:bg-[#c9a06f] after:opacity-60">
        {title}
      </h5>
      <ul className="list-none m-0 p-0 flex flex-col gap-[11px]">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[#c3ccc6] text-[13px] no-underline transition-colors hover:text-[#d9a68f]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
