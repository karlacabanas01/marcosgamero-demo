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
    <footer className="bg-botanical text-[#e4ded2]">
      <div className="border-b border-botanical-soft/22 py-11">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex justify-between items-center gap-8 flex-wrap">
          <div>
            <h3 className="text-bg-light text-[1.3rem] font-normal">
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
              className="text-[13.5px] px-4 py-3 border border-bg-light/25 rounded-[2px] bg-bg-light/6 text-bg-light placeholder:text-[#8fa199] min-w-0 flex-1 md:min-w-[240px] focus:outline focus:outline-blush-deep focus:outline-offset-1"
            />
            <button
              type="submit"
              className="rounded-[2px] bg-botanical-soft text-dark px-5 py-2.5 text-[11.5px] font-semibold tracking-[0.1em] transition-all duration-300 hover:bg-bg-light"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </div>

      <div className="py-8 md:py-[52px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-2 md:gap-8">
          <div className="pb-6 md:pb-0">
            <div className="text-bg-light font-serif text-base tracking-[0.1em] uppercase">
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
                  className="w-8 h-8 rounded-full border border-bg-light/22 flex items-center justify-center text-[13px] text-[#e4ded2] transition-colors hover:border-botanical-soft hover:text-botanical-soft"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn
            title="Habitaciones"
            links={[
              { label: "Habitación Single", href: "/habitaciones/single" },
              { label: "Habitación Familiar", href: "/habitaciones/familiares" },
              { label: "Habitación Matrimonial", href: "/habitaciones/matrimoniales" },
              { label: "Suite Novios", href: "/habitaciones/novios" },
            ]}
          />

          <FooterColumn
            title="Gastronomía"
            links={[
              { label: "El Fogón de la Abuela", href: "#servicios" },
              { label: "Wellness (Próximamente)", href: "#wellness" },
              { label: "Galería", href: "#galeria" },
              { label: "Nuestra historia", href: "#historia" },
            ]}
          />

          <details className="footer-accordion group border-t border-bg-light/10 md:border-0">
            <summary className="flex items-center justify-between cursor-pointer py-4 md:py-0">
              <h5 className="font-sans text-[10.5px] tracking-[0.14em] uppercase text-botanical-soft font-semibold relative pb-2.5 md:mb-4 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[22px] after:h-px after:bg-botanical-soft after:opacity-60">
                Talca / Maule
              </h5>
              <span className="footer-accordion-icon text-bg-light/60 text-[18px] leading-none transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <ul className="list-none m-0 p-0 pb-4 md:pb-0 flex flex-col gap-[11px]">
              <li>
                <a href="/#ubicacion" className="text-[#c3ccc6] text-[13px] no-underline transition-colors hover:text-bg-light">
                  Cómo llegar
                </a>
              </li>
              <li>
                <a href="/#ubicacion" className="text-[#c3ccc6] text-[13px] no-underline transition-colors hover:text-bg-light">
                  Ruta del Vino del Maule
                </a>
              </li>
              <li>
                <a href="/#contacto" className="text-[#c3ccc6] text-[13px] no-underline transition-colors hover:text-bg-light">
                  Contacto
                </a>
              </li>
              <li>
                <span className="text-[#c3ccc6] text-[13px] cursor-default">
                  Políticas del hotel
                </span>
              </li>
            </ul>
          </details>
        </div>
      </div>

      <div className="border-t border-bg-light/12 py-5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex justify-between text-[11.5px] text-[#8fa199] flex-wrap gap-2.5 tracking-wide">
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
    <details className="footer-accordion group border-t border-bg-light/10 md:border-0">
      <summary className="flex items-center justify-between cursor-pointer py-4 md:py-0">
        <h5 className="font-sans text-[10.5px] tracking-[0.14em] uppercase text-botanical-soft font-semibold relative pb-2.5 md:mb-4 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[22px] after:h-px after:bg-botanical-soft after:opacity-60">
          {title}
        </h5>
        <span className="footer-accordion-icon text-bg-light/60 text-[18px] leading-none transition-transform duration-200 group-open:rotate-45">
          +
        </span>
      </summary>
      <ul className="list-none m-0 p-0 pb-4 md:pb-0 flex flex-col gap-[11px]">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[#c3ccc6] text-[13px] no-underline transition-colors hover:text-bg-light"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
