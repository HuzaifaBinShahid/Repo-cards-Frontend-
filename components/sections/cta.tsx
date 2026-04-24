import { ArrowUpRight } from "lucide-react";
import { InstallCommand } from "@/components/install-command";
import { site } from "@/lib/content";

export function Cta() {
  return (
    <section className="relative border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl hairline bg-[color-mix(in_srgb,_var(--color-fg)_2%,_transparent)] px-8 py-16 md:px-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(600px 200px at 50% 0%, color-mix(in srgb, var(--color-accent) 14%, transparent) 0%, transparent 60%)",
          }}
        />
        <div className="relative flex flex-col items-center text-center">
          <h2 className="max-w-xl text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">
            Your next session could already have context.
          </h2>
          <p className="mt-5 max-w-md text-[var(--color-fg-muted)]">
            One command. Offline. Free forever. Works with every agent you
            already use.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <InstallCommand value={site.install} />
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
            >
              Read the docs
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
