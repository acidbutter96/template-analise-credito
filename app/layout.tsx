import "./css/style.css";

import { Inter } from "next/font/google";
import DefaultShell from "@/components/default-shell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Mel Davis — Painter & Visual Artist",
  description: "Mel Davis is a New Orleans-based painter creating expressive contemporary artworks. Commissions, exhibitions and prints available.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <DefaultShell>{children}</DefaultShell>
        </div>
      </body>
    </html>
  );
}
