"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useMounted } from "@/lib/hooks/use-mounted";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full",
        "hairline text-[var(--color-fg-muted)] transition-colors",
        "hover:text-[var(--color-fg)] hover:bg-[color-mix(in_srgb,_white_6%,_transparent)]",
        className,
      )}
    >
      {mounted && !isDark ? (
        <Moon className="h-4 w-4" strokeWidth={1.6} />
      ) : (
        <Sun className="h-4 w-4" strokeWidth={1.6} />
      )}
    </button>
  );
}
