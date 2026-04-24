import Link from "next/link";
import { Github } from "lucide-react";
import { site } from "@/lib/content";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Nav() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "backdrop-blur-xl bg-[color-mix(in_srgb,_var(--color-bg)_72%,_transparent)]",
        "border-b border-[var(--color-border)]",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-mono text-sm tracking-tight">
            <span className="text-[var(--color-fg)]">{site.name}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#how">How it works</NavLink>
          <NavLink href="#cards">Cards</NavLink>
          <NavLink href="#integrations">Integrations</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <kbd className="kbd hidden sm:inline-flex">⌘K</kbd>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-full",
              "hairline text-[var(--color-fg-muted)] transition-colors",
              "hover:text-[var(--color-fg)] hover:bg-[color-mix(in_srgb,_white_6%,_transparent)]",
            )}
          >
            <Github className="h-4 w-4" strokeWidth={1.6} />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
    >
      {children}
    </a>
  );
}

function Logo() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="text-[var(--color-accent)]"
    >
      <rect
        x="3"
        y="4"
        width="14"
        height="16"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="7"
        y="2"
        width="14"
        height="16"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.55"
      />
    </svg>
  );
}
