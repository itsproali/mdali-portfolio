import type { Metadata } from "next";
import { RotateCw } from "lucide-react";

import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/container";
import { ActionLink } from "@/components/ui/action";

export const metadata: Metadata = {
  title: "Offline",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <div className="flex min-h-[80svh] items-center pt-28 pb-24">
      <Container>
        <div className="max-w-xl border-t border-line pt-7">
          <div className="flex items-center gap-3">
            <span className="label text-accent">Offline</span>
            <span className="label text-fg-subtle">No connection</span>
          </div>

          <h1 className="font-display mt-7 text-headline font-normal">
            You&rsquo;re offline.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-fg-muted">
            This page isn&rsquo;t cached yet. Reconnect and try again, or email
            me at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-accent transition-opacity hover:opacity-75"
            >
              {siteConfig.email}
            </a>
            .
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ActionLink href="/" variant="primary">
              <RotateCw className="size-4" strokeWidth={2} />
              Try again
            </ActionLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
