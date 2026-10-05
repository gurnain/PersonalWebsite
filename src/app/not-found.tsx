import { site } from "@/content";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", textAlign: "center", padding: 24 }}>
      <div>
        <h1 style={{ fontSize: 64, lineHeight: 1, fontWeight: 600, letterSpacing: "-0.04em" }}>404</h1>
        <p style={{ margin: "16px 0 24px", color: "var(--text-soft)" }}>This page does not exist.</p>
        <a href={site.path} style={{ color: "var(--accent)" }}>
          Go to the About page
        </a>
      </div>
    </main>
  );
}
