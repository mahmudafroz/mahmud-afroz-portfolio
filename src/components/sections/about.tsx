import Link from "next/link";
import { ArrowRight, Database, GraduationCap, Layers, Map, Wrench } from "lucide-react";

import { Badge } from "@/components/shared/badge";
import { SectionHeader } from "@/components/shared/section-header";
import { skillCategories } from "@/data/skills";

const icons = [Map, Database, Wrench, GraduationCap] as const;
const accentClasses = [
  "capability-violet",
  "capability-blue",
  "capability-green",
  "capability-amber"
] as const;

export function About() {
  return (
    <section className="section-y relative overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-80 max-w-5xl rounded-full bg-foreground/5 blur-3xl" />
      <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Me"
          title="Building Reliable GIS Workflows & Spatial Insight"
          description="GIS professional focused on utility data management, spatial analysis, remote sensing, GIS education, and geospatial research."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1.7fr]">
          <article className="surface-card p-6 md:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-foreground">
                <Layers className="h-4 w-4" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold text-foreground">Background</h3>
            </div>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Mahmud Afroz is a GIS professional with experience across utility GIS
              operations, geospatial data management, remote sensing, GIS education, and
              hazard research. His work combines accurate data, practical mapping,
              technical workflows, and research-driven analysis.
            </p>
          </article>

          <div className="grid gap-5 md:grid-cols-2">
            {skillCategories.map((category, index) => {
              const Icon = icons[index] ?? Map;
              return (
                <article
                  key={category.name}
                  className={`surface-card capability-card ${accentClasses[index] ?? accentClasses[0]} p-5`}
                >
                  <div className="flex items-center gap-3">
                    <span className="capability-icon flex h-9 w-9 items-center justify-center rounded-md">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="capability-title text-base font-semibold">{category.name}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link className="button button-primary" href="/about">
            Learn More About Me <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
