"use client";

import { Fragment, useState, type ReactNode } from "react";
import { CardCarousel } from "./CardCarousel";

type Tab = { id: string; label: string };
type FilterItem = { key: string; category: string; card: ReactNode };

const ALL = "all";

export function RoomFilterCarousel({
  tabs,
  items,
}: Readonly<{ tabs: Tab[]; items: FilterItem[] }>) {
  const [active, setActive] = useState(ALL);
  const allTabs = [{ id: ALL, label: "Todas" }, ...tabs];
  const visible =
    active === ALL ? items : items.filter((item) => item.category === active);

  return (
    <>
      <div
        role="tablist"
        aria-label="Filtrar habitaciones"
        className="flex gap-1 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-[76px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {allTabs.map((tab) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(tab.id)}
              className={`shrink-0 whitespace-nowrap h-10 flex items-center rounded-[3px] border px-[21px] font-jost text-[16px] font-normal transition-colors duration-300 ${
                selected
                  ? "border-[#232323] text-[#111]"
                  : "border-transparent text-[#545454] hover:text-[#111]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Remount on filter change so scroll position and arrow state reset. */}
      <CardCarousel key={active}>
        {visible.map((item) => (
          <Fragment key={item.key}>{item.card}</Fragment>
        ))}
      </CardCarousel>
    </>
  );
}
