import Image from "next/image";

export function Familiar() {
  return (
    <section id="familiar" className="bg-bg-light py-[clamp(72px,10vw,128px)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 items-center">
        <div className="relative aspect-[4/3] overflow-hidden order-2 md:order-1">
          <Image
            src="/hotel/136HMG.jpg"
            alt="Desayuno servido con detalle casero en el hotel"
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="font-sans text-[clamp(2.6rem,4vw,3rem)] font-normal uppercase tracking-[0.08em]">
            Una casa de familia, no una cadena hotelera
          </h2>
          <p className="text-text-muted text-[15px] leading-[1.75] mt-3.5 max-w-[46ch]">
            Desde 1982 la familia Russo recibe a cada huésped como visita en
            su propia casa. Hoy son hijos y nietos quienes están presentes
            día a día, y eso se nota: te saludan por tu nombre, recuerdan si
            vuelves y resuelven cualquier detalle en persona, sin pasar por
            un call center. Es ese trato cercano —más que el edificio
            mismo— lo que hace que muchos huéspedes vuelvan temporada tras
            temporada.
          </p>
        </div>
      </div>
    </section>
  );
}
