import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BedDouble, Puzzle, Trees, type LucideIcon } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToastProvider } from "@/components/ToastProvider";
import { Button } from "@/components/Button";
import { ImageSlot } from "@/components/ImageSlot";
import { getRoomBySlug } from "@/lib/rooms-data";

export const metadata: Metadata = {
  title: "En familia | Hotel Marcos Gamero",
  description:
    "Espacios pensados para viajar con niños en el Hotel Marcos Gamero, Talca: juegos en la pérgola, habitaciones familiares y más.",
};

const familyRoom = getRoomBySlug("familiares");

// To add a real photo, set `image` to its path under /public (e.g. "/familiar/pergola.jpg").
const hero = {
  image: undefined as string | undefined,
  alt: "Familia disfrutando de los espacios comunes del hotel",
  label: "Foto principal: niños jugando en la pérgola o familia en el patio",
};

type Space = {
  id: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  text: string;
  badge?: string;
  image?: string;
  alt: string;
  label: string;
  link?: { href: string; text: string };
};

const spaces: Space[] = [
  {
    id: "pergola",
    icon: Trees,
    eyebrow: "Al aire libre",
    title: "Juegos en la pérgola",
    text: "Bajo la pérgola hay un rincón pensado para que los niños jueguen al aire libre, mientras los grandes conversan cerca, a la sombra.",
    alt: "Zona de juegos para niños bajo la pérgola del hotel",
    label: "Rincón de juegos para niños en la pérgola",
  },
  {
    id: "habitaciones",
    icon: BedDouble,
    eyebrow: "Para descansar juntos",
    title: "Habitaciones familiares",
    text:
      familyRoom?.longDesc ??
      "Habitaciones amplias para familias, con espacio para que todos descansen juntos.",
    image: familyRoom?.image,
    alt: familyRoom?.alt ?? "Habitación familiar del hotel",
    label: "Habitación familiar con camas para los niños",
    link: { href: "/habitaciones/familiares", text: "Ver habitaciones familiares" },
  },
  {
    id: "juegos",
    icon: Puzzle,
    eyebrow: "Para los más chicos",
    title: "Zona de juegos",
    badge: "Próximamente",
    text: "Estamos preparando un espacio de juegos dentro del hotel, para que los días de lluvia o las tardes tranquilas también sean entretenidas para los niños.",
    alt: "Zona de juegos para niños dentro del hotel",
    label: "Zona de juegos interior",
  },
];

const moments: { label: string; alt: string; image?: string }[] = [
  { label: "Niños jugando en la pérgola", alt: "Niños jugando en la pérgola" },
  { label: "Desayuno en familia", alt: "Familia tomando desayuno en el hotel" },
  { label: "Habitación familiar preparada para niños", alt: "Habitación familiar preparada para niños" },
  { label: "Patio y espacios comunes", alt: "Patio y espacios comunes del hotel" },
  { label: "Zona de juegos", alt: "Zona de juegos para niños" },
  { label: "Detalle pensado para los niños", alt: "Detalle pensado para los niños" },
];

export default function FamiliarPage() {
  return (
    <ToastProvider>
      <Navbar compact />
      <main>
        {/* Hero */}
        <section className="relative h-[70svh] min-h-[440px] max-h-[640px] overflow-hidden bg-dark-green">
          <ImageSlot
            src={hero.image}
            alt={hero.alt}
            label={hero.label}
            tone="dark"
            placement="bottom"
            priority
          />
          {hero.image && (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(13,15,18,0.6) 0%, rgba(13,15,18,0.45) 35%, rgba(13,15,18,0.65) 100%)",
              }}
            />
          )}

          <Link
            href="/"
            className="absolute top-24 md:top-28 left-6 md:left-10 inline-flex items-center gap-2 font-sans text-[13px] text-bg-light/90 hover:text-bg-light transition-colors no-underline"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
            Volver al inicio
          </Link>

          <div className="absolute inset-x-0 top-[38%] flex flex-col items-center px-6 text-center pointer-events-none">
            <p className="font-serif-italic font-medium text-[26px] text-bg-light [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]">
              En familia
            </p>
            <h1 className="font-serif text-bg-light text-[clamp(2.4rem,6vw,4rem)] font-semibold! leading-[1.05] mt-3 [text-shadow:0_2px_16px_rgba(0,0,0,0.6)]">
              Un hotel para venir con niños
            </h1>
          </div>
        </section>

        {/* Presentación */}
        <section className="bg-bg-light py-[clamp(72px,10vw,120px)]">
          <div className="max-w-[720px] mx-auto px-6 md:px-10 text-center">
            <p className="text-text-muted text-[16px] leading-[1.85]">
              Viajar con niños es otra forma de viajar. Por eso, además de
              habitaciones cómodas para todos, el hotel tiene rincones donde
              los más chicos pueden jugar y los grandes, descansar tranquilos.
            </p>
            <p className="font-serif text-[20px] text-dark mt-6">
              Espacios para estar juntos, y también para jugar.
            </p>
          </div>
        </section>

        {/* Espacios */}
        <section className="bg-bg-warm py-[clamp(72px,10vw,120px)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col gap-[clamp(56px,8vw,104px)]">
            {spaces.map((space, i) => {
              const Icon = space.icon;
              const imageFirst = i % 2 === 0;
              return (
                <article
                  key={space.id}
                  id={space.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
                >
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-[3px] ${
                      imageFirst ? "" : "md:order-2"
                    }`}
                  >
                    <ImageSlot
                      src={space.image}
                      alt={space.alt}
                      label={space.label}
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-dark text-blush-deep flex items-center justify-center shrink-0">
                        <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
                      </span>
                      <p className="font-serif-italic text-[24px] text-botanical">
                        {space.eyebrow}
                      </p>
                    </div>
                    <h2 className="font-sans text-[clamp(1.6rem,2.6vw,2.1rem)] font-normal uppercase tracking-[0.08em] mt-4">
                      {space.title}
                    </h2>
                    {space.badge && (
                      <span className="inline-block mt-3 bg-dark/85 text-blush-deep font-sans text-[10.5px] tracking-[0.12em] uppercase px-3 py-1.5">
                        {space.badge}
                      </span>
                    )}
                    <p className="text-text-muted text-[15.5px] leading-[1.8] mt-4 max-w-[48ch]">
                      {space.text}
                    </p>
                    {space.link && (
                      <Button href={space.link.href} variant="ghost" className="mt-7">
                        {space.link.text}
                      </Button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Momentos */}
        <section className="bg-bg-light py-[clamp(72px,10vw,120px)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center max-w-[560px] mx-auto mb-14">
              <p className="font-serif-italic text-[26px] text-botanical">
                Momentos
              </p>
              <h2 className="font-sans text-[clamp(1.8rem,3vw,2.3rem)] font-normal uppercase tracking-[0.08em] mt-3">
                La vida en familia en el hotel
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {moments.map((photo) => (
                <div
                  key={photo.label}
                  className="relative aspect-[4/3] overflow-hidden rounded-[3px]"
                >
                  <ImageSlot
                    src={photo.image}
                    alt={photo.alt}
                    label={photo.label}
                    sizes="(min-width: 768px) 33vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-bg-warm py-[clamp(64px,9vw,112px)]">
          <div className="max-w-[720px] mx-auto px-6 md:px-10 text-center">
            <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2rem)] font-normal text-dark">
              Planifica tu viaje en familia
            </h2>
            <p className="text-text-muted text-[15px] leading-[1.75] mt-3">
              Cuéntanos cuántos son y las edades de los niños, y te ayudamos a
              elegir la habitación que mejor les acomode.
            </p>
            <div className="flex justify-center gap-4 flex-wrap mt-7">
              <Button href="/#reservar" variant="blush">
                Reservar
              </Button>
              <Button href="/#contacto" variant="ghost">
                Escríbenos
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ToastProvider>
  );
}
