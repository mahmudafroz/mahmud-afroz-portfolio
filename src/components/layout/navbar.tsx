"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks, PROFILE } from "@/data/profile";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-container items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold text-foreground outline-none transition hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {PROFILE.portfolioLabel}
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center text-xs font-semibold lg:flex" aria-label="Primary navigation">
            {navLinks.map((item, index) => (
              <span key={item.href} className="flex items-center">
                {index > 0 ? <span className="mx-2 text-muted-foreground">|</span> : null}
                <Link
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={cn(
                    "relative text-muted-foreground outline-none transition hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform hover:after:scale-x-100",
                    isActive(pathname, item.href) && "text-foreground after:scale-x-100"
                  )}
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
