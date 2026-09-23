import Image from "next/image";

const blocks = [
  {
    eyebrow: "Spa & piscina",
    title: "El antiguo aljibe, hoy convertido en spa",
    desc: "Piscina temperada, sauna seco y sala de masajes instalados donde antes estaba el aljibe de la casona, conservando el muro de piedra original.",
    facts: [
      { value: "07:00–22:00", label: "Horario diario" },
      { value: "Patio sur", label: "Acceso directo" },
      { value: "Gratis", label: "Para huéspedes" },
    ],
    image: "/hotel/DSC02731.jpg",
    alt: "Fuente de piedra con cabeza de león en el patio del hotel",
    reverse: false,
  },
  {
    eyebrow: "Restaurant",
    title: "El Fogón de la Abuela",
    desc: "En el antiguo comedor familiar, hoy servimos cocina de estación con productos del Maule y una carta de vinos de la ruta vitivinícola local.",
    facts: [
      { value: "60", label: "Comensales" },
      { value: "06:30–23:00", label: "Horario diario" },
      { value: "+90", label: "Etiquetas de vino" },
    ],
    image: "/hotel/hero-hotel.png",
    alt: "Salón invernadero del restaurant, con vegetación y mesas dispuestas",
    reverse: true,
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-[clamp(56px,8vw,104px)]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="mb-12">
          <p className="font-display text-xs font-semibold tracking-[0.16em] uppercase text-terracotta">
            Servicios
          </p>
          <h2 className="text-[clamp(1.7rem,2.8vw,2.3rem)] font-normal uppercase tracking-[0.03em] mt-3">
            Bienestar y gastronomía
          </h2>
          <p className="max-w-[44ch] text-carbon-soft text-[15px] mt-3">
            Espacios para descansar, trabajar y disfrutar de la cocina del
            Maule sin salir del hotel.
          </p>
        </div>

        <div className="flex flex-col gap-7">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-md overflow-hidden border border-border"
            >
              <div
                className={`relative min-h-[320px] ${block.reverse ? "md:order-2" : ""}`}
              >
                <Image
                  src={block.image}
                  alt={block.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7 md:p-12 flex flex-col justify-center gap-3.5">
                <p className="font-display text-xs font-semibold tracking-[0.16em] uppercase text-terracotta">
                  {block.eyebrow}
                </p>
                <h3 className="text-[clamp(1.3rem,2vw,1.7rem)] font-normal uppercase tracking-[0.02em] mt-2">
                  {block.title}
                </h3>
                <p className="text-carbon-soft text-[15px]">{block.desc}</p>
                <div className="flex gap-6 flex-wrap mt-2">
                  {block.facts.map((f) => (
                    <div key={f.label} className="text-[12.5px] text-carbon">
                      <b className="block font-display text-[16px] font-semibold text-terracotta-deep">
                        {f.value}
                      </b>
                      {f.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
