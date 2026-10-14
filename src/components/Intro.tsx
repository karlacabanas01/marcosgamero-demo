import Image from "next/image";

export function Intro() {
  return (
    <section className="bg-bg-light py-[clamp(96px,12vw,160px)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14 items-center">
        <div className="relative overflow-hidden aspect-[4/5] order-1 md:order-2">
          <Image
            src="/hotel/168HMG.jpg"
            alt="Puerta original número 204 junto a la pared de retratos familiares en blanco y negro"
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
        </div>

        <div className="order-2 md:order-1">
          <p className="font-serif-italic text-[26px] text-botanical">
            Escape
          </p>
          <h2 className="text-[clamp(2rem,3.2vw,2.6rem)] font-normal leading-[1.2] mt-3">
            Una herencia restaurada, una visión moderna de lujo colonial
          </h2>
          <div className="w-10 h-px bg-border mt-7 mb-7" />
          <p className="text-text-muted text-[15.5px] leading-[1.75] max-w-[42ch]">
            Hotel familiar en el corazón de Talca, donde cada habitación tiene
            personalidad propia gracias a su propuesta Vintage Boutique:
            mobiliario de época, salas para reuniones y un bar-cafetería con
            coctelería y cocina de ingredientes frescos y locales.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10 max-w-[420px]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/hotel/184HMG.jpg"
                alt="Salón con vigas de madera oscura y pintura de época"
                fill
                sizes="(min-width: 768px) 15vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/hotel/40HMG.jpg"
                alt="Habitación con cama y cortinas junto a la ventana"
                fill
                sizes="(min-width: 768px) 15vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
