/**
 * Fixed page backdrop: a faint dot grid with a soft accent wash at the top.
 * Purely decorative — nothing interactive lives behind the content.
 */
export function Backdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 select-none"
    >
      <div className="dot-grid absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(60%_60%_at_50%_0%,var(--accent-soft),transparent_70%)]" />
    </div>
  );
}
