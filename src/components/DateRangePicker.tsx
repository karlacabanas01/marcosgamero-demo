"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type DateRangePickerProps = {
  checkin: string;
  checkout: string;
  onChange: (checkin: string, checkout: string) => void;
};

const WEEKDAYS = ["L", "M", "M", "J", "V", "S", "D"];
const MONTH_NAMES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function toISO(d: Date) {
  return d.toISOString().slice(0, 10);
}

function startOfDay(d: Date) {
  const n = new Date(d);
  n.setHours(0, 0, 0, 0);
  return n;
}

function formatDisplay(iso: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("es-CL", { day: "2-digit", month: "short" });
}

function buildMonthGrid(year: number, month: number) {
  const first = new Date(year, month, 1);
  const startWeekday = (first.getDay() + 6) % 7; // 0 = Monday
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(year, month, day));
  }
  return cells;
}

export function DateRangePicker({
  checkin,
  checkout,
  onChange,
}: DateRangePickerProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const [cursor, setCursor] = useState(() => {
    const base = checkin ? new Date(checkin) : new Date();
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    function updatePosition() {
      const rect = triggerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setCoords({
        top: rect.bottom + 10,
        left: rect.left,
        width: rect.width,
      });
    }

    updatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        triggerRef.current?.contains(target) ||
        panelRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const today = startOfDay(new Date());
  const checkinDate = checkin ? startOfDay(new Date(checkin)) : null;
  const checkoutDate = checkout ? startOfDay(new Date(checkout)) : null;

  function handleDayClick(day: Date) {
    const clicked = startOfDay(day);
    if (clicked < today) return;

    if (!checkinDate || (checkinDate && checkoutDate)) {
      onChange(toISO(clicked), "");
      return;
    }

    if (clicked <= checkinDate) {
      onChange(toISO(clicked), "");
      return;
    }

    onChange(toISO(checkinDate), toISO(clicked));
    setOpen(false);
  }

  function renderMonth(offset: number) {
    const year = cursor.getFullYear();
    const month = cursor.getMonth() + offset;
    const normalized = new Date(year, month, 1);
    const cells = buildMonthGrid(
      normalized.getFullYear(),
      normalized.getMonth()
    );

    return (
      <div className="flex-1 min-w-[240px]">
        <p className="font-serif text-[15px] uppercase tracking-[0.08em] text-dark text-center mb-3">
          {MONTH_NAMES[normalized.getMonth()]} {normalized.getFullYear()}
        </p>
        <div className="grid grid-cols-7 gap-y-1">
          {WEEKDAYS.map((w, i) => (
            <div
              key={`${w}-${i}`}
              className="text-[10px] font-semibold uppercase tracking-wide text-text-muted text-center py-1"
            >
              {w}
            </div>
          ))}
          {cells.map((day, i) => {
            if (!day) return <div key={`empty-${i}`} />;
            const d = startOfDay(day);
            const isPast = d < today;
            const isCheckin = checkinDate && d.getTime() === checkinDate.getTime();
            const isCheckout =
              checkoutDate && d.getTime() === checkoutDate.getTime();
            const inRange =
              checkinDate &&
              checkoutDate &&
              d > checkinDate &&
              d < checkoutDate;
            const isEdge = isCheckin || isCheckout;

            return (
              <button
                key={d.toISOString()}
                type="button"
                disabled={isPast}
                onClick={() => handleDayClick(d)}
                className={`h-8 text-[12.5px] rounded-full transition-colors duration-150 ${
                  isPast
                    ? "text-border cursor-not-allowed"
                    : isEdge
                      ? "bg-dark text-bg-light font-semibold"
                      : inRange
                        ? "bg-botanical/14 text-dark"
                        : "text-dark hover:bg-botanical/10"
                }`}
              >
                {d.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const panel = open && (
    <div
      ref={panelRef}
      style={{ top: coords.top, left: coords.left }}
      className="fixed z-[100] bg-bg-light border border-border rounded-[2px] shadow-[0_24px_48px_-18px_rgba(13,15,18,0.28)] p-5 flex flex-col gap-4 w-[min(92vw,560px)]"
    >
      <div className="flex items-center justify-between">
        <button
          type="button"
          aria-label="Mes anterior"
          onClick={() =>
            setCursor((c) => new Date(c.getFullYear(), c.getMonth() - 1, 1))
          }
          className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-dark hover:border-dark transition-colors"
        >
          ‹
        </button>
        <span className="text-[11px] uppercase tracking-[0.1em] text-text-muted">
          Llegada y salida
        </span>
        <button
          type="button"
          aria-label="Mes siguiente"
          onClick={() =>
            setCursor((c) => new Date(c.getFullYear(), c.getMonth() + 1, 1))
          }
          className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-dark hover:border-dark transition-colors"
        >
          ›
        </button>
      </div>

      <div className="flex gap-6 flex-col sm:flex-row">
        {renderMonth(0)}
        <div className="hidden sm:block">{renderMonth(1)}</div>
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-border">
        <span className="text-xs text-text-muted">
          {checkin && checkout
            ? `${formatDisplay(checkin)} – ${formatDisplay(checkout)}`
            : "Elige tu fecha de llegada"}
        </span>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-[13px] font-medium text-dark underline underline-offset-2 hover:text-botanical transition-colors"
        >
          Listo
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col gap-1">
      <span
        id="daterange-label"
        className="text-[11px] tracking-[0.04em] uppercase text-text-muted"
      >
        Fechas
      </span>
      <button
        ref={triggerRef}
        type="button"
        aria-labelledby="daterange-label"
        onClick={() => setOpen((v) => !v)}
        className="font-sans text-[14px] font-medium text-dark text-left whitespace-nowrap py-1"
      >
        {checkin ? formatDisplay(checkin) : "Check-in"}
        {" → "}
        {checkout ? formatDisplay(checkout) : "Check-out"}
      </button>

      {mounted && panel ? createPortal(panel, document.body) : null}
    </div>
  );
}
