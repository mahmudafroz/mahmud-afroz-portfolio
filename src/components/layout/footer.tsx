import { GraduationCap } from "lucide-react";
import Link from "next/link";

import { PROFILE } from "@/data/profile";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
  { href: "/capabilities", label: "Capabilities" }
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-container gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-sm font-semibold text-foreground">Portfolio</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            &copy; 2026 {PROFILE.name}. All rights reserved.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-foreground">Quick Links</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:text-foreground" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-foreground">Connect</h2>
          <div className="mt-3 flex items-center gap-3">
            <a
              aria-label="Open LinkedIn profile"
              title="Open LinkedIn profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground outline-none transition hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-sm font-bold leading-none" aria-hidden="true">
                in
              </span>
            </a>
            <a
              aria-label="Open Google Scholar profile"
              title="Open Google Scholar profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground outline-none transition hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              href={PROFILE.googleScholar}
              target="_blank"
              rel="noreferrer"
            >
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
