import Link from "next/link";
import Image from "next/image";

import { PROFILE } from "@/data/profile";
import { assetPath } from "@/lib/assets";

type HeroProps = {
  hasPortrait: boolean;
};

export function Hero({ hasPortrait }: HeroProps) {
  return (
    <section className="mx-auto flex min-h-[calc(86vh-3.5rem)] max-w-container items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <div className="flex w-full max-w-4xl flex-col items-center">
        <div className="portrait flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-border bg-muted text-3xl font-bold text-foreground shadow-sm ring-4 ring-foreground/5 md:h-40 md:w-40 md:text-5xl">
          {hasPortrait ? (
            <Image
              src={assetPath("/images/mahmud-afroz-portrait.jpg")}
              alt="Portrait of Mahmud Afroz"
              width={160}
              height={160}
              className="h-full w-full object-cover"
            />
          ) : (
            <span aria-label="Mahmud Afroz initials">MA</span>
          )}
        </div>
        <h1 className="mt-9 text-5xl font-bold tracking-normal text-foreground md:text-6xl lg:text-7xl">
          Hi, I&apos;m Mahmud Afroz
        </h1>
        <p className="mt-5 max-w-3xl text-base font-medium leading-7 text-muted-foreground md:text-lg">
          {PROFILE.heroTagline}
        </p>
        <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
          <Link className="button button-primary" href="/about">
            About
          </Link>
          <Link className="button button-secondary" href="/experience">
            View Experience
          </Link>
        </div>
      </div>
    </section>
  );
}
