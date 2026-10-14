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
  labelClassName = "text-text-muted",
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
      setCoords({ top: rect.bottom + 10, left: rect.left, width: Math.max(rect.width, 180) });
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
      className="fixed z-[100] bg-bg-light border border-border rounded-[2px] shadow-[0_24px_48px_-18px_rgba(13,15,18,0.28)] py-1.5 overflow-hidden"
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
              ? "bg-botanical/14 text-dark font-medium"
              : "text-dark hover:bg-botanical/8"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col gap-1">
      <span
        id={labelId}
        className={`text-[11px] tracking-[0.04em] uppercase ${labelClassName}`}
      >
        {label}
      </span>
      <button
        ref={triggerRef}
        type="button"
        aria-labelledby={labelId}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="w-full font-sans text-[14px] font-medium text-dark text-left whitespace-nowrap py-1"
      >
        {value}
      </button>

      {mounted && panel ? createPortal(panel, document.body) : null}
    </div>
  );
}
