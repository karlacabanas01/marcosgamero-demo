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
            "linear-gradient(180deg, rgba(13,15,18,0.55) 0%, rgba(13,15,18,0.25) 28%, rgba(13,15,18,0.35) 65%, rgba(13,15,18,0.7) 100%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-20 text-center">
        <h1 className="font-serif font-normal text-bg-light text-[clamp(3.25rem,6vw,4rem)] leading-[1.05] max-w-[16ch]">
          Un hotel con historia en el Maule
        </h1>
        <p className="font-sans text-[12px] tracking-[0.2em] uppercase text-bg-light/85 mt-4">
          Descubriendo el Maule
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 px-4 md:px-8 pb-6 md:pb-8">
        <BookingBar />
      </div>
    </section>
  );
}
