"use client";

import Image from "next/image";
import { iconForAmenity } from "@/lib/amenity-icons";
import { useRoomVariant } from "./RoomVariantContext";
import { RoomCarousel } from "./RoomCarousel";
import type { Room } from "@/lib/rooms-data";

function AmenitiesBlock({ amenities }: { amenities: string[] }) {
  return (
    <div className="bg-bg-light text-dark py-[clamp(56px,8vw,96px)] border-y border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        <p className="font-serif-italic text-[clamp(1.5rem,2vw,1.75rem)] text-botanical">
          En detalle
        </p>
        <h2 className="font-sans text-[clamp(1.8rem,3vw,2.3rem)] font-normal uppercase tracking-[0.08em] mt-2">
          Esta habitación incluye
        </h2>
        <ul className="flex flex-wrap justify-center gap-x-12 gap-y-10 mt-12 list-none p-0">
          {amenities.map((a) => {
            const Icon = iconForAmenity(a);
            return (
              <li key={a} className="flex flex-col items-center gap-3 w-[140px]">
                <Icon className="w-7 h-7 text-botanical" strokeWidth={1.5} />
                <span className="font-sans text-[13px] leading-[1.4] text-dark">
                  {a}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function PhotosBlock({ room }: { room: Room }) {
  if (room.slug === "single") {
    return (
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <RoomCarousel photos={room.gallery} tag={room.tag} />
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="relative aspect-[4/3] overflow-hidden md:row-span-2">
        <Image
          src={room.gallery[0]?.src ?? room.image}
          alt={room.gallery[0]?.alt ?? room.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
          className="object-cover"
        />
        <span className="absolute top-4 left-4 bg-dark/80 text-botanical-soft font-sans text-[10.5px] tracking-[0.12em] uppercase px-3 py-1.5">
          {room.tag}
        </span>
      </div>
      {room.gallery.slice(1).map((photo) => (
        <div key={photo.src} className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 768px) 25vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export function RoomVariantGallery({ room }: { room: Room }) {
  const { variants, index } = useRoomVariant();
  const variant = variants[index];
  const variantAmenities = variant?.amenities;

  if (variantAmenities) {
    return (
      <>
        <AmenitiesBlock amenities={variantAmenities} />
        <PhotosBlock room={room} />
      </>
    );
  }

  return (
    <>
      <PhotosBlock room={room} />
      <AmenitiesBlock amenities={room.amenities} />
    </>
  );
}
