"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type Photo = {
  label: string;
  image: string;
};

type LightboxProps = {
  photos: Photo[];
  startIndex: number;
  onClose: () => void;
};

export function Lightbox({ photos, startIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(startIndex);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        setIndex((i) => (i + 1) % photos.length);
      }
      if (e.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + photos.length) % photos.length);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [photos.length, onClose]);

  if (!mounted) return null;

  const current = photos[index];

  const content = (
    <div className="fixed inset-0 z-[200] bg-dark/95 flex flex-col">
      <div className="flex items-center justify-between px-6 md:px-10 py-5 text-bg-light">
        <span className="font-sans text-[13px] tracking-[0.04em] text-bg-light/80">
          {index + 1} / {photos.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar galería"
          className="w-9 h-9 rounded-full border border-bg-light/40 flex items-center justify-center hover:border-bg-light transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.5">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-4 md:px-16 pb-4">
        <button
          type="button"
          aria-label="Foto anterior"
          onClick={() => setIndex((i) => (i - 1 + photos.length) % photos.length)}
          className="absolute left-2 md:left-6 w-10 h-10 rounded-full border border-bg-light/40 flex items-center justify-center text-bg-light hover:border-bg-light transition-colors"
        >
          ‹
        </button>

        <div className="relative w-full h-full max-w-[1100px]">
          <Image
            src={current.image}
            alt={current.label}
            fill
            sizes="90vw"
            className="object-contain"
            priority
          />
        </div>

        <button
          type="button"
          aria-label="Foto siguiente"
          onClick={() => setIndex((i) => (i + 1) % photos.length)}
          className="absolute right-2 md:right-6 w-10 h-10 rounded-full border border-bg-light/40 flex items-center justify-center text-bg-light hover:border-bg-light transition-colors"
        >
          ›
        </button>
      </div>

      <p className="text-center font-sans text-[13px] text-bg-light/80 pb-6">
        {current.label}
      </p>
    </div>
  );

  return createPortal(content, document.body);
}
