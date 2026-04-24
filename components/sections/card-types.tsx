"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cardTypes } from "@/lib/content";
import { cn } from "@/lib/utils";

export function CardTypes() {
  const [active, setActive] = useState(0);
  const current = cardTypes[active];

  return (
    <section
      id="cards"
      className="relative border-t border-[var(--color-border)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--color-fg-subtle)]">
            What gets generated
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            Five cards. Every angle of your repo.
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            Structured, pre-computed markdown — readable by you, reliable for
            agents.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <div className="flex overflow-x-auto lg:flex-col lg:overflow-visible">
            {cardTypes.map((c, i) => (
              <button
                key={c.file}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "relative shrink-0 px-4 py-3 text-left transition-colors",
                  "lg:border-l lg:border-[var(--color-border)]",
                  i === active
                    ? "text-[var(--color-fg)] lg:border-l-[var(--color-accent)]"
                    : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]",
                )}
              >
                <div className="text-sm font-medium">{c.name}</div>
                <div className="font-mono text-[11px] text-[var(--color-fg-subtle)]">
                  {c.file}
                </div>
              </button>
            ))}
          </div>

          <div className="surface overflow-hidden">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                <span className="font-mono text-xs text-[var(--color-fg-muted)]">
                  .repocards/{current.file}
                </span>
              </div>
              <span className="font-mono text-[11px] text-[var(--color-fg-subtle)]">
                markdown
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.file}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="px-6 py-5"
              >
                <p className="mb-4 text-sm text-[var(--color-fg-muted)]">
                  {current.summary}
                </p>
                <pre className="overflow-x-auto font-mono text-[12px] leading-[1.7] text-[var(--color-fg)]">
                  {renderPreview(current.preview)}
                </pre>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderPreview(text: string) {
  return text.split("\n").map((line, i) => {
    if (line.startsWith("# "))
      return (
        <div key={i} className="text-[var(--color-fg)]">
          <span className="text-[var(--color-accent)]"># </span>
          {line.slice(2)}
        </div>
      );
    if (line.startsWith("## "))
      return (
        <div key={i}>
          <span className="text-[var(--color-accent)]">## </span>
          <span className="text-[var(--color-fg)]">{line.slice(3)}</span>
        </div>
      );
    if (line.startsWith("- ") || /^\s+[├└│]/.test(line))
      return (
        <div key={i} className="text-[var(--color-fg-muted)]">
          {line}
        </div>
      );
    return (
      <div key={i} className="text-[var(--color-fg-muted)]">
        {line || " "}
      </div>
    );
  });
}
