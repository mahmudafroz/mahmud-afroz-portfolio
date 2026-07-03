import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/shared/badge";
import { SectionHeader } from "@/components/shared/section-header";
import { featuredWorkItems } from "@/data/research";

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function ActionLink({ href, children }: { href: string; children: ReactNode }) {
  const className =
    "inline-flex min-h-10 items-center gap-2 rounded-md border border-border px-3 text-xs font-semibold text-foreground outline-none transition hover:border-foreground/20 hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  if (isExternal(href)) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

export function FeaturedWork() {
  return (
    <section className="section-y border-t border-border">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Experience & Research"
          description="A selection of professional GIS work, research, and geospatial contributions."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredWorkItems.map((item) => (
            <article key={item.title} className="surface-card flex flex-col p-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-muted-foreground">
                <Badge variant="outline">{item.category}</Badge>
                <Badge variant="outline">{item.technology}</Badge>
                {item.featured ? <Badge>Featured</Badge> : null}
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-normal text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted-foreground">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] text-muted-foreground">
                {item.metadata.map((meta) => (
                  <span key={meta} className="rounded-md border border-border px-2 py-1">
                    {meta}
                  </span>
                ))}
              </div>
              {item.confidentialityNote ? (
                <p className="mt-4 rounded-md border border-border bg-muted px-3 py-2 text-xs leading-5 text-muted-foreground">
                  {item.confidentialityNote}
                </p>
              ) : null}
              <div className="mt-auto flex flex-wrap gap-3 pt-5">
                <ActionLink href={item.actionHref}>{item.actionLabel}</ActionLink>
                {item.secondaryActionHref && item.secondaryActionLabel ? (
                  <ActionLink href={item.secondaryActionHref}>{item.secondaryActionLabel}</ActionLink>
                ) : null}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link className="button button-secondary" href="/experience">
            View Full Experience <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
