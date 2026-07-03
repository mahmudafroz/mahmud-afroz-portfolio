"use client";

import { useMemo, useState } from "react";

import { ResearchCard } from "@/components/research/research-card";
import { researchFilters, researchItems, type ResearchFilter } from "@/data/research";
import { cn } from "@/lib/utils";

export function ResearchFilters() {
  const [activeFilter, setActiveFilter] = useState<ResearchFilter>("All");
  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return researchItems;
    return researchItems.filter((item) => item.filters.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" aria-label="Research filters">
        {researchFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            className={cn(
              "button min-h-10 rounded-md border border-border px-3 text-xs font-semibold outline-none transition focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              activeFilter === filter
                ? "bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground hover:text-foreground"
            )}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <ResearchCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
