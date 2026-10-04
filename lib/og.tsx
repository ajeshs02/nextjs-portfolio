import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

const GRAD = "linear-gradient(135deg, #78a9ee, #f3f2f2 50%, #f0a548)";

// Shared Open Graph / Twitter card renderer (rendered once at build time).
export function renderOg({ kicker, title, subtitle }: { kicker: string; title: string; subtitle: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#201e1d",
          backgroundImage:
            "radial-gradient(circle at 88% 8%, rgba(120,169,238,0.42), rgba(32,30,29,0) 46%), radial-gradient(circle at 96% 100%, rgba(240,165,72,0.34), rgba(32,30,29,0) 46%)",
          color: "#f3f2f2",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 36, height: 36, background: GRAD }} />
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>Ajesh S</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 26, letterSpacing: 6, textTransform: "uppercase", color: "#f0a548" }}>{kicker}</div>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.04, letterSpacing: -2, maxWidth: 980 }}>{title}</div>
          <div style={{ fontSize: 32, lineHeight: 1.35, color: "#bab6b6", maxWidth: 900 }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#bab6b6" }}>
          <div>ajeshs.in</div>
          <div style={{ width: 220, height: 6, background: GRAD }} />
        </div>
      </div>
    ),
    OG_SIZE
  );
}
