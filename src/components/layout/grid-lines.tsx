/** A soft accent wash at the top of the page. Nothing else behind the content. */
export function GridLines() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 select-none"
    >
      <div className="absolute inset-x-0 top-0 h-72 bg-linear-to-b from-accent-soft to-transparent opacity-50" />
    </div>
  );
}
