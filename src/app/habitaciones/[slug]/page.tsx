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
import { RoomVariantProvider } from "@/components/RoomVariantContext";
import { RoomVariantSelector } from "@/components/RoomVariantSelector";
import { RoomVariantGallery } from "@/components/RoomVariantGallery";
import { rooms, getRoomBySlug } from "@/lib/rooms-data";
import { iconForAmenity } from "@/lib/amenity-icons";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return {};
  return {
    title: `${room.name} | Hotel Marcos Gamero`,
    description: room.desc,
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  return (
    <ToastProvider>
      <Navbar compact />
      <main className="pt-28 md:pt-36">
        <RoomVariantProvider variants={room.variants ?? []}>
          <section className="bg-bg-light pb-[clamp(64px,9vw,120px)]">
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
                <span className="text-dark">{room.name}</span>
              </nav>

              <div className="text-center mt-10">
                <p className="font-serif-italic text-[clamp(1.75rem,2.4vw,2rem)] text-botanical">
                  {room.tag}
                </p>
                {room.variants ? (
                  <RoomVariantSelector roomName={room.name} />
                ) : (
                  <>
                    <h1 className="font-sans text-[clamp(2.6rem,4vw,3rem)] font-normal uppercase tracking-[0.08em] mt-3">
                      {room.name}
                    </h1>
                    <div className="flex justify-center items-center text-[13px] text-text-muted tracking-wide mt-6 flex-wrap">
                      {room.meta.map((m, i) => (
                        <span key={m} className="flex items-center">
                          {i > 0 && <span className="w-px h-3.5 bg-border mx-5" />}
                          {m}
                        </span>
                      ))}
                    </div>
                    <p className="text-text-muted text-[15.5px] leading-[1.75] mt-7 max-w-[62ch] mx-auto">
                      {room.longDesc}
                    </p>
                  </>
                )}
              </div>
            </div>
          </section>

          {room.variants ? (
            <RoomVariantGallery room={room} />
          ) : (
            <>
              {room.slug === "single" ? (
                <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                  <RoomCarousel photos={room.gallery} tag={room.tag} />
                </div>
              ) : (
                <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="relative aspect-[4/3] overflow-hidden md:row-span-2">
                    <Image
                      src={room.gallery[0]?.src ?? room.image}
                      alt={room.gallery[0]?.alt ?? room.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      priority
                      className="object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-dark/80 text-botanical-soft font-sans text-[10.5px] tracking-[0.12em] uppercase px-3 py-1.5">
                      {room.tag}
                    </span>
                  </div>
                  {room.gallery.slice(1).map((photo) => (
                    <div
                      key={photo.src}
                      className="relative aspect-[4/3] overflow-hidden"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 768px) 25vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="bg-bg-light text-dark py-[clamp(56px,8vw,96px)] border-y border-border">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
                  <p className="font-serif-italic text-[clamp(1.5rem,2vw,1.75rem)] text-botanical">
                    En detalle
                  </p>
                  <h2 className="font-sans text-[clamp(1.8rem,3vw,2.3rem)] font-normal uppercase tracking-[0.08em] mt-2">
                    Esta habitación incluye
                  </h2>
                  <ul className="flex flex-wrap justify-center gap-x-12 gap-y-10 mt-12 list-none p-0">
                    {room.amenities.map((a) => {
                      const Icon = iconForAmenity(a);
                      return (
                        <li
                          key={a}
                          className="flex flex-col items-center gap-3 w-[140px]"
                        >
                          <Icon className="w-7 h-7 text-botanical" strokeWidth={1.5} />
                          <span className="font-sans text-[13px] leading-[1.4] text-dark">
                            {a}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </>
          )}
        </RoomVariantProvider>

        {!room.variants && (
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-[clamp(64px,9vw,120px)]">
            <div className="bg-bg-light p-7 md:p-9">
              <p className="font-sans text-[11px] tracking-[0.06em] uppercase text-text-muted text-center">
                Tarifa
              </p>
              <div className="flex items-baseline justify-center gap-2 mt-2">
                <b className="font-serif text-[32px] font-medium text-dark">
                  {room.price}
                </b>
                <span className="text-sm text-text-muted">/ noche</span>
              </div>

              <Button
                href="/#reservar"
                variant="cta"
                className="w-full justify-center mt-7 max-w-[360px] mx-auto"
              >
                Consultar disponibilidad
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </ToastProvider>
  );
}
