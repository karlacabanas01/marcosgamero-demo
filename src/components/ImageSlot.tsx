import Image from "next/image";
import { ImagePlus } from "lucide-react";

/**
 * Renders a photo when `src` is set; otherwise a labelled placeholder that
 * says which photo belongs there, so pages can ship before the shoot.
 * Fills its parent: give the parent a size (aspect ratio or height) and `relative`.
 */
export function ImageSlot({
  src,
  alt,
  label,
  sizes = "100vw",
  priority = false,
  tone = "light",
  placement = "center",
}: Readonly<{
  src?: string;
  alt: string;
  /** Describes the photo that should go here. Shown only on the placeholder. */
  label: string;
  sizes?: string;
  priority?: boolean;
  tone?: "light" | "dark";
  /** Where the placeholder text sits; use "bottom" when text is overlaid on the slot. */
  placement?: "center" | "bottom";
}>) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    );
  }

  const toneClass =
    tone === "dark"
      ? "bg-dark-green text-bg-light/70 border-bg-light/25"
      : "bg-bg-warm text-text-muted border-dark/15";

  return (
    <div
      role="img"
      aria-label={alt}
      className={`absolute inset-0 flex flex-col items-center gap-2 border border-dashed px-6 text-center ${
        placement === "bottom" ? "justify-end pb-10" : "justify-center"
      } ${toneClass}`}
    >
      <ImagePlus className="w-6 h-6" strokeWidth={1.5} aria-hidden />
      <span className="font-sans text-[11px] tracking-[0.12em] uppercase">
        Foto pendiente
      </span>
      <span className="font-sans text-[13px] max-w-[32ch]">{label}</span>
    </div>
  );
}
