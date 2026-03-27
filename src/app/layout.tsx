import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SchemaMarkup } from "@/components/SchemaMarkup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://centraldental.ro";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Central Dental Clinic | Clinică Stomatologică Premium Sighetu Marmației",
    template: "%s — Central Dental Clinic",
  },
  description:
    "Clinică stomatologică premium în Sighetu Marmației, Maramureș. Estetică dentară, fațete ceramice, implantologie All-on-4/All-on-6, ortodonție. Fondată de Dr. Șofineți Ivan Marian.",
  keywords: [
    "dentist Sighetu Marmației",
    "clinică stomatologică Sighetu Marmației",
    "stomatolog Maramureș",
    "fațete dentare Sighetu Marmației",
    "implant dentar Maramureș",
    "ortodonție Sighetu Marmației",
    "All-on-4 Maramureș",
    "Hollywood Smile România",
    "turism dentar Maramureș",
    "dentist diaspora",
    "Central Dental Clinic",
    "Dr. Șofineți Ivan Marian",
  ],
  authors: [{ name: "Central Dental Clinic" }],
  creator: "Central Dental Clinic",
  publisher: "ROYAL 3D SMILE DESIGN S.R.L.",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: SITE_URL,
    siteName: "Central Dental Clinic",
    title: "Central Dental Clinic | Clinică Stomatologică Premium Sighetu Marmației",
    description:
      "Estetică dentară, implantologie avansată și tratamente complete în Sighetu Marmației. By Dr. Șofineți Ivan Marian.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Central Dental Clinic — Clinică stomatologică premium în Sighetu Marmației",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Central Dental Clinic | Sighetu Marmației",
    description:
      "Clinică stomatologică premium. Fațete dentare, implantologie, ortodonție. By Dr. Șofineți Ivan Marian.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180" }],
  },
  verification: {
    // google: "GOOGLE_SITE_VERIFICATION_CODE",
  },
  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${geistSans.variable} ${cormorant.variable} antialiased`}
      >
        <SchemaMarkup />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
