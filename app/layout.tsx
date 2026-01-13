import "./css/style.css";

import { Inter } from "next/font/google";
import DefaultShell from "@/components/default-shell";
// import BackgroundClient from "@/components/BackgroundClient";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "CrediCheck — Análise de Crédito",
  description: "Template genérico de site de análise de crédito: consultas, cadastro e área do cliente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-transparent font-inter tracking-tight text-gray-900 antialiased`}
        style={{ backgroundColor: 'transparent' }}
      >
        {/* <BackgroundClient /> */}
        <div className="flex min-h-screen flex-col relative z-10 overflow-hidden supports-[overflow:clip]:overflow-clip">
          <DefaultShell>{children}</DefaultShell>
        </div>
      </body>
    </html>
  );
}
