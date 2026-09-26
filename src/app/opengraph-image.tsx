import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 10, height: 10, background: "#ff6a2b" }} />
          <div
            style={{
              color: "#ff6a2b",
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Available
          </div>
          <div style={{ width: 48, height: 1, background: "#33333b" }} />
          <div
            style={{
              color: "#6a6a74",
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Dhaka · GMT+6
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#f2f2f3",
              fontSize: 104,
              lineHeight: 1,
              letterSpacing: -4,
              fontWeight: 600,
            }}
          >
            Mohammad Ali
          </div>
          <div
            style={{
              color: "#9b9ba4",
              fontSize: 44,
              marginTop: 20,
              letterSpacing: -1,
            }}
          >
            Full-Stack Developer &amp; Team Lead
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #222227",
            paddingTop: 28,
          }}
        >
          <div
            style={{
              color: "#6a6a74",
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            TypeScript · React · Next.js · Node.js · AWS
          </div>
          <div style={{ color: "#ff6a2b", fontSize: 24, letterSpacing: 2 }}>
            mdali.dev
          </div>
        </div>
      </div>
    ),
    size,
  );
}
