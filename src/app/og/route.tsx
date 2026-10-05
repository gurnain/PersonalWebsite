import { ImageResponse } from "next/og";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";

export const runtime = "edge";

// Link-preview image (LinkedIn, Slack, iMessage). Leads with the name and
// what I do; the page title is only shown when it adds something.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "";
  const extra = title.includes(person.name) ? "" : title;
  const site = baseURL.replace(/^https?:\/\//, "");

  return new ImageResponse(
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
        fontFamily: "Inter",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "56px" }}>
        <img
          src={baseURL + person.avatar}
          style={{
            width: "220px",
            height: "220px",
            objectFit: "cover",
            borderRadius: "100%",
            border: "6px solid #22d3ee",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <span style={{ fontSize: "104px", lineHeight: "104px", letterSpacing: "-0.04em" }}>
            {person.name}
          </span>
          <span style={{ fontSize: "44px", lineHeight: "48px", opacity: 0.7 }}>
            {person.role} · Amazon Web Services
          </span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        <div style={{ display: "flex", width: "120px", height: "8px", borderRadius: "8px", background: "#22d3ee" }} />
        <span style={{ fontSize: "46px", lineHeight: "58px", maxWidth: "1000px" }}>
          {extra || "Building AI agents and cloud infrastructure."}
        </span>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "32px", opacity: 0.6 }}>
          <span>{person.locationLabel}</span>
          <span>{site}</span>
        </div>
      </div>
    </div>,
    { width: 1280, height: 720 },
  );
}
