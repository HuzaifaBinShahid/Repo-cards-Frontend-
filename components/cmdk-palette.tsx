"use client";

import { Command } from "cmdk";
import {
  ArrowRight,
  Github,
  Linkedin,
  Package,
  Terminal,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { site } from "@/lib/content";
import { useCopyToClipboard } from "@/lib/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";

export function CmdkPalette() {
  const [open, setOpen] = useState(false);
  const { copy } = useCopyToClipboard();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function jump(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  }

  function open_(href: string) {
    window.open(href, "_blank", "noreferrer");
    setOpen(false);
  }

  async function copyInstall() {
    const ok = await copy(site.install);
    if (ok) toast.success("Copied install command");
    setOpen(false);
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command menu"
      className={cn(
        "fixed left-1/2 top-[20%] z-[200] w-[min(560px,92vw)] -translate-x-1/2",
        "overflow-hidden rounded-2xl hairline",
        "bg-[color-mix(in_srgb,_var(--color-bg)_90%,_black_10%)]",
        "shadow-[0_32px_80px_-20px_rgba(0,0,0,0.5)]",
        "backdrop-blur-xl",
      )}
      overlayClassName="fixed inset-0 z-[199] bg-black/60 backdrop-blur-sm"
    >
      <div className="flex items-center border-b border-[var(--color-border)] px-4">
        <Sparkles
          className="h-4 w-4 text-[var(--color-fg-subtle)]"
          strokeWidth={1.6}
        />
        <Command.Input
          placeholder="Jump to section, copy install, open links…"
          className="h-12 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-[var(--color-fg-subtle)]"
        />
        <kbd className="kbd">ESC</kbd>
      </div>
      <Command.List className="max-h-[320px] overflow-auto p-2">
        <Command.Empty className="px-3 py-6 text-center text-sm text-[var(--color-fg-subtle)]">
          No matches.
        </Command.Empty>
        <Command.Group
          heading="Actions"
          className="px-2 pt-2 text-xs text-[var(--color-fg-subtle)]"
        >
          <Item onSelect={copyInstall} icon={<Terminal className="h-4 w-4" />}>
            Copy install command
            <kbd className="kbd ml-auto">⎘</kbd>
          </Item>
        </Command.Group>
        <Command.Group
          heading="Sections"
          className="px-2 pt-3 text-xs text-[var(--color-fg-subtle)]"
        >
          <Item onSelect={() => jump("features")} icon={<ArrowRight className="h-4 w-4" />}>
            Features
          </Item>
          <Item onSelect={() => jump("how")} icon={<ArrowRight className="h-4 w-4" />}>
            How it works
          </Item>
          <Item onSelect={() => jump("cards")} icon={<ArrowRight className="h-4 w-4" />}>
            Card types
          </Item>
          <Item onSelect={() => jump("integrations")} icon={<ArrowRight className="h-4 w-4" />}>
            Integrations
          </Item>
        </Command.Group>
        <Command.Group
          heading="Links"
          className="px-2 pt-3 text-xs text-[var(--color-fg-subtle)]"
        >
          <Item onSelect={() => open_(site.github)} icon={<Github className="h-4 w-4" />}>
            GitHub repository
          </Item>
          <Item onSelect={() => open_(site.npm)} icon={<Package className="h-4 w-4" />}>
            npm package
          </Item>
          <Item onSelect={() => open_(site.linkedin)} icon={<Linkedin className="h-4 w-4" />}>
            Author · LinkedIn
          </Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}

function Item({
  onSelect,
  icon,
  children,
}: {
  onSelect: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm",
        "text-[var(--color-fg-muted)] data-[selected=true]:text-[var(--color-fg)]",
        "data-[selected=true]:bg-[color-mix(in_srgb,_var(--color-fg)_6%,_transparent)]",
      )}
    >
      <span className="text-[var(--color-fg-subtle)]">{icon}</span>
      {children}
    </Command.Item>
  );
}
