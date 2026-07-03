import type { Metadata } from "next";

import { ExperienceFilters } from "@/components/experience/experience-filters";

export const metadata: Metadata = {
  title: "Professional Experience",
  description:
    "Professional GIS, utility data, geospatial systems, research support, and teaching experience for Mahmud Afroz."
};

export default function ExperiencePage() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-reading text-center">
          <h1 className="text-4xl font-bold tracking-normal text-foreground md:text-6xl">
            Professional Experience
          </h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
            GIS, utility data, geospatial systems, research support, and teaching experience.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-5xl">
          <ExperienceFilters />
        </div>
      </div>
    </section>
  );
}
