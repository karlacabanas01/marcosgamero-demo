"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "./Lightbox";

const allPhotos = [
  { label: "Lobby, vigas originales", image: "/hotel/DSC02716.jpg" },
  { label: "Habitación Matrimonial", image: "/hotel/218HMG.jpg" },
  { label: "Desayuno y pastelería", image: "/hotel/136HMG.jpg" },
  { label: "Pasillo cubierto del patio", image: "/hotel/DSC02726-1.jpg" },
  { label: "Pasillo de retratos", image: "/hotel/168HMG.jpg" },
  { label: "Fuente de piedra, patio", image: "/hotel/DSC02731.jpg" },
  { label: "Salón con vigas de madera", image: "/hotel/184HMG.jpg" },
  { label: "Fachada de entrada", image: "/hotel/33HMG.jpg" },
  { label: "Habitación con cortinas", image: "/hotel/40HMG.jpg" },
  { label: "Balcón con vista a Talca", image: "/hotel/50HMG.jpg" },
  { label: "Detalle de recepción", image: "/hotel/72HMG.jpg" },
  { label: "Entrada nocturna", image: "/hotel/DSC02681-2.jpg" },
  { label: "Pasillo cubierto, noche", image: "/hotel/DSC02737.jpg" },
  { label: "Aldo'Bar, invernadero", image: "/hotel/125HMG.jpg" },
  { label: "Salón invernadero", image: "/hotel/hero-hotel.png" },
];

const preview = allPhotos.slice(0, 5);

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  function openLightbox(index: number) {
    setStartIndex(index);
    setLightboxOpen(true);
  }

  return (
    <section id="galeria" className="bg-bg-light py-[clamp(96px,12vw,160px)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="font-serif-italic text-[26px] text-botanical">
            Momentos
          </p>
          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-normal uppercase tracking-[0.04em] mt-2">
            El hotel en imágenes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="relative aspect-[4/3] md:aspect-auto overflow-hidden"
          >
            <Image
              src={preview[0].image}
              alt={preview[0].label}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </button>

          <div className="grid grid-cols-2 gap-3">
            {preview.slice(1).map((photo, i) => {
              const index = i + 1;
              const isLast = index === preview.length - 1;
              return (
                <button
                  key={photo.image}
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={photo.image}
                    alt={photo.label}
                    fill
                    sizes="25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {isLast && (
                    <span className="absolute inset-0 bg-dark/45 flex items-center justify-center">
                      <span className="bg-bg-light text-dark font-sans text-[13px] font-medium px-4 py-2.5 rounded-[2px]">
                        Ver todas las fotos ({allPhotos.length})
                      </span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          photos={allPhotos}
          startIndex={startIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
}
