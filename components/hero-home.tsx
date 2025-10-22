import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import { ReactNode } from "react";

type HeroProps = {
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  className?: string;
};

export default function HeroHome({
  title,
  description,
  actions,
  className,
}: HeroProps) {
  const defaultTitle = (
    <>
      Mel Davis
      <br className="max-lg:hidden" />
      Painter & Visual Artist
    </>
  );

  const defaultDescription = (
    <>New Orleans-based painter working in oil and mixed media. I create expressive, color-driven canvases inspired by music, memory, and the city's light. Commissions, original works, and prints available.</>
  );

  const defaultActions = (
    <>
      <a
        className="btn group mb-4 w-full bg-linear-to-t from-rose-600 to-pink-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
        href="/contact"
      >
        <span className="relative inline-flex items-center">
          Commission a Piece
          <span className="ml-1 tracking-normal text-pink-200 transition-transform group-hover:translate-x-0.5">
            -&gt;
          </span>
        </span>
      </a>
      <a
        className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
        href="/portfolio"
      >
        View Portfolio
      </a>
    </>
  );

  return (
    <section className={`relative ${className ?? ""}`}>
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              {title ?? defaultTitle}
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                {description ?? defaultDescription}
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  {actions ?? defaultActions}
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}

        </div>
      </div>
    </section>
  );
}
