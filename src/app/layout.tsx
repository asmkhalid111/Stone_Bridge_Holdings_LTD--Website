import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FBFBF9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "STONE BRIDGE HOLDINGS — Architectural Design & Construction Studio",
  description:
    "An integrated architecture and construction practice. Translating structural concept into built form through engineering precision, material honesty, and restrained craftsmanship.",
  keywords: [
    "Architecture",
    "Construction",
    "Structural Engineering",
    "Architectural Studio",
    "Contemporary Architecture",
    "Stone Bridge Holdings",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body className="bg-canvas text-ink-primary antialiased selection:bg-ink-primary selection:text-canvas min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>

  );
}
