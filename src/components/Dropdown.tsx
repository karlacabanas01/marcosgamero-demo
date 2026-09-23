"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type DropdownProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  name?: string;
  labelClassName?: string;
};

export function Dropdown({
  label,
  options,
  value,
  onChange,
  name,
  labelClassName = "text-linen",
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const labelId = `${name ?? label}-label`.replace(/\s+/g, "-").toLowerCase();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    function updatePosition() {
      const rect = triggerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setCoords({ top: rect.bottom + 6, left: rect.left, width: rect.width });
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

  const panel = open && (
    <div
      ref={panelRef}
      style={{ top: coords.top, left: coords.left, width: coords.width }}
      className="fixed z-[100] bg-white border border-border rounded-md shadow-[0_24px_48px_-18px_rgba(20,40,31,0.45)] py-1.5 overflow-hidden"
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => {
            onChange(option);
            setOpen(false);
          }}
          className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 ${
            option === value
              ? "bg-terracotta/12 text-carbon font-semibold"
              : "text-carbon hover:bg-terracotta/8"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col gap-[7px]">
      <span
        id={labelId}
        className={`text-[11px] font-semibold tracking-[0.08em] uppercase ${labelClassName}`}
      >
        {label}
      </span>
      <div className="relative">
        <button
          ref={triggerRef}
          type="button"
          aria-labelledby={labelId}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="w-full font-body text-sm pl-3 pr-9 py-2.5 border border-border rounded bg-linen text-carbon text-left whitespace-nowrap"
        >
          {value}
        </button>
        <svg
          aria-hidden="true"
          viewBox="0 0 12 8"
          className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 ml-2 w-3 h-3 text-carbon-soft transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {mounted && panel ? createPortal(panel, document.body) : null}
    </div>
  );
}
