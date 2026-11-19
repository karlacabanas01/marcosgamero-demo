import Image from "next/image";
import { BookingBar } from "./BookingBar";

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-svh max-h-[760px] min-h-[600px] overflow-hidden"
    >
      <Image
        src="/hotel/hero-entrada.jpg"
        alt="Entrada del Hotel Marcos Gamero, puertas de hierro y vidrio hacia el patio interior"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,15,18,0.6) 0%, rgba(13,15,18,0.45) 28%, rgba(13,15,18,0.5) 65%, rgba(13,15,18,0.7) 100%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-20 text-center">
        <h1 className="font-serif font-semibold! text-bg-light text-[clamp(3.25rem,6vw,4rem)] leading-[1.05] max-w-[16ch] [text-shadow:0_2px_16px_rgba(0,0,0,0.6)]">
          Un hotel con historia en el Maule
        </h1>
        <p className="font-sans font-semibold text-[13px] tracking-[0.2em] uppercase text-bg-light mt-4 [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">
          Descubriendo el Maule
        </p>
      </div>

      <svg
        aria-hidden
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[-1px] w-full h-16 md:h-24 fill-bg-warm"
      >
        <path d="M0,22 C50,22 85,8 150,8 C400,8 540,120 720,120 C900,120 1040,8 1290,8 C1355,8 1390,22 1440,22 L1440,120 L0,120 Z" />
      </svg>

      <div className="absolute inset-x-0 bottom-0 px-4 md:px-8 pb-20 md:pb-32">
        <BookingBar />
      </div>
    </section>
  );
}
