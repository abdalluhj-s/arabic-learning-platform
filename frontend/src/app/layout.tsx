import type { Metadata } from "next";
import { Cairo, Amiri } from "next/font/google";
import "./globals.css";

// Configure Cairo font for UI (Supports Arabic, Latin, Cyrillic)
const cairo = Cairo({ 
  subsets: ["arabic", "latin", "cyrillic"],
  variable: "--font-cairo",
  weight: ["400", "600", "700"],
  display: "swap",
});

// Configure Amiri font for ultra-clear Arabic text with Tashkeel
const amiri = Amiri({
  subsets: ["arabic", "latin"],
  variable: "--font-amiri",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arabic EdTech Platform",
  description: "Learn Arabic easily - Tailored for Russian Speakers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cairo.variable} ${amiri.variable} font-cairo antialiased bg-[#FAF9F6] text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
