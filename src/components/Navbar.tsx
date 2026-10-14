import Image from "next/image";
import { Button } from "./Button";

const links = [
  { href: "/#habitaciones", label: "Habitaciones" },
  { href: "/aldobar", label: "Aldo'Bar" },
  { href: "/#cowork", label: "CoWork" },
  { href: "/#wellness", label: "Wellness" },
  { href: "/#familiar", label: "Familiar" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    path: "M14 8.5h-2V7c0-.55.45-1 1-1h1V3.5h-2c-2.21 0-4 1.79-4 4v1H6v3h2V20h3v-8.5h2.1l.4-3z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/hotel_marcosgamero/",
    path: "M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6ZM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6.2-9.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 3.8c2.5 0 2.8 0 3.8.05 1 .05 1.6.2 2 .36.5.2.85.43 1.22.8.37.37.6.72.8 1.22.16.4.31 1 .36 2 .05 1 .05 1.3.05 3.8s0 2.8-.05 3.8c-.05 1-.2 1.6-.36 2a3.3 3.3 0 0 1-.8 1.22c-.37.37-.72.6-1.22.8-.4.16-1 .31-2 .36-1 .05-1.3.05-3.8.05s-2.8 0-3.8-.05c-1-.05-1.6-.2-2-.36a3.3 3.3 0 0 1-1.22-.8 3.3 3.3 0 0 1-.8-1.22c-.16-.4-.31-1-.36-2-.05-1-.05-1.3-.05-3.8s0-2.8.05-3.8c.05-1 .2-1.6.36-2 .2-.5.43-.85.8-1.22.37-.37.72-.6 1.22-.8.4-.16 1-.31 2-.36C9.2 3.8 9.5 3.8 12 3.8Z",
  },
];

export function Navbar({ compact = false }: { compact?: boolean }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-dark/25">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between gap-6">
        <a
          href="/#top"
          className="flex items-center gap-2.5 no-underline text-bg-light"
        >
          <span className="w-9 h-9 rounded-full bg-bg-light flex items-center justify-center overflow-hidden shrink-0">
            <Image
              src="/brand/hotel-icon.png"
              alt=""
              width={280}
              height={260}
              className="w-[26px] h-auto"
            />
          </span>
          <span className="font-serif text-[19px] tracking-[0.15em] uppercase">
            Marcos Gamero
          </span>
        </a>

        {!compact && (
          <nav className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-[13px] font-normal tracking-[0.04em] text-bg-light/90 transition-colors duration-300 hover:text-bg-light"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-5">
          <Button href="/#reservar" variant="nav">
            Reservar
          </Button>
          {!compact && (
            <div className="hidden sm:flex items-center gap-2.5">
              {socials.map((s) => {
                const isExternal = s.href !== "#";
                const baseClassName =
                  "w-8 h-8 rounded-full border border-bg-light/40 flex items-center justify-center text-bg-light transition-colors duration-300 hover:border-bg-light hover:text-botanical-soft";
                const icon = (
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                    <path d={s.path} />
                  </svg>
                );

                if (isExternal) {
                  return (
                    <a
                      key={s.label}
                      aria-label={s.label}
                      className={baseClassName}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icon}
                    </a>
                  );
                }

                return (
                  <span
                    key={s.label}
                    aria-label={s.label}
                    aria-disabled="true"
                    className={`${baseClassName} cursor-default`}
                  >
                    {icon}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
