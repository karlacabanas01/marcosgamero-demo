"use client";

import { useEffect, useState } from "react";
import { DateRangePicker } from "./DateRangePicker";
import { Dropdown } from "./Dropdown";
import { useToast } from "./ToastProvider";

function todayISO(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

const GUEST_OPTIONS = [
  "1 habitación, 2 adultos",
  "1 habitación, 1 adulto",
  "2 habitaciones, 4 adultos",
];

export function BookingBar() {
  const { showToast } = useToast();
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(GUEST_OPTIONS[0]);

  useEffect(() => {
    setCheckin(todayISO(0));
    setCheckout(todayISO(1));
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    showToast(
      `Disponibilidad simulada para "${guests}". Esto es una maqueta demo.`
    );
  }

  return (
    <div id="reservar" className="relative max-w-[1180px] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-bg-light rounded-[3px] shadow-[0_20px_44px_-18px_rgba(13,15,18,0.4)] px-6 py-4 grid grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_auto] gap-x-8 gap-y-4 items-end divide-y md:divide-y-0 md:divide-x divide-border"
      >
        <div className="col-span-2 md:col-span-1 md:pr-8">
          <span className="text-[10.5px] tracking-[0.06em] uppercase text-text-muted">
            Location
          </span>
          <p className="font-sans text-[14px] font-medium text-dark mt-0.5">
            Marcos Gamero, Talca
          </p>
        </div>

        <div className="pt-4 md:pt-0 md:px-8">
          <DateRangePicker
            checkin={checkin}
            checkout={checkout}
            onChange={(ci, co) => {
              setCheckin(ci);
              setCheckout(co);
            }}
          />
        </div>

        <div className="pt-4 md:pt-0 md:px-8">
          <Dropdown
            label="Guests"
            name="guests"
            options={GUEST_OPTIONS}
            value={guests}
            onChange={setGuests}
          />
        </div>

        <div className="col-span-2 md:col-span-1 md:pl-8">
          <button
            type="submit"
            className="w-full md:w-auto h-11 px-9 bg-dark text-bg-light font-sans text-[13px] font-medium tracking-[0.04em] rounded-[2px] transition-colors duration-300 hover:bg-botanical"
          >
            Book
          </button>
        </div>
      </form>
    </div>
  );
}
