export function Testimonial() {
  return (
    <section className="bg-dark-green text-bg-light text-center py-[clamp(64px,9vw,120px)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <p className="font-serif-italic text-[26px] text-botanical-soft">
          Voces
        </p>
        <blockquote className="font-serif font-normal text-[clamp(1.25rem,2.2vw,1.8rem)] max-w-[780px] mx-auto mt-[26px] leading-[1.5] text-bg-light">
          &ldquo;Se siente como quedarse en la casa de una familia talquina de
          verdad: las fotos en el pasillo, el olor a madera, pero con todas
          las comodidades de un hotel actual.&rdquo;
        </blockquote>
        <cite className="block mt-[26px] not-italic text-[12.5px] tracking-[0.06em] uppercase text-botanical-soft">
          — Fernanda Rojas, huésped
        </cite>
      </div>
    </section>
  );
}
