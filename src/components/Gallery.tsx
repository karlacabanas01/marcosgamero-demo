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
    <section id="galeria" className="bg-bg-light py-[clamp(48px,6vw,80px)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="relative grid grid-cols-2 md:grid-cols-[2.13fr_1fr_1fr] md:grid-rows-2 gap-3 md:gap-6">
          {preview.map((photo, index) => {
            const isMain = index === 0;
            return (
              <button
                key={photo.image}
                type="button"
                onClick={() => openLightbox(index)}
                aria-label={`Ver foto: ${photo.label}`}
                className={`relative overflow-hidden rounded-[3px] ${
                  isMain
                    ? "col-span-2 md:col-span-1 md:row-span-2 aspect-[5/4] md:aspect-auto"
                    : "aspect-[365/289]"
                }`}
              >
                <Image
                  src={photo.image}
                  alt={photo.label}
                  fill
                  sizes={
                    isMain
                      ? "(min-width: 768px) 50vw, 100vw"
                      : "(min-width: 768px) 25vw, 50vw"
                  }
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="absolute bottom-3 right-3 md:bottom-6 md:right-[calc((100%-48px)*0.136)] h-12 px-6 rounded-[4px] bg-white font-jost text-[16px] text-[#111] transition-colors duration-300 hover:bg-dark hover:text-bg-light"
          >
            Ver todas las fotos ({allPhotos.length})
          </button>
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
