export const metadata = {
  title: "Portfolio — Mel Davis",
  description: "Selected paintings and works by Mel Davis.",
};

import Hero from "@/components/hero-home";
import Cta from "@/components/cta";

export default function PortfolioPage() {
  return (
    <>
      <Hero />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-28">
        <h1 className="mb-8 text-4xl font-bold">Portfolio</h1>
        <p className="mb-6 text-gray-700">A selection of recent paintings. Click an image to view details.</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder items - replace with actual Image components and assets */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-lg bg-white p-4 shadow">
              <div className="aspect-[4/3] rounded-md bg-gray-100" />
              <h3 className="mt-3 text-lg font-medium">Untitled {i + 1}</h3>
              <p className="text-sm text-gray-500">Oil on canvas — 2024</p>
            </div>
          ))}
        </div>
      </main>
      <Cta />
    </>
  );
}
