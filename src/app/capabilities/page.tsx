import type { Metadata } from "next";
import { Database, GraduationCap, Map, Wrench } from "lucide-react";

import { Badge } from "@/components/shared/badge";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Geospatial Capabilities",
  description:
    "Geospatial tools, workflows, and methods used by Mahmud Afroz across utility GIS, spatial analysis, research, and GIS education."
};

const capabilitySections = [
  {
    title: "Geospatial Platforms",
    label: "Mapping systems",
    icon: Map,
    summary: "Desktop, enterprise, open-source, photogrammetry, and image-analysis environments.",
    methods: ["Geodatabase workflows", "Map production", "Enterprise GIS", "Remote sensing"]
  },
  {
    title: "Data & Programming",
    label: "Technical workflows",
    icon: Database,
    summary: "Data preparation, scripting, notebooks, relational data, and reproducible documentation.",
    methods: ["Python notebooks", "SQL querying", "Version control", "Structured QA"]
  },
  {
    title: "Utility GIS Operations",
    label: "Asset data",
    icon: Wrench,
    summary: "Utility data editing, versioned records, as-built interpretation, and operational mapping.",
    methods: ["Versioned databases", "As-built integration", "QA/QC review", "Operational support"]
  },
  {
    title: "Research & Visualization",
    label: "Applied analysis",
    icon: GraduationCap,
    summary: "Spatial analysis, dashboards, GIS instruction, literature workflows, and research communication.",
    methods: ["Hazard modeling", "Dashboards", "GIS training", "Research synthesis"]
  }
] as const;

const accentClasses = [
  "capability-violet",
  "capability-blue",
  "capability-green",
  "capability-amber"
] as const;

export default function CapabilitiesPage() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-reading text-center">
          <h1 className="text-4xl font-bold tracking-normal text-foreground md:text-6xl">
            Geospatial Capabilities
          </h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
            Tools, workflows, and methods used across utility GIS, spatial analysis,
            research, and GIS education.
          </p>
        </header>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {capabilitySections.map((section, index) => {
            const Icon = section.icon;
            const category = skillCategories[index];
            return (
              <article
                key={section.title}
                className={`surface-card capability-card ${accentClasses[index] ?? accentClasses[0]} p-5 md:p-6`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="capability-icon flex h-9 w-9 items-center justify-center rounded-md">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] uppercase text-muted-foreground">
                        {section.label}
                      </p>
                      <h2 className="capability-title text-lg font-semibold">{section.title}</h2>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{section.summary}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {section.methods.map((method) => (
                    <div key={method} className="rounded-md border border-border bg-muted px-3 py-2">
                      <p className="text-xs font-semibold text-foreground">{method}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
