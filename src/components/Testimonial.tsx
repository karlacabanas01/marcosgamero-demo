export function Testimonial() {
  return (
    <section className="bg-terracotta-deep text-linen text-center py-[clamp(56px,8vw,104px)]">
      <div className="max-w-[1180px] mx-auto px-6">
        <p className="font-display text-xs font-semibold tracking-[0.16em] uppercase text-[#f0d9cb]">
          Huéspedes
        </p>
        <blockquote className="font-display font-normal text-[clamp(1.25rem,2.2vw,1.8rem)] max-w-[780px] mx-auto mt-[26px] leading-[1.5] text-[#faf3ec]">
          &ldquo;Se siente como quedarse en la casa de una familia talquina de
          verdad: las fotos en el pasillo, el olor a madera, pero con todas
          las comodidades de un hotel actual.&rdquo;
        </blockquote>
        <cite className="block mt-[26px] not-italic text-[12.5px] tracking-[0.06em] uppercase text-[#f0d9cb]">
          — Fernanda Rojas, huésped
        </cite>
      </div>
    </section>
  );
}
