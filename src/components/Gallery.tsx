import Image from "next/image";

const items = [
  {
    label: "Lobby, vigas originales",
    image: "/hotel/DSC02716.jpg",
    span: "col-span-2 row-span-2",
  },
  {
    label: "Suite Fundadores",
    image: "/hotel/218HMG.jpg",
    span: "",
  },
  {
    label: "Desayuno y pastelería",
    image: "/hotel/136HMG.jpg",
    span: "",
  },
  {
    label: "Pasillo cubierto del patio",
    image: "/hotel/DSC02726-1.jpg",
    span: "col-span-2",
  },
  {
    label: "Pasillo de retratos",
    image: "/hotel/168HMG.jpg",
    span: "",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="bg-linen py-[clamp(56px,8vw,104px)]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="mb-12">
          <p className="font-display text-xs font-semibold tracking-[0.16em] uppercase text-terracotta">
            Galería
          </p>
          <h2 className="text-[clamp(1.7rem,2.8vw,2.3rem)] font-normal uppercase tracking-[0.03em] mt-3">
            El hotel en imágenes
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[130px] md:auto-rows-[150px] gap-3">
          {items.map((item) => (
            <div
              key={item.label}
              className={`relative overflow-hidden rounded-sm border border-border ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
              <span className="absolute bottom-2.5 left-3 text-linen text-xs tracking-wide [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
