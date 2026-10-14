import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = "Ali Jazbi. Frontend first. Full-stack in practice.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "#F6F6F3",
        color: "#171A1D",
        padding: "65px 72px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 25,
        }}
      >
        <span style={{ fontWeight: 700 }}>AJ.</span>
        <span>{profile.name}</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 78,
          fontWeight: 700,
          letterSpacing: -5,
        }}
      >
        <span>Frontend first.</span>
        <span style={{ color: "#626B72" }}>Full-stack in practice.</span>
      </div>
      <div style={{ display: "flex", fontSize: 23, color: "#2365EE" }}>
        React / Next.js / TypeScript / Node.js
      </div>
    </div>,
    size,
  );
}
