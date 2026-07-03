"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Briefcase, Compass, Home, Menu, User, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { navLinks } from "@/data/profile";
import { cn } from "@/lib/utils";

const descriptions: Record<string, string> = {
  "/": "Overview and highlights",
  "/about": "Bio and expertise",
  "/experience": "Professional GIS and technical work",
  "/research": "Publications and presentations",
  "/capabilities": "Geospatial tools and methods"
};

const icons = {
  "/": Home,
  "/about": User,
  "/experience": Briefcase,
  "/research": BookOpen,
  "/capabilities": Compass
} as const;

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const previousBodyOverflow = useRef("");

  const close = useCallback(() => {
    setOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }, []);

  useEffect(() => {
    if (!open) return;

    const focusableSelector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const getFocusable = () =>
      Array.from(sheetRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? []).filter(
        (element) => !element.hasAttribute("disabled") && element.offsetParent !== null
      );

    previousBodyOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = getFocusable();
    (focusable[0] ?? sheetRef.current)?.focus();

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const currentFocusable = getFocusable();
      if (currentFocusable.length === 0) {
        event.preventDefault();
        sheetRef.current?.focus();
        return;
      }

      const first = currentFocusable[0];
      const last = currentFocusable[currentFocusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousBodyOverflow.current;
    };
  }, [close, open]);

  const drawer =
    open && typeof document !== "undefined"
      ? createPortal(
          <>
            <div aria-hidden="true" className="mobile-nav-overlay lg:hidden" onClick={close} />
            <div
              ref={sheetRef}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-navigation-title"
              aria-describedby="mobile-navigation-description"
              tabIndex={-1}
              className="mobile-nav-drawer lg:hidden"
            >
              <div className="mobile-nav-content">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 id="mobile-navigation-title" className="text-lg font-semibold">
                      Navigation
                    </h2>
                    <p
                      id="mobile-navigation-description"
                      className="mt-1 text-sm text-muted-foreground"
                    >
                      Explore Mahmud&apos;s portfolio.
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label="Close navigation menu"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-foreground outline-none transition hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    onClick={close}
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <div className="mt-6 h-px bg-border" />

                <div className="mobile-nav-main">
                  <p className="px-2 text-xs font-semibold text-muted-foreground">Main</p>
                  <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                    {navLinks.map((item) => {
                      const Icon = icons[item.href];
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          aria-current={isActive(pathname, item.href) ? "page" : undefined}
                          className={cn(
                            "mobile-nav-item text-sm outline-none transition hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                            isActive(pathname, item.href) && "bg-muted"
                          )}
                          onClick={close}
                        >
                          <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                          <span className="min-w-0">
                            <span className="block font-semibold text-foreground">
                              {item.label}
                            </span>
                            <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                              {descriptions[item.href]}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                <div className="my-6 h-px bg-border" />

                <div className="mt-auto">
                  <p className="px-2 text-xs font-semibold text-muted-foreground">Preferences</p>
                  <div className="mt-2">
                    <ThemeToggle variant="row" />
                  </div>
                </div>
              </div>
            </div>
          </>,
          document.body
        )
      : null;

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label="Open navigation menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="button inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background text-foreground shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-4 w-4" aria-hidden="true" />
      </button>
      {drawer}
    </div>
  );
}
