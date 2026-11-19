import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Jost, Tenor_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cormorantItalic = Cormorant_Garamond({
  variable: "--font-serif-italic",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const tenorSans = Tenor_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Hotel Marcos Gamero",
  description:
    "Un hotel con historia en el Maule. Hotel colonial restaurado en Talca.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${cormorantItalic.variable} ${inter.variable} ${jost.variable} ${tenorSans.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-light text-dark">
        {children}
      </body>
    </html>
  );
}
