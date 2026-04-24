import { integrations } from "@/lib/content";

export function Integrations() {
  return (
    <section
      id="integrations"
      className="relative border-t border-[var(--color-border)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--color-fg-subtle)]">
            Integrations
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            Your agent, wired in one command.
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            <span className="font-mono text-sm text-[var(--color-fg)]">
              repocards handshake
            </span>{" "}
            detects your IDE and writes a pointer to{" "}
            <span className="font-mono text-sm text-[var(--color-fg)]">
              .repocards/AGENT_GUIDE.md
            </span>{" "}
            so every agent reads it first.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl hairline md:grid-cols-4">
          {integrations.map((i) => (
            <IntegrationTile key={i.short} name={i.name} mark={i.short} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationTile({ name, mark }: { name: string; mark: string }) {
  return (
    <div className="group flex min-h-[120px] flex-col items-center justify-center gap-3 bg-[var(--color-bg)] p-8 transition-colors hover:bg-[color-mix(in_srgb,_var(--color-fg)_3%,_transparent)]">
      <Mark mark={mark} />
      <span className="text-sm text-[var(--color-fg-muted)] transition-colors group-hover:text-[var(--color-fg)]">
        {name}
      </span>
    </div>
  );
}

function Mark({ mark }: { mark: string }) {
  // Monochrome geometric marks — we don't ship third-party logos, just identifiers.
  const common =
    "h-8 w-8 text-[var(--color-fg-subtle)] transition-colors group-hover:text-[var(--color-accent)]";
  switch (mark) {
    case "claude":
      return (
        <svg viewBox="0 0 32 32" className={common} fill="none" aria-hidden>
          <path
            d="M16 3l3.2 8.4L27.5 14 19.2 16.6 16 25l-3.2-8.4L4.5 14l8.3-2.6L16 3z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "cursor":
      return (
        <svg viewBox="0 0 32 32" className={common} fill="none" aria-hidden>
          <path
            d="M7 5l18 8-7.5 3.5L14 25 7 5z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "copilot":
      return (
        <svg viewBox="0 0 32 32" className={common} fill="none" aria-hidden>
          <rect
            x="5"
            y="10"
            width="22"
            height="14"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="17" r="1.5" fill="currentColor" />
          <circle cx="20" cy="17" r="1.5" fill="currentColor" />
          <path
            d="M16 10V6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "codex":
      return (
        <svg viewBox="0 0 32 32" className={common} fill="none" aria-hidden>
          <path
            d="M11 10l-5 6 5 6M21 10l5 6-5 6M18 8l-4 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
