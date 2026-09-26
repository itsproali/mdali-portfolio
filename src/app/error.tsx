"use client";

import { useEffect } from "react";
import { RotateCw } from "lucide-react";

import { Container } from "@/components/ui/container";
import { ActionButton, ActionLink } from "@/components/ui/action";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[80svh] items-center pt-28 pb-24">
      <Container>
        <div className="max-w-xl border-t border-line pt-6">
          <div className="flex items-center gap-3">
            <span className="label text-accent">500</span>
            <span aria-hidden className="h-px w-10 bg-line-strong" />
            <span className="label text-fg-subtle">Unhandled</span>
          </div>

          <h1 className="mt-7 text-headline font-medium">
            Something broke on my end.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-fg-muted">
            Not your fault. Try again — and if it keeps happening, I&rsquo;d
            genuinely like to know.
          </p>

          {error.digest ? (
            <p className="mt-4 font-mono text-[11px] text-fg-subtle">
              ref: {error.digest}
            </p>
          ) : null}

          <div className="mt-9 flex flex-wrap gap-3">
            <ActionButton onClick={reset}>
              <RotateCw className="size-3.5" strokeWidth={2} />
              Try again
            </ActionButton>
            <ActionLink href="/" variant="outline">
              Back home
            </ActionLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
