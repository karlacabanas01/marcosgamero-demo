import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hotel Marcos Gamero",
  description:
    "Hotel colonial restaurado en el corazón de Talca, donde la casona original convive con diseño contemporáneo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${dmSans.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-linen text-carbon pt-9">
        {children}
      </body>
    </html>
  );
}
