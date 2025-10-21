export const metadata = {
  title: "Services — Mel Davis",
  description: "Commissions, prints, and art services offered by Mel Davis.",
};

import Hero from "@/components/hero-home";
import Cta from "@/components/cta";

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-28">
        <h1 className="mb-4 text-4xl font-bold">Services</h1>
        <p className="mb-6 text-gray-700">Services offered by Mel Davis:</p>
        <ul className="mb-6 ml-6 list-disc text-gray-700 space-y-2">
          <li>
            <strong>Face Painting</strong> — Colorful, event-friendly designs for festivals, parties, and family events.
          </li>
          <li>
            <strong>Henna Tattoos</strong> — Traditional henna designs for ceremonies and celebrations (natural, semi-permanent).
          </li>
          <li>
            <strong>Glitter Tattoos</strong> — Sparkling, quick-apply glitter art perfect for kids' parties and promotional events.
          </li>
          <li>
            <strong>Murals</strong> — Site-specific murals for homes, businesses, and public spaces. Full design and installation available.
          </li>
          <li>
            <strong>Painting Classes</strong> — Group and private lessons for all levels, focusing on acrylic and mixed-media techniques.
          </li>
        </ul>
        <p className="text-gray-700">For pricing, availability, and bookings, please get in touch via the contact page or email <a className="text-gray-800" href="mailto:hello@meldavis.art">hello@meldavis.art</a>.</p>
      </main>
      <Cta />
    </>
  );
}
