import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/ui/container";
import { ActionLink } from "@/components/ui/action";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] items-center pt-28 pb-24">
      <Container>
        <div className="max-w-xl border-t border-line pt-7">
          <div className="flex items-center gap-3">
            <span className="label text-accent">404</span>
            <span className="label text-fg-subtle">Not found</span>
          </div>

          <h1 className="font-display mt-7 text-headline font-normal">
            This route doesn&rsquo;t exist.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-fg-muted">
            The page you were after has moved, been renamed, or never existed in
            the first place.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ActionLink href="/" variant="primary">
              <ArrowLeft className="size-4" strokeWidth={2} />
              Back home
            </ActionLink>
            <ActionLink href="/#work" variant="outline">
              See the work
            </ActionLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
