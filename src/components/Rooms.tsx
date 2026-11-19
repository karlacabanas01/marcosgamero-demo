import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { RoomFilterCarousel } from "./RoomFilterCarousel";
import { rooms, roomUnits, roomUnitHref } from "@/lib/rooms-data";

export function Rooms() {
  return (
    <section
      id="habitaciones"
      className="bg-bg-warm py-[clamp(64px,9vw,120px)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center text-center mb-8">
          <div>
            <p className="font-serif-italic text-[clamp(1.75rem,2.4vw,2rem)] font-normal text-botanical">
              Comodidad
            </p>
            <h2 className="font-display! text-[clamp(2.6rem,4vw,3rem)] font-normal uppercase tracking-[0.5px] mt-3">
              Las habitaciones
            </h2>
            <p className="max-w-[52ch] mx-auto font-jost text-text-muted text-[18px] leading-[1.35] mt-1">
              Distintas en tamaño, en luz y en espíritu. Cada habitación tiene
              una personalidad propia, pensada para alguien en particular.
            </p>
          </div>
        </div>

        <RoomFilterCarousel
          tabs={rooms.map((room) => ({ id: room.slug, label: room.filterLabel }))}
          items={roomUnits.map((unit) => {
            const href = roomUnitHref(unit);
            const room = unit.category;
            return {
              key: `${room.slug}/${unit.slug}`,
              category: room.slug,
              card: (
                <article className="snap-start shrink-0 w-[82%] md:w-[58%] lg:w-[38%] xl:w-[28%] rounded-2xl overflow-hidden flex flex-col group border border-border hover:border-blush-deep transition-colors duration-300 bg-bg-light">
                  <Link href={href} className="no-underline text-inherit">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={room.image}
                        alt={`${unit.name}: ${room.alt}`}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 32vw, (min-width: 768px) 45vw, 80vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 bg-dark/80 text-blush-deep font-sans text-[10.5px] tracking-[0.12em] uppercase px-3 py-1.5">
                        {room.tag}
                      </span>
                    </div>
                  </Link>
                  <div className="p-5 flex flex-col gap-2.5 flex-1">
                    <Link href={href} className="no-underline text-inherit">
                      <h3 className="font-serif text-[22px] font-normal">
                        {unit.name}
                      </h3>
                    </Link>
                    <div className="flex flex-wrap gap-x-3.5 gap-y-1 text-[12px] text-text-muted tracking-wide">
                      {[unit.bedType, unit.capacity].filter(Boolean).map((m) => (
                        <span key={m}>{m}</span>
                      ))}
                    </div>
                    <p className="text-text-muted text-[14.5px] flex-1">
                      {unit.desc}
                    </p>
                    <div className="mt-2 pt-4.5 border-t border-border">
                      <b className="font-serif text-[20px] font-medium text-dark">
                        {unit.price}
                      </b>
                      <span className="text-xs text-text-muted"> / noche</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      <Button href={href} variant="ghost" className="px-4!">
                        Descubrir
                      </Button>
                      <Button href="/#reservar" variant="blush" className="px-4!">
                        Reservar
                      </Button>
                    </div>
                  </div>
                </article>
              ),
            };
          })}
        />
      </div>
    </section>
  );
}
