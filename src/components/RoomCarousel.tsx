"use client";

import { useState } from "react";
import Image from "next/image";

type Photo = { src: string; alt: string };

export function RoomCarousel({ photos, tag }: { photos: Photo[]; tag: string }) {
  const [index, setIndex] = useState(0);
  const current = photos[index];

  return (
    <div className="relative aspect-[16/9] overflow-hidden group">
      <Image
        src={current.src}
        alt={current.alt}
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <span className="absolute top-4 left-4 bg-dark/80 text-botanical-soft font-sans text-[10.5px] tracking-[0.12em] uppercase px-3 py-1.5">
        {tag}
      </span>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={() => setIndex((i) => (i - 1 + photos.length) % photos.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-bg-light/60 bg-dark/40 flex items-center justify-center text-bg-light hover:bg-dark/70 transition-colors"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Foto siguiente"
            onClick={() => setIndex((i) => (i + 1) % photos.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-bg-light/60 bg-dark/40 flex items-center justify-center text-bg-light hover:bg-dark/70 transition-colors"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((p, i) => (
              <button
                key={p.src}
                type="button"
                aria-label={`Ir a foto ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? "bg-bg-light" : "bg-bg-light/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
