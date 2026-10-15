import Image from "next/image";
import { Button } from "./Button";

const blocks = [
  {
    id: "wellness",
    eyebrow: "Wellness",
    title: "El antiguo aljibe, hoy convertido en spa",
    desc: "Piscina temperada, sauna seco y sala de masajes instalados donde antes estaba el aljibe de la casona, conservando el muro de piedra original.",
    comingSoon: true,
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
    id: undefined,
    eyebrow: "Sabor",
    title: "El Fogón de la Abuela",
    desc: "En el antiguo comedor familiar, hoy servimos cocina de estación con productos del Maule y una carta de vinos de la ruta vitivinícola local.",
    comingSoon: false,
    facts: [
      { value: "60", label: "Comensales" },
      { value: "06:30–23:00", label: "Horario diario" },
      { value: "+90", label: "Etiquetas de vino" },
    ],
    image: "/hotel/hero-hotel.png",
    alt: "Salón invernadero del restaurant, con vegetación y mesas dispuestas",
    reverse: true,
  },
  {
    id: "aldobar",
    eyebrow: "Encuentro",
    title: "Aldo'Bar",
    desc: "El corazón íntimo del hotel: coctelería de autor, ambiente sofisticado y una atmósfera cálida que invita a quedarse, en el salón invernadero.",
    comingSoon: false,
    facts: [
      { value: "18:15–22:15", label: "Cena, todos los días" },
      { value: "18:00–23:30", label: "Bar, martes a domingo" },
      { value: "Eventos", label: "Reserva por Instagram" },
    ],
    image: "/hotel/125HMG.jpg",
    alt: "Aldo'Bar en el salón invernadero del hotel, con mesas y barra dispuestas",
    reverse: false,
    href: "/aldobar",
  },
  {
    id: "cowork",
    eyebrow: "Trabajo",
    title: "Co-work / Eventos",
    desc: "Abrimos las puertas a Talca: un salón versátil con vigas a la vista y luz natural, acondicionado para jornadas de trabajo, reuniones directivas y celebraciones privadas, con montaje a medida para cada grupo.",
    comingSoon: false,
    facts: [
      { value: "Hasta 40", label: "Personas" },
      { value: "Wifi + A/V", label: "Equipamiento" },
      { value: "A medida", label: "Montaje" },
    ],
    image: "/hotel/184HMG.jpg",
    alt: "Salón del hotel con vigas de madera, mesas y sillones para trabajo o eventos",
    reverse: true,
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-[clamp(96px,12vw,160px)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-12">
          <p className="font-serif-italic text-[26px] text-botanical">
            Servicios
          </p>
          <h2 className="font-sans text-[clamp(2.6rem,4vw,3rem)] font-normal uppercase tracking-[0.08em] mt-3">
            Un hotel para descansar, trabajar y celebrar
          </h2>
          <p className="max-w-[44ch] text-text-muted text-[15px] mt-3">
            Wellness, gastronomía, bar y espacios para reuniones y eventos,
            todo dentro de la casona.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {blocks.map((block) => (
            <div
              key={block.title}
              id={block.id}
              className="grid grid-cols-1 md:grid-cols-2 overflow-hidden scroll-mt-24"
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
              <div className="p-7 md:p-14 flex flex-col justify-center gap-3.5">
                <div className="flex items-center gap-3 flex-wrap">
                  <p className="font-serif-italic text-[26px] text-botanical">
                    {block.eyebrow}
                  </p>
                  {block.comingSoon && (
                    <span className="bg-dark text-bg-light font-sans text-[10.5px] tracking-[0.12em] uppercase px-3 py-1.5">
                      Próximamente
                    </span>
                  )}
                </div>
                <h3 className="text-[clamp(1.3rem,2vw,1.7rem)] font-normal mt-2">
                  {block.title}
                </h3>
                <p className="text-text-muted text-[15px] leading-[1.75]">{block.desc}</p>
                <div className="flex gap-6 flex-wrap mt-2">
                  {block.facts.map((f) => (
                    <div key={f.label} className="text-[12.5px] text-dark">
                      <b className="block font-serif text-[18px] font-medium text-botanical">
                        {f.value}
                      </b>
                      {f.label}
                    </div>
                  ))}
                </div>
                {block.href && (
                  <Button href={block.href} variant="ghost" className="self-start mt-2">
                    Conoce más
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
