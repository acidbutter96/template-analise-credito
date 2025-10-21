export const metadata = {
  title: "Contact — Mel Davis",
  description: "Contact Mel Davis for commissions, exhibitions, and prints.",
};

import Hero from "@/components/hero-home";
import Cta from "@/components/cta";

export default function ContactPage() {
  return (
    <>
      <Hero />
      <main className="mx-auto max-w-2xl px-4 sm:px-6 py-28">
        <h1 className="mb-4 text-4xl font-bold">Contact</h1>
        <p className="mb-6 text-gray-700">Interested in a commission or exhibition? Reach out:</p>

        <div className="mb-6">
          <p className="text-sm text-gray-600">Email</p>
          <a className="text-lg text-gray-800" href="mailto:hello@meldavis.art">hello@meldavis.art</a>
        </div>

        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-600">Quick message</p>
          <textarea className="mt-2 w-full rounded-md border-gray-200 p-2" rows={5} placeholder="Write a short message about your project or inquiry" />
          <div className="mt-3">
            <button className="btn bg-rose-600 text-white">Send</button>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-500">Note: This is a static template. To receive messages, connect the form to an email service or backend.</p>
      </main>
      <Cta />
    </>
  );
}
