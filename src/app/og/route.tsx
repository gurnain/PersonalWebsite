import { ImageResponse } from "next/og";
import { meta, person, site } from "@/content";

export const runtime = "edge";

// Link-preview image for LinkedIn, Slack and messages.
export async function GET() {
  const host = site.url.replace(/^https?:\/\//, "");
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "80px 96px",
          background: "#0d1117",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "56px" }}>
          <img
            src={site.url + person.photo}
            width={220}
            height={220}
            style={{ objectFit: "cover", borderRadius: "100%", border: "6px solid #3b82f6" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <span style={{ fontSize: "104px", lineHeight: "104px", letterSpacing: "-0.04em" }}>{person.name}</span>
            <span style={{ fontSize: "44px", lineHeight: "48px", opacity: 0.7 }}>
              {person.role} · {person.employer}
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div style={{ display: "flex", width: "120px", height: "8px", borderRadius: "8px", background: "#3b82f6" }} />
          <span style={{ fontSize: "46px", lineHeight: "58px" }}>{meta.tagline}</span>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "32px", opacity: 0.6 }}>
            <span>{person.location}</span>
            <span>{host}</span>
          </div>
        </div>
      </div>
    ),
    { width: 1280, height: 720 },
  );
}
