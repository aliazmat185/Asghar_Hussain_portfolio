import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.fullName} — ${site.title}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0B0F14",
          color: "#F5F7FA",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 88,
            height: 88,
            borderRadius: 9999,
            background: "#C7F36B",
            color: "#0B0F14",
            fontSize: 36,
            fontWeight: 700,
          }}
        >
          AH
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, marginTop: 40 }}>
          {site.fullName}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#AAB4C0", marginTop: 16 }}>
          {site.title}
        </div>
      </div>
    ),
    { ...size }
  );
}
