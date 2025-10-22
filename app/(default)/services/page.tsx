export const metadata = {
  title: "Services — Mel Davis",
  description: "Commissions, prints, and art services offered by Mel Davis.",
};

import Hero from "@/components/hero-home";
import Cta from "@/components/cta";
import Link from "next/link";

const services = [
  {
    name: "Face Painting",
    slug: "face-painting",
    image: "avatar-01.jpg",
    desc: "Colorful, event-friendly designs for festivals, parties, and family events.",
  },
  {
    name: "Henna Tattoos",
    slug: "henna-tattoos",
    image: "avatar-02.jpg",
    desc: "Traditional henna designs for ceremonies and celebrations (natural, semi-permanent).",
  },
  {
    name: "Glitter Tattoos",
    slug: "glitter-tattoos",
    image: "avatar-03.jpg",
    desc: "Sparkling, quick-apply glitter art perfect for kids' parties and promotional events.",
  },
  {
    name: "Murals",
    slug: "murals",
    image: "planet.png",
    desc: "Site-specific murals for homes, businesses, and public spaces. Full design and installation available.",
  },
  {
    name: "Painting Classes",
    slug: "painting-classes",
    image: "large-testimonial.jpg",
    desc: "Group and private lessons for all levels, focusing on acrylic and mixed-media techniques.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title={<span>Services</span>}
        description={<span>Commissions, prints, and art services offered by Mel Davis.</span>}
      />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-28">
        <p className="mb-8 text-gray-700">Click a service to view examples and details.</p>

        {/* flex-wrap layout so each row's items are centered (last row centered too) */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group block w-full sm:w-[45%] md:w-[30%] max-w-xs overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition"
            >
              {/* Larger, centered images */}
              <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden flex items-center justify-center">
                <img
                  src={`/images/${s.image}`}
                  alt={s.name}
                  className="max-h-full max-w-full object-cover transform transition group-hover:scale-105"
                />
              </div>
              <div className="px-4 py-4 flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold text-gray-800">{s.name}</h3>
                <p className="sr-only">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-gray-700">
          For pricing, availability, and bookings, please get in touch via the contact page or email{' '}
          <a className="text-gray-800" href="mailto:hello@meldavis.art">
            hello@meldavis.art
          </a>
          .
        </p>
      </main>
    </>
  );
}
