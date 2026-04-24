import { features } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Features() {
  return (
    <section
      id="features"
      className="relative border-t border-[var(--color-border)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--color-fg-subtle)]">
            Features
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            Built for agents. Friendly to humans.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl hairline md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard
              key={f.title}
              title={f.title}
              blurb={f.blurb}
              Icon={f.icon}
              mono={f.mono}
              emphasized={i === 0 || i === 5}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  blurb,
  Icon,
  mono,
  emphasized,
}: {
  title: string;
  blurb: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  mono?: string;
  emphasized?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative bg-[var(--color-bg)] p-8 transition-colors",
        "hover:bg-[color-mix(in_srgb,_var(--color-fg)_3%,_transparent)]",
      )}
    >
      <div
        className={cn(
          "mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl hairline",
          emphasized
            ? "bg-[var(--color-accent-muted)] text-[var(--color-accent)]"
            : "bg-[var(--color-bg-elevated)] text-[var(--color-fg-muted)]",
        )}
      >
        <Icon className="h-5 w-5" strokeWidth={1.6} />
      </div>
      <h3 className="text-lg font-medium tracking-[-0.01em] text-[var(--color-fg)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">
        {blurb}
      </p>
      {mono && (
        <p className="mt-5 font-mono text-[11px] text-[var(--color-fg-subtle)]">
          {mono}
        </p>
      )}
    </div>
  );
}
