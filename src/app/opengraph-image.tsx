import { ImageResponse } from "next/og";

export const alt = "Josh Blyskal — AEO & GEO Research";
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
        <span style={{ color: "#c03015" }}>Research</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
        <div
          style={{
            width: 86,
            height: 5,
            background: "#c03015",
            marginBottom: 30,
          }}
        />
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 98,
            lineHeight: 0.95,
            letterSpacing: -4,
          }}
        >
          Josh Blyskal
        </div>
        <div
          style={{
            marginTop: 24,
            fontFamily: "Georgia, serif",
            fontSize: 42,
            fontStyle: "italic",
          }}
        >
          AEO &amp; GEO Research
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "2px solid #1a1a1a",
          paddingTop: 24,
          fontFamily: "monospace",
          fontSize: 16,
          letterSpacing: 1.5,
          textTransform: "uppercase",
        }}
      >
        <span>AI search · retrieval · citations</span>
        <span style={{ color: "#c03015" }}>New York City</span>
      </div>
    </div>,
    size,
  );
}
