"use client";

import { Check, Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "system";

type ThemeToggleProps = {
  variant?: "icon" | "row";
};

const themeEvent = "portfolio-theme-change";

const options: Array<{ value: Theme; label: string; icon: typeof Sun }> = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor }
];

function readTheme(): Theme {
  if (typeof window === "undefined") return "system";
  const stored = window.localStorage.getItem("theme");
  return stored === "light" || stored === "dark" || stored === "system" ? stored : "dark";
}

function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const notify = () => callback();
  window.addEventListener("storage", notify);
  window.addEventListener(themeEvent, notify);
  media.addEventListener("change", notify);
  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener(themeEvent, notify);
    media.removeEventListener("change", notify);
  };
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = theme === "dark" || (theme === "system" && prefersDark);
  root.classList.toggle("dark", useDark);
  root.dataset.theme = theme;
}

export function ThemeToggle({ variant = "icon" }: ThemeToggleProps) {
  const theme = useSyncExternalStore<Theme>(subscribeTheme, readTheme, () => "system");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const current = options.find((option) => option.value === theme) ?? options[2];
  const CurrentIcon = current.icon;

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (!open) return;
    const handlePointer = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const selectTheme = (nextTheme: Theme) => {
    window.localStorage.setItem("theme", nextTheme);
    window.dispatchEvent(new Event(themeEvent));
    applyTheme(nextTheme);
    setOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Choose color theme"
        className={cn(
          "inline-flex items-center justify-center rounded-md text-foreground outline-none transition focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          variant === "icon" && "theme-trigger h-10 w-10",
          variant === "row" &&
            "surface-card w-full gap-3 px-3 py-3 text-left hover:bg-accent"
        )}
        onClick={() => setOpen((value) => !value)}
      >
        <CurrentIcon className="h-4 w-4" aria-hidden="true" />
        {variant === "row" ? (
          <span className="flex min-w-0 flex-1 flex-col">
            <span className="text-sm font-semibold">Theme</span>
            <span className="text-xs text-muted-foreground">Light, dark, or system</span>
          </span>
        ) : null}
      </button>
      {open ? (
        <div
          role="menu"
          className="absolute right-0 z-[80] mt-2 w-44 rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg"
        >
          {options.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={theme === option.value}
                className="flex min-h-11 w-full items-center gap-3 rounded-sm px-3 text-sm outline-none transition hover:bg-accent focus-visible:bg-accent"
                onClick={() => selectTheme(option.value)}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span className="flex-1 text-left">{option.label}</span>
                {theme === option.value ? <Check className="h-4 w-4" aria-hidden="true" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
