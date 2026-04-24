import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section
      id="how"
      className="relative border-t border-[var(--color-border)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--color-fg-subtle)]">
            How it works
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            Three commands. Every session after is zero-setup.
          </h2>
        </div>

        <ol className="relative grid gap-8 md:grid-cols-3 md:gap-6">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-[var(--color-border)] md:block"
          />
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-full hairline bg-[var(--color-bg-elevated)] font-mono text-xs text-[var(--color-fg-muted)]">
                {s.n}
              </div>
              <h3 className="text-lg font-medium tracking-[-0.01em]">
                {s.title}
              </h3>
              <div className="mt-3 inline-flex rounded-md hairline bg-[color-mix(in_srgb,_var(--color-fg)_2%,_transparent)] px-3 py-1.5 font-mono text-xs text-[var(--color-fg)]">
                <span className="mr-2 text-[var(--color-accent)]">
                  {s.cmd.startsWith("#") ? "#" : "$"}
                </span>
                <span>{s.cmd.replace(/^# /, "")}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                {s.blurb}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
