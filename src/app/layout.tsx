import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

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

export const metadata: Metadata = {
  title: "Central Dental Clinic | Sighetu Marmației",
  description:
    "Clinică stomatologică premium în Sighetu Marmației. Estetică dentară, implantologie avansată și tratamente complete. By Dr. Șofineți Ivan Marian.",
  keywords: [
    "dentist Sighetu Marmației",
    "clinică stomatologică Maramureș",
    "fațete dentare",
    "implant dentar",
    "ortodonție",
  ],
  openGraph: {
    title: "Central Dental Clinic | Sighetu Marmației",
    description:
      "Clinică stomatologică premium în Sighetu Marmației. By Dr. Șofineți Ivan Marian.",
    type: "website",
    locale: "ro_RO",
  },
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
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
