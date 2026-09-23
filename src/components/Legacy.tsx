import Image from "next/image";

const timeline = [
  { year: "1982", label: "Fundación" },
  { year: "Hoy", label: "3ª generación a cargo" },
];

export function Legacy() {
  return (
    <section id="historia" className="bg-bottle-deep text-linen py-[clamp(56px,8vw,104px)]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-[640px] mb-12">
          <p className="font-display text-xs font-semibold tracking-[0.16em] uppercase text-[#d9a68f]">
            Diario · Encuentros culturales
          </p>
          <h2 className="text-linen text-[clamp(1.7rem,2.8vw,2.3rem)] font-normal uppercase tracking-[0.03em] mt-3">
            Familia Russo, dueños de casa desde 1982
          </h2>
          <p className="text-[#c9c1b3] text-[15px] mt-3.5">
            Fundado por Eduardo Russo Colucci y Eliana Burgos Fuster, hoy
            atendido por sus hijos y nietos, que mantienen vivo el espíritu
            de un proyecto construido con amor y dedicación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-11 items-start">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative rounded-sm border border-linen/14 row-span-2 overflow-hidden">
              <Image
                src="/hotel/DSC02716.jpg"
                alt="Lobby del hotel con vigas negras, pinturas de época y objetos familiares"
                fill
                sizes="(min-width: 768px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-sm border border-linen/14 overflow-hidden">
              <Image
                src="/hotel/184HMG.jpg"
                alt="Salón con vigas de madera y pintura de paisaje"
                fill
                sizes="(min-width: 768px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-sm border border-linen/14 overflow-hidden">
              <Image
                src="/hotel/218HMG.jpg"
                alt="Escalera de hierro forjado junto a chimenea de mármol"
                fill
                sizes="(min-width: 768px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="pt-1.5">
            <blockquote className="font-display text-[19px] font-normal leading-[1.5] text-linen pl-5 border-l-2 border-terracotta">
              &ldquo;La base fundamental de nuestro hotel es el cariño, el
              respeto y sobre todo el buen recuerdo junto a nuestros seres
              queridos.&rdquo;
              <cite className="block mt-3.5 not-italic font-body text-[11.5px] tracking-[0.08em] uppercase text-[#a89b87]">
                Familia Russo, fundadores
              </cite>
            </blockquote>
            <p className="text-[#c9c1b3] text-[15px] mt-[22px]">
              Cada habitación tiene personalidad propia, decorada con
              mobiliario de época y detalles que transportan a otro tiempo,
              combinando la elegancia de antaño con las comodidades de hoy.
            </p>
            <div className="flex gap-6 flex-wrap mt-7">
              {timeline.map((t) => (
                <div key={t.year} className="font-display text-[15px] text-[#d9a68f] tracking-[0.04em]">
                  {t.year}
                  <span className="block font-body text-[11px] text-[#a89b87] uppercase tracking-[0.05em] mt-1">
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
