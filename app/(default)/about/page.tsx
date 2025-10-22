export const metadata = {
  title: "About — Mel Davis",
  description: "About Mel Davis, a New Orleans-based painter working in oil and mixed media.",
};


import Hero from "@/components/hero-home";

export default function AboutPage() {
  return (
    <>
      <Hero
        title={<span>About Mel Davis</span>}
        description={
          <>
            Mel Davis is a painter based in New Orleans whose work explores
            color, memory, and the rhythms of music. Working primarily in oil
            and mixed media, Mel creates expressive canvases that balance
            abstraction and figuration. Mel's work has been shown in local
            galleries and small group exhibitions. Available for commissions,
            collaborations, and public art projects.
          </>
        }
      />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-28">
        <p className="mb-4 text-lg text-gray-700">
          Mel Davis is a painter based in New Orleans whose work explores color,
          memory, and the rhythms of music. Working primarily in oil and mixed
          media, Mel creates expressive canvases that balance abstraction and
          figuration.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          Mel's work has been shown in local galleries and small group
          exhibitions. Available for commissions, collaborations, and public
          art projects.
        </p>
      </main>
    </>
  );
}
