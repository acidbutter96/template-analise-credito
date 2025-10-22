export const metadata = {
  title: "Portfolio — Mel Davis",
  description: "Selected paintings and works by Mel Davis.",
};

import Hero from "@/components/hero-home";
import Cta from "@/components/cta";
import PortfolioGallery from "@/components/portfolio-gallery";

export default function PortfolioPage() {
  return (
    <>
      <Hero title={<span>Portfolio</span>} description={<span>A selection of recent paintings. Click an image to view details.</span>} />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-28">
        <p className="mb-6 text-gray-700">A selection of recent paintings. Click an image to view details.</p>

        <PortfolioGallery />
      </main>
      <Cta />
    </>
  );
}
