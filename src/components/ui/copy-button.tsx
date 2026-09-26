"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* Clipboard blocked — the value is selectable next to the button. */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      className="inline-flex size-7 shrink-0 items-center justify-center border border-line text-fg-subtle transition-colors hover:border-accent hover:text-accent"
    >
      {copied ? (
        <Check className="size-3 text-accent" strokeWidth={2.5} />
      ) : (
        <Copy className="size-3" strokeWidth={2} />
      )}
    </button>
  );
}
