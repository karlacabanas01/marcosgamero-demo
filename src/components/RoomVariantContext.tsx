"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { RoomVariant } from "@/lib/rooms-data";

type Ctx = {
  variants: RoomVariant[];
  index: number;
  setIndex: (i: number) => void;
};

const VariantContext = createContext<Ctx | null>(null);

export function RoomVariantProvider({
  variants,
  children,
}: {
  variants: RoomVariant[];
  children: ReactNode;
}) {
  const [index, setIndex] = useState(0);
  return (
    <VariantContext.Provider value={{ variants, index, setIndex }}>
      {children}
    </VariantContext.Provider>
  );
}

export function useRoomVariant() {
  const ctx = useContext(VariantContext);
  if (!ctx) throw new Error("useRoomVariant must be used within RoomVariantProvider");
  return ctx;
}
