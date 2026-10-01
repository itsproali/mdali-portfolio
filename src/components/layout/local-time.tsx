"use client";

import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "Asia/Dhaka",
});

export function LocalTime({
  zoneClassName = "text-fg-subtle",
}: {
  /** Styles the trailing "Dhaka" so it can sit on light or dark surfaces. */
  zoneClassName?: string;
}) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="tabular-nums">
      {time ?? "--:--:--"} <span className={zoneClassName}>Dhaka</span>
    </span>
  );
}
