import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { meta, person, site } from "@/content";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

const previewImage = `${site.url}/og`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${site.url}${site.path}` },
  openGraph: {
    type: "website",
    url: `${site.url}${site.path}`,
    title: meta.title,
    description: meta.description,
    siteName: person.name,
    images: [{ url: previewImage, width: 1280, height: 720, alt: meta.title }],
  },
  twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: [previewImage] },
  robots: { index: true, follow: true },
};

// Runs before first paint so the page never flashes the wrong theme.
const themeScript = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",d?"dark":"light")}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
