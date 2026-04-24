import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const runtime = "edge";
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "system-ui, -apple-system, sans-serif",
          backgroundImage:
            "radial-gradient(800px 500px at 70% 20%, rgba(120, 220, 170, 0.18), transparent 60%)",
        }}
      >
        {/* brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              width: 48,
              height: 48,
              border: "2px solid rgba(255,255,255,0.6)",
              borderRadius: 10,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 10,
                top: -6,
                width: 48,
                height: 48,
                border: "2px solid rgba(120, 220, 170, 0.9)",
                borderRadius: 10,
                background: "#0a0a0a",
              }}
            />
          </div>
          <div style={{ display: "flex", fontSize: 30, letterSpacing: -0.5 }}>
            {site.name}
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 86,
              fontWeight: 600,
              letterSpacing: -3,
              lineHeight: 1.02,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>Stop grepping.&nbsp;</span>
            <span style={{ color: "rgba(255,255,255,0.5)" }}>
              Start reading.
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 900,
              display: "flex",
            }}
          >
            Pre-computed markdown context cards for AI coding agents.
          </div>
        </div>

        {/* install row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 22px",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: 999,
              fontFamily:
                "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: 26,
            }}
          >
            <span style={{ color: "rgba(120, 220, 170, 1)" }}>$</span>
            <span>{site.install}</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 20,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            <span>github.com/{site.githubRepo}</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
