"use client";

import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { useCopyToClipboard } from "@/lib/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  className?: string;
};

export function InstallCommand({ value, className }: Props) {
  const { copied, copy } = useCopyToClipboard();

  async function handleCopy() {
    const ok = await copy(value);
    if (ok) toast.success("Copied to clipboard");
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full",
        "hairline px-5 py-2.5 font-mono text-sm",
        "bg-[color-mix(in_srgb,_var(--color-fg)_2%,_transparent)]",
        "transition-all hover:border-[var(--color-border-strong)]",
        "hover:bg-[color-mix(in_srgb,_var(--color-fg)_5%,_transparent)]",
        className,
      )}
    >
      <span className="text-[var(--color-accent)] select-none">$</span>
      <span className="text-[var(--color-fg)]">{value}</span>
      <span
        aria-hidden
        className={cn(
          "ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full",
          "text-[var(--color-fg-muted)] transition-all",
          "group-hover:text-[var(--color-fg)]",
        )}
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-[var(--color-accent)]" strokeWidth={2.4} />
        ) : (
          <Copy className="h-3.5 w-3.5" strokeWidth={1.6} />
        )}
      </span>
    </button>
  );
}
