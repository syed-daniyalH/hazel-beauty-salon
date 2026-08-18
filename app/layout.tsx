import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { ConciergeButton } from "@/components/concierge-button";
import { LocalBusinessJsonLd } from "@/components/local-business-jsonld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HAZEL_INFO } from "@/lib/hazel-data";

import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: HAZEL_INFO.name,
    template: `%s | ${HAZEL_INFO.name}`,
  },
  description:
    "Hazel Beauty Salon is a noir-and-gold editorial salon experience in Johar Town, Lahore. Browse verified hair, skin, makeup, bridal, waxing, and packages, then send an appointment request.",
  openGraph: {
    title: HAZEL_INFO.name,
    description:
      "Hazel Beauty Salon is a noir-and-gold editorial salon experience in Johar Town, Lahore.",
    url: siteUrl,
    siteName: HAZEL_INFO.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: HAZEL_INFO.name,
    description:
      "Hazel Beauty Salon is a noir-and-gold editorial salon experience in Johar Town, Lahore.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-[color:var(--hazel-bg)] text-[color:var(--hazel-ivory)] antialiased">
        <SiteHeader />
        <LocalBusinessJsonLd />
        <main className="relative z-0 pt-20">{children}</main>
        <SiteFooter />
        <ConciergeButton />
      </body>
    </html>
  );
}

