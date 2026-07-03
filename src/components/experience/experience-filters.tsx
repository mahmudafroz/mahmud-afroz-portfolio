"use client";

import { useMemo, useState } from "react";

import { ExperienceCard } from "@/components/experience/experience-card";
import { experienceEntries } from "@/data/experience";
import { cn } from "@/lib/utils";

const filters = [
  "All",
  "Utility GIS",
  "GIS Education",
  "Technical Operations",
  "Teaching",
  "Internship"
] as const;

type Filter = (typeof filters)[number];

function matchesFilter(entryTags: readonly string[], filter: Filter) {
  if (filter === "All") return true;
  if (filter === "Technical Operations") return entryTags.some((tag) => ["Lab Support", "Technical Support", "Licensing"].includes(tag));
  if (filter === "Internship") return entryTags.includes("Remote Sensing") || entryTags.includes("Documentation");
  return entryTags.includes(filter) || entryTags.some((tag) => tag.includes(filter));
}

export function ExperienceFilters() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const filteredEntries = useMemo(
    () => experienceEntries.filter((entry) => matchesFilter(entry.tags, activeFilter)),
    [activeFilter]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" aria-label="Experience filters">
        {filters.map((filter) => (
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
      <div className="mt-8 flex flex-col gap-5">
        {filteredEntries.map((entry) => (
          <ExperienceCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
