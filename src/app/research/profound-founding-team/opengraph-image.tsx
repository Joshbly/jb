import { ImageResponse } from "next/og";

export const alt = "Profound's founding team: founders and first employees";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f2f0e9",
        color: "#1a1a1a",
        padding: "58px 68px",
        border: "3px solid #1a1a1a",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "monospace",
          fontSize: 18,
          letterSpacing: 3,
          textTransform: "uppercase",
        }}
      >
        <span>JoshBlyskal.com</span>
        <span style={{ color: "#c03015" }}>Company history</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
        <div
          style={{
            width: 86,
            height: 5,
            background: "#c03015",
            marginBottom: 30,
          }}
        />
        <h1
          style={{
            margin: 0,
            fontFamily: "Georgia, serif",
            fontSize: 78,
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: -3,
          }}
        >
          Profound&apos;s founding team: founders and first employees
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          borderTop: "2px solid #1a1a1a",
          paddingTop: 24,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 16,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#c03015",
            }}
          >
            Co-founders
          </span>
          <span style={{ fontFamily: "Georgia, serif", fontSize: 26 }}>
            James Cadwallader · Dylan Babbs
          </span>
        </div>
        <span
          style={{
            maxWidth: 400,
            fontFamily: "monospace",
            fontSize: 16,
            lineHeight: 1.4,
            textAlign: "right",
            textTransform: "uppercase",
            letterSpacing: 1.5,
          }}
        >
          The founders, first employees, and broader 2024 team
        </span>
      </div>
    </div>,
    size,
  );
}
