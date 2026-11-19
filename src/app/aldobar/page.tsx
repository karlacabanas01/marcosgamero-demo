import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock3, PartyPopper, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToastProvider } from "@/components/ToastProvider";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Aldo'Bar | Hotel Marcos Gamero",
  description:
    "Aldo'Bar, el corazón íntimo del Hotel Marcos Gamero en Talca: coctelería de autor en un ambiente boutique.",
};

const schedule = [
  { label: "Cena", hours: "18:15 – 22:15 hrs", days: "Lunes a domingo" },
  { label: "Bar", hours: "18:00 – 23:30 hrs", days: "Martes a domingo" },
];

const heroImage = {
  src: "/hotel/aldobar-barra.png",
  alt: "Barra de Aldo'Bar, con licores y sillas de terciopelo",
};

const gallery = [
  { src: "/hotel/aldobar-barra.png", alt: "Barra de Aldo'Bar, con licores y sillas de terciopelo" },
  { src: "/hotel/125HMG.jpg", alt: "Aldo'Bar en el salón invernadero, con mesas y barra dispuestas" },
  { src: "/hotel/intro-salon.jpg", alt: "Salón invernadero con vigas de hierro, candelabro y mesas" },
  { src: "/hotel/DSC02737.jpg", alt: "Pasillo cubierto del hotel de noche, ambiente cálido" },
];

export default function AldoBarPage() {
  return (
    <ToastProvider>
      <Navbar compact />
      <main>
        {/* Hero a ancho completo */}
        <section className="relative h-[70svh] min-h-[440px] max-h-[640px] overflow-hidden">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(13,15,18,0.6) 0%, rgba(13,15,18,0.45) 35%, rgba(13,15,18,0.65) 100%)",
            }}
          />

          <Link
            href="/"
            className="absolute top-24 md:top-28 left-6 md:left-10 inline-flex items-center gap-2 font-sans text-[13px] text-bg-light/90 hover:text-bg-light transition-colors no-underline"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
            Volver al inicio
          </Link>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pointer-events-none">
            <p className="font-serif-italic font-medium text-[26px] text-bg-light [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]">
              Encuentro
            </p>
            <h1 className="font-serif text-bg-light text-[clamp(2.4rem,6vw,4rem)] font-semibold! leading-[1.05] mt-3 [text-shadow:0_2px_16px_rgba(0,0,0,0.6)]">
              Aldo&apos;Bar
            </h1>
            <p className="font-sans font-semibold text-[14px] tracking-[0.1em] uppercase text-bg-light mt-4 [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">
              El corazón íntimo del hotel
            </p>
          </div>
        </section>

        {/* Presentación */}
        <section className="bg-bg-light py-[clamp(72px,10vw,120px)]">
          <div className="max-w-[720px] mx-auto px-6 md:px-10 text-center">
            <p className="text-text-muted text-[16px] leading-[1.85]">
              Un espacio boutique para quienes buscan algo distinto:
              coctelería de autor, ambiente sofisticado y una atmósfera
              cálida que invita a quedarse. Fusionamos detalles, música,
              diseño y sabores para crear un lugar único en Talca.
            </p>
            <p className="font-serif text-[20px] text-dark mt-6">
              Más que un bar, una nueva forma de vivir las noches en Talca.
            </p>
          </div>
        </section>

        {/* Horarios, franja compacta */}
        <section className="bg-bg-light py-8 md:py-10 border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-start gap-2 text-[13.5px] md:text-[14px] text-dark">
              <Clock3 className="w-4 h-4 text-text-muted shrink-0 mt-0.5" strokeWidth={1.75} />
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-2 gap-y-1">
                {schedule.map((s, i) => (
                  <span key={s.label}>
                    <span className="font-medium">{s.label}</span>{" "}
                    <span className="text-text-muted">
                      {s.days}, {s.hours}
                    </span>
                    {i < schedule.length - 1 && (
                      <span className="text-text-muted mx-2 hidden sm:inline">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Galería */}
        <section className="bg-bg-light py-[clamp(72px,10vw,120px)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center max-w-[560px] mx-auto mb-14">
              <p className="font-serif-italic text-[26px] text-botanical">
                Ambiente
              </p>
              <h2 className="font-sans text-[clamp(1.8rem,3vw,2.3rem)] font-normal uppercase tracking-[0.08em] mt-3">
                El salón invernadero
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {gallery.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-[3/4] overflow-hidden"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonio */}
        <section className="bg-dark-green text-bg-light text-center py-[clamp(64px,9vw,120px)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <p className="font-serif-italic text-[26px] text-botanical-soft">
              Voces
            </p>
            <blockquote className="font-serif font-normal text-[clamp(1.25rem,2.2vw,1.8rem)] max-w-[780px] mx-auto mt-[26px] leading-[1.5] text-bg-light">
              &ldquo;El mejor secreto de Talca para una copa distinta: coctelería
              cuidada, buena música y un ambiente que no se siente en ningún
              otro lugar de la ciudad.&rdquo;
            </blockquote>
            <cite className="block mt-[26px] not-italic text-[12.5px] tracking-[0.06em] uppercase text-botanical-soft">
              — Javiera Muñoz, cliente habitual
            </cite>
          </div>
        </section>

        {/* Eventos privados */}
        <section className="bg-bg-warm py-[clamp(72px,10vw,120px)]">
          <div className="max-w-[720px] mx-auto px-6 md:px-10 text-center">
            <div className="w-12 h-12 rounded-full bg-dark text-blush-deep flex items-center justify-center mx-auto">
              <PartyPopper className="w-5 h-5" strokeWidth={1.75} />
            </div>
            <p className="font-serif-italic text-[26px] text-botanical mt-5">
              A tu medida
            </p>
            <h2 className="font-sans text-[clamp(1.8rem,3vw,2.3rem)] font-normal uppercase tracking-[0.08em] mt-3">
              Eventos privados
            </h2>
            <p className="text-text-muted text-[16px] leading-[1.85] mt-5">
              Celebra un cumpleaños, un aniversario o una reunión de trabajo en
              un espacio distinto. Armamos una propuesta de coctelería y
              montaje a medida para grupos pequeños, dentro del mismo salón
              invernadero.
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-bg-light py-[clamp(64px,9vw,112px)] border-t border-border">
          <div className="max-w-[720px] mx-auto px-6 md:px-10 text-center">
            <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2rem)] font-normal text-dark">
              Resérvanos tu mesa
            </h2>
            <p className="text-text-muted text-[15px] leading-[1.75] mt-3">
              Escríbenos por Instagram o pasa directo: la mejor hora para
              asegurar lugar es antes de las 20:00 hrs.
            </p>
            <div className="flex justify-center gap-4 flex-wrap mt-7">
              <Button
                href="https://www.instagram.com/hotel_marcosgamero/"
                variant="blush"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
                Reservar por Instagram
              </Button>
              <Button href="/#contacto" variant="ghost">
                Ver otras formas de contacto
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ToastProvider>
  );
}
