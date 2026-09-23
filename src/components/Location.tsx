import Image from "next/image";

const points = [
  {
    icon: "\u{1F4CD}",
    title: "Dirección",
    desc: "1 Sur 1150, Talca, Región del Maule",
  },
  {
    icon: "\u{1F3DB}️",
    title: "Plaza de Armas de Talca",
    desc: "2 minutos caminando",
  },
  {
    icon: "\u{1F3DB}",
    title: "Museo O'Higginiano",
    desc: "1 cuadra · resguarda el Acta de Independencia de Chile",
  },
  {
    icon: "\u{1F68C}",
    title: "Terminal de buses",
    desc: "20 minutos caminando",
  },
  {
    icon: "\u{1F3D5}️",
    title: "Radal Siete Tazas y Altos de Lircay",
    desc: "A 2 horas · cascadas, senderos y bosque nativo",
  },
];

export function Location() {
  return (
    <section id="ubicacion" className="bg-linen-deep py-[clamp(56px,8vw,104px)]">
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-display text-xs font-semibold tracking-[0.16em] uppercase text-terracotta">
            Ubicación
          </p>
          <h2 className="text-[clamp(1.7rem,2.8vw,2.3rem)] font-normal uppercase tracking-[0.03em] mt-3">
            En pleno centro de Talca
          </h2>
          <p className="text-carbon-soft text-[15px] mt-3.5 max-w-[46ch]">
            A pasos de la Alameda y su Plaza de Armas, y a un viaje corto de
            la costa de Constitución —a la que se puede llegar en el único
            tren de trocha angosta de Chile.
          </p>
          <ul className="list-none mt-[26px] p-0 flex flex-col gap-5">
            {points.map((p) => (
              <li key={p.title} className="flex gap-3.5">
                <div className="w-[38px] h-[38px] rounded-full bg-carbon text-terracotta-light flex items-center justify-center shrink-0 text-base">
                  {p.icon}
                </div>
                <div>
                  <h4 className="font-display text-[13.5px] font-semibold tracking-[0.03em]">
                    {p.title}
                  </h4>
                  <p className="mt-1 text-carbon-soft text-sm">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-square rounded-md border border-border overflow-hidden">
          <Image
            src="/hotel/33HMG.jpg"
            alt="Fachada de entrada del Hotel Marcos Gamero, con toldo verde sobre el pasaje de acceso"
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,8,5,0.05) 0%, rgba(10,8,5,0.35) 100%)",
            }}
          />
          <div className="absolute top-[46%] left-[52%] w-4 h-4 bg-terracotta border-[3px] border-carbon rounded-[50%_50%_50%_0] -translate-x-1/2 -translate-y-full rotate-[-45deg]" />
          <div className="absolute top-[38%] left-[56%] bg-carbon text-linen font-display text-[11px] tracking-[0.03em] px-3 py-1.5 rounded-sm whitespace-nowrap">
            Hotel Marcos Gamero
          </div>
        </div>
      </div>
    </section>
  );
}
