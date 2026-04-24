import type { LucideIcon } from "lucide-react";
import {
  Zap,
  Layers,
  Plug,
  Languages,
  TerminalSquare,
  Gauge,
} from "lucide-react";

export const site = {
  name: "repocards",
  title: "Repocards — Pre-computed context for AI coding agents",
  description:
    "Markdown context cards for AI coding agents. Offline, free, and already there before the first prompt.",
  url: "https://repocards.dev",
  install: "npx repocards init",
  github: "https://github.com/HuzaifaBinShahid/Repo-cards",
  githubRepo: "HuzaifaBinShahid/Repo-cards",
  npm: "https://www.npmjs.com/package/repocards",
  linkedin: "https://www.linkedin.com/in/huzaifabinshahid",
  author: "Huzaifa Bin Shahid",
};

export type Feature = {
  title: string;
  blurb: string;
  icon: LucideIcon;
  mono?: string;
};

export const features: Feature[] = [
  {
    title: "Offline & $0",
    blurb:
      "Tree-sitter parses locally. No API keys, no tokens spent, no cloud calls. Indexes large repos in seconds.",
    icon: Zap,
    mono: "cost: 0",
  },
  {
    title: "Five pre-computed cards",
    blurb:
      "architecture, entrypoints, api-surface, symbols, and import-graph — ready before the first prompt.",
    icon: Layers,
    mono: ".repocards/*.md",
  },
  {
    title: "IDE handshake",
    blurb:
      "Auto-wires Claude Code, Cursor, Copilot, and Codex to read the guide first — every session, zero setup.",
    icon: Plug,
    mono: "repocards handshake",
  },
  {
    title: "Multi-language",
    blurb:
      "tree-sitter-wasms covers 20+ languages: TypeScript, Python, Go, Rust, Java, Ruby, C/C++, and more.",
    icon: Languages,
    mono: "parser: tree-sitter",
  },
  {
    title: "One command",
    blurb:
      "`npx repocards index` and you are done. Re-run after big changes. Output is git-friendly markdown.",
    icon: TerminalSquare,
    mono: "$ npx repocards index",
  },
  {
    title: "10–50× token savings",
    blurb:
      "A single card read replaces dozens of grep passes. Faster first response, cleaner agent context.",
    icon: Gauge,
    mono: "~820 vs 12.4k tokens",
  },
];

export type Step = {
  n: string;
  title: string;
  cmd: string;
  blurb: string;
};

export const steps: Step[] = [
  {
    n: "01",
    title: "Initialize",
    cmd: "npx repocards init",
    blurb:
      "Scaffolds .repocards/ and writes AGENT_GUIDE.md pointing every AI assistant to the cards first.",
  },
  {
    n: "02",
    title: "Index",
    cmd: "npx repocards index",
    blurb:
      "Tree-sitter builds the symbol graph locally. Five markdown cards land in your repo, ready to commit.",
  },
  {
    n: "03",
    title: "Work as usual",
    cmd: "# open your IDE",
    blurb:
      "Claude Code, Cursor, Copilot, and Codex read the guide on the first turn. 10–50× fewer tokens per session.",
  },
];

export type CardType = {
  name: string;
  file: string;
  summary: string;
  preview: string;
};

export const cardTypes: CardType[] = [
  {
    name: "Architecture",
    file: "architecture.md",
    summary:
      "High-level module graph, responsibilities, and where data flows.",
    preview: `# Architecture

## Layers
- core/        pure logic, no I/O
- adapters/    filesystem + git
- cli/         commander entrypoints

## Data flow
  files → parser → graph → cards
`,
  },
  {
    name: "Entrypoints",
    file: "entrypoints.md",
    summary: "CLI commands, exported APIs, and the files behind each.",
    preview: `# Entrypoints

## CLI
- init       → src/cli/init.ts
- index      → src/cli/index.ts
- doctor     → src/cli/doctor.ts
- handshake  → src/cli/handshake.ts
`,
  },
  {
    name: "API Surface",
    file: "api-surface.md",
    summary: "Every exported function, type, and its one-line purpose.",
    preview: `# API Surface

## src/core/graph.ts
- buildGraph(files) : Graph
- querySymbol(g, q) : Symbol[]

## src/core/cards.ts
- writeCards(g, out): void
`,
  },
  {
    name: "Symbols",
    file: "symbols.md",
    summary: "Symbol → file index. Find anything without grepping.",
    preview: `# Symbols

buildGraph        → core/graph.ts:42
writeCards        → core/cards.ts:17
parseTreeSitter   → core/parser.ts:88
handshakeClaude   → cli/handshake.ts:31
`,
  },
  {
    name: "Import Graph",
    file: "graph.md",
    summary: "Who imports whom. Blast-radius in one glance.",
    preview: `# Import Graph

cli/index.ts
 ├── core/parser.ts
 ├── core/graph.ts
 │    └── core/symbols.ts
 └── core/cards.ts
      └── core/format.ts
`,
  },
];

export const integrations = [
  { name: "Claude Code", short: "claude" },
  { name: "Cursor", short: "cursor" },
  { name: "GitHub Copilot", short: "copilot" },
  { name: "OpenAI Codex", short: "codex" },
];
