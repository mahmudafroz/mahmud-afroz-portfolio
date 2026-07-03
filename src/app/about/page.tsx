import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, Briefcase, Download, GraduationCap, Sparkles } from "lucide-react";

import { Badge } from "@/components/shared/badge";
import { educationEntries, experienceEntries } from "@/data/experience";
import { resumeAsset } from "@/data/profile";
import { researchItems } from "@/data/research";
import { skillCategories } from "@/data/skills";
import { assetPath, publicAssetExists } from "@/lib/assets";

export const metadata: Metadata = {
  title: "About Mahmud",
  description:
    "About Mahmud Afroz, a GIS professional focused on utility GIS, spatial analysis, remote sensing, and geospatial research."
};

const interests = [
  "Utility GIS",
  "Spatial data quality",
  "Remote sensing",
  "Hazard modeling",
  "GIS education",
  "Applied geospatial research"
] as const;

export default function AboutPage() {
  const hasPortrait = publicAssetExists("images/mahmud-afroz-portrait.jpg");
  const hasResume = publicAssetExists(resumeAsset.relativePath);

  return (
    <section className="section-y">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="portrait flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-muted text-2xl font-bold ring-4 ring-foreground/5">
            {hasPortrait ? (
              <Image
                src={assetPath("/images/mahmud-afroz-portrait.jpg")}
                alt="Portrait of Mahmud Afroz"
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            ) : (
              <span aria-label="Mahmud Afroz initials">MA</span>
            )}
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-normal text-foreground md:text-5xl">
              Mahmud Afroz
            </h1>
            <p className="mt-2 text-base font-medium text-muted-foreground">
              GIS Technician & Geographic Data Analyst
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Utility GIS", "Spatial Analysis", "Remote Sensing", "GIS Education"].map((chip) => (
                <Badge key={chip}>{chip}</Badge>
              ))}
            </div>
            {hasResume ? (
              <a className="button button-secondary mt-5" href={assetPath(resumeAsset.href)} download>
                <Download className="h-4 w-4" aria-hidden="true" />
                {resumeAsset.label}
              </a>
            ) : null}
          </div>
        </header>

        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
            <BookOpen className="h-4 w-4" aria-hidden="true" /> Professional Summary
          </h2>
          <article className="surface-card mt-5 p-6">
            <p className="text-sm leading-7 text-muted-foreground md:text-base">
              Mahmud Afroz is a GIS professional with experience in utility data
              management, geospatial systems, spatial analysis, remote sensing, GIS
              education, technical operations, and hazard research. His work focuses on
              maintaining reliable spatial information, supporting practical mapping
              needs, and applying geospatial methods to real-world operational and
              research questions.
            </p>
          </article>
        </section>

        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
            <Sparkles className="h-4 w-4" aria-hidden="true" /> Skills & Expertise
          </h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {skillCategories.map((category) => (
              <article key={category.name} className="surface-card p-5">
                <h3 className="text-base font-semibold text-foreground">{category.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
            <Briefcase className="h-4 w-4" aria-hidden="true" /> Work Experience
          </h2>
          <div className="mt-5 space-y-5">
            {experienceEntries.map((entry) => (
              <article key={entry.id} className="surface-card p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{entry.role}</h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {entry.organization}
                    </p>
                  </div>
                  <span className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground">
                    {entry.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{entry.summary}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted-foreground">
                  {entry.bullets.slice(0, 3).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
            <BookOpen className="h-4 w-4" aria-hidden="true" /> Research & Publications
          </h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {researchItems.map((item) => (
              <article key={item.id} className="surface-card p-5">
                <div className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                  <span className="rounded-md border border-border px-2.5 py-1">{item.type}</span>
                  <span className="rounded-md border border-border px-2.5 py-1">{item.year}</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{item.venue}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
            <GraduationCap className="h-4 w-4" aria-hidden="true" /> Education
          </h2>
          <article className="surface-card mt-5 p-6">
            <div className="grid gap-5 md:grid-cols-3">
              {educationEntries.map((entry) => (
                <div key={entry.degree}>
                  <h3 className="text-base font-semibold text-foreground">{entry.degree}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{entry.institution}</p>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">{entry.detail}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">Professional Interests</h2>
          <article className="surface-card mt-5 p-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {interests.map((interest) => (
                <div key={interest} className="rounded-md border border-border bg-muted px-3 py-2 text-sm font-semibold text-foreground">
                  {interest}
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}
