import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  className
}: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto max-w-reading", centered && "text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold text-muted-foreground">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-normal text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
