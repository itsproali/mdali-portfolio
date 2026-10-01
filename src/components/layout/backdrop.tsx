/**
 * Fixed page backdrop: a faint dot grid with a soft, slowly drifting colour
 * mesh at the top. Purely decorative — nothing interactive lives behind it.
 */
export function Backdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      <div className="mesh absolute inset-x-0 -top-24 h-[48rem]" />
      <div className="dot-grid absolute inset-0" />
    </div>
  );
}
