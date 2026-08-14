import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "Gokul Naidu M A | AI/ML Researcher & Developer",
  description: "AI/ML Researcher & Developer exploring Generative AI, Machine Learning, NLP, Computer Vision, and Intelligent Systems.",
  metadataBase: siteUrl ? new URL(siteUrl) : new URL("http://localhost:3000"),
  openGraph: {
    title: "Gokul Naidu M A | AI/ML Researcher & Developer",
    description: "AI/ML Researcher & Developer exploring Generative AI, Machine Learning, NLP, Computer Vision, and Intelligent Systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gokul Naidu M A | AI/ML Researcher & Developer",
    description: "AI/ML Researcher & Developer exploring Generative AI, Machine Learning, NLP, Computer Vision, and Intelligent Systems.",
  },
};

export const viewport: Viewport = { themeColor: "#070b14", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
