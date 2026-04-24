"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Card = {
  id: string;
  file: string;
  tint: string;
  lines: { prefix?: string; text: string; muted?: boolean }[];
};

const CARDS: Card[] = [
  {
    id: "architecture",
    file: "architecture.md",
    tint: "oklch(0.78 0.17 150)",
    lines: [
      { prefix: "#", text: "Architecture" },
      { text: "" },
      { prefix: "##", text: "Layers" },
      { text: "- core/    pure logic", muted: true },
      { text: "- adapters/ fs + git", muted: true },
      { text: "- cli/     commander", muted: true },
    ],
  },
  {
    id: "entrypoints",
    file: "entrypoints.md",
    tint: "oklch(0.78 0.15 80)",
    lines: [
      { prefix: "#", text: "Entrypoints" },
      { text: "" },
      { prefix: "##", text: "CLI" },
      { text: "- init       init.ts", muted: true },
      { text: "- index      index.ts", muted: true },
      { text: "- handshake  hsh.ts", muted: true },
    ],
  },
  {
    id: "api-surface",
    file: "api-surface.md",
    tint: "oklch(0.78 0.15 250)",
    lines: [
      { prefix: "#", text: "API Surface" },
      { text: "" },
      { prefix: "##", text: "core/graph.ts" },
      { text: "- buildGraph(files)", muted: true },
      { text: "- querySymbol(g, q)", muted: true },
      { text: "- topoOrder(g)", muted: true },
    ],
  },
  {
    id: "symbols",
    file: "symbols.md",
    tint: "oklch(0.75 0.17 320)",
    lines: [
      { prefix: "#", text: "Symbols" },
      { text: "" },
      { text: "buildGraph  graph.ts:42", muted: true },
      { text: "writeCards  cards.ts:17", muted: true },
      { text: "parseTS     parser.ts:88", muted: true },
      { text: "handshake   cli.ts:31", muted: true },
    ],
  },
  {
    id: "graph",
    file: "graph.md",
    tint: "oklch(0.74 0.14 20)",
    lines: [
      { prefix: "#", text: "Import Graph" },
      { text: "" },
      { text: "cli/index.ts", muted: true },
      { text: " ├── core/parser.ts", muted: true },
      { text: " ├── core/graph.ts", muted: true },
      { text: " └── core/cards.ts", muted: true },
    ],
  },
];

const STACK_POSES = [
  { x: -16, y: 22, rot: -8, z: 0 },
  { x: -8, y: 11, rot: -4, z: 1 },
  { x: 0, y: 0, rot: 0, z: 2 },
  { x: 8, y: 11, rot: 4, z: 1 },
  { x: 16, y: 22, rot: 8, z: 0 },
];

const FAN_POSES = [
  { x: -220, y: 8, rot: -6, z: 0 },
  { x: -110, y: 0, rot: -3, z: 1 },
  { x: 0, y: -6, rot: 0, z: 2 },
  { x: 110, y: 0, rot: 3, z: 1 },
  { x: 220, y: 8, rot: 6, z: 0 },
];

export function CardDeck() {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <div
      className="relative h-[420px] w-full select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setFocused(null);
      }}
    >
      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center">
        <div className="relative h-[280px] w-[320px]">
          {CARDS.map((card, i) => {
            const base = hovered ? FAN_POSES[i] : STACK_POSES[i];
            const isFocused = focused === card.id;
            const isDimmed = focused !== null && !isFocused;

            return (
              <motion.button
                type="button"
                key={card.id}
                onClick={() =>
                  setFocused((f) => (f === card.id ? null : card.id))
                }
                className="absolute left-1/2 top-0 -translate-x-1/2 focus:outline-none"
                style={{ zIndex: isFocused ? 10 : base.z + 1 }}
                initial={
                  reduce
                    ? { opacity: 0 }
                    : { opacity: 0, y: 60, rotate: base.rot }
                }
                animate={{
                  opacity: isDimmed ? 0.38 : 1,
                  x: isFocused ? 0 : base.x,
                  y: isFocused ? -16 : base.y,
                  rotate: isFocused ? 0 : base.rot,
                  scale: isFocused ? 1.04 : 1,
                }}
                transition={
                  reduce
                    ? { duration: 0.2 }
                    : {
                        type: "spring",
                        stiffness: 220,
                        damping: 24,
                        mass: 0.6,
                        delay: 0.08 * i,
                      }
                }
              >
                <CardFace card={card} />
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {focused && (
          <motion.p
            key={focused}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 bottom-0 text-center font-mono text-xs text-[var(--color-fg-subtle)]"
          >
            .repocards/{focused}.md — click again to restack
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function CardFace({ card }: { card: Card }) {
  return (
    <div
      className={cn(
        "pointer-events-none relative w-[300px] overflow-hidden rounded-xl",
        "hairline bg-[color-mix(in_srgb,_var(--color-bg-elevated)_92%,_black_8%)]",
        "shadow-[0_12px_36px_-16px_rgba(0,0,0,0.55)]",
      )}
    >
      {/* filename tab */}
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-3 py-2">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: card.tint }}
        />
        <span className="font-mono text-[11px] text-[var(--color-fg-muted)]">
          {card.file}
        </span>
        <span className="ml-auto font-mono text-[10px] text-[var(--color-fg-subtle)]">
          1.2kb
        </span>
      </div>
      {/* content */}
      <div className="px-4 py-3 font-mono text-[11px] leading-[1.7]">
        {card.lines.map((l, i) => (
          <div key={i} className="flex gap-1.5">
            {l.prefix && (
              <span
                className="shrink-0"
                style={{ color: card.tint }}
              >
                {l.prefix}
              </span>
            )}
            <span
              className={
                l.muted
                  ? "text-[var(--color-fg-subtle)]"
                  : "text-[var(--color-fg)]"
              }
            >
              {l.text || " "}
            </span>
          </div>
        ))}
      </div>
      {/* edge highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          background: `linear-gradient(180deg, color-mix(in srgb, ${card.tint} 8%, transparent) 0%, transparent 40%)`,
        }}
      />
    </div>
  );
}
