"use client";

import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { useToast } from "./ToastProvider";

const SUBJECT_OPTIONS = [
  "Consulta de reserva",
  "Evento o salón",
  "Grupos corporativos",
  "Otro",
];

export function Contact() {
  const { showToast } = useToast();
  const [subject, setSubject] = useState(SUBJECT_OPTIONS[0]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showToast("Mensaje enviado (simulado). Gracias por escribir al Hotel Marcos Gamero.");
    e.currentTarget.reset();
    setSubject(SUBJECT_OPTIONS[0]);
  }

  return (
    <section id="contacto" className="bg-linen py-[clamp(56px,8vw,104px)]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="mb-12">
          <p className="font-display text-xs font-semibold tracking-[0.16em] uppercase text-terracotta">
            Contacto
          </p>
          <h2 className="text-[clamp(1.7rem,2.8vw,2.3rem)] font-normal mt-3">
            Escríbenos o llámanos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-12 bg-white border border-border rounded-md overflow-hidden">
          <div className="bg-carbon text-linen p-7 md:p-12 flex flex-col gap-5.5">
            <h3 className="text-linen text-[1.4rem] font-normal uppercase tracking-[0.03em]">
              Hotel Marcos Gamero
            </h3>
            <p className="text-[#c7c0b5] text-[14.5px]">
              Nuestro equipo de reservas responde todos los días entre 08:00
              y 21:00 horas.
            </p>
            <div className="flex gap-3 text-[14.5px]">
              <div>
                <b className="block text-[#d9a68f] text-[11px] tracking-[0.07em] uppercase mb-1">
                  Teléfono
                </b>
                +56 71 223 4500
              </div>
            </div>
            <div className="flex gap-3 text-[14.5px]">
              <div>
                <b className="block text-[#d9a68f] text-[11px] tracking-[0.07em] uppercase mb-1">
                  Email
                </b>
                reservas@hotelmarcosgamero.cl
              </div>
            </div>
            <div className="flex gap-3 text-[14.5px]">
              <div>
                <b className="block text-[#d9a68f] text-[11px] tracking-[0.07em] uppercase mb-1">
                  Dirección
                </b>
                1 Sur 1150, Talca, Chile
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-7 md:p-12 flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-[11px] font-semibold tracking-[0.09em] uppercase text-carbon-soft"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  required
                  className="text-sm px-3 py-2.5 border border-border rounded bg-linen text-carbon"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-[11px] font-semibold tracking-[0.09em] uppercase text-carbon-soft"
                >
                  Correo
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@correo.cl"
                  required
                  className="text-sm px-3 py-2.5 border border-border rounded bg-linen text-carbon"
                />
              </div>
            </div>

            <Dropdown
              label="Motivo"
              name="subject"
              options={SUBJECT_OPTIONS}
              value={subject}
              onChange={setSubject}
              labelClassName="text-carbon-soft"
            />

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-[11px] font-semibold tracking-[0.09em] uppercase text-carbon-soft"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Cuéntanos qué necesitas..."
                required
                className="text-sm px-3 py-2.5 border border-border rounded bg-linen text-carbon min-h-[90px] resize-y"
              />
            </div>

            <p className="text-xs text-carbon-soft mt-0.5">
              Este es un formulario de demostración; no se envían datos
              reales.
            </p>

            <button
              type="submit"
              className="self-start rounded bg-carbon text-linen font-semibold text-[13px] tracking-[0.04em] px-7 py-3.5 transition-all duration-300 hover:bg-terracotta"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
