"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CardCarousel({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function updateEdges() {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, []);

  const animRef = useRef<number | null>(null);

  function scrollByCard(direction: 1 | -1) {
    const el = trackRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const from = el.scrollLeft;
    const to = Math.max(
      0,
      Math.min(maxScroll, from + direction * (card.offsetWidth + gap)),
    );
    if (to === from) return;

    if (animRef.current) cancelAnimationFrame(animRef.current);
    // Snap would fight the per-frame scrollLeft updates, so it's off while animating.
    el.style.scrollSnapType = "none";
    const duration = 750;
    const start = performance.now();
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      el.scrollLeft = from + (to - from) * ease(t);
      if (t < 1) {
        animRef.current = requestAnimationFrame(step);
      } else {
        animRef.current = null;
        el.style.scrollSnapType = "";
      }
    };
    animRef.current = requestAnimationFrame(step);
  }

  const arrowClass =
    "absolute top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-dark/20 bg-bg-light shadow-[0_6px_18px_-6px_rgba(13,15,18,0.35)] hidden md:flex items-center justify-center text-dark hover:bg-dark hover:text-bg-light transition-all disabled:opacity-40 disabled:pointer-events-none";

  return (
    <div className="relative -mx-6 md:mx-0 md:px-14">
      <div
        ref={trackRef}
        onScroll={updateEdges}
        className="flex gap-5 md:gap-8 py-5 px-6 md:px-5 scroll-px-6 md:scroll-px-5 overflow-x-auto snap-x snap-mandatory [&>*:first-child]:ml-auto [&>*:last-child]:mr-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {!(atStart && atEnd) && (
        <>
          <button
            type="button"
            aria-label="Habitación anterior"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            className={`${arrowClass} left-0`}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Habitación siguiente"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            className={`${arrowClass} right-0`}
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </>
      )}
    </div>
  );
}
