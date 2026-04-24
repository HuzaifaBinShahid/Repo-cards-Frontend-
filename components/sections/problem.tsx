import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const GREP_LINES = [
  "src/core/graph.ts:42",
  "src/core/parser.ts:18",
  "src/core/symbols.ts:91",
  "src/cli/index.ts:7",
  "src/adapters/fs.ts:204",
  "src/adapters/git.ts:63",
  "tests/graph.spec.ts:12",
  "tests/parser.spec.ts:88",
  "tests/cli.spec.ts:33",
  "…83 more matches",
];

const CARD_LINES = [
  { p: "#", t: "API Surface" },
  { t: "" },
  { p: "##", t: "core/graph.ts" },
  { t: "- buildGraph(files) : Graph", muted: true },
  { t: "- querySymbol(g, q) : Symbol[]", muted: true },
  { t: "- topoOrder(g) : Order", muted: true },
  { t: "" },
  { p: "##", t: "cli/index.ts" },
  { t: "- registerCommands(program)", muted: true },
];

export function Problem() {
  return (
    <section className="relative border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--color-fg-subtle)]">
            The problem
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            Every AI session starts by re-discovering your repo.
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            Grep, glob, read, repeat. Thousands of tokens spent on structure the
            agent already learned yesterday. Repocards writes that structure to
            disk once — so agents read, not rediscover.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          {/* BEFORE */}
          <Panel
            label="Before"
            sub="ad-hoc grep"
            tone="muted"
            stat="12,400 tokens"
            statNote="per agent session"
          >
            <div className="font-mono text-[12px] leading-[1.8]">
              <div className="text-[var(--color-fg-subtle)]">
                $ grep -rn &quot;export&quot; src/
              </div>
              {GREP_LINES.map((l, i) => (
                <div
                  key={i}
                  className={cn(
                    "text-[var(--color-fg-muted)]",
                    i === GREP_LINES.length - 1 && "text-[var(--color-fg-subtle)]",
                  )}
                >
                  {l}
                </div>
              ))}
            </div>
          </Panel>

          <div className="flex items-center justify-center py-6 lg:py-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full hairline bg-[var(--color-bg-elevated)] text-[var(--color-accent)]">
              <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
            </div>
          </div>

          {/* AFTER */}
          <Panel
            label="After"
            sub="repocards"
            tone="accent"
            stat="820 tokens"
            statNote="single card read"
          >
            <div className="font-mono text-[12px] leading-[1.8]">
              <div className="text-[var(--color-fg-subtle)]">
                $ read .repocards/api-surface.md
              </div>
              {CARD_LINES.map((l, i) => (
                <div key={i} className="flex gap-1.5">
                  {l.p && (
                    <span className="text-[var(--color-accent)]">{l.p}</span>
                  )}
                  <span
                    className={
                      l.muted
                        ? "text-[var(--color-fg-muted)]"
                        : "text-[var(--color-fg)]"
                    }
                  >
                    {l.t || " "}
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
}

function Panel({
  label,
  sub,
  tone,
  stat,
  statNote,
  children,
}: {
  label: string;
  sub: string;
  tone: "muted" | "accent";
  stat: string;
  statNote: string;
  children: React.ReactNode;
}) {
  return (
    <div className="surface flex flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-3">
        <div className="flex items-baseline gap-2">
          <span className="text-xs uppercase tracking-widest text-[var(--color-fg-subtle)]">
            {label}
          </span>
          <span className="font-mono text-xs text-[var(--color-fg-muted)]">
            {sub}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              tone === "accent"
                ? "bg-[var(--color-accent)]"
                : "bg-[var(--color-fg-subtle)]",
            )}
          />
          <span className="font-mono text-[11px] text-[var(--color-fg-muted)]">
            {stat}
          </span>
        </div>
      </div>
      <div className="flex-1 px-5 py-4">{children}</div>
      <div className="border-t border-[var(--color-border)] px-5 py-2.5">
        <span className="font-mono text-[10px] text-[var(--color-fg-subtle)]">
          {statNote}
        </span>
      </div>
    </div>
  );
}
