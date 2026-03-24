import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Central Dental Clinic | Clinică Stomatologică Sighetu Marmației",
  description:
    "Clinică stomatologică modernă în Sighetu Marmației. Fațete dentare, implantologie avansată, ortodonție și tratamente complete pentru întreaga familie.",
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
      "Stomatologie la standarde europene, chiar în inima Maramureșului.",
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
      <body className={`${outfit.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
