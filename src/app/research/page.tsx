import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { ResearchFilters } from "@/components/research/research-filters";
import { PROFILE } from "@/data/profile";

export const metadata: Metadata = {
  title: "Research & Publications",
  description:
    "Geospatial research by Mahmud Afroz focused on seismic risk, remote sensing, flood susceptibility, and spatial analysis."
};

export default function ResearchPage() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-reading text-center">
          <h1 className="text-4xl font-bold tracking-normal text-foreground md:text-6xl">
            Research & Publications
          </h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
            Geospatial research focused on seismic risk, remote sensing, flood susceptibility,
            and spatial analysis.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-5xl">
          <ResearchFilters />
        </div>
        <div className="mt-10 text-center">
          <a className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground outline-none transition hover:opacity-75 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" href={PROFILE.googleScholar} target="_blank" rel="noreferrer">
            View full Google Scholar profile <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
