import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToastProvider } from "@/components/ToastProvider";
import { Button } from "@/components/Button";
import { rooms, getRoomBySlug } from "@/lib/rooms-data";

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
        <section className="bg-bg-light pb-[clamp(64px,9vw,120px)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <Link
              href="/#habitaciones"
              className="font-sans text-[13px] text-text-muted hover:text-dark transition-colors no-underline"
            >
              ← Todas las habitaciones
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
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

            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16 mt-14">
              <div>
                <p className="font-serif-italic text-[26px] text-botanical">
                  {room.tag}
                </p>
                <h1 className="text-[clamp(2rem,3.4vw,2.8rem)] font-normal mt-3">
                  {room.name}
                </h1>
                <div className="flex gap-3.5 text-[13px] text-text-muted tracking-wide mt-3">
                  {room.meta.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <p className="text-text-muted text-[15.5px] leading-[1.75] mt-6 max-w-[56ch]">
                  {room.longDesc}
                </p>

                <div className="mt-10">
                  <h2 className="font-serif text-[20px] font-normal">
                    Esta habitación incluye
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-4 list-none p-0">
                    {room.amenities.map((a) => (
                      <li
                        key={a}
                        className="flex items-center gap-2.5 text-[14px] text-dark"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-botanical shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-bg-warm p-7 md:p-9 h-fit">
                {room.variants ? (
                  <>
                    <h2 className="font-serif text-[20px] font-normal mb-5">
                      Variantes disponibles
                    </h2>
                    <div className="flex flex-col divide-y divide-border">
                      {room.variants.map((variant) => (
                        <div
                          key={variant.name}
                          className="py-4 first:pt-0 last:pb-0"
                        >
                          <p className="font-sans text-[13.5px] font-medium text-dark">
                            {variant.name}
                          </p>
                          <p className="font-sans text-[12.5px] text-text-muted mt-0.5">
                            {variant.bedType}
                          </p>
                          <div className="flex items-baseline justify-between mt-2">
                            <b className="font-serif text-[20px] font-medium text-dark">
                              {variant.price}
                            </b>
                            <span className="text-xs text-text-muted">
                              / noche
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <p className="font-sans text-[11px] tracking-[0.06em] uppercase text-text-muted">
                      Tarifa
                    </p>
                    <div className="flex items-baseline gap-2 mt-2">
                      <b className="font-serif text-[32px] font-medium text-dark">
                        {room.price}
                      </b>
                      <span className="text-sm text-text-muted">/ noche</span>
                    </div>
                  </>
                )}

                <Button
                  href="/#reservar"
                  variant="cta"
                  className="w-full justify-center mt-7"
                >
                  Consultar disponibilidad
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ToastProvider>
  );
}
