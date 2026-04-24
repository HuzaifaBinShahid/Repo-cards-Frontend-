import { Suspense } from "react";
import { InstallCommand } from "@/components/install-command";
import { GhStarButton } from "@/components/gh-star-button";
import { CardDeck } from "@/components/sections/card-deck";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="orb" aria-hidden />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <a
          href={site.npm}
          target="_blank"
          rel="noreferrer"
          className="mb-8 inline-flex items-center gap-2 rounded-full hairline px-3 py-1 font-mono text-[11px] text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          <span>v0.1.1 on npm</span>
          <span className="text-[var(--color-fg-subtle)]">·</span>
          <span>fully offline</span>
        </a>

        <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-6xl lg:text-7xl">
          Stop grepping.{" "}
          <span className="text-[var(--color-fg-muted)]">Start reading.</span>
        </h1>

        <p className="mt-6 max-w-xl text-balance text-base text-[var(--color-fg-muted)] md:text-lg">
          Pre-computed markdown context cards for AI coding agents. Offline,
          free, and already there before the first prompt.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <InstallCommand value={site.install} />
          <Suspense
            fallback={
              <span className="inline-flex h-9 w-[140px] rounded-full hairline" />
            }
          >
            <GhStarButton />
          </Suspense>
        </div>

        <div className="mt-20 w-full">
          <CardDeck />
        </div>
      </div>
    </section>
  );
}
