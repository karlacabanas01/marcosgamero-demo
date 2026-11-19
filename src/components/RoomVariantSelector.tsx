"use client";

import { Button } from "./Button";
import { useRoomVariant } from "./RoomVariantContext";

function shortLabel(name: string, roomName: string) {
  const words = roomName.replace(/^Habitación\s+/i, "").split(" ");
  let result = name;
  for (const w of words) {
    result = result.replace(new RegExp(`^${w}\\s*-?\\s*`, "i"), "");
  }
  return result || name;
}

export function RoomVariantSelector({ roomName }: { roomName: string }) {
  const { variants, index, setIndex } = useRoomVariant();
  const variant = variants[index];

  const label = shortLabel(variant.name, roomName);

  return (
    <div>
      <h1 className="font-sans text-[clamp(2.6rem,4vw,3rem)] font-normal uppercase tracking-[0.08em] mt-3">
        {label}
      </h1>

      <div className="flex flex-wrap justify-center gap-2.5 mt-6">
        {variants.map((v, i) => (
          <button
            key={v.name}
            type="button"
            onClick={() => setIndex(i)}
            aria-pressed={i === index}
            className={`font-sans text-[12.5px] tracking-[0.02em] px-4 py-2 border transition-colors duration-300 ${
              i === index
                ? "bg-dark text-bg-light border-dark"
                : "bg-transparent text-dark border-border hover:border-dark"
            }`}
          >
            {shortLabel(v.name, roomName)}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {!variant.amenities && variant.longDesc && (
          <p className="text-text-muted text-[15.5px] leading-[1.75] max-w-[62ch] mx-auto mb-7">
            {variant.longDesc}
          </p>
        )}
        <div className="bg-bg-warm border border-border p-6 max-w-[360px] mx-auto text-center">
          <p className="font-sans text-[11px] tracking-[0.06em] uppercase text-text-muted">
            Tarifa
          </p>
          <div className="flex items-baseline justify-center gap-1.5 mt-2">
            <b className="font-serif text-[32px] font-medium text-dark">
              {variant.price}
            </b>
            <span className="text-sm text-text-muted">/ noche</span>
          </div>
          <p className="font-sans text-[13px] text-botanical mt-1">
            {variant.bedType}
            {variant.capacity ? ` · ${variant.capacity}` : ""}
          </p>
          <Button href="/#reservar" variant="blush" className="w-full mt-6">
            Consultar disponibilidad
          </Button>
        </div>
      </div>
    </div>
  );
}
