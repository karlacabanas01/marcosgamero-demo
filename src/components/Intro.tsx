import Image from "next/image";

export function Intro() {
  return (
    <section className="bg-linen pt-[clamp(80px,10vw,120px)] pb-[clamp(56px,8vw,104px)]">
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
        <div className="relative rounded-md overflow-hidden aspect-[3/4] border border-border">
          <Image
            src="/hotel/168HMG.jpg"
            alt="Puerta original número 204 junto a la pared de retratos familiares en blanco y negro"
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="font-display text-xs font-semibold tracking-[0.16em] uppercase text-terracotta mb-3.5">
            Develando nuestra historia
          </p>
          <h2 className="text-[clamp(1.7rem,2.8vw,2.3rem)] font-normal leading-[1.28]">
            Una herencia restaurada. Una visión moderna de lujo colonial.
          </h2>
          <p className="text-carbon-soft text-[15.5px] mt-[18px]">
            Hotel familiar en el corazón de Talca, donde cada habitación tiene
            personalidad propia gracias a su propuesta Vintage Boutique:
            mobiliario de época, salas para reuniones y un bar-cafetería con
            coctelería y cocina de ingredientes frescos y locales.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-[30px]">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-border">
              <Image
                src="/hotel/184HMG.jpg"
                alt="Salón con vigas de madera oscura y pintura de época"
                fill
                sizes="(min-width: 768px) 20vw, 45vw"
                className="object-cover"
              />
              <span className="absolute bottom-2.5 left-3 text-linen text-xs tracking-wide [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                Salones con carácter
              </span>
            </div>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-border">
              <Image
                src="/hotel/40HMG.jpg"
                alt="Habitación con cama y cortinas junto a la ventana"
                fill
                sizes="(min-width: 768px) 20vw, 45vw"
                className="object-cover"
              />
              <span className="absolute bottom-2.5 left-3 text-linen text-xs tracking-wide [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                Confort actual
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
