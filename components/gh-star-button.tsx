import { Github, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/content";
import { formatStars } from "@/lib/utils";

async function fetchStars(): Promise<number | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${site.githubRepo}`,
      {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github+json" },
      },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { stargazers_count?: number };
    return typeof data.stargazers_count === "number"
      ? data.stargazers_count
      : null;
  } catch {
    return null;
  }
}

export async function GhStarButton({ className }: { className?: string }) {
  const stars = await fetchStars();

  return (
    <a
      href={site.github}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group inline-flex items-center gap-2 rounded-full",
        "hairline px-4 py-2 text-sm",
        "text-[var(--color-fg-muted)] transition-all",
        "hover:text-[var(--color-fg)] hover:border-[var(--color-border-strong)]",
        className,
      )}
    >
      <Github className="h-4 w-4" strokeWidth={1.6} />
      <span>Star on GitHub</span>
      {stars !== null && (
        <span className="flex items-center gap-1 border-l border-[var(--color-border)] pl-2 font-mono text-xs">
          <Star
            className="h-3 w-3 text-[var(--color-accent)]"
            strokeWidth={2}
            fill="currentColor"
          />
          {formatStars(stars)}
        </span>
      )}
    </a>
  );
}
