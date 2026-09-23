import Image from "next/image";
import { BookingBar } from "./BookingBar";

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-svh max-h-[650px] min-h-[480px] overflow-hidden"
    >
      <Image
        src="/hotel/hero-hotel.png"
        alt="Salón invernadero del Hotel Marcos Gamero, con vegetación y estructura de hierro forjado"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,16,13,0.25) 0%, rgba(10,16,13,0.15) 35%, rgba(10,16,13,0.5) 70%, rgba(10,16,13,0.8) 100%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-10 pb-28 md:pb-32">
        <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
          <h1 className="font-display font-normal text-linen text-[clamp(1.9rem,4.6vw,3.1rem)] leading-[1.15] max-w-[18ch]">
            Un refugio atemporal: elegancia colonial moderna
          </h1>
          <p className="mt-3 text-[clamp(14px,1.3vw,16px)] max-w-[46ch] text-[#e7e0d5]">
            Descubre una mezcla de herencia y lujo contemporáneo en pleno
            corazón de Talca.
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 px-4 md:px-8 pb-4 md:pb-6">
        <BookingBar />
      </div>
    </section>
  );
}
