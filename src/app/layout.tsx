import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import { profile } from "@/data/site";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["400", "600", "700", "800"] });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.role}`,
  description: profile.intro,
  openGraph: { title: profile.name, description: profile.intro, type: "website" },
};

// Runs before React so the saved theme (or the OS preference) applies on first paint.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(!t){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(t==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      {/* suppressHydrationWarning: browser extensions add attributes to <body> */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
