import Image from "next/image";
import { Button } from "./Button";

const rooms = [
  {
    tag: "Patio",
    door: "112",
    name: "Habitación Patio",
    meta: ["22 m²", "1 cama Queen", "Ala original"],
    desc: "Da al patio interior de la casona, con piso de madera restaurado y escritorio de trabajo.",
    price: "$58.000",
    image: "/hotel/40HMG.jpg",
    alt: "Habitación Patio con cama y cortinas junto a la ventana",
  },
  {
    tag: "Galería",
    door: "204",
    name: "Habitación Galería",
    meta: ["30 m²", "1 King o 2 Twin", "2º piso"],
    desc: "Junto al pasillo de fotografías familiares, con zona de estar y vigas a la vista.",
    price: "$79.000",
    image: "/hotel/50HMG.jpg",
    alt: "Balcón de la Habitación Galería con vista al centro de Talca",
  },
  {
    tag: "Suite",
    door: "301",
    name: "Suite Fundadores",
    meta: ["46 m²", "1 King", "3º piso · Esquina"],
    desc: "La antigua habitación principal de la casona: sala independiente, tina y mobiliario de época restaurado.",
    price: "$128.000",
    image: "/hotel/218HMG.jpg",
    alt: "Suite Fundadores con escalera de hierro forjado y chimenea de mármol",
  },
];

export function Rooms() {
  return (
    <section id="habitaciones" className="bg-linen-deep py-[clamp(56px,8vw,104px)]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-12">
          <div>
            <p className="font-display text-xs font-semibold tracking-[0.16em] uppercase text-terracotta">
              Alojamiento
            </p>
            <h2 className="text-[clamp(1.7rem,2.8vw,2.3rem)] font-normal uppercase tracking-[0.03em] mt-3">
              Habitaciones y suites
            </h2>
            <p className="max-w-[44ch] text-carbon-soft text-[15px] mt-3">
              Cada habitación conserva su puerta y número originales, con
              interiores renovados para una estadía actual.
            </p>
          </div>
          <Button href="#reservar" variant="ghost">
            Consultar tarifas
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {rooms.map((room) => (
            <article
              key={room.door}
              className="bg-white rounded-md overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-20px_rgba(26,26,26,0.28)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={room.image}
                  alt={room.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 90vw"
                  className="object-cover"
                />
                <span className="absolute top-3.5 left-3.5 bg-carbon/85 text-terracotta-light font-display text-[10.5px] tracking-[0.1em] uppercase px-3 py-1.5 rounded-sm">
                  {room.tag}
                </span>
                <span className="absolute bottom-3.5 right-3.5 font-display text-xl text-linen bg-carbon/45 px-3 py-0.5 rounded-sm">
                  {room.door}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-2.5 flex-1">
                <h3 className="text-[17px] font-medium uppercase tracking-[0.04em]">
                  {room.name}
                </h3>
                <div className="flex gap-3.5 text-xs text-carbon-soft tracking-wide">
                  {room.meta.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <p className="text-carbon-soft text-[14.5px] flex-1">
                  {room.desc}
                </p>
                <div className="flex justify-between items-center mt-2 pt-4.5 border-t border-border">
                  <div>
                    <b className="font-display text-[19px] font-semibold text-carbon">
                      {room.price}
                    </b>
                    <span className="text-xs text-carbon-soft"> / noche</span>
                  </div>
                  <Button href="#reservar" variant="ghost">
                    Elegir
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
