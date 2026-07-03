import { Badge } from "@/components/shared/badge";
import type { ExperienceEntry } from "@/data/experience";

export function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className="surface-card p-5 md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3 font-mono text-xs text-muted-foreground">
        <span className="rounded-md border border-border px-2.5 py-1">{entry.employmentType}</span>
        <span className="rounded-md border border-border px-2.5 py-1">{entry.period}</span>
      </div>
      <h2 className="mt-5 text-xl font-semibold tracking-normal text-foreground">{entry.role}</h2>
      <p className="mt-2 text-sm font-semibold text-muted-foreground">
        {entry.organization} | {entry.location}
      </p>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">{entry.summary}</p>
      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted-foreground">
        {entry.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {entry.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      {entry.confidentialityNote ? (
        <p className="mt-5 rounded-md border border-border bg-muted px-3 py-2 text-sm leading-6 text-muted-foreground">
          {entry.confidentialityNote}
        </p>
      ) : null}
    </article>
  );
}
