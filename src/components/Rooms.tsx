import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { rooms } from "@/lib/rooms-data";

export function Rooms() {
  return (
    <section id="habitaciones" className="bg-bg-warm py-[clamp(64px,9vw,120px)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-14">
          <div>
            <p className="font-serif-italic text-[26px] text-botanical">
              Refugio
            </p>
            <h2 className="text-[clamp(2rem,3.4vw,2.8rem)] font-normal mt-3">
              Habitaciones y suites
            </h2>
            <p className="max-w-[44ch] text-text-muted text-[15px] mt-3">
              Cuatro tipos de habitación para cada forma de viajar, con
              interiores renovados para una estadía actual.
            </p>
          </div>
          <Button href="/#reservar" variant="ghost">
            Consultar tarifas
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <article key={room.door} className="flex flex-col group">
              <Link href={`/habitaciones/${room.slug}`} className="no-underline text-inherit">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-dark/80 text-botanical-soft font-sans text-[10.5px] tracking-[0.12em] uppercase px-3 py-1.5">
                    {room.tag}
                  </span>
                  <span className="absolute bottom-4 right-4 font-serif text-xl text-bg-light bg-dark/40 px-3 py-0.5">
                    {room.door}
                  </span>
                </div>
              </Link>
              <div className="pt-5 flex flex-col gap-2.5 flex-1">
                <Link href={`/habitaciones/${room.slug}`} className="no-underline text-inherit">
                  <h3 className="font-serif text-[22px] font-normal">
                    {room.name}
                  </h3>
                </Link>
                <div className="flex gap-3.5 text-[12px] text-text-muted tracking-wide">
                  {room.meta.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <p className="text-text-muted text-[14.5px] flex-1">
                  {room.desc}
                </p>
                <div className="flex justify-between items-center mt-2 pt-4.5 border-t border-border">
                  <div>
                    <b className="font-serif text-[20px] font-medium text-dark">
                      {room.price}
                    </b>
                    <span className="text-xs text-text-muted"> / noche</span>
                  </div>
                  <Button href={`/habitaciones/${room.slug}`} variant="ghost">
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
