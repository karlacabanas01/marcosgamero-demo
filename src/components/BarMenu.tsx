"use client";

import { useMemo, useState } from "react";
import { Search, Martini, Wine, UtensilsCrossed, Leaf } from "lucide-react";

export type MenuItem = {
  name: string;
  desc: string;
  price: string;
};

export type MenuSection = {
  category: string;
  icon: "cocteles" | "clasicos" | "compartir" | "sinalcohol";
  items: MenuItem[];
};

const categoryIcons = {
  cocteles: Martini,
  clasicos: Wine,
  compartir: UtensilsCrossed,
  sinalcohol: Leaf,
};

export function BarMenu({ menu }: { menu: MenuSection[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return menu
      .filter((section) => !activeCategory || section.category === activeCategory)
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => {
          if (!normalizedQuery) return true;
          return (
            item.name.toLowerCase().includes(normalizedQuery) ||
            item.desc.toLowerCase().includes(normalizedQuery)
          );
        }),
      }))
      .filter((section) => section.items.length > 0);
  }, [menu, activeCategory, normalizedQuery]);

  const totalResults = filtered.reduce((sum, s) => sum + s.items.length, 0);

  return (
    <div>
      {/* Buscador */}
      <div className="relative max-w-[420px] mx-auto mb-8">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted"
          strokeWidth={1.75}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar en la carta…"
          className="w-full font-sans text-[14px] text-dark placeholder:text-text-muted bg-bg-light border border-border rounded-full pl-11 pr-4 py-3 focus:outline-none focus:border-dark transition-colors"
        />
      </div>

      {/* Tabs de categoría */}
      <div className="flex flex-wrap justify-center gap-2 mb-14">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={`font-sans text-[12.5px] font-medium tracking-[0.02em] px-4 py-2 rounded-full border transition-colors ${
            activeCategory === null
              ? "bg-dark text-bg-light border-dark"
              : "bg-transparent text-dark border-border hover:border-dark"
          }`}
        >
          Todo
        </button>
        {menu.map((section) => (
          <button
            key={section.category}
            type="button"
            onClick={() => setActiveCategory(section.category)}
            className={`font-sans text-[12.5px] font-medium tracking-[0.02em] px-4 py-2 rounded-full border transition-colors ${
              activeCategory === section.category
                ? "bg-dark text-bg-light border-dark"
                : "bg-transparent text-dark border-border hover:border-dark"
            }`}
          >
            {section.category}
          </button>
        ))}
      </div>

      {/* Resultados */}
      {totalResults === 0 ? (
        <p className="text-center text-text-muted text-[14px] py-12">
          No encontramos nada con &ldquo;{query}&rdquo;. Prueba con otro
          término.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {filtered.map((section) => {
            const Icon = categoryIcons[section.icon];
            return (
              <div key={section.category}>
                <div className="flex items-center gap-2.5 pb-4 border-b border-border">
                  <Icon className="w-[18px] h-[18px] text-dark" strokeWidth={1.5} />
                  <h3 className="font-serif text-[20px] font-normal">
                    {section.category}
                  </h3>
                </div>
                <div className="flex flex-col divide-y divide-border">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="py-5 first:pt-6 flex items-start gap-4"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-3">
                          <p className="font-sans text-[14.5px] font-medium text-dark min-w-0">
                            {item.name}
                          </p>
                          <span className="font-serif text-[15px] text-dark whitespace-nowrap shrink-0">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-text-muted text-[13px] leading-[1.6] mt-1.5 max-w-[42ch]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
