import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToastProvider } from "@/components/ToastProvider";
import { Button } from "@/components/Button";
import { BookingBar } from "@/components/BookingBar";
import { RoomCarousel } from "@/components/RoomCarousel";
import {
  getRoomUnit,
  getRoomUnits,
  roomUnitHref,
  roomUnits,
} from "@/lib/rooms-data";
import { iconForAmenity } from "@/lib/amenity-icons";

type Params = Promise<{ slug: string; unidad: string }>;

export function generateStaticParams() {
  return roomUnits.map((unit) => ({
    slug: unit.category.slug,
    unidad: unit.slug,
  }));
}

export async function generateMetadata({
  params,
}: Readonly<{ params: Params }>): Promise<Metadata> {
  const { slug, unidad } = await params;
  const unit = getRoomUnit(slug, unidad);
  if (!unit) return {};
  return {
    title: `${unit.name} | Hotel Marcos Gamero`,
    description: unit.desc,
  };
}

export default async function RoomUnitPage({
  params,
}: Readonly<{ params: Params }>) {
  const { slug, unidad } = await params;
  const unit = getRoomUnit(slug, unidad);
  if (!unit) notFound();

  const room = unit.category;
  // Bed setup and capacity lead the list, followed by the room's amenities.
  // A variant with its own amenity list already itemizes its beds, so skip the summary line.
  const hasOwnAmenities = unit.amenities !== room.amenities;
  const included = [
    ...new Set(
      [
        hasOwnAmenities ? undefined : unit.bedType,
        unit.capacity && `Capacidad: ${unit.capacity}`,
        ...unit.amenities,
      ].filter(
        (item): item is string => Boolean(item),
      ),
    ),
  ];
  const siblings = getRoomUnits(room).filter((u) => u.slug !== unit.slug);

  return (
    <ToastProvider>
      <Navbar compact />
      <main className="pt-28 md:pt-36">
        <section className="bg-bg-light pb-[clamp(48px,7vw,96px)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <BookingBar />

            <nav className="flex items-center gap-2 text-[13px] text-text-muted flex-wrap mt-8">
              <Link href="/" className="hover:text-dark transition-colors no-underline">
                Inicio
              </Link>
              <span>›</span>
              <Link href="/#habitaciones" className="hover:text-dark transition-colors no-underline">
                Habitaciones
              </Link>
              <span>›</span>
              <Link
                href={`/habitaciones/${room.slug}`}
                className="hover:text-dark transition-colors no-underline"
              >
                {room.name}
              </Link>
              <span>›</span>
              <span className="text-dark">{unit.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 mt-10 items-start">
              <div>
                <p className="font-serif-italic text-[clamp(1.75rem,2.4vw,2rem)] text-botanical">
                  {room.tag}
                </p>
                <h1 className="font-sans text-[clamp(2.4rem,4vw,3rem)] font-normal uppercase tracking-[0.08em] mt-3">
                  {unit.name}
                </h1>
                <p className="font-sans text-[14px] text-text-muted tracking-wide mt-4">
                  {unit.bedType}
                  {unit.capacity ? ` · ${unit.capacity}` : ""}
                </p>
                <p className="text-text-muted text-[15.5px] leading-[1.75] mt-6 max-w-[62ch]">
                  {unit.longDesc}
                </p>
              </div>

              <aside className="bg-bg-warm border border-border p-6 text-center lg:sticky lg:top-32">
                <p className="font-sans text-[11px] tracking-[0.06em] uppercase text-text-muted">
                  Tarifa
                </p>
                <div className="flex items-baseline justify-center gap-1.5 mt-2">
                  <b className="font-serif text-[32px] font-medium text-dark">
                    {unit.price}
                  </b>
                  <span className="text-sm text-text-muted">/ noche</span>
                </div>
                <Button href="/#reservar" variant="blush" className="w-full mt-6">
                  Consultar disponibilidad
                </Button>
              </aside>
            </div>
          </div>
        </section>

        {/* Todo lo que incluye */}
        <section className="bg-bg-light text-dark py-[clamp(56px,8vw,96px)] border-y border-border">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
            <p className="font-serif-italic text-[clamp(1.5rem,2vw,1.75rem)] text-botanical">
              En detalle
            </p>
            <h2 className="font-sans text-[clamp(1.8rem,3vw,2.3rem)] font-normal uppercase tracking-[0.08em] mt-2">
              Esta habitación incluye
            </h2>
            <ul className="flex flex-wrap justify-center gap-x-12 gap-y-10 mt-12 list-none p-0">
              {included.map((item) => {
                const Icon = iconForAmenity(item);
                return (
                  <li key={item} className="flex flex-col items-center gap-3 w-[140px]">
                    <Icon className="w-7 h-7 text-botanical" strokeWidth={1.5} />
                    <span className="font-sans text-[13px] leading-[1.4] text-dark">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Fotos */}
        <section className="bg-bg-light py-[clamp(48px,7vw,96px)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            {room.gallery.length > 2 ? (
              <RoomCarousel photos={room.gallery} tag={room.tag} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {room.gallery.map((photo, i) => (
                  <div key={photo.src} className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      priority={i === 0}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Otras habitaciones de la misma categoría */}
        {siblings.length > 0 && (
          <section className="bg-bg-warm py-[clamp(56px,8vw,96px)]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <h2 className="font-sans text-[clamp(1.5rem,2.4vw,1.9rem)] font-normal uppercase tracking-[0.08em] text-center">
                Otras opciones en {room.filterLabel}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 list-none p-0">
                {siblings.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={roomUnitHref(s)}
                      className="flex items-center justify-between gap-4 bg-bg-light border border-border hover:border-dark transition-colors px-5 py-4 no-underline text-dark h-full"
                    >
                      <span>
                        <span className="block font-serif text-[19px]">{s.name}</span>
                        <span className="block text-[12.5px] text-text-muted mt-1">
                          {s.bedType}
                        </span>
                      </span>
                      <span className="font-serif text-[17px] whitespace-nowrap">
                        {s.price}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </ToastProvider>
  );
}
