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
          background: "#0b0c10",
          backgroundImage:
            "radial-gradient(rgba(241,239,232,0.09) 1.5px, transparent 2px)",
          backgroundSize: "28px 28px",
          padding: 72,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#8d9dff",
            }}
          />
          <div
            style={{
              color: "#8d9dff",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            Available
          </div>
          <div style={{ width: 40, height: 1, background: "#343846" }} />
          <div
            style={{
              color: "#7f817f",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            Dhaka · GMT+6
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#f1efe8",
              fontSize: 112,
              lineHeight: 1,
              letterSpacing: -2,
              fontWeight: 400,
            }}
          >
            Mohammad Ali
          </div>
          <div
            style={{
              color: "#a3a39c",
              fontSize: 44,
              marginTop: 24,
              letterSpacing: -0.5,
              fontFamily: "sans-serif",
            }}
          >
            Full-stack developer &amp; team lead
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #22252e",
            paddingTop: 28,
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ color: "#7f817f", fontSize: 24 }}>
            TypeScript · React · Next.js · Node.js · AWS
          </div>
          <div style={{ color: "#8d9dff", fontSize: 24 }}>mdali.dev</div>
        </div>
      </div>
    ),
    size,
  );
}
