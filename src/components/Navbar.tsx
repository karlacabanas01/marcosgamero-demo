"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";

const links = [
  { href: "#historia", label: "Historia" },
  { href: "#habitaciones", label: "Habitaciones" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-9 inset-x-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-linen/88 backdrop-blur-md border-border shadow-[0_8px_24px_-18px_rgba(26,26,26,0.25)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 py-[18px] flex items-center justify-between gap-6">
        <a
          href="#top"
          className={`flex items-center gap-2.5 no-underline transition-colors duration-300 ${
            scrolled ? "text-carbon" : "text-linen"
          }`}
        >
          <span
            className={`w-8 h-8 rounded-full border flex items-center justify-center font-display text-[13px] shrink-0 transition-colors duration-300 ${
              scrolled ? "border-carbon" : "border-linen"
            }`}
          >
            MG
          </span>
          <span className="font-display text-[15px] tracking-[0.1em] uppercase leading-tight">
            Marcos Gamero
            <small
              className={`block font-body text-[9.5px] tracking-[0.14em] uppercase font-semibold mt-[3px] transition-colors duration-300 ${
                scrolled ? "text-terracotta-deep" : "text-terracotta-light"
              }`}
            >
              Talca · Est. 1998
            </small>
          </span>
        </a>

        <nav className="hidden md:flex gap-[30px]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[11.5px] font-semibold tracking-[0.15em] uppercase border-b border-transparent pb-1 transition-colors duration-300 hover:border-terracotta ${
                scrolled
                  ? "text-carbon hover:text-terracotta-deep"
                  : "text-linen hover:text-terracotta-light"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <Button href="#reservar" variant="nav">
            Reservar
          </Button>
        </div>
      </div>
    </header>
  );
}
