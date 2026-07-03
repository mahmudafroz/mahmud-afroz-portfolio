import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "badge inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold leading-none transition-colors",
        variant === "default"
          ? "border-transparent bg-muted text-muted-foreground"
          : "border-border bg-transparent text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
