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

const GUEST_OPTIONS = ["1 adulto", "2 adultos", "3 adultos"];
const ROOM_OPTIONS = [
  "Habitación Patio",
  "Habitación Galería",
  "Suite Fundadores",
];

export function BookingBar() {
  const { showToast } = useToast();
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(GUEST_OPTIONS[1]);
  const [roomtype, setRoomtype] = useState(ROOM_OPTIONS[0]);

  useEffect(() => {
    setCheckin(todayISO(0));
    setCheckout(todayISO(1));
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    showToast(
      `Disponibilidad simulada para "${roomtype}". Esto es una maqueta demo.`
    );
  }

  return (
    <div id="reservar" className="relative max-w-[1180px] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-terracotta/94 backdrop-blur-sm rounded-md shadow-[0_24px_48px_-18px_rgba(20,40,31,0.45)] p-4 md:p-5 grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_auto] gap-3 md:gap-3.5 items-end"
      >
        <div className="col-span-2 md:col-span-1">
          <DateRangePicker
            checkin={checkin}
            checkout={checkout}
            onChange={(ci, co) => {
              setCheckin(ci);
              setCheckout(co);
            }}
          />
        </div>

        <Dropdown
          label="Adultos"
          name="guests"
          options={GUEST_OPTIONS}
          value={guests}
          onChange={setGuests}
        />

        <Dropdown
          label="Habitación"
          name="roomtype"
          options={ROOM_OPTIONS}
          value={roomtype}
          onChange={setRoomtype}
        />

        <button
          type="submit"
          className="col-span-2 md:col-span-1 h-11 min-w-[140px] px-8 rounded bg-carbon text-linen font-semibold text-[13px] tracking-[0.04em] whitespace-nowrap transition-all duration-300 hover:bg-terracotta-deep"
        >
          Buscar
        </button>
      </form>
    </div>
  );
}
