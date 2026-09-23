export function TemplateBanner() {
  return (
    <div className="fixed top-0 inset-x-0 z-[60] bg-carbon text-linen">
      <div className="max-w-[1180px] mx-auto px-6 py-2 flex items-center justify-center gap-2 text-center">
        <span className="font-display text-[11px] tracking-[0.08em] uppercase text-terracotta-light">
          Plantilla de diseño
        </span>
        <span className="hidden sm:inline text-[12px] text-linen/70">
          — nombre e historia de ejemplo, fotografías reales del hotel
        </span>
      </div>
    </div>
  );
}
