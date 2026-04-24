import { Github, Linkedin, Package } from "lucide-react";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-[var(--color-fg)]">
              {site.name}
            </span>
            <span className="text-[var(--color-fg-subtle)]">·</span>
            <span className="text-xs text-[var(--color-fg-subtle)]">
              v0.1.1
            </span>
          </div>
          <p className="mt-2 max-w-sm text-sm text-[var(--color-fg-muted)]">
            Pre-computed markdown context cards for AI coding agents.
          </p>
          <p className="mt-4 text-xs text-[var(--color-fg-subtle)]">
            Built by{" "}
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-fg-muted)] underline-offset-4 transition-colors hover:text-[var(--color-fg)] hover:underline"
            >
              {site.author}
            </a>
            . MIT licensed. Open source.
          </p>
        </div>

        <nav className="flex items-center gap-2">
          <FooterLink href={site.github} label="GitHub">
            <Github className="h-4 w-4" strokeWidth={1.6} />
          </FooterLink>
          <FooterLink href={site.npm} label="npm">
            <Package className="h-4 w-4" strokeWidth={1.6} />
          </FooterLink>
          <FooterLink href={site.linkedin} label="LinkedIn">
            <Linkedin className="h-4 w-4" strokeWidth={1.6} />
          </FooterLink>
        </nav>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full hairline text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)] hover:bg-[color-mix(in_srgb,_white_6%,_transparent)]"
    >
      {children}
    </a>
  );
}
