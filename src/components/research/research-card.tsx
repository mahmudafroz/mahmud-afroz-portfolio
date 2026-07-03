import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/shared/badge";
import type { ResearchItem } from "@/data/research";

function ResearchAction({ action }: { action: { label: string; href: string } }) {
  return (
    <a
      className="inline-flex min-h-10 items-center gap-2 rounded-md border border-border px-3 text-xs font-semibold text-foreground outline-none transition hover:border-foreground/20 hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      href={action.href}
      target="_blank"
      rel="noreferrer"
    >
      {action.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <article className="surface-card flex flex-col p-5">
      <div className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
        <span className="rounded-md border border-border px-2.5 py-1">{item.type}</span>
        <span className="rounded-md border border-border px-2.5 py-1">{item.year}</span>
      </div>
      <h2 className="mt-5 text-lg font-semibold tracking-normal text-foreground">{item.title}</h2>
      <p className="mt-2 text-sm font-semibold text-muted-foreground">{item.venue}</p>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.topics.map((topic) => (
          <Badge key={topic}>{topic}</Badge>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-3 pt-5">
        {item.primaryAction ? <ResearchAction action={item.primaryAction} /> : null}
        {item.secondaryAction ? <ResearchAction action={item.secondaryAction} /> : null}
      </div>
    </article>
  );
}
